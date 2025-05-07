import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1Probe";

export interface IProbe {
  "apiVersion": "monitoring.coreos.com/v1";
  "kind": "Probe";
  "metadata"?: IObjectMeta;
  "spec": {
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
    "interval"?: string;
    "jobName"?: string;
    "labelLimit"?: number;
    "labelNameLengthLimit"?: number;
    "labelValueLengthLimit"?: number;
    "metricRelabelings"?: Array<{
      "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
      "modulus"?: number;
      "regex"?: string;
      "replacement"?: string;
      "separator"?: string;
      "sourceLabels"?: Array<string>;
      "targetLabel"?: string;
    }>;
    "module"?: string;
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
    "prober"?: {
      "path"?: string;
      "proxyUrl"?: string;
      "scheme"?: "http" | "https";
      "url": string;
    };
    "sampleLimit"?: number;
    "scrapeTimeout"?: string;
    "targetLimit"?: number;
    "targets"?: {
      "ingress"?: {
        "namespaceSelector"?: {
          "any"?: boolean;
          "matchNames"?: Array<string>;
        };
        "relabelingConfigs"?: Array<{
          "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
          "modulus"?: number;
          "regex"?: string;
          "replacement"?: string;
          "separator"?: string;
          "sourceLabels"?: Array<string>;
          "targetLabel"?: string;
        }>;
        "selector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
      };
      "staticConfig"?: {
        "labels"?: {
          [key: string]: string;
        };
        "relabelingConfigs"?: Array<{
          "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
          "modulus"?: number;
          "regex"?: string;
          "replacement"?: string;
          "separator"?: string;
          "sourceLabels"?: Array<string>;
          "targetLabel"?: string;
        }>;
        "static"?: Array<string>;
      };
    };
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
  };
}

export class Probe extends Model<IProbe> implements IProbe {
  "apiVersion": IProbe["apiVersion"];
  "kind": IProbe["kind"];
  "metadata"?: IProbe["metadata"];
  "spec": IProbe["spec"];

static apiVersion: IProbe["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IProbe["kind"] = "Probe";
static is = createTypeMetaGuard<IProbe>(Probe);

constructor(data?: ModelData<IProbe>) {
  super();

  this.setDefinedProps({
    apiVersion: Probe.apiVersion,
    kind: Probe.kind,
    ...data
  } as IProbe);
}
}


setValidateFunc(Probe, validate as ValidateFunc<IProbe>);
