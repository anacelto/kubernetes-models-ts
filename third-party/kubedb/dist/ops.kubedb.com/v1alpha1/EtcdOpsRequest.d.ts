import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IEtcdOpsRequest {
    "apiVersion": "ops.kubedb.com/v1alpha1";
    "kind": "EtcdOpsRequest";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "apply"?: "IfReady" | "Always";
        "configuration"?: {};
        "databaseRef": {
            "name"?: string;
        };
        "horizontalScaling"?: {};
        "restart"?: {};
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
        "type": "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "VolumeExpansion" | "Restart" | "Reconfigure" | "ReconfigureTLS";
        "updateVersion"?: {
            "readinessCriteria"?: {};
            "targetVersion"?: string;
        };
        "verticalScaling"?: {
            "readinessCriteria"?: {};
        };
        "volumeExpansion"?: {};
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
export declare class EtcdOpsRequest extends Model<IEtcdOpsRequest> implements IEtcdOpsRequest {
    "apiVersion": IEtcdOpsRequest["apiVersion"];
    "kind": IEtcdOpsRequest["kind"];
    "metadata"?: IEtcdOpsRequest["metadata"];
    "spec"?: IEtcdOpsRequest["spec"];
    "status"?: IEtcdOpsRequest["status"];
    static apiVersion: IEtcdOpsRequest["apiVersion"];
    static kind: IEtcdOpsRequest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEtcdOpsRequest>;
    constructor(data?: ModelData<IEtcdOpsRequest>);
}
