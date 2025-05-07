import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/VertexaiCnrmCloudGoogleComV1alpha1VertexAIEndpoint";

export interface IVertexAIEndpoint {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "vertexai.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "VertexAIEndpoint";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The description of the Endpoint.
     */
    "description"?: string;
    /**
     * Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
     */
    "displayName": string;
    /**
     * Immutable. Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.
     */
    "encryptionSpec"?: {
      /**
       * Immutable. Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.
       */
      "kmsKeyName": string;
    };
    /**
     * Immutable. The location for the resource.
     */
    "location": string;
    /**
     * Immutable. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.
     */
    "network"?: string;
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
     * Immutable. The region for the resource.
     */
    "region"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
     * Output only. Timestamp when this Endpoint was created.
     */
    "createTime"?: string;
    /**
     * Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and EndpointService.UndeployModel respectively. Models can also be deployed and undeployed using the [Cloud Console](https://console.cloud.google.com/vertex-ai/).
     */
    "deployedModels"?: Array<{
      /**
       * A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.
       */
      "automaticResources"?: Array<{
        /**
         * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.
         */
        "maxReplicaCount"?: number;
        /**
         * The minimum number of replicas this DeployedModel will be always deployed on. If traffic against it increases, it may dynamically be deployed onto more replicas up to max_replica_count, and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.
         */
        "minReplicaCount"?: number;
      }>;
      /**
       * Output only. Timestamp when the DeployedModel was created.
       */
      "createTime"?: string;
      /**
       * A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.
       */
      "dedicatedResources"?: Array<{
        /**
         * The metric specifications that overrides a resource utilization metric (CPU utilization, accelerator's duty cycle, and so on) target value (default to 60 if not set). At most one entry is allowed per metric. If machine_spec.accelerator_count is above 0, the autoscaling will be based on both CPU utilization and accelerator's duty cycle metrics and scale up when either metrics exceeds its target value while scale down if both metrics are under their target value. The default target value is 60 for both metrics. If machine_spec.accelerator_count is 0, the autoscaling will be based on CPU utilization metric only with default target value 60 if not explicitly set. For example, in the case of Online Prediction, if you want to override target CPU utilization to 80, you should set autoscaling_metric_specs.metric_name to 'aiplatform.googleapis.com/prediction/online/cpu/utilization' and autoscaling_metric_specs.target to '80'.
         */
        "autoscalingMetricSpecs"?: Array<{
          /**
           * The resource metric name. Supported metrics: \* For Online Prediction: \* 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' \* 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.
           */
          "metricName"?: string;
          /**
           * The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.
           */
          "target"?: number;
        }>;
        /**
         * The specification of a single machine used by the prediction.
         */
        "machineSpec"?: Array<{
          /**
           * The number of accelerators to attach to the machine.
           */
          "acceleratorCount"?: number;
          /**
           * The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).
           */
          "acceleratorType"?: string;
          /**
           * The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is 'n1-standard-2'. For BatchPredictionJob or as part of WorkerPoolSpec this field is required. TODO(rsurowka): Try to better unify the required vs optional.
           */
          "machineType"?: string;
        }>;
        /**
         * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count \* number of cores in the selected machine type) and (max_replica_count \* number of GPUs per replica in the selected machine type).
         */
        "maxReplicaCount"?: number;
        /**
         * The minimum number of machine replicas this DeployedModel will be always deployed on. This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.
         */
        "minReplicaCount"?: number;
      }>;
      /**
       * The display name of the DeployedModel. If not provided upon creation, the Model's display_name is used.
       */
      "displayName"?: string;
      /**
       * These logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.
       */
      "enableAccessLogging"?: boolean;
      /**
       * If true, the container of the DeployedModel instances will send 'stderr' and 'stdout' streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.
       */
      "enableContainerLogging"?: boolean;
      /**
       * The ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.
       */
      "id"?: string;
      /**
       * The name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.
       */
      "model"?: string;
      /**
       * Output only. The version ID of the model that is deployed.
       */
      "modelVersionId"?: string;
      /**
       * Output only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.
       */
      "privateEndpoints"?: Array<{
        /**
         * Output only. Http(s) path to send explain requests.
         */
        "explainHttpUri"?: string;
        /**
         * Output only. Http(s) path to send health check requests.
         */
        "healthHttpUri"?: string;
        /**
         * Output only. Http(s) path to send prediction requests.
         */
        "predictHttpUri"?: string;
        /**
         * Output only. The name of the service attachment resource. Populated if private service connect is enabled.
         */
        "serviceAttachment"?: string;
      }>;
      /**
       * The service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the 'iam.serviceAccounts.actAs' permission on this service account.
       */
      "serviceAccount"?: string;
      /**
       * The resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}.
       */
      "sharedResources"?: string;
    }>;
    /**
     * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
     */
    "etag"?: string;
    /**
     * Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by CreateModelDeploymentMonitoringJob. Format: 'projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}'.
     */
    "modelDeploymentMonitoringJob"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Timestamp when this Endpoint was last updated.
     */
    "updateTime"?: string;
  };
}

export class VertexAIEndpoint extends Model<IVertexAIEndpoint> implements IVertexAIEndpoint {
  "apiVersion": IVertexAIEndpoint["apiVersion"];
  "kind": IVertexAIEndpoint["kind"];
  "metadata"?: IVertexAIEndpoint["metadata"];
  "spec": IVertexAIEndpoint["spec"];
  "status"?: IVertexAIEndpoint["status"];

static apiVersion: IVertexAIEndpoint["apiVersion"] = "vertexai.cnrm.cloud.google.com/v1alpha1";
static kind: IVertexAIEndpoint["kind"] = "VertexAIEndpoint";
static is = createTypeMetaGuard<IVertexAIEndpoint>(VertexAIEndpoint);

constructor(data?: ModelData<IVertexAIEndpoint>) {
  super();

  this.setDefinedProps({
    apiVersion: VertexAIEndpoint.apiVersion,
    kind: VertexAIEndpoint.kind,
    ...data
  } as IVertexAIEndpoint);
}
}


setValidateFunc(VertexAIEndpoint, validate as ValidateFunc<IVertexAIEndpoint>);
