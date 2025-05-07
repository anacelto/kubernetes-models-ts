import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1ProxySQLOpsRequest";

export interface IProxySQLOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "ProxySQLOpsRequest";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "apply"?: "IfReady" | "Always";
    "configuration"?: {
      "adminVariables"?: {
      };
      "mysqlQueryRules"?: {
        "reqType": string;
        "rules": Array<{
        }>;
      };
      "mysqlUsers"?: {
        "reqType": string;
        "users": Array<{
          "active"?: number;
          "attributes"?: string;
          "backend"?: number;
          "comment"?: string;
          "default_hostgroup"?: number;
          "default_schema"?: string;
          "fast_forward"?: number;
          "frontend"?: number;
          "max_connections"?: number;
          "schema_locked"?: number;
          "transaction_persistent"?: number;
          "use_ssl"?: number;
          "username": string;
        }>;
      };
      "mysqlVariables"?: {
      };
    };
    "horizontalScaling"?: {
      "member"?: number;
    };
    "proxyRef": {
      "name"?: string;
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
      "rotateCertificates"?: boolean;
    };
    "type": "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "Restart" | "Reconfigure" | "ReconfigureTLS";
    "updateVersion"?: {
      "readinessCriteria"?: {
      };
      "targetVersion"?: string;
    };
    "verticalScaling"?: {
      "proxysql"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
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

export class ProxySQLOpsRequest extends Model<IProxySQLOpsRequest> implements IProxySQLOpsRequest {
  "apiVersion": IProxySQLOpsRequest["apiVersion"];
  "kind": IProxySQLOpsRequest["kind"];
  "metadata"?: IProxySQLOpsRequest["metadata"];
  "spec"?: IProxySQLOpsRequest["spec"];
  "status"?: IProxySQLOpsRequest["status"];

static apiVersion: IProxySQLOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IProxySQLOpsRequest["kind"] = "ProxySQLOpsRequest";
static is = createTypeMetaGuard<IProxySQLOpsRequest>(ProxySQLOpsRequest);

constructor(data?: ModelData<IProxySQLOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: ProxySQLOpsRequest.apiVersion,
    kind: ProxySQLOpsRequest.kind,
    ...data
  } as IProxySQLOpsRequest);
}
}


setValidateFunc(ProxySQLOpsRequest, validate as ValidateFunc<IProxySQLOpsRequest>);
