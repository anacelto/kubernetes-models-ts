import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPostgresOpsRequest {
    "apiVersion": "ops.kubedb.com/v1alpha1";
    "kind": "PostgresOpsRequest";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "apply"?: "IfReady" | "Always";
        "configuration"?: {
            "configSecret"?: {
                "name"?: string;
            };
            "inlineConfig"?: string;
            "removeCustomConfig"?: boolean;
        };
        "databaseRef": {
            "name"?: string;
        };
        "horizontalScaling"?: {
            "replicas"?: number;
            "standbyMode"?: "Hot" | "Warm";
            "streamingMode"?: "Synchronous" | "Asynchronous";
        };
        "restart"?: {};
        "timeout"?: string;
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
            "clientAuthMode"?: "md5" | "scram" | "cert";
            "issuerRef"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
            };
            "remove"?: boolean;
            "rotateCertificates"?: boolean;
            "sslMode"?: "disable" | "allow" | "prefer" | "require" | "verify-ca" | "verify-full";
        };
        "type": "Upgrade" | "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "VolumeExpansion" | "Restart" | "Reconfigure" | "ReconfigureTLS";
        "updateVersion"?: {
            "targetVersion"?: string;
        };
        "upgrade"?: {
            "targetVersion"?: string;
        };
        "verticalScaling"?: {
            "coordinator"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            "exporter"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            "postgres"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
        };
        "volumeExpansion"?: {
            "mode"?: "Offline" | "Online";
            "postgres"?: number | string;
        };
    };
    "status"?: {
        "conditions"?: Array<{
            "lastTransitionTime": string;
            "message": string;
            "observedGeneration"?: number;
            "reason": string;
            "status": string;
            "type": string;
        }>;
        "observedGeneration"?: number;
        "phase"?: "Pending" | "Progressing" | "Successful" | "WaitingForApproval" | "Failed" | "Approved" | "Denied" | "Skipped";
    };
}
export declare class PostgresOpsRequest extends Model<IPostgresOpsRequest> implements IPostgresOpsRequest {
    "apiVersion": IPostgresOpsRequest["apiVersion"];
    "kind": IPostgresOpsRequest["kind"];
    "metadata"?: IPostgresOpsRequest["metadata"];
    "spec"?: IPostgresOpsRequest["spec"];
    "status"?: IPostgresOpsRequest["status"];
    static apiVersion: IPostgresOpsRequest["apiVersion"];
    static kind: IPostgresOpsRequest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPostgresOpsRequest>;
    constructor(data?: ModelData<IPostgresOpsRequest>);
}
