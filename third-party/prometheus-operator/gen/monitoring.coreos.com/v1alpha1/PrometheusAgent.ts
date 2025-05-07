import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1alpha1PrometheusAgent";

export interface IPrometheusAgent {
  "apiVersion": "monitoring.coreos.com/v1alpha1";
  "kind": "PrometheusAgent";
  "metadata"?: IObjectMeta;
  "spec": {
    "additionalArgs"?: Array<{
      "name": string;
      "value"?: string;
    }>;
    "additionalScrapeConfigs"?: {
      "key": string;
      "name"?: string;
      "optional"?: boolean;
    };
    "affinity"?: {
      "nodeAffinity"?: {
        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
          "preference": {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchFields"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
          };
          "weight": number;
        }>;
        "requiredDuringSchedulingIgnoredDuringExecution"?: {
          "nodeSelectorTerms": Array<{
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchFields"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
          }>;
        };
      };
      "podAffinity"?: {
        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
          "podAffinityTerm": {
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          };
          "weight": number;
        }>;
        "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
          "labelSelector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "namespaceSelector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "namespaces"?: Array<string>;
          "topologyKey": string;
        }>;
      };
      "podAntiAffinity"?: {
        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
          "podAffinityTerm": {
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          };
          "weight": number;
        }>;
        "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
          "labelSelector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "namespaceSelector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "namespaces"?: Array<string>;
          "topologyKey": string;
        }>;
      };
    };
    "apiserverConfig"?: {
      "authorization"?: {
        "credentials"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "credentialsFile"?: string;
        "type"?: string;
      };
      "basicAuth"?: {
        "password"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "username"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "bearerToken"?: string;
      "bearerTokenFile"?: string;
      "host": string;
      "tlsConfig"?: {
        "ca"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "caFile"?: string;
        "cert"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "certFile"?: string;
        "insecureSkipVerify"?: boolean;
        "keyFile"?: string;
        "keySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "serverName"?: string;
      };
    };
    "arbitraryFSAccessThroughSMs"?: {
      "deny"?: boolean;
    };
    "configMaps"?: Array<string>;
    "containers"?: Array<{
      "args"?: Array<string>;
      "command"?: Array<string>;
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "envFrom"?: Array<{
        "configMapRef"?: {
          "name"?: string;
          "optional"?: boolean;
        };
        "prefix"?: string;
        "secretRef"?: {
          "name"?: string;
          "optional"?: boolean;
        };
      }>;
      "image"?: string;
      "imagePullPolicy"?: string;
      "lifecycle"?: {
        "postStart"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
        };
        "preStop"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
        };
      };
      "livenessProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "name": string;
      "ports"?: Array<{
        "containerPort": number;
        "hostIP"?: string;
        "hostPort"?: number;
        "name"?: string;
        "protocol"?: string;
      }>;
      "readinessProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "resizePolicy"?: Array<{
        "resourceName": string;
        "restartPolicy": string;
      }>;
      "resources"?: {
        "claims"?: Array<{
          "name": string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "allowPrivilegeEscalation"?: boolean;
        "capabilities"?: {
          "add"?: Array<string>;
          "drop"?: Array<string>;
        };
        "privileged"?: boolean;
        "procMount"?: string;
        "readOnlyRootFilesystem"?: boolean;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "startupProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "stdin"?: boolean;
      "stdinOnce"?: boolean;
      "terminationMessagePath"?: string;
      "terminationMessagePolicy"?: string;
      "tty"?: boolean;
      "volumeDevices"?: Array<{
        "devicePath": string;
        "name": string;
      }>;
      "volumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "workingDir"?: string;
    }>;
    "enableFeatures"?: Array<string>;
    "enableRemoteWriteReceiver"?: boolean;
    "enforcedBodySizeLimit"?: string;
    "enforcedLabelLimit"?: number;
    "enforcedLabelNameLengthLimit"?: number;
    "enforcedLabelValueLengthLimit"?: number;
    "enforcedNamespaceLabel"?: string;
    "enforcedSampleLimit"?: number;
    "enforcedTargetLimit"?: number;
    "excludedFromEnforcement"?: Array<{
      "group"?: "monitoring.coreos.com";
      "name"?: string;
      "namespace": string;
      "resource": "prometheusrules" | "servicemonitors" | "podmonitors" | "probes";
    }>;
    "externalLabels"?: {
      [key: string]: string;
    };
    "externalUrl"?: string;
    "hostAliases"?: Array<{
      "hostnames": Array<string>;
      "ip": string;
    }>;
    "hostNetwork"?: boolean;
    "ignoreNamespaceSelectors"?: boolean;
    "image"?: string;
    "imagePullPolicy"?: "" | "Always" | "Never" | "IfNotPresent";
    "imagePullSecrets"?: Array<{
      "name"?: string;
    }>;
    "initContainers"?: Array<{
      "args"?: Array<string>;
      "command"?: Array<string>;
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "envFrom"?: Array<{
        "configMapRef"?: {
          "name"?: string;
          "optional"?: boolean;
        };
        "prefix"?: string;
        "secretRef"?: {
          "name"?: string;
          "optional"?: boolean;
        };
      }>;
      "image"?: string;
      "imagePullPolicy"?: string;
      "lifecycle"?: {
        "postStart"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
        };
        "preStop"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
        };
      };
      "livenessProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "name": string;
      "ports"?: Array<{
        "containerPort": number;
        "hostIP"?: string;
        "hostPort"?: number;
        "name"?: string;
        "protocol"?: string;
      }>;
      "readinessProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "resizePolicy"?: Array<{
        "resourceName": string;
        "restartPolicy": string;
      }>;
      "resources"?: {
        "claims"?: Array<{
          "name": string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "allowPrivilegeEscalation"?: boolean;
        "capabilities"?: {
          "add"?: Array<string>;
          "drop"?: Array<string>;
        };
        "privileged"?: boolean;
        "procMount"?: string;
        "readOnlyRootFilesystem"?: boolean;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "startupProbe"?: {
        "exec"?: {
          "command"?: Array<string>;
        };
        "failureThreshold"?: number;
        "grpc"?: {
          "port": number;
          "service"?: string;
        };
        "httpGet"?: {
          "host"?: string;
          "httpHeaders"?: Array<{
            "name": string;
            "value": string;
          }>;
          "path"?: string;
          "port": number | string;
          "scheme"?: string;
        };
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "successThreshold"?: number;
        "tcpSocket"?: {
          "host"?: string;
          "port": number | string;
        };
        "terminationGracePeriodSeconds"?: number;
        "timeoutSeconds"?: number;
      };
      "stdin"?: boolean;
      "stdinOnce"?: boolean;
      "terminationMessagePath"?: string;
      "terminationMessagePolicy"?: string;
      "tty"?: boolean;
      "volumeDevices"?: Array<{
        "devicePath": string;
        "name": string;
      }>;
      "volumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "workingDir"?: string;
    }>;
    "listenLocal"?: boolean;
    "logFormat"?: "" | "logfmt" | "json";
    "logLevel"?: "" | "debug" | "info" | "warn" | "error";
    "minReadySeconds"?: number;
    "nodeSelector"?: {
      [key: string]: string;
    };
    "overrideHonorLabels"?: boolean;
    "overrideHonorTimestamps"?: boolean;
    "paused"?: boolean;
    "podMetadata"?: {
      "annotations"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
      "name"?: string;
    };
    "podMonitorNamespaceSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "podMonitorSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "podTargetLabels"?: Array<string>;
    "portName"?: string;
    "priorityClassName"?: string;
    "probeNamespaceSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "probeSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "prometheusExternalLabelName"?: string;
    "remoteWrite"?: Array<{
      "authorization"?: {
        "credentials"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "credentialsFile"?: string;
        "type"?: string;
      };
      "basicAuth"?: {
        "password"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "username"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "bearerToken"?: string;
      "bearerTokenFile"?: string;
      "headers"?: {
        [key: string]: string;
      };
      "metadataConfig"?: {
        "send"?: boolean;
        "sendInterval"?: string;
      };
      "name"?: string;
      "oauth2"?: {
        "clientId": {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "clientSecret": {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "endpointParams"?: {
          [key: string]: string;
        };
        "scopes"?: Array<string>;
        "tokenUrl": string;
      };
      "proxyUrl"?: string;
      "queueConfig"?: {
        "batchSendDeadline"?: string;
        "capacity"?: number;
        "maxBackoff"?: string;
        "maxRetries"?: number;
        "maxSamplesPerSend"?: number;
        "maxShards"?: number;
        "minBackoff"?: string;
        "minShards"?: number;
        "retryOnRateLimit"?: boolean;
      };
      "remoteTimeout"?: string;
      "sendExemplars"?: boolean;
      "sigv4"?: {
        "accessKey"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "profile"?: string;
        "region"?: string;
        "roleArn"?: string;
        "secretKey"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "tlsConfig"?: {
        "ca"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "caFile"?: string;
        "cert"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "certFile"?: string;
        "insecureSkipVerify"?: boolean;
        "keyFile"?: string;
        "keySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "serverName"?: string;
      };
      "url": string;
      "writeRelabelConfigs"?: Array<{
        "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
        "modulus"?: number;
        "regex"?: string;
        "replacement"?: string;
        "separator"?: string;
        "sourceLabels"?: Array<string>;
        "targetLabel"?: string;
      }>;
    }>;
    "replicaExternalLabelName"?: string;
    "replicas"?: number;
    "resources"?: {
      "claims"?: Array<{
        "name": string;
      }>;
      "limits"?: {
        [key: string]: number | string;
      };
      "requests"?: {
        [key: string]: number | string;
      };
    };
    "routePrefix"?: string;
    "scrapeConfigNamespaceSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "scrapeConfigSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "scrapeInterval"?: string;
    "scrapeTimeout"?: string;
    "secrets"?: Array<string>;
    "securityContext"?: {
      "fsGroup"?: number;
      "fsGroupChangePolicy"?: string;
      "runAsGroup"?: number;
      "runAsNonRoot"?: boolean;
      "runAsUser"?: number;
      "seLinuxOptions"?: {
        "level"?: string;
        "role"?: string;
        "type"?: string;
        "user"?: string;
      };
      "seccompProfile"?: {
        "localhostProfile"?: string;
        "type": string;
      };
      "supplementalGroups"?: Array<number>;
      "sysctls"?: Array<{
        "name": string;
        "value": string;
      }>;
      "windowsOptions"?: {
        "gmsaCredentialSpec"?: string;
        "gmsaCredentialSpecName"?: string;
        "hostProcess"?: boolean;
        "runAsUserName"?: string;
      };
    };
    "serviceAccountName"?: string;
    "serviceMonitorNamespaceSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "serviceMonitorSelector"?: {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "shards"?: number;
    "storage"?: {
      "disableMountSubPath"?: boolean;
      "emptyDir"?: {
        "medium"?: string;
        "sizeLimit"?: number | string;
      };
      "ephemeral"?: {
        "volumeClaimTemplate"?: {
          "metadata"?: {
          };
          "spec": {
            "accessModes"?: Array<string>;
            "dataSource"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
            };
            "dataSourceRef"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
              "namespace"?: string;
            };
            "resources"?: {
              "claims"?: Array<{
                "name": string;
              }>;
              "limits"?: {
                [key: string]: number | string;
              };
              "requests"?: {
                [key: string]: number | string;
              };
            };
            "selector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "storageClassName"?: string;
            "volumeMode"?: string;
            "volumeName"?: string;
          };
        };
      };
      "volumeClaimTemplate"?: {
        "apiVersion"?: string;
        "kind"?: string;
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
        };
        "spec"?: {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "claims"?: Array<{
              "name": string;
            }>;
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
        "status"?: {
          "accessModes"?: Array<string>;
          "allocatedResources"?: {
            [key: string]: number | string;
          };
          "capacity"?: {
            [key: string]: number | string;
          };
          "conditions"?: Array<{
            "lastProbeTime"?: string;
            "lastTransitionTime"?: string;
            "message"?: string;
            "reason"?: string;
            "status": string;
            "type": string;
          }>;
          "phase"?: string;
          "resizeStatus"?: string;
        };
      };
    };
    "tolerations"?: Array<{
      "effect"?: string;
      "key"?: string;
      "operator"?: string;
      "tolerationSeconds"?: number;
      "value"?: string;
    }>;
    "topologySpreadConstraints"?: Array<{
      "labelSelector"?: {
        "matchExpressions"?: Array<{
          "key": string;
          "operator": string;
          "values"?: Array<string>;
        }>;
        "matchLabels"?: {
          [key: string]: string;
        };
      };
      "matchLabelKeys"?: Array<string>;
      "maxSkew": number;
      "minDomains"?: number;
      "nodeAffinityPolicy"?: string;
      "nodeTaintsPolicy"?: string;
      "topologyKey": string;
      "whenUnsatisfiable": string;
    }>;
    "version"?: string;
    "volumeMounts"?: Array<{
      "mountPath": string;
      "mountPropagation"?: string;
      "name": string;
      "readOnly"?: boolean;
      "subPath"?: string;
      "subPathExpr"?: string;
    }>;
    "volumes"?: Array<{
      "awsElasticBlockStore"?: {
        "fsType"?: string;
        "partition"?: number;
        "readOnly"?: boolean;
        "volumeID": string;
      };
      "azureDisk"?: {
        "cachingMode"?: string;
        "diskName": string;
        "diskURI": string;
        "fsType"?: string;
        "kind"?: string;
        "readOnly"?: boolean;
      };
      "azureFile"?: {
        "readOnly"?: boolean;
        "secretName": string;
        "shareName": string;
      };
      "cephfs"?: {
        "monitors": Array<string>;
        "path"?: string;
        "readOnly"?: boolean;
        "secretFile"?: string;
        "secretRef"?: {
          "name"?: string;
        };
        "user"?: string;
      };
      "cinder"?: {
        "fsType"?: string;
        "readOnly"?: boolean;
        "secretRef"?: {
          "name"?: string;
        };
        "volumeID": string;
      };
      "configMap"?: {
        "defaultMode"?: number;
        "items"?: Array<{
          "key": string;
          "mode"?: number;
          "path": string;
        }>;
        "name"?: string;
        "optional"?: boolean;
      };
      "csi"?: {
        "driver": string;
        "fsType"?: string;
        "nodePublishSecretRef"?: {
          "name"?: string;
        };
        "readOnly"?: boolean;
        "volumeAttributes"?: {
          [key: string]: string;
        };
      };
      "downwardAPI"?: {
        "defaultMode"?: number;
        "items"?: Array<{
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "mode"?: number;
          "path": string;
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
        }>;
      };
      "emptyDir"?: {
        "medium"?: string;
        "sizeLimit"?: number | string;
      };
      "ephemeral"?: {
        "volumeClaimTemplate"?: {
          "metadata"?: {
          };
          "spec": {
            "accessModes"?: Array<string>;
            "dataSource"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
            };
            "dataSourceRef"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
              "namespace"?: string;
            };
            "resources"?: {
              "claims"?: Array<{
                "name": string;
              }>;
              "limits"?: {
                [key: string]: number | string;
              };
              "requests"?: {
                [key: string]: number | string;
              };
            };
            "selector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "storageClassName"?: string;
            "volumeMode"?: string;
            "volumeName"?: string;
          };
        };
      };
      "fc"?: {
        "fsType"?: string;
        "lun"?: number;
        "readOnly"?: boolean;
        "targetWWNs"?: Array<string>;
        "wwids"?: Array<string>;
      };
      "flexVolume"?: {
        "driver": string;
        "fsType"?: string;
        "options"?: {
          [key: string]: string;
        };
        "readOnly"?: boolean;
        "secretRef"?: {
          "name"?: string;
        };
      };
      "flocker"?: {
        "datasetName"?: string;
        "datasetUUID"?: string;
      };
      "gcePersistentDisk"?: {
        "fsType"?: string;
        "partition"?: number;
        "pdName": string;
        "readOnly"?: boolean;
      };
      "gitRepo"?: {
        "directory"?: string;
        "repository": string;
        "revision"?: string;
      };
      "glusterfs"?: {
        "endpoints": string;
        "path": string;
        "readOnly"?: boolean;
      };
      "hostPath"?: {
        "path": string;
        "type"?: string;
      };
      "iscsi"?: {
        "chapAuthDiscovery"?: boolean;
        "chapAuthSession"?: boolean;
        "fsType"?: string;
        "initiatorName"?: string;
        "iqn": string;
        "iscsiInterface"?: string;
        "lun": number;
        "portals"?: Array<string>;
        "readOnly"?: boolean;
        "secretRef"?: {
          "name"?: string;
        };
        "targetPortal": string;
      };
      "name": string;
      "nfs"?: {
        "path": string;
        "readOnly"?: boolean;
        "server": string;
      };
      "persistentVolumeClaim"?: {
        "claimName": string;
        "readOnly"?: boolean;
      };
      "photonPersistentDisk"?: {
        "fsType"?: string;
        "pdID": string;
      };
      "portworxVolume"?: {
        "fsType"?: string;
        "readOnly"?: boolean;
        "volumeID": string;
      };
      "projected"?: {
        "defaultMode"?: number;
        "sources"?: Array<{
          "configMap"?: {
            "items"?: Array<{
              "key": string;
              "mode"?: number;
              "path": string;
            }>;
            "name"?: string;
            "optional"?: boolean;
          };
          "downwardAPI"?: {
            "items"?: Array<{
              "fieldRef"?: {
                "apiVersion"?: string;
                "fieldPath": string;
              };
              "mode"?: number;
              "path": string;
              "resourceFieldRef"?: {
                "containerName"?: string;
                "divisor"?: number | string;
                "resource": string;
              };
            }>;
          };
          "secret"?: {
            "items"?: Array<{
              "key": string;
              "mode"?: number;
              "path": string;
            }>;
            "name"?: string;
            "optional"?: boolean;
          };
          "serviceAccountToken"?: {
            "audience"?: string;
            "expirationSeconds"?: number;
            "path": string;
          };
        }>;
      };
      "quobyte"?: {
        "group"?: string;
        "readOnly"?: boolean;
        "registry": string;
        "tenant"?: string;
        "user"?: string;
        "volume": string;
      };
      "rbd"?: {
        "fsType"?: string;
        "image": string;
        "keyring"?: string;
        "monitors": Array<string>;
        "pool"?: string;
        "readOnly"?: boolean;
        "secretRef"?: {
          "name"?: string;
        };
        "user"?: string;
      };
      "scaleIO"?: {
        "fsType"?: string;
        "gateway": string;
        "protectionDomain"?: string;
        "readOnly"?: boolean;
        "secretRef": {
          "name"?: string;
        };
        "sslEnabled"?: boolean;
        "storageMode"?: string;
        "storagePool"?: string;
        "system": string;
        "volumeName"?: string;
      };
      "secret"?: {
        "defaultMode"?: number;
        "items"?: Array<{
          "key": string;
          "mode"?: number;
          "path": string;
        }>;
        "optional"?: boolean;
        "secretName"?: string;
      };
      "storageos"?: {
        "fsType"?: string;
        "readOnly"?: boolean;
        "secretRef"?: {
          "name"?: string;
        };
        "volumeName"?: string;
        "volumeNamespace"?: string;
      };
      "vsphereVolume"?: {
        "fsType"?: string;
        "storagePolicyID"?: string;
        "storagePolicyName"?: string;
        "volumePath": string;
      };
    }>;
    "walCompression"?: boolean;
    "web"?: {
      "httpConfig"?: {
        "headers"?: {
          "contentSecurityPolicy"?: string;
          "strictTransportSecurity"?: string;
          "xContentTypeOptions"?: "" | "NoSniff";
          "xFrameOptions"?: "" | "Deny" | "SameOrigin";
          "xXSSProtection"?: string;
        };
        "http2"?: boolean;
      };
      "maxConnections"?: number;
      "pageTitle"?: string;
      "tlsConfig"?: {
        "cert": {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "cipherSuites"?: Array<string>;
        "client_ca"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "clientAuthType"?: string;
        "curvePreferences"?: Array<string>;
        "keySecret": {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "maxVersion"?: string;
        "minVersion"?: string;
        "preferServerCipherSuites"?: boolean;
      };
    };
  };
  "status"?: {
    "availableReplicas": number;
    "conditions"?: Array<{
      "lastTransitionTime": string;
      "message"?: string;
      "observedGeneration"?: number;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
    "paused": boolean;
    "replicas": number;
    "shardStatuses"?: Array<{
      "availableReplicas": number;
      "replicas": number;
      "shardID": string;
      "unavailableReplicas": number;
      "updatedReplicas": number;
    }>;
    "unavailableReplicas": number;
    "updatedReplicas": number;
  };
}

export class PrometheusAgent extends Model<IPrometheusAgent> implements IPrometheusAgent {
  "apiVersion": IPrometheusAgent["apiVersion"];
  "kind": IPrometheusAgent["kind"];
  "metadata"?: IPrometheusAgent["metadata"];
  "spec": IPrometheusAgent["spec"];
  "status"?: IPrometheusAgent["status"];

static apiVersion: IPrometheusAgent["apiVersion"] = "monitoring.coreos.com/v1alpha1";
static kind: IPrometheusAgent["kind"] = "PrometheusAgent";
static is = createTypeMetaGuard<IPrometheusAgent>(PrometheusAgent);

constructor(data?: ModelData<IPrometheusAgent>) {
  super();

  this.setDefinedProps({
    apiVersion: PrometheusAgent.apiVersion,
    kind: PrometheusAgent.kind,
    ...data
  } as IPrometheusAgent);
}
}


setValidateFunc(PrometheusAgent, validate as ValidateFunc<IPrometheusAgent>);
