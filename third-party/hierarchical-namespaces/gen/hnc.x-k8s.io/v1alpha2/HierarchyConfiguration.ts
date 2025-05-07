import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HncXK8sIoV1alpha2HierarchyConfiguration";

/**
 * Hierarchy is the Schema for the hierarchies API
 */
export interface IHierarchyConfiguration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "hnc.x-k8s.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HierarchyConfiguration";
  "metadata"?: IObjectMeta;
  /**
   * HierarchySpec defines the desired state of Hierarchy
   */
  "spec"?: {
    /**
     * AllowCascadingDeletion indicates if the subnamespaces of this namespace are allowed to cascading delete.
     */
    "allowCascadingDeletion"?: boolean;
    /**
     * Annotations is a list of annotations and values to apply to the current namespace and all of its descendants. All annotation keys must match a regex specified on the command line by --managed-namespace-annotation. A namespace cannot have a KVP that conflicts with one of its ancestors.
     */
    "annotations"?: Array<{
      /**
       * Key is the name of the label or annotation. It must conform to the normal rules for Kubernetes label/annotation keys.
       */
      "key": string;
      /**
       * Value is the value of the label or annotation. It must confirm to the normal rules for Kubernetes label or annoation values, which are far more restrictive for labels than for anntations.
       */
      "value": string;
    }>;
    /**
     * Lables is a list of labels and values to apply to the current namespace and all of its descendants. All label keys must match a regex specified on the command line by --managed-namespace-label. A namespace cannot have a KVP that conflicts with one of its ancestors.
     */
    "labels"?: Array<{
      /**
       * Key is the name of the label or annotation. It must conform to the normal rules for Kubernetes label/annotation keys.
       */
      "key": string;
      /**
       * Value is the value of the label or annotation. It must confirm to the normal rules for Kubernetes label or annoation values, which are far more restrictive for labels than for anntations.
       */
      "value": string;
    }>;
    /**
     * Parent indicates the parent of this namespace, if any.
     */
    "parent"?: string;
  };
  /**
   * HierarchyStatus defines the observed state of Hierarchy
   */
  "status"?: {
    /**
     * Children indicates the direct children of this namespace, if any.
     */
    "children"?: Array<string>;
    /**
     * Conditions describes the errors, if any.
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
  };
}

/**
 * Hierarchy is the Schema for the hierarchies API
 */
export class HierarchyConfiguration extends Model<IHierarchyConfiguration> implements IHierarchyConfiguration {
  "apiVersion": IHierarchyConfiguration["apiVersion"];
  "kind": IHierarchyConfiguration["kind"];
  "metadata"?: IHierarchyConfiguration["metadata"];
  "spec"?: IHierarchyConfiguration["spec"];
  "status"?: IHierarchyConfiguration["status"];

static apiVersion: IHierarchyConfiguration["apiVersion"] = "hnc.x-k8s.io/v1alpha2";
static kind: IHierarchyConfiguration["kind"] = "HierarchyConfiguration";
static is = createTypeMetaGuard<IHierarchyConfiguration>(HierarchyConfiguration);

constructor(data?: ModelData<IHierarchyConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: HierarchyConfiguration.apiVersion,
    kind: HierarchyConfiguration.kind,
    ...data
  } as IHierarchyConfiguration);
}
}


setValidateFunc(HierarchyConfiguration, validate as ValidateFunc<IHierarchyConfiguration>);
