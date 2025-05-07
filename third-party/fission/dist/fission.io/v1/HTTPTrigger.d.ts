import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * HTTPTrigger is the trigger invokes user functions when receiving HTTP requests.
 */
export interface IHTTPTrigger {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "fission.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "HTTPTrigger";
    "metadata": IObjectMeta;
    /**
     * HTTPTriggerSpec is for router to expose user functions at the given URL path.
     */
    "spec": {
        /**
         * If CreateIngress is true, router will create an ingress definition.
         */
        "createingress"?: boolean;
        /**
         * FunctionReference is a reference to the target function.
         */
        "functionref": {
            /**
             * Function Reference by weight. this map contains function name as key and its weight
             * as the value. This is for canary upgrade purpose.
             */
            "functionweights"?: {
                [key: string]: number;
            };
            /**
             * Name of the function.
             */
            "name": string;
            /**
             * Type indicates whether this function reference is by name or selector. For now,
             * the only supported reference type is by "name".  Future reference types:
             *   \* Function by label or annotation
             *   \* Branch or tag of a versioned function
             *   \* A "rolling upgrade" from one version of a function to another
             * Available value:
             * - name
             * - function-weights
             */
            "type": string;
        };
        /**
         * TODO: remove this field since we have IngressConfig already
         * Deprecated: the original idea of this field is not for setting Ingress.
         * Since we have IngressConfig now, remove Host after couple releases.
         */
        "host"?: string;
        /**
         * TODO: make IngressConfig an independent Fission resource
         * IngressConfig for router to set up Ingress.
         */
        "ingressconfig"?: {
            /**
             * Annotations will be added to metadata when creating Ingress.
             */
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * Host is for ingress controller to apply rules. If
             * host is empty or "\*", the rule applies to all
             * inbound HTTP traffic.
             */
            "host"?: string;
            /**
             * Path is for path matching. The format of path
             * depends on what ingress controller you used.
             */
            "path"?: string;
            /**
             * TLS is for user to specify a Secret that contains
             * TLS key and certificate. The domain name in the
             * key and crt must match the value of Host field.
             */
            "tls"?: string;
        };
        /**
         * When function is exposed with Prefix based path,
         * keepPrefix decides whether to keep or trim prefix in URL while invoking function.
         */
        "keepPrefix"?: boolean;
        /**
         * Use Methods instead of Method. This field is going to be deprecated in a future release
         * HTTP method to access a function.
         */
        "method"?: string;
        /**
         * HTTP methods to access a function
         */
        "methods"?: Array<string>;
        /**
         * Prefix with which functions are exposed.
         * NOTE: Prefix takes precedence over URL/RelativeURL.
         * Note that it does not treat slashes specially ("/foobar/" will be matched by
         * the prefix "/foobar").
         */
        "prefix"?: string;
        /**
         * RelativeURL is the exposed URL for external client to access a function with.
         */
        "relativeurl"?: string;
    };
}
/**
 * HTTPTrigger is the trigger invokes user functions when receiving HTTP requests.
 */
export declare class HTTPTrigger extends Model<IHTTPTrigger> implements IHTTPTrigger {
    "apiVersion": IHTTPTrigger["apiVersion"];
    "kind": IHTTPTrigger["kind"];
    "metadata": IHTTPTrigger["metadata"];
    "spec": IHTTPTrigger["spec"];
    static apiVersion: IHTTPTrigger["apiVersion"];
    static kind: IHTTPTrigger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHTTPTrigger>;
    constructor(data?: ModelData<IHTTPTrigger>);
}
