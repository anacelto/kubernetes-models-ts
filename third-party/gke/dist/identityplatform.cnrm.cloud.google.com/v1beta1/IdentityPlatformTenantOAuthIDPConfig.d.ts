import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIdentityPlatformTenantOAuthIDPConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "identityplatform.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IdentityPlatformTenantOAuthIDPConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The client id of an OAuth client.
         */
        "clientId"?: string;
        /**
         * The client secret of the OAuth client, to enable OIDC code flow.
         */
        "clientSecret"?: {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        } & (Exclude<{
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value": string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }, {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom": {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }> | Exclude<{
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom": {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }, {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value": string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }>);
        /**
         * The config's display name set by developers.
         */
        "displayName"?: string;
        /**
         * True if allows the user to sign in with the provider.
         */
        "enabled"?: boolean;
        /**
         * For OIDC Idps, the issuer identifier.
         */
        "issuer"?: string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * The multiple response type to request for in the OAuth authorization flow. This can possibly be a combination of set bits (e.g.: {id\_token, token}).
         */
        "responseType"?: {
            /**
             * If true, authorization code is returned from IdP's authorization endpoint.
             */
            "code"?: boolean;
            /**
             * If true, ID token is returned from IdP's authorization endpoint.
             */
            "idToken"?: boolean;
            /**
             * If true, access token is returned from IdP's authorization endpoint.
             */
            "token"?: boolean;
        };
        /**
         * Immutable.
         */
        "tenantRef": {
            /**
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
             * The tenant for the resource
             *
             * Allowed value: The Google Cloud resource name of an `IdentityPlatformTenant` resource (format: `projects/{{project}}/tenants/{{name}}`).
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class IdentityPlatformTenantOAuthIDPConfig extends Model<IIdentityPlatformTenantOAuthIDPConfig> implements IIdentityPlatformTenantOAuthIDPConfig {
    "apiVersion": IIdentityPlatformTenantOAuthIDPConfig["apiVersion"];
    "kind": IIdentityPlatformTenantOAuthIDPConfig["kind"];
    "metadata"?: IIdentityPlatformTenantOAuthIDPConfig["metadata"];
    "spec": IIdentityPlatformTenantOAuthIDPConfig["spec"];
    "status"?: IIdentityPlatformTenantOAuthIDPConfig["status"];
    static apiVersion: IIdentityPlatformTenantOAuthIDPConfig["apiVersion"];
    static kind: IIdentityPlatformTenantOAuthIDPConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIdentityPlatformTenantOAuthIDPConfig>;
    constructor(data?: ModelData<IIdentityPlatformTenantOAuthIDPConfig>);
}
