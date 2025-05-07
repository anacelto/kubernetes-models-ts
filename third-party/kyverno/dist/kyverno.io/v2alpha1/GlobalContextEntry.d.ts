import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GlobalContextEntry declares resources to be cached.
 */
export interface IGlobalContextEntry {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "kyverno.io/v2alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GlobalContextEntry";
    "metadata"?: IObjectMeta;
    /**
     * Spec declares policy exception behaviors.
     */
    "spec": {
        /**
         * Stores results from an API call which will be cached.
         * Mutually exclusive with KubernetesResource.
         * This can be used to make calls to external (non-Kubernetes API server) services.
         * It can also be used to make calls to the Kubernetes API server in such cases:
         * 1. A POST is needed to create a resource.
         * 2. Finer-grained control is needed. Example: To restrict the number of resources cached.
         */
        "apiCall"?: {
            /**
             * The data object specifies the POST data sent to the server.
             * Only applicable when the method field is set to POST.
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
             * Method is the HTTP request type (GET or POST). Defaults to GET.
             */
            "method"?: "GET" | "POST";
            /**
             * RefreshInterval defines the interval in duration at which to poll the APICall.
             * The duration is a sequence of decimal numbers, each with optional fraction and a unit suffix,
             * such as "300ms", "1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
             */
            "refreshInterval"?: string;
            /**
             * RetryLimit defines the number of times the APICall should be retried in case of failure.
             */
            "retryLimit"?: number;
            /**
             * Service is an API call to a JSON web service.
             * This is used for non-Kubernetes API server calls.
             * It's mutually exclusive with the URLPath field.
             */
            "service"?: {
                /**
                 * CABundle is a PEM encoded CA bundle which will be used to validate
                 * the server certificate.
                 */
                "caBundle"?: string;
                /**
                 * Headers is a list of optional HTTP headers to be included in the request.
                 */
                "headers"?: Array<{
                    /**
                     * Key is the header key
                     */
                    "key": string;
                    /**
                     * Value is the header value
                     */
                    "value": string;
                }>;
                /**
                 * URL is the JSON web service URL. A typical form is
                 * `https://{service}.{namespace}:{port}/{path}`.
                 */
                "url": string;
            };
            /**
             * URLPath is the URL path to be used in the HTTP GET or POST request to the
             * Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments").
             * The format required is the same format used by the `kubectl get --raw` command.
             * See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls
             * for details.
             * It's mutually exclusive with the Service field.
             */
            "urlPath"?: string;
        };
        /**
         * Stores a list of Kubernetes resources which will be cached.
         * Mutually exclusive with APICall.
         */
        "kubernetesResource"?: {
            /**
             * Group defines the group of the resource.
             */
            "group"?: string;
            /**
             * Namespace defines the namespace of the resource. Leave empty for cluster scoped resources.
             * If left empty for namespaced resources, all resources from all namespaces will be cached.
             */
            "namespace"?: string;
            /**
             * Resource defines the type of the resource.
             * Requires the pluralized form of the resource kind in lowercase. (Ex., "deployments")
             */
            "resource": string;
            /**
             * Version defines the version of the resource.
             */
            "version": string;
        };
        /**
         * Projections defines the list of JMESPath expressions to extract values from the cached resource.
         */
        "projections"?: Array<{
            /**
             * JMESPath is the JMESPath expression to extract the value from the cached resource.
             */
            "jmesPath": string;
            /**
             * Name is the name to use for the extracted value in the context.
             */
            "name": string;
        }>;
    } & ({
        /**
         * Stores results from an API call which will be cached.
         * Mutually exclusive with KubernetesResource.
         * This can be used to make calls to external (non-Kubernetes API server) services.
         * It can also be used to make calls to the Kubernetes API server in such cases:
         * 1. A POST is needed to create a resource.
         * 2. Finer-grained control is needed. Example: To restrict the number of resources cached.
         */
        "apiCall"?: {
            /**
             * The data object specifies the POST data sent to the server.
             * Only applicable when the method field is set to POST.
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
             * Method is the HTTP request type (GET or POST). Defaults to GET.
             */
            "method"?: "GET" | "POST";
            /**
             * RefreshInterval defines the interval in duration at which to poll the APICall.
             * The duration is a sequence of decimal numbers, each with optional fraction and a unit suffix,
             * such as "300ms", "1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
             */
            "refreshInterval"?: string;
            /**
             * RetryLimit defines the number of times the APICall should be retried in case of failure.
             */
            "retryLimit"?: number;
            /**
             * Service is an API call to a JSON web service.
             * This is used for non-Kubernetes API server calls.
             * It's mutually exclusive with the URLPath field.
             */
            "service"?: {
                /**
                 * CABundle is a PEM encoded CA bundle which will be used to validate
                 * the server certificate.
                 */
                "caBundle"?: string;
                /**
                 * Headers is a list of optional HTTP headers to be included in the request.
                 */
                "headers"?: Array<{
                    /**
                     * Key is the header key
                     */
                    "key": string;
                    /**
                     * Value is the header value
                     */
                    "value": string;
                }>;
                /**
                 * URL is the JSON web service URL. A typical form is
                 * `https://{service}.{namespace}:{port}/{path}`.
                 */
                "url": string;
            };
            /**
             * URLPath is the URL path to be used in the HTTP GET or POST request to the
             * Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments").
             * The format required is the same format used by the `kubectl get --raw` command.
             * See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls
             * for details.
             * It's mutually exclusive with the Service field.
             */
            "urlPath"?: string;
        };
        /**
         * Stores a list of Kubernetes resources which will be cached.
         * Mutually exclusive with APICall.
         */
        "kubernetesResource": {
            /**
             * Group defines the group of the resource.
             */
            "group"?: string;
            /**
             * Namespace defines the namespace of the resource. Leave empty for cluster scoped resources.
             * If left empty for namespaced resources, all resources from all namespaces will be cached.
             */
            "namespace"?: string;
            /**
             * Resource defines the type of the resource.
             * Requires the pluralized form of the resource kind in lowercase. (Ex., "deployments")
             */
            "resource": string;
            /**
             * Version defines the version of the resource.
             */
            "version": string;
        };
        /**
         * Projections defines the list of JMESPath expressions to extract values from the cached resource.
         */
        "projections"?: Array<{
            /**
             * JMESPath is the JMESPath expression to extract the value from the cached resource.
             */
            "jmesPath": string;
            /**
             * Name is the name to use for the extracted value in the context.
             */
            "name": string;
        }>;
    } | {
        /**
         * Stores results from an API call which will be cached.
         * Mutually exclusive with KubernetesResource.
         * This can be used to make calls to external (non-Kubernetes API server) services.
         * It can also be used to make calls to the Kubernetes API server in such cases:
         * 1. A POST is needed to create a resource.
         * 2. Finer-grained control is needed. Example: To restrict the number of resources cached.
         */
        "apiCall": {
            /**
             * The data object specifies the POST data sent to the server.
             * Only applicable when the method field is set to POST.
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
             * Method is the HTTP request type (GET or POST). Defaults to GET.
             */
            "method"?: "GET" | "POST";
            /**
             * RefreshInterval defines the interval in duration at which to poll the APICall.
             * The duration is a sequence of decimal numbers, each with optional fraction and a unit suffix,
             * such as "300ms", "1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
             */
            "refreshInterval"?: string;
            /**
             * RetryLimit defines the number of times the APICall should be retried in case of failure.
             */
            "retryLimit"?: number;
            /**
             * Service is an API call to a JSON web service.
             * This is used for non-Kubernetes API server calls.
             * It's mutually exclusive with the URLPath field.
             */
            "service"?: {
                /**
                 * CABundle is a PEM encoded CA bundle which will be used to validate
                 * the server certificate.
                 */
                "caBundle"?: string;
                /**
                 * Headers is a list of optional HTTP headers to be included in the request.
                 */
                "headers"?: Array<{
                    /**
                     * Key is the header key
                     */
                    "key": string;
                    /**
                     * Value is the header value
                     */
                    "value": string;
                }>;
                /**
                 * URL is the JSON web service URL. A typical form is
                 * `https://{service}.{namespace}:{port}/{path}`.
                 */
                "url": string;
            };
            /**
             * URLPath is the URL path to be used in the HTTP GET or POST request to the
             * Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments").
             * The format required is the same format used by the `kubectl get --raw` command.
             * See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls
             * for details.
             * It's mutually exclusive with the Service field.
             */
            "urlPath"?: string;
        };
        /**
         * Stores a list of Kubernetes resources which will be cached.
         * Mutually exclusive with APICall.
         */
        "kubernetesResource"?: {
            /**
             * Group defines the group of the resource.
             */
            "group"?: string;
            /**
             * Namespace defines the namespace of the resource. Leave empty for cluster scoped resources.
             * If left empty for namespaced resources, all resources from all namespaces will be cached.
             */
            "namespace"?: string;
            /**
             * Resource defines the type of the resource.
             * Requires the pluralized form of the resource kind in lowercase. (Ex., "deployments")
             */
            "resource": string;
            /**
             * Version defines the version of the resource.
             */
            "version": string;
        };
        /**
         * Projections defines the list of JMESPath expressions to extract values from the cached resource.
         */
        "projections"?: Array<{
            /**
             * JMESPath is the JMESPath expression to extract the value from the cached resource.
             */
            "jmesPath": string;
            /**
             * Name is the name to use for the extracted value in the context.
             */
            "name": string;
        }>;
    });
    /**
     * Status contains globalcontextentry runtime data.
     */
    "status"?: {
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type": string;
        }>;
        /**
         * Indicates the time when the globalcontextentry was last refreshed successfully for the API Call
         */
        "lastRefreshTime"?: string;
        /**
         * Deprecated in favor of Conditions
         */
        "ready"?: boolean;
    };
}
/**
 * GlobalContextEntry declares resources to be cached.
 */
export declare class GlobalContextEntry extends Model<IGlobalContextEntry> implements IGlobalContextEntry {
    "apiVersion": IGlobalContextEntry["apiVersion"];
    "kind": IGlobalContextEntry["kind"];
    "metadata"?: IGlobalContextEntry["metadata"];
    "spec": IGlobalContextEntry["spec"];
    "status"?: IGlobalContextEntry["status"];
    static apiVersion: IGlobalContextEntry["apiVersion"];
    static kind: IGlobalContextEntry["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGlobalContextEntry>;
    constructor(data?: ModelData<IGlobalContextEntry>);
}
