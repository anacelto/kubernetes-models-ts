import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IProxySQL {
    "apiVersion": "kubedb.com/v1alpha2";
    "kind": "ProxySQL";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "authSecret"?: {
            "externallyManaged"?: boolean;
            "name"?: string;
        };
        "autoOps"?: {
            "disabled"?: boolean;
        };
        "backend"?: {
            "name"?: string;
        };
        "configSecret"?: {
            "name"?: string;
        };
        "healthChecker"?: {
            "disableWriteCheck"?: boolean;
            "failureThreshold"?: number;
            "periodSeconds"?: number;
            "timeoutSeconds"?: number;
        };
        "initConfig"?: {
            "adminVariables"?: {};
            "mysqlQueryRules"?: Array<{}>;
            "mysqlUsers"?: Array<{
                "active"?: number;
                "attributes"?: string;
                "backend"?: number;
                "comment"?: string;
                "default_hostgroup"?: number;
                "default_schema"?: string;
                "fast_forward"?: number;
                "frontend"?: number;
                "max_connections"?: number;
                "schema_locked"?: number;
                "transaction_persistent"?: number;
                "use_ssl"?: number;
                "username": string;
            }>;
            "mysqlVariables"?: {};
        };
        "mode"?: "Galera" | "GroupReplication";
        "monitor"?: {
            "agent"?: string;
            "prometheus"?: {
                "exporter"?: {
                    "args"?: Array<string>;
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
                    "port"?: number;
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
                };
                "serviceMonitor"?: {
                    "interval"?: string;
                    "labels"?: {
                        [key: string]: string;
                    };
                };
            };
        };
        "podTemplate"?: {
            "controller"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
            };
            "metadata"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
            };
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
                "args"?: Array<string>;
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
                "hostIPC"?: boolean;
                "hostNetwork"?: boolean;
                "hostPID"?: boolean;
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
                "nodeSelector"?: {
                    [key: string]: string;
                };
                "priority"?: number;
                "priorityClassName"?: string;
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
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
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
                "shareProcessNamespace"?: boolean;
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
        };
        "replicas"?: number;
        "serviceTemplates"?: Array<{
            "alias": "primary" | "standby" | "stats";
            "metadata"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
            };
            "spec"?: {
                "clusterIP"?: string;
                "externalIPs"?: Array<string>;
                "externalTrafficPolicy"?: string;
                "healthCheckNodePort"?: number;
                "loadBalancerIP"?: string;
                "loadBalancerSourceRanges"?: Array<string>;
                "ports"?: Array<{
                    "name"?: string;
                    "nodePort"?: number;
                    "port": number;
                }>;
                "sessionAffinityConfig"?: {
                    "clientIP"?: {
                        "timeoutSeconds"?: number;
                    };
                };
                "type"?: string;
            };
        }>;
        "syncUsers"?: boolean;
        "terminationPolicy"?: "Halt" | "Delete" | "WipeOut" | "DoNotTerminate";
        "tls"?: {
            "certificates"?: Array<{
                "alias": string;
                "dnsNames"?: Array<string>;
                "duration"?: string;
                "emailAddresses"?: Array<string>;
                "ipAddresses"?: Array<string>;
                "issuerRef"?: {
                    "apiGroup"?: string;
                    "kind": string;
                    "name": string;
                };
                "privateKey"?: {
                    "encoding"?: "PKCS1" | "PKCS8";
                };
                "renewBefore"?: string;
                "secretName"?: string;
                "subject"?: {
                    "countries"?: Array<string>;
                    "localities"?: Array<string>;
                    "organizationalUnits"?: Array<string>;
                    "organizations"?: Array<string>;
                    "postalCodes"?: Array<string>;
                    "provinces"?: Array<string>;
                    "serialNumber"?: string;
                    "streetAddresses"?: Array<string>;
                };
                "uris"?: Array<string>;
            }>;
            "issuerRef"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
            };
        };
        "version": string;
    };
    "status"?: {
        "authSecret"?: {
            "lastUpdateTimestamp"?: string;
        };
        "conditions"?: Array<{
            "lastTransitionTime": string;
            "message": string;
            "observedGeneration"?: number;
            "reason": string;
            "status": string;
            "type": string;
        }>;
        "observedGeneration"?: number;
        "phase"?: "Provisioning" | "DataRestoring" | "Ready" | "Critical" | "NotReady" | "Halted" | "Unknown";
    };
}
export declare class ProxySQL extends Model<IProxySQL> implements IProxySQL {
    "apiVersion": IProxySQL["apiVersion"];
    "kind": IProxySQL["kind"];
    "metadata"?: IProxySQL["metadata"];
    "spec"?: IProxySQL["spec"];
    "status"?: IProxySQL["status"];
    static apiVersion: IProxySQL["apiVersion"];
    static kind: IProxySQL["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IProxySQL>;
    constructor(data?: ModelData<IProxySQL>);
}
