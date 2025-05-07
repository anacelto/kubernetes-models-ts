import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaDataSource is the Schema for the grafanadatasources API
 */
export interface IGrafanaDataSource {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "integreatly.org/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GrafanaDataSource";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaDataSourceSpec defines the desired state of GrafanaDataSource
     */
    "spec"?: {
        "datasources": Array<{
            "access"?: string;
            "basicAuth"?: boolean;
            "basicAuthPassword"?: string;
            "basicAuthUser"?: string;
            /**
             * CustomJsonData will be used in place of jsonData, if present, and supports arbitrary JSON, not just those of official datasources
             */
            "customJsonData"?: {};
            /**
             * SecureCustomJsonData will be used in place of secureJsonData, if present, and supports arbitrary JSON, not just those of official datasources
             */
            "customSecureJsonData"?: {};
            "database"?: string;
            "editable"?: boolean;
            "isDefault"?: boolean;
            /**
             * GrafanaDataSourceJsonData contains the most common json options See https://grafana.com/docs/administration/provisioning/#datasources
             */
            "jsonData"?: {
                /**
                 * Useful fields for clickhouse datasource See https://github.com/Vertamedia/clickhouse-grafana/tree/master/dist/README.md#configure-the-datasource-with-provisioning See https://github.com/Vertamedia/clickhouse-grafana/tree/master/src/datasource.ts#L44
                 */
                "addCorsHeader"?: boolean;
                /**
                 * AlertManagerUID if null use the internal grafana alertmanager
                 */
                "alertmanagerUid"?: string;
                "allowInfraExplore"?: boolean;
                "apiToken"?: string;
                /**
                 * Fields for Azure data sources
                 */
                "appInsightsAppId"?: string;
                "assumeRoleArn"?: string;
                "authType"?: string;
                "authenticationType"?: string;
                "azureLogAnalyticsSameAs"?: string;
                "clientEmail"?: string;
                "clientId"?: string;
                "cloudName"?: string;
                "clusterUrl"?: string;
                "connMaxLifetime"?: number;
                "customMetricsNamespaces"?: string;
                /**
                 * Fields for Prometheus data sources
                 */
                "customQueryParameters"?: string;
                "defaultBucket"?: string;
                "defaultDatabase"?: string;
                "defaultProject"?: string;
                "defaultRegion"?: string;
                "derivedFields"?: Array<{
                    "datasourceUid"?: string;
                    "matcherRegex"?: string;
                    "name"?: string;
                    "url"?: string;
                }>;
                "encrypt"?: string;
                "esVersion"?: number | string;
                "exemplarTraceIdDestinations"?: Array<{
                    "datasourceUid"?: string;
                    "name"?: string;
                    "url"?: string;
                    "urlDisplayLabel"?: string;
                }>;
                /**
                 * Fields for Github data sources
                 */
                "githubUrl"?: string;
                "graphiteVersion"?: string;
                /**
                 * Custom HTTP headers for datasources See https://grafana.com/docs/grafana/latest/administration/provisioning/#datasources
                 */
                "httpHeaderName1"?: string;
                "httpHeaderName2"?: string;
                "httpHeaderName3"?: string;
                "httpHeaderName4"?: string;
                "httpHeaderName5"?: string;
                "httpHeaderName6"?: string;
                "httpHeaderName7"?: string;
                "httpHeaderName8"?: string;
                "httpHeaderName9"?: string;
                "httpMethod"?: string;
                /**
                 * Fields for InfluxDB data sources
                 */
                "httpMode"?: string;
                /**
                 * Fields for Alertmanager data sources
                 */
                "implementation"?: string;
                "interval"?: string;
                "logAnalyticsClientId"?: string;
                "logAnalyticsDefaultWorkspace"?: string;
                "logAnalyticsSubscriptionId"?: string;
                "logAnalyticsTenantId"?: string;
                "logLevelField"?: string;
                "logMessageField"?: string;
                /**
                 * ManageAlerts turns on alert management from UI
                 */
                "manageAlerts"?: boolean;
                "maxIdleConns"?: number;
                /**
                 * Fields for Loki data sources
                 */
                "maxLines"?: number;
                "maxOpenConns"?: number;
                "nodeGraph"?: {
                    "enabled"?: boolean;
                };
                "oauthPassThru"?: boolean;
                "organization"?: string;
                "port"?: number;
                "postgresVersion"?: number;
                "queryTimeout"?: string;
                "search"?: {
                    "hide"?: boolean;
                };
                /**
                 * Fields for Grafana Clickhouse data sources
                 */
                "server"?: string;
                "serviceMap"?: {
                    "datasourceUid"?: string;
                };
                "showOffline"?: boolean;
                "sigV4AssumeRoleArn"?: string;
                /**
                 * Fields for AWS Prometheus data sources
                 */
                "sigV4Auth"?: boolean;
                "sigV4AuthType"?: string;
                "sigV4ExternalId"?: string;
                "sigV4Profile"?: string;
                "sigV4Region"?: string;
                "sslmode"?: string;
                "subscriptionId"?: string;
                "tenantId"?: string;
                "timeField"?: string;
                "timeInterval"?: string;
                /**
                 * HTTP Request timeout in seconds. Overrides dataproxy.timeout option
                 */
                "timeout"?: number;
                "timescaledb"?: boolean;
                /**
                 * Extra field for MySQL data source
                 */
                "timezone"?: string;
                "tlsAuth"?: boolean;
                "tlsAuthWithCACert"?: boolean;
                "tlsSkipVerify"?: boolean;
                /**
                 * Fields for Stackdriver data sources
                 */
                "tokenUri"?: string;
                /**
                 * Fields for tracing data sources
                 */
                "tracesToLogs"?: {
                    "datasourceUid"?: string;
                    "filterBySpanID"?: boolean;
                    "filterByTraceID"?: boolean;
                    "lokiSearch"?: boolean;
                    "spanEndTimeShift"?: string;
                    "spanStartTimeShift"?: string;
                    "tags"?: Array<string>;
                };
                "tsdbResolution"?: string;
                "tsdbVersion"?: string;
                /**
                 * Fields for Instana data sources See https://github.com/instana/instana-grafana-datasource/blob/main/provisioning/datasources/datasource.yml
                 */
                "url"?: string;
                "usePOST"?: boolean;
                "useProxy"?: boolean;
                "useYandexCloudAuthorization"?: boolean;
                "username"?: string;
                "version"?: string;
                "xHeaderKey"?: string;
                "xHeaderUser"?: string;
            };
            "name": string;
            "orgId"?: number;
            "password"?: string;
            /**
             * GrafanaDataSourceSecureJsonData contains the most common secure json options See https://grafana.com/docs/administration/provisioning/#datasources
             */
            "secureJsonData"?: {
                "accessKey"?: string;
                /**
                 * Fields for Github data sources
                 */
                "accessToken"?: string;
                "appInsightsApiKey"?: string;
                "basicAuthPassword"?: string;
                /**
                 * Fields for Azure data sources
                 */
                "clientSecret"?: string;
                /**
                 * Custom HTTP headers for datasources See https://grafana.com/docs/grafana/latest/administration/provisioning/#datasources
                 */
                "httpHeaderValue1"?: string;
                "httpHeaderValue2"?: string;
                "httpHeaderValue3"?: string;
                "httpHeaderValue4"?: string;
                "httpHeaderValue5"?: string;
                "httpHeaderValue6"?: string;
                "httpHeaderValue7"?: string;
                "httpHeaderValue8"?: string;
                "httpHeaderValue9"?: string;
                "logAnalyticsClientSecret"?: string;
                "password"?: string;
                /**
                 * Fields for Stackdriver data sources
                 */
                "privateKey"?: string;
                "secretKey"?: string;
                /**
                 * Fields for AWS data sources
                 */
                "sigV4AccessKey"?: string;
                "sigV4SecretKey"?: string;
                "tlsCACert"?: string;
                "tlsClientCert"?: string;
                "tlsClientKey"?: string;
                /**
                 * Fields for InfluxDB data sources
                 */
                "token"?: string;
            };
            "type": string;
            "uid"?: string;
            "url"?: string;
            "user"?: string;
            "version"?: number;
            "withCredentials"?: boolean;
        }>;
        "name": string;
    };
    "status"?: {
        "message": string;
        "phase": string;
    };
}
/**
 * GrafanaDataSource is the Schema for the grafanadatasources API
 */
export declare class GrafanaDataSource extends Model<IGrafanaDataSource> implements IGrafanaDataSource {
    "apiVersion": IGrafanaDataSource["apiVersion"];
    "kind": IGrafanaDataSource["kind"];
    "metadata"?: IGrafanaDataSource["metadata"];
    "spec"?: IGrafanaDataSource["spec"];
    "status"?: IGrafanaDataSource["status"];
    static apiVersion: IGrafanaDataSource["apiVersion"];
    static kind: IGrafanaDataSource["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaDataSource>;
    constructor(data?: ModelData<IGrafanaDataSource>);
}
