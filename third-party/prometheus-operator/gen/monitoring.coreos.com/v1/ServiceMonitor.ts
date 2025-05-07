import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1ServiceMonitor";

export interface IServiceMonitor {
  "apiVersion": "monitoring.coreos.com/v1";
  "kind": "ServiceMonitor";
  "metadata"?: IObjectMeta;
  "spec": {
    "attachMetadata"?: {
      "node"?: boolean;
    };
    "endpoints": Array<{
      "authorization"?: {
        "credentials"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "type"?: string;
      };
      "basicAuth"?: {
        "password"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "username"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "bearerTokenFile"?: string;
      "bearerTokenSecret"?: {
        "key": string;
        "name"?: string;
        "optional"?: boolean;
      };
      "enableHttp2"?: boolean;
      "filterRunning"?: boolean;
      "followRedirects"?: boolean;
      "honorLabels"?: boolean;
      "honorTimestamps"?: boolean;
      "interval"?: string;
      "metricRelabelings"?: Array<{
        "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
        "modulus"?: number;
        "regex"?: string;
        "replacement"?: string;
        "separator"?: string;
        "sourceLabels"?: Array<string>;
        "targetLabel"?: string;
      }>;
      "oauth2"?: {
        "clientId": {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "clientSecret": {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "endpointParams"?: {
          [key: string]: string;
        };
        "scopes"?: Array<string>;
        "tokenUrl": string;
      };
      "params"?: {
        [key: string]: Array<string>;
      };
      "path"?: string;
      "port"?: string;
      "proxyUrl"?: string;
      "relabelings"?: Array<{
        "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
        "modulus"?: number;
        "regex"?: string;
        "replacement"?: string;
        "separator"?: string;
        "sourceLabels"?: Array<string>;
        "targetLabel"?: string;
      }>;
      "scheme"?: "http" | "https";
      "scrapeTimeout"?: string;
      "targetPort"?: number | string;
      "tlsConfig"?: {
        "ca"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "caFile"?: string;
        "cert"?: {
          "configMap"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "secret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "certFile"?: string;
        "insecureSkipVerify"?: boolean;
        "keyFile"?: string;
        "keySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "serverName"?: string;
      };
    }>;
    "jobLabel"?: string;
    "labelLimit"?: number;
    "labelNameLengthLimit"?: number;
    "labelValueLengthLimit"?: number;
    "namespaceSelector"?: {
      "any"?: boolean;
      "matchNames"?: Array<string>;
    };
    "podTargetLabels"?: Array<string>;
    "sampleLimit"?: number;
    "selector": {
      "matchExpressions"?: Array<{
        "key": string;
        "operator": string;
        "values"?: Array<string>;
      }>;
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    "targetLabels"?: Array<string>;
    "targetLimit"?: number;
  };
}

export class ServiceMonitor extends Model<IServiceMonitor> implements IServiceMonitor {
  "apiVersion": IServiceMonitor["apiVersion"];
  "kind": IServiceMonitor["kind"];
  "metadata"?: IServiceMonitor["metadata"];
  "spec": IServiceMonitor["spec"];

static apiVersion: IServiceMonitor["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IServiceMonitor["kind"] = "ServiceMonitor";
static is = createTypeMetaGuard<IServiceMonitor>(ServiceMonitor);

constructor(data?: ModelData<IServiceMonitor>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceMonitor.apiVersion,
    kind: ServiceMonitor.kind,
    ...data
  } as IServiceMonitor);
}
}


setValidateFunc(ServiceMonitor, validate as ValidateFunc<IServiceMonitor>);
