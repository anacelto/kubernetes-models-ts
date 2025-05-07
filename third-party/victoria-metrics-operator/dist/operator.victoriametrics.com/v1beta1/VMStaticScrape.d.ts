import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMStaticScrape  defines static targets configuration for scraping.
 */
export interface IVMStaticScrape {
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
    "kind": "VMStaticScrape";
    "metadata"?: IObjectMeta;
    /**
     * VMStaticScrapeSpec defines the desired state of VMStaticScrape.
     */
    "spec"?: {
        /**
         * JobName name of job.
         */
        "jobName"?: string;
        /**
         * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
         */
        "sampleLimit"?: number;
        /**
         * SeriesLimit defines per-scrape limit on number of unique time series
         * a single target can expose during all the scrapes on the time window of 24h.
         */
        "seriesLimit"?: number;
        /**
         * A list of target endpoints to scrape metrics from.
         */
        "targetEndpoints": Array<{
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
             * FollowRedirects controls redirects for scraping.
             */
            "follow_redirects"?: boolean;
            /**
             * HonorLabels chooses the metric's labels on collisions with target labels.
             */
            "honorLabels"?: boolean;
            /**
             * HonorTimestamps controls whether vmagent respects the timestamps present in scraped data.
             */
            "honorTimestamps"?: boolean;
            /**
             * Interval at which metrics should be scraped
             */
            "interval"?: string;
            /**
             * Labels static labels for targets.
             */
            "labels"?: {
                [key: string]: string;
            };
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
             * Targets static targets addresses in form of ["192.122.55.55:9100","some-name:9100"].
             */
            "targets": Array<string>;
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
        }>;
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
 * VMStaticScrape  defines static targets configuration for scraping.
 */
export declare class VMStaticScrape extends Model<IVMStaticScrape> implements IVMStaticScrape {
    "apiVersion": IVMStaticScrape["apiVersion"];
    "kind": IVMStaticScrape["kind"];
    "metadata"?: IVMStaticScrape["metadata"];
    "spec"?: IVMStaticScrape["spec"];
    "status"?: IVMStaticScrape["status"];
    static apiVersion: IVMStaticScrape["apiVersion"];
    static kind: IVMStaticScrape["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMStaticScrape>;
    constructor(data?: ModelData<IVMStaticScrape>);
}
