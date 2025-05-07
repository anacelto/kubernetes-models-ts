import { IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration } from "./MutatingWebhookConfiguration";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList";

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export interface IMutatingWebhookConfigurationList extends TypeMeta {
  "apiVersion": "admissionregistration.k8s.io/v1";
  /**
   * List of MutatingWebhookConfiguration.
   */
  "items": Array<IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>;
  "kind": "MutatingWebhookConfigurationList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export class MutatingWebhookConfigurationList extends Model<IMutatingWebhookConfigurationList> implements IMutatingWebhookConfigurationList {
  "apiVersion": IMutatingWebhookConfigurationList["apiVersion"];
  "items": Array<IIoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>;
  "kind": IMutatingWebhookConfigurationList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IMutatingWebhookConfigurationList["apiVersion"] = "admissionregistration.k8s.io/v1";
static kind: IMutatingWebhookConfigurationList["kind"] = "MutatingWebhookConfigurationList";
static is = createTypeMetaGuard<IMutatingWebhookConfigurationList>(MutatingWebhookConfigurationList);

constructor(data?: ModelData<IMutatingWebhookConfigurationList>) {
  super();

  this.setDefinedProps({
    apiVersion: MutatingWebhookConfigurationList.apiVersion,
    kind: MutatingWebhookConfigurationList.kind,
    ...data
  } as IMutatingWebhookConfigurationList);
}
}

setValidateFunc(MutatingWebhookConfigurationList, validate as ValidateFunc<IMutatingWebhookConfigurationList>);

export {
  IMutatingWebhookConfigurationList as IIoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList,
  MutatingWebhookConfigurationList as IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
};
