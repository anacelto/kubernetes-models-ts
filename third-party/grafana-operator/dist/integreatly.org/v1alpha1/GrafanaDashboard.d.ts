import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaDashboard is the Schema for the grafanadashboards API
 */
export interface IGrafanaDashboard {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "integreatly.org/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GrafanaDashboard";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaDashboardSpec defines the desired state of GrafanaDashboard
     */
    "spec"?: {
        /**
         * ConfigMapRef is a reference to a ConfigMap data field containing the dashboard's JSON
         */
        "configMapRef"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
        };
        /**
         * ContentCacheDuration sets how often the operator should resync with the external source when using the `grafanaCom.id` or `url` field to specify the source of the dashboard. The default value is decided by the `dashboardContentCacheDuration` field in the `Grafana` resource. The default is 0 which is interpreted as never refetching.
         */
        "contentCacheDuration"?: string;
        "customFolderName"?: string;
        "datasources"?: Array<{
            "datasourceName": string;
            "inputName": string;
        }>;
        "grafanaCom"?: {
            "id": number;
            "revision"?: number;
        };
        /**
         * GzipConfigMapRef is a reference to a ConfigMap binaryData field containing the dashboard's JSON, compressed with Gzip.
         */
        "gzipConfigMapRef"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
        };
        /**
         * GzipJson the dashboard's JSON compressed with Gzip. Base64-encoded when in YAML.
         */
        "gzipJson"?: string;
        /**
         * Json is the dashboard's JSON
         */
        "json"?: string;
        "jsonnet"?: string;
        "plugins"?: Array<{
            "name": string;
            "version": string;
        }>;
        "url"?: string;
    };
    "status"?: {
        "contentCache"?: string;
        "contentTimestamp"?: string;
        "contentUrl"?: string;
        "error"?: {
            "code": number;
            "error": string;
            "retries"?: number;
        };
    };
}
/**
 * GrafanaDashboard is the Schema for the grafanadashboards API
 */
export declare class GrafanaDashboard extends Model<IGrafanaDashboard> implements IGrafanaDashboard {
    "apiVersion": IGrafanaDashboard["apiVersion"];
    "kind": IGrafanaDashboard["kind"];
    "metadata"?: IGrafanaDashboard["metadata"];
    "spec"?: IGrafanaDashboard["spec"];
    "status"?: IGrafanaDashboard["status"];
    static apiVersion: IGrafanaDashboard["apiVersion"];
    static kind: IGrafanaDashboard["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaDashboard>;
    constructor(data?: ModelData<IGrafanaDashboard>);
}
