import { envoy, google } from './processedproto/bundle';
import * as grpc from 'grpc';

/**
 * Manually implement a protoc style service descriptor.
 * Protobuf doesn't generate the correct code to interface with grpc.
 *
 * @type {{fetchRoutes: {path: string, responseType: envoy.api.v2.DiscoveryResponse, requestType: envoy.api.v2.DiscoveryRequest, responseStream: boolean, responseSerialize: (function(*=): Uint8Array), responseDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest), requestStream: boolean, requestSerialize: (function(*=): Uint8Array), requestDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest)}}}
 */
const RouteDiscoveryService = {
    // Probably use this with REST
    fetchRoutes: {
        path: '/envoy.api.v2.RouteDiscoveryService/FetchRoutes',
        requestStream: false,
        responseStream: false,
        requestType: envoy.api.v2.DiscoveryRequest,
        responseType: envoy.api.v2.DiscoveryResponse,
        requestSerialize: function(arg) { return envoy.api.v2.DiscoveryRequest.encode(arg).finish() },
        requestDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
        responseSerialize: function(arg) { return envoy.api.v2.DiscoveryResponse.encode(arg).finish() },
        responseDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
    },
    streamRoutes: {
        path: '/envoy.api.v2.RouteDiscoveryService/StreamRoutes',
        requestStream: true,
        responseStream: true,
        requestType: envoy.api.v2.DiscoveryRequest,
        responseType: envoy.api.v2.DiscoveryResponse,
        requestSerialize: function(arg) { return envoy.api.v2.DiscoveryRequest.encode(arg).finish() },
        requestDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
        responseSerialize: function(arg) { return envoy.api.v2.DiscoveryResponse.encode(arg).finish() },
        responseDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
    }
};


/**
 * @type {{path: string, responseType: envoy.api.v2.DiscoveryResponse, requestType: envoy.api.v2.DiscoveryRequest, responseStream: boolean, responseSerialize: (function(*=): Uint8Array), responseDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest), requestStream: boolean, requestSerialize: (function(*=): Uint8Array), requestDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest)}}
 */
const AggregatedDiscoveryService = {
    streamAggregatedResources: {
        path: '/envoy.service.discovery.v2.AggregatedDiscoveryService/StreamAggregatedResources',
        requestStream: true,
        responseStream: true,
        requestType: envoy.api.v2.DiscoveryRequest,
        responseType: envoy.api.v2.DiscoveryResponse,
        requestSerialize: function(arg) { return envoy.api.v2.DiscoveryRequest.encode(arg).finish() },
        requestDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
        responseSerialize: function(arg) { return envoy.api.v2.DiscoveryResponse.encode(arg).finish() },
        responseDeserialize: function(buffer_arg) { return envoy.api.v2.DiscoveryRequest.decode(buffer_arg) },
    }
};

let done = false;

/**
 * Packs message into an any type.
 * @param message
 * @param typeUrl
 * @returns {google.protobuf.Any}
 */
function packAny(message, typeUrl) {
    return new google.protobuf.Any({
        type_url: typeUrl,
        value: message.constructor.encode(message).finish()
    });
}


const clusters = [
    {
        name: 'service_google',
    }
];

/**
 * @param {envoy.api.v2.DiscoveryRequest} discoveryRequest
 */
function handleClusterDiscoveryRequest(discoveryRequest, call) {

    if (done) return;

    /**
     * @type {envoy.api.v2.core.INode}
     */
    const node = discoveryRequest.node;

    // The list of resource names the node is subscribing to (possibly empty).
    const resourceNames = discoveryRequest.resourceNames;

    // This is the important bit that lets us determine what Envoy is asking for.
    const typeURL = discoveryRequest.typeUrl;


    if (typeURL === 'type.googleapis.com/envoy.api.v2.Cluster') {

        let packedClusters = [];

        clusters.forEach(definition => {
            const cluster = envoy.api.v2.Cluster.fromObject({
                name: definition.name,
                type: 'EDS',
                // @todo: construct one of these durations properly.
                connectTimeout: { seconds: 1 },
                dnsLookupFamily: 'V4_ONLY',
                lbPolicy: 'ROUND_ROBIN',
                edsClusterConfig: {
                    edsConfig: {
                        ads: {},
                    },
                }
            });

            console.log( envoy.api.v2.Cluster.verify(cluster) );

            packedClusters.push(packAny(cluster, 'type.googleapis.com/envoy.api.v2.Cluster'));

            const encodedCluster = envoy.api.v2.Cluster.encode(cluster).finish();
            console.log(JSON.stringify(envoy.api.v2.Cluster.decode(encodedCluster).toJSON()));
        });

        const response = envoy.api.v2.DiscoveryResponse.create({
            versionInfo: '1',
            canary: false,
            typeUrl: 'type.googleapis.com/envoy.api.v2.Cluster',
            // Important: an array of packed clusters.
            resources: packedClusters
        });

        call.write(response);
        done = true;
    }
}

function streamAggregatedResources(call) {

    console.log('Initialising aggregated resources callback');

    call.on('data', /** @type envoy.api.v2.DiscoveryRequest */ discoveryRequest => {

        // @todo: Determine if ACK/NACK, look at `version` and `errorDetail`
        console.log("----- RECEIVED DISCOVERY REQUEST -----");
        console.log(discoveryRequest);

        handleClusterDiscoveryRequest(discoveryRequest, call);
    });
    call.on('end', function() {
        call.end();
    });
}


/**
 *
 * @param {Duplex} call - the call stream
 */
function streamRoutes(call) {


    call.on('data', /** @type envoy.api.v2.DiscoveryRequest */ discoveryRequest => {

        console.log('call received:');
        console.log(discoveryRequest);


        if (done) {
            return;
        }

        // The node making the request.
        const node = discoveryRequest.node;

        // The list of resource names the node is subscribing to.
        const resourceNames = discoveryRequest.resourceNames;

        const routeConfigPayload = {
            name: 'demo_route_config', // The requested route config name
            virtualHosts: [
                {
                    name: 'Google Proxy Virtual Host',
                    domains: ['*'],
                    routes: [
                        {
                            // Will route '/' on local to '/services' on google.
                            match: {
                                prefix: '/',
                            },
                            route: {
                                cluster: 'service_google',
                                hostRewrite: 'www.google.com',
                            },
                        },
                    ],
                },
            ]
        };

        const routeConfiguration = envoy.api.v2.RouteConfiguration.create(routeConfigPayload);
        // const encodedRouteConfig = envoy.api.v2.RouteConfiguration.encode(routeConfiguration).finish();
        // console.log(JSON.stringify(envoy.api.v2.RouteConfiguration.decode(encodedRouteConfig).toJSON()));

        const packedRouteConfiguration = packAny(routeConfiguration,'type.googleapis.com/envoy.api.v2.RouteConfiguration');

        let response = envoy.api.v2.DiscoveryResponse.create({
            versionInfo: '2',
            canary: false,
            // Envoy needs this to know what config it's receiving.
            typeUrl: 'type.googleapis.com/envoy.api.v2.RouteConfiguration',
            resources: [
                packedRouteConfiguration
            ],
        });

        console.log('sending response');
        console.log(response);

        const encoded = envoy.api.v2.DiscoveryResponse.encode(response).finish();
        console.log(JSON.stringify(envoy.api.v2.DiscoveryResponse.decode(encoded).toJSON()));

        // Send the response
        call.write(response);

        done = true;

    });
    call.on('end', function() {
        call.end();
    });
}

/**
 * Service implementation.
 * @param call
 * @param callback
 */
function fetchRoutes(call, callback) {

    console.log("\n");
    console.log(call);
    console.log("\n");

    const payload = {
       name: 'my_magic_route',
       virtualHosts: [
           {
               domains: ['*'],
               routes: [
                   {
                       match: {
                           prefix: '/',
                       },
                       route: {
                           cluster: 'some_service'
                       },
                   },
               ],
           },
       ]
    };

    const routeConfiguration = envoy.api.v2.RouteConfiguration.create(payload);

    // const encodedRouteConfig = envoy.api.v2.RouteConfiguration.encode(routeConfiguration).finish();
    // console.log(JSON.stringify(envoy.api.v2.RouteConfiguration.decode(encodedRouteConfig).toJSON()));

    const packedRouteConfiguration = packAny(routeConfiguration,'type.googleapis.com/envoy.api.v2.RouteConfiguration');

    let response = envoy.api.v2.DiscoveryResponse.create({
        versionInfo: '0',
        canary: false,
        resources: [
            packedRouteConfiguration
        ],
    });

    const encoded = envoy.api.v2.DiscoveryResponse.encode(response).finish();
    console.log(JSON.stringify(envoy.api.v2.DiscoveryResponse.decode(encoded).toJSON()));


    // console.log(JSON.stringify(envoy.api.v2.DiscoveryResponse.decode(encoded).toJSON()));

    callback(null, response);
}

const server = new grpc.Server();

/**
 * Register the aggregated discovery (ADS) gRPC service
 */
server.addService(AggregatedDiscoveryService, {
    streamAggregatedResources: streamAggregatedResources,
});

/**
 * Register the route discovery (RDS) gRPC service
 */
server.addService(RouteDiscoveryService, {
    fetchRoutes: fetchRoutes,
    streamRoutes: streamRoutes,
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
