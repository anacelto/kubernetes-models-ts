import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1MySQLOpsRequest";

export interface IMySQLOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "MySQLOpsRequest";
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
      "member"?: number;
    };
    "restart"?: {
    };
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
      "mysql"?: {
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
      "mysql"?: number | string;
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

export class MySQLOpsRequest extends Model<IMySQLOpsRequest> implements IMySQLOpsRequest {
  "apiVersion": IMySQLOpsRequest["apiVersion"];
  "kind": IMySQLOpsRequest["kind"];
  "metadata"?: IMySQLOpsRequest["metadata"];
  "spec"?: IMySQLOpsRequest["spec"];
  "status"?: IMySQLOpsRequest["status"];

static apiVersion: IMySQLOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IMySQLOpsRequest["kind"] = "MySQLOpsRequest";
static is = createTypeMetaGuard<IMySQLOpsRequest>(MySQLOpsRequest);

constructor(data?: ModelData<IMySQLOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: MySQLOpsRequest.apiVersion,
    kind: MySQLOpsRequest.kind,
    ...data
  } as IMySQLOpsRequest);
}
}


setValidateFunc(MySQLOpsRequest, validate as ValidateFunc<IMySQLOpsRequest>);
