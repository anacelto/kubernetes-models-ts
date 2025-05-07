import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringBanzaicloudIoV1alpha1ThanosEndpoint";

export interface IThanosEndpoint {
  "apiVersion": "monitoring.banzaicloud.io/v1alpha1";
  "kind": "ThanosEndpoint";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "caBundle"?: string;
    "certificate"?: string;
    "ingressClassName"?: string;
    "metaOverrides"?: {
      "annotations"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
    };
    "queryOverrides"?: {
      "GRPCClientCA"?: string;
      "GRPCClientCertificate"?: string;
      "GRPCClientServerName"?: string;
      "GRPCIngress"?: {
        "certificate"?: string;
        "host"?: string;
        "ingressOverrides"?: {
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          "spec"?: {
            "backend"?: {
              "resource"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
              };
              "serviceName"?: string;
              "servicePort"?: number | string;
            };
            "ingressClassName"?: string;
            "rules"?: Array<{
              "host"?: string;
              "http"?: {
                "paths": Array<{
                  "backend": {
                    "resource"?: {
                      "apiGroup"?: string;
                      "kind": string;
                      "name": string;
                    };
                    "serviceName"?: string;
                    "servicePort"?: number | string;
                  };
                  "path"?: string;
                  "pathType"?: string;
                }>;
              };
            }>;
            "tls"?: Array<{
              "hosts"?: Array<string>;
              "secretName"?: string;
            }>;
          };
        };
        "path"?: string;
      };
      "GRPCServerCA"?: string;
      "GRPCServerCertificate"?: string;
      "HTTPIngress"?: {
        "certificate"?: string;
        "host"?: string;
        "ingressOverrides"?: {
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          "spec"?: {
            "backend"?: {
              "resource"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
              };
              "serviceName"?: string;
              "servicePort"?: number | string;
            };
            "ingressClassName"?: string;
            "rules"?: Array<{
              "host"?: string;
              "http"?: {
                "paths": Array<{
                  "backend": {
                    "resource"?: {
                      "apiGroup"?: string;
                      "kind": string;
                      "name": string;
                    };
                    "serviceName"?: string;
                    "servicePort"?: number | string;
                  };
                  "path"?: string;
                  "pathType"?: string;
                }>;
              };
            }>;
            "tls"?: Array<{
              "hosts"?: Array<string>;
              "secretName"?: string;
            }>;
          };
        };
        "path"?: string;
      };
      "deploymentOverrides"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "spec"?: {
          "minReadySeconds"?: number;
          "paused"?: boolean;
          "progressDeadlineSeconds"?: number;
          "replicas"?: number;
          "revisionHistoryLimit"?: number;
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
            "rollingUpdate"?: {
              "maxSurge"?: number | string;
              "maxUnavailable"?: number | string;
            };
            "type"?: string;
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
                "maxSkew": number;
                "topologyKey": string;
                "whenUnsatisfiable": string;
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
                      };
                      "resources"?: {
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
            };
          };
        };
      };
      "grafanaDatasource"?: boolean;
      "grpcAddress"?: string;
      "grpcGracePeriod"?: string;
      "http_grace_period"?: string;
      "httpAddress"?: string;
      "logFormat"?: string;
      "logLevel"?: string;
      "metaOverrides"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      "metrics"?: {
        "interval"?: string;
        "path"?: string;
        "port"?: number;
        "prometheusAnnotations"?: boolean;
        "serviceMonitor"?: boolean;
        "timeout"?: string;
      };
      "queryAutoDownsampling"?: boolean;
      "queryDefaultEvaluationInterval"?: string;
      "queryMaxConcurrent"?: number;
      "queryPartialResponse"?: boolean;
      "queryReplicaLabel"?: Array<string>;
      "queryTimeout"?: string;
      "selectorLabels"?: {
        [key: string]: string;
      };
      "serviceOverrides"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "spec"?: {
          "allocateLoadBalancerNodePorts"?: boolean;
          "clusterIP"?: string;
          "clusterIPs"?: Array<string>;
          "externalIPs"?: Array<string>;
          "externalName"?: string;
          "externalTrafficPolicy"?: string;
          "healthCheckNodePort"?: number;
          "internalTrafficPolicy"?: string;
          "ipFamilies"?: Array<string>;
          "ipFamilyPolicy"?: string;
          "loadBalancerClass"?: string;
          "loadBalancerIP"?: string;
          "loadBalancerSourceRanges"?: Array<string>;
          "ports"?: Array<{
            "appProtocol"?: string;
            "name"?: string;
            "nodePort"?: number;
            "port": number;
            "protocol"?: string;
            "targetPort"?: number | string;
          }>;
          "publishNotReadyAddresses"?: boolean;
          "selector"?: {
            [key: string]: string;
          };
          "sessionAffinity"?: string;
          "sessionAffinityConfig"?: {
            "clientIP"?: {
              "timeoutSeconds"?: number;
            };
          };
          "type"?: string;
        };
      };
      "storeResponseTimeout"?: string;
      "storeSDDNSInterval"?: string;
      "storeUnhealthyTimeout"?: string;
      "stores"?: Array<string>;
      "webExternalPrefix"?: string;
      "webPrefixHeader"?: string;
      "webRoutePrefix"?: string;
    };
    "replicaLabels"?: Array<string>;
    "storeEndpointOverrides"?: Array<{
      "config"?: {
        "mountFrom"?: {
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "value"?: string;
        "valueFrom"?: {
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      };
      "ingress"?: {
        "certificate"?: string;
        "host"?: string;
        "ingressOverrides"?: {
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          "spec"?: {
            "backend"?: {
              "resource"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
              };
              "serviceName"?: string;
              "servicePort"?: number | string;
            };
            "ingressClassName"?: string;
            "rules"?: Array<{
              "host"?: string;
              "http"?: {
                "paths": Array<{
                  "backend": {
                    "resource"?: {
                      "apiGroup"?: string;
                      "kind": string;
                      "name": string;
                    };
                    "serviceName"?: string;
                    "servicePort"?: number | string;
                  };
                  "path"?: string;
                  "pathType"?: string;
                }>;
              };
            }>;
            "tls"?: Array<{
              "hosts"?: Array<string>;
              "secretName"?: string;
            }>;
          };
        };
        "path"?: string;
      };
      "metaOverrides"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      "selector"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "grpcPort"?: number;
        "httpPort"?: number;
        "labels"?: {
          [key: string]: string;
        };
        "namespaces"?: string;
      };
      "serviceOverrides"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "spec"?: {
          "allocateLoadBalancerNodePorts"?: boolean;
          "clusterIP"?: string;
          "clusterIPs"?: Array<string>;
          "externalIPs"?: Array<string>;
          "externalName"?: string;
          "externalTrafficPolicy"?: string;
          "healthCheckNodePort"?: number;
          "internalTrafficPolicy"?: string;
          "ipFamilies"?: Array<string>;
          "ipFamilyPolicy"?: string;
          "loadBalancerClass"?: string;
          "loadBalancerIP"?: string;
          "loadBalancerSourceRanges"?: Array<string>;
          "ports"?: Array<{
            "appProtocol"?: string;
            "name"?: string;
            "nodePort"?: number;
            "port": number;
            "protocol"?: string;
            "targetPort"?: number | string;
          }>;
          "publishNotReadyAddresses"?: boolean;
          "selector"?: {
            [key: string]: string;
          };
          "sessionAffinity"?: string;
          "sessionAffinityConfig"?: {
            "clientIP"?: {
              "timeoutSeconds"?: number;
            };
          };
          "type"?: string;
        };
      };
      "thanos": string;
      "url"?: string;
    }>;
    "stores"?: Array<string>;
  };
  "status"?: {
    "endpointAddress"?: string;
  };
}

export class ThanosEndpoint extends Model<IThanosEndpoint> implements IThanosEndpoint {
  "apiVersion": IThanosEndpoint["apiVersion"];
  "kind": IThanosEndpoint["kind"];
  "metadata"?: IThanosEndpoint["metadata"];
  "spec"?: IThanosEndpoint["spec"];
  "status"?: IThanosEndpoint["status"];

static apiVersion: IThanosEndpoint["apiVersion"] = "monitoring.banzaicloud.io/v1alpha1";
static kind: IThanosEndpoint["kind"] = "ThanosEndpoint";
static is = createTypeMetaGuard<IThanosEndpoint>(ThanosEndpoint);

constructor(data?: ModelData<IThanosEndpoint>) {
  super();

  this.setDefinedProps({
    apiVersion: ThanosEndpoint.apiVersion,
    kind: ThanosEndpoint.kind,
    ...data
  } as IThanosEndpoint);
}
}


setValidateFunc(ThanosEndpoint, validate as ValidateFunc<IThanosEndpoint>);
