## Building Envoy xDS proto files

Follow the Java Control Plane example for collecting all proto files:
https://github.com/envoyproxy/java-control-plane

### Script
https://github.com/envoyproxy/java-control-plane/blob/master/tools/update-api.sh

Which puts the files here:

https://github.com/envoyproxy/java-control-plane/tree/master/api/src/main/proto

## Remove custom syntax

Lyft use https://github.com/envoyproxy/protoc-gen-validate
which supports custom "options" syntax for building validation classes from the source.

While `protoc` supports the syntax, no decent Javascript proto compiler does. So we alter the proto files by the following script:

	// Remove lyft validate messages
	docker run -it --entrypoint=/bin/sh -v `pwd`:/files hairyhenderson/sed
	
	find /files -type f -name "*.proto" -exec sed -i -r -s 's/option\s+\(validate\.required\).*;|\[\(validate\.rules\)[^]]+\]//' {} \;

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