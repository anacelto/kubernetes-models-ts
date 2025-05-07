import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta2GroupSubject";

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export interface IGroupSubject {
  /**
   * name is the user group that matches, or "\*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
   */
  "name": string;
}

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export class GroupSubject extends Model<IGroupSubject> implements IGroupSubject {
  "name": string;

constructor(data?: ModelData<IGroupSubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GroupSubject, validate as ValidateFunc<IGroupSubject>);

export {
  IGroupSubject as IIoK8sApiFlowcontrolV1beta2GroupSubject,
  GroupSubject as IoK8sApiFlowcontrolV1beta2GroupSubject
};
