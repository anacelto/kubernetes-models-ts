import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AppengineCnrmCloudGoogleComV1alpha1AppEngineFlexibleAppVersion";

export interface IAppEngineFlexibleAppVersion {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "appengine.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AppEngineFlexibleAppVersion";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Serving configuration for Google Cloud Endpoints.
     */
    "apiConfig"?: {
      /**
       * Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].
       */
      "authFailAction"?: string;
      /**
       * Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].
       */
      "login"?: string;
      /**
       * Path to the script from the application root directory.
       */
      "script": string;
      /**
       * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].
       */
      "securityLevel"?: string;
      /**
       * URL to serve the endpoint at.
       */
      "url"?: string;
    };
    /**
     * Automatic scaling is based on request rate, response latencies, and other application metrics.
     */
    "automaticScaling"?: {
      /**
       * The time period that the Autoscaler should wait before it starts collecting information from a new instance.
       * This prevents the autoscaler from collecting information when the instance is initializing,
       * during which the collected usage would not be reliable. Default: 120s.
       */
      "coolDownPeriod"?: string;
      /**
       * Target scaling by CPU usage.
       */
      "cpuUtilization": {
        /**
         * Period of time over which CPU utilization is calculated.
         */
        "aggregationWindowLength"?: string;
        /**
         * Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
         */
        "targetUtilization": number;
      };
      /**
       * Target scaling by disk usage.
       */
      "diskUtilization"?: {
        /**
         * Target bytes read per second.
         */
        "targetReadBytesPerSecond"?: number;
        /**
         * Target ops read per seconds.
         */
        "targetReadOpsPerSecond"?: number;
        /**
         * Target bytes written per second.
         */
        "targetWriteBytesPerSecond"?: number;
        /**
         * Target ops written per second.
         */
        "targetWriteOpsPerSecond"?: number;
      };
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
       */
      "maxPendingLatency"?: string;
      /**
       * Maximum number of instances that should be started to handle requests for this version. Default: 20.
       */
      "maxTotalInstances"?: number;
      /**
       * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
       */
      "minIdleInstances"?: number;
      /**
       * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
       */
      "minPendingLatency"?: string;
      /**
       * Minimum number of running instances that should be maintained for this version. Default: 2.
       */
      "minTotalInstances"?: number;
      /**
       * Target scaling by network usage.
       */
      "networkUtilization"?: {
        /**
         * Target bytes received per second.
         */
        "targetReceivedBytesPerSecond"?: number;
        /**
         * Target packets received per second.
         */
        "targetReceivedPacketsPerSecond"?: number;
        /**
         * Target bytes sent per second.
         */
        "targetSentBytesPerSecond"?: number;
        /**
         * Target packets sent per second.
         */
        "targetSentPacketsPerSecond"?: number;
      };
      /**
       * Target scaling by request utilization.
       */
      "requestUtilization"?: {
        /**
         * Target number of concurrent requests.
         */
        "targetConcurrentRequests"?: number;
        /**
         * Target requests per second.
         */
        "targetRequestCountPerSecond"?: string;
      };
    };
    /**
     * Metadata settings that are supplied to this version to enable beta runtime features.
     */
    "betaSettings"?: {
      [key: string]: string;
    };
    /**
     * Duration that static files should be cached by web proxies and browsers.
     * Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
     */
    "defaultExpiration"?: string;
    /**
     * If set to 'true', the service will be deleted if it is the last version.
     */
    "deleteServiceOnDestroy"?: boolean;
    /**
     * Code and application artifacts that make up this version.
     */
    "deployment"?: {
      /**
       * Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.
       */
      "cloudBuildOptions"?: {
        /**
         * Path to the yaml file used in deployment, used to determine runtime configuration details.
         */
        "appYamlPath": string;
        /**
         * The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.
         * 
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "cloudBuildTimeout"?: string;
      };
      /**
       * The Docker image for the container that runs the version.
       */
      "container"?: {
        /**
         * URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.
         * Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest".
         */
        "image": string;
      };
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
     * Code and application artifacts that make up this version.
     */
    "endpointsApiService"?: {
      /**
       * Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".
       * 
       * By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
       * When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
       * and is required in this case.
       * 
       * Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
       * the configuration ID. In this case, configId must be omitted.
       */
      "configId"?: string;
      /**
       * Enable or disable trace sampling. By default, this is set to false for enabled.
       */
      "disableTraceSampling"?: boolean;
      /**
       * Endpoints service name which is the name of the "service" resource in the Service Management API.
       * For example "myapi.endpoints.myproject.cloud.goog".
       */
      "name": string;
      /**
       * Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"].
       */
      "rolloutStrategy"?: string;
    };
    /**
     * The entrypoint for the application.
     */
    "entrypoint"?: {
      /**
       * The format should be a shell command that can be fed to bash -c.
       */
      "shell": string;
    };
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
       * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files.
       * Static file handlers describe which files in the application directory are static files, and which URLs serve them.
       */
      "staticFiles"?: {
        /**
         * Whether files should also be uploaded as code data. By default, files declared in static file handlers are
         * uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
         * uploads are charged against both your code and static data storage resource quotas.
         */
        "applicationReadable"?: boolean;
        /**
         * Time a static file served by this handler should be cached by web proxies and browsers.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
         * Default is '0s'.
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
         * Path to the static files matched by the URL pattern, from the application root directory.
         * The path can refer to text matched in groupings in the URL pattern.
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
     * ManualScaling: B1, B2, B4, B8, B4_1G
     * Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
     */
    "instanceClass"?: string;
    /**
     * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
     */
    "livenessCheck": {
      /**
       * Interval between health checks.
       */
      "checkInterval"?: string;
      /**
       * Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
       */
      "failureThreshold"?: number;
      /**
       * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".
       */
      "host"?: string;
      /**
       * The initial delay before starting to execute the checks. Default: "300s".
       */
      "initialDelay"?: string;
      /**
       * The request path.
       */
      "path": string;
      /**
       * Number of consecutive successful checks required before considering the VM healthy. Default: 2.
       */
      "successThreshold"?: number;
      /**
       * Time before the check is considered failed. Default: "4s".
       */
      "timeout"?: string;
    };
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
     * Extra network settings.
     */
    "network"?: {
      /**
       * List of ports, or port pairs, to forward from the virtual machine to the application container.
       */
      "forwardedPorts"?: Array<string>;
      /**
       * Tag to apply to the instance during creation.
       */
      "instanceTag"?: string;
      /**
       * Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.
       */
      "name": string;
      /**
       * Enable session affinity.
       */
      "sessionAffinity"?: boolean;
      /**
       * Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.
       * 
       * If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
       * If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
       * If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
       * If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
       */
      "subnetwork"?: string;
    };
    /**
     * Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
     */
    "nobuildFilesRegex"?: string;
    /**
     * If set to 'true', the application version will not be deleted.
     */
    "noopOnDestroy"?: boolean;
    /**
     * Immutable.
     */
    "project"?: string;
    /**
     * Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
     */
    "readinessCheck": {
      /**
       * A maximum time limit on application initialization, measured from moment the application successfully
       * replies to a healthcheck until it is ready to serve traffic. Default: "300s".
       */
      "appStartTimeout"?: string;
      /**
       * Interval between health checks.  Default: "5s".
       */
      "checkInterval"?: string;
      /**
       * Number of consecutive failed checks required before removing traffic. Default: 2.
       */
      "failureThreshold"?: number;
      /**
       * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".
       */
      "host"?: string;
      /**
       * The request path.
       */
      "path": string;
      /**
       * Number of consecutive successful checks required before receiving traffic. Default: 2.
       */
      "successThreshold"?: number;
      /**
       * Time before the check is considered failed. Default: "4s".
       */
      "timeout"?: string;
    };
    /**
     * Immutable. Optional. The versionId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Machine resources for a version.
     */
    "resources"?: {
      /**
       * Number of CPU cores needed.
       */
      "cpu"?: number;
      /**
       * Disk size (GB) needed.
       */
      "diskGb"?: number;
      /**
       * Memory (GB) needed.
       */
      "memoryGb"?: number;
      /**
       * List of ports, or port pairs, to forward from the virtual machine to the application container.
       */
      "volumes"?: Array<{
        /**
         * Unique name for the volume.
         */
        "name": string;
        /**
         * Volume size in gigabytes.
         */
        "sizeGb": number;
        /**
         * Underlying volume type, e.g. 'tmpfs'.
         */
        "volumeType": string;
      }>;
    };
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
     * The channel of the runtime to use. Only available for some runtimes.
     */
    "runtimeChannel"?: string;
    /**
     * The path or name of the app's main executable.
     */
    "runtimeMainExecutablePath"?: string;
    /**
     * The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
     * default if this field is neither provided in app.yaml file nor through CLI flag.
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
     * Current serving status of this version. Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"].
     */
    "servingStatus"?: string;
    /**
     * Enables VPC connectivity for standard apps.
     */
    "vpcAccessConnector"?: {
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

export class AppEngineFlexibleAppVersion extends Model<IAppEngineFlexibleAppVersion> implements IAppEngineFlexibleAppVersion {
  "apiVersion": IAppEngineFlexibleAppVersion["apiVersion"];
  "kind": IAppEngineFlexibleAppVersion["kind"];
  "metadata"?: IAppEngineFlexibleAppVersion["metadata"];
  "spec": IAppEngineFlexibleAppVersion["spec"];
  "status"?: IAppEngineFlexibleAppVersion["status"];

static apiVersion: IAppEngineFlexibleAppVersion["apiVersion"] = "appengine.cnrm.cloud.google.com/v1alpha1";
static kind: IAppEngineFlexibleAppVersion["kind"] = "AppEngineFlexibleAppVersion";
static is = createTypeMetaGuard<IAppEngineFlexibleAppVersion>(AppEngineFlexibleAppVersion);

constructor(data?: ModelData<IAppEngineFlexibleAppVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: AppEngineFlexibleAppVersion.apiVersion,
    kind: AppEngineFlexibleAppVersion.kind,
    ...data
  } as IAppEngineFlexibleAppVersion);
}
}


setValidateFunc(AppEngineFlexibleAppVersion, validate as ValidateFunc<IAppEngineFlexibleAppVersion>);
