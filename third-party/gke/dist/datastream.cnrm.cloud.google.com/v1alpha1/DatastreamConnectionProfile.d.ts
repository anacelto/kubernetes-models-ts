import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDatastreamConnectionProfile {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "datastream.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DatastreamConnectionProfile";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * BigQuery warehouse profile.
         */
        "bigqueryProfile"?: {};
        /**
         * Display name.
         */
        "displayName": string;
        /**
         * Forward SSH tunnel connectivity.
         */
        "forwardSshConnectivity"?: {
            /**
             * Hostname for the SSH tunnel.
             */
            "hostname": string;
            /**
             * Immutable. SSH password.
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
             * Port for the SSH tunnel.
             */
            "port"?: number;
            /**
             * Immutable. SSH private key.
             */
            "privateKey"?: {
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
             * Username for the SSH tunnel.
             */
            "username": string;
        };
        /**
         * Cloud Storage bucket profile.
         */
        "gcsProfile"?: {
            /**
             * The Cloud Storage bucket name.
             */
            "bucket": string;
            /**
             * The root path inside the Cloud Storage bucket.
             */
            "rootPath"?: string;
        };
        /**
         * Immutable. The name of the location this connection profile is located in.
         */
        "location": string;
        /**
         * MySQL database profile.
         */
        "mysqlProfile"?: {
            /**
             * Hostname for the MySQL connection.
             */
            "hostname": string;
            /**
             * Password for the MySQL connection.
             */
            "password": {
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
             * Port for the MySQL connection.
             */
            "port"?: number;
            /**
             * SSL configuration for the MySQL connection.
             */
            "sslConfig"?: {
                /**
                 * Immutable. PEM-encoded certificate of the CA that signed the source database
                 * server's certificate.
                 */
                "caCertificate"?: {
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
                 * Indicates whether the clientKey field is set.
                 */
                "caCertificateSet"?: boolean;
                /**
                 * Immutable. PEM-encoded certificate that will be used by the replica to
                 * authenticate against the source database server. If this field
                 * is used then the 'clientKey' and the 'caCertificate' fields are
                 * mandatory.
                 */
                "clientCertificate"?: {
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
                 * Indicates whether the clientCertificate field is set.
                 */
                "clientCertificateSet"?: boolean;
                /**
                 * Immutable. PEM-encoded private key associated with the Client Certificate.
                 * If this field is used then the 'client_certificate' and the
                 * 'ca_certificate' fields are mandatory.
                 */
                "clientKey"?: {
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
                 * Indicates whether the clientKey field is set.
                 */
                "clientKeySet"?: boolean;
            };
            /**
             * Username for the MySQL connection.
             */
            "username": string;
        };
        /**
         * Oracle database profile.
         */
        "oracleProfile"?: {
            /**
             * Connection string attributes.
             */
            "connectionAttributes"?: {
                [key: string]: string;
            };
            /**
             * Database for the Oracle connection.
             */
            "databaseService": string;
            /**
             * Hostname for the Oracle connection.
             */
            "hostname": string;
            /**
             * Password for the Oracle connection.
             */
            "password": {
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
             * Port for the Oracle connection.
             */
            "port"?: number;
            /**
             * Username for the Oracle connection.
             */
            "username": string;
        };
        /**
         * PostgreSQL database profile.
         */
        "postgresqlProfile"?: {
            /**
             * Database for the PostgreSQL connection.
             */
            "database": string;
            /**
             * Hostname for the PostgreSQL connection.
             */
            "hostname": string;
            /**
             * Password for the PostgreSQL connection.
             */
            "password": {
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
             * Port for the PostgreSQL connection.
             */
            "port"?: number;
            /**
             * Username for the PostgreSQL connection.
             */
            "username": string;
        };
        /**
         * Private connectivity.
         */
        "privateConnectivity"?: {
            /**
             * A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.
             */
            "privateConnection": string;
        };
        /**
         * The project that this resource belongs to.
         */
        "projectRef": {
            /**
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
         * Immutable. Optional. The connectionProfileId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
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
         * The resource's name.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class DatastreamConnectionProfile extends Model<IDatastreamConnectionProfile> implements IDatastreamConnectionProfile {
    "apiVersion": IDatastreamConnectionProfile["apiVersion"];
    "kind": IDatastreamConnectionProfile["kind"];
    "metadata"?: IDatastreamConnectionProfile["metadata"];
    "spec": IDatastreamConnectionProfile["spec"];
    "status"?: IDatastreamConnectionProfile["status"];
    static apiVersion: IDatastreamConnectionProfile["apiVersion"];
    static kind: IDatastreamConnectionProfile["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDatastreamConnectionProfile>;
    constructor(data?: ModelData<IDatastreamConnectionProfile>);
}
