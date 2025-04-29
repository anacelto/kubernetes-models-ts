import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1Preconditions";

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export interface IPreconditions {
  /**
   * Specifies the target ResourceVersion
   */
  "resourceVersion"?: string;
  /**
   * Specifies the target UID.
   */
  "uid"?: string;
}

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export class Preconditions extends Model<IPreconditions> implements IPreconditions {
  "resourceVersion"?: string;
  "uid"?: string;

constructor(data?: ModelData<IPreconditions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Preconditions, validate as ValidateFunc<IPreconditions>);

export {
  IPreconditions as IIoK8sApimachineryPkgApisMetaV1Preconditions,
  Preconditions as IoK8sApimachineryPkgApisMetaV1Preconditions
};
