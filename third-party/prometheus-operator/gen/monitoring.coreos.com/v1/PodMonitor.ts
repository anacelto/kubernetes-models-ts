import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1PodMonitor";

export interface IPodMonitor {
  "apiVersion": "monitoring.coreos.com/v1";
  "kind": "PodMonitor";
  "metadata"?: IObjectMeta;
  "spec": {
    "attachMetadata"?: {
      "node"?: boolean;
    };
    "jobLabel"?: string;
    "labelLimit"?: number;
    "labelNameLengthLimit"?: number;
    "labelValueLengthLimit"?: number;
    "namespaceSelector"?: {
      "any"?: boolean;
      "matchNames"?: Array<string>;
    };
    "podMetricsEndpoints": Array<{
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
        "insecureSkipVerify"?: boolean;
        "keySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "serverName"?: string;
      };
    }>;
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
    "targetLimit"?: number;
  };
}

export class PodMonitor extends Model<IPodMonitor> implements IPodMonitor {
  "apiVersion": IPodMonitor["apiVersion"];
  "kind": IPodMonitor["kind"];
  "metadata"?: IPodMonitor["metadata"];
  "spec": IPodMonitor["spec"];

static apiVersion: IPodMonitor["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IPodMonitor["kind"] = "PodMonitor";
static is = createTypeMetaGuard<IPodMonitor>(PodMonitor);

constructor(data?: ModelData<IPodMonitor>) {
  super();

  this.setDefinedProps({
    apiVersion: PodMonitor.apiVersion,
    kind: PodMonitor.kind,
    ...data
  } as IPodMonitor);
}
}


setValidateFunc(PodMonitor, validate as ValidateFunc<IPodMonitor>);
