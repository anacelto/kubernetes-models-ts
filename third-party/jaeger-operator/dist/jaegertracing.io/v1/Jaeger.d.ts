import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IJaeger {
    "apiVersion": "jaegertracing.io/v1";
    "kind": "Jaeger";
    "metadata"?: IObjectMeta;
    "spec"?: {
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
        "agent"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "config"?: {};
            "containerSecurityContext"?: {
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
            "dnsPolicy"?: string;
            "hostNetwork"?: boolean;
            "image"?: string;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "labels"?: {
                [key: string]: string;
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
            "options"?: {};
            "priorityClassName"?: string;
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
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
            "sidecarSecurityContext"?: {
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
            "strategy"?: string;
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "allInOne"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "config"?: {};
            "containerSecurityContext"?: {
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
            "image"?: string;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "labels"?: {
                [key: string]: string;
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
            "metricsStorage"?: {
                "type"?: string;
            };
            "options"?: {};
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
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
            "strategy"?: {
                "rollingUpdate"?: {
                    "maxSurge"?: number | string;
                    "maxUnavailable"?: number | string;
                };
                "type"?: string;
            };
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
            "tracingEnabled"?: boolean;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "annotations"?: {
            [key: string]: string;
        };
        "collector"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "autoscale"?: boolean;
            "config"?: {};
            "containerSecurityContext"?: {
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
            "image"?: string;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "kafkaSecretName"?: string;
            "labels"?: {
                [key: string]: string;
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
            "maxReplicas"?: number;
            "minReplicas"?: number;
            "options"?: {};
            "priorityClassName"?: string;
            "replicas"?: number;
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
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
            "serviceType"?: string;
            "strategy"?: {
                "rollingUpdate"?: {
                    "maxSurge"?: number | string;
                    "maxUnavailable"?: number | string;
                };
                "type"?: string;
            };
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "containerSecurityContext"?: {
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
        "imagePullPolicy"?: string;
        "imagePullSecrets"?: Array<{
            "name"?: string;
        }>;
        "ingester"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "autoscale"?: boolean;
            "config"?: {};
            "containerSecurityContext"?: {
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
            "image"?: string;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "kafkaSecretName"?: string;
            "labels"?: {
                [key: string]: string;
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
            "maxReplicas"?: number;
            "minReplicas"?: number;
            "options"?: {};
            "replicas"?: number;
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
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
            "strategy"?: {
                "rollingUpdate"?: {
                    "maxSurge"?: number | string;
                    "maxUnavailable"?: number | string;
                };
                "type"?: string;
            };
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "ingress"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "containerSecurityContext"?: {
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
            "enabled"?: boolean;
            "hosts"?: Array<string>;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "ingressClassName"?: string;
            "labels"?: {
                [key: string]: string;
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
            "openshift"?: {
                "delegateUrls"?: string;
                "htpasswdFile"?: string;
                "sar"?: string;
                "skipLogout"?: boolean;
            };
            "options"?: {};
            "pathType"?: string;
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            "secretName"?: string;
            "security"?: string;
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
            "tls"?: Array<{
                "hosts"?: Array<string>;
                "secretName"?: string;
            }>;
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "labels"?: {
            [key: string]: string;
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
        "query"?: {
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
            "annotations"?: {
                [key: string]: string;
            };
            "containerSecurityContext"?: {
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
            "grpcNodePort"?: number;
            "image"?: string;
            "imagePullPolicy"?: string;
            "imagePullSecrets"?: Array<{
                "name"?: string;
            }>;
            "labels"?: {
                [key: string]: string;
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
            "metricsStorage"?: {
                "type"?: string;
            };
            "nodePort"?: number;
            "options"?: {};
            "priorityClassName"?: string;
            "replicas"?: number;
            "resources"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
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
            "serviceType"?: string;
            "strategy"?: {
                "rollingUpdate"?: {
                    "maxSurge"?: number | string;
                    "maxUnavailable"?: number | string;
                };
                "type"?: string;
            };
            "tolerations"?: Array<{
                "effect"?: string;
                "key"?: string;
                "operator"?: string;
                "tolerationSeconds"?: number;
                "value"?: string;
            }>;
            "tracingEnabled"?: boolean;
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
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "finalizers"?: Array<string>;
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
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
        "resources"?: {
            "limits"?: {
                [key: string]: number | string;
            };
            "requests"?: {
                [key: string]: number | string;
            };
        };
        "sampling"?: {
            "options"?: {};
        };
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
        "storage"?: {
            "cassandraCreateSchema"?: {
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
                "datacenter"?: string;
                "enabled"?: boolean;
                "image"?: string;
                "mode"?: string;
                "timeout"?: string;
                "traceTTL"?: string;
                "ttlSecondsAfterFinished"?: number;
            };
            "dependencies"?: {
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
                "annotations"?: {
                    [key: string]: string;
                };
                "backoffLimit"?: number;
                "cassandraClientAuthEnabled"?: boolean;
                "containerSecurityContext"?: {
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
                "elasticsearchClientNodeOnly"?: boolean;
                "elasticsearchNodesWanOnly"?: boolean;
                "elasticsearchTimeRange"?: string;
                "enabled"?: boolean;
                "image"?: string;
                "imagePullPolicy"?: string;
                "imagePullSecrets"?: Array<{
                    "name"?: string;
                }>;
                "javaOpts"?: string;
                "labels"?: {
                    [key: string]: string;
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
                "resources"?: {
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                "schedule"?: string;
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
                "sparkMaster"?: string;
                "successfulJobsHistoryLimit"?: number;
                "tolerations"?: Array<{
                    "effect"?: string;
                    "key"?: string;
                    "operator"?: string;
                    "tolerationSeconds"?: number;
                    "value"?: string;
                }>;
                "ttlSecondsAfterFinished"?: number;
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
                                "annotations"?: {
                                    [key: string]: string;
                                };
                                "finalizers"?: Array<string>;
                                "labels"?: {
                                    [key: string]: string;
                                };
                                "name"?: string;
                                "namespace"?: string;
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
            "elasticsearch"?: {
                "doNotProvision"?: boolean;
                "image"?: string;
                "name"?: string;
                "nodeCount"?: number;
                "nodeSelector"?: {
                    [key: string]: string;
                };
                "proxyResources"?: {
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                "redundancyPolicy"?: "FullRedundancy" | "MultipleRedundancy" | "SingleRedundancy" | "ZeroRedundancy";
                "resources"?: {
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                "storage"?: {
                    "size"?: number | string;
                    "storageClassName"?: string;
                };
                "tolerations"?: Array<{
                    "effect"?: string;
                    "key"?: string;
                    "operator"?: string;
                    "tolerationSeconds"?: number;
                    "value"?: string;
                }>;
                "useCertManagement"?: boolean;
            };
            "esIndexCleaner"?: {
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
                "annotations"?: {
                    [key: string]: string;
                };
                "backoffLimit"?: number;
                "containerSecurityContext"?: {
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
                "enabled"?: boolean;
                "image"?: string;
                "imagePullPolicy"?: string;
                "imagePullSecrets"?: Array<{
                    "name"?: string;
                }>;
                "labels"?: {
                    [key: string]: string;
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
                "numberOfDays"?: number;
                "priorityClassName"?: string;
                "resources"?: {
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                "schedule"?: string;
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
                "successfulJobsHistoryLimit"?: number;
                "tolerations"?: Array<{
                    "effect"?: string;
                    "key"?: string;
                    "operator"?: string;
                    "tolerationSeconds"?: number;
                    "value"?: string;
                }>;
                "ttlSecondsAfterFinished"?: number;
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
                                "annotations"?: {
                                    [key: string]: string;
                                };
                                "finalizers"?: Array<string>;
                                "labels"?: {
                                    [key: string]: string;
                                };
                                "name"?: string;
                                "namespace"?: string;
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
            "esRollover"?: {
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
                "annotations"?: {
                    [key: string]: string;
                };
                "backoffLimit"?: number;
                "conditions"?: string;
                "containerSecurityContext"?: {
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
                "image"?: string;
                "imagePullPolicy"?: string;
                "imagePullSecrets"?: Array<{
                    "name"?: string;
                }>;
                "labels"?: {
                    [key: string]: string;
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
                "readTTL"?: string;
                "resources"?: {
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                "schedule"?: string;
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
                "successfulJobsHistoryLimit"?: number;
                "tolerations"?: Array<{
                    "effect"?: string;
                    "key"?: string;
                    "operator"?: string;
                    "tolerationSeconds"?: number;
                    "value"?: string;
                }>;
                "ttlSecondsAfterFinished"?: number;
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
                                "annotations"?: {
                                    [key: string]: string;
                                };
                                "finalizers"?: Array<string>;
                                "labels"?: {
                                    [key: string]: string;
                                };
                                "name"?: string;
                                "namespace"?: string;
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
            "grpcPlugin"?: {
                "image"?: string;
            };
            "options"?: {};
            "secretName"?: string;
            "type"?: string;
        };
        "strategy"?: string;
        "tolerations"?: Array<{
            "effect"?: string;
            "key"?: string;
            "operator"?: string;
            "tolerationSeconds"?: number;
            "value"?: string;
        }>;
        "ui"?: {
            "options"?: {};
        };
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
                        "annotations"?: {
                            [key: string]: string;
                        };
                        "finalizers"?: Array<string>;
                        "labels"?: {
                            [key: string]: string;
                        };
                        "name"?: string;
                        "namespace"?: string;
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
    "status"?: {
        "phase": string;
        "version": string;
    };
}
export declare class Jaeger extends Model<IJaeger> implements IJaeger {
    "apiVersion": IJaeger["apiVersion"];
    "kind": IJaeger["kind"];
    "metadata"?: IJaeger["metadata"];
    "spec"?: IJaeger["spec"];
    "status"?: IJaeger["status"];
    static apiVersion: IJaeger["apiVersion"];
    static kind: IJaeger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IJaeger>;
    constructor(data?: ModelData<IJaeger>);
}
