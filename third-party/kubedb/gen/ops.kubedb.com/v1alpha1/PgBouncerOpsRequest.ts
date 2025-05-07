import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1PgBouncerOpsRequest";

export interface IPgBouncerOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "PgBouncerOpsRequest";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "UpdateVersion"?: {
      "readinessCriteria"?: {
      };
      "targetVersion"?: string;
    };
    "apply"?: "IfReady" | "Always";
    "configuration"?: {
    };
    "horizontalScaling"?: {
    };
    "restart"?: {
    };
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
      "readinessCriteria"?: {
      };
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

export class PgBouncerOpsRequest extends Model<IPgBouncerOpsRequest> implements IPgBouncerOpsRequest {
  "apiVersion": IPgBouncerOpsRequest["apiVersion"];
  "kind": IPgBouncerOpsRequest["kind"];
  "metadata"?: IPgBouncerOpsRequest["metadata"];
  "spec"?: IPgBouncerOpsRequest["spec"];
  "status"?: IPgBouncerOpsRequest["status"];

static apiVersion: IPgBouncerOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IPgBouncerOpsRequest["kind"] = "PgBouncerOpsRequest";
static is = createTypeMetaGuard<IPgBouncerOpsRequest>(PgBouncerOpsRequest);

constructor(data?: ModelData<IPgBouncerOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: PgBouncerOpsRequest.apiVersion,
    kind: PgBouncerOpsRequest.kind,
    ...data
  } as IPgBouncerOpsRequest);
}
}


setValidateFunc(PgBouncerOpsRequest, validate as ValidateFunc<IPgBouncerOpsRequest>);
