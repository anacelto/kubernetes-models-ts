import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ConfigcontrollerCnrmCloudGoogleComV1beta1ConfigControllerInstance";

export interface IConfigControllerInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "configcontroller.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ConfigControllerInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Immutable. Configuration of the cluster management
     */
    "managementConfig": {
      /**
       * Immutable. Configuration of the full (Autopilot) cluster management
       */
      "fullManagementConfig"?: {
        /**
         * Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
         */
        "clusterCidrBlock"?: string;
        /**
         * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one.
         */
        "clusterNamedRange"?: string;
        /**
         * Immutable. Master Authorized Network. Allows access to the k8s master from this block.
         */
        "manBlock"?: string;
        /**
         * Immutable. The /28 network that the masters will use.
         */
        "masterIPv4CidrBlock"?: string;
        /**
         * Immutable.
         */
        "networkRef"?: {
          /**
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
        /**
         * Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
         */
        "servicesCidrBlock"?: string;
        /**
         * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one.
         */
        "servicesNamedRange"?: string;
      };
      /**
       * Immutable. Configuration of the standard (GKE) cluster management
       */
      "standardManagementConfig"?: {
        /**
         * Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
         */
        "clusterCidrBlock"?: string;
        /**
         * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one.
         */
        "clusterNamedRange"?: string;
        /**
         * Immutable. Master Authorized Network. Allows access to the k8s master from this block.
         */
        "manBlock"?: string;
        /**
         * Immutable. The /28 network that the masters will use.
         */
        "masterIPv4CidrBlock": string;
        /**
         * Immutable.
         */
        "networkRef"?: {
          /**
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
           * Existing VPC Network to put the GKE cluster and nodes in.
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
        /**
         * Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
         */
        "servicesCidrBlock"?: string;
        /**
         * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one.
         */
        "servicesNamedRange"?: string;
      };
    };
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Only allow access to the master's private endpoint IP.
     */
    "usePrivateEndpoint"?: boolean;
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
     * Output only. KrmApiHost GCP self link used for identifying the underlying endpoint (GKE cluster currently).
     */
    "gkeResourceLink"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. The current state of the internal state machine for the KrmApiHost. Possible values: STATE_UNSPECIFIED, CREATING, RUNNING, DELETING, SUSPENDED, READ_ONLY
     */
    "state"?: string;
  };
}

export class ConfigControllerInstance extends Model<IConfigControllerInstance> implements IConfigControllerInstance {
  "apiVersion": IConfigControllerInstance["apiVersion"];
  "kind": IConfigControllerInstance["kind"];
  "metadata"?: IConfigControllerInstance["metadata"];
  "spec": IConfigControllerInstance["spec"];
  "status"?: IConfigControllerInstance["status"];

static apiVersion: IConfigControllerInstance["apiVersion"] = "configcontroller.cnrm.cloud.google.com/v1beta1";
static kind: IConfigControllerInstance["kind"] = "ConfigControllerInstance";
static is = createTypeMetaGuard<IConfigControllerInstance>(ConfigControllerInstance);

constructor(data?: ModelData<IConfigControllerInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: ConfigControllerInstance.apiVersion,
    kind: ConfigControllerInstance.kind,
    ...data
  } as IConfigControllerInstance);
}
}


setValidateFunc(ConfigControllerInstance, validate as ValidateFunc<IConfigControllerInstance>);
