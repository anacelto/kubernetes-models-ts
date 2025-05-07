import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaNotificationChannel is the Schema for the GrafanaNotificationChannels API
 */
export interface IGrafanaNotificationChannel {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "integreatly.org/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GrafanaNotificationChannel";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaNotificationChannelSpec defines the desired state of GrafanaNotificationChannel
     */
    "spec"?: {
        "json": string;
        "name": string;
    };
    /**
     * GrafanaNotificationChannelStatus defines the observed state of GrafanaNotificationChannel
     */
    "status"?: {
        "hash": string;
        "id": number;
        "message": string;
        "phase": string;
        "uid": string;
    };
}
/**
 * GrafanaNotificationChannel is the Schema for the GrafanaNotificationChannels API
 */
export declare class GrafanaNotificationChannel extends Model<IGrafanaNotificationChannel> implements IGrafanaNotificationChannel {
    "apiVersion": IGrafanaNotificationChannel["apiVersion"];
    "kind": IGrafanaNotificationChannel["kind"];
    "metadata"?: IGrafanaNotificationChannel["metadata"];
    "spec"?: IGrafanaNotificationChannel["spec"];
    "status"?: IGrafanaNotificationChannel["status"];
    static apiVersion: IGrafanaNotificationChannel["apiVersion"];
    static kind: IGrafanaNotificationChannel["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaNotificationChannel>;
    constructor(data?: ModelData<IGrafanaNotificationChannel>);
}
