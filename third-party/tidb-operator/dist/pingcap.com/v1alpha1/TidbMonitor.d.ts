import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ITidbMonitor {
    "apiVersion": "pingcap.com/v1alpha1";
    "kind": "TidbMonitor";
    "metadata": IObjectMeta;
    "spec": {
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
                    "metadata"?: {};
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
        "alertManagerRulesVersion"?: string;
        "alertmanagerURL"?: string;
        "annotations"?: {
            [key: string]: string;
        };
        "clusterScoped"?: boolean;
        "clusters"?: Array<{
            "clusterDomain"?: string;
            "name": string;
            "namespace"?: string;
        }>;
        "dm"?: {
            "clusters": Array<{
                "clusterDomain"?: string;
                "name": string;
                "namespace"?: string;
            }>;
            "initializer": {
                "baseImage"?: string;
                "envs"?: {
                    [key: string]: string;
                };
                "imagePullPolicy"?: string;
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
                "version"?: string;
            };
        };
        "enableAlertRules"?: boolean;
        "externalLabels"?: {
            [key: string]: string;
        };
        "grafana"?: {
            "additionalVolumeMounts"?: Array<{
                "mountPath": string;
                "mountPropagation"?: string;
                "name": string;
                "readOnly"?: boolean;
                "subPath"?: string;
                "subPathExpr"?: string;
            }>;
            "baseImage"?: string;
            "envs"?: {
                [key: string]: string;
            };
            "imagePullPolicy"?: string;
            "ingress"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "hosts": Array<string>;
                "tls"?: Array<{
                    "hosts"?: Array<string>;
                    "secretName"?: string;
                }>;
            };
            "limits"?: {
                [key: string]: number | string;
            };
            "logLevel"?: string;
            "password"?: string;
            "passwordSecret"?: {
                "key": string;
                "name"?: string;
                "optional"?: boolean;
            };
            "requests"?: {
                [key: string]: number | string;
            };
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
            "username"?: string;
            "usernameSecret"?: {
                "key": string;
                "name"?: string;
                "optional"?: boolean;
            };
            "version"?: string;
        };
        "imagePullPolicy"?: string;
        "imagePullSecrets"?: Array<{
            "name"?: string;
        }>;
        "initializer": {
            "baseImage"?: string;
            "envs"?: {
                [key: string]: string;
            };
            "imagePullPolicy"?: string;
            "limits"?: {
                [key: string]: number | string;
            };
            "requests"?: {
                [key: string]: number | string;
            };
            "version"?: string;
        };
        "kubePrometheusURL"?: string;
        "labels"?: {
            [key: string]: string;
        };
        "nodeSelector"?: {
            [key: string]: string;
        };
        "persistent"?: boolean;
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
        "prometheus": {
            "additionalVolumeMounts"?: Array<{
                "mountPath": string;
                "mountPropagation"?: string;
                "name": string;
                "readOnly"?: boolean;
                "subPath"?: string;
                "subPathExpr"?: string;
            }>;
            "baseImage"?: string;
            "config"?: {
                "commandOptions"?: Array<string>;
                "configMapRef"?: {
                    "name"?: string;
                    "namespace"?: string;
                };
                "ruleConfigRef"?: {
                    "name"?: string;
                    "namespace"?: string;
                };
            };
            "disableCompaction"?: boolean;
            "imagePullPolicy"?: string;
            "ingress"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "hosts": Array<string>;
                "tls"?: Array<{
                    "hosts"?: Array<string>;
                    "secretName"?: string;
                }>;
            };
            "limits"?: {
                [key: string]: number | string;
            };
            "logLevel"?: string;
            "remoteWrite"?: Array<{
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
                "proxyUrl"?: string;
                "queueConfig"?: {
                    "batchSendDeadline"?: number;
                    "capacity"?: number;
                    "maxBackoff"?: number;
                    "maxRetries"?: number;
                    "maxSamplesPerSend"?: number;
                    "maxShards"?: number;
                    "minBackoff"?: number;
                    "minShards"?: number;
                };
                "remoteTimeout"?: number;
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
                    "action"?: string;
                    "modulus"?: number;
                    "regex"?: string;
                    "replacement"?: string;
                    "separator"?: string;
                    "sourceLabels"?: Array<string>;
                    "targetLabel"?: string;
                }>;
            }>;
            "requests"?: {
                [key: string]: number | string;
            };
            "reserveDays"?: number;
            "retentionTime"?: string;
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
            "version"?: string;
        };
        "prometheusReloader"?: {
            "baseImage"?: string;
            "imagePullPolicy"?: string;
            "limits"?: {
                [key: string]: number | string;
            };
            "requests"?: {
                [key: string]: number | string;
            };
            "version"?: string;
        };
        "pvReclaimPolicy"?: string;
        "reloader": {
            "baseImage"?: string;
            "imagePullPolicy"?: string;
            "limits"?: {
                [key: string]: number | string;
            };
            "requests"?: {
                [key: string]: number | string;
            };
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
            "version"?: string;
        };
        "replicaExternalLabelName"?: string;
        "replicas"?: number;
        "shards"?: number;
        "storage"?: string;
        "storageClassName"?: string;
        "thanos"?: {
            "additionalVolumeMounts"?: Array<{
                "mountPath": string;
                "mountPropagation"?: string;
                "name": string;
                "readOnly"?: boolean;
                "subPath"?: string;
                "subPathExpr"?: string;
            }>;
            "baseImage"?: string;
            "grpcServerTlsConfig"?: {
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
            "imagePullPolicy"?: string;
            "limits"?: {
                [key: string]: number | string;
            };
            "listenLocal"?: boolean;
            "logFormat"?: string;
            "logLevel"?: string;
            "minTime"?: string;
            "objectStorageConfig"?: {
                "key": string;
                "name"?: string;
                "optional"?: boolean;
            };
            "objectStorageConfigFile"?: string;
            "requests"?: {
                [key: string]: number | string;
            };
            "routePrefix"?: string;
            "tracingConfig"?: {
                "key": string;
                "name"?: string;
                "optional"?: boolean;
            };
            "tracingConfigFile"?: string;
            "version"?: string;
        };
        "timezone"?: string;
        "tolerations"?: Array<{
            "effect"?: string;
            "key"?: string;
            "operator"?: string;
            "tolerationSeconds"?: number;
            "value"?: string;
        }>;
    };
    "status"?: {
        "deploymentStorageStatus"?: {
            "pvName"?: string;
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
    };
}
export declare class TidbMonitor extends Model<ITidbMonitor> implements ITidbMonitor {
    "apiVersion": ITidbMonitor["apiVersion"];
    "kind": ITidbMonitor["kind"];
    "metadata": ITidbMonitor["metadata"];
    "spec": ITidbMonitor["spec"];
    "status"?: ITidbMonitor["status"];
    static apiVersion: ITidbMonitor["apiVersion"];
    static kind: ITidbMonitor["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITidbMonitor>;
    constructor(data?: ModelData<ITidbMonitor>);
}
