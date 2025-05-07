import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMariaDBOpsRequest {
    "apiVersion": "ops.kubedb.com/v1alpha1";
    "kind": "MariaDBOpsRequest";
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
            "mariadb"?: {
                "limits"?: {
                    [key: string]: number | string;
                };
                "requests"?: {
                    [key: string]: number | string;
                };
            };
        };
        "volumeExpansion"?: {
            "mariadb"?: number | string;
            "mode"?: "Offline" | "Online";
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
export declare class MariaDBOpsRequest extends Model<IMariaDBOpsRequest> implements IMariaDBOpsRequest {
    "apiVersion": IMariaDBOpsRequest["apiVersion"];
    "kind": IMariaDBOpsRequest["kind"];
    "metadata"?: IMariaDBOpsRequest["metadata"];
    "spec"?: IMariaDBOpsRequest["spec"];
    "status"?: IMariaDBOpsRequest["status"];
    static apiVersion: IMariaDBOpsRequest["apiVersion"];
    static kind: IMariaDBOpsRequest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMariaDBOpsRequest>;
    constructor(data?: ModelData<IMariaDBOpsRequest>);
}
