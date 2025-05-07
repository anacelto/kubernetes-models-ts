import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HncXK8sIoV1alpha2SubnamespaceAnchor";

/**
 * SubnamespaceAnchor is the Schema for the subnamespace API. See details at http://bit.ly/hnc-self-serve-ux.
 */
export interface ISubnamespaceAnchor {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "hnc.x-k8s.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SubnamespaceAnchor";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Annotations is a list of annotations and values to apply to the current subnamespace and all of its descendants. All annotation keys must match a regex specified on the command line by --managed-namespace-annotation. All annotation keys must be managed annotations (see HNC docs) and must match a regex
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
     * Labels is a list of labels and values to apply to the current subnamespace and all of its descendants. All label keys must match a regex specified on the command line by --managed-namespace-label. All label keys must be managed labels (see HNC docs) and must match a regex
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
  };
  /**
   * SubnamespaceAnchorStatus defines the observed state of SubnamespaceAnchor.
   */
  "status"?: {
    /**
     * Describes the state of the subnamespace anchor. 
     *  Currently, the supported values are: 
     *  - "Missing": the subnamespace has not been created yet. This should be the default state when the anchor is just created. 
     *  - "Ok": the subnamespace exists. This is the only good state of the anchor. 
     *  - "Conflict": a namespace of the same name already exists. The admission controller will attempt to prevent this. 
     *  - "Forbidden": the anchor was created in a namespace that doesn't allow children, such as kube-system or hnc-system. The admission controller will attempt to prevent this.
     */
    "status"?: string;
  };
}

/**
 * SubnamespaceAnchor is the Schema for the subnamespace API. See details at http://bit.ly/hnc-self-serve-ux.
 */
export class SubnamespaceAnchor extends Model<ISubnamespaceAnchor> implements ISubnamespaceAnchor {
  "apiVersion": ISubnamespaceAnchor["apiVersion"];
  "kind": ISubnamespaceAnchor["kind"];
  "metadata"?: ISubnamespaceAnchor["metadata"];
  "spec"?: ISubnamespaceAnchor["spec"];
  "status"?: ISubnamespaceAnchor["status"];

static apiVersion: ISubnamespaceAnchor["apiVersion"] = "hnc.x-k8s.io/v1alpha2";
static kind: ISubnamespaceAnchor["kind"] = "SubnamespaceAnchor";
static is = createTypeMetaGuard<ISubnamespaceAnchor>(SubnamespaceAnchor);

constructor(data?: ModelData<ISubnamespaceAnchor>) {
  super();

  this.setDefinedProps({
    apiVersion: SubnamespaceAnchor.apiVersion,
    kind: SubnamespaceAnchor.kind,
    ...data
  } as ISubnamespaceAnchor);
}
}


setValidateFunc(SubnamespaceAnchor, validate as ValidateFunc<ISubnamespaceAnchor>);
