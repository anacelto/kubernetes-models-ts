import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * MetricTemplate is the Schema for the MetricTemplates API.
 */
export interface IMetricTemplate {
    "apiVersion": "flagger.app/v1beta1";
    "kind": "MetricTemplate";
    "metadata"?: IObjectMeta;
    /**
     * MetricTemplateSpec defines the desired state of a MetricTemplate.
     */
    "spec"?: {
        /**
         * Provider of this metric template
         */
        "provider": {
            /**
             * Type of this provider
             */
            "type": "prometheus" | "influxdb" | "datadog" | "stackdriver" | "cloudwatch" | "newrelic" | "graphite" | "dynatrace";
            /**
             * API address of this provider
             */
            "address"?: string;
            /**
             * Kubernetes secret reference containing the provider credentials
             */
            "secretRef"?: {
                /**
                 * Name of the Kubernetes secret
                 */
                "name": string;
            };
            /**
             * Region of the provider
             */
            "region"?: string;
            /**
             * Disable SSL certificate validation for the provider address
             */
            "insecureSkipVerify"?: boolean;
        };
        /**
         * Query of this metric template
         */
        "query": string;
    };
}
/**
 * MetricTemplate is the Schema for the MetricTemplates API.
 */
export declare class MetricTemplate extends Model<IMetricTemplate> implements IMetricTemplate {
    "apiVersion": IMetricTemplate["apiVersion"];
    "kind": IMetricTemplate["kind"];
    "metadata"?: IMetricTemplate["metadata"];
    "spec"?: IMetricTemplate["spec"];
    static apiVersion: IMetricTemplate["apiVersion"];
    static kind: IMetricTemplate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMetricTemplate>;
    constructor(data?: ModelData<IMetricTemplate>);
}
