import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1PrometheusRule";

export interface IPrometheusRule {
  "apiVersion": "monitoring.coreos.com/v1";
  "kind": "PrometheusRule";
  "metadata"?: IObjectMeta;
  "spec": {
    "groups"?: Array<{
      "interval"?: string;
      "limit"?: number;
      "name": string;
      "partial_response_strategy"?: string;
      "rules"?: Array<{
        "alert"?: string;
        "annotations"?: {
          [key: string]: string;
        };
        "expr": number | string;
        "for"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "record"?: string;
      }>;
    }>;
  };
}

export class PrometheusRule extends Model<IPrometheusRule> implements IPrometheusRule {
  "apiVersion": IPrometheusRule["apiVersion"];
  "kind": IPrometheusRule["kind"];
  "metadata"?: IPrometheusRule["metadata"];
  "spec": IPrometheusRule["spec"];

static apiVersion: IPrometheusRule["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IPrometheusRule["kind"] = "PrometheusRule";
static is = createTypeMetaGuard<IPrometheusRule>(PrometheusRule);

constructor(data?: ModelData<IPrometheusRule>) {
  super();

  this.setDefinedProps({
    apiVersion: PrometheusRule.apiVersion,
    kind: PrometheusRule.kind,
    ...data
  } as IPrometheusRule);
}
}


setValidateFunc(PrometheusRule, validate as ValidateFunc<IPrometheusRule>);
