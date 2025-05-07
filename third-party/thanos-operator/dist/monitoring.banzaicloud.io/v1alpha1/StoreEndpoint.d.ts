import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IStoreEndpoint {
    "apiVersion": "monitoring.banzaicloud.io/v1alpha1";
    "kind": "StoreEndpoint";
    "metadata"?: IObjectMeta;
    "spec"?: {
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
    };
    "status"?: {};
}
export declare class StoreEndpoint extends Model<IStoreEndpoint> implements IStoreEndpoint {
    "apiVersion": IStoreEndpoint["apiVersion"];
    "kind": IStoreEndpoint["kind"];
    "metadata"?: IStoreEndpoint["metadata"];
    "spec"?: IStoreEndpoint["spec"];
    "status"?: IStoreEndpoint["status"];
    static apiVersion: IStoreEndpoint["apiVersion"];
    static kind: IStoreEndpoint["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IStoreEndpoint>;
    constructor(data?: ModelData<IStoreEndpoint>);
}
