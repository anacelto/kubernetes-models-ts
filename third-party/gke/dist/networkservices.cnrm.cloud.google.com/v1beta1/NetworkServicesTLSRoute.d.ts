import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface INetworkServicesTLSRoute {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "networkservices.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "NetworkServicesTLSRoute";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Optional. A free-text description of the resource. Max length 1024 characters.
         */
        "description"?: string;
        "gateways"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>)>;
        /**
         * Immutable. The location for the resource
         */
        "location": string;
        "meshes"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>)>;
        /**
         * Immutable. The Project that this resource belongs to.
         */
        "projectRef": {
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * The project for the resource
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>);
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
         */
        "rules": Array<{
            /**
             * Required. The detailed rule defining how to route matched traffic.
             */
            "action": {
                /**
                 * Required. The destination services to which traffic should be forwarded. At least one destination service is required.
                 */
                "destinations": Array<{
                    "serviceRef": {
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external"?: string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    } & (Exclude<{
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external"?: string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name": string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    }, {
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external": string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    }> | Exclude<{
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external": string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    }, {
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external": string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    } & ({
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external"?: string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name": string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace"?: string;
                    } | {
                        /**
                         * Required. The URL of a BackendService to route traffic to.
                         *
                         * Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`).
                         */
                        "external"?: string;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                         */
                        "namespace": string;
                    })>);
                    /**
                     * Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
                     */
                    "weight"?: number;
                }>;
            };
            /**
             * Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.
             */
            "matches": Array<{
                /**
                 * Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set.
                 */
                "alpn"?: Array<string>;
                /**
                 * Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then \*.example.com, then \*.com. Partial wildcards are not supported, and values like \*w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set.
                 */
                "sniHost"?: Array<string>;
            }>;
        }>;
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
         * Output only. The timestamp when the resource was created.
         */
        "createTime"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. Server-defined URL of this resource
         */
        "selfLink"?: string;
        /**
         * Output only. The timestamp when the resource was updated.
         */
        "updateTime"?: string;
    };
}
export declare class NetworkServicesTLSRoute extends Model<INetworkServicesTLSRoute> implements INetworkServicesTLSRoute {
    "apiVersion": INetworkServicesTLSRoute["apiVersion"];
    "kind": INetworkServicesTLSRoute["kind"];
    "metadata"?: INetworkServicesTLSRoute["metadata"];
    "spec": INetworkServicesTLSRoute["spec"];
    "status"?: INetworkServicesTLSRoute["status"];
    static apiVersion: INetworkServicesTLSRoute["apiVersion"];
    static kind: INetworkServicesTLSRoute["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkServicesTLSRoute>;
    constructor(data?: ModelData<INetworkServicesTLSRoute>);
}
