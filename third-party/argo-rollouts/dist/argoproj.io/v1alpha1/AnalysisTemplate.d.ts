import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IAnalysisTemplate {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "AnalysisTemplate";
    "metadata"?: IObjectMeta;
    "spec": {
        "args"?: Array<{
            "name": string;
            "value"?: string;
            "valueFrom"?: {
                "fieldRef"?: {
                    "fieldPath": string;
                };
                "secretKeyRef"?: {
                    "key": string;
                    "name": string;
                };
            };
        }>;
        "dryRun"?: Array<{
            "metricName": string;
        }>;
        "measurementRetention"?: Array<{
            "limit": number;
            "metricName": string;
        }>;
        "metrics": Array<{
            "consecutiveErrorLimit"?: number | string;
            "count"?: number | string;
            "failureCondition"?: string;
            "failureLimit"?: number | string;
            "inconclusiveLimit"?: number | string;
            "initialDelay"?: string;
            "interval"?: string;
            "name": string;
            "provider": {
                "cloudWatch"?: {
                    "interval"?: string;
                    "metricDataQueries": Array<{
                        "expression"?: string;
                        "id"?: string;
                        "label"?: string;
                        "metricStat"?: {
                            "metric"?: {
                                "dimensions"?: Array<{
                                    "name"?: string;
                                    "value"?: string;
                                }>;
                                "metricName"?: string;
                                "namespace"?: string;
                            };
                            "period"?: number | string;
                            "stat"?: string;
                            "unit"?: string;
                        };
                        "period"?: number | string;
                        "returnData"?: boolean;
                    }>;
                };
                "datadog"?: {
                    "apiVersion"?: string;
                    "interval"?: string;
                    "query": string;
                };
                "graphite"?: {
                    "address"?: string;
                    "query"?: string;
                };
                "influxdb"?: {
                    "profile"?: string;
                    "query"?: string;
                };
                "job"?: {
                    "metadata"?: {
                        "annotations"?: {
                            [key: string]: string;
                        };
                        "labels"?: {
                            [key: string]: string;
                        };
                    };
                    "spec": {
                        "activeDeadlineSeconds"?: number;
                        "backoffLimit"?: number;
                        "completionMode"?: string;
                        "completions"?: number;
                        "manualSelector"?: boolean;
                        "parallelism"?: number;
                        "podFailurePolicy"?: {
                            "rules": Array<{
                                "action": string;
                                "onExitCodes"?: {
                                    "containerName"?: string;
                                    "operator": string;
                                    "values": Array<number>;
                                };
                                "onPodConditions": Array<{
                                    "status": string;
                                    "type": string;
                                }>;
                            }>;
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
                        "suspend"?: boolean;
                        "template": {
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
                                "volumes"?: any;
                            };
                        };
                        "ttlSecondsAfterFinished"?: number;
                    };
                };
                "kayenta"?: {
                    "address": string;
                    "application": string;
                    "canaryConfigName": string;
                    "configurationAccountName": string;
                    "metricsAccountName": string;
                    "scopes": Array<{
                        "controlScope": {
                            "end": string;
                            "region": string;
                            "scope": string;
                            "start": string;
                            "step": number;
                        };
                        "experimentScope": {
                            "end": string;
                            "region": string;
                            "scope": string;
                            "start": string;
                            "step": number;
                        };
                        "name": string;
                    }>;
                    "storageAccountName": string;
                    "threshold": {
                        "marginal": number;
                        "pass": number;
                    };
                };
                "newRelic"?: {
                    "profile"?: string;
                    "query": string;
                };
                "plugin"?: {};
                "prometheus"?: {
                    "address"?: string;
                    "query"?: string;
                };
                "skywalking"?: {
                    "address"?: string;
                    "interval"?: string;
                    "query"?: string;
                };
                "wavefront"?: {
                    "address"?: string;
                    "query"?: string;
                };
                "web"?: {
                    "body"?: string;
                    "headers"?: Array<{
                        "key": string;
                        "value": string;
                    }>;
                    "insecure"?: boolean;
                    "jsonBody"?: {};
                    "jsonPath"?: string;
                    "method"?: string;
                    "timeoutSeconds"?: number;
                    "url": string;
                };
            };
            "successCondition"?: string;
        }>;
    };
}
export declare class AnalysisTemplate extends Model<IAnalysisTemplate> implements IAnalysisTemplate {
    "apiVersion": IAnalysisTemplate["apiVersion"];
    "kind": IAnalysisTemplate["kind"];
    "metadata"?: IAnalysisTemplate["metadata"];
    "spec": IAnalysisTemplate["spec"];
    static apiVersion: IAnalysisTemplate["apiVersion"];
    static kind: IAnalysisTemplate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAnalysisTemplate>;
    constructor(data?: ModelData<IAnalysisTemplate>);
}
