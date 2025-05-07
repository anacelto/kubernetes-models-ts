import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/WorkstationsCnrmCloudGoogleComV1alpha1WorkstationsWorkstationCluster";

export interface IWorkstationsWorkstationCluster {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "workstations.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "WorkstationsWorkstationCluster";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Client-specified annotations. This is distinct from labels.
     */
    "annotations"?: {
      [key: string]: string;
    };
    /**
     * Human-readable name for this resource.
     */
    "displayName"?: string;
    /**
     * Immutable. The location where the workstation cluster should reside.
     */
    "location": string;
    /**
     * Immutable. The relative resource name of the VPC network on which the instance can be accessed.
     * It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
     */
    "network": string;
    /**
     * Configuration for private cluster.
     */
    "privateClusterConfig"?: {
      /**
       * Additional project IDs that are allowed to attach to the workstation cluster's service attachment.
       * By default, the workstation cluster's project and the VPC host project (if different) are allowed.
       */
      "allowedProjects"?: Array<string>;
      /**
       * Hostname for the workstation cluster.
       * This field will be populated only when private endpoint is enabled.
       * To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
       */
      "clusterHostname"?: string;
      /**
       * Immutable. Whether Workstations endpoint is private.
       */
      "enablePrivateEndpoint": boolean;
      /**
       * Service attachment URI for the workstation cluster.
       * The service attachment is created when private endpoint is enabled.
       * To access workstations in the cluster, configure access to the managed service using (Private Service Connect)[https://cloud.google.com/vpc/docs/configure-private-service-connect-services].
       */
      "serviceAttachmentUri"?: string;
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
     * Immutable. Optional. The workstationClusterId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
     * Must be part of the subnetwork specified for this cluster.
     */
    "subnetwork": string;
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
     * Time when this resource was created.
     */
    "createTime"?: string;
    /**
     * Whether this resource is in degraded mode, in which case it may require user action to restore full functionality.
     * Details can be found in the conditions field.
     */
    "degraded"?: boolean;
    /**
     * Checksum computed by the server.
     * May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    "etag"?: string;
    /**
     * The name of the cluster resource.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Status conditions describing the current resource state.
     */
    "resourceConditions"?: Array<{
      /**
       * The status code, which should be an enum value of google.rpc.Code.
       */
      "code"?: number;
      /**
       * A list of messages that carry the error details.
       */
      "details"?: Array<{
      }>;
      /**
       * Human readable message indicating details about the current status.
       */
      "message"?: string;
    }>;
    /**
     * The system-generated UID of the resource.
     */
    "uid"?: string;
  };
}

export class WorkstationsWorkstationCluster extends Model<IWorkstationsWorkstationCluster> implements IWorkstationsWorkstationCluster {
  "apiVersion": IWorkstationsWorkstationCluster["apiVersion"];
  "kind": IWorkstationsWorkstationCluster["kind"];
  "metadata"?: IWorkstationsWorkstationCluster["metadata"];
  "spec": IWorkstationsWorkstationCluster["spec"];
  "status"?: IWorkstationsWorkstationCluster["status"];

static apiVersion: IWorkstationsWorkstationCluster["apiVersion"] = "workstations.cnrm.cloud.google.com/v1alpha1";
static kind: IWorkstationsWorkstationCluster["kind"] = "WorkstationsWorkstationCluster";
static is = createTypeMetaGuard<IWorkstationsWorkstationCluster>(WorkstationsWorkstationCluster);

constructor(data?: ModelData<IWorkstationsWorkstationCluster>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkstationsWorkstationCluster.apiVersion,
    kind: WorkstationsWorkstationCluster.kind,
    ...data
  } as IWorkstationsWorkstationCluster);
}
}


setValidateFunc(WorkstationsWorkstationCluster, validate as ValidateFunc<IWorkstationsWorkstationCluster>);
