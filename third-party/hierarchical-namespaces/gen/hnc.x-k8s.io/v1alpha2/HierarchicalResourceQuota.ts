import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HncXK8sIoV1alpha2HierarchicalResourceQuota";

/**
 * HierarchicalResourceQuota sets aggregate quota restrictions enforced for a namespace and descendant namespaces
 */
export interface IHierarchicalResourceQuota {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "hnc.x-k8s.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HierarchicalResourceQuota";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired quota
   */
  "spec"?: {
    /**
     * Hard is the set of desired hard limits for each named resource
     */
    "hard"?: {
      [key: string]: number | string;
    };
  };
  /**
   * Status defines the actual enforced quota and its current usage
   */
  "status"?: {
    /**
     * Hard is the set of enforced hard limits for each named resource
     */
    "hard"?: {
      [key: string]: number | string;
    };
    /**
     * Used is the current observed total usage of the resource in the namespace and its descendant namespaces.
     */
    "used"?: {
      [key: string]: number | string;
    };
  };
}

/**
 * HierarchicalResourceQuota sets aggregate quota restrictions enforced for a namespace and descendant namespaces
 */
export class HierarchicalResourceQuota extends Model<IHierarchicalResourceQuota> implements IHierarchicalResourceQuota {
  "apiVersion": IHierarchicalResourceQuota["apiVersion"];
  "kind": IHierarchicalResourceQuota["kind"];
  "metadata"?: IHierarchicalResourceQuota["metadata"];
  "spec"?: IHierarchicalResourceQuota["spec"];
  "status"?: IHierarchicalResourceQuota["status"];

static apiVersion: IHierarchicalResourceQuota["apiVersion"] = "hnc.x-k8s.io/v1alpha2";
static kind: IHierarchicalResourceQuota["kind"] = "HierarchicalResourceQuota";
static is = createTypeMetaGuard<IHierarchicalResourceQuota>(HierarchicalResourceQuota);

constructor(data?: ModelData<IHierarchicalResourceQuota>) {
  super();

  this.setDefinedProps({
    apiVersion: HierarchicalResourceQuota.apiVersion,
    kind: HierarchicalResourceQuota.kind,
    ...data
  } as IHierarchicalResourceQuota);
}
}


setValidateFunc(HierarchicalResourceQuota, validate as ValidateFunc<IHierarchicalResourceQuota>);
