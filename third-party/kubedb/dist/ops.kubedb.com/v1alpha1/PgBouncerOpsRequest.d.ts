import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPgBouncerOpsRequest {
    "apiVersion": "ops.kubedb.com/v1alpha1";
    "kind": "PgBouncerOpsRequest";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "UpdateVersion"?: {
            "readinessCriteria"?: {};
            "targetVersion"?: string;
        };
        "apply"?: "IfReady" | "Always";
        "configuration"?: {};
        "horizontalScaling"?: {};
        "restart"?: {};
        "serverRef": {
            "name"?: string;
        };
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
            "rotateCertificates"?: boolean;
        };
        "type": "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "Restart" | "Reconfigure" | "ReconfigureTLS";
        "verticalScaling"?: {
            "readinessCriteria"?: {};
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
export declare class PgBouncerOpsRequest extends Model<IPgBouncerOpsRequest> implements IPgBouncerOpsRequest {
    "apiVersion": IPgBouncerOpsRequest["apiVersion"];
    "kind": IPgBouncerOpsRequest["kind"];
    "metadata"?: IPgBouncerOpsRequest["metadata"];
    "spec"?: IPgBouncerOpsRequest["spec"];
    "status"?: IPgBouncerOpsRequest["status"];
    static apiVersion: IPgBouncerOpsRequest["apiVersion"];
    static kind: IPgBouncerOpsRequest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPgBouncerOpsRequest>;
    constructor(data?: ModelData<IPgBouncerOpsRequest>);
}
