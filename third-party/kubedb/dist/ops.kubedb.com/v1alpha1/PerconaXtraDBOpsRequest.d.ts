import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPerconaXtraDBOpsRequest {
    "apiVersion": "ops.kubedb.com/v1alpha1";
    "kind": "PerconaXtraDBOpsRequest";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "apply"?: "IfReady" | "Always";
        "configuration"?: {
            "applyConfig"?: {
                [key: string]: string;
            };
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
            "member"?: number;
            "memberWeight"?: number;
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
            "issuerRef"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
            };
            "remove"?: boolean;
            "requireSSL"?: boolean;
            "rotateCertificates"?: boolean;
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
            "perconaxtradb"?: {
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
            "perconaxtradb"?: number | string;
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
export declare class PerconaXtraDBOpsRequest extends Model<IPerconaXtraDBOpsRequest> implements IPerconaXtraDBOpsRequest {
    "apiVersion": IPerconaXtraDBOpsRequest["apiVersion"];
    "kind": IPerconaXtraDBOpsRequest["kind"];
    "metadata"?: IPerconaXtraDBOpsRequest["metadata"];
    "spec"?: IPerconaXtraDBOpsRequest["spec"];
    "status"?: IPerconaXtraDBOpsRequest["status"];
    static apiVersion: IPerconaXtraDBOpsRequest["apiVersion"];
    static kind: IPerconaXtraDBOpsRequest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPerconaXtraDBOpsRequest>;
    constructor(data?: ModelData<IPerconaXtraDBOpsRequest>);
}
