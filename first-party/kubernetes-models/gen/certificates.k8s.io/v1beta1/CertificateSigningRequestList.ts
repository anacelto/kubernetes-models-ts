import { IIoK8sApiCertificatesV1beta1CertificateSigningRequest } from "./CertificateSigningRequest";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequestList";

export interface ICertificateSigningRequestList extends TypeMeta {
  "apiVersion": "certificates.k8s.io/v1beta1";
  "items": Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequest>;
  "kind": "CertificateSigningRequestList";
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

export class CertificateSigningRequestList extends Model<ICertificateSigningRequestList> implements ICertificateSigningRequestList {
  "apiVersion": ICertificateSigningRequestList["apiVersion"];
  "items": Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequest>;
  "kind": ICertificateSigningRequestList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICertificateSigningRequestList["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: ICertificateSigningRequestList["kind"] = "CertificateSigningRequestList";
static is = createTypeMetaGuard<ICertificateSigningRequestList>(CertificateSigningRequestList);

constructor(data?: ModelData<ICertificateSigningRequestList>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateSigningRequestList.apiVersion,
    kind: CertificateSigningRequestList.kind,
    ...data
  } as ICertificateSigningRequestList);
}
}

setValidateFunc(CertificateSigningRequestList, validate as ValidateFunc<ICertificateSigningRequestList>);

export {
  ICertificateSigningRequestList as IIoK8sApiCertificatesV1beta1CertificateSigningRequestList,
  CertificateSigningRequestList as IoK8sApiCertificatesV1beta1CertificateSigningRequestList
};
