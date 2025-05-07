import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IFirebaseWebApp {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "firebase.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "FirebaseWebApp";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.
         * If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.
         * This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
         */
        "apiKeyId"?: string;
        "deletionPolicy"?: string;
        /**
         * The user-assigned display name of the App.
         */
        "displayName": string;
        /**
         * Immutable.
         */
        "project"?: string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
    };
    "status"?: {
        /**
         * The globally unique, Firebase-assigned identifier of the App.
         * This identifier should be treated as an opaque token, as the data format is not specified.
         */
        "appId"?: string;
        /**
         * The URLs where the 'WebApp' is hosted.
         */
        "appUrls"?: Array<string>;
        /**
         * Conditions represent the latest available observation of the resource's current state.
         */
        "conditions"?: Array<{
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, one-word, CamelCase reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status is the status of the condition. Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        /**
         * The fully qualified resource name of the App, for example:
         * projects/projectId/webApps/appId.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class FirebaseWebApp extends Model<IFirebaseWebApp> implements IFirebaseWebApp {
    "apiVersion": IFirebaseWebApp["apiVersion"];
    "kind": IFirebaseWebApp["kind"];
    "metadata"?: IFirebaseWebApp["metadata"];
    "spec": IFirebaseWebApp["spec"];
    "status"?: IFirebaseWebApp["status"];
    static apiVersion: IFirebaseWebApp["apiVersion"];
    static kind: IFirebaseWebApp["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IFirebaseWebApp>;
    constructor(data?: ModelData<IFirebaseWebApp>);
}
