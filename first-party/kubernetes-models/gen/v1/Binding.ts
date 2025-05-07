import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiCoreV1ObjectReference } from "./ObjectReference";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Binding";

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 * @deprecated
 */
export interface IBinding extends TypeMeta {
  "apiVersion": "v1";
  "kind": "Binding";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * The target object that you want to bind to the standard object.
   */
  "target": IIoK8sApiCoreV1ObjectReference;
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 * @deprecated
 */
export class Binding extends Model<IBinding> implements IBinding {
  "apiVersion": IBinding["apiVersion"];
  "kind": IBinding["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "target": IIoK8sApiCoreV1ObjectReference;

static apiVersion: IBinding["apiVersion"] = "v1";
static kind: IBinding["kind"] = "Binding";
static is = createTypeMetaGuard<IBinding>(Binding);

constructor(data?: ModelData<IBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: Binding.apiVersion,
    kind: Binding.kind,
    ...data
  } as IBinding);
}
}

setValidateFunc(Binding, validate as ValidateFunc<IBinding>);

export {
  IBinding as IIoK8sApiCoreV1Binding,
  Binding as IoK8sApiCoreV1Binding
};
