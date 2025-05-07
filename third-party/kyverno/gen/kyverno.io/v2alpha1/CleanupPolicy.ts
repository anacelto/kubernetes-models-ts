import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KyvernoIoV2alpha1CleanupPolicy";

/**
 * CleanupPolicy defines a rule for resource cleanup.
 */
export interface ICleanupPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kyverno.io/v2alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CleanupPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec declares policy behaviors.
   */
  "spec": {
    /**
     * Conditions defines the conditions used to select the resources which will be cleaned up.
     */
    "conditions"?: {
      /**
       * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass.
       */
      "all"?: Array<{
        /**
         * Key is the context entry (using JMESPath) for conditional rule evaluation.
         */
        "key"?: any;
        /**
         * Message is an optional display message
         */
        "message"?: string;
        /**
         * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
         */
        "operator"?: "Equals" | "NotEquals" | "AnyIn" | "AllIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
        /**
         * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
         */
        "value"?: any;
      }>;
      /**
       * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass.
       */
      "any"?: Array<{
        /**
         * Key is the context entry (using JMESPath) for conditional rule evaluation.
         */
        "key"?: any;
        /**
         * Message is an optional display message
         */
        "message"?: string;
        /**
         * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
         */
        "operator"?: "Equals" | "NotEquals" | "AnyIn" | "AllIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
        /**
         * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
         */
        "value"?: any;
      }>;
    };
    /**
     * Context defines variables and data sources that can be used during rule execution.
     */
    "context"?: Array<{
      /**
       * APICall is an HTTP request to the Kubernetes API server, or other JSON web service. The data returned is stored in the context with the name for the context entry.
       */
      "apiCall"?: {
        /**
         * Data specifies the POST data sent to the server.
         */
        "data"?: Array<{
          /**
           * Key is a unique identifier for the data value
           */
          "key": string;
          /**
           * Value is the data value
           */
          "value": any;
        }>;
        /**
         * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the server. For example a JMESPath of "items | length(@)" applied to the API server response for the URLPath "/apis/apps/v1/deployments" will return the total count of deployments across all namespaces.
         */
        "jmesPath"?: string;
        /**
         * Method is the HTTP request type (GET or POST).
         */
        "method"?: "GET" | "POST";
        /**
         * Service is an API call to a JSON web service
         */
        "service"?: {
          /**
           * CABundle is a PEM encoded CA bundle which will be used to validate the server certificate.
           */
          "caBundle"?: string;
          /**
           * URL is the JSON web service URL. A typical form is `https://{service}.{namespace}:{port}/{path}`.
           */
          "url": string;
        };
        /**
         * URLPath is the URL path to be used in the HTTP GET or POST request to the Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments"). The format required is the same format used by the `kubectl get --raw` command. See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls for details.
         */
        "urlPath"?: string;
      };
      /**
       * ConfigMap is the ConfigMap reference.
       */
      "configMap"?: {
        /**
         * Name is the ConfigMap name.
         */
        "name": string;
        /**
         * Namespace is the ConfigMap namespace.
         */
        "namespace"?: string;
      };
      /**
       * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
       */
      "imageRegistry"?: {
        /**
         * ImageRegistryCredentials provides credentials that will be used for authentication with registry
         */
        "imageRegistryCredentials"?: {
          /**
           * AllowInsecureRegistry allows insecure access to a registry.
           */
          "allowInsecureRegistry"?: boolean;
          /**
           * Providers specifies a list of OCI Registry names, whose authentication providers are provided. It can be of one of these values: default,google,azure,amazon,github.
           */
          "providers"?: Array<"default" | "amazon" | "azure" | "google" | "github">;
          /**
           * Secrets specifies a list of secrets that are provided for credentials. Secrets must live in the Kyverno namespace.
           */
          "secrets"?: Array<string>;
        };
        /**
         * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
         */
        "jmesPath"?: string;
        /**
         * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
         */
        "reference": string;
      };
      /**
       * Name is the variable name.
       */
      "name"?: string;
      /**
       * Variable defines an arbitrary JMESPath context variable that can be defined inline.
       */
      "variable"?: {
        /**
         * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
         */
        "default"?: any;
        /**
         * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
         */
        "jmesPath"?: string;
        /**
         * Value is any arbitrary JSON object representable in YAML or JSON form.
         */
        "value"?: any;
      };
    }>;
    /**
     * ExcludeResources defines when cleanuppolicy should not be applied. The exclude criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the name or role.
     */
    "exclude"?: {
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
    /**
     * MatchResources defines when cleanuppolicy should be applied. The match criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the user name or role. At least one kind is required.
     */
    "match"?: {
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
    /**
     * The schedule in Cron format
     */
    "schedule": string;
  };
  /**
   * Status contains policy runtime data.
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
    "lastExecutionTime"?: string;
  };
}

/**
 * CleanupPolicy defines a rule for resource cleanup.
 */
export class CleanupPolicy extends Model<ICleanupPolicy> implements ICleanupPolicy {
  "apiVersion": ICleanupPolicy["apiVersion"];
  "kind": ICleanupPolicy["kind"];
  "metadata"?: ICleanupPolicy["metadata"];
  "spec": ICleanupPolicy["spec"];
  "status"?: ICleanupPolicy["status"];

static apiVersion: ICleanupPolicy["apiVersion"] = "kyverno.io/v2alpha1";
static kind: ICleanupPolicy["kind"] = "CleanupPolicy";
static is = createTypeMetaGuard<ICleanupPolicy>(CleanupPolicy);

constructor(data?: ModelData<ICleanupPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: CleanupPolicy.apiVersion,
    kind: CleanupPolicy.kind,
    ...data
  } as ICleanupPolicy);
}
}


setValidateFunc(CleanupPolicy, validate as ValidateFunc<ICleanupPolicy>);
