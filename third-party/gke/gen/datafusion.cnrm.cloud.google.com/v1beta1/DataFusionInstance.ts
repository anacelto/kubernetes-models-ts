import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DatafusionCnrmCloudGoogleComV1beta1DataFusionInstance";

export interface IDataFusionInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "datafusion.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DataFusionInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    "dataprocServiceAccountRef"?: {
      /**
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
       * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
       * 
       * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
     * Immutable. A description of this instance.
     */
    "description"?: string;
    /**
     * Immutable. Display name for an instance.
     */
    "displayName"?: string;
    /**
     * Option to enable Stackdriver Logging.
     */
    "enableStackdriverLogging"?: boolean;
    /**
     * Option to enable Stackdriver Monitoring.
     */
    "enableStackdriverMonitoring"?: boolean;
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Immutable. Network configuration options. These are required when a private Data Fusion instance is to be created.
     */
    "networkConfig"?: {
      /**
       * Immutable. The IP range in CIDR notation to use for the managed Data Fusion instance nodes. This range must not overlap with any other ranges used in the customer network.
       */
      "ipAllocation"?: string;
      /**
       * Immutable.
       */
      "networkRef"?: {
        /**
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
         * Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
         * 
         * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
    /**
     * Immutable. Map of additional options used to configure the behavior of Data Fusion instance.
     */
    "options"?: {
      [key: string]: string;
    };
    /**
     * Immutable. Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet.
     */
    "privateInstance"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Required. Instance type. Possible values: TYPE_UNSPECIFIED, BASIC, ENTERPRISE, DEVELOPER
     */
    "type": string;
    /**
     * Current version of the Data Fusion.
     */
    "version"?: string;
    /**
     * Immutable. Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
     */
    "zone"?: string;
  };
  "status"?: {
    /**
     * Output only. Endpoint on which the REST APIs is accessible.
     */
    "apiEndpoint"?: string;
    /**
     * Available versions that the instance can be upgraded to.
     */
    "availableVersion"?: Array<{
      /**
       * Represents a list of available feature names for a given version.
       */
      "availableFeatures"?: Array<string>;
      /**
       * Whether this is currently the default version for Cloud Data Fusion
       */
      "defaultVersion"?: boolean;
      /**
       * The version number of the Data Fusion instance, such as '6.0.1.0'.
       */
      "versionNumber"?: string;
    }>;
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
     * Output only. The time the instance was created.
     */
    "createTime"?: string;
    /**
     * Output only. Cloud Storage bucket generated by Data Fusion in the customer project.
     */
    "gcsBucket"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. P4 service account for the customer project.
     */
    "p4ServiceAccount"?: string;
    /**
     * Output only. Endpoint on which the Data Fusion UI is accessible.
     */
    "serviceEndpoint"?: string;
    /**
     * Output only. The current state of this Data Fusion instance. Possible values: STATE_UNSPECIFIED, ENABLED, DISABLED, UNKNOWN
     */
    "state"?: string;
    /**
     * Output only. Additional information about the current state of this Data Fusion instance if available.
     */
    "stateMessage"?: string;
    /**
     * Output only. The name of the tenant project.
     */
    "tenantProjectId"?: string;
    /**
     * Output only. The time the instance was last updated.
     */
    "updateTime"?: string;
  };
}

export class DataFusionInstance extends Model<IDataFusionInstance> implements IDataFusionInstance {
  "apiVersion": IDataFusionInstance["apiVersion"];
  "kind": IDataFusionInstance["kind"];
  "metadata"?: IDataFusionInstance["metadata"];
  "spec": IDataFusionInstance["spec"];
  "status"?: IDataFusionInstance["status"];

static apiVersion: IDataFusionInstance["apiVersion"] = "datafusion.cnrm.cloud.google.com/v1beta1";
static kind: IDataFusionInstance["kind"] = "DataFusionInstance";
static is = createTypeMetaGuard<IDataFusionInstance>(DataFusionInstance);

constructor(data?: ModelData<IDataFusionInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: DataFusionInstance.apiVersion,
    kind: DataFusionInstance.kind,
    ...data
  } as IDataFusionInstance);
}
}


setValidateFunc(DataFusionInstance, validate as ValidateFunc<IDataFusionInstance>);
