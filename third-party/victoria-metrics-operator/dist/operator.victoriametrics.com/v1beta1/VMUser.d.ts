import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMUser is the Schema for the vmusers API
 */
export interface IVMUser {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "operator.victoriametrics.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "VMUser";
    "metadata"?: IObjectMeta;
    /**
     * VMUserSpec defines the desired state of VMUser
     */
    "spec"?: {
        /**
         * BearerToken Authorization header value for accessing protected endpoint.
         */
        "bearerToken"?: string;
        /**
         * DefaultURLs backend url for non-matching paths filter
         * usually used for default backend with error message
         */
        "default_url"?: Array<string>;
        /**
         * DisableSecretCreation skips related secret creation for vmuser
         */
        "disable_secret_creation"?: boolean;
        /**
         * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
         */
        "discover_backend_ips"?: boolean;
        /**
         * DropSrcPathPrefixParts is the number of `/`-delimited request path prefix parts to drop before proxying the request to backend.
         * See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
         */
        "drop_src_path_prefix_parts"?: number;
        /**
         * GeneratePassword instructs operator to generate password for user
         * if spec.password if empty.
         */
        "generatePassword"?: boolean;
        /**
         * Headers represent additional http headers, that vmauth uses
         * in form of ["header_key: header_value"]
         * multiple values for header key:
         * ["header_key: value1,value2"]
         * it's available since 1.68.0 version of vmauth
         */
        "headers"?: Array<string>;
        /**
         * IPFilters defines per target src ip filters
         * supported only with enterprise version of [vmauth](https://docs.victoriametrics.com/vmauth/#ip-filters)
         */
        "ip_filters"?: {
            "allow_list"?: Array<string>;
            "deny_list"?: Array<string>;
        };
        /**
         * LoadBalancingPolicy defines load balancing policy to use for backend urls.
         * Supported policies: least_loaded, first_available.
         * See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default "least_loaded")
         */
        "load_balancing_policy"?: "least_loaded" | "first_available";
        /**
         * MaxConcurrentRequests defines max concurrent requests per user
         * 300 is default value for vmauth
         */
        "max_concurrent_requests"?: number;
        /**
         * MetricLabels - additional labels for metrics exported by vmauth for given user.
         */
        "metric_labels"?: {
            [key: string]: string;
        };
        /**
         * Name of the VMUser object.
         */
        "name"?: string;
        /**
         * Password basic auth password for accessing protected endpoint.
         */
        "password"?: string;
        /**
         * PasswordRef allows fetching password from user-create secret by its name and key.
         */
        "passwordRef"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
        };
        /**
         * ResponseHeaders represent additional http headers, that vmauth adds for request response
         * in form of ["header_key: header_value"]
         * multiple values for header key:
         * ["header_key: value1,value2"]
         * it's available since 1.93.0 version of vmauth
         */
        "response_headers"?: Array<string>;
        /**
         * RetryStatusCodes defines http status codes in numeric format for request retries
         * e.g. [429,503]
         */
        "retry_status_codes"?: Array<number>;
        /**
         * TargetRefs - reference to endpoints, which user may access.
         */
        "targetRefs": Array<{
            /**
             * CRD describes exist operator's CRD object,
             * operator generates access url based on CRD params.
             */
            "crd"?: {
                /**
                 * Kind one of:
                 * VMAgent,VMAlert, VMSingle, VMCluster/vmselect, VMCluster/vmstorage,VMCluster/vminsert  or VMAlertManager
                 */
                "kind": "VMAgent" | "VMAlert" | "VMSingle" | "VMAlertManager" | "VMAlertmanager" | "VMCluster/vmselect" | "VMCluster/vmstorage" | "VMCluster/vminsert";
                /**
                 * Name target CRD object name
                 */
                "name": string;
                /**
                 * Namespace target CRD object namespace.
                 */
                "namespace": string;
            };
            /**
             * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
             */
            "discover_backend_ips"?: boolean;
            /**
             * DropSrcPathPrefixParts is the number of `/`-delimited request path prefix parts to drop before proxying the request to backend.
             * See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
             */
            "drop_src_path_prefix_parts"?: number;
            /**
             * RequestHeaders represent additional http headers, that vmauth uses
             * in form of ["header_key: header_value"]
             * multiple values for header key:
             * ["header_key: value1,value2"]
             * it's available since 1.68.0 version of vmauth
             */
            "headers"?: Array<string>;
            "hosts"?: Array<string>;
            /**
             * LoadBalancingPolicy defines load balancing policy to use for backend urls.
             * Supported policies: least_loaded, first_available.
             * See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default "least_loaded")
             */
            "load_balancing_policy"?: "least_loaded" | "first_available";
            /**
             * Paths - matched path to route.
             */
            "paths"?: Array<string>;
            /**
             * ResponseHeaders represent additional http headers, that vmauth adds for request response
             * in form of ["header_key: header_value"]
             * multiple values for header key:
             * ["header_key: value1,value2"]
             * it's available since 1.93.0 version of vmauth
             */
            "response_headers"?: Array<string>;
            /**
             * RetryStatusCodes defines http status codes in numeric format for request retries
             * Can be defined per target or at VMUser.spec level
             * e.g. [429,503]
             */
            "retry_status_codes"?: Array<number>;
            /**
             * SrcHeaders is an optional list of headers, which must match request headers.
             */
            "src_headers"?: Array<string>;
            /**
             * SrcQueryArgs is an optional list of query args, which must match request URL query args.
             */
            "src_query_args"?: Array<string>;
            /**
             * Static - user defined url for traffic forward,
             * for instance http://vmsingle:8429
             */
            "static"?: {
                /**
                 * URL http url for given staticRef.
                 */
                "url"?: string;
                /**
                 * URLs allows setting multiple urls for load-balancing at vmauth-side.
                 */
                "urls"?: Array<string>;
            };
            /**
             * TargetPathSuffix allows to add some suffix to the target path
             * It allows to hide tenant configuration from user with crd as ref.
             * it also may contain any url encoded params.
             */
            "target_path_suffix"?: string;
            /**
             * TargetRefBasicAuth allow an target endpoint to authenticate over basic authentication
             */
            "targetRefBasicAuth"?: {
                /**
                 * The secret in the service scrape namespace that contains the password
                 * for authentication.
                 * It must be at them same namespace as CRD
                 */
                "password": {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * The secret in the service scrape namespace that contains the username
                 * for authentication.
                 * It must be at them same namespace as CRD
                 */
                "username": {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
        }>;
        /**
         * TLSConfig specifies TLSConfig configuration parameters.
         */
        "tlsConfig"?: {
            /**
             * Stuct containing the CA cert to use for the targets.
             */
            "ca"?: {
                /**
                 * ConfigMap containing data to use for the targets.
                 */
                "configMap"?: {
                    /**
                     * The key to select.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Secret containing data to use for the targets.
                 */
                "secret"?: {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
            /**
             * Path to the CA cert in the container to use for the targets.
             */
            "caFile"?: string;
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
                /**
                 * ConfigMap containing data to use for the targets.
                 */
                "configMap"?: {
                    /**
                     * The key to select.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Secret containing data to use for the targets.
                 */
                "secret"?: {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
            /**
             * Path to the client cert file in the container for the targets.
             */
            "certFile"?: string;
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Path to the client key file in the container for the targets.
             */
            "keyFile"?: string;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
        };
        /**
         * TokenRef allows fetching token from user-created secrets by its name and key.
         */
        "tokenRef"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
        };
        /**
         * UserName basic auth user name for accessing protected endpoint,
         * will be replaced with metadata.name of VMUser if omitted.
         */
        "username"?: string;
    };
    /**
     * VMUserStatus defines the observed state of VMUser
     */
    "status"?: {
        /**
         * LastSyncError contains error message for unsuccessful config generation
         * for given user
         */
        "lastSyncError"?: string;
        /**
         * Status defines update status of resource
         */
        "status"?: string;
    };
}
/**
 * VMUser is the Schema for the vmusers API
 */
export declare class VMUser extends Model<IVMUser> implements IVMUser {
    "apiVersion": IVMUser["apiVersion"];
    "kind": IVMUser["kind"];
    "metadata"?: IVMUser["metadata"];
    "spec"?: IVMUser["spec"];
    "status"?: IVMUser["status"];
    static apiVersion: IVMUser["apiVersion"];
    static kind: IVMUser["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMUser>;
    constructor(data?: ModelData<IVMUser>);
}
