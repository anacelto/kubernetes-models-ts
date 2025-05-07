import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IApigeeInstance {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "apigee.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ApigeeInstance";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. Optional. Customer accept list represents the list of projects (id/number) on customer
         * side that can privately connect to the service attachment. It is an optional field
         * which the customers can provide during the instance creation. By default, the customer
         * project associated with the Apigee organization will be included to the list.
         */
        "consumerAcceptList"?: Array<string>;
        /**
         * Immutable. Description of the instance.
         */
        "description"?: string;
        /**
         * Immutable. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
         * Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.
         */
        "diskEncryptionKeyName"?: string;
        /**
         * Immutable. Display name of the instance.
         */
        "displayName"?: string;
        /**
         * Immutable. IP range represents the customer-provided CIDR block of length 22 that will be used for
         * the Apigee instance creation. This optional range, if provided, should be freely
         * available as part of larger named range the customer has allocated to the Service
         * Networking peering. If this is not provided, Apigee will automatically request for any
         * available /22 CIDR block from Service Networking. The customer should use this CIDR block
         * for configuring their firewall needs to allow traffic from Apigee.
         * Input format: "a.b.c.d/22".
         */
        "ipRange"?: string;
        /**
         * Immutable. Required. Compute Engine location where the instance resides.
         */
        "location": string;
        /**
         * Immutable. The Apigee Organization associated with the Apigee instance,
         * in the format 'organizations/{{org_name}}'.
         */
        "orgId": string;
        /**
         * Immutable. The size of the CIDR block range that will be reserved by the instance. For valid values,
         * see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
         */
        "peeringCidrRange"?: string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
    };
    "status"?: {
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
         * Output only. Hostname or IP address of the exposed Apigee endpoint used by clients to connect to the service.
         */
        "host"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. Port number of the exposed Apigee endpoint.
         */
        "port"?: string;
        /**
         * Output only. Resource name of the service attachment created for the instance in
         * the format: projects/\*\/regions/\*\/serviceAttachments/\* Apigee customers can privately
         * forward traffic to this service attachment using the PSC endpoints.
         */
        "serviceAttachment"?: string;
    };
}
export declare class ApigeeInstance extends Model<IApigeeInstance> implements IApigeeInstance {
    "apiVersion": IApigeeInstance["apiVersion"];
    "kind": IApigeeInstance["kind"];
    "metadata"?: IApigeeInstance["metadata"];
    "spec": IApigeeInstance["spec"];
    "status"?: IApigeeInstance["status"];
    static apiVersion: IApigeeInstance["apiVersion"];
    static kind: IApigeeInstance["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IApigeeInstance>;
    constructor(data?: ModelData<IApigeeInstance>);
}
