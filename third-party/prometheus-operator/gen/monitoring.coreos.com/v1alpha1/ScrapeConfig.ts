import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1alpha1ScrapeConfig";

export interface IScrapeConfig {
  "apiVersion": "monitoring.coreos.com/v1alpha1";
  "kind": "ScrapeConfig";
  "metadata"?: IObjectMeta;
  "spec": {
    "fileSDConfigs"?: Array<{
      "files": Array<string>;
      "refreshInterval"?: string;
    }>;
    "honorLabels"?: boolean;
    "honorTimestamps"?: boolean;
    "httpSDConfigs"?: Array<{
      "refreshInterval"?: string;
      "url": string;
    }>;
    "metricsPath"?: string;
    "relabelings"?: Array<{
      "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
      "modulus"?: number;
      "regex"?: string;
      "replacement"?: string;
      "separator"?: string;
      "sourceLabels"?: Array<string>;
      "targetLabel"?: string;
    }>;
    "staticConfigs"?: Array<{
      "labels"?: {
        [key: string]: string;
      };
      "targets"?: Array<string>;
    }>;
  };
}

export class ScrapeConfig extends Model<IScrapeConfig> implements IScrapeConfig {
  "apiVersion": IScrapeConfig["apiVersion"];
  "kind": IScrapeConfig["kind"];
  "metadata"?: IScrapeConfig["metadata"];
  "spec": IScrapeConfig["spec"];

static apiVersion: IScrapeConfig["apiVersion"] = "monitoring.coreos.com/v1alpha1";
static kind: IScrapeConfig["kind"] = "ScrapeConfig";
static is = createTypeMetaGuard<IScrapeConfig>(ScrapeConfig);

constructor(data?: ModelData<IScrapeConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: ScrapeConfig.apiVersion,
    kind: ScrapeConfig.kind,
    ...data
  } as IScrapeConfig);
}
}


setValidateFunc(ScrapeConfig, validate as ValidateFunc<IScrapeConfig>);
