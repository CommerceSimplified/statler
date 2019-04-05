// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_api_v2_rds_pb = require('../../../envoy/api/v2/rds_pb.js');
var envoy_api_v2_core_base_pb = require('../../../envoy/api/v2/core/base_pb.js');
var envoy_api_v2_discovery_pb = require('../../../envoy/api/v2/discovery_pb.js');
var envoy_api_v2_route_route_pb = require('../../../envoy/api/v2/route/route_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

function serialize_envoy_api_v2_DiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_IncrementalDiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.IncrementalDiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.IncrementalDiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_IncrementalDiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.IncrementalDiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_IncrementalDiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.IncrementalDiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.IncrementalDiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_IncrementalDiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.IncrementalDiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [#protodoc-title: HTTP route configuration]
// * Routing :ref:`architecture overview <arch_overview_http_routing>`
// * HTTP :ref:`router filter <config_http_filters_router>`
//
// The resource_names field in DiscoveryRequest specifies a route configuration.
// This allows an Envoy configuration with multiple HTTP listeners (and
// associated HTTP connection manager filters) to use different route
// configurations. Each listener will bind its HTTP connection manager filter to
// a route table via this identifier.
var RouteDiscoveryServiceService = exports.RouteDiscoveryServiceService = {
  streamRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/StreamRoutes',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
  incrementalRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/IncrementalRoutes',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.IncrementalDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.IncrementalDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_IncrementalDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_IncrementalDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_IncrementalDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_IncrementalDiscoveryResponse,
  },
  fetchRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/FetchRoutes',
    requestStream: false,
    responseStream: false,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
};

exports.RouteDiscoveryServiceClient = grpc.makeGenericClientConstructor(RouteDiscoveryServiceService);
