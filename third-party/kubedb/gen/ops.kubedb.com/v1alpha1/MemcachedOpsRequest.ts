import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1MemcachedOpsRequest";

export interface IMemcachedOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "MemcachedOpsRequest";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "apply"?: "IfReady" | "Always";
    "configuration"?: {
    };
    "databaseRef": {
      "name"?: string;
    };
    "horizontalScaling"?: {
    };
    "restart"?: {
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
    "type": "Upgrade" | "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "VolumeExpansion" | "Restart" | "Reconfigure" | "ReconfigureTLS";
    "updateVersion"?: {
      "readinessCriteria"?: {
      };
      "targetVersion"?: string;
    };
    "upgrade"?: {
      "readinessCriteria"?: {
      };
      "targetVersion"?: string;
    };
    "verticalScaling"?: {
      "readinessCriteria"?: {
      };
    };
    "volumeExpansion"?: {
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

export class MemcachedOpsRequest extends Model<IMemcachedOpsRequest> implements IMemcachedOpsRequest {
  "apiVersion": IMemcachedOpsRequest["apiVersion"];
  "kind": IMemcachedOpsRequest["kind"];
  "metadata"?: IMemcachedOpsRequest["metadata"];
  "spec"?: IMemcachedOpsRequest["spec"];
  "status"?: IMemcachedOpsRequest["status"];

static apiVersion: IMemcachedOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IMemcachedOpsRequest["kind"] = "MemcachedOpsRequest";
static is = createTypeMetaGuard<IMemcachedOpsRequest>(MemcachedOpsRequest);

constructor(data?: ModelData<IMemcachedOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: MemcachedOpsRequest.apiVersion,
    kind: MemcachedOpsRequest.kind,
    ...data
  } as IMemcachedOpsRequest);
}
}


setValidateFunc(MemcachedOpsRequest, validate as ValidateFunc<IMemcachedOpsRequest>);
