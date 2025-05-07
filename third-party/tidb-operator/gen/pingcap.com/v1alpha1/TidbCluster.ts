import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PingcapComV1alpha1TidbCluster";

export interface ITidbCluster {
  "apiVersion": "pingcap.com/v1alpha1";
  "kind": "TidbCluster";
  "metadata": IObjectMeta;
  "spec": {
    "acrossK8s"?: boolean;
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
          "namespaces"?: Array<string>;
          "topologyKey": string;
        }>;
      };
    };
    "annotations"?: {
      [key: string]: string;
    };
    "cluster"?: {
      "clusterDomain"?: string;
      "name": string;
      "namespace"?: string;
    };
    "clusterDomain"?: string;
    "configUpdateStrategy"?: string;
    "discovery"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "statefulSetUpdateStrategy"?: string;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "dnsConfig"?: {
      "nameservers"?: Array<string>;
      "options"?: Array<{
        "name"?: string;
        "value"?: string;
      }>;
      "searches"?: Array<string>;
    };
    "dnsPolicy"?: string;
    "enableDynamicConfiguration"?: boolean;
    "enablePVReclaim"?: boolean;
    "helper"?: {
      "image"?: string;
      "imagePullPolicy"?: string;
    };
    "hostNetwork"?: boolean;
    "imagePullPolicy"?: string;
    "imagePullSecrets"?: Array<{
      "name"?: string;
    }>;
    "labels"?: {
      [key: string]: string;
    };
    "nodeSelector"?: {
      [key: string]: string;
    };
    "paused"?: boolean;
    "pd"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "config"?: any;
      "configUpdateStrategy"?: string;
      "dataSubDir"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
      "enableDashboardInternalProxy"?: boolean;
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
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "maxFailoverCount"?: number;
      "mountClusterClientSecret"?: boolean;
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "service"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "clusterIP"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "loadBalancerIP"?: string;
        "loadBalancerSourceRanges"?: Array<string>;
        "port"?: number;
        "portName"?: string;
        "type"?: string;
      };
      "serviceAccount"?: string;
      "startUpScriptVersion"?: "" | "v1";
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "storageVolumes"?: Array<{
        "mountPath"?: string;
        "name": string;
        "storageClassName"?: string;
        "storageSize": string;
      }>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tlsClientSecretName"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "pdAddresses"?: Array<string>;
    "podManagementPolicy"?: string;
    "podSecurityContext"?: {
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
        "runAsUserName"?: string;
      };
    };
    "preferIPv6"?: boolean;
    "priorityClassName"?: string;
    "pump"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "config"?: any;
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "serviceAccount"?: string;
      "setTimeZone"?: boolean;
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "pvReclaimPolicy"?: string;
    "recoveryMode"?: boolean;
    "schedulerName"?: string;
    "serviceAccount"?: string;
    "services"?: Array<{
      "name"?: string;
      "type"?: string;
    }>;
    "startScriptVersion"?: "" | "v1" | "v2";
    "statefulSetUpdateStrategy"?: string;
    "suspendAction"?: {
      "suspendStatefulSet"?: boolean;
    };
    "ticdc"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "config"?: any;
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "gracefulShutdownTimeout"?: string;
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "serviceAccount"?: string;
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "storageVolumes"?: Array<{
        "mountPath"?: string;
        "name": string;
        "storageClassName"?: string;
        "storageSize": string;
      }>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tlsClientSecretNames"?: Array<string>;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "tidb"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "binlogEnabled"?: boolean;
      "config"?: any;
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "initializer"?: {
        "createPassword"?: boolean;
      };
      "labels"?: {
        [key: string]: string;
      };
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
      "limits"?: {
        [key: string]: number | string;
      };
      "maxFailoverCount"?: number;
      "nodeSelector"?: {
        [key: string]: string;
      };
      "plugins"?: Array<string>;
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "separateSlowLog"?: boolean;
      "service"?: {
        "additionalPorts"?: Array<{
          "appProtocol"?: string;
          "name"?: string;
          "nodePort"?: number;
          "port": number;
          "protocol"?: string;
          "targetPort"?: number | string;
        }>;
        "annotations"?: {
          [key: string]: string;
        };
        "clusterIP"?: string;
        "exposeStatus"?: boolean;
        "externalTrafficPolicy"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "loadBalancerIP"?: string;
        "loadBalancerSourceRanges"?: Array<string>;
        "mysqlNodePort"?: number;
        "port"?: number;
        "portName"?: string;
        "statusNodePort"?: number;
        "type"?: string;
      };
      "serviceAccount"?: string;
      "slowLogTailer"?: {
        "image"?: string;
        "imagePullPolicy"?: string;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "slowLogVolumeName"?: string;
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "storageVolumes"?: Array<{
        "mountPath"?: string;
        "name": string;
        "storageClassName"?: string;
        "storageSize": string;
      }>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tlsClient"?: {
        "disableClientAuthn"?: boolean;
        "enabled"?: boolean;
        "skipInternalClientCA"?: boolean;
      };
      "tokenBasedAuthEnabled"?: boolean;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "tiflash"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "config"?: {
        "config"?: any;
        "proxy"?: any;
      };
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "failover"?: {
        "recoverByUID"?: string;
      };
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "initializer"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "logTailer"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "maxFailoverCount"?: number;
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "privileged"?: boolean;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "recoverFailover"?: boolean;
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "scalePolicy"?: {
        "scaleInParallelism"?: number;
        "scaleOutParallelism"?: number;
      };
      "schedulerName"?: string;
      "serviceAccount"?: string;
      "statefulSetUpdateStrategy"?: string;
      "storageClaims": Array<{
        "resources"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "storageClassName"?: string;
      }>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "tikv"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "config"?: any;
      "configUpdateStrategy"?: string;
      "dataSubDir"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
      "enableNamedStatusPort"?: boolean;
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
      "evictLeaderTimeout"?: string;
      "failover"?: {
        "recoverByUID"?: string;
      };
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "logTailer"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "maxFailoverCount"?: number;
      "mountClusterClientSecret"?: boolean;
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "privileged"?: boolean;
      "raftLogVolumeName"?: string;
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "recoverFailover"?: boolean;
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "rocksDBLogVolumeName"?: string;
      "scalePolicy"?: {
        "scaleInParallelism"?: number;
        "scaleOutParallelism"?: number;
      };
      "schedulerName"?: string;
      "separateRaftLog"?: boolean;
      "separateRocksDBLog"?: boolean;
      "serviceAccount"?: string;
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "storageVolumes"?: Array<{
        "mountPath"?: string;
        "name": string;
        "storageClassName"?: string;
        "storageSize": string;
      }>;
      "storeLabels"?: Array<string>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "timezone"?: string;
    "tiproxy"?: {
      "additionalContainers"?: Array<{
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
      "additionalVolumeMounts"?: Array<{
        "mountPath": string;
        "mountPropagation"?: string;
        "name": string;
        "readOnly"?: boolean;
        "subPath"?: string;
        "subPathExpr"?: string;
      }>;
      "additionalVolumes"?: Array<{
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
          "readOnly"?: boolean;
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
          "sources": Array<{
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
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "baseImage"?: string;
      "configUpdateStrategy"?: string;
      "dnsConfig"?: {
        "nameservers"?: Array<string>;
        "options"?: Array<{
          "name"?: string;
          "value"?: string;
        }>;
        "searches"?: Array<string>;
      };
      "dnsPolicy"?: string;
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
      "hostNetwork"?: boolean;
      "image"?: string;
      "imagePullPolicy"?: string;
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
      "labels"?: {
        [key: string]: string;
      };
      "limits"?: {
        [key: string]: number | string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "podManagementPolicy"?: string;
      "podSecurityContext"?: {
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
          "runAsUserName"?: string;
        };
      };
      "priorityClassName"?: string;
      "proxy"?: {
        "max-connections"?: number;
        "proxy-protocol"?: string;
        "tcp-keep-alive"?: boolean;
      };
      "readinessProbe"?: {
        "initialDelaySeconds"?: number;
        "periodSeconds"?: number;
        "type"?: "tcp" | "command";
      };
      "replicas": number;
      "requests"?: {
        [key: string]: number | string;
      };
      "schedulerName"?: string;
      "serviceAccount"?: string;
      "statefulSetUpdateStrategy"?: string;
      "storageClassName"?: string;
      "storageVolumes"?: Array<{
        "mountPath"?: string;
        "name": string;
        "storageClassName"?: string;
        "storageSize": string;
      }>;
      "suspendAction"?: {
        "suspendStatefulSet"?: boolean;
      };
      "terminationGracePeriodSeconds"?: number;
      "tlsClientSecretName"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "topologyKey": string;
      }>;
      "version"?: string;
    };
    "tlsCluster"?: {
      "enabled"?: boolean;
    };
    "tolerations"?: Array<{
      "effect"?: string;
      "key"?: string;
      "operator"?: string;
      "tolerationSeconds"?: number;
      "value"?: string;
    }>;
    "topologySpreadConstraints"?: Array<{
      "topologyKey": string;
    }>;
    "version"?: string;
  };
  "status"?: {
    "auto-scaler"?: {
      "name": string;
      "namespace": string;
    };
    "clusterID"?: string;
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "lastUpdateTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
    "pd"?: {
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "failureMembers"?: {
        [key: string]: {
          "createdAt"?: string;
          "hostDown"?: boolean;
          "memberDeleted"?: boolean;
          "memberID"?: string;
          "podName"?: string;
          "pvcUID"?: string;
          "pvcUIDSet"?: {
            [key: string]: {
            };
          };
        };
      };
      "image"?: string;
      "leader"?: {
        "clientURL": string;
        "health": boolean;
        "id": string;
        "lastTransitionTime"?: string;
        "name": string;
      };
      "members"?: {
        [key: string]: {
          "clientURL": string;
          "health": boolean;
          "id": string;
          "lastTransitionTime"?: string;
          "name": string;
        };
      };
      "peerMembers"?: {
        [key: string]: {
          "clientURL": string;
          "health": boolean;
          "id": string;
          "lastTransitionTime"?: string;
          "name": string;
        };
      };
      "phase"?: string;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "synced"?: boolean;
      "unjoinedMembers"?: {
        [key: string]: {
          "createdAt"?: string;
          "podName"?: string;
          "pvcUID"?: string;
          "pvcUIDSet"?: {
            [key: string]: {
            };
          };
        };
      };
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "pump"?: {
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "members"?: Array<{
        "host": string;
        "nodeId": string;
        "state": string;
      }>;
      "phase"?: string;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "ticdc"?: {
      "captures"?: {
        [key: string]: {
          "id"?: string;
          "isOwner"?: boolean;
          "podName"?: string;
          "ready"?: boolean;
          "version"?: string;
        };
      };
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "phase"?: string;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "synced"?: boolean;
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "tidb"?: {
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "failureMembers"?: {
        [key: string]: {
          "createdAt"?: string;
          "podName"?: string;
        };
      };
      "image"?: string;
      "members"?: {
        [key: string]: {
          "health": boolean;
          "lastTransitionTime"?: string;
          "name": string;
          "node"?: string;
        };
      };
      "passwordInitialized"?: boolean;
      "phase"?: string;
      "resignDDLOwnerRetryCount"?: number;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "tiflash"?: {
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "failoverUID"?: string;
      "failureStores"?: {
        [key: string]: {
          "createdAt"?: string;
          "hostDown"?: boolean;
          "podName"?: string;
          "pvcUIDSet"?: {
            [key: string]: {
            };
          };
          "storeDeleted"?: boolean;
          "storeID"?: string;
        };
      };
      "image"?: string;
      "peerStores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "phase"?: string;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "stores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "synced"?: boolean;
      "tombstoneStores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "tikv"?: {
      "bootStrapped"?: boolean;
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "evictLeader"?: {
        [key: string]: {
          "beginTime"?: string;
          "podCreateTime"?: string;
          "value"?: string;
        };
      };
      "failoverUID"?: string;
      "failureStores"?: {
        [key: string]: {
          "createdAt"?: string;
          "hostDown"?: boolean;
          "podName"?: string;
          "pvcUIDSet"?: {
            [key: string]: {
            };
          };
          "storeDeleted"?: boolean;
          "storeID"?: string;
        };
      };
      "image"?: string;
      "peerStores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "phase"?: string;
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "stores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "synced"?: boolean;
      "tombstoneStores"?: {
        [key: string]: {
          "id": string;
          "ip": string;
          "lastTransitionTime"?: string;
          "leaderCount": number;
          "podName": string;
          "state": string;
        };
      };
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
    "tiproxy"?: {
      "conditions"?: Array<{
        "lastTransitionTime": string;
        "message": string;
        "observedGeneration"?: number;
        "reason": string;
        "status": "True" | "False" | "Unknown";
        "type": string;
      }>;
      "phase"?: string;
      "proxy"?: {
        "max-connections"?: number;
        "proxy-protocol"?: string;
        "tcp-keep-alive"?: boolean;
      };
      "statefulSet"?: {
        "collisionCount"?: number;
        "conditions"?: Array<{
          "lastTransitionTime"?: string;
          "message"?: string;
          "reason"?: string;
          "status": string;
          "type": string;
        }>;
        "currentReplicas"?: number;
        "currentRevision"?: string;
        "observedGeneration"?: number;
        "readyReplicas"?: number;
        "replicas": number;
        "updateRevision"?: string;
        "updatedReplicas"?: number;
      };
      "synced"?: boolean;
      "volumes"?: {
        [key: string]: {
          "boundCount"?: number;
          "currentCapacity"?: number | string;
          "currentCount"?: number;
          "currentStorageClass"?: string;
          "modifiedCapacity"?: number | string;
          "modifiedCount"?: number;
          "modifiedStorageClass"?: string;
          "name": string;
          "resizedCapacity"?: number | string;
          "resizedCount"?: number;
        };
      };
    };
  };
}

export class TidbCluster extends Model<ITidbCluster> implements ITidbCluster {
  "apiVersion": ITidbCluster["apiVersion"];
  "kind": ITidbCluster["kind"];
  "metadata": ITidbCluster["metadata"];
  "spec": ITidbCluster["spec"];
  "status"?: ITidbCluster["status"];

static apiVersion: ITidbCluster["apiVersion"] = "pingcap.com/v1alpha1";
static kind: ITidbCluster["kind"] = "TidbCluster";
static is = createTypeMetaGuard<ITidbCluster>(TidbCluster);

constructor(data?: ModelData<ITidbCluster>) {
  super();

  this.setDefinedProps({
    apiVersion: TidbCluster.apiVersion,
    kind: TidbCluster.kind,
    ...data
  } as ITidbCluster);
}
}


setValidateFunc(TidbCluster, validate as ValidateFunc<ITidbCluster>);
