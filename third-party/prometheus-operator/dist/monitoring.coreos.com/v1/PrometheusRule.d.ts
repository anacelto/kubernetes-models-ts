import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
export declare class PrometheusRule extends Model<IPrometheusRule> implements IPrometheusRule {
    "apiVersion": IPrometheusRule["apiVersion"];
    "kind": IPrometheusRule["kind"];
    "metadata"?: IPrometheusRule["metadata"];
    "spec": IPrometheusRule["spec"];
    static apiVersion: IPrometheusRule["apiVersion"];
    static kind: IPrometheusRule["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPrometheusRule>;
    constructor(data?: ModelData<IPrometheusRule>);
}
