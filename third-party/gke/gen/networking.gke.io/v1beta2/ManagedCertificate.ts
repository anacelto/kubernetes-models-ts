import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1beta2ManagedCertificate";

export interface IManagedCertificate {
  "spec"?: {
    "domains"?: Array<string>;
  };
  "status"?: {
    "certificateName"?: string;
    "certificateStatus"?: string;
    "domainStatus"?: Array<{
      "domain": string;
      "status": string;
    }>;
    "expireTime"?: string;
  };
  "apiVersion": "networking.gke.io/v1beta2";
  "kind": "ManagedCertificate";
  "metadata"?: IObjectMeta;
}

export class ManagedCertificate extends Model<IManagedCertificate> implements IManagedCertificate {
  "spec"?: IManagedCertificate["spec"];
  "status"?: IManagedCertificate["status"];
  "apiVersion": IManagedCertificate["apiVersion"];
  "kind": IManagedCertificate["kind"];
  "metadata"?: IManagedCertificate["metadata"];

static apiVersion: IManagedCertificate["apiVersion"] = "networking.gke.io/v1beta2";
static kind: IManagedCertificate["kind"] = "ManagedCertificate";
static is = createTypeMetaGuard<IManagedCertificate>(ManagedCertificate);

constructor(data?: ModelData<IManagedCertificate>) {
  super();

  this.setDefinedProps({
    apiVersion: ManagedCertificate.apiVersion,
    kind: ManagedCertificate.kind,
    ...data
  } as IManagedCertificate);
}
}


setValidateFunc(ManagedCertificate, validate as ValidateFunc<IManagedCertificate>);
