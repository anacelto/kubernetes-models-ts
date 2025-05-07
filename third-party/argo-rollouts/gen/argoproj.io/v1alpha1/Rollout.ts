import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1Rollout";

export interface IRollout {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "Rollout";
  "metadata"?: IObjectMeta;
  "spec": {
    "analysis"?: {
      "successfulRunHistoryLimit"?: number;
      "unsuccessfulRunHistoryLimit"?: number;
    };
    "minReadySeconds"?: number;
    "paused"?: boolean;
    "progressDeadlineAbort"?: boolean;
    "progressDeadlineSeconds"?: number;
    "replicas"?: number;
    "restartAt"?: string;
    "revisionHistoryLimit"?: number;
    "rollbackWindow"?: {
      "revisions"?: number;
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
    "strategy"?: {
      "blueGreen"?: {
        "abortScaleDownDelaySeconds"?: number;
        "activeMetadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "activeService": string;
        "antiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: {
            "weight": number;
          };
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
          };
        };
        "autoPromotionEnabled"?: boolean;
        "autoPromotionSeconds"?: number;
        "maxUnavailable"?: number | string;
        "postPromotionAnalysis"?: {
          "args"?: Array<{
            "name": string;
            "value"?: string;
            "valueFrom"?: {
              "fieldRef"?: {
                "fieldPath": string;
              };
              "podTemplateHashValue"?: string;
            };
          }>;
          "dryRun"?: Array<{
            "metricName": string;
          }>;
          "measurementRetention"?: Array<{
            "limit": number;
            "metricName": string;
          }>;
          "templates"?: Array<{
            "clusterScope"?: boolean;
            "templateName"?: string;
          }>;
        };
        "prePromotionAnalysis"?: {
          "args"?: Array<{
            "name": string;
            "value"?: string;
            "valueFrom"?: {
              "fieldRef"?: {
                "fieldPath": string;
              };
              "podTemplateHashValue"?: string;
            };
          }>;
          "dryRun"?: Array<{
            "metricName": string;
          }>;
          "measurementRetention"?: Array<{
            "limit": number;
            "metricName": string;
          }>;
          "templates"?: Array<{
            "clusterScope"?: boolean;
            "templateName"?: string;
          }>;
        };
        "previewMetadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "previewReplicaCount"?: number;
        "previewService"?: string;
        "scaleDownDelayRevisionLimit"?: number;
        "scaleDownDelaySeconds"?: number;
      };
      "canary"?: {
        "abortScaleDownDelaySeconds"?: number;
        "analysis"?: {
          "args"?: Array<{
            "name": string;
            "value"?: string;
            "valueFrom"?: {
              "fieldRef"?: {
                "fieldPath": string;
              };
              "podTemplateHashValue"?: string;
            };
          }>;
          "dryRun"?: Array<{
            "metricName": string;
          }>;
          "measurementRetention"?: Array<{
            "limit": number;
            "metricName": string;
          }>;
          "startingStep"?: number;
          "templates"?: Array<{
            "clusterScope"?: boolean;
            "templateName"?: string;
          }>;
        };
        "antiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: {
            "weight": number;
          };
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
          };
        };
        "canaryMetadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "canaryService"?: string;
        "dynamicStableScale"?: boolean;
        "maxSurge"?: number | string;
        "maxUnavailable"?: number | string;
        "minPodsPerReplicaSet"?: number;
        "pingPong"?: {
          "pingService": string;
          "pongService": string;
        };
        "scaleDownDelayRevisionLimit"?: number;
        "scaleDownDelaySeconds"?: number;
        "stableMetadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "stableService"?: string;
        "steps"?: Array<{
          "analysis"?: {
            "args"?: Array<{
              "name": string;
              "value"?: string;
              "valueFrom"?: {
                "fieldRef"?: {
                  "fieldPath": string;
                };
                "podTemplateHashValue"?: string;
              };
            }>;
            "dryRun"?: Array<{
              "metricName": string;
            }>;
            "measurementRetention"?: Array<{
              "limit": number;
              "metricName": string;
            }>;
            "templates"?: Array<{
              "clusterScope"?: boolean;
              "templateName"?: string;
            }>;
          };
          "experiment"?: {
            "analyses"?: Array<{
              "args"?: Array<{
                "name": string;
                "value"?: string;
                "valueFrom"?: {
                  "fieldRef"?: {
                    "fieldPath": string;
                  };
                  "podTemplateHashValue"?: string;
                };
              }>;
              "clusterScope"?: boolean;
              "name": string;
              "requiredForCompletion"?: boolean;
              "templateName": string;
            }>;
            "duration"?: string;
            "templates": Array<{
              "metadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "name": string;
              "replicas"?: number;
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
              "service"?: {
                "name"?: string;
              };
              "specRef": string;
              "weight"?: number;
            }>;
          };
          "pause"?: {
            "duration"?: number | string;
          };
          "setCanaryScale"?: {
            "matchTrafficWeight"?: boolean;
            "replicas"?: number;
            "weight"?: number;
          };
          "setHeaderRoute"?: {
            "match"?: Array<{
              "headerName": string;
              "headerValue": {
                "exact"?: string;
                "prefix"?: string;
                "regex"?: string;
              };
            }>;
            "name"?: string;
          };
          "setMirrorRoute"?: {
            "match"?: Array<{
              "headers"?: {
                [key: string]: {
                  "exact"?: string;
                  "prefix"?: string;
                  "regex"?: string;
                };
              };
              "method"?: {
                "exact"?: string;
                "prefix"?: string;
                "regex"?: string;
              };
              "path"?: {
                "exact"?: string;
                "prefix"?: string;
                "regex"?: string;
              };
            }>;
            "name": string;
            "percentage"?: number;
          };
          "setWeight"?: number;
        }>;
        "trafficRouting"?: {
          "alb"?: {
            "annotationPrefix"?: string;
            "ingress": string;
            "rootService"?: string;
            "servicePort": number;
            "stickinessConfig"?: {
              "durationSeconds": number;
              "enabled": boolean;
            };
          };
          "ambassador"?: {
            "mappings": Array<string>;
          };
          "apisix"?: {
            "route"?: {
              "name": string;
              "rules"?: Array<string>;
            };
          };
          "appMesh"?: {
            "virtualNodeGroup"?: {
              "canaryVirtualNodeRef": {
                "name": string;
              };
              "stableVirtualNodeRef": {
                "name": string;
              };
            };
            "virtualService"?: {
              "name": string;
              "routes"?: Array<string>;
            };
          };
          "istio"?: {
            "destinationRule"?: {
              "canarySubsetName": string;
              "name": string;
              "stableSubsetName": string;
            };
            "virtualService"?: {
              "name": string;
              "routes"?: Array<string>;
              "tcpRoutes"?: Array<{
                "port"?: number;
              }>;
              "tlsRoutes"?: Array<{
                "port"?: number;
                "sniHosts"?: Array<string>;
              }>;
            };
            "virtualServices"?: Array<{
              "name": string;
              "routes"?: Array<string>;
              "tcpRoutes"?: Array<{
                "port"?: number;
              }>;
              "tlsRoutes"?: Array<{
                "port"?: number;
                "sniHosts"?: Array<string>;
              }>;
            }>;
          };
          "managedRoutes"?: Array<{
            "name": string;
          }>;
          "nginx"?: {
            "additionalIngressAnnotations"?: {
              [key: string]: string;
            };
            "annotationPrefix"?: string;
            "stableIngress"?: string;
            "stableIngresses"?: Array<string>;
          };
          "plugins"?: {
          };
          "smi"?: {
            "rootService"?: string;
            "trafficSplitName"?: string;
          };
          "traefik"?: {
            "weightedTraefikServiceName": string;
          };
        };
      };
    };
    "template"?: {
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      "spec"?: {
        "activeDeadlineSeconds"?: number;
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
        "automountServiceAccountToken"?: boolean;
        "containers": Array<{
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
          "resources"?: {
            "limits"?: any;
            "requests"?: any;
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
        "dnsConfig"?: {
          "nameservers"?: Array<string>;
          "options"?: Array<{
            "name"?: string;
            "value"?: string;
          }>;
          "searches"?: Array<string>;
        };
        "dnsPolicy"?: string;
        "enableServiceLinks"?: boolean;
        "ephemeralContainers"?: Array<{
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
          "resources"?: {
            "limits"?: any;
            "requests"?: any;
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
          "targetContainerName"?: string;
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
        "hostAliases"?: Array<{
          "hostnames"?: Array<string>;
          "ip"?: string;
        }>;
        "hostIPC"?: boolean;
        "hostNetwork"?: boolean;
        "hostPID"?: boolean;
        "hostUsers"?: boolean;
        "hostname"?: string;
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
          "resources"?: {
            "limits"?: any;
            "requests"?: any;
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
        "nodeName"?: string;
        "nodeSelector"?: {
          [key: string]: string;
        };
        "os"?: {
          "name": string;
        };
        "overhead"?: {
          [key: string]: number | string;
        };
        "preemptionPolicy"?: string;
        "priority"?: number;
        "priorityClassName"?: string;
        "readinessGates"?: Array<{
          "conditionType": string;
        }>;
        "restartPolicy"?: string;
        "runtimeClassName"?: string;
        "schedulerName"?: string;
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
        "serviceAccount"?: string;
        "serviceAccountName"?: string;
        "setHostnameAsFQDN"?: boolean;
        "shareProcessNamespace"?: boolean;
        "subdomain"?: string;
        "terminationGracePeriodSeconds"?: number;
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
        "volumes"?: Array<any>;
      };
    };
    "workloadRef"?: {
      "apiVersion"?: string;
      "kind"?: string;
      "name"?: string;
    };
  };
  "status"?: {
    "HPAReplicas"?: number;
    "abort"?: boolean;
    "abortedAt"?: string;
    "alb"?: {
      "canaryTargetGroup"?: {
        "arn": string;
        "fullName": string;
        "name": string;
      };
      "loadBalancer"?: {
        "arn": string;
        "fullName": string;
        "name": string;
      };
      "stableTargetGroup"?: {
        "arn": string;
        "fullName": string;
        "name": string;
      };
    };
    "availableReplicas"?: number;
    "blueGreen"?: {
      "activeSelector"?: string;
      "postPromotionAnalysisRunStatus"?: {
        "message"?: string;
        "name": string;
        "status": string;
      };
      "prePromotionAnalysisRunStatus"?: {
        "message"?: string;
        "name": string;
        "status": string;
      };
      "previewSelector"?: string;
      "scaleUpPreviewCheckPoint"?: boolean;
    };
    "canary"?: {
      "currentBackgroundAnalysisRunStatus"?: {
        "message"?: string;
        "name": string;
        "status": string;
      };
      "currentExperiment"?: string;
      "currentStepAnalysisRunStatus"?: {
        "message"?: string;
        "name": string;
        "status": string;
      };
      "stablePingPong"?: string;
      "weights"?: {
        "additional"?: Array<{
          "podTemplateHash"?: string;
          "serviceName"?: string;
          "weight": number;
        }>;
        "canary": {
          "podTemplateHash"?: string;
          "serviceName"?: string;
          "weight": number;
        };
        "stable": {
          "podTemplateHash"?: string;
          "serviceName"?: string;
          "weight": number;
        };
        "verified"?: boolean;
      };
    };
    "collisionCount"?: number;
    "conditions"?: Array<{
      "lastTransitionTime": string;
      "lastUpdateTime": string;
      "message": string;
      "reason": string;
      "status": string;
      "type": string;
    }>;
    "controllerPause"?: boolean;
    "currentPodHash"?: string;
    "currentStepHash"?: string;
    "currentStepIndex"?: number;
    "message"?: string;
    "observedGeneration"?: string;
    "pauseConditions"?: Array<{
      "reason": string;
      "startTime": string;
    }>;
    "phase"?: string;
    "promoteFull"?: boolean;
    "readyReplicas"?: number;
    "replicas"?: number;
    "restartedAt"?: string;
    "selector"?: string;
    "stableRS"?: string;
    "updatedReplicas"?: number;
    "workloadObservedGeneration"?: string;
  };
}

export class Rollout extends Model<IRollout> implements IRollout {
  "apiVersion": IRollout["apiVersion"];
  "kind": IRollout["kind"];
  "metadata"?: IRollout["metadata"];
  "spec": IRollout["spec"];
  "status"?: IRollout["status"];

static apiVersion: IRollout["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IRollout["kind"] = "Rollout";
static is = createTypeMetaGuard<IRollout>(Rollout);

constructor(data?: ModelData<IRollout>) {
  super();

  this.setDefinedProps({
    apiVersion: Rollout.apiVersion,
    kind: Rollout.kind,
    ...data
  } as IRollout);
}
}


setValidateFunc(Rollout, validate as ValidateFunc<IRollout>);
