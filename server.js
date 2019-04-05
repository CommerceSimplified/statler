const protobuf = require('google-protobuf');

const rds_messages = require('./out/envoy/api/v2/rds_pb');
const rds_services = require('./out/envoy/api/v2/rds_grpc_pb');

const grpc = require('grpc');

const port = 50051;

function sayHello() {
    console.log('called');
}

function main() {
    var server = new grpc.Server();
    server.addService(rds_services.RouteDiscoveryServiceService, {
        streamRoutes: sayHello,
        incrementalRoutes: sayHello,
        fetchRoutes: sayHello,
    });
    server.bind('0.0.0.0:' + port, grpc.ServerCredentials.createInsecure());
    server.start();

    console.log('Listening on port ' + port);
}

main();
