import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMScrapeConfig specifies a set of targets and parameters describing how to scrape them.
 */
export interface IVMScrapeConfig {
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
    "kind": "VMScrapeConfig";
    "metadata"?: IObjectMeta;
    /**
     * VMScrapeConfigSpec defines the desired state of VMScrapeConfig
     */
    "spec"?: {
        /**
         * Authorization with http header Authorization
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
         * AzureSDConfigs defines a list of Azure service discovery configurations.
         */
        "azureSDConfigs"?: Array<{
            /**
             * # The authentication method, either OAuth or ManagedIdentity.
             * See https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview
             */
            "authenticationMethod"?: "OAuth" | "ManagedIdentity";
            /**
             * Optional client ID. Only required with the OAuth authentication method.
             */
            "clientID"?: string;
            /**
             * Optional client secret. Only required with the OAuth authentication method.
             */
            "clientSecret"?: {
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
             * The Azure environment.
             */
            "environment"?: string;
            /**
             * The port to scrape metrics from. If using the public IP address, this must
             * instead be specified in the relabeling rule.
             */
            "port"?: number;
            /**
             * Optional resource group name. Limits discovery to this resource group.
             */
            "resourceGroup"?: string;
            /**
             * The subscription ID. Always required.
             */
            "subscriptionID": string;
            /**
             * Optional tenant ID. Only required with the OAuth authentication method.
             */
            "tenantID"?: string;
        }>;
        /**
         * BasicAuth allow an endpoint to authenticate over basic authentication
         */
        "basicAuth"?: {
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
         * File to read bearer token for scraping targets.
         */
        "bearerTokenFile"?: string;
        /**
         * Secret to mount to read bearer token for scraping targets. The secret
         * needs to be in the same namespace as the scrape object and accessible by
         * the victoria-metrics operator.
         */
        "bearerTokenSecret"?: {
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
         * ConsulSDConfigs defines a list of Consul service discovery configurations.
         */
        "consulSDConfigs"?: Array<{
            /**
             * Allow stale Consul results (see https://developer.hashicorp.com/consul/api-docs/features/consistency). Will reduce load on Consul.
             * If unset, use its default value.
             */
            "allowStale"?: boolean;
            /**
             * Authorization header to use on every scrape request.
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
             * BasicAuth information to use on every scrape request.
             */
            "basicAuth"?: {
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
             * Consul Datacenter name, if not provided it will use the local Consul Agent Datacenter.
             */
            "datacenter"?: string;
            /**
             * Configure whether HTTP requests follow HTTP 3xx redirects.
             * If unset, use its default value.
             */
            "followRedirects"?: boolean;
            /**
             * Namespaces are only supported in Consul Enterprise.
             */
            "namespace"?: string;
            /**
             * Node metadata key/value pairs to filter nodes for a given service.
             */
            "nodeMeta"?: {
                [key: string]: string;
            };
            /**
             * OAuth2 defines auth configuration
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
             * Admin Partitions are only supported in Consul Enterprise.
             */
            "partition"?: string;
            /**
             * ProxyClientConfig configures proxy auth settings for scraping
             * See [feature description](https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy)
             */
            "proxy_client_config"?: {
                /**
                 * BasicAuth allow an endpoint to authenticate over basic authentication
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
                 * SecretKeySelector selects a key of a Secret.
                 */
                "bearer_token"?: {
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
                "bearer_token_file"?: string;
                /**
                 * TLSConfig specifies TLSConfig configuration parameters.
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
             * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
             */
            "proxyURL"?: string;
            /**
             * HTTP Scheme default "http"
             */
            "scheme"?: "HTTP" | "HTTPS";
            /**
             * A valid string consisting of a hostname or IP followed by an optional port number.
             */
            "server": string;
            /**
             * A list of services for which targets are retrieved. If omitted, all services are scraped.
             */
            "services"?: Array<string>;
            /**
             * The string by which Consul tags are joined into the tag label.
             * If unset, use its default value.
             */
            "tagSeparator"?: string;
            /**
             * An optional list of tags used to filter nodes for a given service. Services must contain all tags in the list.
             */
            "tags"?: Array<string>;
            /**
             * TLS configuration to use on every scrape request
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
             * Consul ACL TokenRef, if not provided it will use the ACL from the local Consul Agent.
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
        }>;
        /**
         * DigitalOceanSDConfigs defines a list of DigitalOcean service discovery configurations.
         */
        "digitalOceanSDConfigs"?: Array<{
            /**
             * Authorization header to use on every scrape request.
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
             * Configure whether HTTP requests follow HTTP 3xx redirects.
             */
            "followRedirects"?: boolean;
            /**
             * OAuth2 defines auth configuration
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
             * The port to scrape metrics from.
             */
            "port"?: number;
            /**
             * ProxyClientConfig configures proxy auth settings for scraping
             * See [feature description](https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy)
             */
            "proxy_client_config"?: {
                /**
                 * BasicAuth allow an endpoint to authenticate over basic authentication
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
                 * SecretKeySelector selects a key of a Secret.
                 */
                "bearer_token"?: {
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
                "bearer_token_file"?: string;
                /**
                 * TLSConfig specifies TLSConfig configuration parameters.
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
             * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
             */
            "proxyURL"?: string;
            /**
             * TLS configuration to use on every scrape request
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
        }>;
        /**
         * DNSSDConfigs defines a list of DNS service discovery configurations.
         */
        "dnsSDConfigs"?: Array<{
            /**
             * A list of DNS domain names to be queried.
             */
            "names": Array<string>;
            /**
             * The port number used if the query type is not SRV
             * Ignored for SRV records
             */
            "port"?: number;
            "type"?: "SRV" | "A" | "AAAA" | "MX";
        }>;
        /**
         * EC2SDConfigs defines a list of EC2 service discovery configurations.
         */
        "ec2SDConfigs"?: Array<{
            /**
             * AccessKey is the AWS API key.
             */
            "accessKey"?: {
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
             * Filters can be used optionally to filter the instance list by other criteria.
             * Available filter criteria can be found here:
             * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html
             * Filter API documentation: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Filter.html
             */
            "filters"?: Array<{
                "name": string;
                "values": Array<string>;
            }>;
            /**
             * The port to scrape metrics from. If using the public IP address, this must
             * instead be specified in the relabeling rule.
             */
            "port"?: number;
            /**
             * The AWS region
             */
            "region"?: string;
            /**
             * AWS Role ARN, an alternative to using AWS API keys.
             */
            "roleARN"?: string;
            /**
             * SecretKey is the AWS API secret.
             */
            "secretKey"?: {
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
         * FileSDConfigs defines a list of file service discovery configurations.
         */
        "fileSDConfigs"?: Array<{
            /**
             * List of files to be used for file discovery.
             */
            "files": Array<string>;
        }>;
        /**
         * FollowRedirects controls redirects for scraping.
         */
        "follow_redirects"?: boolean;
        /**
         * GCESDConfigs defines a list of GCE service discovery configurations.
         */
        "gceSDConfigs"?: Array<{
            /**
             * Filter can be used optionally to filter the instance list by other criteria
             * Syntax of this filter is described in the filter query parameter section:
             * https://cloud.google.com/compute/docs/reference/latest/instances/list
             */
            "filter"?: string;
            /**
             * The port to scrape metrics from. If using the public IP address, this must
             * instead be specified in the relabeling rule.
             */
            "port"?: number;
            /**
             * The Google Cloud Project ID
             */
            "project": string;
            /**
             * The tag separator is used to separate the tags on concatenation
             */
            "tagSeparator"?: string;
            /**
             * The zone of the scrape targets. If you need multiple zones use multiple GCESDConfigs.
             */
            "zone": string;
        }>;
        /**
         * HonorLabels chooses the metric's labels on collisions with target labels.
         */
        "honorLabels"?: boolean;
        /**
         * HonorTimestamps controls whether vmagent respects the timestamps present in scraped data.
         */
        "honorTimestamps"?: boolean;
        /**
         * HTTPSDConfigs defines a list of HTTP service discovery configurations.
         */
        "httpSDConfigs"?: Array<{
            /**
             * Authorization header to use on every scrape request.
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
             * BasicAuth information to use on every scrape request.
             */
            "basicAuth"?: {
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
             * ProxyClientConfig configures proxy auth settings for scraping
             * See [feature description](https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy)
             */
            "proxy_client_config"?: {
                /**
                 * BasicAuth allow an endpoint to authenticate over basic authentication
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
                 * SecretKeySelector selects a key of a Secret.
                 */
                "bearer_token"?: {
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
                "bearer_token_file"?: string;
                /**
                 * TLSConfig specifies TLSConfig configuration parameters.
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
             * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
             */
            "proxyURL"?: string;
            /**
             * TLS configuration to use on every scrape request
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
             * URL from which the targets are fetched.
             */
            "url": string;
        }>;
        /**
         * Interval at which metrics should be scraped
         */
        "interval"?: string;
        /**
         * KubernetesSDConfigs defines a list of Kubernetes service discovery configurations.
         */
        "kubernetesSDConfigs"?: Array<{
            /**
             * The API server address consisting of a hostname or IP address followed
             * by an optional port number.
             * If left empty, assuming process is running inside
             * of the cluster. It will discover API servers automatically and use the pod's
             * CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/.
             */
            "apiServer"?: string;
            /**
             * AttachMetadata configures metadata attaching from service discovery
             */
            "attach_metadata"?: {
                /**
                 * Node instructs vmagent to add node specific metadata from service discovery
                 * Valid for roles: pod, endpoints, endpointslice.
                 */
                "node"?: boolean;
            };
            /**
             * Authorization header to use on every scrape request.
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
             * BasicAuth information to use on every scrape request.
             */
            "basicAuth"?: {
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
             * Configure whether HTTP requests follow HTTP 3xx redirects.
             */
            "followRedirects"?: boolean;
            /**
             * Optional namespace discovery. If omitted, discover targets across all namespaces.
             */
            "namespaces"?: {
                /**
                 * List of namespaces where to watch for resources.
                 * If empty and `ownNamespace` isn't true, watch for resources in all namespaces.
                 */
                "names"?: Array<string>;
                /**
                 * Includes the namespace in which the pod exists to the list of watched namespaces.
                 */
                "ownNamespace"?: boolean;
            };
            /**
             * OAuth2 defines auth configuration
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
             * ProxyClientConfig configures proxy auth settings for scraping
             * See [feature description](https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy)
             */
            "proxy_client_config"?: {
                /**
                 * BasicAuth allow an endpoint to authenticate over basic authentication
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
                 * SecretKeySelector selects a key of a Secret.
                 */
                "bearer_token"?: {
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
                "bearer_token_file"?: string;
                /**
                 * TLSConfig specifies TLSConfig configuration parameters.
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
             * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
             */
            "proxyURL"?: string;
            /**
             * Role of the Kubernetes entities that should be discovered.
             */
            "role": string;
            /**
             * Selector to select objects.
             */
            "selectors"?: Array<{
                "field"?: string;
                "label"?: string;
                "role": string;
            }>;
            /**
             * TLS configuration to use on every scrape request
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
        }>;
        /**
         * MaxScrapeSize defines a maximum size of scraped data for a job
         */
        "max_scrape_size"?: string;
        /**
         * MetricRelabelConfigs to apply to samples after scrapping.
         */
        "metricRelabelConfigs"?: Array<{
            /**
             * Action to perform based on regex matching. Default is 'replace'
             */
            "action"?: string;
            /**
             * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
             */
            "if"?: any;
            /**
             * Labels is used together with Match for `action: graphite`
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Match is used together with Labels for `action: graphite`
             */
            "match"?: string;
            /**
             * Modulus to take of the hash of the source label values.
             */
            "modulus"?: number;
            /**
             * Regular expression against which the extracted value is matched. Default is '(.\*)'
             * victoriaMetrics supports multiline regex joined with |
             * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
             */
            "regex"?: any;
            /**
             * Replacement value against which a regex replace is performed if the
             * regular expression matches. Regex capture groups are available. Default is '$1'
             */
            "replacement"?: string;
            /**
             * Separator placed between concatenated source label values. default is ';'.
             */
            "separator"?: string;
            /**
             * UnderScoreSourceLabels - additional form of source labels source_labels
             * for compatibility with original relabel config.
             * if set  both sourceLabels and source_labels, sourceLabels has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "source_labels"?: Array<string>;
            /**
             * The source labels select values from existing labels. Their content is concatenated
             * using the configured separator and matched against the configured regular expression
             * for the replace, keep, and drop actions.
             */
            "sourceLabels"?: Array<string>;
            /**
             * UnderScoreTargetLabel - additional form of target label - target_label
             * for compatibility with original relabel config.
             * if set  both targetLabel and target_label, targetLabel has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "target_label"?: string;
            /**
             * Label to which the resulting value is written in a replace action.
             * It is mandatory for replace actions. Regex capture groups are available.
             */
            "targetLabel"?: string;
        }>;
        /**
         * OAuth2 defines auth configuration
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
         * OpenStackSDConfigs defines a list of OpenStack service discovery configurations.
         */
        "openstackSDConfigs"?: Array<{
            /**
             * Whether the service discovery should list all instances for all projects.
             * It is only relevant for the 'instance' role and usually requires admin permissions.
             */
            "allTenants"?: boolean;
            /**
             * ApplicationCredentialID
             */
            "applicationCredentialId"?: string;
            /**
             * The ApplicationCredentialID or ApplicationCredentialName fields are
             * required if using an application credential to authenticate. Some providers
             * allow you to create an application credential to authenticate rather than a
             * password.
             */
            "applicationCredentialName"?: string;
            /**
             * The applicationCredentialSecret field is required if using an application
             * credential to authenticate.
             */
            "applicationCredentialSecret"?: {
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
             * Availability of the endpoint to connect to.
             */
            "availability"?: "Public" | "public" | "Admin" | "admin" | "Internal" | "internal";
            /**
             * DomainID
             */
            "domainID"?: string;
            /**
             * At most one of domainId and domainName must be provided if using username
             * with Identity V3. Otherwise, either are optional.
             */
            "domainName"?: string;
            /**
             * IdentityEndpoint specifies the HTTP endpoint that is required to work with
             * the Identity API of the appropriate version.
             */
            "identityEndpoint"?: string;
            /**
             * Password for the Identity V2 and V3 APIs. Consult with your provider's
             * control panel to discover your account's preferred method of authentication.
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
             * The port to scrape metrics from. If using the public IP address, this must
             * instead be specified in the relabeling rule.
             */
            "port"?: number;
            /**
             *  ProjectID
             */
            "projectID"?: string;
            /**
             * The ProjectId and ProjectName fields are optional for the Identity V2 API.
             * Some providers allow you to specify a ProjectName instead of the ProjectId.
             * Some require both. Your provider's authentication policies will determine
             * how these fields influence authentication.
             */
            "projectName"?: string;
            /**
             * The OpenStack Region.
             */
            "region": string;
            /**
             * The OpenStack role of entities that should be discovered.
             */
            "role": "Instance" | "instance" | "Hypervisor" | "hypervisor";
            /**
             * TLS configuration to use on every scrape request
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
             * UserID
             */
            "userid"?: string;
            /**
             * Username is required if using Identity V2 API. Consult with your provider's
             * control panel to discover your account's username.
             * In Identity V3, either userid or a combination of username
             * and domainId or domainName are needed
             */
            "username"?: string;
        }>;
        /**
         * Optional HTTP URL parameters
         */
        "params"?: {
            [key: string]: Array<string>;
        };
        /**
         * HTTP path to scrape for metrics.
         */
        "path"?: string;
        /**
         * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
         */
        "proxyURL"?: string;
        /**
         * RelabelConfigs to apply to samples during service discovery.
         */
        "relabelConfigs"?: Array<{
            /**
             * Action to perform based on regex matching. Default is 'replace'
             */
            "action"?: string;
            /**
             * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
             */
            "if"?: any;
            /**
             * Labels is used together with Match for `action: graphite`
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Match is used together with Labels for `action: graphite`
             */
            "match"?: string;
            /**
             * Modulus to take of the hash of the source label values.
             */
            "modulus"?: number;
            /**
             * Regular expression against which the extracted value is matched. Default is '(.\*)'
             * victoriaMetrics supports multiline regex joined with |
             * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
             */
            "regex"?: any;
            /**
             * Replacement value against which a regex replace is performed if the
             * regular expression matches. Regex capture groups are available. Default is '$1'
             */
            "replacement"?: string;
            /**
             * Separator placed between concatenated source label values. default is ';'.
             */
            "separator"?: string;
            /**
             * UnderScoreSourceLabels - additional form of source labels source_labels
             * for compatibility with original relabel config.
             * if set  both sourceLabels and source_labels, sourceLabels has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "source_labels"?: Array<string>;
            /**
             * The source labels select values from existing labels. Their content is concatenated
             * using the configured separator and matched against the configured regular expression
             * for the replace, keep, and drop actions.
             */
            "sourceLabels"?: Array<string>;
            /**
             * UnderScoreTargetLabel - additional form of target label - target_label
             * for compatibility with original relabel config.
             * if set  both targetLabel and target_label, targetLabel has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "target_label"?: string;
            /**
             * Label to which the resulting value is written in a replace action.
             * It is mandatory for replace actions. Regex capture groups are available.
             */
            "targetLabel"?: string;
        }>;
        /**
         * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
         */
        "sampleLimit"?: number;
        /**
         * HTTP scheme to use for scraping.
         */
        "scheme"?: "http" | "https" | "HTTPS" | "HTTP";
        /**
         * ScrapeInterval is the same as Interval and has priority over it.
         * one of scrape_interval or interval can be used
         */
        "scrape_interval"?: string;
        /**
         * Timeout after which the scrape is ended
         */
        "scrapeTimeout"?: string;
        /**
         * SeriesLimit defines per-scrape limit on number of unique time series
         * a single target can expose during all the scrapes on the time window of 24h.
         */
        "seriesLimit"?: number;
        /**
         * StaticConfigs defines a list of static targets with a common label set.
         */
        "staticConfigs"?: Array<{
            /**
             * Labels assigned to all metrics scraped from the targets.
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * List of targets for this static configuration.
             */
            "targets"?: Array<string>;
        }>;
        /**
         * TLSConfig configuration to use when scraping the endpoint
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
         * VMScrapeParams defines VictoriaMetrics specific scrape parameters
         */
        "vm_scrape_params"?: {
            /**
             * DisableCompression
             */
            "disable_compression"?: boolean;
            /**
             * disable_keepalive allows disabling HTTP keep-alive when scraping targets.
             * By default, HTTP keep-alive is enabled, so TCP connections to scrape targets
             * could be re-used.
             * See https://docs.victoriametrics.com/vmagent#scrape_config-enhancements
             */
            "disable_keep_alive"?: boolean;
            /**
             * Headers allows sending custom headers to scrape targets
             * must be in of semicolon separated header with it's value
             * eg:
             * headerName: headerValue
             * vmagent supports since 1.79.0 version
             */
            "headers"?: Array<string>;
            "no_stale_markers"?: boolean;
            /**
             * ProxyClientConfig configures proxy auth settings for scraping
             * See feature description https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy
             */
            "proxy_client_config"?: {
                /**
                 * BasicAuth allow an endpoint to authenticate over basic authentication
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
                 * SecretKeySelector selects a key of a Secret.
                 */
                "bearer_token"?: {
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
                "bearer_token_file"?: string;
                /**
                 * TLSConfig specifies TLSConfig configuration parameters.
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
            "scrape_align_interval"?: string;
            "scrape_offset"?: string;
            "stream_parse"?: boolean;
        };
    };
    /**
     * ScrapeObjectStatus defines the observed state of ScrapeObjects
     */
    "status"?: {
        /**
         * LastSyncError contains error message for unsuccessful config generation
         */
        "lastSyncError"?: string;
        /**
         * Status defines update status of resource
         */
        "status"?: string;
    };
}
/**
 * VMScrapeConfig specifies a set of targets and parameters describing how to scrape them.
 */
export declare class VMScrapeConfig extends Model<IVMScrapeConfig> implements IVMScrapeConfig {
    "apiVersion": IVMScrapeConfig["apiVersion"];
    "kind": IVMScrapeConfig["kind"];
    "metadata"?: IVMScrapeConfig["metadata"];
    "spec"?: IVMScrapeConfig["spec"];
    "status"?: IVMScrapeConfig["status"];
    static apiVersion: IVMScrapeConfig["apiVersion"];
    static kind: IVMScrapeConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMScrapeConfig>;
    constructor(data?: ModelData<IVMScrapeConfig>);
}
