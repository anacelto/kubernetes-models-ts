import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIdentityPlatformConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "identityplatform.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IdentityPlatformConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * List of domains authorized for OAuth redirects
         */
        "authorizedDomains"?: Array<string>;
        /**
         * Configuration related to blocking functions.
         */
        "blockingFunctions"?: {
            /**
             * Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn"
             */
            "triggers"?: {
                [key: string]: {
                    "functionUriRef"?: {
                        /**
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                         * HTTP URI trigger for the Cloud Function.
                         *
                         * Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource.
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
                     * When the trigger was changed.
                     */
                    "updateTime"?: string;
                };
            };
        };
        /**
         * Options related to how clients making requests on behalf of a project should be configured.
         */
        "client"?: {
            /**
             * Configuration related to restricting a user's ability to affect their account.
             */
            "permissions"?: {
                /**
                 * When true, end users cannot delete their account on the associated project through any of our API methods
                 */
                "disabledUserDeletion"?: boolean;
                /**
                 * When true, end users cannot sign up for a new account on the associated project through any of our API methods
                 */
                "disabledUserSignup"?: boolean;
            };
        };
        /**
         * Configuration for this project's multi-factor authentication, including whether it is active and what factors can be used for the second factor
         */
        "mfa"?: {
            /**
             * Whether MultiFactor Authentication has been enabled for this project. Possible values: STATE_UNSPECIFIED, DISABLED, ENABLED, MANDATORY
             */
            "state"?: string;
        };
        /**
         * Configuration related to monitoring project activity.
         */
        "monitoring"?: {
            /**
             * Configuration for logging requests made to this project to Stackdriver Logging
             */
            "requestLogging"?: {
                /**
                 * Whether logging is enabled for this project or not.
                 */
                "enabled"?: boolean;
            };
        };
        /**
         * Configuration related to multi-tenant functionality.
         */
        "multiTenant"?: {
            /**
             * Whether this project can have tenants or not.
             */
            "allowTenants"?: boolean;
            "defaultTenantLocationRef"?: {
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & (Exclude<{
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind": string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }> | Exclude<{
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & ({
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } | {
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind"?: string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
                 *
                 * Allowed values:
                 * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
                 * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: Folder
                 */
                "kind": string;
                /**
                 * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
        };
        /**
         * Configuration related to sending notifications to users.
         */
        "notification"?: {
            /**
             * Default locale used for email and SMS in IETF BCP 47 format.
             */
            "defaultLocale"?: string;
            /**
             * Options for email sending.
             */
            "sendEmail"?: {
                /**
                 * action url in email template.
                 */
                "callbackUri"?: string;
                /**
                 * Email template for change email
                 */
                "changeEmailTemplate"?: {
                    /**
                     * Immutable. Email body
                     */
                    "body"?: string;
                    /**
                     * Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML
                     */
                    "bodyFormat"?: string;
                    /**
                     * Reply-to address
                     */
                    "replyTo"?: string;
                    /**
                     * Sender display name
                     */
                    "senderDisplayName"?: string;
                    /**
                     * Local part of From address
                     */
                    "senderLocalPart"?: string;
                    /**
                     * Subject of the email
                     */
                    "subject"?: string;
                };
                /**
                 * Information of custom domain DNS verification.
                 */
                "dnsInfo"?: {
                    /**
                     * Whether to use custom domain.
                     */
                    "useCustomDomain"?: boolean;
                };
                /**
                 * The method used for sending an email. Possible values: METHOD_UNSPECIFIED, DEFAULT, CUSTOM_SMTP
                 */
                "method"?: string;
                /**
                 * Email template for reset password
                 */
                "resetPasswordTemplate"?: {
                    /**
                     * Email body
                     */
                    "body"?: string;
                    /**
                     * Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML
                     */
                    "bodyFormat"?: string;
                    /**
                     * Reply-to address
                     */
                    "replyTo"?: string;
                    /**
                     * Sender display name
                     */
                    "senderDisplayName"?: string;
                    /**
                     * Local part of From address
                     */
                    "senderLocalPart"?: string;
                    /**
                     * Subject of the email
                     */
                    "subject"?: string;
                };
                /**
                 * Email template for reverting second factor addition emails
                 */
                "revertSecondFactorAdditionTemplate"?: {
                    /**
                     * Immutable. Email body
                     */
                    "body"?: string;
                    /**
                     * Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML
                     */
                    "bodyFormat"?: string;
                    /**
                     * Reply-to address
                     */
                    "replyTo"?: string;
                    /**
                     * Sender display name
                     */
                    "senderDisplayName"?: string;
                    /**
                     * Local part of From address
                     */
                    "senderLocalPart"?: string;
                    /**
                     * Subject of the email
                     */
                    "subject"?: string;
                };
                /**
                 * Use a custom SMTP relay
                 */
                "smtp"?: {
                    /**
                     * SMTP relay host
                     */
                    "host"?: string;
                    /**
                     * SMTP relay password
                     */
                    "password"?: {
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
                     * SMTP relay port
                     */
                    "port"?: number;
                    /**
                     * SMTP security mode. Possible values: SECURITY_MODE_UNSPECIFIED, SSL, START_TLS
                     */
                    "securityMode"?: string;
                    /**
                     * Sender email for the SMTP relay
                     */
                    "senderEmail"?: string;
                    /**
                     * SMTP relay username
                     */
                    "username"?: string;
                };
                /**
                 * Email template for verify email
                 */
                "verifyEmailTemplate"?: {
                    /**
                     * Immutable. Email body
                     */
                    "body"?: string;
                    /**
                     * Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML
                     */
                    "bodyFormat"?: string;
                    /**
                     * Reply-to address
                     */
                    "replyTo"?: string;
                    /**
                     * Sender display name
                     */
                    "senderDisplayName"?: string;
                    /**
                     * Local part of From address
                     */
                    "senderLocalPart"?: string;
                    /**
                     * Subject of the email
                     */
                    "subject"?: string;
                };
            };
            /**
             * Options for SMS sending.
             */
            "sendSms"?: {
                /**
                 * Whether to use the accept_language header for SMS.
                 */
                "useDeviceLocale"?: boolean;
            };
        };
        /**
         * Immutable. The Project that this resource belongs to.
         */
        "projectRef": {
            /**
             * The project of the resource
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
             * The project of the resource
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
             * The project of the resource
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
             * The project of the resource
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
             * The project of the resource
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
             * The project of the resource
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
             * The project of the resource
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
         * Configuration related to quotas.
         */
        "quota"?: {
            /**
             * Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.
             */
            "signUpQuotaConfig"?: {
                /**
                 * Corresponds to the 'refill_token_count' field in QuotaServer config
                 */
                "quota"?: number;
                /**
                 * How long this quota will be active for
                 */
                "quotaDuration"?: string;
                /**
                 * When this quota will take affect
                 */
                "startTime"?: string;
            };
        };
        /**
         * Configuration related to local sign in methods.
         */
        "signIn"?: {
            /**
             * Whether to allow more than one account to have the same email.
             */
            "allowDuplicateEmails"?: boolean;
            /**
             * Configuration options related to authenticating an anonymous user.
             */
            "anonymous"?: {
                /**
                 * Whether anonymous user auth is enabled for the project or not.
                 */
                "enabled"?: boolean;
            };
            /**
             * Configuration options related to authenticating a user by their email address.
             */
            "email"?: {
                /**
                 * Whether email auth is enabled for the project or not.
                 */
                "enabled"?: boolean;
                /**
                 * Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link.
                 */
                "passwordRequired"?: boolean;
            };
            /**
             * Configuration options related to authenticated a user by their phone number.
             */
            "phoneNumber"?: {
                /**
                 * Whether phone number auth is enabled for the project or not.
                 */
                "enabled"?: boolean;
                /**
                 * A map of that can be used for phone auth testing.
                 */
                "testPhoneNumbers"?: {
                    [key: string]: string;
                };
            };
        };
    };
    "status"?: {
        "client"?: {
            /**
             * Output only. API key that can be used when making requests for this project.
             */
            "apiKey"?: string;
            /**
             * Output only. Firebase subdomain.
             */
            "firebaseSubdomain"?: string;
        };
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
        "notification"?: {
            "sendEmail"?: {
                "changeEmailTemplate"?: {
                    /**
                     * Output only. Whether the body or subject of the email is customized.
                     */
                    "customized"?: boolean;
                };
                "dnsInfo"?: {
                    /**
                     * Output only. The applied verified custom domain.
                     */
                    "customDomain"?: string;
                    /**
                     * Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. Possible values: VERIFICATION_STATE_UNSPECIFIED, NOT_STARTED, IN_PROGRESS, FAILED, SUCCEEDED
                     */
                    "customDomainState"?: string;
                    /**
                     * Output only. The timestamp of initial request for the current domain verification.
                     */
                    "domainVerificationRequestTime"?: string;
                    /**
                     * Output only. The custom domain that's to be verified.
                     */
                    "pendingCustomDomain"?: string;
                };
                "resetPasswordTemplate"?: {
                    /**
                     * Output only. Whether the body or subject of the email is customized.
                     */
                    "customized"?: boolean;
                };
                "revertSecondFactorAdditionTemplate"?: {
                    /**
                     * Output only. Whether the body or subject of the email is customized.
                     */
                    "customized"?: boolean;
                };
                "verifyEmailTemplate"?: {
                    /**
                     * Output only. Whether the body or subject of the email is customized.
                     */
                    "customized"?: boolean;
                };
            };
            "sendSms"?: {
                /**
                 * Output only. The template to use when sending an SMS.
                 */
                "smsTemplate"?: {
                    /**
                     * Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS.
                     */
                    "content"?: string;
                };
            };
        };
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        "signIn"?: {
            "email"?: {
                /**
                 * Output only. Hash config information.
                 */
                "hashConfig"?: {
                    /**
                     * Output only. Different password hash algorithms used in Identity Toolkit. Possible values: HASH_ALGORITHM_UNSPECIFIED, HMAC_SHA256, HMAC_SHA1, HMAC_MD5, SCRYPT, PBKDF_SHA1, MD5, HMAC_SHA512, SHA1, BCRYPT, PBKDF2_SHA256, SHA256, SHA512, STANDARD_SCRYPT
                     */
                    "algorithm"?: string;
                    /**
                     * Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
                     */
                    "memoryCost"?: number;
                    /**
                     * Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
                     */
                    "rounds"?: number;
                    /**
                     * Output only. Non-printable character to be inserted between the salt and plain text password in base64.
                     */
                    "saltSeparator"?: string;
                    /**
                     * Output only. Signer key in base64.
                     */
                    "signerKey"?: string;
                };
            };
            /**
             * Output only. Hash config information.
             */
            "hashConfig"?: {
                /**
                 * Output only. Different password hash algorithms used in Identity Toolkit. Possible values: HASH_ALGORITHM_UNSPECIFIED, HMAC_SHA256, HMAC_SHA1, HMAC_MD5, SCRYPT, PBKDF_SHA1, MD5, HMAC_SHA512, SHA1, BCRYPT, PBKDF2_SHA256, SHA256, SHA512, STANDARD_SCRYPT
                 */
                "algorithm"?: string;
                /**
                 * Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
                 */
                "memoryCost"?: number;
                /**
                 * Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
                 */
                "rounds"?: number;
                /**
                 * Output only. Non-printable character to be inserted between the salt and plain text password in base64.
                 */
                "saltSeparator"?: string;
                /**
                 * Output only. Signer key in base64.
                 */
                "signerKey"?: string;
            };
        };
        /**
         * Output only. The subtype of this config. Possible values: SUBTYPE_UNSPECIFIED, IDENTITY_PLATFORM, FIREBASE_AUTH
         */
        "subtype"?: string;
    };
}
export declare class IdentityPlatformConfig extends Model<IIdentityPlatformConfig> implements IIdentityPlatformConfig {
    "apiVersion": IIdentityPlatformConfig["apiVersion"];
    "kind": IIdentityPlatformConfig["kind"];
    "metadata"?: IIdentityPlatformConfig["metadata"];
    "spec": IIdentityPlatformConfig["spec"];
    "status"?: IIdentityPlatformConfig["status"];
    static apiVersion: IIdentityPlatformConfig["apiVersion"];
    static kind: IIdentityPlatformConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIdentityPlatformConfig>;
    constructor(data?: ModelData<IIdentityPlatformConfig>);
}
