import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface INetworkSecurityAuthorizationPolicy {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "networksecurity.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "NetworkSecurityAuthorizationPolicy";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". Possible values: ACTION_UNSPECIFIED, ALLOW, DENY
         */
        "action": string;
        /**
         * Optional. Free-text description of the resource.
         */
        "description"?: string;
        /**
         * Immutable. The location for the resource
         */
        "location": string;
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
         * Optional. List of rules to match. If not set, the action specified in the ‘action’ field will be applied without any additional rule checks.
         */
        "rules"?: Array<{
            /**
             * Optional. List of attributes for the traffic destination. If not set, the action specified in the ‘action’ field will be applied without any rule checks for the destination.
             */
            "destinations"?: Array<{
                /**
                 * Required. List of host names to match. Matched against HOST header in http requests. Each host can be an exact match, or a prefix match (example, “mydomain.\*”) or a suffix match (example, \*.myorg.com”) or a presence(any) match “\*”.
                 */
                "hosts": Array<string>;
                /**
                 * Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases.
                 */
                "httpHeaderMatch"?: {
                    /**
                     * Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".
                     */
                    "headerName": string;
                    /**
                     * Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.
                     */
                    "regexMatch": string;
                };
                /**
                 * Optional. A list of HTTP methods to match. Should not be set for gRPC services.
                 */
                "methods"?: Array<string>;
                /**
                 * Required. List of destination ports to match.
                 */
                "ports": Array<number>;
            }>;
            /**
             * Optional. List of attributes for the traffic source. If not set, the action specified in the ‘action’ field will be applied without any rule checks for the source.
             */
            "sources"?: Array<{
                /**
                 * Optional. List of CIDR ranges to match based on source IP address. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported.
                 */
                "ipBlocks"?: Array<string>;
                /**
                 * Optional. List of peer identities to match for authorization. Each peer can be an exact match, or a prefix match (example, “namespace/\*”) or a suffix match (example, \*\/service-account”) or a presence match “\*”.
                 */
                "principals"?: Array<string>;
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
         * Output only. The timestamp when the resource was updated.
         */
        "updateTime"?: string;
    };
}
export declare class NetworkSecurityAuthorizationPolicy extends Model<INetworkSecurityAuthorizationPolicy> implements INetworkSecurityAuthorizationPolicy {
    "apiVersion": INetworkSecurityAuthorizationPolicy["apiVersion"];
    "kind": INetworkSecurityAuthorizationPolicy["kind"];
    "metadata"?: INetworkSecurityAuthorizationPolicy["metadata"];
    "spec": INetworkSecurityAuthorizationPolicy["spec"];
    "status"?: INetworkSecurityAuthorizationPolicy["status"];
    static apiVersion: INetworkSecurityAuthorizationPolicy["apiVersion"];
    static kind: INetworkSecurityAuthorizationPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkSecurityAuthorizationPolicy>;
    constructor(data?: ModelData<INetworkSecurityAuthorizationPolicy>);
}
