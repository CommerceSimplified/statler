## Building Envoy xDS proto

Follow the Java Control Plane example for collecting all proto files:
https://github.com/envoyproxy/java-control-plane

### Script
https://github.com/envoyproxy/java-control-plane/blob/master/tools/update-api.sh

Which puts the files here:

https://github.com/envoyproxy/java-control-plane/tree/master/api/src/main/proto

## Compiling for node

	npm install -g grpc-tools
	
	cd $REPO_ROOT/api/src/main/proto
	
	grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:out \
	-I. \
	envoy/api/v2/*.proto \
	envoy/api/v2/core/*.proto \
	envoy/api/v2/route/*.proto \
	envoy/api/v2/auth/*.proto \
	envoy/api/v2/cluster/*.proto \
	envoy/type/*.proto \
	gogoproto/*.proto \
	google/api/*.proto \
	google/rpc/*.proto \
	validate/*.proto \
	--plugin=protoc-gen-grpc=/usr/local/bin/grpc_tools_node_protoc_plugin \
	--grpc_out=out