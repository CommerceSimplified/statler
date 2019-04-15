import { envoy, google } from './processedproto/bundle';
import * as grpc from 'grpc';

/**
 * Manually implement a protoc style service descriptor.
 * Protobuf doesn't generate the correct code to interface with grpc.
 *
 * @type {{fetchRoutes: {path: string, responseType: envoy.api.v2.DiscoveryResponse, requestType: envoy.api.v2.DiscoveryRequest, responseStream: boolean, responseSerialize: (function(*=): Uint8Array), responseDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest), requestStream: boolean, requestSerialize: (function(*=): Uint8Array), requestDeserialize: (function(*=): envoy.api.v2.DiscoveryRequest)}}}
 */
const RouteDiscoveryService = {
    // Not sure when this one would ever be used.
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

let done = false;

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

        // const routeConfiguration = envoy.api.v2.RouteConfiguration.create(routeConfigPayload);
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

server.addService(RouteDiscoveryService, {
    fetchRoutes: fetchRoutes,
    streamRoutes: streamRoutes,
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
