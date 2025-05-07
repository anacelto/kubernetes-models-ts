import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HubGkeIoV1beta1Membership";

export interface IMembership {
  "apiVersion": "hub.gke.io/v1beta1";
  "kind": "Membership";
  "metadata"?: IObjectMeta;
}

export class Membership extends Model<IMembership> implements IMembership {
  "apiVersion": IMembership["apiVersion"];
  "kind": IMembership["kind"];
  "metadata"?: IMembership["metadata"];

static apiVersion: IMembership["apiVersion"] = "hub.gke.io/v1beta1";
static kind: IMembership["kind"] = "Membership";
static is = createTypeMetaGuard<IMembership>(Membership);

constructor(data?: ModelData<IMembership>) {
  super();

  this.setDefinedProps({
    apiVersion: Membership.apiVersion,
    kind: Membership.kind,
    ...data
  } as IMembership);
}
}


setValidateFunc(Membership, validate as ValidateFunc<IMembership>);
