import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PingcapComV1alpha1BackupSchedule";

export interface IBackupSchedule {
  "apiVersion": "pingcap.com/v1alpha1";
  "kind": "BackupSchedule";
  "metadata": IObjectMeta;
  "spec": {
    "backupTemplate": {
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
      "azblob"?: {
        "accessTier"?: string;
        "container"?: string;
        "path"?: string;
        "prefix"?: string;
        "secretName"?: string;
      };
      "backoffRetryPolicy"?: {
        "maxRetryTimes"?: number;
        "minRetryDuration"?: string;
        "retryTimeout"?: string;
      };
      "backupMode"?: string;
      "backupType"?: string;
      "br"?: {
        "checkRequirements"?: boolean;
        "checksum"?: boolean;
        "cluster": string;
        "clusterNamespace"?: string;
        "concurrency"?: number;
        "db"?: string;
        "logLevel"?: string;
        "onLine"?: boolean;
        "options"?: Array<string>;
        "rateLimit"?: number;
        "sendCredToTikv"?: boolean;
        "statusAddr"?: string;
        "table"?: string;
        "timeAgo"?: string;
      };
      "cleanOption"?: {
        "backoffEnabled"?: boolean;
        "batchConcurrency"?: number;
        "disableBatchConcurrency"?: boolean;
        "pageSize"?: number;
        "retryCount"?: number;
        "routineConcurrency"?: number;
      };
      "cleanPolicy"?: string;
      "commitTs"?: string;
      "dumpling"?: {
        "options"?: Array<string>;
        "tableFilter"?: Array<string>;
      };
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
      "from"?: {
        "host": string;
        "port"?: number;
        "secretName": string;
        "tlsClientSecretName"?: string;
        "user"?: string;
      };
      "gcs"?: {
        "bucket"?: string;
        "bucketAcl"?: string;
        "location"?: string;
        "objectAcl"?: string;
        "path"?: string;
        "prefix"?: string;
        "projectId": string;
        "secretName"?: string;
        "storageClass"?: string;
      };
      "imagePullSecrets"?: Array<{
        "name"?: string;
      }>;
      "local"?: {
        "prefix"?: string;
        "volume": {
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
        };
        "volumeMount": {
          "mountPath": string;
          "mountPropagation"?: string;
          "name": string;
          "readOnly"?: boolean;
          "subPath"?: string;
          "subPathExpr"?: string;
        };
      };
      "logStop"?: boolean;
      "logTruncateUntil"?: string;
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
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "s3"?: {
        "acl"?: string;
        "bucket"?: string;
        "endpoint"?: string;
        "options"?: Array<string>;
        "path"?: string;
        "prefix"?: string;
        "provider": string;
        "region"?: string;
        "secretName"?: string;
        "sse"?: string;
        "storageClass"?: string;
      };
      "serviceAccount"?: string;
      "storageClassName"?: string;
      "storageSize"?: string;
      "tableFilter"?: Array<string>;
      "tikvGCLifeTime"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "toolImage"?: string;
      "useKMS"?: boolean;
    };
    "imagePullSecrets"?: Array<{
      "name"?: string;
    }>;
    "logBackupTemplate": {
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
      "azblob"?: {
        "accessTier"?: string;
        "container"?: string;
        "path"?: string;
        "prefix"?: string;
        "secretName"?: string;
      };
      "backoffRetryPolicy"?: {
        "maxRetryTimes"?: number;
        "minRetryDuration"?: string;
        "retryTimeout"?: string;
      };
      "backupMode"?: string;
      "backupType"?: string;
      "br"?: {
        "checkRequirements"?: boolean;
        "checksum"?: boolean;
        "cluster": string;
        "clusterNamespace"?: string;
        "concurrency"?: number;
        "db"?: string;
        "logLevel"?: string;
        "onLine"?: boolean;
        "options"?: Array<string>;
        "rateLimit"?: number;
        "sendCredToTikv"?: boolean;
        "statusAddr"?: string;
        "table"?: string;
        "timeAgo"?: string;
      };
      "cleanOption"?: {
        "backoffEnabled"?: boolean;
        "batchConcurrency"?: number;
        "disableBatchConcurrency"?: boolean;
        "pageSize"?: number;
        "retryCount"?: number;
        "routineConcurrency"?: number;
      };
      "cleanPolicy"?: string;
      "commitTs"?: string;
      "dumpling"?: {
        "options"?: Array<string>;
        "tableFilter"?: Array<string>;
      };
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
      "from"?: {
        "host": string;
        "port"?: number;
        "secretName": string;
        "tlsClientSecretName"?: string;
        "user"?: string;
      };
      "gcs"?: {
        "bucket"?: string;
        "bucketAcl"?: string;
        "location"?: string;
        "objectAcl"?: string;
        "path"?: string;
        "prefix"?: string;
        "projectId": string;
        "secretName"?: string;
        "storageClass"?: string;
      };
      "imagePullSecrets"?: Array<{
        "name"?: string;
      }>;
      "local"?: {
        "prefix"?: string;
        "volume": {
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
        };
        "volumeMount": {
          "mountPath": string;
          "mountPropagation"?: string;
          "name": string;
          "readOnly"?: boolean;
          "subPath"?: string;
          "subPathExpr"?: string;
        };
      };
      "logStop"?: boolean;
      "logTruncateUntil"?: string;
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
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "s3"?: {
        "acl"?: string;
        "bucket"?: string;
        "endpoint"?: string;
        "options"?: Array<string>;
        "path"?: string;
        "prefix"?: string;
        "provider": string;
        "region"?: string;
        "secretName"?: string;
        "sse"?: string;
        "storageClass"?: string;
      };
      "serviceAccount"?: string;
      "storageClassName"?: string;
      "storageSize"?: string;
      "tableFilter"?: Array<string>;
      "tikvGCLifeTime"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "toolImage"?: string;
      "useKMS"?: boolean;
    };
    "maxBackups"?: number;
    "maxReservedTime"?: string;
    "pause"?: boolean;
    "schedule": string;
    "storageClassName"?: string;
    "storageSize"?: string;
  };
  "status"?: {
    "allBackupCleanTime"?: string;
    "lastBackup"?: string;
    "lastBackupTime"?: string;
    "logBackup"?: string;
  };
}

export class BackupSchedule extends Model<IBackupSchedule> implements IBackupSchedule {
  "apiVersion": IBackupSchedule["apiVersion"];
  "kind": IBackupSchedule["kind"];
  "metadata": IBackupSchedule["metadata"];
  "spec": IBackupSchedule["spec"];
  "status"?: IBackupSchedule["status"];

static apiVersion: IBackupSchedule["apiVersion"] = "pingcap.com/v1alpha1";
static kind: IBackupSchedule["kind"] = "BackupSchedule";
static is = createTypeMetaGuard<IBackupSchedule>(BackupSchedule);

constructor(data?: ModelData<IBackupSchedule>) {
  super();

  this.setDefinedProps({
    apiVersion: BackupSchedule.apiVersion,
    kind: BackupSchedule.kind,
    ...data
  } as IBackupSchedule);
}
}


setValidateFunc(BackupSchedule, validate as ValidateFunc<IBackupSchedule>);
