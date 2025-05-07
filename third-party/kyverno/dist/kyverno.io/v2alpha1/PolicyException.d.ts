import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * PolicyException declares resources to be excluded from specified policies.
 */
export interface IPolicyException {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "kyverno.io/v2alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "PolicyException";
    "metadata"?: IObjectMeta;
    /**
     * Spec declares policy exception behaviors.
     */
    "spec": {
        /**
         * Background controls if exceptions are applied to existing policies during a background scan. Optional. Default value is "true". The value must be set to "false" if the policy rule uses variables that are only available in the admission review request (e.g. user name).
         */
        "background"?: boolean;
        /**
         * Exceptions is a list policy/rules to be excluded
         */
        "exceptions": Array<{
            /**
             * PolicyName identifies the policy to which the exception is applied. The policy name uses the format <namespace>/<name> unless it references a ClusterPolicy.
             */
            "policyName": string;
            /**
             * RuleNames identifies the rules to which the exception is applied.
             */
            "ruleNames": Array<string>;
        }>;
        /**
         * Match defines match clause used to check if a resource applies to the exception
         */
        "match": {
            /**
             * All allows specifying resources which will be ANDed
             */
            "all"?: Array<{
                /**
                 * ClusterRoles is the list of cluster-wide role names for the user.
                 */
                "clusterRoles"?: Array<string>;
                /**
                 * ResourceDescription contains information about the resource being created or modified.
                 */
                "resources"?: {
                    /**
                     * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
                     */
                    "annotations"?: {
                        [key: string]: string;
                    };
                    /**
                     * Kinds is a list of resource kinds.
                     */
                    "kinds"?: Array<string>;
                    /**
                     * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
                     */
                    "name"?: string;
                    /**
                     * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
                     */
                    "names"?: Array<string>;
                    /**
                     * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
                     */
                    "namespaceSelector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
                     */
                    "namespaces"?: Array<string>;
                    /**
                     * Operations can contain values ["CREATE, "UPDATE", "CONNECT", "DELETE"], which are used to match a specific action.
                     */
                    "operations"?: Array<"CREATE" | "CONNECT" | "UPDATE" | "DELETE">;
                    /**
                     * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
                     */
                    "selector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                };
                /**
                 * Roles is the list of namespaced role names for the user.
                 */
                "roles"?: Array<string>;
                /**
                 * Subjects is the list of subject names like users, user groups, and service accounts.
                 */
                "subjects"?: Array<{
                    /**
                     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
                     */
                    "kind": string;
                    /**
                     * Name of the object being referenced.
                     */
                    "name": string;
                    /**
                     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
                     */
                    "namespace"?: string;
                }>;
            }>;
            /**
             * Any allows specifying resources which will be ORed
             */
            "any"?: Array<{
                /**
                 * ClusterRoles is the list of cluster-wide role names for the user.
                 */
                "clusterRoles"?: Array<string>;
                /**
                 * ResourceDescription contains information about the resource being created or modified.
                 */
                "resources"?: {
                    /**
                     * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
                     */
                    "annotations"?: {
                        [key: string]: string;
                    };
                    /**
                     * Kinds is a list of resource kinds.
                     */
                    "kinds"?: Array<string>;
                    /**
                     * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
                     */
                    "name"?: string;
                    /**
                     * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
                     */
                    "names"?: Array<string>;
                    /**
                     * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
                     */
                    "namespaceSelector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
                     */
                    "namespaces"?: Array<string>;
                    /**
                     * Operations can contain values ["CREATE, "UPDATE", "CONNECT", "DELETE"], which are used to match a specific action.
                     */
                    "operations"?: Array<"CREATE" | "CONNECT" | "UPDATE" | "DELETE">;
                    /**
                     * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
                     */
                    "selector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                };
                /**
                 * Roles is the list of namespaced role names for the user.
                 */
                "roles"?: Array<string>;
                /**
                 * Subjects is the list of subject names like users, user groups, and service accounts.
                 */
                "subjects"?: Array<{
                    /**
                     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
                     */
                    "kind": string;
                    /**
                     * Name of the object being referenced.
                     */
                    "name": string;
                    /**
                     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
                     */
                    "namespace"?: string;
                }>;
            }>;
        };
    };
}
/**
 * PolicyException declares resources to be excluded from specified policies.
 */
export declare class PolicyException extends Model<IPolicyException> implements IPolicyException {
    "apiVersion": IPolicyException["apiVersion"];
    "kind": IPolicyException["kind"];
    "metadata"?: IPolicyException["metadata"];
    "spec": IPolicyException["spec"];
    static apiVersion: IPolicyException["apiVersion"];
    static kind: IPolicyException["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPolicyException>;
    constructor(data?: ModelData<IPolicyException>);
}
