import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AppengineCnrmCloudGoogleComV1alpha1AppEngineStandardAppVersion";

export interface IAppEngineStandardAppVersion {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "appengine.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AppEngineStandardAppVersion";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Allows App Engine second generation runtimes to access the legacy bundled services.
     */
    "appEngineApis"?: boolean;
    /**
     * Automatic scaling is based on request rate, response latencies, and other application metrics.
     */
    "automaticScaling"?: {
      /**
       * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
       * 
       * Defaults to a runtime-specific value.
       */
      "maxConcurrentRequests"?: number;
      /**
       * Maximum number of idle instances that should be maintained for this version.
       */
      "maxIdleInstances"?: number;
      /**
       * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
       * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
       */
      "maxPendingLatency"?: string;
      /**
       * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
       */
      "minIdleInstances"?: number;
      /**
       * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
       * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
       */
      "minPendingLatency"?: string;
      /**
       * Scheduler settings for standard environment.
       */
      "standardSchedulerSettings"?: {
        /**
         * Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
         */
        "maxInstances"?: number;
        /**
         * Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
         */
        "minInstances"?: number;
        /**
         * Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
         */
        "targetCpuUtilization"?: number;
        /**
         * Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
         */
        "targetThroughputUtilization"?: number;
      };
    };
    /**
     * Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
     */
    "basicScaling"?: {
      /**
       * Duration of time after the last request that an instance must wait before the instance is shut down.
       * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
       */
      "idleTimeout"?: string;
      /**
       * Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
       */
      "maxInstances": number;
    };
    /**
     * If set to 'true', the service will be deleted if it is the last version.
     */
    "deleteServiceOnDestroy"?: boolean;
    /**
     * Code and application artifacts that make up this version.
     */
    "deployment": {
      /**
       * Manifest of the files stored in Google Cloud Storage that are included as part of this version.
       * All files must be readable using the credentials supplied with this call.
       */
      "files"?: Array<{
        "name": string;
        /**
         * SHA1 checksum of the file.
         */
        "sha1Sum"?: string;
        /**
         * Source URL.
         */
        "sourceUrl": string;
      }>;
      /**
       * Zip File.
       */
      "zip"?: {
        /**
         * files count.
         */
        "filesCount"?: number;
        /**
         * Source URL.
         */
        "sourceUrl": string;
      };
    };
    /**
     * The entrypoint for the application.
     */
    "entrypoint": {
      /**
       * The format should be a shell command that can be fed to bash -c.
       */
      "shell": string;
    };
    /**
     * Environment variables available to the application.
     */
    "envVariables"?: {
      [key: string]: string;
    };
    /**
     * An ordered list of URL-matching patterns that should be applied to incoming requests.
     * The first matching URL handles the request and other request handlers are not attempted.
     */
    "handlers"?: Array<{
      /**
       * Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].
       */
      "authFailAction"?: string;
      /**
       * Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].
       */
      "login"?: string;
      /**
       * 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].
       */
      "redirectHttpResponseCode"?: string;
      /**
       * Executes a script to handle the requests that match this URL pattern.
       * Only the auto value is supported for Node.js in the App Engine standard environment, for example "script:" "auto".
       */
      "script"?: {
        /**
         * Path to the script from the application root directory.
         */
        "scriptPath": string;
      };
      /**
       * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].
       */
      "securityLevel"?: string;
      /**
       * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
       */
      "staticFiles"?: {
        /**
         * Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as
         * static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
         * against both your code and static data storage resource quotas.
         */
        "applicationReadable"?: boolean;
        /**
         * Time a static file served by this handler should be cached by web proxies and browsers.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
         */
        "expiration"?: string;
        /**
         * HTTP headers to use for all responses from these URLs.
         * An object containing a list of "key:value" value pairs.".
         */
        "httpHeaders"?: {
          [key: string]: string;
        };
        /**
         * MIME type used to serve all files served by this handler.
         * Defaults to file-specific MIME types, which are derived from each file's filename extension.
         */
        "mimeType"?: string;
        /**
         * Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
         */
        "path"?: string;
        /**
         * Whether this handler should match the request if the file referenced by the handler does not exist.
         */
        "requireMatchingFile"?: boolean;
        /**
         * Regular expression that matches the file paths for all files that should be referenced by this handler.
         */
        "uploadPathRegex"?: string;
      };
      /**
       * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
       * All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
       */
      "urlRegex"?: string;
    }>;
    /**
     * A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"].
     */
    "inboundServices"?: Array<string>;
    /**
     * Instance class that is used to run this version. Valid values are
     * AutomaticScaling: F1, F2, F4, F4_1G
     * BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
     * Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
     */
    "instanceClass"?: string;
    /**
     * Configuration for third-party Python runtime libraries that are required by the application.
     */
    "libraries"?: Array<{
      /**
       * Name of the library. Example "django".
       */
      "name"?: string;
      /**
       * Version of the library to select, or "latest".
       */
      "version"?: string;
    }>;
    /**
     * A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
     */
    "manualScaling"?: {
      /**
       * Number of instances to assign to the service at the start.
       * 
       * \*\*Note:\*\* When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
       * Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.
       */
      "instances": number;
    };
    /**
     * If set to 'true', the application version will not be deleted.
     */
    "noopOnDestroy"?: boolean;
    /**
     * Immutable.
     */
    "project"?: string;
    /**
     * Immutable. Optional. The versionId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Desired runtime. Example python27.
     */
    "runtime": string;
    /**
     * The version of the API in the given runtime environment.
     * Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
     * Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.
     */
    "runtimeApiVersion"?: string;
    /**
     * The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
     */
    "serviceAccount"?: string;
    "serviceRef": {
      /**
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
       * Allowed value: The `name` field of an `AppEngineService` resource.
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
     * Whether multiple requests can be dispatched to this version at once.
     */
    "threadsafe"?: boolean;
    /**
     * Enables VPC connectivity for standard apps.
     */
    "vpcAccessConnector"?: {
      /**
       * The egress setting for the connector, controlling what traffic is diverted through it.
       */
      "egressSetting"?: string;
      /**
       * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
       */
      "name": string;
    };
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
     * Full path to the Version resource in the API. Example, "v1".
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class AppEngineStandardAppVersion extends Model<IAppEngineStandardAppVersion> implements IAppEngineStandardAppVersion {
  "apiVersion": IAppEngineStandardAppVersion["apiVersion"];
  "kind": IAppEngineStandardAppVersion["kind"];
  "metadata"?: IAppEngineStandardAppVersion["metadata"];
  "spec": IAppEngineStandardAppVersion["spec"];
  "status"?: IAppEngineStandardAppVersion["status"];

static apiVersion: IAppEngineStandardAppVersion["apiVersion"] = "appengine.cnrm.cloud.google.com/v1alpha1";
static kind: IAppEngineStandardAppVersion["kind"] = "AppEngineStandardAppVersion";
static is = createTypeMetaGuard<IAppEngineStandardAppVersion>(AppEngineStandardAppVersion);

constructor(data?: ModelData<IAppEngineStandardAppVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: AppEngineStandardAppVersion.apiVersion,
    kind: AppEngineStandardAppVersion.kind,
    ...data
  } as IAppEngineStandardAppVersion);
}
}


setValidateFunc(AppEngineStandardAppVersion, validate as ValidateFunc<IAppEngineStandardAppVersion>);
