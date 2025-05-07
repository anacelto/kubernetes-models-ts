import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IOpenTelemetryCollector {
    "apiVersion": "opentelemetry.io/v1alpha1";
    "kind": "OpenTelemetryCollector";
    "metadata"?: IObjectMeta;
    "spec"?: {
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
                    "sleep"?: {
                        "seconds": number;
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
                    "sleep"?: {
                        "seconds": number;
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
                    "request"?: string;
                }>;
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            "restartPolicy"?: string;
            "securityContext"?: {
                "allowPrivilegeEscalation"?: boolean;
                "appArmorProfile"?: {
                    "localhostProfile"?: string;
                    "type": string;
                };
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
                "recursiveReadOnly"?: string;
                "subPath"?: string;
                "subPathExpr"?: string;
            }>;
            "workingDir"?: string;
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
                        "matchLabelKeys"?: Array<string>;
                        "mismatchLabelKeys"?: Array<string>;
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
                    "matchLabelKeys"?: Array<string>;
                    "mismatchLabelKeys"?: Array<string>;
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
                        "matchLabelKeys"?: Array<string>;
                        "mismatchLabelKeys"?: Array<string>;
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
                    "matchLabelKeys"?: Array<string>;
                    "mismatchLabelKeys"?: Array<string>;
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
        "args"?: {
            [key: string]: string;
        };
        "autoscaler"?: {
            "behavior"?: {
                "scaleDown"?: {
                    "policies"?: Array<{
                        "periodSeconds": number;
                        "type": string;
                        "value": number;
                    }>;
                    "selectPolicy"?: string;
                    "stabilizationWindowSeconds"?: number;
                };
                "scaleUp"?: {
                    "policies"?: Array<{
                        "periodSeconds": number;
                        "type": string;
                        "value": number;
                    }>;
                    "selectPolicy"?: string;
                    "stabilizationWindowSeconds"?: number;
                };
            };
            "maxReplicas"?: number;
            "metrics"?: Array<{
                "pods"?: {
                    "metric": {
                        "name": string;
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
                    };
                    "target": {
                        "averageUtilization"?: number;
                        "averageValue"?: number | string;
                        "type": string;
                        "value"?: number | string;
                    };
                };
                "type": string;
            }>;
            "minReplicas"?: number;
            "targetCPUUtilization"?: number;
            "targetMemoryUtilization"?: number;
        };
        "config": string;
        "configmaps"?: Array<{
            "mountpath": string;
            "name": string;
        }>;
        "deploymentUpdateStrategy"?: {
            "rollingUpdate"?: {
                "maxSurge"?: number | string;
                "maxUnavailable"?: number | string;
            };
            "type"?: string;
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
        "ingress"?: {
            "annotations"?: {
                [key: string]: string;
            };
            "hostname"?: string;
            "ingressClassName"?: string;
            "route"?: {
                "termination"?: "insecure" | "edge" | "passthrough" | "reencrypt";
            };
            "ruleType"?: "path" | "subdomain";
            "tls"?: Array<{
                "hosts"?: Array<string>;
                "secretName"?: string;
            }>;
            "type"?: "ingress" | "route";
        };
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
                    "sleep"?: {
                        "seconds": number;
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
                    "sleep"?: {
                        "seconds": number;
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
                    "request"?: string;
                }>;
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            "restartPolicy"?: string;
            "securityContext"?: {
                "allowPrivilegeEscalation"?: boolean;
                "appArmorProfile"?: {
                    "localhostProfile"?: string;
                    "type": string;
                };
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
                "recursiveReadOnly"?: string;
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
                "sleep"?: {
                    "seconds": number;
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
                "sleep"?: {
                    "seconds": number;
                };
                "tcpSocket"?: {
                    "host"?: string;
                    "port": number | string;
                };
            };
        };
        "livenessProbe"?: {
            "failureThreshold"?: number;
            "initialDelaySeconds"?: number;
            "periodSeconds"?: number;
            "successThreshold"?: number;
            "terminationGracePeriodSeconds"?: number;
            "timeoutSeconds"?: number;
        };
        "managementState": "managed" | "unmanaged";
        "maxReplicas"?: number;
        "minReplicas"?: number;
        "mode"?: "daemonset" | "deployment" | "sidecar" | "statefulset";
        "nodeSelector"?: {
            [key: string]: string;
        };
        "observability"?: {
            "metrics"?: {
                "DisablePrometheusAnnotations"?: boolean;
                "enableMetrics"?: boolean;
            };
        };
        "podAnnotations"?: {
            [key: string]: string;
        };
        "podDisruptionBudget"?: {
            "maxUnavailable"?: number | string;
            "minAvailable"?: number | string;
        };
        "podSecurityContext"?: {
            "appArmorProfile"?: {
                "localhostProfile"?: string;
                "type": string;
            };
            "fsGroup"?: number;
            "fsGroupChangePolicy"?: string;
            "runAsGroup"?: number;
            "runAsNonRoot"?: boolean;
            "runAsUser"?: number;
            "seLinuxChangePolicy"?: string;
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
            "supplementalGroupsPolicy"?: string;
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
        "ports"?: Array<{
            "appProtocol"?: string;
            "hostPort"?: number;
            "name"?: string;
            "nodePort"?: number;
            "port": number;
            "protocol"?: string;
            "targetPort"?: number | string;
        }>;
        "priorityClassName"?: string;
        "replicas"?: number;
        "resources"?: {
            "claims"?: Array<{
                "name": string;
                "request"?: string;
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
            "appArmorProfile"?: {
                "localhostProfile"?: string;
                "type": string;
            };
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
        "serviceAccount"?: string;
        "shareProcessNamespace"?: boolean;
        "targetAllocator"?: {
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
                            "matchLabelKeys"?: Array<string>;
                            "mismatchLabelKeys"?: Array<string>;
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
                        "matchLabelKeys"?: Array<string>;
                        "mismatchLabelKeys"?: Array<string>;
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
                            "matchLabelKeys"?: Array<string>;
                            "mismatchLabelKeys"?: Array<string>;
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
                        "matchLabelKeys"?: Array<string>;
                        "mismatchLabelKeys"?: Array<string>;
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
            "allocationStrategy"?: "least-weighted" | "consistent-hashing" | "per-node";
            "enabled"?: boolean;
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
            "filterStrategy"?: string;
            "image"?: string;
            "nodeSelector"?: {
                [key: string]: string;
            };
            "observability"?: {
                "metrics"?: {
                    "DisablePrometheusAnnotations"?: boolean;
                    "enableMetrics"?: boolean;
                };
            };
            "podDisruptionBudget"?: {
                "maxUnavailable"?: number | string;
                "minAvailable"?: number | string;
            };
            "podSecurityContext"?: {
                "appArmorProfile"?: {
                    "localhostProfile"?: string;
                    "type": string;
                };
                "fsGroup"?: number;
                "fsGroupChangePolicy"?: string;
                "runAsGroup"?: number;
                "runAsNonRoot"?: boolean;
                "runAsUser"?: number;
                "seLinuxChangePolicy"?: string;
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
                "supplementalGroupsPolicy"?: string;
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
            "prometheusCR"?: {
                "enabled"?: boolean;
                "podMonitorSelector"?: {
                    [key: string]: string;
                };
                "scrapeInterval"?: string;
                "serviceMonitorSelector"?: {
                    [key: string]: string;
                };
            };
            "replicas"?: number;
            "resources"?: {
                "claims"?: Array<{
                    "name": string;
                    "request"?: string;
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
                "appArmorProfile"?: {
                    "localhostProfile"?: string;
                    "type": string;
                };
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
            "serviceAccount"?: string;
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
        "updateStrategy"?: {
            "rollingUpdate"?: {
                "maxSurge"?: number | string;
                "maxUnavailable"?: number | string;
            };
            "type"?: string;
        };
        "upgradeStrategy"?: "automatic" | "none";
        "volumeClaimTemplates"?: Array<{
            "apiVersion"?: string;
            "kind"?: string;
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
                "volumeAttributesClassName"?: string;
                "volumeMode"?: string;
                "volumeName"?: string;
            };
            "status"?: {
                "accessModes"?: Array<string>;
                "allocatedResourceStatuses"?: {
                    [key: string]: string;
                };
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
                "currentVolumeAttributesClassName"?: string;
                "modifyVolumeStatus"?: {
                    "status": string;
                    "targetVolumeAttributesClassName"?: string;
                };
                "phase"?: string;
            };
        }>;
        "volumeMounts"?: Array<{
            "mountPath": string;
            "mountPropagation"?: string;
            "name": string;
            "readOnly"?: boolean;
            "recursiveReadOnly"?: string;
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
                            "namespace"?: string;
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
                        "volumeAttributesClassName"?: string;
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
            "image"?: {
                "pullPolicy"?: string;
                "reference"?: string;
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
                    "clusterTrustBundle"?: {
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
                        "name"?: string;
                        "optional"?: boolean;
                        "path": string;
                        "signerName"?: string;
                    };
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
        "image"?: string;
        "messages"?: Array<string>;
        "replicas"?: number;
        "scale"?: {
            "replicas"?: number;
            "selector"?: string;
            "statusReplicas"?: string;
        };
        "version"?: string;
    };
}
export declare class OpenTelemetryCollector extends Model<IOpenTelemetryCollector> implements IOpenTelemetryCollector {
    "apiVersion": IOpenTelemetryCollector["apiVersion"];
    "kind": IOpenTelemetryCollector["kind"];
    "metadata"?: IOpenTelemetryCollector["metadata"];
    "spec"?: IOpenTelemetryCollector["spec"];
    "status"?: IOpenTelemetryCollector["status"];
    static apiVersion: IOpenTelemetryCollector["apiVersion"];
    static kind: IOpenTelemetryCollector["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IOpenTelemetryCollector>;
    constructor(data?: ModelData<IOpenTelemetryCollector>);
}
