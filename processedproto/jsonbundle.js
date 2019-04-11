/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  envoy: {
    nested: {
      admin: {
        nested: {
          v2alpha: {
            options: {
              java_outer_classname: "TapProto",
              java_multiple_files: true,
              java_package: "io.envoyproxy.envoy.admin.v2alpha"
            },
            nested: {
              Certificates: {
                fields: {
                  certificates: {
                    rule: "repeated",
                    type: "Certificate",
                    id: 1
                  }
                }
              },
              Certificate: {
                fields: {
                  caCert: {
                    rule: "repeated",
                    type: "CertificateDetails",
                    id: 1
                  },
                  certChain: {
                    rule: "repeated",
                    type: "CertificateDetails",
                    id: 2
                  }
                }
              },
              CertificateDetails: {
                fields: {
                  path: {
                    type: "string",
                    id: 1
                  },
                  serialNumber: {
                    type: "string",
                    id: 2
                  },
                  subjectAltNames: {
                    rule: "repeated",
                    type: "SubjectAlternateName",
                    id: 3
                  },
                  daysUntilExpiration: {
                    type: "uint64",
                    id: 4
                  },
                  validFrom: {
                    type: "google.protobuf.Timestamp",
                    id: 5
                  },
                  expirationTime: {
                    type: "google.protobuf.Timestamp",
                    id: 6
                  }
                }
              },
              SubjectAlternateName: {
                oneofs: {
                  name: {
                    oneof: [
                      "dns",
                      "uri"
                    ]
                  }
                },
                fields: {
                  dns: {
                    type: "string",
                    id: 1
                  },
                  uri: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Clusters: {
                fields: {
                  clusterStatuses: {
                    rule: "repeated",
                    type: "ClusterStatus",
                    id: 1
                  }
                }
              },
              ClusterStatus: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  addedViaApi: {
                    type: "bool",
                    id: 2
                  },
                  successRateEjectionThreshold: {
                    type: "envoy.type.Percent",
                    id: 3
                  },
                  hostStatuses: {
                    rule: "repeated",
                    type: "HostStatus",
                    id: 4
                  }
                }
              },
              HostStatus: {
                fields: {
                  address: {
                    type: "envoy.api.v2.core.Address",
                    id: 1
                  },
                  stats: {
                    rule: "repeated",
                    type: "SimpleMetric",
                    id: 2
                  },
                  healthStatus: {
                    type: "HostHealthStatus",
                    id: 3
                  },
                  successRate: {
                    type: "envoy.type.Percent",
                    id: 4
                  },
                  weight: {
                    type: "uint32",
                    id: 5
                  }
                }
              },
              HostHealthStatus: {
                fields: {
                  failedActiveHealthCheck: {
                    type: "bool",
                    id: 1
                  },
                  failedOutlierCheck: {
                    type: "bool",
                    id: 2
                  },
                  failedActiveDegradedCheck: {
                    type: "bool",
                    id: 4
                  },
                  edsHealthStatus: {
                    type: "envoy.api.v2.core.HealthStatus",
                    id: 3
                  }
                }
              },
              SimpleMetric: {
                fields: {
                  type: {
                    type: "Type",
                    id: 1
                  },
                  value: {
                    type: "uint64",
                    id: 2
                  },
                  name: {
                    type: "string",
                    id: 3
                  }
                },
                nested: {
                  Type: {
                    values: {
                      COUNTER: 0,
                      GAUGE: 1
                    }
                  }
                }
              },
              ConfigDump: {
                fields: {
                  configs: {
                    rule: "repeated",
                    type: "google.protobuf.Any",
                    id: 1
                  }
                }
              },
              BootstrapConfigDump: {
                fields: {
                  bootstrap: {
                    type: "envoy.config.bootstrap.v2.Bootstrap",
                    id: 1
                  },
                  lastUpdated: {
                    type: "google.protobuf.Timestamp",
                    id: 2
                  }
                }
              },
              ListenersConfigDump: {
                fields: {
                  versionInfo: {
                    type: "string",
                    id: 1
                  },
                  staticListeners: {
                    rule: "repeated",
                    type: "StaticListener",
                    id: 2
                  },
                  dynamicActiveListeners: {
                    rule: "repeated",
                    type: "DynamicListener",
                    id: 3
                  },
                  dynamicWarmingListeners: {
                    rule: "repeated",
                    type: "DynamicListener",
                    id: 4
                  },
                  dynamicDrainingListeners: {
                    rule: "repeated",
                    type: "DynamicListener",
                    id: 5
                  }
                },
                nested: {
                  StaticListener: {
                    fields: {
                      listener: {
                        type: "envoy.api.v2.Listener",
                        id: 1
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 2
                      }
                    }
                  },
                  DynamicListener: {
                    fields: {
                      versionInfo: {
                        type: "string",
                        id: 1
                      },
                      listener: {
                        type: "envoy.api.v2.Listener",
                        id: 2
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 3
                      }
                    }
                  }
                }
              },
              ClustersConfigDump: {
                fields: {
                  versionInfo: {
                    type: "string",
                    id: 1
                  },
                  staticClusters: {
                    rule: "repeated",
                    type: "StaticCluster",
                    id: 2
                  },
                  dynamicActiveClusters: {
                    rule: "repeated",
                    type: "DynamicCluster",
                    id: 3
                  },
                  dynamicWarmingClusters: {
                    rule: "repeated",
                    type: "DynamicCluster",
                    id: 4
                  }
                },
                nested: {
                  StaticCluster: {
                    fields: {
                      cluster: {
                        type: "envoy.api.v2.Cluster",
                        id: 1
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 2
                      }
                    }
                  },
                  DynamicCluster: {
                    fields: {
                      versionInfo: {
                        type: "string",
                        id: 1
                      },
                      cluster: {
                        type: "envoy.api.v2.Cluster",
                        id: 2
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 3
                      }
                    }
                  }
                }
              },
              RoutesConfigDump: {
                fields: {
                  staticRouteConfigs: {
                    rule: "repeated",
                    type: "StaticRouteConfig",
                    id: 2
                  },
                  dynamicRouteConfigs: {
                    rule: "repeated",
                    type: "DynamicRouteConfig",
                    id: 3
                  }
                },
                nested: {
                  StaticRouteConfig: {
                    fields: {
                      routeConfig: {
                        type: "envoy.api.v2.RouteConfiguration",
                        id: 1
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 2
                      }
                    }
                  },
                  DynamicRouteConfig: {
                    fields: {
                      versionInfo: {
                        type: "string",
                        id: 1
                      },
                      routeConfig: {
                        type: "envoy.api.v2.RouteConfiguration",
                        id: 2
                      },
                      lastUpdated: {
                        type: "google.protobuf.Timestamp",
                        id: 3
                      }
                    }
                  }
                }
              },
              Memory: {
                fields: {
                  allocated: {
                    type: "uint64",
                    id: 1
                  },
                  heapSize: {
                    type: "uint64",
                    id: 2
                  },
                  pageheapUnmapped: {
                    type: "uint64",
                    id: 3
                  },
                  pageheapFree: {
                    type: "uint64",
                    id: 4
                  },
                  totalThreadCache: {
                    type: "uint64",
                    id: 5
                  }
                }
              },
              MutexStats: {
                fields: {
                  numContentions: {
                    type: "uint64",
                    id: 1
                  },
                  currentWaitCycles: {
                    type: "uint64",
                    id: 2
                  },
                  lifetimeWaitCycles: {
                    type: "uint64",
                    id: 3
                  }
                }
              },
              ServerInfo: {
                fields: {
                  version: {
                    type: "string",
                    id: 1
                  },
                  state: {
                    type: "State",
                    id: 2
                  },
                  uptimeCurrentEpoch: {
                    type: "google.protobuf.Duration",
                    id: 3
                  },
                  uptimeAllEpochs: {
                    type: "google.protobuf.Duration",
                    id: 4
                  },
                  commandLineOptions: {
                    type: "CommandLineOptions",
                    id: 6
                  }
                },
                nested: {
                  State: {
                    values: {
                      LIVE: 0,
                      DRAINING: 1,
                      PRE_INITIALIZING: 2,
                      INITIALIZING: 3
                    }
                  }
                }
              },
              CommandLineOptions: {
                fields: {
                  baseId: {
                    type: "uint64",
                    id: 1
                  },
                  concurrency: {
                    type: "uint32",
                    id: 2
                  },
                  configPath: {
                    type: "string",
                    id: 3
                  },
                  configYaml: {
                    type: "string",
                    id: 4
                  },
                  allowUnknownFields: {
                    type: "bool",
                    id: 5
                  },
                  adminAddressPath: {
                    type: "string",
                    id: 6
                  },
                  localAddressIpVersion: {
                    type: "IpVersion",
                    id: 7
                  },
                  logLevel: {
                    type: "string",
                    id: 8
                  },
                  componentLogLevel: {
                    type: "string",
                    id: 9
                  },
                  logFormat: {
                    type: "string",
                    id: 10
                  },
                  logPath: {
                    type: "string",
                    id: 11
                  },
                  hotRestartVersion: {
                    type: "bool",
                    id: 12
                  },
                  serviceCluster: {
                    type: "string",
                    id: 13
                  },
                  serviceNode: {
                    type: "string",
                    id: 14
                  },
                  serviceZone: {
                    type: "string",
                    id: 15
                  },
                  fileFlushInterval: {
                    type: "google.protobuf.Duration",
                    id: 16
                  },
                  drainTime: {
                    type: "google.protobuf.Duration",
                    id: 17
                  },
                  parentShutdownTime: {
                    type: "google.protobuf.Duration",
                    id: 18
                  },
                  mode: {
                    type: "Mode",
                    id: 19
                  },
                  maxStats: {
                    type: "uint64",
                    id: 20
                  },
                  maxObjNameLen: {
                    type: "uint64",
                    id: 21
                  },
                  disableHotRestart: {
                    type: "bool",
                    id: 22
                  },
                  enableMutexTracing: {
                    type: "bool",
                    id: 23
                  },
                  restartEpoch: {
                    type: "uint32",
                    id: 24
                  }
                },
                nested: {
                  IpVersion: {
                    values: {
                      v4: 0,
                      v6: 1
                    }
                  },
                  Mode: {
                    values: {
                      Serve: 0,
                      Validate: 1,
                      InitOnly: 2
                    }
                  }
                }
              },
              TapRequest: {
                fields: {
                  configId: {
                    type: "string",
                    id: 1
                  },
                  tapConfig: {
                    type: "service.tap.v2alpha.TapConfig",
                    id: 2
                  }
                }
              }
            }
          }
        }
      },
      api: {
        nested: {
          v2: {
            options: {
              java_outer_classname: "RdsProto",
              java_multiple_files: true,
              java_package: "io.envoyproxy.envoy.api.v2",
              java_generic_services: true,
              "(gogoproto.equal_all)": true,
              go_package: "v2"
            },
            nested: {
              core: {
                options: {
                  java_outer_classname: "HttpUriProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.core",
                  "(gogoproto.equal_all)": true,
                  go_package: "core"
                },
                nested: {
                  Pipe: {
                    fields: {
                      path: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  SocketAddress: {
                    oneofs: {
                      portSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "portValue",
                          "namedPort"
                        ]
                      }
                    },
                    fields: {
                      protocol: {
                        type: "Protocol",
                        id: 1
                      },
                      address: {
                        type: "string",
                        id: 2
                      },
                      portValue: {
                        type: "uint32",
                        id: 3
                      },
                      namedPort: {
                        type: "string",
                        id: 4
                      },
                      resolverName: {
                        type: "string",
                        id: 5
                      },
                      ipv4Compat: {
                        type: "bool",
                        id: 6
                      }
                    },
                    nested: {
                      Protocol: {
                        options: {
                          "(gogoproto.goproto_enum_prefix)": false
                        },
                        values: {
                          TCP: 0,
                          UDP: 1
                        }
                      }
                    }
                  },
                  TcpKeepalive: {
                    fields: {
                      keepaliveProbes: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      keepaliveTime: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      },
                      keepaliveInterval: {
                        type: "google.protobuf.UInt32Value",
                        id: 3
                      }
                    }
                  },
                  BindConfig: {
                    fields: {
                      sourceAddress: {
                        type: "SocketAddress",
                        id: 1
                      },
                      freebind: {
                        type: "google.protobuf.BoolValue",
                        id: 2
                      },
                      socketOptions: {
                        rule: "repeated",
                        type: "SocketOption",
                        id: 3
                      }
                    }
                  },
                  Address: {
                    oneofs: {
                      address: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "socketAddress",
                          "pipe"
                        ]
                      }
                    },
                    fields: {
                      socketAddress: {
                        type: "SocketAddress",
                        id: 1
                      },
                      pipe: {
                        type: "Pipe",
                        id: 2
                      }
                    }
                  },
                  CidrRange: {
                    fields: {
                      addressPrefix: {
                        type: "string",
                        id: 1
                      },
                      prefixLen: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      }
                    }
                  },
                  Locality: {
                    fields: {
                      region: {
                        type: "string",
                        id: 1
                      },
                      zone: {
                        type: "string",
                        id: 2
                      },
                      subZone: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Node: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      cluster: {
                        type: "string",
                        id: 2
                      },
                      metadata: {
                        type: "google.protobuf.Struct",
                        id: 3
                      },
                      locality: {
                        type: "Locality",
                        id: 4
                      },
                      buildVersion: {
                        type: "string",
                        id: 5
                      }
                    }
                  },
                  Metadata: {
                    fields: {
                      filterMetadata: {
                        keyType: "string",
                        type: "google.protobuf.Struct",
                        id: 1
                      }
                    }
                  },
                  RuntimeUInt32: {
                    fields: {
                      defaultValue: {
                        type: "uint32",
                        id: 2
                      },
                      runtimeKey: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  RoutingPriority: {
                    values: {
                      DEFAULT: 0,
                      HIGH: 1
                    }
                  },
                  RequestMethod: {
                    options: {
                      "(gogoproto.goproto_enum_prefix)": false
                    },
                    values: {
                      METHOD_UNSPECIFIED: 0,
                      GET: 1,
                      HEAD: 2,
                      POST: 3,
                      PUT: 4,
                      DELETE: 5,
                      CONNECT: 6,
                      OPTIONS: 7,
                      TRACE: 8
                    }
                  },
                  HeaderValue: {
                    fields: {
                      key: {
                        type: "string",
                        id: 1
                      },
                      value: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  HeaderValueOption: {
                    fields: {
                      header: {
                        type: "HeaderValue",
                        id: 1
                      },
                      append: {
                        type: "google.protobuf.BoolValue",
                        id: 2
                      }
                    }
                  },
                  DataSource: {
                    oneofs: {
                      specifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "filename",
                          "inlineBytes",
                          "inlineString"
                        ]
                      }
                    },
                    fields: {
                      filename: {
                        type: "string",
                        id: 1
                      },
                      inlineBytes: {
                        type: "bytes",
                        id: 2
                      },
                      inlineString: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  TransportSocket: {
                    oneofs: {
                      configType: {
                        oneof: [
                          "config",
                          "typedConfig"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      typedConfig: {
                        type: "google.protobuf.Any",
                        id: 3
                      }
                    }
                  },
                  SocketOption: {
                    oneofs: {
                      value: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "intValue",
                          "bufValue"
                        ]
                      }
                    },
                    fields: {
                      description: {
                        type: "string",
                        id: 1
                      },
                      level: {
                        type: "int64",
                        id: 2
                      },
                      name: {
                        type: "int64",
                        id: 3
                      },
                      intValue: {
                        type: "int64",
                        id: 4
                      },
                      bufValue: {
                        type: "bytes",
                        id: 5
                      },
                      state: {
                        type: "SocketState",
                        id: 6
                      }
                    },
                    nested: {
                      SocketState: {
                        options: {
                          "(gogoproto.goproto_enum_prefix)": false
                        },
                        values: {
                          STATE_PREBIND: 0,
                          STATE_BOUND: 1,
                          STATE_LISTENING: 2
                        }
                      }
                    }
                  },
                  RuntimeFractionalPercent: {
                    fields: {
                      defaultValue: {
                        type: "envoy.type.FractionalPercent",
                        id: 1
                      },
                      runtimeKey: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  HealthCheck: {
                    oneofs: {
                      healthChecker: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "httpHealthCheck",
                          "tcpHealthCheck",
                          "grpcHealthCheck",
                          "customHealthCheck"
                        ]
                      }
                    },
                    fields: {
                      timeout: {
                        type: "google.protobuf.Duration",
                        id: 1,
                        options: {
                          "(validate.rules).duration.required": true,
                          "(validate.rules).duration.gt.seconds": 0,
                          "(gogoproto.stdduration)": true
                        }
                      },
                      interval: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(validate.rules).duration.required": true,
                          "(validate.rules).duration.gt.seconds": 0,
                          "(gogoproto.stdduration)": true
                        }
                      },
                      intervalJitter: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      intervalJitterPercent: {
                        type: "uint32",
                        id: 18
                      },
                      unhealthyThreshold: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      },
                      healthyThreshold: {
                        type: "google.protobuf.UInt32Value",
                        id: 5
                      },
                      altPort: {
                        type: "google.protobuf.UInt32Value",
                        id: 6
                      },
                      reuseConnection: {
                        type: "google.protobuf.BoolValue",
                        id: 7
                      },
                      httpHealthCheck: {
                        type: "HttpHealthCheck",
                        id: 8
                      },
                      tcpHealthCheck: {
                        type: "TcpHealthCheck",
                        id: 9
                      },
                      grpcHealthCheck: {
                        type: "GrpcHealthCheck",
                        id: 11
                      },
                      customHealthCheck: {
                        type: "CustomHealthCheck",
                        id: 13
                      },
                      noTrafficInterval: {
                        type: "google.protobuf.Duration",
                        id: 12
                      },
                      unhealthyInterval: {
                        type: "google.protobuf.Duration",
                        id: 14
                      },
                      unhealthyEdgeInterval: {
                        type: "google.protobuf.Duration",
                        id: 15
                      },
                      healthyEdgeInterval: {
                        type: "google.protobuf.Duration",
                        id: 16
                      },
                      eventLogPath: {
                        type: "string",
                        id: 17
                      },
                      alwaysLogHealthCheckFailures: {
                        type: "bool",
                        id: 19
                      }
                    },
                    reserved: [
                      [
                        10,
                        10
                      ],
                      "redis_health_check"
                    ],
                    nested: {
                      Payload: {
                        oneofs: {
                          payload: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "text",
                              "binary"
                            ]
                          }
                        },
                        fields: {
                          text: {
                            type: "string",
                            id: 1
                          },
                          binary: {
                            type: "bytes",
                            id: 2
                          }
                        }
                      },
                      HttpHealthCheck: {
                        fields: {
                          host: {
                            type: "string",
                            id: 1
                          },
                          path: {
                            type: "string",
                            id: 2
                          },
                          send: {
                            type: "Payload",
                            id: 3
                          },
                          receive: {
                            type: "Payload",
                            id: 4
                          },
                          serviceName: {
                            type: "string",
                            id: 5
                          },
                          requestHeadersToAdd: {
                            rule: "repeated",
                            type: "core.HeaderValueOption",
                            id: 6
                          },
                          requestHeadersToRemove: {
                            rule: "repeated",
                            type: "string",
                            id: 8
                          },
                          useHttp2: {
                            type: "bool",
                            id: 7
                          }
                        }
                      },
                      TcpHealthCheck: {
                        fields: {
                          send: {
                            type: "Payload",
                            id: 1
                          },
                          receive: {
                            rule: "repeated",
                            type: "Payload",
                            id: 2
                          }
                        }
                      },
                      RedisHealthCheck: {
                        fields: {
                          key: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      GrpcHealthCheck: {
                        fields: {
                          serviceName: {
                            type: "string",
                            id: 1
                          },
                          authority: {
                            type: "string",
                            id: 2
                          }
                        }
                      },
                      CustomHealthCheck: {
                        oneofs: {
                          configType: {
                            oneof: [
                              "config",
                              "typedConfig"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 2,
                            options: {
                              deprecated: true
                            }
                          },
                          typedConfig: {
                            type: "google.protobuf.Any",
                            id: 3
                          }
                        }
                      }
                    }
                  },
                  HealthStatus: {
                    values: {
                      UNKNOWN: 0,
                      HEALTHY: 1,
                      UNHEALTHY: 2,
                      DRAINING: 3,
                      TIMEOUT: 4
                    }
                  },
                  ApiConfigSource: {
                    fields: {
                      apiType: {
                        type: "ApiType",
                        id: 1
                      },
                      clusterNames: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      grpcServices: {
                        rule: "repeated",
                        type: "GrpcService",
                        id: 4
                      },
                      refreshDelay: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      requestTimeout: {
                        type: "google.protobuf.Duration",
                        id: 5
                      },
                      rateLimitSettings: {
                        type: "RateLimitSettings",
                        id: 6
                      }
                    },
                    nested: {
                      ApiType: {
                        values: {
                          UNSUPPORTED_REST_LEGACY: 0,
                          REST: 1,
                          GRPC: 2
                        }
                      }
                    }
                  },
                  AggregatedConfigSource: {
                    fields: {}
                  },
                  RateLimitSettings: {
                    fields: {
                      maxTokens: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      fillRate: {
                        type: "google.protobuf.DoubleValue",
                        id: 2
                      }
                    }
                  },
                  ConfigSource: {
                    oneofs: {
                      configSourceSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "path",
                          "apiConfigSource",
                          "ads"
                        ]
                      }
                    },
                    fields: {
                      path: {
                        type: "string",
                        id: 1
                      },
                      apiConfigSource: {
                        type: "ApiConfigSource",
                        id: 2
                      },
                      ads: {
                        type: "AggregatedConfigSource",
                        id: 3
                      }
                    }
                  },
                  GrpcService: {
                    oneofs: {
                      targetSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "envoyGrpc",
                          "googleGrpc"
                        ]
                      }
                    },
                    fields: {
                      envoyGrpc: {
                        type: "EnvoyGrpc",
                        id: 1
                      },
                      googleGrpc: {
                        type: "GoogleGrpc",
                        id: 2
                      },
                      timeout: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      initialMetadata: {
                        rule: "repeated",
                        type: "HeaderValue",
                        id: 5
                      }
                    },
                    reserved: [
                      [
                        4,
                        4
                      ]
                    ],
                    nested: {
                      EnvoyGrpc: {
                        fields: {
                          clusterName: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      GoogleGrpc: {
                        fields: {
                          targetUri: {
                            type: "string",
                            id: 1
                          },
                          channelCredentials: {
                            type: "ChannelCredentials",
                            id: 2
                          },
                          callCredentials: {
                            rule: "repeated",
                            type: "CallCredentials",
                            id: 3
                          },
                          statPrefix: {
                            type: "string",
                            id: 4
                          },
                          credentialsFactoryName: {
                            type: "string",
                            id: 5
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 6
                          }
                        },
                        nested: {
                          SslCredentials: {
                            fields: {
                              rootCerts: {
                                type: "DataSource",
                                id: 1
                              },
                              privateKey: {
                                type: "DataSource",
                                id: 2
                              },
                              certChain: {
                                type: "DataSource",
                                id: 3
                              }
                            }
                          },
                          GoogleLocalCredentials: {
                            fields: {}
                          },
                          ChannelCredentials: {
                            oneofs: {
                              credentialSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "sslCredentials",
                                  "googleDefault",
                                  "localCredentials"
                                ]
                              }
                            },
                            fields: {
                              sslCredentials: {
                                type: "SslCredentials",
                                id: 1
                              },
                              googleDefault: {
                                type: "google.protobuf.Empty",
                                id: 2
                              },
                              localCredentials: {
                                type: "GoogleLocalCredentials",
                                id: 3
                              }
                            }
                          },
                          CallCredentials: {
                            oneofs: {
                              credentialSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "accessToken",
                                  "googleComputeEngine",
                                  "googleRefreshToken",
                                  "serviceAccountJwtAccess",
                                  "googleIam",
                                  "fromPlugin"
                                ]
                              }
                            },
                            fields: {
                              accessToken: {
                                type: "string",
                                id: 1
                              },
                              googleComputeEngine: {
                                type: "google.protobuf.Empty",
                                id: 2
                              },
                              googleRefreshToken: {
                                type: "string",
                                id: 3
                              },
                              serviceAccountJwtAccess: {
                                type: "ServiceAccountJWTAccessCredentials",
                                id: 4
                              },
                              googleIam: {
                                type: "GoogleIAMCredentials",
                                id: 5
                              },
                              fromPlugin: {
                                type: "MetadataCredentialsFromPlugin",
                                id: 6
                              }
                            },
                            nested: {
                              ServiceAccountJWTAccessCredentials: {
                                fields: {
                                  jsonKey: {
                                    type: "string",
                                    id: 1
                                  },
                                  tokenLifetimeSeconds: {
                                    type: "uint64",
                                    id: 2
                                  }
                                }
                              },
                              GoogleIAMCredentials: {
                                fields: {
                                  authorizationToken: {
                                    type: "string",
                                    id: 1
                                  },
                                  authoritySelector: {
                                    type: "string",
                                    id: 2
                                  }
                                }
                              },
                              MetadataCredentialsFromPlugin: {
                                oneofs: {
                                  configType: {
                                    oneof: [
                                      "config",
                                      "typedConfig"
                                    ]
                                  }
                                },
                                fields: {
                                  name: {
                                    type: "string",
                                    id: 1
                                  },
                                  config: {
                                    type: "google.protobuf.Struct",
                                    id: 2,
                                    options: {
                                      deprecated: true
                                    }
                                  },
                                  typedConfig: {
                                    type: "google.protobuf.Any",
                                    id: 3
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  TcpProtocolOptions: {
                    fields: {}
                  },
                  HttpProtocolOptions: {
                    fields: {
                      idleTimeout: {
                        type: "google.protobuf.Duration",
                        id: 1
                      }
                    }
                  },
                  Http1ProtocolOptions: {
                    fields: {
                      allowAbsoluteUrl: {
                        type: "google.protobuf.BoolValue",
                        id: 1
                      },
                      acceptHttp_10: {
                        type: "bool",
                        id: 2
                      },
                      defaultHostForHttp_10: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Http2ProtocolOptions: {
                    fields: {
                      hpackTableSize: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      maxConcurrentStreams: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      },
                      initialStreamWindowSize: {
                        type: "google.protobuf.UInt32Value",
                        id: 3
                      },
                      initialConnectionWindowSize: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      },
                      allowConnect: {
                        type: "bool",
                        id: 5
                      },
                      allowMetadata: {
                        type: "bool",
                        id: 6
                      }
                    }
                  },
                  GrpcProtocolOptions: {
                    fields: {
                      http2ProtocolOptions: {
                        type: "Http2ProtocolOptions",
                        id: 1
                      }
                    }
                  },
                  HttpUri: {
                    oneofs: {
                      httpUpstreamType: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "cluster"
                        ]
                      }
                    },
                    fields: {
                      uri: {
                        type: "string",
                        id: 1
                      },
                      cluster: {
                        type: "string",
                        id: 2
                      },
                      timeout: {
                        type: "google.protobuf.Duration",
                        id: 3
                      }
                    }
                  }
                }
              },
              ClusterDiscoveryService: {
                methods: {
                  StreamClusters: {
                    requestType: "DiscoveryRequest",
                    requestStream: true,
                    responseType: "DiscoveryResponse",
                    responseStream: true
                  },
                  IncrementalClusters: {
                    requestType: "IncrementalDiscoveryRequest",
                    requestStream: true,
                    responseType: "IncrementalDiscoveryResponse",
                    responseStream: true
                  },
                  FetchClusters: {
                    requestType: "DiscoveryRequest",
                    responseType: "DiscoveryResponse",
                    options: {
                      "(google.api.http).post": "/v2/discovery:clusters",
                      "(google.api.http).body": "*"
                    }
                  }
                }
              },
              Cluster: {
                oneofs: {
                  lbConfig: {
                    oneof: [
                      "ringHashLbConfig",
                      "originalDstLbConfig",
                      "leastRequestLbConfig"
                    ]
                  }
                },
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  altStatName: {
                    type: "string",
                    id: 28
                  },
                  type: {
                    type: "DiscoveryType",
                    id: 2
                  },
                  edsClusterConfig: {
                    type: "EdsClusterConfig",
                    id: 3
                  },
                  connectTimeout: {
                    type: "google.protobuf.Duration",
                    id: 4
                  },
                  perConnectionBufferLimitBytes: {
                    type: "google.protobuf.UInt32Value",
                    id: 5
                  },
                  lbPolicy: {
                    type: "LbPolicy",
                    id: 6
                  },
                  hosts: {
                    rule: "repeated",
                    type: "core.Address",
                    id: 7,
                    options: {
                      deprecated: true
                    }
                  },
                  loadAssignment: {
                    type: "ClusterLoadAssignment",
                    id: 33
                  },
                  healthChecks: {
                    rule: "repeated",
                    type: "core.HealthCheck",
                    id: 8
                  },
                  maxRequestsPerConnection: {
                    type: "google.protobuf.UInt32Value",
                    id: 9
                  },
                  circuitBreakers: {
                    type: "cluster.CircuitBreakers",
                    id: 10
                  },
                  tlsContext: {
                    type: "auth.UpstreamTlsContext",
                    id: 11
                  },
                  commonHttpProtocolOptions: {
                    type: "core.HttpProtocolOptions",
                    id: 29
                  },
                  httpProtocolOptions: {
                    type: "core.Http1ProtocolOptions",
                    id: 13
                  },
                  http2ProtocolOptions: {
                    type: "core.Http2ProtocolOptions",
                    id: 14
                  },
                  extensionProtocolOptions: {
                    keyType: "string",
                    type: "google.protobuf.Struct",
                    id: 35,
                    options: {
                      deprecated: true
                    }
                  },
                  typedExtensionProtocolOptions: {
                    keyType: "string",
                    type: "google.protobuf.Any",
                    id: 36
                  },
                  dnsRefreshRate: {
                    type: "google.protobuf.Duration",
                    id: 16
                  },
                  dnsLookupFamily: {
                    type: "DnsLookupFamily",
                    id: 17
                  },
                  dnsResolvers: {
                    rule: "repeated",
                    type: "core.Address",
                    id: 18
                  },
                  outlierDetection: {
                    type: "cluster.OutlierDetection",
                    id: 19
                  },
                  cleanupInterval: {
                    type: "google.protobuf.Duration",
                    id: 20
                  },
                  upstreamBindConfig: {
                    type: "core.BindConfig",
                    id: 21
                  },
                  lbSubsetConfig: {
                    type: "LbSubsetConfig",
                    id: 22
                  },
                  ringHashLbConfig: {
                    type: "RingHashLbConfig",
                    id: 23
                  },
                  originalDstLbConfig: {
                    type: "OriginalDstLbConfig",
                    id: 34
                  },
                  leastRequestLbConfig: {
                    type: "LeastRequestLbConfig",
                    id: 37
                  },
                  commonLbConfig: {
                    type: "CommonLbConfig",
                    id: 27
                  },
                  transportSocket: {
                    type: "core.TransportSocket",
                    id: 24
                  },
                  metadata: {
                    type: "core.Metadata",
                    id: 25
                  },
                  protocolSelection: {
                    type: "ClusterProtocolSelection",
                    id: 26
                  },
                  upstreamConnectionOptions: {
                    type: "envoy.api.v2.UpstreamConnectionOptions",
                    id: 30
                  },
                  closeConnectionsOnHostHealthFailure: {
                    type: "bool",
                    id: 31
                  },
                  drainConnectionsOnHostRemoval: {
                    type: "bool",
                    id: 32
                  }
                },
                reserved: [
                  [
                    12,
                    12
                  ],
                  [
                    15,
                    15
                  ]
                ],
                nested: {
                  DiscoveryType: {
                    values: {
                      STATIC: 0,
                      STRICT_DNS: 1,
                      LOGICAL_DNS: 2,
                      EDS: 3,
                      ORIGINAL_DST: 4
                    }
                  },
                  EdsClusterConfig: {
                    fields: {
                      edsConfig: {
                        type: "core.ConfigSource",
                        id: 1
                      },
                      serviceName: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  LbPolicy: {
                    values: {
                      ROUND_ROBIN: 0,
                      LEAST_REQUEST: 1,
                      RING_HASH: 2,
                      RANDOM: 3,
                      ORIGINAL_DST_LB: 4,
                      MAGLEV: 5
                    }
                  },
                  DnsLookupFamily: {
                    values: {
                      AUTO: 0,
                      V4_ONLY: 1,
                      V6_ONLY: 2
                    }
                  },
                  LbSubsetConfig: {
                    fields: {
                      fallbackPolicy: {
                        type: "LbSubsetFallbackPolicy",
                        id: 1
                      },
                      defaultSubset: {
                        type: "google.protobuf.Struct",
                        id: 2
                      },
                      subsetSelectors: {
                        rule: "repeated",
                        type: "LbSubsetSelector",
                        id: 3
                      },
                      localityWeightAware: {
                        type: "bool",
                        id: 4
                      },
                      scaleLocalityWeight: {
                        type: "bool",
                        id: 5
                      }
                    },
                    nested: {
                      LbSubsetFallbackPolicy: {
                        values: {
                          NO_FALLBACK: 0,
                          ANY_ENDPOINT: 1,
                          DEFAULT_SUBSET: 2
                        }
                      },
                      LbSubsetSelector: {
                        fields: {
                          keys: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  LeastRequestLbConfig: {
                    fields: {
                      choiceCount: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      }
                    }
                  },
                  RingHashLbConfig: {
                    fields: {
                      minimumRingSize: {
                        type: "google.protobuf.UInt64Value",
                        id: 1
                      },
                      deprecatedV1: {
                        type: "DeprecatedV1",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      hashFunction: {
                        type: "HashFunction",
                        id: 3
                      }
                    },
                    nested: {
                      DeprecatedV1: {
                        fields: {
                          useStdHash: {
                            type: "google.protobuf.BoolValue",
                            id: 1
                          }
                        }
                      },
                      HashFunction: {
                        values: {
                          XX_HASH: 0,
                          MURMUR_HASH_2: 1
                        }
                      }
                    }
                  },
                  OriginalDstLbConfig: {
                    fields: {
                      useHttpHeader: {
                        type: "bool",
                        id: 1
                      }
                    }
                  },
                  CommonLbConfig: {
                    oneofs: {
                      localityConfigSpecifier: {
                        oneof: [
                          "zoneAwareLbConfig",
                          "localityWeightedLbConfig"
                        ]
                      }
                    },
                    fields: {
                      healthyPanicThreshold: {
                        type: "envoy.type.Percent",
                        id: 1
                      },
                      zoneAwareLbConfig: {
                        type: "ZoneAwareLbConfig",
                        id: 2
                      },
                      localityWeightedLbConfig: {
                        type: "LocalityWeightedLbConfig",
                        id: 3
                      },
                      updateMergeWindow: {
                        type: "google.protobuf.Duration",
                        id: 4
                      }
                    },
                    nested: {
                      ZoneAwareLbConfig: {
                        fields: {
                          routingEnabled: {
                            type: "envoy.type.Percent",
                            id: 1
                          },
                          minClusterSize: {
                            type: "google.protobuf.UInt64Value",
                            id: 2
                          }
                        }
                      },
                      LocalityWeightedLbConfig: {
                        fields: {}
                      }
                    }
                  },
                  ClusterProtocolSelection: {
                    values: {
                      USE_CONFIGURED_PROTOCOL: 0,
                      USE_DOWNSTREAM_PROTOCOL: 1
                    }
                  }
                }
              },
              UpstreamBindConfig: {
                fields: {
                  sourceAddress: {
                    type: "core.Address",
                    id: 1
                  }
                }
              },
              UpstreamConnectionOptions: {
                fields: {
                  tcpKeepalive: {
                    type: "core.TcpKeepalive",
                    id: 1
                  }
                }
              },
              auth: {
                options: {
                  java_outer_classname: "CertProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.auth",
                  go_package: "auth",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  TlsParameters: {
                    fields: {
                      tlsMinimumProtocolVersion: {
                        type: "TlsProtocol",
                        id: 1
                      },
                      tlsMaximumProtocolVersion: {
                        type: "TlsProtocol",
                        id: 2
                      },
                      cipherSuites: {
                        rule: "repeated",
                        type: "string",
                        id: 3
                      },
                      ecdhCurves: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      }
                    },
                    nested: {
                      TlsProtocol: {
                        values: {
                          TLS_AUTO: 0,
                          TLSv1_0: 1,
                          TLSv1_1: 2,
                          TLSv1_2: 3,
                          TLSv1_3: 4
                        }
                      }
                    }
                  },
                  TlsCertificate: {
                    fields: {
                      certificateChain: {
                        type: "core.DataSource",
                        id: 1
                      },
                      privateKey: {
                        type: "core.DataSource",
                        id: 2
                      },
                      password: {
                        type: "core.DataSource",
                        id: 3
                      },
                      ocspStaple: {
                        type: "core.DataSource",
                        id: 4
                      },
                      signedCertificateTimestamp: {
                        rule: "repeated",
                        type: "core.DataSource",
                        id: 5
                      }
                    }
                  },
                  TlsSessionTicketKeys: {
                    fields: {
                      keys: {
                        rule: "repeated",
                        type: "core.DataSource",
                        id: 1
                      }
                    }
                  },
                  CertificateValidationContext: {
                    fields: {
                      trustedCa: {
                        type: "core.DataSource",
                        id: 1
                      },
                      verifyCertificateSpki: {
                        rule: "repeated",
                        type: "string",
                        id: 3
                      },
                      verifyCertificateHash: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      verifySubjectAltName: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      },
                      requireOcspStaple: {
                        type: "google.protobuf.BoolValue",
                        id: 5
                      },
                      requireSignedCertificateTimestamp: {
                        type: "google.protobuf.BoolValue",
                        id: 6
                      },
                      crl: {
                        type: "core.DataSource",
                        id: 7
                      },
                      allowExpiredCertificate: {
                        type: "bool",
                        id: 8
                      }
                    }
                  },
                  CommonTlsContext: {
                    oneofs: {
                      validationContextType: {
                        oneof: [
                          "validationContext",
                          "validationContextSdsSecretConfig",
                          "combinedValidationContext"
                        ]
                      }
                    },
                    fields: {
                      tlsParams: {
                        type: "TlsParameters",
                        id: 1
                      },
                      tlsCertificates: {
                        rule: "repeated",
                        type: "TlsCertificate",
                        id: 2
                      },
                      tlsCertificateSdsSecretConfigs: {
                        rule: "repeated",
                        type: "SdsSecretConfig",
                        id: 6
                      },
                      validationContext: {
                        type: "CertificateValidationContext",
                        id: 3
                      },
                      validationContextSdsSecretConfig: {
                        type: "SdsSecretConfig",
                        id: 7
                      },
                      combinedValidationContext: {
                        type: "CombinedCertificateValidationContext",
                        id: 8
                      },
                      alpnProtocols: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      }
                    },
                    reserved: [
                      [
                        5,
                        5
                      ]
                    ],
                    nested: {
                      CombinedCertificateValidationContext: {
                        fields: {
                          defaultValidationContext: {
                            type: "CertificateValidationContext",
                            id: 1
                          },
                          validationContextSdsSecretConfig: {
                            type: "SdsSecretConfig",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  UpstreamTlsContext: {
                    fields: {
                      commonTlsContext: {
                        type: "CommonTlsContext",
                        id: 1
                      },
                      sni: {
                        type: "string",
                        id: 2
                      },
                      allowRenegotiation: {
                        type: "bool",
                        id: 3
                      },
                      maxSessionKeys: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      }
                    }
                  },
                  DownstreamTlsContext: {
                    oneofs: {
                      sessionTicketKeysType: {
                        oneof: [
                          "sessionTicketKeys",
                          "sessionTicketKeysSdsSecretConfig"
                        ]
                      }
                    },
                    fields: {
                      commonTlsContext: {
                        type: "CommonTlsContext",
                        id: 1
                      },
                      requireClientCertificate: {
                        type: "google.protobuf.BoolValue",
                        id: 2
                      },
                      requireSni: {
                        type: "google.protobuf.BoolValue",
                        id: 3
                      },
                      sessionTicketKeys: {
                        type: "TlsSessionTicketKeys",
                        id: 4
                      },
                      sessionTicketKeysSdsSecretConfig: {
                        type: "SdsSecretConfig",
                        id: 5
                      }
                    }
                  },
                  SdsSecretConfig: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      sdsConfig: {
                        type: "core.ConfigSource",
                        id: 2
                      }
                    }
                  },
                  Secret: {
                    oneofs: {
                      type: {
                        oneof: [
                          "tlsCertificate",
                          "sessionTicketKeys",
                          "validationContext"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      tlsCertificate: {
                        type: "TlsCertificate",
                        id: 2
                      },
                      sessionTicketKeys: {
                        type: "TlsSessionTicketKeys",
                        id: 3
                      },
                      validationContext: {
                        type: "CertificateValidationContext",
                        id: 4
                      }
                    }
                  }
                }
              },
              DiscoveryRequest: {
                fields: {
                  versionInfo: {
                    type: "string",
                    id: 1
                  },
                  node: {
                    type: "core.Node",
                    id: 2
                  },
                  resourceNames: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  typeUrl: {
                    type: "string",
                    id: 4
                  },
                  responseNonce: {
                    type: "string",
                    id: 5
                  },
                  errorDetail: {
                    type: "google.rpc.Status",
                    id: 6
                  }
                }
              },
              DiscoveryResponse: {
                fields: {
                  versionInfo: {
                    type: "string",
                    id: 1
                  },
                  resources: {
                    rule: "repeated",
                    type: "google.protobuf.Any",
                    id: 2
                  },
                  canary: {
                    type: "bool",
                    id: 3
                  },
                  typeUrl: {
                    type: "string",
                    id: 4
                  },
                  nonce: {
                    type: "string",
                    id: 5
                  }
                }
              },
              IncrementalDiscoveryRequest: {
                fields: {
                  node: {
                    type: "core.Node",
                    id: 1
                  },
                  typeUrl: {
                    type: "string",
                    id: 2
                  },
                  resourceNamesSubscribe: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  resourceNamesUnsubscribe: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                  },
                  initialResourceVersions: {
                    keyType: "string",
                    type: "string",
                    id: 5
                  },
                  responseNonce: {
                    type: "string",
                    id: 6
                  },
                  errorDetail: {
                    type: "google.rpc.Status",
                    id: 7
                  }
                }
              },
              IncrementalDiscoveryResponse: {
                fields: {
                  systemVersionInfo: {
                    type: "string",
                    id: 1
                  },
                  resources: {
                    rule: "repeated",
                    type: "Resource",
                    id: 2
                  },
                  removedResources: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  },
                  nonce: {
                    type: "string",
                    id: 5
                  }
                }
              },
              Resource: {
                fields: {
                  version: {
                    type: "string",
                    id: 1
                  },
                  resource: {
                    type: "google.protobuf.Any",
                    id: 2
                  }
                }
              },
              cluster: {
                options: {
                  java_outer_classname: "OutlierDetectionProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.cluster",
                  go_package: "cluster",
                  csharp_namespace: "Envoy.Api.V2.ClusterNS",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  CircuitBreakers: {
                    fields: {
                      thresholds: {
                        rule: "repeated",
                        type: "Thresholds",
                        id: 1
                      }
                    },
                    nested: {
                      Thresholds: {
                        fields: {
                          priority: {
                            type: "core.RoutingPriority",
                            id: 1
                          },
                          maxConnections: {
                            type: "google.protobuf.UInt32Value",
                            id: 2
                          },
                          maxPendingRequests: {
                            type: "google.protobuf.UInt32Value",
                            id: 3
                          },
                          maxRequests: {
                            type: "google.protobuf.UInt32Value",
                            id: 4
                          },
                          maxRetries: {
                            type: "google.protobuf.UInt32Value",
                            id: 5
                          }
                        }
                      }
                    }
                  },
                  OutlierDetection: {
                    fields: {
                      consecutive_5xx: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      interval: {
                        type: "google.protobuf.Duration",
                        id: 2
                      },
                      baseEjectionTime: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      maxEjectionPercent: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      },
                      enforcingConsecutive_5xx: {
                        type: "google.protobuf.UInt32Value",
                        id: 5
                      },
                      enforcingSuccessRate: {
                        type: "google.protobuf.UInt32Value",
                        id: 6
                      },
                      successRateMinimumHosts: {
                        type: "google.protobuf.UInt32Value",
                        id: 7
                      },
                      successRateRequestVolume: {
                        type: "google.protobuf.UInt32Value",
                        id: 8
                      },
                      successRateStdevFactor: {
                        type: "google.protobuf.UInt32Value",
                        id: 9
                      },
                      consecutiveGatewayFailure: {
                        type: "google.protobuf.UInt32Value",
                        id: 10
                      },
                      enforcingConsecutiveGatewayFailure: {
                        type: "google.protobuf.UInt32Value",
                        id: 11
                      }
                    }
                  }
                }
              },
              EndpointDiscoveryService: {
                methods: {
                  StreamEndpoints: {
                    requestType: "DiscoveryRequest",
                    requestStream: true,
                    responseType: "DiscoveryResponse",
                    responseStream: true
                  },
                  FetchEndpoints: {
                    requestType: "DiscoveryRequest",
                    responseType: "DiscoveryResponse",
                    options: {
                      "(google.api.http).post": "/v2/discovery:endpoints",
                      "(google.api.http).body": "*"
                    }
                  }
                }
              },
              ClusterLoadAssignment: {
                fields: {
                  clusterName: {
                    type: "string",
                    id: 1
                  },
                  endpoints: {
                    rule: "repeated",
                    type: "endpoint.LocalityLbEndpoints",
                    id: 2
                  },
                  namedEndpoints: {
                    keyType: "string",
                    type: "endpoint.Endpoint",
                    id: 5
                  },
                  policy: {
                    type: "Policy",
                    id: 4
                  }
                },
                nested: {
                  Policy: {
                    fields: {
                      dropOverloads: {
                        rule: "repeated",
                        type: "DropOverload",
                        id: 2
                      },
                      overprovisioningFactor: {
                        type: "google.protobuf.UInt32Value",
                        id: 3
                      }
                    },
                    reserved: [
                      [
                        1,
                        1
                      ]
                    ],
                    nested: {
                      DropOverload: {
                        fields: {
                          category: {
                            type: "string",
                            id: 1
                          },
                          dropPercentage: {
                            type: "envoy.type.FractionalPercent",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              },
              endpoint: {
                options: {
                  java_outer_classname: "LoadReportProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.endpoint",
                  go_package: "endpoint",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  Endpoint: {
                    fields: {
                      address: {
                        type: "core.Address",
                        id: 1
                      },
                      healthCheckConfig: {
                        type: "HealthCheckConfig",
                        id: 2
                      }
                    },
                    nested: {
                      HealthCheckConfig: {
                        fields: {
                          portValue: {
                            type: "uint32",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  LbEndpoint: {
                    oneofs: {
                      hostIdentifier: {
                        oneof: [
                          "endpoint",
                          "endpointName"
                        ]
                      }
                    },
                    fields: {
                      endpoint: {
                        type: "Endpoint",
                        id: 1
                      },
                      endpointName: {
                        type: "string",
                        id: 5
                      },
                      healthStatus: {
                        type: "core.HealthStatus",
                        id: 2
                      },
                      metadata: {
                        type: "core.Metadata",
                        id: 3
                      },
                      loadBalancingWeight: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      }
                    }
                  },
                  LocalityLbEndpoints: {
                    fields: {
                      locality: {
                        type: "core.Locality",
                        id: 1
                      },
                      lbEndpoints: {
                        rule: "repeated",
                        type: "LbEndpoint",
                        id: 2
                      },
                      loadBalancingWeight: {
                        type: "google.protobuf.UInt32Value",
                        id: 3
                      },
                      priority: {
                        type: "uint32",
                        id: 5
                      }
                    }
                  },
                  UpstreamLocalityStats: {
                    fields: {
                      locality: {
                        type: "core.Locality",
                        id: 1
                      },
                      totalSuccessfulRequests: {
                        type: "uint64",
                        id: 2
                      },
                      totalRequestsInProgress: {
                        type: "uint64",
                        id: 3
                      },
                      totalErrorRequests: {
                        type: "uint64",
                        id: 4
                      },
                      loadMetricStats: {
                        rule: "repeated",
                        type: "EndpointLoadMetricStats",
                        id: 5
                      },
                      upstreamEndpointStats: {
                        rule: "repeated",
                        type: "UpstreamEndpointStats",
                        id: 7
                      },
                      priority: {
                        type: "uint32",
                        id: 6
                      }
                    }
                  },
                  UpstreamEndpointStats: {
                    fields: {
                      address: {
                        type: "core.Address",
                        id: 1
                      },
                      metadata: {
                        type: "google.protobuf.Struct",
                        id: 6
                      },
                      totalSuccessfulRequests: {
                        type: "uint64",
                        id: 2
                      },
                      totalRequestsInProgress: {
                        type: "uint64",
                        id: 3
                      },
                      totalErrorRequests: {
                        type: "uint64",
                        id: 4
                      },
                      loadMetricStats: {
                        rule: "repeated",
                        type: "EndpointLoadMetricStats",
                        id: 5
                      }
                    }
                  },
                  EndpointLoadMetricStats: {
                    fields: {
                      metricName: {
                        type: "string",
                        id: 1
                      },
                      numRequestsFinishedWithMetric: {
                        type: "uint64",
                        id: 2
                      },
                      totalMetricValue: {
                        type: "double",
                        id: 3
                      }
                    }
                  },
                  ClusterStats: {
                    fields: {
                      clusterName: {
                        type: "string",
                        id: 1
                      },
                      upstreamLocalityStats: {
                        rule: "repeated",
                        type: "UpstreamLocalityStats",
                        id: 2
                      },
                      totalDroppedRequests: {
                        type: "uint64",
                        id: 3
                      },
                      droppedRequests: {
                        rule: "repeated",
                        type: "DroppedRequests",
                        id: 5
                      },
                      loadReportInterval: {
                        type: "google.protobuf.Duration",
                        id: 4
                      }
                    },
                    nested: {
                      DroppedRequests: {
                        fields: {
                          category: {
                            type: "string",
                            id: 1
                          },
                          droppedCount: {
                            type: "uint64",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              },
              ListenerDiscoveryService: {
                methods: {
                  StreamListeners: {
                    requestType: "DiscoveryRequest",
                    requestStream: true,
                    responseType: "DiscoveryResponse",
                    responseStream: true
                  },
                  FetchListeners: {
                    requestType: "DiscoveryRequest",
                    responseType: "DiscoveryResponse",
                    options: {
                      "(google.api.http).post": "/v2/discovery:listeners",
                      "(google.api.http).body": "*"
                    }
                  }
                }
              },
              Listener: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  address: {
                    type: "core.Address",
                    id: 2
                  },
                  filterChains: {
                    rule: "repeated",
                    type: "listener.FilterChain",
                    id: 3
                  },
                  useOriginalDst: {
                    type: "google.protobuf.BoolValue",
                    id: 4,
                    options: {
                      deprecated: true
                    }
                  },
                  perConnectionBufferLimitBytes: {
                    type: "google.protobuf.UInt32Value",
                    id: 5
                  },
                  metadata: {
                    type: "core.Metadata",
                    id: 6
                  },
                  deprecatedV1: {
                    type: "DeprecatedV1",
                    id: 7
                  },
                  drainType: {
                    type: "DrainType",
                    id: 8
                  },
                  listenerFilters: {
                    rule: "repeated",
                    type: "listener.ListenerFilter",
                    id: 9
                  },
                  listenerFiltersTimeout: {
                    type: "google.protobuf.Duration",
                    id: 15
                  },
                  transparent: {
                    type: "google.protobuf.BoolValue",
                    id: 10
                  },
                  freebind: {
                    type: "google.protobuf.BoolValue",
                    id: 11
                  },
                  socketOptions: {
                    rule: "repeated",
                    type: "core.SocketOption",
                    id: 13
                  },
                  tcpFastOpenQueueLength: {
                    type: "google.protobuf.UInt32Value",
                    id: 12
                  },
                  bugfixReverseWriteFilterOrder: {
                    type: "google.protobuf.BoolValue",
                    id: 14,
                    options: {
                      deprecated: true
                    }
                  }
                },
                nested: {
                  DeprecatedV1: {
                    fields: {
                      bindToPort: {
                        type: "google.protobuf.BoolValue",
                        id: 1
                      }
                    }
                  },
                  DrainType: {
                    values: {
                      DEFAULT: 0,
                      MODIFY_ONLY: 1
                    }
                  }
                }
              },
              listener: {
                options: {
                  java_outer_classname: "ListenerProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.listener",
                  go_package: "listener",
                  csharp_namespace: "Envoy.Api.V2.ListenerNS",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  Filter: {
                    oneofs: {
                      configType: {
                        oneof: [
                          "config",
                          "typedConfig"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      typedConfig: {
                        type: "google.protobuf.Any",
                        id: 4
                      }
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  FilterChainMatch: {
                    fields: {
                      destinationPort: {
                        type: "google.protobuf.UInt32Value",
                        id: 8
                      },
                      prefixRanges: {
                        rule: "repeated",
                        type: "core.CidrRange",
                        id: 3
                      },
                      addressSuffix: {
                        type: "string",
                        id: 4
                      },
                      suffixLen: {
                        type: "google.protobuf.UInt32Value",
                        id: 5
                      },
                      sourceType: {
                        type: "ConnectionSourceType",
                        id: 12
                      },
                      sourcePrefixRanges: {
                        rule: "repeated",
                        type: "core.CidrRange",
                        id: 6
                      },
                      sourcePorts: {
                        rule: "repeated",
                        type: "google.protobuf.UInt32Value",
                        id: 7
                      },
                      serverNames: {
                        rule: "repeated",
                        type: "string",
                        id: 11
                      },
                      transportProtocol: {
                        type: "string",
                        id: 9
                      },
                      applicationProtocols: {
                        rule: "repeated",
                        type: "string",
                        id: 10
                      }
                    },
                    reserved: [
                      [
                        1,
                        1
                      ],
                      "sni_domains"
                    ],
                    nested: {
                      ConnectionSourceType: {
                        values: {
                          ANY: 0,
                          LOCAL: 1,
                          EXTERNAL: 2
                        }
                      }
                    }
                  },
                  FilterChain: {
                    fields: {
                      filterChainMatch: {
                        type: "FilterChainMatch",
                        id: 1
                      },
                      tlsContext: {
                        type: "auth.DownstreamTlsContext",
                        id: 2
                      },
                      filters: {
                        rule: "repeated",
                        type: "Filter",
                        id: 3
                      },
                      useProxyProto: {
                        type: "google.protobuf.BoolValue",
                        id: 4
                      },
                      metadata: {
                        type: "core.Metadata",
                        id: 5
                      },
                      transportSocket: {
                        type: "core.TransportSocket",
                        id: 6
                      }
                    }
                  },
                  ListenerFilter: {
                    oneofs: {
                      configType: {
                        oneof: [
                          "config",
                          "typedConfig"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      typedConfig: {
                        type: "google.protobuf.Any",
                        id: 3
                      }
                    }
                  }
                }
              },
              RouteDiscoveryService: {
                methods: {
                  StreamRoutes: {
                    requestType: "DiscoveryRequest",
                    requestStream: true,
                    responseType: "DiscoveryResponse",
                    responseStream: true
                  },
                  IncrementalRoutes: {
                    requestType: "IncrementalDiscoveryRequest",
                    requestStream: true,
                    responseType: "IncrementalDiscoveryResponse",
                    responseStream: true
                  },
                  FetchRoutes: {
                    requestType: "DiscoveryRequest",
                    responseType: "DiscoveryResponse",
                    options: {
                      "(google.api.http).post": "/v2/discovery:routes",
                      "(google.api.http).body": "*"
                    }
                  }
                }
              },
              RouteConfiguration: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  virtualHosts: {
                    rule: "repeated",
                    type: "route.VirtualHost",
                    id: 2
                  },
                  internalOnlyHeaders: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  responseHeadersToAdd: {
                    rule: "repeated",
                    type: "core.HeaderValueOption",
                    id: 4
                  },
                  responseHeadersToRemove: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                  },
                  requestHeadersToAdd: {
                    rule: "repeated",
                    type: "core.HeaderValueOption",
                    id: 6
                  },
                  requestHeadersToRemove: {
                    rule: "repeated",
                    type: "string",
                    id: 8
                  },
                  validateClusters: {
                    type: "google.protobuf.BoolValue",
                    id: 7
                  }
                }
              },
              route: {
                options: {
                  java_outer_classname: "RouteProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.route",
                  go_package: "route",
                  java_generic_services: true,
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  VirtualHost: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      domains: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      routes: {
                        rule: "repeated",
                        type: "Route",
                        id: 3
                      },
                      requireTls: {
                        type: "TlsRequirementType",
                        id: 4
                      },
                      virtualClusters: {
                        rule: "repeated",
                        type: "VirtualCluster",
                        id: 5
                      },
                      rateLimits: {
                        rule: "repeated",
                        type: "RateLimit",
                        id: 6
                      },
                      requestHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 7
                      },
                      requestHeadersToRemove: {
                        rule: "repeated",
                        type: "string",
                        id: 13
                      },
                      responseHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 10
                      },
                      responseHeadersToRemove: {
                        rule: "repeated",
                        type: "string",
                        id: 11
                      },
                      cors: {
                        type: "CorsPolicy",
                        id: 8
                      },
                      perFilterConfig: {
                        keyType: "string",
                        type: "google.protobuf.Struct",
                        id: 12,
                        options: {
                          deprecated: true
                        }
                      },
                      typedPerFilterConfig: {
                        keyType: "string",
                        type: "google.protobuf.Any",
                        id: 15
                      },
                      includeRequestAttemptCount: {
                        type: "bool",
                        id: 14
                      },
                      retryPolicy: {
                        type: "RetryPolicy",
                        id: 16
                      }
                    },
                    reserved: [
                      [
                        9,
                        9
                      ]
                    ],
                    nested: {
                      TlsRequirementType: {
                        values: {
                          NONE: 0,
                          EXTERNAL_ONLY: 1,
                          ALL: 2
                        }
                      }
                    }
                  },
                  Route: {
                    oneofs: {
                      action: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "route",
                          "redirect",
                          "directResponse"
                        ]
                      }
                    },
                    fields: {
                      match: {
                        type: "RouteMatch",
                        id: 1
                      },
                      route: {
                        type: "RouteAction",
                        id: 2
                      },
                      redirect: {
                        type: "RedirectAction",
                        id: 3
                      },
                      directResponse: {
                        type: "DirectResponseAction",
                        id: 7
                      },
                      metadata: {
                        type: "core.Metadata",
                        id: 4
                      },
                      decorator: {
                        type: "Decorator",
                        id: 5
                      },
                      perFilterConfig: {
                        keyType: "string",
                        type: "google.protobuf.Struct",
                        id: 8,
                        options: {
                          deprecated: true
                        }
                      },
                      typedPerFilterConfig: {
                        keyType: "string",
                        type: "google.protobuf.Any",
                        id: 13
                      },
                      requestHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 9
                      },
                      requestHeadersToRemove: {
                        rule: "repeated",
                        type: "string",
                        id: 12
                      },
                      responseHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 10
                      },
                      responseHeadersToRemove: {
                        rule: "repeated",
                        type: "string",
                        id: 11
                      }
                    },
                    reserved: [
                      [
                        6,
                        6
                      ]
                    ]
                  },
                  WeightedCluster: {
                    fields: {
                      clusters: {
                        rule: "repeated",
                        type: "ClusterWeight",
                        id: 1
                      },
                      totalWeight: {
                        type: "google.protobuf.UInt32Value",
                        id: 3
                      },
                      runtimeKeyPrefix: {
                        type: "string",
                        id: 2
                      }
                    },
                    nested: {
                      ClusterWeight: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          weight: {
                            type: "google.protobuf.UInt32Value",
                            id: 2
                          },
                          metadataMatch: {
                            type: "core.Metadata",
                            id: 3
                          },
                          requestHeadersToAdd: {
                            rule: "repeated",
                            type: "core.HeaderValueOption",
                            id: 4
                          },
                          requestHeadersToRemove: {
                            rule: "repeated",
                            type: "string",
                            id: 9
                          },
                          responseHeadersToAdd: {
                            rule: "repeated",
                            type: "core.HeaderValueOption",
                            id: 5
                          },
                          responseHeadersToRemove: {
                            rule: "repeated",
                            type: "string",
                            id: 6
                          },
                          perFilterConfig: {
                            keyType: "string",
                            type: "google.protobuf.Struct",
                            id: 8,
                            options: {
                              deprecated: true
                            }
                          },
                          typedPerFilterConfig: {
                            keyType: "string",
                            type: "google.protobuf.Any",
                            id: 10
                          }
                        },
                        reserved: [
                          [
                            7,
                            7
                          ]
                        ]
                      }
                    }
                  },
                  RouteMatch: {
                    oneofs: {
                      pathSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "prefix",
                          "path",
                          "regex"
                        ]
                      }
                    },
                    fields: {
                      prefix: {
                        type: "string",
                        id: 1
                      },
                      path: {
                        type: "string",
                        id: 2
                      },
                      regex: {
                        type: "string",
                        id: 3
                      },
                      caseSensitive: {
                        type: "google.protobuf.BoolValue",
                        id: 4
                      },
                      runtimeFraction: {
                        type: "core.RuntimeFractionalPercent",
                        id: 9
                      },
                      headers: {
                        rule: "repeated",
                        type: "HeaderMatcher",
                        id: 6
                      },
                      queryParameters: {
                        rule: "repeated",
                        type: "QueryParameterMatcher",
                        id: 7
                      },
                      grpc: {
                        type: "GrpcRouteMatchOptions",
                        id: 8
                      }
                    },
                    reserved: [
                      [
                        5,
                        5
                      ]
                    ],
                    nested: {
                      GrpcRouteMatchOptions: {
                        fields: {}
                      }
                    }
                  },
                  CorsPolicy: {
                    oneofs: {
                      enabledSpecifier: {
                        oneof: [
                          "enabled",
                          "filterEnabled"
                        ]
                      }
                    },
                    fields: {
                      allowOrigin: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                      },
                      allowOriginRegex: {
                        rule: "repeated",
                        type: "string",
                        id: 8
                      },
                      allowMethods: {
                        type: "string",
                        id: 2
                      },
                      allowHeaders: {
                        type: "string",
                        id: 3
                      },
                      exposeHeaders: {
                        type: "string",
                        id: 4
                      },
                      maxAge: {
                        type: "string",
                        id: 5
                      },
                      allowCredentials: {
                        type: "google.protobuf.BoolValue",
                        id: 6
                      },
                      enabled: {
                        type: "google.protobuf.BoolValue",
                        id: 7,
                        options: {
                          deprecated: true
                        }
                      },
                      filterEnabled: {
                        type: "core.RuntimeFractionalPercent",
                        id: 9
                      },
                      shadowEnabled: {
                        type: "core.RuntimeFractionalPercent",
                        id: 10
                      }
                    }
                  },
                  RouteAction: {
                    oneofs: {
                      clusterSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "cluster",
                          "clusterHeader",
                          "weightedClusters"
                        ]
                      },
                      hostRewriteSpecifier: {
                        oneof: [
                          "hostRewrite",
                          "autoHostRewrite"
                        ]
                      }
                    },
                    fields: {
                      cluster: {
                        type: "string",
                        id: 1
                      },
                      clusterHeader: {
                        type: "string",
                        id: 2
                      },
                      weightedClusters: {
                        type: "WeightedCluster",
                        id: 3
                      },
                      clusterNotFoundResponseCode: {
                        type: "ClusterNotFoundResponseCode",
                        id: 20
                      },
                      metadataMatch: {
                        type: "core.Metadata",
                        id: 4
                      },
                      prefixRewrite: {
                        type: "string",
                        id: 5
                      },
                      hostRewrite: {
                        type: "string",
                        id: 6
                      },
                      autoHostRewrite: {
                        type: "google.protobuf.BoolValue",
                        id: 7
                      },
                      timeout: {
                        type: "google.protobuf.Duration",
                        id: 8
                      },
                      idleTimeout: {
                        type: "google.protobuf.Duration",
                        id: 24
                      },
                      retryPolicy: {
                        type: "RetryPolicy",
                        id: 9
                      },
                      requestMirrorPolicy: {
                        type: "RequestMirrorPolicy",
                        id: 10
                      },
                      priority: {
                        type: "core.RoutingPriority",
                        id: 11
                      },
                      requestHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 12,
                        options: {
                          deprecated: true
                        }
                      },
                      responseHeadersToAdd: {
                        rule: "repeated",
                        type: "core.HeaderValueOption",
                        id: 18,
                        options: {
                          deprecated: true
                        }
                      },
                      responseHeadersToRemove: {
                        rule: "repeated",
                        type: "string",
                        id: 19,
                        options: {
                          deprecated: true
                        }
                      },
                      rateLimits: {
                        rule: "repeated",
                        type: "RateLimit",
                        id: 13
                      },
                      includeVhRateLimits: {
                        type: "google.protobuf.BoolValue",
                        id: 14
                      },
                      hashPolicy: {
                        rule: "repeated",
                        type: "HashPolicy",
                        id: 15
                      },
                      cors: {
                        type: "CorsPolicy",
                        id: 17
                      },
                      maxGrpcTimeout: {
                        type: "google.protobuf.Duration",
                        id: 23
                      },
                      upgradeConfigs: {
                        rule: "repeated",
                        type: "UpgradeConfig",
                        id: 25
                      },
                      internalRedirectAction: {
                        type: "InternalRedirectAction",
                        id: 26
                      }
                    },
                    reserved: [
                      [
                        16,
                        16
                      ],
                      [
                        22,
                        22
                      ],
                      [
                        21,
                        21
                      ]
                    ],
                    nested: {
                      ClusterNotFoundResponseCode: {
                        values: {
                          SERVICE_UNAVAILABLE: 0,
                          NOT_FOUND: 1
                        }
                      },
                      RequestMirrorPolicy: {
                        fields: {
                          cluster: {
                            type: "string",
                            id: 1
                          },
                          runtimeKey: {
                            type: "string",
                            id: 2,
                            options: {
                              deprecated: true
                            }
                          },
                          runtimeFraction: {
                            type: "core.RuntimeFractionalPercent",
                            id: 3
                          }
                        }
                      },
                      HashPolicy: {
                        oneofs: {
                          policySpecifier: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "header",
                              "cookie",
                              "connectionProperties"
                            ]
                          }
                        },
                        fields: {
                          header: {
                            type: "Header",
                            id: 1
                          },
                          cookie: {
                            type: "Cookie",
                            id: 2
                          },
                          connectionProperties: {
                            type: "ConnectionProperties",
                            id: 3
                          },
                          terminal: {
                            type: "bool",
                            id: 4
                          }
                        },
                        nested: {
                          Header: {
                            fields: {
                              headerName: {
                                type: "string",
                                id: 1
                              }
                            }
                          },
                          Cookie: {
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              ttl: {
                                type: "google.protobuf.Duration",
                                id: 2
                              },
                              path: {
                                type: "string",
                                id: 3
                              }
                            }
                          },
                          ConnectionProperties: {
                            fields: {
                              sourceIp: {
                                type: "bool",
                                id: 1
                              }
                            }
                          }
                        }
                      },
                      UpgradeConfig: {
                        fields: {
                          upgradeType: {
                            type: "string",
                            id: 1
                          },
                          enabled: {
                            type: "google.protobuf.BoolValue",
                            id: 2
                          }
                        }
                      },
                      InternalRedirectAction: {
                        values: {
                          PASS_THROUGH_INTERNAL_REDIRECT: 0,
                          HANDLE_INTERNAL_REDIRECT: 1
                        }
                      }
                    }
                  },
                  RetryPolicy: {
                    fields: {
                      retryOn: {
                        type: "string",
                        id: 1
                      },
                      numRetries: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      },
                      perTryTimeout: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      retryPriority: {
                        type: "RetryPriority",
                        id: 4
                      },
                      retryHostPredicate: {
                        rule: "repeated",
                        type: "RetryHostPredicate",
                        id: 5
                      },
                      hostSelectionRetryMaxAttempts: {
                        type: "int64",
                        id: 6
                      },
                      retriableStatusCodes: {
                        rule: "repeated",
                        type: "uint32",
                        id: 7
                      }
                    },
                    nested: {
                      RetryPriority: {
                        oneofs: {
                          configType: {
                            oneof: [
                              "config",
                              "typedConfig"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 2,
                            options: {
                              deprecated: true
                            }
                          },
                          typedConfig: {
                            type: "google.protobuf.Any",
                            id: 3
                          }
                        }
                      },
                      RetryHostPredicate: {
                        oneofs: {
                          configType: {
                            oneof: [
                              "config",
                              "typedConfig"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 2,
                            options: {
                              deprecated: true
                            }
                          },
                          typedConfig: {
                            type: "google.protobuf.Any",
                            id: 3
                          }
                        }
                      }
                    }
                  },
                  RedirectAction: {
                    oneofs: {
                      schemeRewriteSpecifier: {
                        oneof: [
                          "httpsRedirect",
                          "schemeRedirect"
                        ]
                      },
                      pathRewriteSpecifier: {
                        oneof: [
                          "pathRedirect",
                          "prefixRewrite"
                        ]
                      }
                    },
                    fields: {
                      httpsRedirect: {
                        type: "bool",
                        id: 4
                      },
                      schemeRedirect: {
                        type: "string",
                        id: 7
                      },
                      hostRedirect: {
                        type: "string",
                        id: 1
                      },
                      portRedirect: {
                        type: "uint32",
                        id: 8
                      },
                      pathRedirect: {
                        type: "string",
                        id: 2
                      },
                      prefixRewrite: {
                        type: "string",
                        id: 5
                      },
                      responseCode: {
                        type: "RedirectResponseCode",
                        id: 3
                      },
                      stripQuery: {
                        type: "bool",
                        id: 6
                      }
                    },
                    nested: {
                      RedirectResponseCode: {
                        values: {
                          MOVED_PERMANENTLY: 0,
                          FOUND: 1,
                          SEE_OTHER: 2,
                          TEMPORARY_REDIRECT: 3,
                          PERMANENT_REDIRECT: 4
                        }
                      }
                    }
                  },
                  DirectResponseAction: {
                    fields: {
                      status: {
                        type: "uint32",
                        id: 1
                      },
                      body: {
                        type: "core.DataSource",
                        id: 2
                      }
                    }
                  },
                  Decorator: {
                    fields: {
                      operation: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  VirtualCluster: {
                    fields: {
                      pattern: {
                        type: "string",
                        id: 1
                      },
                      name: {
                        type: "string",
                        id: 2
                      },
                      method: {
                        type: "core.RequestMethod",
                        id: 3
                      }
                    }
                  },
                  RateLimit: {
                    fields: {
                      stage: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      disableKey: {
                        type: "string",
                        id: 2
                      },
                      actions: {
                        rule: "repeated",
                        type: "Action",
                        id: 3
                      }
                    },
                    nested: {
                      Action: {
                        oneofs: {
                          actionSpecifier: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "sourceCluster",
                              "destinationCluster",
                              "requestHeaders",
                              "remoteAddress",
                              "genericKey",
                              "headerValueMatch"
                            ]
                          }
                        },
                        fields: {
                          sourceCluster: {
                            type: "SourceCluster",
                            id: 1
                          },
                          destinationCluster: {
                            type: "DestinationCluster",
                            id: 2
                          },
                          requestHeaders: {
                            type: "RequestHeaders",
                            id: 3
                          },
                          remoteAddress: {
                            type: "RemoteAddress",
                            id: 4
                          },
                          genericKey: {
                            type: "GenericKey",
                            id: 5
                          },
                          headerValueMatch: {
                            type: "HeaderValueMatch",
                            id: 6
                          }
                        },
                        nested: {
                          SourceCluster: {
                            fields: {}
                          },
                          DestinationCluster: {
                            fields: {}
                          },
                          RequestHeaders: {
                            fields: {
                              headerName: {
                                type: "string",
                                id: 1
                              },
                              descriptorKey: {
                                type: "string",
                                id: 2
                              }
                            }
                          },
                          RemoteAddress: {
                            fields: {}
                          },
                          GenericKey: {
                            fields: {
                              descriptorValue: {
                                type: "string",
                                id: 1
                              }
                            }
                          },
                          HeaderValueMatch: {
                            fields: {
                              descriptorValue: {
                                type: "string",
                                id: 1
                              },
                              expectMatch: {
                                type: "google.protobuf.BoolValue",
                                id: 2
                              },
                              headers: {
                                rule: "repeated",
                                type: "HeaderMatcher",
                                id: 3
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  HeaderMatcher: {
                    oneofs: {
                      headerMatchSpecifier: {
                        oneof: [
                          "exactMatch",
                          "regexMatch",
                          "rangeMatch",
                          "presentMatch",
                          "prefixMatch",
                          "suffixMatch"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      exactMatch: {
                        type: "string",
                        id: 4
                      },
                      regexMatch: {
                        type: "string",
                        id: 5
                      },
                      rangeMatch: {
                        type: "envoy.type.Int64Range",
                        id: 6
                      },
                      presentMatch: {
                        type: "bool",
                        id: 7
                      },
                      prefixMatch: {
                        type: "string",
                        id: 9
                      },
                      suffixMatch: {
                        type: "string",
                        id: 10
                      },
                      invertMatch: {
                        type: "bool",
                        id: 8
                      }
                    },
                    reserved: [
                      [
                        2,
                        2
                      ],
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  QueryParameterMatcher: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      value: {
                        type: "string",
                        id: 3
                      },
                      regex: {
                        type: "google.protobuf.BoolValue",
                        id: 4
                      }
                    }
                  }
                }
              },
              ratelimit: {
                options: {
                  java_outer_classname: "RatelimitProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.api.v2.ratelimit",
                  go_package: "ratelimit"
                },
                nested: {
                  RateLimitDescriptor: {
                    fields: {
                      entries: {
                        rule: "repeated",
                        type: "Entry",
                        id: 1
                      }
                    },
                    nested: {
                      Entry: {
                        fields: {
                          key: {
                            type: "string",
                            id: 1
                          },
                          value: {
                            type: "string",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      type: {
        options: {
          java_outer_classname: "HttpStatusProto",
          java_multiple_files: true,
          java_package: "io.envoyproxy.envoy.type",
          "(gogoproto.equal_all)": true,
          go_package: "envoy_type"
        },
        nested: {
          Percent: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FractionalPercent: {
            fields: {
              numerator: {
                type: "uint32",
                id: 1
              },
              denominator: {
                type: "DenominatorType",
                id: 2
              }
            },
            nested: {
              DenominatorType: {
                values: {
                  HUNDRED: 0,
                  TEN_THOUSAND: 1,
                  MILLION: 2
                }
              }
            }
          },
          Int64Range: {
            fields: {
              start: {
                type: "int64",
                id: 1
              },
              end: {
                type: "int64",
                id: 2
              }
            }
          },
          DoubleRange: {
            fields: {
              start: {
                type: "double",
                id: 1
              },
              end: {
                type: "double",
                id: 2
              }
            }
          },
          matcher: {
            options: {
              java_outer_classname: "NumberProto",
              java_multiple_files: true,
              java_package: "io.envoyproxy.envoy.type.matcher",
              go_package: "matcher"
            },
            nested: {
              StringMatcher: {
                oneofs: {
                  matchPattern: {
                    options: {
                      "(validate.required)": true
                    },
                    oneof: [
                      "exact",
                      "prefix",
                      "suffix",
                      "regex"
                    ]
                  }
                },
                fields: {
                  exact: {
                    type: "string",
                    id: 1
                  },
                  prefix: {
                    type: "string",
                    id: 2
                  },
                  suffix: {
                    type: "string",
                    id: 3
                  },
                  regex: {
                    type: "string",
                    id: 4
                  }
                }
              },
              ListStringMatcher: {
                fields: {
                  patterns: {
                    rule: "repeated",
                    type: "StringMatcher",
                    id: 1
                  }
                }
              },
              MetadataMatcher: {
                fields: {
                  filter: {
                    type: "string",
                    id: 1
                  },
                  path: {
                    rule: "repeated",
                    type: "PathSegment",
                    id: 2
                  },
                  value: {
                    type: "ValueMatcher",
                    id: 3
                  }
                },
                nested: {
                  PathSegment: {
                    oneofs: {
                      segment: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "key"
                        ]
                      }
                    },
                    fields: {
                      key: {
                        type: "string",
                        id: 1
                      }
                    }
                  }
                }
              },
              ValueMatcher: {
                oneofs: {
                  matchPattern: {
                    options: {
                      "(validate.required)": true
                    },
                    oneof: [
                      "nullMatch",
                      "doubleMatch",
                      "stringMatch",
                      "boolMatch",
                      "presentMatch",
                      "listMatch"
                    ]
                  }
                },
                fields: {
                  nullMatch: {
                    type: "NullMatch",
                    id: 1
                  },
                  doubleMatch: {
                    type: "DoubleMatcher",
                    id: 2
                  },
                  stringMatch: {
                    type: "StringMatcher",
                    id: 3
                  },
                  boolMatch: {
                    type: "bool",
                    id: 4
                  },
                  presentMatch: {
                    type: "bool",
                    id: 5
                  },
                  listMatch: {
                    type: "ListMatcher",
                    id: 6
                  }
                },
                nested: {
                  NullMatch: {
                    fields: {}
                  }
                }
              },
              ListMatcher: {
                oneofs: {
                  matchPattern: {
                    options: {
                      "(validate.required)": true
                    },
                    oneof: [
                      "oneOf"
                    ]
                  }
                },
                fields: {
                  oneOf: {
                    type: "ValueMatcher",
                    id: 1
                  }
                }
              },
              DoubleMatcher: {
                oneofs: {
                  matchPattern: {
                    options: {
                      "(validate.required)": true
                    },
                    oneof: [
                      "range",
                      "exact"
                    ]
                  }
                },
                fields: {
                  range: {
                    type: "envoy.type.DoubleRange",
                    id: 1
                  },
                  exact: {
                    type: "double",
                    id: 2
                  }
                }
              }
            }
          },
          StatusCode: {
            values: {
              Empty: 0,
              Continue: 100,
              OK: 200,
              Created: 201,
              Accepted: 202,
              NonAuthoritativeInformation: 203,
              NoContent: 204,
              ResetContent: 205,
              PartialContent: 206,
              MultiStatus: 207,
              AlreadyReported: 208,
              IMUsed: 226,
              MultipleChoices: 300,
              MovedPermanently: 301,
              Found: 302,
              SeeOther: 303,
              NotModified: 304,
              UseProxy: 305,
              TemporaryRedirect: 307,
              PermanentRedirect: 308,
              BadRequest: 400,
              Unauthorized: 401,
              PaymentRequired: 402,
              Forbidden: 403,
              NotFound: 404,
              MethodNotAllowed: 405,
              NotAcceptable: 406,
              ProxyAuthenticationRequired: 407,
              RequestTimeout: 408,
              Conflict: 409,
              Gone: 410,
              LengthRequired: 411,
              PreconditionFailed: 412,
              PayloadTooLarge: 413,
              URITooLong: 414,
              UnsupportedMediaType: 415,
              RangeNotSatisfiable: 416,
              ExpectationFailed: 417,
              MisdirectedRequest: 421,
              UnprocessableEntity: 422,
              Locked: 423,
              FailedDependency: 424,
              UpgradeRequired: 426,
              PreconditionRequired: 428,
              TooManyRequests: 429,
              RequestHeaderFieldsTooLarge: 431,
              InternalServerError: 500,
              NotImplemented: 501,
              BadGateway: 502,
              ServiceUnavailable: 503,
              GatewayTimeout: 504,
              HTTPVersionNotSupported: 505,
              VariantAlsoNegotiates: 506,
              InsufficientStorage: 507,
              LoopDetected: 508,
              NotExtended: 510,
              NetworkAuthenticationRequired: 511
            }
          },
          HttpStatus: {
            fields: {
              code: {
                type: "StatusCode",
                id: 1
              }
            }
          }
        }
      },
      config: {
        nested: {
          bootstrap: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "BootstrapProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.bootstrap.v2",
                  go_package: "v2"
                },
                nested: {
                  Bootstrap: {
                    fields: {
                      node: {
                        type: "envoy.api.v2.core.Node",
                        id: 1
                      },
                      staticResources: {
                        type: "StaticResources",
                        id: 2
                      },
                      dynamicResources: {
                        type: "DynamicResources",
                        id: 3
                      },
                      clusterManager: {
                        type: "ClusterManager",
                        id: 4
                      },
                      hdsConfig: {
                        type: "envoy.api.v2.core.ApiConfigSource",
                        id: 14
                      },
                      flagsPath: {
                        type: "string",
                        id: 5
                      },
                      statsSinks: {
                        rule: "repeated",
                        type: "envoy.config.metrics.v2.StatsSink",
                        id: 6
                      },
                      statsConfig: {
                        type: "envoy.config.metrics.v2.StatsConfig",
                        id: 13
                      },
                      statsFlushInterval: {
                        type: "google.protobuf.Duration",
                        id: 7
                      },
                      watchdog: {
                        type: "Watchdog",
                        id: 8
                      },
                      tracing: {
                        type: "envoy.config.trace.v2.Tracing",
                        id: 9
                      },
                      rateLimitService: {
                        type: "envoy.config.ratelimit.v2.RateLimitServiceConfig",
                        id: 10,
                        options: {
                          deprecated: true
                        }
                      },
                      runtime: {
                        type: "Runtime",
                        id: 11
                      },
                      admin: {
                        type: "Admin",
                        id: 12
                      },
                      overloadManager: {
                        type: "envoy.config.overload.v2alpha.OverloadManager",
                        id: 15
                      }
                    },
                    nested: {
                      StaticResources: {
                        fields: {
                          listeners: {
                            rule: "repeated",
                            type: "envoy.api.v2.Listener",
                            id: 1
                          },
                          clusters: {
                            rule: "repeated",
                            type: "envoy.api.v2.Cluster",
                            id: 2
                          },
                          secrets: {
                            rule: "repeated",
                            type: "envoy.api.v2.auth.Secret",
                            id: 3
                          }
                        }
                      },
                      DynamicResources: {
                        fields: {
                          ldsConfig: {
                            type: "envoy.api.v2.core.ConfigSource",
                            id: 1
                          },
                          cdsConfig: {
                            type: "envoy.api.v2.core.ConfigSource",
                            id: 2
                          },
                          adsConfig: {
                            type: "envoy.api.v2.core.ApiConfigSource",
                            id: 3
                          }
                        },
                        reserved: [
                          [
                            4,
                            4
                          ]
                        ]
                      }
                    }
                  },
                  Admin: {
                    fields: {
                      accessLogPath: {
                        type: "string",
                        id: 1
                      },
                      profilePath: {
                        type: "string",
                        id: 2
                      },
                      address: {
                        type: "envoy.api.v2.core.Address",
                        id: 3
                      }
                    }
                  },
                  ClusterManager: {
                    fields: {
                      localClusterName: {
                        type: "string",
                        id: 1
                      },
                      outlierDetection: {
                        type: "OutlierDetection",
                        id: 2
                      },
                      upstreamBindConfig: {
                        type: "envoy.api.v2.core.BindConfig",
                        id: 3
                      },
                      loadStatsConfig: {
                        type: "envoy.api.v2.core.ApiConfigSource",
                        id: 4
                      }
                    },
                    nested: {
                      OutlierDetection: {
                        fields: {
                          eventLogPath: {
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  Watchdog: {
                    fields: {
                      missTimeout: {
                        type: "google.protobuf.Duration",
                        id: 1
                      },
                      megamissTimeout: {
                        type: "google.protobuf.Duration",
                        id: 2
                      },
                      killTimeout: {
                        type: "google.protobuf.Duration",
                        id: 3
                      },
                      multikillTimeout: {
                        type: "google.protobuf.Duration",
                        id: 4
                      }
                    }
                  },
                  Runtime: {
                    fields: {
                      symlinkRoot: {
                        type: "string",
                        id: 1
                      },
                      subdirectory: {
                        type: "string",
                        id: 2
                      },
                      overrideSubdirectory: {
                        type: "string",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          trace: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "TraceProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.trace.v2",
                  go_package: "v2"
                },
                nested: {
                  Tracing: {
                    fields: {
                      http: {
                        type: "Http",
                        id: 1
                      }
                    },
                    nested: {
                      Http: {
                        oneofs: {
                          configType: {
                            oneof: [
                              "config",
                              "typedConfig"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 2,
                            options: {
                              deprecated: true
                            }
                          },
                          typedConfig: {
                            type: "google.protobuf.Any",
                            id: 3
                          }
                        }
                      }
                    }
                  },
                  LightstepConfig: {
                    fields: {
                      collectorCluster: {
                        type: "string",
                        id: 1
                      },
                      accessTokenFile: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  ZipkinConfig: {
                    fields: {
                      collectorCluster: {
                        type: "string",
                        id: 1
                      },
                      collectorEndpoint: {
                        type: "string",
                        id: 2
                      },
                      traceId_128bit: {
                        type: "bool",
                        id: 3
                      },
                      sharedSpanContext: {
                        type: "google.protobuf.BoolValue",
                        id: 4
                      }
                    }
                  },
                  DynamicOtConfig: {
                    fields: {
                      library: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2
                      }
                    }
                  },
                  DatadogConfig: {
                    fields: {
                      collectorCluster: {
                        type: "string",
                        id: 1
                      },
                      serviceName: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  TraceServiceConfig: {
                    fields: {
                      grpcService: {
                        type: "envoy.api.v2.core.GrpcService",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          metrics: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "MetricsServiceProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.metrics.v2",
                  go_package: "v2"
                },
                nested: {
                  StatsSink: {
                    oneofs: {
                      configType: {
                        oneof: [
                          "config",
                          "typedConfig"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      typedConfig: {
                        type: "google.protobuf.Any",
                        id: 3
                      }
                    }
                  },
                  StatsConfig: {
                    fields: {
                      statsTags: {
                        rule: "repeated",
                        type: "TagSpecifier",
                        id: 1
                      },
                      useAllDefaultTags: {
                        type: "google.protobuf.BoolValue",
                        id: 2
                      },
                      statsMatcher: {
                        type: "StatsMatcher",
                        id: 3
                      }
                    }
                  },
                  StatsMatcher: {
                    oneofs: {
                      statsMatcher: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "rejectAll",
                          "exclusionList",
                          "inclusionList"
                        ]
                      }
                    },
                    fields: {
                      rejectAll: {
                        type: "bool",
                        id: 1
                      },
                      exclusionList: {
                        type: "envoy.type.matcher.ListStringMatcher",
                        id: 2
                      },
                      inclusionList: {
                        type: "envoy.type.matcher.ListStringMatcher",
                        id: 3
                      }
                    }
                  },
                  TagSpecifier: {
                    oneofs: {
                      tagValue: {
                        oneof: [
                          "regex",
                          "fixedValue"
                        ]
                      }
                    },
                    fields: {
                      tagName: {
                        type: "string",
                        id: 1
                      },
                      regex: {
                        type: "string",
                        id: 2
                      },
                      fixedValue: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  StatsdSink: {
                    oneofs: {
                      statsdSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "address",
                          "tcpClusterName"
                        ]
                      }
                    },
                    fields: {
                      address: {
                        type: "envoy.api.v2.core.Address",
                        id: 1
                      },
                      tcpClusterName: {
                        type: "string",
                        id: 2
                      },
                      prefix: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  DogStatsdSink: {
                    oneofs: {
                      dogStatsdSpecifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "address"
                        ]
                      }
                    },
                    fields: {
                      address: {
                        type: "envoy.api.v2.core.Address",
                        id: 1
                      },
                      prefix: {
                        type: "string",
                        id: 3
                      }
                    },
                    reserved: [
                      [
                        2,
                        2
                      ]
                    ]
                  },
                  HystrixSink: {
                    fields: {
                      numBuckets: {
                        type: "int64",
                        id: 1
                      }
                    }
                  },
                  MetricsServiceConfig: {
                    fields: {
                      grpcService: {
                        type: "envoy.api.v2.core.GrpcService",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          overload: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "OverloadProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.overload.v2alpha",
                  go_package: "v2alpha"
                },
                nested: {
                  ResourceMonitor: {
                    oneofs: {
                      configType: {
                        oneof: [
                          "config",
                          "typedConfig"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      config: {
                        type: "google.protobuf.Struct",
                        id: 2,
                        options: {
                          deprecated: true
                        }
                      },
                      typedConfig: {
                        type: "google.protobuf.Any",
                        id: 3
                      }
                    }
                  },
                  ThresholdTrigger: {
                    fields: {
                      value: {
                        type: "double",
                        id: 1
                      }
                    }
                  },
                  Trigger: {
                    oneofs: {
                      triggerOneof: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "threshold"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      threshold: {
                        type: "ThresholdTrigger",
                        id: 2
                      }
                    }
                  },
                  OverloadAction: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      triggers: {
                        rule: "repeated",
                        type: "Trigger",
                        id: 2
                      }
                    }
                  },
                  OverloadManager: {
                    fields: {
                      refreshInterval: {
                        type: "google.protobuf.Duration",
                        id: 1
                      },
                      resourceMonitors: {
                        rule: "repeated",
                        type: "ResourceMonitor",
                        id: 2
                      },
                      actions: {
                        rule: "repeated",
                        type: "OverloadAction",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          ratelimit: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "RlsProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.ratelimit.v2",
                  go_package: "v2"
                },
                nested: {
                  RateLimitServiceConfig: {
                    fields: {
                      grpcService: {
                        type: "envoy.api.v2.core.GrpcService",
                        id: 2
                      }
                    },
                    reserved: [
                      [
                        1,
                        1
                      ],
                      [
                        3,
                        3
                      ]
                    ]
                  }
                }
              }
            }
          },
          accesslog: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "FileProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.accesslog.v2",
                  go_package: "v2"
                },
                nested: {
                  HttpGrpcAccessLogConfig: {
                    fields: {
                      commonConfig: {
                        type: "CommonGrpcAccessLogConfig",
                        id: 1
                      },
                      additionalRequestHeadersToLog: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      additionalResponseHeadersToLog: {
                        rule: "repeated",
                        type: "string",
                        id: 3
                      },
                      additionalResponseTrailersToLog: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  TcpGrpcAccessLogConfig: {
                    fields: {
                      commonConfig: {
                        type: "CommonGrpcAccessLogConfig",
                        id: 1
                      }
                    }
                  },
                  CommonGrpcAccessLogConfig: {
                    fields: {
                      logName: {
                        type: "string",
                        id: 1
                      },
                      grpcService: {
                        type: "envoy.api.v2.core.GrpcService",
                        id: 2
                      }
                    }
                  },
                  FileAccessLog: {
                    oneofs: {
                      accessLogFormat: {
                        oneof: [
                          "format",
                          "jsonFormat"
                        ]
                      }
                    },
                    fields: {
                      path: {
                        type: "string",
                        id: 1
                      },
                      format: {
                        type: "string",
                        id: 2
                      },
                      jsonFormat: {
                        type: "google.protobuf.Struct",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          common: {
            nested: {
              tap: {
                nested: {
                  v2alpha: {
                    options: {
                      java_outer_classname: "CommonProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.common.tap.v2alpha"
                    },
                    nested: {
                      CommonExtensionConfig: {
                        oneofs: {
                          configType: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "adminConfig",
                              "staticConfig"
                            ]
                          }
                        },
                        fields: {
                          adminConfig: {
                            type: "AdminConfig",
                            id: 1
                          },
                          staticConfig: {
                            type: "service.tap.v2alpha.TapConfig",
                            id: 2
                          }
                        }
                      },
                      AdminConfig: {
                        fields: {
                          configId: {
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          filter: {
            nested: {
              accesslog: {
                nested: {
                  v2: {
                    options: {
                      java_outer_classname: "AccesslogProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.filter.accesslog.v2",
                      go_package: "v2"
                    },
                    nested: {
                      AccessLog: {
                        oneofs: {
                          configType: {
                            oneof: [
                              "config",
                              "typedConfig"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          filter: {
                            type: "AccessLogFilter",
                            id: 2
                          },
                          config: {
                            type: "google.protobuf.Struct",
                            id: 3,
                            options: {
                              deprecated: true
                            }
                          },
                          typedConfig: {
                            type: "google.protobuf.Any",
                            id: 4
                          }
                        }
                      },
                      AccessLogFilter: {
                        oneofs: {
                          filterSpecifier: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "statusCodeFilter",
                              "durationFilter",
                              "notHealthCheckFilter",
                              "traceableFilter",
                              "runtimeFilter",
                              "andFilter",
                              "orFilter",
                              "headerFilter",
                              "responseFlagFilter"
                            ]
                          }
                        },
                        fields: {
                          statusCodeFilter: {
                            type: "StatusCodeFilter",
                            id: 1
                          },
                          durationFilter: {
                            type: "DurationFilter",
                            id: 2
                          },
                          notHealthCheckFilter: {
                            type: "NotHealthCheckFilter",
                            id: 3
                          },
                          traceableFilter: {
                            type: "TraceableFilter",
                            id: 4
                          },
                          runtimeFilter: {
                            type: "RuntimeFilter",
                            id: 5
                          },
                          andFilter: {
                            type: "AndFilter",
                            id: 6
                          },
                          orFilter: {
                            type: "OrFilter",
                            id: 7
                          },
                          headerFilter: {
                            type: "HeaderFilter",
                            id: 8
                          },
                          responseFlagFilter: {
                            type: "ResponseFlagFilter",
                            id: 9
                          }
                        }
                      },
                      ComparisonFilter: {
                        fields: {
                          op: {
                            type: "Op",
                            id: 1
                          },
                          value: {
                            type: "envoy.api.v2.core.RuntimeUInt32",
                            id: 2
                          }
                        },
                        nested: {
                          Op: {
                            values: {
                              EQ: 0,
                              GE: 1,
                              LE: 2
                            }
                          }
                        }
                      },
                      StatusCodeFilter: {
                        fields: {
                          comparison: {
                            type: "ComparisonFilter",
                            id: 1
                          }
                        }
                      },
                      DurationFilter: {
                        fields: {
                          comparison: {
                            type: "ComparisonFilter",
                            id: 1
                          }
                        }
                      },
                      NotHealthCheckFilter: {
                        fields: {}
                      },
                      TraceableFilter: {
                        fields: {}
                      },
                      RuntimeFilter: {
                        fields: {
                          runtimeKey: {
                            type: "string",
                            id: 1
                          },
                          percentSampled: {
                            type: "envoy.type.FractionalPercent",
                            id: 2
                          },
                          useIndependentRandomness: {
                            type: "bool",
                            id: 3
                          }
                        }
                      },
                      AndFilter: {
                        fields: {
                          filters: {
                            rule: "repeated",
                            type: "AccessLogFilter",
                            id: 1
                          }
                        }
                      },
                      OrFilter: {
                        fields: {
                          filters: {
                            rule: "repeated",
                            type: "AccessLogFilter",
                            id: 2
                          }
                        }
                      },
                      HeaderFilter: {
                        fields: {
                          header: {
                            type: "envoy.api.v2.route.HeaderMatcher",
                            id: 1
                          }
                        }
                      },
                      ResponseFlagFilter: {
                        fields: {
                          flags: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              },
              fault: {
                nested: {
                  v2: {
                    options: {
                      java_outer_classname: "FaultProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.filter.fault.v2",
                      go_package: "v2"
                    },
                    nested: {
                      FaultDelay: {
                        oneofs: {
                          faultDelaySecifier: {
                            options: {
                              "(validate.required)": true
                            },
                            oneof: [
                              "fixedDelay"
                            ]
                          }
                        },
                        fields: {
                          type: {
                            type: "FaultDelayType",
                            id: 1
                          },
                          fixedDelay: {
                            type: "google.protobuf.Duration",
                            id: 3
                          },
                          percentage: {
                            type: "envoy.type.FractionalPercent",
                            id: 4
                          }
                        },
                        reserved: [
                          [
                            2,
                            2
                          ]
                        ],
                        nested: {
                          FaultDelayType: {
                            values: {
                              FIXED: 0
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              http: {
                nested: {
                  buffer: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "BufferProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.buffer.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Buffer: {
                            fields: {
                              maxRequestBytes: {
                                type: "google.protobuf.UInt32Value",
                                id: 1
                              }
                            },
                            reserved: [
                              [
                                2,
                                2
                              ]
                            ]
                          },
                          BufferPerRoute: {
                            oneofs: {
                              override: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "disabled",
                                  "buffer"
                                ]
                              }
                            },
                            fields: {
                              disabled: {
                                type: "bool",
                                id: 1
                              },
                              buffer: {
                                type: "Buffer",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  ext_authz: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "ExtAuthzProto",
                          java_package: "io.envoyproxy.envoy.config.filter.http.ext_authz.v2",
                          java_multiple_files: true,
                          go_package: "v2"
                        },
                        nested: {
                          ExtAuthz: {
                            oneofs: {
                              services: {
                                oneof: [
                                  "grpcService",
                                  "httpService"
                                ]
                              }
                            },
                            fields: {
                              grpcService: {
                                type: "envoy.api.v2.core.GrpcService",
                                id: 1
                              },
                              httpService: {
                                type: "HttpService",
                                id: 3
                              },
                              failureModeAllow: {
                                type: "bool",
                                id: 2
                              }
                            }
                          },
                          HttpService: {
                            fields: {
                              serverUri: {
                                type: "envoy.api.v2.core.HttpUri",
                                id: 1
                              },
                              pathPrefix: {
                                type: "string",
                                id: 2
                              },
                              authorizationRequest: {
                                type: "AuthorizationRequest",
                                id: 7
                              },
                              authorizationResponse: {
                                type: "AuthorizationResponse",
                                id: 8
                              }
                            },
                            reserved: [
                              [
                                3,
                                3
                              ],
                              [
                                4,
                                4
                              ],
                              [
                                5,
                                5
                              ],
                              [
                                6,
                                6
                              ]
                            ]
                          },
                          AuthorizationRequest: {
                            fields: {
                              allowedHeaders: {
                                type: "envoy.type.matcher.ListStringMatcher",
                                id: 1
                              },
                              headersToAdd: {
                                rule: "repeated",
                                type: "envoy.api.v2.core.HeaderValue",
                                id: 2
                              }
                            }
                          },
                          AuthorizationResponse: {
                            fields: {
                              allowedUpstreamHeaders: {
                                type: "envoy.type.matcher.ListStringMatcher",
                                id: 1
                              },
                              allowedClientHeaders: {
                                type: "envoy.type.matcher.ListStringMatcher",
                                id: 2
                              }
                            }
                          },
                          ExtAuthzPerRoute: {
                            oneofs: {
                              override: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "disabled",
                                  "checkSettings"
                                ]
                              }
                            },
                            fields: {
                              disabled: {
                                type: "bool",
                                id: 1
                              },
                              checkSettings: {
                                type: "CheckSettings",
                                id: 2
                              }
                            }
                          },
                          CheckSettings: {
                            fields: {
                              contextExtensions: {
                                keyType: "string",
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  fault: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "FaultProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.fault.v2",
                          go_package: "v2"
                        },
                        nested: {
                          FaultAbort: {
                            oneofs: {
                              errorType: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "httpStatus"
                                ]
                              }
                            },
                            fields: {
                              httpStatus: {
                                type: "uint32",
                                id: 2
                              },
                              percentage: {
                                type: "envoy.type.FractionalPercent",
                                id: 3
                              }
                            },
                            reserved: [
                              [
                                1,
                                1
                              ]
                            ]
                          },
                          HTTPFault: {
                            fields: {
                              delay: {
                                type: "envoy.config.filter.fault.v2.FaultDelay",
                                id: 1
                              },
                              abort: {
                                type: "FaultAbort",
                                id: 2
                              },
                              upstreamCluster: {
                                type: "string",
                                id: 3
                              },
                              headers: {
                                rule: "repeated",
                                type: "envoy.api.v2.route.HeaderMatcher",
                                id: 4
                              },
                              downstreamNodes: {
                                rule: "repeated",
                                type: "string",
                                id: 5
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  gzip: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "GzipProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.gzip.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Gzip: {
                            fields: {
                              memoryLevel: {
                                type: "google.protobuf.UInt32Value",
                                id: 1
                              },
                              contentLength: {
                                type: "google.protobuf.UInt32Value",
                                id: 2
                              },
                              compressionLevel: {
                                type: "CompressionLevel.Enum",
                                id: 3
                              },
                              compressionStrategy: {
                                type: "CompressionStrategy",
                                id: 4
                              },
                              contentType: {
                                rule: "repeated",
                                type: "string",
                                id: 6
                              },
                              disableOnEtagHeader: {
                                type: "bool",
                                id: 7
                              },
                              removeAcceptEncodingHeader: {
                                type: "bool",
                                id: 8
                              },
                              windowBits: {
                                type: "google.protobuf.UInt32Value",
                                id: 9
                              }
                            },
                            nested: {
                              CompressionLevel: {
                                fields: {},
                                nested: {
                                  Enum: {
                                    values: {
                                      DEFAULT: 0,
                                      BEST: 1,
                                      SPEED: 2
                                    }
                                  }
                                }
                              },
                              CompressionStrategy: {
                                values: {
                                  DEFAULT: 0,
                                  FILTERED: 1,
                                  HUFFMAN: 2,
                                  RLE: 3
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  header_to_metadata: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "HeaderToMetadataProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.header_to_metadata.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Config: {
                            fields: {
                              requestRules: {
                                rule: "repeated",
                                type: "Rule",
                                id: 1
                              },
                              responseRules: {
                                rule: "repeated",
                                type: "Rule",
                                id: 2
                              }
                            },
                            nested: {
                              ValueType: {
                                values: {
                                  STRING: 0,
                                  NUMBER: 1
                                }
                              },
                              KeyValuePair: {
                                fields: {
                                  metadataNamespace: {
                                    type: "string",
                                    id: 1
                                  },
                                  key: {
                                    type: "string",
                                    id: 2
                                  },
                                  value: {
                                    type: "string",
                                    id: 3
                                  },
                                  type: {
                                    type: "ValueType",
                                    id: 4
                                  }
                                }
                              },
                              Rule: {
                                fields: {
                                  header: {
                                    type: "string",
                                    id: 1
                                  },
                                  onHeaderPresent: {
                                    type: "KeyValuePair",
                                    id: 2
                                  },
                                  onHeaderMissing: {
                                    type: "KeyValuePair",
                                    id: 3
                                  },
                                  remove: {
                                    type: "bool",
                                    id: 4
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  health_check: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "HealthCheckProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.health_check.v2",
                          go_package: "v2"
                        },
                        nested: {
                          HealthCheck: {
                            fields: {
                              passThroughMode: {
                                type: "google.protobuf.BoolValue",
                                id: 1
                              },
                              cacheTime: {
                                type: "google.protobuf.Duration",
                                id: 3
                              },
                              clusterMinHealthyPercentages: {
                                keyType: "string",
                                type: "envoy.type.Percent",
                                id: 4
                              },
                              headers: {
                                rule: "repeated",
                                type: "envoy.api.v2.route.HeaderMatcher",
                                id: 5
                              }
                            },
                            reserved: [
                              [
                                2,
                                2
                              ],
                              "endpoint"
                            ]
                          }
                        }
                      }
                    }
                  },
                  ip_tagging: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "IpTaggingProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.ip_tagging.v2",
                          go_package: "v2"
                        },
                        nested: {
                          IPTagging: {
                            fields: {
                              requestType: {
                                type: "RequestType",
                                id: 1
                              },
                              ipTags: {
                                rule: "repeated",
                                type: "IPTag",
                                id: 4
                              }
                            },
                            nested: {
                              RequestType: {
                                values: {
                                  BOTH: 0,
                                  INTERNAL: 1,
                                  EXTERNAL: 2
                                }
                              },
                              IPTag: {
                                fields: {
                                  ipTagName: {
                                    type: "string",
                                    id: 1
                                  },
                                  ipList: {
                                    rule: "repeated",
                                    type: "envoy.api.v2.core.CidrRange",
                                    id: 2
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  jwt_authn: {
                    nested: {
                      v2alpha: {
                        options: {
                          java_outer_classname: "ConfigProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.jwt_authn.v2alpha"
                        },
                        nested: {
                          JwtProvider: {
                            oneofs: {
                              jwksSourceSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "remoteJwks",
                                  "localJwks"
                                ]
                              }
                            },
                            fields: {
                              issuer: {
                                type: "string",
                                id: 1
                              },
                              audiences: {
                                rule: "repeated",
                                type: "string",
                                id: 2
                              },
                              remoteJwks: {
                                type: "RemoteJwks",
                                id: 3
                              },
                              localJwks: {
                                type: "envoy.api.v2.core.DataSource",
                                id: 4
                              },
                              forward: {
                                type: "bool",
                                id: 5
                              },
                              fromHeaders: {
                                rule: "repeated",
                                type: "JwtHeader",
                                id: 6
                              },
                              fromParams: {
                                rule: "repeated",
                                type: "string",
                                id: 7
                              },
                              forwardPayloadHeader: {
                                type: "string",
                                id: 8
                              },
                              payloadInMetadata: {
                                type: "string",
                                id: 9
                              }
                            }
                          },
                          RemoteJwks: {
                            fields: {
                              httpUri: {
                                type: "envoy.api.v2.core.HttpUri",
                                id: 1
                              },
                              cacheDuration: {
                                type: "google.protobuf.Duration",
                                id: 2
                              }
                            }
                          },
                          JwtHeader: {
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              valuePrefix: {
                                type: "string",
                                id: 2
                              }
                            }
                          },
                          ProviderWithAudiences: {
                            fields: {
                              providerName: {
                                type: "string",
                                id: 1
                              },
                              audiences: {
                                rule: "repeated",
                                type: "string",
                                id: 2
                              }
                            }
                          },
                          JwtRequirement: {
                            oneofs: {
                              requiresType: {
                                oneof: [
                                  "providerName",
                                  "providerAndAudiences",
                                  "requiresAny",
                                  "requiresAll",
                                  "allowMissingOrFailed"
                                ]
                              }
                            },
                            fields: {
                              providerName: {
                                type: "string",
                                id: 1
                              },
                              providerAndAudiences: {
                                type: "ProviderWithAudiences",
                                id: 2
                              },
                              requiresAny: {
                                type: "JwtRequirementOrList",
                                id: 3
                              },
                              requiresAll: {
                                type: "JwtRequirementAndList",
                                id: 4
                              },
                              allowMissingOrFailed: {
                                type: "google.protobuf.Empty",
                                id: 5
                              }
                            }
                          },
                          JwtRequirementOrList: {
                            fields: {
                              requirements: {
                                rule: "repeated",
                                type: "JwtRequirement",
                                id: 1
                              }
                            }
                          },
                          JwtRequirementAndList: {
                            fields: {
                              requirements: {
                                rule: "repeated",
                                type: "JwtRequirement",
                                id: 1
                              }
                            }
                          },
                          RequirementRule: {
                            fields: {
                              match: {
                                type: "envoy.api.v2.route.RouteMatch",
                                id: 1
                              },
                              requires: {
                                type: "JwtRequirement",
                                id: 2
                              }
                            }
                          },
                          JwtAuthentication: {
                            fields: {
                              providers: {
                                keyType: "string",
                                type: "JwtProvider",
                                id: 1
                              },
                              rules: {
                                rule: "repeated",
                                type: "RequirementRule",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  lua: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "LuaProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.lua.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Lua: {
                            fields: {
                              inlineCode: {
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  rate_limit: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RateLimitProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.rate_limit.v2",
                          go_package: "v2"
                        },
                        nested: {
                          RateLimit: {
                            fields: {
                              domain: {
                                type: "string",
                                id: 1
                              },
                              stage: {
                                type: "uint32",
                                id: 2
                              },
                              requestType: {
                                type: "string",
                                id: 3
                              },
                              timeout: {
                                type: "google.protobuf.Duration",
                                id: 4
                              },
                              failureModeDeny: {
                                type: "bool",
                                id: 5
                              },
                              rateLimitedAsResourceExhausted: {
                                type: "bool",
                                id: 6
                              },
                              rateLimitService: {
                                type: "envoy.config.ratelimit.v2.RateLimitServiceConfig",
                                id: 7
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  rbac: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RbacProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.rbac.v2",
                          go_package: "v2"
                        },
                        nested: {
                          RBAC: {
                            fields: {
                              rules: {
                                type: "config.rbac.v2alpha.RBAC",
                                id: 1
                              },
                              shadowRules: {
                                type: "config.rbac.v2alpha.RBAC",
                                id: 2
                              }
                            }
                          },
                          RBACPerRoute: {
                            fields: {
                              rbac: {
                                type: "RBAC",
                                id: 2
                              }
                            },
                            reserved: [
                              [
                                1,
                                1
                              ],
                              "disabled"
                            ]
                          }
                        }
                      }
                    }
                  },
                  router: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RouterProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.router.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Router: {
                            fields: {
                              dynamicStats: {
                                type: "google.protobuf.BoolValue",
                                id: 1
                              },
                              startChildSpan: {
                                type: "bool",
                                id: 2
                              },
                              upstreamLog: {
                                rule: "repeated",
                                type: "envoy.config.filter.accesslog.v2.AccessLog",
                                id: 3
                              },
                              suppressEnvoyHeaders: {
                                type: "bool",
                                id: 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  squash: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "SquashProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.squash.v2",
                          go_package: "v2"
                        },
                        nested: {
                          Squash: {
                            fields: {
                              cluster: {
                                type: "string",
                                id: 1
                              },
                              attachmentTemplate: {
                                type: "google.protobuf.Struct",
                                id: 2
                              },
                              requestTimeout: {
                                type: "google.protobuf.Duration",
                                id: 3
                              },
                              attachmentTimeout: {
                                type: "google.protobuf.Duration",
                                id: 4
                              },
                              attachmentPollPeriod: {
                                type: "google.protobuf.Duration",
                                id: 5
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  tap: {
                    nested: {
                      v2alpha: {
                        options: {
                          java_outer_classname: "TapProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.tap.v2alpha"
                        },
                        nested: {
                          Tap: {
                            fields: {
                              commonConfig: {
                                type: "common.tap.v2alpha.CommonExtensionConfig",
                                id: 1
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  transcoder: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "TranscoderProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.http.transcoder.v2",
                          go_package: "v2"
                        },
                        nested: {
                          GrpcJsonTranscoder: {
                            oneofs: {
                              descriptorSet: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "protoDescriptor",
                                  "protoDescriptorBin"
                                ]
                              }
                            },
                            fields: {
                              protoDescriptor: {
                                type: "string",
                                id: 1
                              },
                              protoDescriptorBin: {
                                type: "bytes",
                                id: 4
                              },
                              services: {
                                rule: "repeated",
                                type: "string",
                                id: 2
                              },
                              printOptions: {
                                type: "PrintOptions",
                                id: 3
                              },
                              matchIncomingRequestRoute: {
                                type: "bool",
                                id: 5
                              },
                              ignoredQueryParameters: {
                                rule: "repeated",
                                type: "string",
                                id: 6
                              }
                            },
                            nested: {
                              PrintOptions: {
                                fields: {
                                  addWhitespace: {
                                    type: "bool",
                                    id: 1
                                  },
                                  alwaysPrintPrimitiveFields: {
                                    type: "bool",
                                    id: 2
                                  },
                                  alwaysPrintEnumsAsInts: {
                                    type: "bool",
                                    id: 3
                                  },
                                  preserveProtoFieldNames: {
                                    type: "bool",
                                    id: 4
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              listener: {
                nested: {
                  original_src: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "OriginalSrcProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.listener.original_src.v2alpha1",
                          go_package: "v2alpha1"
                        },
                        nested: {
                          OriginalSrc: {
                            fields: {
                              bindPort: {
                                type: "bool",
                                id: 1
                              },
                              mark: {
                                type: "uint32",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              network: {
                nested: {
                  client_ssl_auth: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "ClientSslAuthProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.client_ssl_auth.v2",
                          go_package: "v2"
                        },
                        nested: {
                          ClientSSLAuth: {
                            fields: {
                              authApiCluster: {
                                type: "string",
                                id: 1
                              },
                              statPrefix: {
                                type: "string",
                                id: 2
                              },
                              refreshDelay: {
                                type: "google.protobuf.Duration",
                                id: 3
                              },
                              ipWhiteList: {
                                rule: "repeated",
                                type: "envoy.api.v2.core.CidrRange",
                                id: 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  dubbo_proxy: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "RouteProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.dubbo_proxy.v2alpha1",
                          go_package: "v2"
                        },
                        nested: {
                          DubboProxy: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              protocolType: {
                                type: "ProtocolType",
                                id: 2
                              },
                              serializationType: {
                                type: "SerializationType",
                                id: 3
                              },
                              routeConfig: {
                                rule: "repeated",
                                type: "RouteConfiguration",
                                id: 4
                              },
                              dubboFilters: {
                                rule: "repeated",
                                type: "DubboFilter",
                                id: 5
                              }
                            }
                          },
                          ProtocolType: {
                            values: {
                              Dubbo: 0
                            }
                          },
                          SerializationType: {
                            values: {
                              Hessian2: 0
                            }
                          },
                          DubboFilter: {
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              config: {
                                type: "google.protobuf.Any",
                                id: 2
                              }
                            }
                          },
                          RouteConfiguration: {
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              "interface": {
                                type: "string",
                                id: 2
                              },
                              group: {
                                type: "string",
                                id: 3
                              },
                              version: {
                                type: "string",
                                id: 4
                              },
                              routes: {
                                rule: "repeated",
                                type: "Route",
                                id: 5
                              }
                            }
                          },
                          Route: {
                            fields: {
                              match: {
                                type: "RouteMatch",
                                id: 1
                              },
                              route: {
                                type: "RouteAction",
                                id: 2
                              }
                            }
                          },
                          MethodMatch: {
                            fields: {
                              name: {
                                type: "envoy.type.matcher.StringMatcher",
                                id: 1
                              },
                              paramsMatch: {
                                keyType: "uint32",
                                type: "ParameterMatchSpecifier",
                                id: 2
                              }
                            },
                            nested: {
                              ParameterMatchSpecifier: {
                                oneofs: {
                                  parameterMatchSpecifier: {
                                    oneof: [
                                      "exactMatch",
                                      "rangeMatch"
                                    ]
                                  }
                                },
                                fields: {
                                  exactMatch: {
                                    type: "string",
                                    id: 3
                                  },
                                  rangeMatch: {
                                    type: "envoy.type.Int64Range",
                                    id: 4
                                  }
                                }
                              }
                            }
                          },
                          RouteMatch: {
                            fields: {
                              method: {
                                type: "MethodMatch",
                                id: 1
                              },
                              headers: {
                                rule: "repeated",
                                type: "envoy.api.v2.route.HeaderMatcher",
                                id: 2
                              }
                            }
                          },
                          RouteAction: {
                            oneofs: {
                              clusterSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "cluster",
                                  "weightedClusters"
                                ]
                              }
                            },
                            fields: {
                              cluster: {
                                type: "string",
                                id: 1
                              },
                              weightedClusters: {
                                type: "envoy.api.v2.route.WeightedCluster",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  ext_authz: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "ExtAuthzProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.ext_authz.v2",
                          go_package: "v2"
                        },
                        nested: {
                          ExtAuthz: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              grpcService: {
                                type: "envoy.api.v2.core.GrpcService",
                                id: 2
                              },
                              failureModeAllow: {
                                type: "bool",
                                id: 3
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  http_connection_manager: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "HttpConnectionManagerProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.http_connection_manager.v2",
                          go_package: "v2"
                        },
                        nested: {
                          HttpConnectionManager: {
                            oneofs: {
                              routeSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "rds",
                                  "routeConfig"
                                ]
                              }
                            },
                            fields: {
                              codecType: {
                                type: "CodecType",
                                id: 1
                              },
                              statPrefix: {
                                type: "string",
                                id: 2
                              },
                              rds: {
                                type: "Rds",
                                id: 3
                              },
                              routeConfig: {
                                type: "envoy.api.v2.RouteConfiguration",
                                id: 4
                              },
                              httpFilters: {
                                rule: "repeated",
                                type: "HttpFilter",
                                id: 5
                              },
                              addUserAgent: {
                                type: "google.protobuf.BoolValue",
                                id: 6
                              },
                              tracing: {
                                type: "Tracing",
                                id: 7
                              },
                              httpProtocolOptions: {
                                type: "envoy.api.v2.core.Http1ProtocolOptions",
                                id: 8
                              },
                              http2ProtocolOptions: {
                                type: "envoy.api.v2.core.Http2ProtocolOptions",
                                id: 9
                              },
                              serverName: {
                                type: "string",
                                id: 10
                              },
                              maxRequestHeadersKb: {
                                type: "google.protobuf.UInt32Value",
                                id: 29
                              },
                              idleTimeout: {
                                type: "google.protobuf.Duration",
                                id: 11
                              },
                              streamIdleTimeout: {
                                type: "google.protobuf.Duration",
                                id: 24
                              },
                              requestTimeout: {
                                type: "google.protobuf.Duration",
                                id: 28
                              },
                              drainTimeout: {
                                type: "google.protobuf.Duration",
                                id: 12
                              },
                              delayedCloseTimeout: {
                                type: "google.protobuf.Duration",
                                id: 26
                              },
                              accessLog: {
                                rule: "repeated",
                                type: "envoy.config.filter.accesslog.v2.AccessLog",
                                id: 13
                              },
                              useRemoteAddress: {
                                type: "google.protobuf.BoolValue",
                                id: 14
                              },
                              xffNumTrustedHops: {
                                type: "uint32",
                                id: 19
                              },
                              internalAddressConfig: {
                                type: "InternalAddressConfig",
                                id: 25
                              },
                              skipXffAppend: {
                                type: "bool",
                                id: 21
                              },
                              via: {
                                type: "string",
                                id: 22
                              },
                              generateRequestId: {
                                type: "google.protobuf.BoolValue",
                                id: 15
                              },
                              forwardClientCertDetails: {
                                type: "ForwardClientCertDetails",
                                id: 16
                              },
                              setCurrentClientCertDetails: {
                                type: "SetCurrentClientCertDetails",
                                id: 17
                              },
                              proxy_100Continue: {
                                type: "bool",
                                id: 18
                              },
                              representIpv4RemoteAddressAsIpv4MappedIpv6: {
                                type: "bool",
                                id: 20
                              },
                              upgradeConfigs: {
                                rule: "repeated",
                                type: "UpgradeConfig",
                                id: 23
                              },
                              bugfixReverseEncodeOrder: {
                                type: "google.protobuf.BoolValue",
                                id: 27,
                                options: {
                                  deprecated: true
                                }
                              }
                            },
                            nested: {
                              CodecType: {
                                options: {
                                  "(gogoproto.goproto_enum_prefix)": false
                                },
                                values: {
                                  AUTO: 0,
                                  HTTP1: 1,
                                  HTTP2: 2
                                }
                              },
                              Tracing: {
                                fields: {
                                  operationName: {
                                    type: "OperationName",
                                    id: 1
                                  },
                                  requestHeadersForTags: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 2
                                  },
                                  clientSampling: {
                                    type: "envoy.type.Percent",
                                    id: 3
                                  },
                                  randomSampling: {
                                    type: "envoy.type.Percent",
                                    id: 4
                                  },
                                  overallSampling: {
                                    type: "envoy.type.Percent",
                                    id: 5
                                  }
                                },
                                nested: {
                                  OperationName: {
                                    options: {
                                      "(gogoproto.goproto_enum_prefix)": false
                                    },
                                    values: {
                                      INGRESS: 0,
                                      EGRESS: 1
                                    }
                                  }
                                }
                              },
                              InternalAddressConfig: {
                                fields: {
                                  unixSockets: {
                                    type: "bool",
                                    id: 1
                                  }
                                }
                              },
                              ForwardClientCertDetails: {
                                options: {
                                  "(gogoproto.goproto_enum_prefix)": false
                                },
                                values: {
                                  SANITIZE: 0,
                                  FORWARD_ONLY: 1,
                                  APPEND_FORWARD: 2,
                                  SANITIZE_SET: 3,
                                  ALWAYS_FORWARD_ONLY: 4
                                }
                              },
                              SetCurrentClientCertDetails: {
                                fields: {
                                  subject: {
                                    type: "google.protobuf.BoolValue",
                                    id: 1
                                  },
                                  cert: {
                                    type: "bool",
                                    id: 3
                                  },
                                  dns: {
                                    type: "bool",
                                    id: 4
                                  },
                                  uri: {
                                    type: "bool",
                                    id: 5
                                  }
                                },
                                reserved: [
                                  [
                                    2,
                                    2
                                  ]
                                ]
                              },
                              UpgradeConfig: {
                                fields: {
                                  upgradeType: {
                                    type: "string",
                                    id: 1
                                  },
                                  filters: {
                                    rule: "repeated",
                                    type: "HttpFilter",
                                    id: 2
                                  },
                                  enabled: {
                                    type: "google.protobuf.BoolValue",
                                    id: 3
                                  }
                                }
                              }
                            }
                          },
                          Rds: {
                            fields: {
                              configSource: {
                                type: "envoy.api.v2.core.ConfigSource",
                                id: 1
                              },
                              routeConfigName: {
                                type: "string",
                                id: 2
                              }
                            }
                          },
                          HttpFilter: {
                            oneofs: {
                              configType: {
                                oneof: [
                                  "config",
                                  "typedConfig"
                                ]
                              }
                            },
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              config: {
                                type: "google.protobuf.Struct",
                                id: 2,
                                options: {
                                  deprecated: true
                                }
                              },
                              typedConfig: {
                                type: "google.protobuf.Any",
                                id: 4
                              }
                            },
                            reserved: [
                              [
                                3,
                                3
                              ]
                            ]
                          }
                        }
                      }
                    }
                  },
                  mongo_proxy: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "MongoProxyProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.mongo_proxy.v2",
                          go_package: "v2"
                        },
                        nested: {
                          MongoProxy: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              accessLog: {
                                type: "string",
                                id: 2
                              },
                              delay: {
                                type: "envoy.config.filter.fault.v2.FaultDelay",
                                id: 3
                              },
                              emitDynamicMetadata: {
                                type: "bool",
                                id: 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  mysql_proxy: {
                    nested: {
                      v1alpha1: {
                        options: {
                          java_outer_classname: "MysqlProxyProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.mysql_proxy.v1alpha1",
                          go_package: "v1alpha1"
                        },
                        nested: {
                          MySQLProxy: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              accessLog: {
                                type: "string",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  rate_limit: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RateLimitProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.rate_limit.v2",
                          go_package: "v2"
                        },
                        nested: {
                          RateLimit: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              domain: {
                                type: "string",
                                id: 2
                              },
                              descriptors: {
                                rule: "repeated",
                                type: "envoy.api.v2.ratelimit.RateLimitDescriptor",
                                id: 3
                              },
                              timeout: {
                                type: "google.protobuf.Duration",
                                id: 4
                              },
                              failureModeDeny: {
                                type: "bool",
                                id: 5
                              },
                              rateLimitService: {
                                type: "envoy.config.ratelimit.v2.RateLimitServiceConfig",
                                id: 6
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  rbac: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RbacProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.rbac.v2",
                          go_package: "v2"
                        },
                        nested: {
                          RBAC: {
                            fields: {
                              rules: {
                                type: "config.rbac.v2alpha.RBAC",
                                id: 1
                              },
                              shadowRules: {
                                type: "config.rbac.v2alpha.RBAC",
                                id: 2
                              },
                              statPrefix: {
                                type: "string",
                                id: 3
                              },
                              enforcementType: {
                                type: "EnforcementType",
                                id: 4
                              }
                            },
                            nested: {
                              EnforcementType: {
                                values: {
                                  ONE_TIME_ON_FIRST_BYTE: 0,
                                  CONTINUOUS: 1
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  redis_proxy: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "RedisProxyProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.redis_proxy.v2",
                          go_package: "v2"
                        },
                        nested: {
                          RedisProxy: {
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              cluster: {
                                type: "string",
                                id: 2
                              },
                              settings: {
                                type: "ConnPoolSettings",
                                id: 3
                              }
                            },
                            nested: {
                              ConnPoolSettings: {
                                fields: {
                                  opTimeout: {
                                    type: "google.protobuf.Duration",
                                    id: 1
                                  },
                                  enableHashtagging: {
                                    type: "bool",
                                    id: 2
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  tcp_proxy: {
                    nested: {
                      v2: {
                        options: {
                          java_outer_classname: "TcpProxyProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.tcp_proxy.v2",
                          go_package: "v2"
                        },
                        nested: {
                          TcpProxy: {
                            oneofs: {
                              clusterSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "cluster",
                                  "weightedClusters"
                                ]
                              }
                            },
                            fields: {
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              cluster: {
                                type: "string",
                                id: 2
                              },
                              weightedClusters: {
                                type: "WeightedCluster",
                                id: 10
                              },
                              metadataMatch: {
                                type: "envoy.api.v2.core.Metadata",
                                id: 9
                              },
                              idleTimeout: {
                                type: "google.protobuf.Duration",
                                id: 8
                              },
                              downstreamIdleTimeout: {
                                type: "google.protobuf.Duration",
                                id: 3
                              },
                              upstreamIdleTimeout: {
                                type: "google.protobuf.Duration",
                                id: 4
                              },
                              accessLog: {
                                rule: "repeated",
                                type: "envoy.config.filter.accesslog.v2.AccessLog",
                                id: 5
                              },
                              deprecatedV1: {
                                type: "DeprecatedV1",
                                id: 6,
                                options: {
                                  deprecated: true
                                }
                              },
                              maxConnectAttempts: {
                                type: "google.protobuf.UInt32Value",
                                id: 7
                              }
                            },
                            nested: {
                              DeprecatedV1: {
                                fields: {
                                  routes: {
                                    rule: "repeated",
                                    type: "TCPRoute",
                                    id: 1
                                  }
                                },
                                nested: {
                                  TCPRoute: {
                                    fields: {
                                      cluster: {
                                        type: "string",
                                        id: 1
                                      },
                                      destinationIpList: {
                                        rule: "repeated",
                                        type: "envoy.api.v2.core.CidrRange",
                                        id: 2
                                      },
                                      destinationPorts: {
                                        type: "string",
                                        id: 3
                                      },
                                      sourceIpList: {
                                        rule: "repeated",
                                        type: "envoy.api.v2.core.CidrRange",
                                        id: 4
                                      },
                                      sourcePorts: {
                                        type: "string",
                                        id: 5
                                      }
                                    }
                                  }
                                }
                              },
                              WeightedCluster: {
                                fields: {
                                  clusters: {
                                    rule: "repeated",
                                    type: "ClusterWeight",
                                    id: 1
                                  }
                                },
                                nested: {
                                  ClusterWeight: {
                                    fields: {
                                      name: {
                                        type: "string",
                                        id: 1
                                      },
                                      weight: {
                                        type: "uint32",
                                        id: 2
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  thrift_proxy: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "ThriftProxyProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.network.thrift_proxy.v2alpha1",
                          go_package: "v2"
                        },
                        nested: {
                          RouteConfiguration: {
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              routes: {
                                rule: "repeated",
                                type: "Route",
                                id: 2
                              }
                            }
                          },
                          Route: {
                            fields: {
                              match: {
                                type: "RouteMatch",
                                id: 1
                              },
                              route: {
                                type: "RouteAction",
                                id: 2
                              }
                            }
                          },
                          RouteMatch: {
                            oneofs: {
                              matchSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "methodName",
                                  "serviceName"
                                ]
                              }
                            },
                            fields: {
                              methodName: {
                                type: "string",
                                id: 1
                              },
                              serviceName: {
                                type: "string",
                                id: 2
                              },
                              invert: {
                                type: "bool",
                                id: 3
                              },
                              headers: {
                                rule: "repeated",
                                type: "envoy.api.v2.route.HeaderMatcher",
                                id: 4
                              }
                            }
                          },
                          RouteAction: {
                            oneofs: {
                              clusterSpecifier: {
                                options: {
                                  "(validate.required)": true
                                },
                                oneof: [
                                  "cluster",
                                  "weightedClusters"
                                ]
                              }
                            },
                            fields: {
                              cluster: {
                                type: "string",
                                id: 1
                              },
                              weightedClusters: {
                                type: "WeightedCluster",
                                id: 2
                              },
                              metadataMatch: {
                                type: "envoy.api.v2.core.Metadata",
                                id: 3
                              },
                              rateLimits: {
                                rule: "repeated",
                                type: "envoy.api.v2.route.RateLimit",
                                id: 4
                              }
                            }
                          },
                          WeightedCluster: {
                            fields: {
                              clusters: {
                                rule: "repeated",
                                type: "ClusterWeight",
                                id: 1
                              }
                            },
                            nested: {
                              ClusterWeight: {
                                fields: {
                                  name: {
                                    type: "string",
                                    id: 1
                                  },
                                  weight: {
                                    type: "google.protobuf.UInt32Value",
                                    id: 2
                                  },
                                  metadataMatch: {
                                    type: "envoy.api.v2.core.Metadata",
                                    id: 3
                                  }
                                }
                              }
                            }
                          },
                          ThriftProxy: {
                            fields: {
                              transport: {
                                type: "TransportType",
                                id: 2
                              },
                              protocol: {
                                type: "ProtocolType",
                                id: 3
                              },
                              statPrefix: {
                                type: "string",
                                id: 1
                              },
                              routeConfig: {
                                type: "RouteConfiguration",
                                id: 4
                              },
                              thriftFilters: {
                                rule: "repeated",
                                type: "ThriftFilter",
                                id: 5
                              }
                            }
                          },
                          TransportType: {
                            options: {
                              "(gogoproto.goproto_enum_prefix)": false
                            },
                            values: {
                              AUTO_TRANSPORT: 0,
                              FRAMED: 1,
                              UNFRAMED: 2,
                              HEADER: 3
                            }
                          },
                          ProtocolType: {
                            options: {
                              "(gogoproto.goproto_enum_prefix)": false
                            },
                            values: {
                              AUTO_PROTOCOL: 0,
                              BINARY: 1,
                              LAX_BINARY: 2,
                              COMPACT: 3,
                              TWITTER: 4
                            }
                          },
                          ThriftFilter: {
                            oneofs: {
                              configType: {
                                oneof: [
                                  "config",
                                  "typedConfig"
                                ]
                              }
                            },
                            fields: {
                              name: {
                                type: "string",
                                id: 1
                              },
                              config: {
                                type: "google.protobuf.Struct",
                                id: 2,
                                options: {
                                  deprecated: true
                                }
                              },
                              typedConfig: {
                                type: "google.protobuf.Any",
                                id: 3
                              }
                            }
                          },
                          ThriftProtocolOptions: {
                            fields: {
                              transport: {
                                type: "TransportType",
                                id: 1
                              },
                              protocol: {
                                type: "ProtocolType",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              thrift: {
                nested: {
                  rate_limit: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "RateLimitProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.thrift.rate_limit.v2alpha1",
                          go_package: "v2alpha1"
                        },
                        nested: {
                          RateLimit: {
                            fields: {
                              domain: {
                                type: "string",
                                id: 1
                              },
                              stage: {
                                type: "uint32",
                                id: 2
                              },
                              timeout: {
                                type: "google.protobuf.Duration",
                                id: 3
                              },
                              failureModeDeny: {
                                type: "bool",
                                id: 4
                              },
                              rateLimitService: {
                                type: "envoy.config.ratelimit.v2.RateLimitServiceConfig",
                                id: 5
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  router: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "RouterProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.config.filter.thrift.router.v2alpha1",
                          go_package: "v2alpha1"
                        },
                        nested: {
                          Router: {
                            fields: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          rbac: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "RbacProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.rbac.v2alpha",
                  go_package: "v2alpha"
                },
                nested: {
                  RBAC: {
                    fields: {
                      action: {
                        type: "Action",
                        id: 1
                      },
                      policies: {
                        keyType: "string",
                        type: "Policy",
                        id: 2
                      }
                    },
                    nested: {
                      Action: {
                        values: {
                          ALLOW: 0,
                          DENY: 1
                        }
                      }
                    }
                  },
                  Policy: {
                    fields: {
                      permissions: {
                        rule: "repeated",
                        type: "Permission",
                        id: 1
                      },
                      principals: {
                        rule: "repeated",
                        type: "Principal",
                        id: 2
                      }
                    }
                  },
                  Permission: {
                    oneofs: {
                      rule: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "andRules",
                          "orRules",
                          "any",
                          "header",
                          "destinationIp",
                          "destinationPort",
                          "metadata",
                          "notRule",
                          "requestedServerName"
                        ]
                      }
                    },
                    fields: {
                      andRules: {
                        type: "Set",
                        id: 1
                      },
                      orRules: {
                        type: "Set",
                        id: 2
                      },
                      any: {
                        type: "bool",
                        id: 3
                      },
                      header: {
                        type: "envoy.api.v2.route.HeaderMatcher",
                        id: 4
                      },
                      destinationIp: {
                        type: "envoy.api.v2.core.CidrRange",
                        id: 5
                      },
                      destinationPort: {
                        type: "uint32",
                        id: 6
                      },
                      metadata: {
                        type: "envoy.type.matcher.MetadataMatcher",
                        id: 7
                      },
                      notRule: {
                        type: "Permission",
                        id: 8
                      },
                      requestedServerName: {
                        type: "envoy.type.matcher.StringMatcher",
                        id: 9
                      }
                    },
                    nested: {
                      Set: {
                        fields: {
                          rules: {
                            rule: "repeated",
                            type: "Permission",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  Principal: {
                    oneofs: {
                      identifier: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "andIds",
                          "orIds",
                          "any",
                          "authenticated",
                          "sourceIp",
                          "header",
                          "metadata",
                          "notId"
                        ]
                      }
                    },
                    fields: {
                      andIds: {
                        type: "Set",
                        id: 1
                      },
                      orIds: {
                        type: "Set",
                        id: 2
                      },
                      any: {
                        type: "bool",
                        id: 3
                      },
                      authenticated: {
                        type: "Authenticated",
                        id: 4
                      },
                      sourceIp: {
                        type: "envoy.api.v2.core.CidrRange",
                        id: 5
                      },
                      header: {
                        type: "envoy.api.v2.route.HeaderMatcher",
                        id: 6
                      },
                      metadata: {
                        type: "envoy.type.matcher.MetadataMatcher",
                        id: 7
                      },
                      notId: {
                        type: "Principal",
                        id: 8
                      }
                    },
                    nested: {
                      Set: {
                        fields: {
                          ids: {
                            rule: "repeated",
                            type: "Principal",
                            id: 1
                          }
                        }
                      },
                      Authenticated: {
                        fields: {
                          principalName: {
                            type: "envoy.type.matcher.StringMatcher",
                            id: 2
                          }
                        },
                        reserved: [
                          [
                            1,
                            1
                          ],
                          "name"
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          grpc_credential: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "FileBasedMetadataProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.grpc_credential.v2alpha",
                  go_package: "v2alpha"
                },
                nested: {
                  FileBasedMetadataConfig: {
                    fields: {
                      secretData: {
                        type: "envoy.api.v2.core.DataSource",
                        id: 1
                      },
                      headerKey: {
                        type: "string",
                        id: 2
                      },
                      headerPrefix: {
                        type: "string",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          health_checker: {
            nested: {
              redis: {
                nested: {
                  v2: {
                    options: {
                      java_outer_classname: "RedisProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.health_checker.redis.v2",
                      go_package: "v2"
                    },
                    nested: {
                      Redis: {
                        fields: {
                          key: {
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          resource_monitor: {
            nested: {
              fixed_heap: {
                nested: {
                  v2alpha: {
                    options: {
                      java_outer_classname: "FixedHeapProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.resource_monitor.fixed_heap.v2alpha",
                      go_package: "v2alpha"
                    },
                    nested: {
                      FixedHeapConfig: {
                        fields: {
                          maxHeapSizeBytes: {
                            type: "uint64",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              },
              injected_resource: {
                nested: {
                  v2alpha: {
                    options: {
                      java_outer_classname: "InjectedResourceProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.resource_monitor.injected_resource.v2alpha",
                      go_package: "v2alpha"
                    },
                    nested: {
                      InjectedResourceConfig: {
                        fields: {
                          filename: {
                            type: "string",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          retry: {
            nested: {
              previous_priorities: {
                options: {
                  java_outer_classname: "PreviousPrioritiesConfigProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.config.retry.previous_priorities"
                },
                nested: {
                  PreviousPrioritiesConfig: {
                    fields: {
                      updateFrequency: {
                        type: "int32",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          transport_socket: {
            nested: {
              alts: {
                nested: {
                  v2alpha: {
                    options: {
                      java_outer_classname: "AltsProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.transport_socket.alts.v2alpha",
                      go_package: "v2"
                    },
                    nested: {
                      Alts: {
                        fields: {
                          handshakerService: {
                            type: "string",
                            id: 1
                          },
                          peerServiceAccounts: {
                            rule: "repeated",
                            type: "string",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              },
              tap: {
                nested: {
                  v2alpha: {
                    options: {
                      java_outer_classname: "TapProto",
                      java_multiple_files: true,
                      java_package: "io.envoyproxy.envoy.config.transport_socket.tap.v2alpha",
                      go_package: "v2"
                    },
                    nested: {
                      Tap: {
                        fields: {
                          commonConfig: {
                            type: "common.tap.v2alpha.CommonExtensionConfig",
                            id: 1
                          },
                          transportSocket: {
                            type: "api.v2.core.TransportSocket",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      service: {
        nested: {
          tap: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "CommonProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.tap.v2alpha"
                },
                nested: {
                  TapConfig: {
                    fields: {
                      matchConfig: {
                        type: "MatchPredicate",
                        id: 1
                      },
                      outputConfig: {
                        type: "OutputConfig",
                        id: 2
                      }
                    }
                  },
                  MatchPredicate: {
                    oneofs: {
                      rule: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "orMatch",
                          "andMatch",
                          "notMatch",
                          "anyMatch",
                          "httpRequestHeadersMatch",
                          "httpRequestTrailersMatch",
                          "httpResponseHeadersMatch",
                          "httpResponseTrailersMatch"
                        ]
                      }
                    },
                    fields: {
                      orMatch: {
                        type: "MatchSet",
                        id: 1
                      },
                      andMatch: {
                        type: "MatchSet",
                        id: 2
                      },
                      notMatch: {
                        type: "MatchPredicate",
                        id: 3
                      },
                      anyMatch: {
                        type: "bool",
                        id: 4
                      },
                      httpRequestHeadersMatch: {
                        type: "HttpHeadersMatch",
                        id: 5
                      },
                      httpRequestTrailersMatch: {
                        type: "HttpHeadersMatch",
                        id: 6
                      },
                      httpResponseHeadersMatch: {
                        type: "HttpHeadersMatch",
                        id: 7
                      },
                      httpResponseTrailersMatch: {
                        type: "HttpHeadersMatch",
                        id: 8
                      }
                    },
                    nested: {
                      MatchSet: {
                        fields: {
                          rules: {
                            rule: "repeated",
                            type: "MatchPredicate",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  HttpHeadersMatch: {
                    fields: {
                      headers: {
                        rule: "repeated",
                        type: "api.v2.route.HeaderMatcher",
                        id: 1
                      }
                    }
                  },
                  OutputConfig: {
                    fields: {
                      sinks: {
                        rule: "repeated",
                        type: "OutputSink",
                        id: 1
                      }
                    }
                  },
                  OutputSink: {
                    oneofs: {
                      outputSinkType: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "streamingAdmin",
                          "filePerTap"
                        ]
                      }
                    },
                    fields: {
                      streamingAdmin: {
                        type: "StreamingAdminSink",
                        id: 1
                      },
                      filePerTap: {
                        type: "FilePerTapSink",
                        id: 2
                      }
                    }
                  },
                  StreamingAdminSink: {
                    fields: {}
                  },
                  FilePerTapSink: {
                    fields: {
                      pathPrefix: {
                        type: "string",
                        id: 1
                      },
                      format: {
                        type: "Format",
                        id: 2
                      }
                    },
                    nested: {
                      Format: {
                        values: {
                          PROTO_BINARY: 0,
                          PROTO_TEXT: 1
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          accesslog: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "AlsProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.accesslog.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  AccessLogService: {
                    methods: {
                      StreamAccessLogs: {
                        requestType: "StreamAccessLogsMessage",
                        requestStream: true,
                        responseType: "StreamAccessLogsResponse"
                      }
                    }
                  },
                  StreamAccessLogsResponse: {
                    fields: {}
                  },
                  StreamAccessLogsMessage: {
                    oneofs: {
                      logEntries: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "httpLogs",
                          "tcpLogs"
                        ]
                      }
                    },
                    fields: {
                      identifier: {
                        type: "Identifier",
                        id: 1
                      },
                      httpLogs: {
                        type: "HTTPAccessLogEntries",
                        id: 2
                      },
                      tcpLogs: {
                        type: "TCPAccessLogEntries",
                        id: 3
                      }
                    },
                    nested: {
                      Identifier: {
                        fields: {
                          node: {
                            type: "envoy.api.v2.core.Node",
                            id: 1
                          },
                          logName: {
                            type: "string",
                            id: 2
                          }
                        }
                      },
                      HTTPAccessLogEntries: {
                        fields: {
                          logEntry: {
                            rule: "repeated",
                            type: "envoy.data.accesslog.v2.HTTPAccessLogEntry",
                            id: 1
                          }
                        }
                      },
                      TCPAccessLogEntries: {
                        fields: {
                          logEntry: {
                            rule: "repeated",
                            type: "envoy.data.accesslog.v2.TCPAccessLogEntry",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          auth: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "ExternalAuthProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.auth.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  AttributeContext: {
                    fields: {
                      source: {
                        type: "Peer",
                        id: 1
                      },
                      destination: {
                        type: "Peer",
                        id: 2
                      },
                      request: {
                        type: "Request",
                        id: 4
                      },
                      contextExtensions: {
                        keyType: "string",
                        type: "string",
                        id: 10
                      }
                    },
                    nested: {
                      Peer: {
                        fields: {
                          address: {
                            type: "envoy.api.v2.core.Address",
                            id: 1
                          },
                          service: {
                            type: "string",
                            id: 2
                          },
                          labels: {
                            keyType: "string",
                            type: "string",
                            id: 3
                          },
                          principal: {
                            type: "string",
                            id: 4
                          }
                        }
                      },
                      Request: {
                        fields: {
                          time: {
                            type: "google.protobuf.Timestamp",
                            id: 1
                          },
                          http: {
                            type: "HttpRequest",
                            id: 2
                          }
                        }
                      },
                      HttpRequest: {
                        fields: {
                          id: {
                            type: "string",
                            id: 1
                          },
                          method: {
                            type: "string",
                            id: 2
                          },
                          headers: {
                            keyType: "string",
                            type: "string",
                            id: 3
                          },
                          path: {
                            type: "string",
                            id: 4
                          },
                          host: {
                            type: "string",
                            id: 5
                          },
                          scheme: {
                            type: "string",
                            id: 6
                          },
                          query: {
                            type: "string",
                            id: 7
                          },
                          fragment: {
                            type: "string",
                            id: 8
                          },
                          size: {
                            type: "int64",
                            id: 9
                          },
                          protocol: {
                            type: "string",
                            id: 10
                          }
                        }
                      }
                    }
                  },
                  Authorization: {
                    methods: {
                      Check: {
                        requestType: "CheckRequest",
                        responseType: "CheckResponse"
                      }
                    }
                  },
                  CheckRequest: {
                    fields: {
                      attributes: {
                        type: "AttributeContext",
                        id: 1
                      }
                    }
                  },
                  DeniedHttpResponse: {
                    fields: {
                      status: {
                        type: "envoy.type.HttpStatus",
                        id: 1
                      },
                      headers: {
                        rule: "repeated",
                        type: "envoy.api.v2.core.HeaderValueOption",
                        id: 2
                      },
                      body: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  OkHttpResponse: {
                    fields: {
                      headers: {
                        rule: "repeated",
                        type: "envoy.api.v2.core.HeaderValueOption",
                        id: 2
                      }
                    }
                  },
                  CheckResponse: {
                    oneofs: {
                      httpResponse: {
                        oneof: [
                          "deniedResponse",
                          "okResponse"
                        ]
                      }
                    },
                    fields: {
                      status: {
                        type: "google.rpc.Status",
                        id: 1
                      },
                      deniedResponse: {
                        type: "DeniedHttpResponse",
                        id: 2
                      },
                      okResponse: {
                        type: "OkHttpResponse",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          discovery: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "SdsProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.discovery.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  AdsDummy: {
                    fields: {}
                  },
                  AggregatedDiscoveryService: {
                    methods: {
                      StreamAggregatedResources: {
                        requestType: "envoy.api.v2.DiscoveryRequest",
                        requestStream: true,
                        responseType: "envoy.api.v2.DiscoveryResponse",
                        responseStream: true
                      },
                      IncrementalAggregatedResources: {
                        requestType: "envoy.api.v2.IncrementalDiscoveryRequest",
                        requestStream: true,
                        responseType: "envoy.api.v2.IncrementalDiscoveryResponse",
                        responseStream: true
                      }
                    }
                  },
                  HealthDiscoveryService: {
                    methods: {
                      StreamHealthCheck: {
                        requestType: "HealthCheckRequestOrEndpointHealthResponse",
                        requestStream: true,
                        responseType: "HealthCheckSpecifier",
                        responseStream: true
                      },
                      FetchHealthCheck: {
                        requestType: "HealthCheckRequestOrEndpointHealthResponse",
                        responseType: "HealthCheckSpecifier",
                        options: {
                          "(google.api.http).post": "/v2/discovery:health_check",
                          "(google.api.http).body": "*"
                        }
                      }
                    }
                  },
                  Capability: {
                    fields: {
                      healthCheckProtocols: {
                        rule: "repeated",
                        type: "Protocol",
                        id: 1
                      }
                    },
                    nested: {
                      Protocol: {
                        values: {
                          HTTP: 0,
                          TCP: 1,
                          REDIS: 2
                        }
                      }
                    }
                  },
                  HealthCheckRequest: {
                    fields: {
                      node: {
                        type: "envoy.api.v2.core.Node",
                        id: 1
                      },
                      capability: {
                        type: "Capability",
                        id: 2
                      }
                    }
                  },
                  EndpointHealth: {
                    fields: {
                      endpoint: {
                        type: "envoy.api.v2.endpoint.Endpoint",
                        id: 1
                      },
                      healthStatus: {
                        type: "envoy.api.v2.core.HealthStatus",
                        id: 2
                      }
                    }
                  },
                  EndpointHealthResponse: {
                    fields: {
                      endpointsHealth: {
                        rule: "repeated",
                        type: "EndpointHealth",
                        id: 1
                      }
                    }
                  },
                  HealthCheckRequestOrEndpointHealthResponse: {
                    oneofs: {
                      requestType: {
                        oneof: [
                          "healthCheckRequest",
                          "endpointHealthResponse"
                        ]
                      }
                    },
                    fields: {
                      healthCheckRequest: {
                        type: "HealthCheckRequest",
                        id: 1
                      },
                      endpointHealthResponse: {
                        type: "EndpointHealthResponse",
                        id: 2
                      }
                    }
                  },
                  LocalityEndpoints: {
                    fields: {
                      locality: {
                        type: "envoy.api.v2.core.Locality",
                        id: 1
                      },
                      endpoints: {
                        rule: "repeated",
                        type: "envoy.api.v2.endpoint.Endpoint",
                        id: 2
                      }
                    }
                  },
                  ClusterHealthCheck: {
                    fields: {
                      clusterName: {
                        type: "string",
                        id: 1
                      },
                      healthChecks: {
                        rule: "repeated",
                        type: "envoy.api.v2.core.HealthCheck",
                        id: 2
                      },
                      localityEndpoints: {
                        rule: "repeated",
                        type: "LocalityEndpoints",
                        id: 3
                      }
                    }
                  },
                  HealthCheckSpecifier: {
                    fields: {
                      clusterHealthChecks: {
                        rule: "repeated",
                        type: "ClusterHealthCheck",
                        id: 1
                      },
                      interval: {
                        type: "google.protobuf.Duration",
                        id: 2
                      }
                    }
                  },
                  SdsDummy: {
                    fields: {}
                  },
                  SecretDiscoveryService: {
                    methods: {
                      StreamSecrets: {
                        requestType: "envoy.api.v2.DiscoveryRequest",
                        requestStream: true,
                        responseType: "envoy.api.v2.DiscoveryResponse",
                        responseStream: true
                      },
                      FetchSecrets: {
                        requestType: "envoy.api.v2.DiscoveryRequest",
                        responseType: "envoy.api.v2.DiscoveryResponse",
                        options: {
                          "(google.api.http).post": "/v2/discovery:secrets",
                          "(google.api.http).body": "*"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          load_stats: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "LrsProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.load_stats.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  LoadReportingService: {
                    methods: {
                      StreamLoadStats: {
                        requestType: "LoadStatsRequest",
                        requestStream: true,
                        responseType: "LoadStatsResponse",
                        responseStream: true
                      }
                    }
                  },
                  LoadStatsRequest: {
                    fields: {
                      node: {
                        type: "envoy.api.v2.core.Node",
                        id: 1
                      },
                      clusterStats: {
                        rule: "repeated",
                        type: "envoy.api.v2.endpoint.ClusterStats",
                        id: 2
                      }
                    }
                  },
                  LoadStatsResponse: {
                    fields: {
                      clusters: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                      },
                      loadReportingInterval: {
                        type: "google.protobuf.Duration",
                        id: 2
                      },
                      reportEndpointGranularity: {
                        type: "bool",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          metrics: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "MetricsServiceProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.metrics.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  MetricsService: {
                    methods: {
                      StreamMetrics: {
                        requestType: "StreamMetricsMessage",
                        requestStream: true,
                        responseType: "StreamMetricsResponse"
                      }
                    }
                  },
                  StreamMetricsResponse: {
                    fields: {}
                  },
                  StreamMetricsMessage: {
                    fields: {
                      identifier: {
                        type: "Identifier",
                        id: 1
                      },
                      envoyMetrics: {
                        rule: "repeated",
                        type: "io.prometheus.client.MetricFamily",
                        id: 2
                      }
                    },
                    nested: {
                      Identifier: {
                        fields: {
                          node: {
                            type: "envoy.api.v2.core.Node",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ratelimit: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "RlsProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.ratelimit.v2",
                  go_package: "v2"
                },
                nested: {
                  RateLimitService: {
                    methods: {
                      ShouldRateLimit: {
                        requestType: "RateLimitRequest",
                        responseType: "RateLimitResponse"
                      }
                    }
                  },
                  RateLimitRequest: {
                    fields: {
                      domain: {
                        type: "string",
                        id: 1
                      },
                      descriptors: {
                        rule: "repeated",
                        type: "envoy.api.v2.ratelimit.RateLimitDescriptor",
                        id: 2
                      },
                      hitsAddend: {
                        type: "uint32",
                        id: 3
                      }
                    }
                  },
                  RateLimitResponse: {
                    fields: {
                      overallCode: {
                        type: "Code",
                        id: 1
                      },
                      statuses: {
                        rule: "repeated",
                        type: "DescriptorStatus",
                        id: 2
                      },
                      headers: {
                        rule: "repeated",
                        type: "envoy.api.v2.core.HeaderValue",
                        id: 3
                      }
                    },
                    nested: {
                      Code: {
                        values: {
                          UNKNOWN: 0,
                          OK: 1,
                          OVER_LIMIT: 2
                        }
                      },
                      RateLimit: {
                        fields: {
                          requestsPerUnit: {
                            type: "uint32",
                            id: 1
                          },
                          unit: {
                            type: "Unit",
                            id: 2
                          }
                        },
                        nested: {
                          Unit: {
                            values: {
                              UNKNOWN: 0,
                              SECOND: 1,
                              MINUTE: 2,
                              HOUR: 3,
                              DAY: 4
                            }
                          }
                        }
                      },
                      DescriptorStatus: {
                        fields: {
                          code: {
                            type: "Code",
                            id: 1
                          },
                          currentLimit: {
                            type: "RateLimit",
                            id: 2
                          },
                          limitRemaining: {
                            type: "uint32",
                            id: 3
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          trace: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "TraceServiceProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.service.trace.v2",
                  go_package: "v2",
                  java_generic_services: true
                },
                nested: {
                  TraceService: {
                    methods: {
                      StreamTraces: {
                        requestType: "StreamTracesMessage",
                        requestStream: true,
                        responseType: "StreamTracesResponse"
                      }
                    }
                  },
                  StreamTracesResponse: {
                    fields: {}
                  },
                  StreamTracesMessage: {
                    fields: {
                      identifier: {
                        type: "Identifier",
                        id: 1
                      },
                      spans: {
                        rule: "repeated",
                        type: "opencensus.proto.trace.v1.Span",
                        id: 2
                      }
                    },
                    nested: {
                      Identifier: {
                        fields: {
                          node: {
                            type: "envoy.api.v2.core.Node",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      extensions: {
        nested: {
          filter: {
            nested: {
              http: {
                nested: {
                  grpc_http1_reverse_bridge: {
                    nested: {
                      v2alpha1: {
                        options: {
                          java_outer_classname: "ConfigProto",
                          java_multiple_files: true,
                          java_package: "io.envoyproxy.envoy.extensions.filter.http.grpc_http1_reverse_bridge.v2alpha1",
                          go_package: "v2"
                        },
                        nested: {
                          FilterConfig: {
                            fields: {
                              contentType: {
                                type: "string",
                                id: 1
                              },
                              withholdGrpcFrames: {
                                type: "bool",
                                id: 2
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      data: {
        nested: {
          accesslog: {
            nested: {
              v2: {
                options: {
                  java_outer_classname: "AccesslogProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.data.accesslog.v2"
                },
                nested: {
                  TCPAccessLogEntry: {
                    fields: {
                      commonProperties: {
                        type: "AccessLogCommon",
                        id: 1
                      }
                    }
                  },
                  HTTPAccessLogEntry: {
                    fields: {
                      commonProperties: {
                        type: "AccessLogCommon",
                        id: 1
                      },
                      protocolVersion: {
                        type: "HTTPVersion",
                        id: 2
                      },
                      request: {
                        type: "HTTPRequestProperties",
                        id: 3
                      },
                      response: {
                        type: "HTTPResponseProperties",
                        id: 4
                      }
                    },
                    nested: {
                      HTTPVersion: {
                        values: {
                          PROTOCOL_UNSPECIFIED: 0,
                          HTTP10: 1,
                          HTTP11: 2,
                          HTTP2: 3
                        }
                      }
                    }
                  },
                  AccessLogCommon: {
                    fields: {
                      sampleRate: {
                        type: "double",
                        id: 1
                      },
                      downstreamRemoteAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 2
                      },
                      downstreamLocalAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 3
                      },
                      tlsProperties: {
                        type: "TLSProperties",
                        id: 4
                      },
                      startTime: {
                        type: "google.protobuf.Timestamp",
                        id: 5
                      },
                      timeToLastRxByte: {
                        type: "google.protobuf.Duration",
                        id: 6
                      },
                      timeToFirstUpstreamTxByte: {
                        type: "google.protobuf.Duration",
                        id: 7
                      },
                      timeToLastUpstreamTxByte: {
                        type: "google.protobuf.Duration",
                        id: 8
                      },
                      timeToFirstUpstreamRxByte: {
                        type: "google.protobuf.Duration",
                        id: 9
                      },
                      timeToLastUpstreamRxByte: {
                        type: "google.protobuf.Duration",
                        id: 10
                      },
                      timeToFirstDownstreamTxByte: {
                        type: "google.protobuf.Duration",
                        id: 11
                      },
                      timeToLastDownstreamTxByte: {
                        type: "google.protobuf.Duration",
                        id: 12
                      },
                      upstreamRemoteAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 13
                      },
                      upstreamLocalAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 14
                      },
                      upstreamCluster: {
                        type: "string",
                        id: 15
                      },
                      responseFlags: {
                        type: "ResponseFlags",
                        id: 16
                      },
                      metadata: {
                        type: "envoy.api.v2.core.Metadata",
                        id: 17
                      }
                    }
                  },
                  ResponseFlags: {
                    fields: {
                      failedLocalHealthcheck: {
                        type: "bool",
                        id: 1
                      },
                      noHealthyUpstream: {
                        type: "bool",
                        id: 2
                      },
                      upstreamRequestTimeout: {
                        type: "bool",
                        id: 3
                      },
                      localReset: {
                        type: "bool",
                        id: 4
                      },
                      upstreamRemoteReset: {
                        type: "bool",
                        id: 5
                      },
                      upstreamConnectionFailure: {
                        type: "bool",
                        id: 6
                      },
                      upstreamConnectionTermination: {
                        type: "bool",
                        id: 7
                      },
                      upstreamOverflow: {
                        type: "bool",
                        id: 8
                      },
                      noRouteFound: {
                        type: "bool",
                        id: 9
                      },
                      delayInjected: {
                        type: "bool",
                        id: 10
                      },
                      faultInjected: {
                        type: "bool",
                        id: 11
                      },
                      rateLimited: {
                        type: "bool",
                        id: 12
                      },
                      unauthorizedDetails: {
                        type: "Unauthorized",
                        id: 13
                      },
                      rateLimitServiceError: {
                        type: "bool",
                        id: 14
                      },
                      downstreamConnectionTermination: {
                        type: "bool",
                        id: 15
                      },
                      upstreamRetryLimitExceeded: {
                        type: "bool",
                        id: 16
                      }
                    },
                    nested: {
                      Unauthorized: {
                        fields: {
                          reason: {
                            type: "Reason",
                            id: 1
                          }
                        },
                        nested: {
                          Reason: {
                            values: {
                              REASON_UNSPECIFIED: 0,
                              EXTERNAL_SERVICE: 1
                            }
                          }
                        }
                      }
                    }
                  },
                  TLSProperties: {
                    fields: {
                      tlsVersion: {
                        type: "TLSVersion",
                        id: 1
                      },
                      tlsCipherSuite: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      },
                      tlsSniHostname: {
                        type: "string",
                        id: 3
                      }
                    },
                    nested: {
                      TLSVersion: {
                        values: {
                          VERSION_UNSPECIFIED: 0,
                          TLSv1: 1,
                          TLSv1_1: 2,
                          TLSv1_2: 3,
                          TLSv1_3: 4
                        }
                      }
                    }
                  },
                  HTTPRequestProperties: {
                    fields: {
                      requestMethod: {
                        type: "envoy.api.v2.core.RequestMethod",
                        id: 1
                      },
                      scheme: {
                        type: "string",
                        id: 2
                      },
                      authority: {
                        type: "string",
                        id: 3
                      },
                      port: {
                        type: "google.protobuf.UInt32Value",
                        id: 4
                      },
                      path: {
                        type: "string",
                        id: 5
                      },
                      userAgent: {
                        type: "string",
                        id: 6
                      },
                      referer: {
                        type: "string",
                        id: 7
                      },
                      forwardedFor: {
                        type: "string",
                        id: 8
                      },
                      requestId: {
                        type: "string",
                        id: 9
                      },
                      originalPath: {
                        type: "string",
                        id: 10
                      },
                      requestHeadersBytes: {
                        type: "uint64",
                        id: 11
                      },
                      requestBodyBytes: {
                        type: "uint64",
                        id: 12
                      },
                      requestHeaders: {
                        keyType: "string",
                        type: "string",
                        id: 13
                      }
                    }
                  },
                  HTTPResponseProperties: {
                    fields: {
                      responseCode: {
                        type: "google.protobuf.UInt32Value",
                        id: 1
                      },
                      responseHeadersBytes: {
                        type: "uint64",
                        id: 2
                      },
                      responseBodyBytes: {
                        type: "uint64",
                        id: 3
                      },
                      responseHeaders: {
                        keyType: "string",
                        type: "string",
                        id: 4
                      },
                      responseTrailers: {
                        keyType: "string",
                        type: "string",
                        id: 5
                      }
                    }
                  }
                }
              }
            }
          },
          cluster: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "OutlierDetectionEventProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.data.cluster.v2alpha",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  OutlierDetectionEvent: {
                    oneofs: {
                      event: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "ejectSuccessRateEvent",
                          "ejectConsecutiveEvent"
                        ]
                      }
                    },
                    fields: {
                      type: {
                        type: "OutlierEjectionType",
                        id: 1
                      },
                      timestamp: {
                        type: "google.protobuf.Timestamp",
                        id: 2
                      },
                      secsSinceLastAction: {
                        type: "google.protobuf.UInt64Value",
                        id: 3
                      },
                      clusterName: {
                        type: "string",
                        id: 4
                      },
                      upstreamUrl: {
                        type: "string",
                        id: 5
                      },
                      action: {
                        type: "Action",
                        id: 6
                      },
                      numEjections: {
                        type: "uint32",
                        id: 7
                      },
                      enforced: {
                        type: "bool",
                        id: 8
                      },
                      ejectSuccessRateEvent: {
                        type: "OutlierEjectSuccessRate",
                        id: 9
                      },
                      ejectConsecutiveEvent: {
                        type: "OutlierEjectConsecutive",
                        id: 10
                      }
                    }
                  },
                  OutlierEjectionType: {
                    values: {
                      CONSECUTIVE_5XX: 0,
                      CONSECUTIVE_GATEWAY_FAILURE: 1,
                      SUCCESS_RATE: 2
                    }
                  },
                  Action: {
                    values: {
                      EJECT: 0,
                      UNEJECT: 1
                    }
                  },
                  OutlierEjectSuccessRate: {
                    fields: {
                      hostSuccessRate: {
                        type: "uint32",
                        id: 1
                      },
                      clusterAverageSuccessRate: {
                        type: "uint32",
                        id: 2
                      },
                      clusterSuccessRateEjectionThreshold: {
                        type: "uint32",
                        id: 3
                      }
                    }
                  },
                  OutlierEjectConsecutive: {
                    fields: {}
                  }
                }
              }
            }
          },
          core: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "HealthCheckEventProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.data.core.v2alpha",
                  "(gogoproto.equal_all)": true
                },
                nested: {
                  HealthCheckEvent: {
                    oneofs: {
                      event: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "ejectUnhealthyEvent",
                          "addHealthyEvent",
                          "healthCheckFailureEvent",
                          "degradedHealthyHost",
                          "noLongerDegradedHost"
                        ]
                      }
                    },
                    fields: {
                      healthCheckerType: {
                        type: "HealthCheckerType",
                        id: 1
                      },
                      host: {
                        type: "envoy.api.v2.core.Address",
                        id: 2
                      },
                      clusterName: {
                        type: "string",
                        id: 3
                      },
                      ejectUnhealthyEvent: {
                        type: "HealthCheckEjectUnhealthy",
                        id: 4
                      },
                      addHealthyEvent: {
                        type: "HealthCheckAddHealthy",
                        id: 5
                      },
                      healthCheckFailureEvent: {
                        type: "HealthCheckFailure",
                        id: 7
                      },
                      degradedHealthyHost: {
                        type: "DegradedHealthyHost",
                        id: 8
                      },
                      noLongerDegradedHost: {
                        type: "NoLongerDegradedHost",
                        id: 9
                      },
                      timestamp: {
                        type: "google.protobuf.Timestamp",
                        id: 6
                      }
                    }
                  },
                  HealthCheckFailureType: {
                    values: {
                      ACTIVE: 0,
                      PASSIVE: 1,
                      NETWORK: 2
                    }
                  },
                  HealthCheckerType: {
                    values: {
                      HTTP: 0,
                      TCP: 1,
                      GRPC: 2,
                      REDIS: 3
                    }
                  },
                  HealthCheckEjectUnhealthy: {
                    fields: {
                      failureType: {
                        type: "HealthCheckFailureType",
                        id: 1
                      }
                    }
                  },
                  HealthCheckAddHealthy: {
                    fields: {
                      firstCheck: {
                        type: "bool",
                        id: 1
                      }
                    }
                  },
                  HealthCheckFailure: {
                    fields: {
                      failureType: {
                        type: "HealthCheckFailureType",
                        id: 1
                      },
                      firstCheck: {
                        type: "bool",
                        id: 2
                      }
                    }
                  },
                  DegradedHealthyHost: {
                    fields: {}
                  },
                  NoLongerDegradedHost: {
                    fields: {}
                  }
                }
              }
            }
          },
          tap: {
            nested: {
              v2alpha: {
                options: {
                  java_outer_classname: "WrapperProto",
                  java_multiple_files: true,
                  java_package: "io.envoyproxy.envoy.data.tap.v2alpha",
                  go_package: "v2"
                },
                nested: {
                  HttpBufferedTrace: {
                    fields: {
                      request: {
                        type: "Message",
                        id: 1
                      },
                      response: {
                        type: "Message",
                        id: 2
                      }
                    },
                    nested: {
                      Message: {
                        fields: {
                          headers: {
                            rule: "repeated",
                            type: "api.v2.core.HeaderValue",
                            id: 1
                          },
                          trailers: {
                            rule: "repeated",
                            type: "api.v2.core.HeaderValue",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  Connection: {
                    fields: {
                      id: {
                        type: "uint64",
                        id: 1
                      },
                      localAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 2
                      },
                      remoteAddress: {
                        type: "envoy.api.v2.core.Address",
                        id: 3
                      }
                    }
                  },
                  SocketEvent: {
                    oneofs: {
                      eventSelector: {
                        oneof: [
                          "read",
                          "write"
                        ]
                      }
                    },
                    fields: {
                      timestamp: {
                        type: "google.protobuf.Timestamp",
                        id: 1
                      },
                      read: {
                        type: "Read",
                        id: 2
                      },
                      write: {
                        type: "Write",
                        id: 3
                      }
                    },
                    nested: {
                      Read: {
                        fields: {
                          data: {
                            type: "bytes",
                            id: 1
                          }
                        }
                      },
                      Write: {
                        fields: {
                          data: {
                            type: "bytes",
                            id: 1
                          },
                          endStream: {
                            type: "bool",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  SocketTrace: {
                    fields: {
                      connection: {
                        type: "Connection",
                        id: 1
                      },
                      events: {
                        rule: "repeated",
                        type: "SocketEvent",
                        id: 2
                      }
                    }
                  },
                  BufferedTraceWrapper: {
                    oneofs: {
                      trace: {
                        options: {
                          "(validate.required)": true
                        },
                        oneof: [
                          "httpBufferedTrace",
                          "socketBufferedTrace"
                        ]
                      }
                    },
                    fields: {
                      httpBufferedTrace: {
                        type: "HttpBufferedTrace",
                        id: 1
                      },
                      socketBufferedTrace: {
                        type: "SocketTrace",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  validate: {
    options: {
      go_package: "github.com/lyft/protoc-gen-validate/validate",
      java_package: "com.lyft.pgv.validate"
    },
    nested: {
      disabled: {
        type: "bool",
        id: 919191,
        extend: "google.protobuf.MessageOptions"
      },
      required: {
        type: "bool",
        id: 919191,
        extend: "google.protobuf.OneofOptions"
      },
      rules: {
        type: "FieldRules",
        id: 919191,
        extend: "google.protobuf.FieldOptions"
      },
      FieldRules: {
        oneofs: {
          type: {
            oneof: [
              "float",
              "double",
              "int32",
              "int64",
              "uint32",
              "uint64",
              "sint32",
              "sint64",
              "fixed32",
              "fixed64",
              "sfixed32",
              "sfixed64",
              "bool",
              "string",
              "bytes",
              "enum",
              "message",
              "repeated",
              "map",
              "any",
              "duration",
              "timestamp"
            ]
          }
        },
        fields: {
          float: {
            type: "FloatRules",
            id: 1
          },
          double: {
            type: "DoubleRules",
            id: 2
          },
          int32: {
            type: "Int32Rules",
            id: 3
          },
          int64: {
            type: "Int64Rules",
            id: 4
          },
          uint32: {
            type: "UInt32Rules",
            id: 5
          },
          uint64: {
            type: "UInt64Rules",
            id: 6
          },
          sint32: {
            type: "SInt32Rules",
            id: 7
          },
          sint64: {
            type: "SInt64Rules",
            id: 8
          },
          fixed32: {
            type: "Fixed32Rules",
            id: 9
          },
          fixed64: {
            type: "Fixed64Rules",
            id: 10
          },
          sfixed32: {
            type: "SFixed32Rules",
            id: 11
          },
          sfixed64: {
            type: "SFixed64Rules",
            id: 12
          },
          bool: {
            type: "BoolRules",
            id: 13
          },
          string: {
            type: "StringRules",
            id: 14
          },
          bytes: {
            type: "BytesRules",
            id: 15
          },
          "enum": {
            type: "EnumRules",
            id: 16
          },
          message: {
            type: "MessageRules",
            id: 17
          },
          repeated: {
            type: "RepeatedRules",
            id: 18
          },
          map: {
            type: "MapRules",
            id: 19
          },
          any: {
            type: "AnyRules",
            id: 20
          },
          duration: {
            type: "DurationRules",
            id: 21
          },
          timestamp: {
            type: "TimestampRules",
            id: 22
          }
        }
      },
      FloatRules: {
        fields: {
          "const": {
            type: "float",
            id: 1
          },
          lt: {
            type: "float",
            id: 2
          },
          lte: {
            type: "float",
            id: 3
          },
          gt: {
            type: "float",
            id: 4
          },
          gte: {
            type: "float",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "float",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "float",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      DoubleRules: {
        fields: {
          "const": {
            type: "double",
            id: 1
          },
          lt: {
            type: "double",
            id: 2
          },
          lte: {
            type: "double",
            id: 3
          },
          gt: {
            type: "double",
            id: 4
          },
          gte: {
            type: "double",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "double",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "double",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      Int32Rules: {
        fields: {
          "const": {
            type: "int32",
            id: 1
          },
          lt: {
            type: "int32",
            id: 2
          },
          lte: {
            type: "int32",
            id: 3
          },
          gt: {
            type: "int32",
            id: 4
          },
          gte: {
            type: "int32",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "int32",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "int32",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      Int64Rules: {
        fields: {
          "const": {
            type: "int64",
            id: 1
          },
          lt: {
            type: "int64",
            id: 2
          },
          lte: {
            type: "int64",
            id: 3
          },
          gt: {
            type: "int64",
            id: 4
          },
          gte: {
            type: "int64",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "int64",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "int64",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      UInt32Rules: {
        fields: {
          "const": {
            type: "uint32",
            id: 1
          },
          lt: {
            type: "uint32",
            id: 2
          },
          lte: {
            type: "uint32",
            id: 3
          },
          gt: {
            type: "uint32",
            id: 4
          },
          gte: {
            type: "uint32",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "uint32",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "uint32",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      UInt64Rules: {
        fields: {
          "const": {
            type: "uint64",
            id: 1
          },
          lt: {
            type: "uint64",
            id: 2
          },
          lte: {
            type: "uint64",
            id: 3
          },
          gt: {
            type: "uint64",
            id: 4
          },
          gte: {
            type: "uint64",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "uint64",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "uint64",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      SInt32Rules: {
        fields: {
          "const": {
            type: "sint32",
            id: 1
          },
          lt: {
            type: "sint32",
            id: 2
          },
          lte: {
            type: "sint32",
            id: 3
          },
          gt: {
            type: "sint32",
            id: 4
          },
          gte: {
            type: "sint32",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "sint32",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "sint32",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      SInt64Rules: {
        fields: {
          "const": {
            type: "sint64",
            id: 1
          },
          lt: {
            type: "sint64",
            id: 2
          },
          lte: {
            type: "sint64",
            id: 3
          },
          gt: {
            type: "sint64",
            id: 4
          },
          gte: {
            type: "sint64",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "sint64",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "sint64",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      Fixed32Rules: {
        fields: {
          "const": {
            type: "fixed32",
            id: 1
          },
          lt: {
            type: "fixed32",
            id: 2
          },
          lte: {
            type: "fixed32",
            id: 3
          },
          gt: {
            type: "fixed32",
            id: 4
          },
          gte: {
            type: "fixed32",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "fixed32",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "fixed32",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      Fixed64Rules: {
        fields: {
          "const": {
            type: "fixed64",
            id: 1
          },
          lt: {
            type: "fixed64",
            id: 2
          },
          lte: {
            type: "fixed64",
            id: 3
          },
          gt: {
            type: "fixed64",
            id: 4
          },
          gte: {
            type: "fixed64",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "fixed64",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "fixed64",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      SFixed32Rules: {
        fields: {
          "const": {
            type: "sfixed32",
            id: 1
          },
          lt: {
            type: "sfixed32",
            id: 2
          },
          lte: {
            type: "sfixed32",
            id: 3
          },
          gt: {
            type: "sfixed32",
            id: 4
          },
          gte: {
            type: "sfixed32",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "sfixed32",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "sfixed32",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      SFixed64Rules: {
        fields: {
          "const": {
            type: "sfixed64",
            id: 1
          },
          lt: {
            type: "sfixed64",
            id: 2
          },
          lte: {
            type: "sfixed64",
            id: 3
          },
          gt: {
            type: "sfixed64",
            id: 4
          },
          gte: {
            type: "sfixed64",
            id: 5
          },
          "in": {
            rule: "repeated",
            type: "sfixed64",
            id: 6,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "sfixed64",
            id: 7,
            options: {
              packed: false
            }
          }
        }
      },
      BoolRules: {
        fields: {
          "const": {
            type: "bool",
            id: 1
          }
        }
      },
      StringRules: {
        oneofs: {
          wellKnown: {
            oneof: [
              "email",
              "hostname",
              "ip",
              "ipv4",
              "ipv6",
              "uri",
              "uriRef"
            ]
          }
        },
        fields: {
          "const": {
            type: "string",
            id: 1
          },
          len: {
            type: "uint64",
            id: 19
          },
          minLen: {
            type: "uint64",
            id: 2
          },
          maxLen: {
            type: "uint64",
            id: 3
          },
          lenBytes: {
            type: "uint64",
            id: 20
          },
          minBytes: {
            type: "uint64",
            id: 4
          },
          maxBytes: {
            type: "uint64",
            id: 5
          },
          pattern: {
            type: "string",
            id: 6
          },
          prefix: {
            type: "string",
            id: 7
          },
          suffix: {
            type: "string",
            id: 8
          },
          contains: {
            type: "string",
            id: 9
          },
          "in": {
            rule: "repeated",
            type: "string",
            id: 10
          },
          notIn: {
            rule: "repeated",
            type: "string",
            id: 11
          },
          email: {
            type: "bool",
            id: 12
          },
          hostname: {
            type: "bool",
            id: 13
          },
          ip: {
            type: "bool",
            id: 14
          },
          ipv4: {
            type: "bool",
            id: 15
          },
          ipv6: {
            type: "bool",
            id: 16
          },
          uri: {
            type: "bool",
            id: 17
          },
          uriRef: {
            type: "bool",
            id: 18
          }
        }
      },
      BytesRules: {
        oneofs: {
          wellKnown: {
            oneof: [
              "ip",
              "ipv4",
              "ipv6"
            ]
          }
        },
        fields: {
          "const": {
            type: "bytes",
            id: 1
          },
          len: {
            type: "uint64",
            id: 13
          },
          minLen: {
            type: "uint64",
            id: 2
          },
          maxLen: {
            type: "uint64",
            id: 3
          },
          pattern: {
            type: "string",
            id: 4
          },
          prefix: {
            type: "bytes",
            id: 5
          },
          suffix: {
            type: "bytes",
            id: 6
          },
          contains: {
            type: "bytes",
            id: 7
          },
          "in": {
            rule: "repeated",
            type: "bytes",
            id: 8
          },
          notIn: {
            rule: "repeated",
            type: "bytes",
            id: 9
          },
          ip: {
            type: "bool",
            id: 10
          },
          ipv4: {
            type: "bool",
            id: 11
          },
          ipv6: {
            type: "bool",
            id: 12
          }
        }
      },
      EnumRules: {
        fields: {
          "const": {
            type: "int32",
            id: 1
          },
          definedOnly: {
            type: "bool",
            id: 2
          },
          "in": {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          },
          notIn: {
            rule: "repeated",
            type: "int32",
            id: 4,
            options: {
              packed: false
            }
          }
        }
      },
      MessageRules: {
        fields: {
          skip: {
            type: "bool",
            id: 1
          },
          required: {
            type: "bool",
            id: 2
          }
        }
      },
      RepeatedRules: {
        fields: {
          minItems: {
            type: "uint64",
            id: 1
          },
          maxItems: {
            type: "uint64",
            id: 2
          },
          unique: {
            type: "bool",
            id: 3
          },
          items: {
            type: "FieldRules",
            id: 4
          }
        }
      },
      MapRules: {
        fields: {
          minPairs: {
            type: "uint64",
            id: 1
          },
          maxPairs: {
            type: "uint64",
            id: 2
          },
          noSparse: {
            type: "bool",
            id: 3
          },
          keys: {
            type: "FieldRules",
            id: 4
          },
          values: {
            type: "FieldRules",
            id: 5
          }
        }
      },
      AnyRules: {
        fields: {
          required: {
            type: "bool",
            id: 1
          },
          "in": {
            rule: "repeated",
            type: "string",
            id: 2
          },
          notIn: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        }
      },
      DurationRules: {
        fields: {
          required: {
            type: "bool",
            id: 1
          },
          "const": {
            type: "google.protobuf.Duration",
            id: 2
          },
          lt: {
            type: "google.protobuf.Duration",
            id: 3
          },
          lte: {
            type: "google.protobuf.Duration",
            id: 4
          },
          gt: {
            type: "google.protobuf.Duration",
            id: 5
          },
          gte: {
            type: "google.protobuf.Duration",
            id: 6
          },
          "in": {
            rule: "repeated",
            type: "google.protobuf.Duration",
            id: 7
          },
          notIn: {
            rule: "repeated",
            type: "google.protobuf.Duration",
            id: 8
          }
        }
      },
      TimestampRules: {
        fields: {
          required: {
            type: "bool",
            id: 1
          },
          "const": {
            type: "google.protobuf.Timestamp",
            id: 2
          },
          lt: {
            type: "google.protobuf.Timestamp",
            id: 3
          },
          lte: {
            type: "google.protobuf.Timestamp",
            id: 4
          },
          gt: {
            type: "google.protobuf.Timestamp",
            id: 5
          },
          gte: {
            type: "google.protobuf.Timestamp",
            id: 6
          },
          ltNow: {
            type: "bool",
            id: 7
          },
          gtNow: {
            type: "bool",
            id: 8
          },
          within: {
            type: "google.protobuf.Duration",
            id: 9
          }
        }
      }
    }
  },
  gogoproto: {
    options: {
      java_package: "com.google.protobuf",
      java_outer_classname: "GoGoProtos",
      go_package: "github.com/gogo/protobuf/gogoproto"
    },
    nested: {
      goprotoEnumPrefix: {
        type: "bool",
        id: 62001,
        extend: "google.protobuf.EnumOptions"
      },
      goprotoEnumStringer: {
        type: "bool",
        id: 62021,
        extend: "google.protobuf.EnumOptions"
      },
      enumStringer: {
        type: "bool",
        id: 62022,
        extend: "google.protobuf.EnumOptions"
      },
      enumCustomname: {
        type: "string",
        id: 62023,
        extend: "google.protobuf.EnumOptions"
      },
      enumdecl: {
        type: "bool",
        id: 62024,
        extend: "google.protobuf.EnumOptions"
      },
      enumvalueCustomname: {
        type: "string",
        id: 66001,
        extend: "google.protobuf.EnumValueOptions"
      },
      goprotoGettersAll: {
        type: "bool",
        id: 63001,
        extend: "google.protobuf.FileOptions"
      },
      goprotoEnumPrefixAll: {
        type: "bool",
        id: 63002,
        extend: "google.protobuf.FileOptions"
      },
      goprotoStringerAll: {
        type: "bool",
        id: 63003,
        extend: "google.protobuf.FileOptions"
      },
      verboseEqualAll: {
        type: "bool",
        id: 63004,
        extend: "google.protobuf.FileOptions"
      },
      faceAll: {
        type: "bool",
        id: 63005,
        extend: "google.protobuf.FileOptions"
      },
      gostringAll: {
        type: "bool",
        id: 63006,
        extend: "google.protobuf.FileOptions"
      },
      populateAll: {
        type: "bool",
        id: 63007,
        extend: "google.protobuf.FileOptions"
      },
      stringerAll: {
        type: "bool",
        id: 63008,
        extend: "google.protobuf.FileOptions"
      },
      onlyoneAll: {
        type: "bool",
        id: 63009,
        extend: "google.protobuf.FileOptions"
      },
      equalAll: {
        type: "bool",
        id: 63013,
        extend: "google.protobuf.FileOptions"
      },
      descriptionAll: {
        type: "bool",
        id: 63014,
        extend: "google.protobuf.FileOptions"
      },
      testgenAll: {
        type: "bool",
        id: 63015,
        extend: "google.protobuf.FileOptions"
      },
      benchgenAll: {
        type: "bool",
        id: 63016,
        extend: "google.protobuf.FileOptions"
      },
      marshalerAll: {
        type: "bool",
        id: 63017,
        extend: "google.protobuf.FileOptions"
      },
      unmarshalerAll: {
        type: "bool",
        id: 63018,
        extend: "google.protobuf.FileOptions"
      },
      stableMarshalerAll: {
        type: "bool",
        id: 63019,
        extend: "google.protobuf.FileOptions"
      },
      sizerAll: {
        type: "bool",
        id: 63020,
        extend: "google.protobuf.FileOptions"
      },
      goprotoEnumStringerAll: {
        type: "bool",
        id: 63021,
        extend: "google.protobuf.FileOptions"
      },
      enumStringerAll: {
        type: "bool",
        id: 63022,
        extend: "google.protobuf.FileOptions"
      },
      unsafeMarshalerAll: {
        type: "bool",
        id: 63023,
        extend: "google.protobuf.FileOptions"
      },
      unsafeUnmarshalerAll: {
        type: "bool",
        id: 63024,
        extend: "google.protobuf.FileOptions"
      },
      goprotoExtensionsMapAll: {
        type: "bool",
        id: 63025,
        extend: "google.protobuf.FileOptions"
      },
      goprotoUnrecognizedAll: {
        type: "bool",
        id: 63026,
        extend: "google.protobuf.FileOptions"
      },
      gogoprotoImport: {
        type: "bool",
        id: 63027,
        extend: "google.protobuf.FileOptions"
      },
      protosizerAll: {
        type: "bool",
        id: 63028,
        extend: "google.protobuf.FileOptions"
      },
      compareAll: {
        type: "bool",
        id: 63029,
        extend: "google.protobuf.FileOptions"
      },
      typedeclAll: {
        type: "bool",
        id: 63030,
        extend: "google.protobuf.FileOptions"
      },
      enumdeclAll: {
        type: "bool",
        id: 63031,
        extend: "google.protobuf.FileOptions"
      },
      goprotoRegistration: {
        type: "bool",
        id: 63032,
        extend: "google.protobuf.FileOptions"
      },
      messagenameAll: {
        type: "bool",
        id: 63033,
        extend: "google.protobuf.FileOptions"
      },
      goprotoSizecacheAll: {
        type: "bool",
        id: 63034,
        extend: "google.protobuf.FileOptions"
      },
      goprotoUnkeyedAll: {
        type: "bool",
        id: 63035,
        extend: "google.protobuf.FileOptions"
      },
      goprotoGetters: {
        type: "bool",
        id: 64001,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoStringer: {
        type: "bool",
        id: 64003,
        extend: "google.protobuf.MessageOptions"
      },
      verboseEqual: {
        type: "bool",
        id: 64004,
        extend: "google.protobuf.MessageOptions"
      },
      face: {
        type: "bool",
        id: 64005,
        extend: "google.protobuf.MessageOptions"
      },
      gostring: {
        type: "bool",
        id: 64006,
        extend: "google.protobuf.MessageOptions"
      },
      populate: {
        type: "bool",
        id: 64007,
        extend: "google.protobuf.MessageOptions"
      },
      stringer: {
        type: "bool",
        id: 67008,
        extend: "google.protobuf.MessageOptions"
      },
      onlyone: {
        type: "bool",
        id: 64009,
        extend: "google.protobuf.MessageOptions"
      },
      equal: {
        type: "bool",
        id: 64013,
        extend: "google.protobuf.MessageOptions"
      },
      description: {
        type: "bool",
        id: 64014,
        extend: "google.protobuf.MessageOptions"
      },
      testgen: {
        type: "bool",
        id: 64015,
        extend: "google.protobuf.MessageOptions"
      },
      benchgen: {
        type: "bool",
        id: 64016,
        extend: "google.protobuf.MessageOptions"
      },
      marshaler: {
        type: "bool",
        id: 64017,
        extend: "google.protobuf.MessageOptions"
      },
      unmarshaler: {
        type: "bool",
        id: 64018,
        extend: "google.protobuf.MessageOptions"
      },
      stableMarshaler: {
        type: "bool",
        id: 64019,
        extend: "google.protobuf.MessageOptions"
      },
      sizer: {
        type: "bool",
        id: 64020,
        extend: "google.protobuf.MessageOptions"
      },
      unsafeMarshaler: {
        type: "bool",
        id: 64023,
        extend: "google.protobuf.MessageOptions"
      },
      unsafeUnmarshaler: {
        type: "bool",
        id: 64024,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoExtensionsMap: {
        type: "bool",
        id: 64025,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoUnrecognized: {
        type: "bool",
        id: 64026,
        extend: "google.protobuf.MessageOptions"
      },
      protosizer: {
        type: "bool",
        id: 64028,
        extend: "google.protobuf.MessageOptions"
      },
      compare: {
        type: "bool",
        id: 64029,
        extend: "google.protobuf.MessageOptions"
      },
      typedecl: {
        type: "bool",
        id: 64030,
        extend: "google.protobuf.MessageOptions"
      },
      messagename: {
        type: "bool",
        id: 64033,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoSizecache: {
        type: "bool",
        id: 64034,
        extend: "google.protobuf.MessageOptions"
      },
      goprotoUnkeyed: {
        type: "bool",
        id: 64035,
        extend: "google.protobuf.MessageOptions"
      },
      nullable: {
        type: "bool",
        id: 65001,
        extend: "google.protobuf.FieldOptions"
      },
      embed: {
        type: "bool",
        id: 65002,
        extend: "google.protobuf.FieldOptions"
      },
      customtype: {
        type: "string",
        id: 65003,
        extend: "google.protobuf.FieldOptions"
      },
      customname: {
        type: "string",
        id: 65004,
        extend: "google.protobuf.FieldOptions"
      },
      jsontag: {
        type: "string",
        id: 65005,
        extend: "google.protobuf.FieldOptions"
      },
      moretags: {
        type: "string",
        id: 65006,
        extend: "google.protobuf.FieldOptions"
      },
      casttype: {
        type: "string",
        id: 65007,
        extend: "google.protobuf.FieldOptions"
      },
      castkey: {
        type: "string",
        id: 65008,
        extend: "google.protobuf.FieldOptions"
      },
      castvalue: {
        type: "string",
        id: 65009,
        extend: "google.protobuf.FieldOptions"
      },
      stdtime: {
        type: "bool",
        id: 65010,
        extend: "google.protobuf.FieldOptions"
      },
      stdduration: {
        type: "bool",
        id: 65011,
        extend: "google.protobuf.FieldOptions"
      },
      wktpointer: {
        type: "bool",
        id: 65012,
        extend: "google.protobuf.FieldOptions"
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          },
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          Value: {
            oneofs: {
              kind: {
                oneof: [
                  "nullValue",
                  "numberValue",
                  "stringValue",
                  "boolValue",
                  "structValue",
                  "listValue"
                ]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          },
          FileDescriptorSet: {
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            }
          },
          FileDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10,
                options: {
                  packed: false
                }
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11,
                options: {
                  packed: false
                }
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              service: {
                rule: "repeated",
                type: "ServiceDescriptorProto",
                id: 6
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              },
              options: {
                type: "FileOptions",
                id: 8
              },
              sourceCodeInfo: {
                type: "SourceCodeInfo",
                id: 9
              },
              syntax: {
                type: "string",
                id: 12
              }
            }
          },
          DescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              extensionRange: {
                rule: "repeated",
                type: "ExtensionRange",
                id: 5
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              options: {
                type: "MessageOptions",
                id: 7
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              }
            },
            nested: {
              ExtensionRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          FieldDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              oneofIndex: {
                type: "int32",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              options: {
                type: "FieldOptions",
                id: 8
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REQUIRED: 2,
                  LABEL_REPEATED: 3
                }
              }
            }
          },
          OneofDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              options: {
                type: "EnumOptions",
                id: 3
              }
            }
          },
          EnumValueDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                type: "EnumValueOptions",
                id: 3
              }
            }
          },
          ServiceDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              method: {
                rule: "repeated",
                type: "MethodDescriptorProto",
                id: 2
              },
              options: {
                type: "ServiceOptions",
                id: 3
              }
            }
          },
          MethodDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              inputType: {
                type: "string",
                id: 2
              },
              outputType: {
                type: "string",
                id: 3
              },
              options: {
                type: "MethodOptions",
                id: 4
              },
              clientStreaming: {
                type: "bool",
                id: 5
              },
              serverStreaming: {
                type: "bool",
                id: 6
              }
            }
          },
          FileOptions: {
            fields: {
              javaPackage: {
                type: "string",
                id: 1
              },
              javaOuterClassname: {
                type: "string",
                id: 8
              },
              javaMultipleFiles: {
                type: "bool",
                id: 10
              },
              javaGenerateEqualsAndHash: {
                type: "bool",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              javaStringCheckUtf8: {
                type: "bool",
                id: 27
              },
              optimizeFor: {
                type: "OptimizeMode",
                id: 9,
                options: {
                  "default": "SPEED"
                }
              },
              goPackage: {
                type: "string",
                id: 11
              },
              ccGenericServices: {
                type: "bool",
                id: 16
              },
              javaGenericServices: {
                type: "bool",
                id: 17
              },
              pyGenericServices: {
                type: "bool",
                id: 18
              },
              deprecated: {
                type: "bool",
                id: 23
              },
              ccEnableArenas: {
                type: "bool",
                id: 31
              },
              objcClassPrefix: {
                type: "string",
                id: 36
              },
              csharpNamespace: {
                type: "string",
                id: 37
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                38,
                38
              ]
            ],
            nested: {
              OptimizeMode: {
                values: {
                  SPEED: 1,
                  CODE_SIZE: 2,
                  LITE_RUNTIME: 3
                }
              }
            }
          },
          MessageOptions: {
            fields: {
              messageSetWireFormat: {
                type: "bool",
                id: 1
              },
              noStandardDescriptorAccessor: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              mapEntry: {
                type: "bool",
                id: 7
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                8,
                8
              ]
            ]
          },
          FieldOptions: {
            fields: {
              ctype: {
                type: "CType",
                id: 1,
                options: {
                  "default": "STRING"
                }
              },
              packed: {
                type: "bool",
                id: 2
              },
              jstype: {
                type: "JSType",
                id: 6,
                options: {
                  "default": "JS_NORMAL"
                }
              },
              lazy: {
                type: "bool",
                id: 5
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              weak: {
                type: "bool",
                id: 10
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ]
            ],
            nested: {
              CType: {
                values: {
                  STRING: 0,
                  CORD: 1,
                  STRING_PIECE: 2
                }
              },
              JSType: {
                values: {
                  JS_NORMAL: 0,
                  JS_STRING: 1,
                  JS_NUMBER: 2
                }
              }
            }
          },
          OneofOptions: {
            fields: {
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumOptions: {
            fields: {
              allowAlias: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumValueOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 1
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          ServiceOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          MethodOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          UninterpretedOption: {
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    rule: "required",
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          SourceCodeInfo: {
            fields: {
              location: {
                rule: "repeated",
                type: "Location",
                id: 1
              }
            },
            nested: {
              Location: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  span: {
                    rule: "repeated",
                    type: "int32",
                    id: 2
                  },
                  leadingComments: {
                    type: "string",
                    id: 3
                  },
                  trailingComments: {
                    type: "string",
                    id: 4
                  },
                  leadingDetachedComments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          GeneratedCodeInfo: {
            fields: {
              annotation: {
                rule: "repeated",
                type: "Annotation",
                id: 1
              }
            },
            nested: {
              Annotation: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  sourceFile: {
                    type: "string",
                    id: 2
                  },
                  begin: {
                    type: "int32",
                    id: 3
                  },
                  end: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          },
          Duration: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          Empty: {
            fields: {}
          }
        }
      },
      rpc: {
        options: {
          go_package: "google.golang.org/genproto/googleapis/rpc/status;status",
          java_multiple_files: true,
          java_outer_classname: "StatusProto",
          java_package: "com.google.rpc",
          objc_class_prefix: "RPC"
        },
        nested: {
          Status: {
            fields: {
              code: {
                type: "int32",
                id: 1
              },
              message: {
                type: "string",
                id: 2
              },
              details: {
                rule: "repeated",
                type: "google.protobuf.Any",
                id: 3
              }
            }
          }
        }
      },
      api: {
        options: {
          go_package: "google.golang.org/genproto/googleapis/api/annotations;annotations",
          java_multiple_files: true,
          java_outer_classname: "HttpProto",
          java_package: "com.google.api",
          objc_class_prefix: "GAPI",
          cc_enable_arenas: true
        },
        nested: {
          http: {
            type: "HttpRule",
            id: 72295728,
            extend: "google.protobuf.MethodOptions"
          },
          Http: {
            fields: {
              rules: {
                rule: "repeated",
                type: "HttpRule",
                id: 1
              },
              fullyDecodeReservedExpansion: {
                type: "bool",
                id: 2
              }
            }
          },
          HttpRule: {
            oneofs: {
              pattern: {
                oneof: [
                  "get",
                  "put",
                  "post",
                  "delete",
                  "patch",
                  "custom"
                ]
              }
            },
            fields: {
              selector: {
                type: "string",
                id: 1
              },
              get: {
                type: "string",
                id: 2
              },
              put: {
                type: "string",
                id: 3
              },
              post: {
                type: "string",
                id: 4
              },
              "delete": {
                type: "string",
                id: 5
              },
              patch: {
                type: "string",
                id: 6
              },
              custom: {
                type: "CustomHttpPattern",
                id: 8
              },
              body: {
                type: "string",
                id: 7
              },
              additionalBindings: {
                rule: "repeated",
                type: "HttpRule",
                id: 11
              }
            }
          },
          CustomHttpPattern: {
            fields: {
              kind: {
                type: "string",
                id: 1
              },
              path: {
                type: "string",
                id: 2
              }
            }
          }
        }
      }
    }
  },
  io: {
    nested: {
      prometheus: {
        nested: {
          client: {
            options: {
              java_package: "io.prometheus.client"
            },
            nested: {
              LabelPair: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              },
              MetricType: {
                values: {
                  COUNTER: 0,
                  GAUGE: 1,
                  SUMMARY: 2,
                  UNTYPED: 3,
                  HISTOGRAM: 4
                }
              },
              Gauge: {
                fields: {
                  value: {
                    type: "double",
                    id: 1
                  }
                }
              },
              Counter: {
                fields: {
                  value: {
                    type: "double",
                    id: 1
                  }
                }
              },
              Quantile: {
                fields: {
                  quantile: {
                    type: "double",
                    id: 1
                  },
                  value: {
                    type: "double",
                    id: 2
                  }
                }
              },
              Summary: {
                fields: {
                  sampleCount: {
                    type: "uint64",
                    id: 1
                  },
                  sampleSum: {
                    type: "double",
                    id: 2
                  },
                  quantile: {
                    rule: "repeated",
                    type: "Quantile",
                    id: 3
                  }
                }
              },
              Untyped: {
                fields: {
                  value: {
                    type: "double",
                    id: 1
                  }
                }
              },
              Histogram: {
                fields: {
                  sampleCount: {
                    type: "uint64",
                    id: 1
                  },
                  sampleSum: {
                    type: "double",
                    id: 2
                  },
                  bucket: {
                    rule: "repeated",
                    type: "Bucket",
                    id: 3
                  }
                }
              },
              Bucket: {
                fields: {
                  cumulativeCount: {
                    type: "uint64",
                    id: 1
                  },
                  upperBound: {
                    type: "double",
                    id: 2
                  }
                }
              },
              Metric: {
                fields: {
                  label: {
                    rule: "repeated",
                    type: "LabelPair",
                    id: 1
                  },
                  gauge: {
                    type: "Gauge",
                    id: 2
                  },
                  counter: {
                    type: "Counter",
                    id: 3
                  },
                  summary: {
                    type: "Summary",
                    id: 4
                  },
                  untyped: {
                    type: "Untyped",
                    id: 5
                  },
                  histogram: {
                    type: "Histogram",
                    id: 7
                  },
                  timestampMs: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              MetricFamily: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  help: {
                    type: "string",
                    id: 2
                  },
                  type: {
                    type: "MetricType",
                    id: 3
                  },
                  metric: {
                    rule: "repeated",
                    type: "Metric",
                    id: 4
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  opencensus: {
    nested: {
      proto: {
        nested: {
          trace: {
            nested: {
              v1: {
                options: {
                  java_multiple_files: true,
                  java_package: "io.opencensus.proto.trace.v1",
                  java_outer_classname: "TraceProto",
                  go_package: "github.com/census-instrumentation/opencensus-proto/gen-go/trace/v1"
                },
                nested: {
                  Span: {
                    fields: {
                      traceId: {
                        type: "bytes",
                        id: 1
                      },
                      spanId: {
                        type: "bytes",
                        id: 2
                      },
                      tracestate: {
                        type: "Tracestate",
                        id: 15
                      },
                      parentSpanId: {
                        type: "bytes",
                        id: 3
                      },
                      name: {
                        type: "TruncatableString",
                        id: 4
                      },
                      kind: {
                        type: "SpanKind",
                        id: 14
                      },
                      startTime: {
                        type: "google.protobuf.Timestamp",
                        id: 5
                      },
                      endTime: {
                        type: "google.protobuf.Timestamp",
                        id: 6
                      },
                      attributes: {
                        type: "Attributes",
                        id: 7
                      },
                      stackTrace: {
                        type: "StackTrace",
                        id: 8
                      },
                      timeEvents: {
                        type: "TimeEvents",
                        id: 9
                      },
                      links: {
                        type: "Links",
                        id: 10
                      },
                      status: {
                        type: "Status",
                        id: 11
                      },
                      sameProcessAsParentSpan: {
                        type: "google.protobuf.BoolValue",
                        id: 12
                      },
                      childSpanCount: {
                        type: "google.protobuf.UInt32Value",
                        id: 13
                      }
                    },
                    nested: {
                      Tracestate: {
                        fields: {
                          entries: {
                            rule: "repeated",
                            type: "Entry",
                            id: 1
                          }
                        },
                        nested: {
                          Entry: {
                            fields: {
                              key: {
                                type: "string",
                                id: 1
                              },
                              value: {
                                type: "string",
                                id: 2
                              }
                            }
                          }
                        }
                      },
                      SpanKind: {
                        values: {
                          SPAN_KIND_UNSPECIFIED: 0,
                          SERVER: 1,
                          CLIENT: 2
                        }
                      },
                      Attributes: {
                        fields: {
                          attributeMap: {
                            keyType: "string",
                            type: "AttributeValue",
                            id: 1
                          },
                          droppedAttributesCount: {
                            type: "int32",
                            id: 2
                          }
                        }
                      },
                      TimeEvent: {
                        oneofs: {
                          value: {
                            oneof: [
                              "annotation",
                              "messageEvent"
                            ]
                          }
                        },
                        fields: {
                          time: {
                            type: "google.protobuf.Timestamp",
                            id: 1
                          },
                          annotation: {
                            type: "Annotation",
                            id: 2
                          },
                          messageEvent: {
                            type: "MessageEvent",
                            id: 3
                          }
                        },
                        nested: {
                          Annotation: {
                            fields: {
                              description: {
                                type: "TruncatableString",
                                id: 1
                              },
                              attributes: {
                                type: "Attributes",
                                id: 2
                              }
                            }
                          },
                          MessageEvent: {
                            fields: {
                              type: {
                                type: "Type",
                                id: 1
                              },
                              id: {
                                type: "uint64",
                                id: 2
                              },
                              uncompressedSize: {
                                type: "uint64",
                                id: 3
                              },
                              compressedSize: {
                                type: "uint64",
                                id: 4
                              }
                            },
                            nested: {
                              Type: {
                                values: {
                                  TYPE_UNSPECIFIED: 0,
                                  SENT: 1,
                                  RECEIVED: 2
                                }
                              }
                            }
                          }
                        }
                      },
                      TimeEvents: {
                        fields: {
                          timeEvent: {
                            rule: "repeated",
                            type: "TimeEvent",
                            id: 1
                          },
                          droppedAnnotationsCount: {
                            type: "int32",
                            id: 2
                          },
                          droppedMessageEventsCount: {
                            type: "int32",
                            id: 3
                          }
                        }
                      },
                      Link: {
                        fields: {
                          traceId: {
                            type: "bytes",
                            id: 1
                          },
                          spanId: {
                            type: "bytes",
                            id: 2
                          },
                          type: {
                            type: "Type",
                            id: 3
                          },
                          attributes: {
                            type: "Attributes",
                            id: 4
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              TYPE_UNSPECIFIED: 0,
                              CHILD_LINKED_SPAN: 1,
                              PARENT_LINKED_SPAN: 2
                            }
                          }
                        }
                      },
                      Links: {
                        fields: {
                          link: {
                            rule: "repeated",
                            type: "Link",
                            id: 1
                          },
                          droppedLinksCount: {
                            type: "int32",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  Status: {
                    fields: {
                      code: {
                        type: "int32",
                        id: 1
                      },
                      message: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  AttributeValue: {
                    oneofs: {
                      value: {
                        oneof: [
                          "stringValue",
                          "intValue",
                          "boolValue",
                          "doubleValue"
                        ]
                      }
                    },
                    fields: {
                      stringValue: {
                        type: "TruncatableString",
                        id: 1
                      },
                      intValue: {
                        type: "int64",
                        id: 2
                      },
                      boolValue: {
                        type: "bool",
                        id: 3
                      },
                      doubleValue: {
                        type: "double",
                        id: 4
                      }
                    }
                  },
                  StackTrace: {
                    fields: {
                      stackFrames: {
                        type: "StackFrames",
                        id: 1
                      },
                      stackTraceHashId: {
                        type: "uint64",
                        id: 2
                      }
                    },
                    nested: {
                      StackFrame: {
                        fields: {
                          functionName: {
                            type: "TruncatableString",
                            id: 1
                          },
                          originalFunctionName: {
                            type: "TruncatableString",
                            id: 2
                          },
                          fileName: {
                            type: "TruncatableString",
                            id: 3
                          },
                          lineNumber: {
                            type: "int64",
                            id: 4
                          },
                          columnNumber: {
                            type: "int64",
                            id: 5
                          },
                          loadModule: {
                            type: "Module",
                            id: 6
                          },
                          sourceVersion: {
                            type: "TruncatableString",
                            id: 7
                          }
                        }
                      },
                      StackFrames: {
                        fields: {
                          frame: {
                            rule: "repeated",
                            type: "StackFrame",
                            id: 1
                          },
                          droppedFramesCount: {
                            type: "int32",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  Module: {
                    fields: {
                      module: {
                        type: "TruncatableString",
                        id: 1
                      },
                      buildId: {
                        type: "TruncatableString",
                        id: 2
                      }
                    }
                  },
                  TruncatableString: {
                    fields: {
                      value: {
                        type: "string",
                        id: 1
                      },
                      truncatedByteCount: {
                        type: "int32",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
