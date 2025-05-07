import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCnrmCloudGoogleComV1beta1MonitoringGroup";

export interface IMonitoringGroup {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "monitoring.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "MonitoringGroup";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A user-assigned name for this group, used only for display purposes.
     */
    "displayName": string;
    /**
     * The filter used to determine which monitored resources belong to this group.
     */
    "filter": string;
    /**
     * If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
     */
    "isCluster"?: boolean;
    "parentRef"?: {
      /**
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
       * The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`).
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
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef"?: {
      /**
       * The project of the group
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
       * The project of the group
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
       * The project of the group
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
       * The project of the group
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
       * The project of the group
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
       * The project of the group
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
       * The project of the group
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
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class MonitoringGroup extends Model<IMonitoringGroup> implements IMonitoringGroup {
  "apiVersion": IMonitoringGroup["apiVersion"];
  "kind": IMonitoringGroup["kind"];
  "metadata"?: IMonitoringGroup["metadata"];
  "spec": IMonitoringGroup["spec"];
  "status"?: IMonitoringGroup["status"];

static apiVersion: IMonitoringGroup["apiVersion"] = "monitoring.cnrm.cloud.google.com/v1beta1";
static kind: IMonitoringGroup["kind"] = "MonitoringGroup";
static is = createTypeMetaGuard<IMonitoringGroup>(MonitoringGroup);

constructor(data?: ModelData<IMonitoringGroup>) {
  super();

  this.setDefinedProps({
    apiVersion: MonitoringGroup.apiVersion,
    kind: MonitoringGroup.kind,
    ...data
  } as IMonitoringGroup);
}
}


setValidateFunc(MonitoringGroup, validate as ValidateFunc<IMonitoringGroup>);
