import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OperatorVictoriametricsComV1beta1VMAlertmanagerConfig";

/**
 * VMAlertmanagerConfig is the Schema for the vmalertmanagerconfigs API
 */
export interface IVMAlertmanagerConfig {
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
  "kind": "VMAlertmanagerConfig";
  "metadata"?: IObjectMeta;
  /**
   * VMAlertmanagerConfigSpec defines configuration for VMAlertmanagerConfig
   * it must reference only locally defined objects
   */
  "spec"?: {
    /**
     * InhibitRules will only apply for alerts matching
     * the resource's namespace.
     */
    "inhibit_rules"?: Array<{
      /**
       * Labels that must have an equal value in the source and target alert for
       * the inhibition to take effect.
       */
      "equal"?: Array<string>;
      /**
       * SourceMatchers defines a list of matchers for which one or more alerts have
       * to exist for the inhibition to take effect.
       */
      "source_matchers"?: Array<string>;
      /**
       * TargetMatchers defines a list of matchers that have to be fulfilled by the target
       * alerts to be muted.
       */
      "target_matchers"?: Array<string>;
    }>;
    /**
     * Receivers defines alert receivers
     */
    "receivers": Array<{
      "discord_configs"?: Array<{
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * The message body template
         */
        "message"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * The message title template
         */
        "title"?: string;
        /**
         * The discord webhook URL
         * one of `urlSecret` and `url` must be defined.
         */
        "webhook_url"?: string;
        /**
         * URLSecret defines secret name and key at the CRD namespace.
         * It must contain the webhook URL.
         * one of `urlSecret` and `url` must be defined.
         */
        "webhook_url_secret"?: {
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
      }>;
      /**
       * EmailConfigs defines email notification configurations.
       */
      "email_configs"?: Array<{
        /**
         * The identity to use for authentication.
         */
        "auth_identity"?: string;
        /**
         * AuthPassword defines secret name and key at CRD namespace.
         */
        "auth_password"?: {
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
         * AuthSecret defines secrent name and key at CRD namespace.
         * It must contain the CRAM-MD5 secret.
         */
        "auth_secret"?: {
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
         * The username to use for authentication.
         */
        "auth_username"?: string;
        /**
         * The sender address.
         * fallback to global setting if empty
         */
        "from"?: string;
        /**
         * Further headers email header key/value pairs. Overrides any headers
         * previously set by the notification implementation.
         */
        "headers"?: {
          [key: string]: string;
        };
        /**
         * The hostname to identify to the SMTP server.
         */
        "hello"?: string;
        /**
         * The HTML body of the email notification.
         */
        "html"?: string;
        /**
         * The SMTP TLS requirement.
         * Note that Go does not support unencrypted connections to remote SMTP endpoints.
         */
        "require_tls"?: boolean;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * The SMTP host through which emails are sent.
         * fallback to global setting if empty
         */
        "smarthost"?: string;
        /**
         * The text body of the email notification.
         */
        "text"?: string;
        /**
         * TLS configuration
         */
        "tls_config"?: {
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
         * The email address to send notifications to.
         */
        "to"?: string;
      }>;
      "msteams_configs"?: Array<{
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * The text body of the teams notification.
         */
        "text"?: string;
        /**
         * The title of the teams notification.
         */
        "title"?: string;
        /**
         * The incoming webhook URL
         * one of `urlSecret` and `url` must be defined.
         */
        "webhook_url"?: string;
        /**
         * URLSecret defines secret name and key at the CRD namespace.
         * It must contain the webhook URL.
         * one of `urlSecret` and `url` must be defined.
         */
        "webhook_url_secret"?: {
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
      }>;
      /**
       * Name of the receiver. Must be unique across all items from the list.
       */
      "name": string;
      /**
       * OpsGenieConfigs defines ops genie notification configurations.
       */
      "opsgenie_configs"?: Array<{
        /**
         * Comma separated list of actions that will be available for the alert.
         */
        "actions"?: string;
        /**
         * The secret's key that contains the OpsGenie API key.
         * It must be at them same namespace as CRD
         * fallback to global setting if empty
         */
        "api_key"?: {
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
         * The URL to send OpsGenie API requests to.
         */
        "apiURL"?: string;
        /**
         * Description of the incident.
         */
        "description"?: string;
        /**
         * A set of arbitrary key/value pairs that provide further detail about the incident.
         */
        "details"?: {
          [key: string]: string;
        };
        /**
         * Optional field that can be used to specify which domain alert is related to.
         */
        "entity"?: string;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        /**
         * Alert text limited to 130 characters.
         */
        "message"?: string;
        /**
         * Additional alert note.
         */
        "note"?: string;
        /**
         * Priority level of alert. Possible values are P1, P2, P3, P4, and P5.
         */
        "priority"?: string;
        /**
         * List of responders responsible for notifications.
         */
        "responders"?: Array<{
          /**
           * ID of the responder.
           */
          "id"?: string;
          /**
           * Name of the responder.
           */
          "name"?: string;
          /**
           * Type of responder.
           */
          "type": string;
          /**
           * Username of the responder.
           */
          "username"?: string;
        }>;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * Backlink to the sender of the notification.
         */
        "source"?: string;
        /**
         * Comma separated list of tags attached to the notifications.
         */
        "tags"?: string;
        /**
         * Whether to update message and description of the alert in OpsGenie if it already exists
         * By default, the alert is never updated in OpsGenie, the new message only appears in activity log.
         */
        "update_alerts"?: boolean;
      }>;
      /**
       * PagerDutyConfigs defines pager duty notification configurations.
       */
      "pagerduty_configs"?: Array<{
        /**
         * The class/type of the event.
         */
        "class"?: string;
        /**
         * Client identification.
         */
        "client"?: string;
        /**
         * Backlink to the sender of notification.
         */
        "client_url"?: string;
        /**
         * The part or component of the affected system that is broken.
         */
        "component"?: string;
        /**
         * Description of the incident.
         */
        "description"?: string;
        /**
         * Arbitrary key/value pairs that provide further detail about the incident.
         */
        "details"?: {
          [key: string]: string;
        };
        /**
         * A cluster or grouping of sources.
         */
        "group"?: string;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        /**
         * Images to attach to the incident.
         */
        "images"?: Array<{
          "alt"?: string;
          "href"?: string;
          "source": string;
        }>;
        /**
         * Links to attach to the incident.
         */
        "links"?: Array<{
          "href": string;
          "text"?: string;
        }>;
        /**
         * The secret's key that contains the PagerDuty integration key (when using
         * Events API v2). Either this field or `serviceKey` needs to be defined.
         * It must be at them same namespace as CRD
         */
        "routing_key"?: {
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
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * The secret's key that contains the PagerDuty service key (when using
         * integration type "Prometheus"). Either this field or `routingKey` needs to
         * be defined.
         * It must be at them same namespace as CRD
         */
        "service_key"?: {
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
         * Severity of the incident.
         */
        "severity"?: string;
        /**
         * The URL to send requests to.
         */
        "url"?: string;
      }>;
      /**
       * PushoverConfigs defines push over notification configurations.
       */
      "pushover_configs"?: Array<{
        /**
         * How long your notification will continue to be retried for, unless the user
         * acknowledges the notification.
         */
        "expire"?: string;
        /**
         * Whether notification message is HTML or plain text.
         */
        "html"?: boolean;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        /**
         * Notification message.
         */
        "message"?: string;
        /**
         * Priority, see https://pushover.net/api#priority
         */
        "priority"?: string;
        /**
         * How often the Pushover servers will send the same notification to the user.
         * Must be at least 30 seconds.
         */
        "retry"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * The name of one of the sounds supported by device clients to override the user's default sound choice
         */
        "sound"?: string;
        /**
         * Notification title.
         */
        "title"?: string;
        /**
         * The secret's key that contains the registered application’s API token, see https://pushover.net/apps.
         * It must be at them same namespace as CRD
         */
        "token"?: {
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
         * A supplementary URL shown alongside the message.
         */
        "url"?: string;
        /**
         * A title for supplementary URL, otherwise just the URL is shown
         */
        "url_title"?: string;
        /**
         * The secret's key that contains the recipient user’s user key.
         * It must be at them same namespace as CRD
         */
        "user_key"?: {
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
      }>;
      /**
       * SlackConfigs defines slack notification configurations.
       */
      "slack_configs"?: Array<{
        /**
         * A list of Slack actions that are sent with each notification.
         */
        "actions"?: Array<{
          /**
           * SlackConfirmationField protect users from destructive actions or
           * particularly distinguished decisions by asking them to confirm their button
           * click one more time.
           * See https://api.slack.com/docs/interactive-message-field-guide#confirmation_fields
           * for more information.
           */
          "confirm"?: {
            "dismiss_text"?: string;
            "ok_text"?: string;
            "text": string;
            "title"?: string;
          };
          "name"?: string;
          "style"?: string;
          "text": string;
          "type": string;
          "url"?: string;
          "value"?: string;
        }>;
        /**
         * The secret's key that contains the Slack webhook URL.
         * It must be at them same namespace as CRD
         * fallback to global setting if empty
         */
        "api_url"?: {
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
        "callback_id"?: string;
        /**
         * The channel or user to send notifications to.
         */
        "channel"?: string;
        "color"?: string;
        "fallback"?: string;
        /**
         * A list of Slack fields that are sent with each notification.
         */
        "fields"?: Array<{
          "short"?: boolean;
          "title": string;
          "value": string;
        }>;
        "footer"?: string;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        "icon_emoji"?: string;
        "icon_url"?: string;
        "image_url"?: string;
        "link_names"?: boolean;
        "mrkdwn_in"?: Array<string>;
        "pretext"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        "short_fields"?: boolean;
        "text"?: string;
        "thumb_url"?: string;
        "title"?: string;
        "title_link"?: string;
        "username"?: string;
      }>;
      "sns_configs"?: Array<{
        /**
         * The api URL
         */
        "api_url"?: string;
        /**
         * SNS message attributes
         */
        "attributes"?: {
          [key: string]: string;
        };
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * The message content of the SNS notification.
         */
        "message"?: string;
        /**
         * Phone number if message is delivered via SMS
         * Specify this, topic_arn or target_arn
         */
        "phone_number"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * Configure the AWS Signature Verification 4 signing process
         */
        "sigv4"?: {
          /**
           * The AWS API keys. Both access_key and secret_key must be supplied or both must be blank.
           * If blank the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are used.
           */
          "access_key"?: string;
          /**
           * secret key selector to get the keys from a Kubernetes Secret
           */
          "access_key_selector"?: {
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
           * Named AWS profile used to authenticate
           */
          "profile"?: string;
          /**
           * AWS region, if blank the region from the default credentials chain is used
           */
          "region"?: string;
          /**
           * AWS Role ARN, an alternative to using AWS API keys
           */
          "role_arn"?: string;
          /**
           * secret key selector to get the keys from a Kubernetes Secret
           */
          "secret_key_selector"?: {
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
         * The subject line if message is delivered to an email endpoint.
         */
        "subject"?: string;
        /**
         * Mobile platform endpoint ARN if message is delivered via mobile notifications
         * Specify this, topic_arn or phone_number
         */
        "target_arn"?: string;
        /**
         * SNS topic ARN, either specify this, phone_number or target_arn
         */
        "topic_arn"?: string;
      }>;
      "telegram_configs"?: Array<{
        /**
         * APIUrl the Telegram API URL i.e. https://api.telegram.org.
         */
        "api_url"?: string;
        /**
         * BotToken token for the bot
         * https://core.telegram.org/bots/api
         */
        "bot_token": {
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
         * ChatID is ID of the chat where to send the messages.
         */
        "chat_id": number;
        /**
         * DisableNotifications
         */
        "disable_notifications"?: boolean;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        /**
         * Message is templated message
         */
        "message"?: string;
        /**
         * ParseMode for telegram message,
         * supported values are MarkdownV2, Markdown, Markdown and empty string for plain text.
         */
        "parse_mode"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
      }>;
      /**
       * VictorOpsConfigs defines victor ops notification configurations.
       */
      "victorops_configs"?: Array<{
        /**
         * The secret's key that contains the API key to use when talking to the VictorOps API.
         * It must be at them same namespace as CRD
         * fallback to global setting if empty
         */
        "api_key"?: {
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
         * The VictorOps API URL.
         */
        "api_url"?: string;
        /**
         * Adds optional custom fields
         * https://github.com/prometheus/alertmanager/blob/v0.24.0/config/notifiers.go#L537
         */
        "custom_fields"?: {
          [key: string]: string;
        };
        /**
         * Contains summary of the alerted problem.
         */
        "entity_display_name"?: string;
        /**
         * The HTTP client's configuration.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * Describes the behavior of the alert (CRITICAL, WARNING, INFO).
         */
        "message_type"?: string;
        /**
         * The monitoring tool the state message is from.
         */
        "monitoring_tool"?: string;
        /**
         * A key used to map the alert to a team.
         */
        "routing_key": string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * Contains long explanation of the alerted problem.
         */
        "state_message"?: string;
      }>;
      "webex_configs"?: Array<{
        /**
         * The Webex Teams API URL, i.e. https://webexapis.com/v1/messages
         */
        "api_url"?: string;
        /**
         * HTTP client configuration. You must use this configuration to supply the bot token as part of the HTTP `Authorization` header.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * The message body template
         */
        "message"?: string;
        /**
         * The ID of the Webex Teams room where to send the messages
         */
        "room_id": string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
      }>;
      /**
       * WebhookConfigs defines webhook notification configurations.
       */
      "webhook_configs"?: Array<{
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
        };
        /**
         * Maximum number of alerts to be sent per webhook message. When 0, all alerts are included.
         */
        "max_alerts"?: number;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        /**
         * URL to send requests to,
         * one of `urlSecret` and `url` must be defined.
         */
        "url"?: string;
        /**
         * URLSecret defines secret name and key at the CRD namespace.
         * It must contain the webhook URL.
         * one of `urlSecret` and `url` must be defined.
         */
        "url_secret"?: {
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
      }>;
      /**
       * WeChatConfigs defines wechat notification configurations.
       */
      "wechat_configs"?: Array<{
        "agent_id"?: string;
        /**
         * The secret's key that contains the WeChat API key.
         * The secret needs to be in the same namespace as the AlertmanagerConfig
         * fallback to global alertmanager setting if empty
         */
        "api_secret"?: {
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
         * The WeChat API URL.
         * fallback to global alertmanager setting if empty
         */
        "api_url"?: string;
        /**
         * The corp id for authentication.
         * fallback to global alertmanager setting if empty
         */
        "corp_id"?: string;
        /**
         * HTTP client configuration.
         */
        "http_config"?: {
          /**
           * Authorization header configuration for the client.
           * This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * Reference to the secret with value for authorization
             */
            "credentials"?: {
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
             * File with value for authorization
             */
            "credentialsFile"?: string;
            /**
             * Type of authorization, default to bearer
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client.
           */
          "basic_auth"?: {
            /**
             * Password defines reference for secret with password value
             * The secret needs to be in the same namespace as scrape object
             */
            "password"?: {
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
             * PasswordFile defines path to password file at disk
             * must be pre-mounted
             */
            "password_file"?: string;
            /**
             * Username defines reference for secret with username value
             * The secret needs to be in the same namespace as scrape object
             */
            "username"?: {
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
           * BearerTokenFile defines filename for bearer token, it must be mounted to pod.
           */
          "bearer_token_file"?: string;
          /**
           * The secret's key that contains the bearer token
           * It must be at them same namespace as CRD
           */
          "bearer_token_secret"?: {
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
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "client_id": {
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
             * The secret containing the OAuth2 client secret
             */
            "client_secret"?: {
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
             * ClientSecretFile defines path for client secret file.
             */
            "client_secret_file"?: string;
            /**
             * Parameters to append to the token URL
             */
            "endpoint_params"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "token_url": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tls_config"?: {
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
        };
        /**
         * API request data as defined by the WeChat API.
         */
        "message"?: string;
        "message_type"?: string;
        /**
         * SendResolved controls notify about resolved alerts.
         */
        "send_resolved"?: boolean;
        "to_party"?: string;
        "to_tag"?: string;
        "to_user"?: string;
      }>;
    }>;
    /**
     * Route definition for alertmanager, may include nested routes.
     */
    "route": {
      /**
       * ActiveTimeIntervals Times when the route should be active
       * These must match the name at time_intervals
       */
      "active_time_intervals"?: Array<string>;
      /**
       * Continue indicating whether an alert should continue matching subsequent
       * sibling nodes. It will always be true for the first-level route if disableRouteContinueEnforce for vmalertmanager not set.
       */
      "continue"?: boolean;
      /**
       * List of labels to group by.
       */
      "group_by"?: Array<string>;
      /**
       * How long to wait before sending an updated notification.
       */
      "group_interval"?: string;
      /**
       * How long to wait before sending the initial notification.
       */
      "group_wait"?: string;
      /**
       * List of matchers that the alert’s labels should match. For the first
       * level route, the operator adds a namespace: "CRD_NS" matcher.
       * https://prometheus.io/docs/alerting/latest/configuration/#matcher
       */
      "matchers"?: Array<string>;
      /**
       * MuteTimeIntervals is a list of interval names that will mute matched alert
       */
      "mute_time_intervals"?: Array<string>;
      /**
       * Name of the receiver for this route.
       */
      "receiver": string;
      /**
       * How long to wait before repeating the last notification.
       */
      "repeat_interval"?: string;
      /**
       * Child routes.
       * https://prometheus.io/docs/alerting/latest/configuration/#route
       */
      "routes"?: Array<any>;
    };
    /**
     * TimeIntervals defines named interval for active/mute notifications interval
     * See https://prometheus.io/docs/alerting/latest/configuration/#time_interval
     */
    "time_intervals"?: Array<{
      /**
       * Name of interval
       */
      "name": string;
      /**
       * TimeIntervals interval configuration
       */
      "time_intervals": Array<{
        /**
         * DayOfMonth defines list of numerical days in the month. Days begin at 1. Negative values are also accepted.
         * for example, ['1:5', '-3:-1']
         */
        "days_of_month"?: Array<string>;
        /**
         * Location in golang time location form, e.g. UTC
         */
        "location"?: string;
        /**
         * Months  defines list of calendar months identified by a case-insensitive name (e.g. ‘January’) or numeric 1.
         * For example, ['1:3', 'may:august', 'december']
         */
        "months"?: Array<string>;
        /**
         * Times defines time range for mute
         */
        "times"?: Array<{
          /**
           * EndTime for example HH:MM
           */
          "end_time": string;
          /**
           * StartTime for example  HH:MM
           */
          "start_time": string;
        }>;
        /**
         * Weekdays defines list of days of the week, where the week begins on Sunday and ends on Saturday.
         */
        "weekdays"?: Array<string>;
        /**
         * Years defines numerical list of years, ranges are accepted.
         * For example, ['2020:2022', '2030']
         */
        "years"?: Array<string>;
      }>;
    }>;
  };
  /**
   * VMAlertmanagerConfigStatus defines the observed state of VMAlertmanagerConfig
   */
  "status"?: {
    "lastErrorParentAlertmanagerName"?: string;
    /**
     * LastSyncError contains error message for unsuccessful config generation
     */
    "lastSyncError"?: string;
    /**
     * LastSyncErrorTimestamp defines time when error occured
     */
    "lastSyncErrorTimestamp"?: number;
    /**
     * Status defines CRD processing status
     */
    "status"?: string;
  };
}

/**
 * VMAlertmanagerConfig is the Schema for the vmalertmanagerconfigs API
 */
export class VMAlertmanagerConfig extends Model<IVMAlertmanagerConfig> implements IVMAlertmanagerConfig {
  "apiVersion": IVMAlertmanagerConfig["apiVersion"];
  "kind": IVMAlertmanagerConfig["kind"];
  "metadata"?: IVMAlertmanagerConfig["metadata"];
  "spec"?: IVMAlertmanagerConfig["spec"];
  "status"?: IVMAlertmanagerConfig["status"];

static apiVersion: IVMAlertmanagerConfig["apiVersion"] = "operator.victoriametrics.com/v1beta1";
static kind: IVMAlertmanagerConfig["kind"] = "VMAlertmanagerConfig";
static is = createTypeMetaGuard<IVMAlertmanagerConfig>(VMAlertmanagerConfig);

constructor(data?: ModelData<IVMAlertmanagerConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: VMAlertmanagerConfig.apiVersion,
    kind: VMAlertmanagerConfig.kind,
    ...data
  } as IVMAlertmanagerConfig);
}
}


setValidateFunc(VMAlertmanagerConfig, validate as ValidateFunc<IVMAlertmanagerConfig>);
