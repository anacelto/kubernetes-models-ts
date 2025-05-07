import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AnthosGkeIoV1alpha1Entitlement";

/**
 * Entitlement is a CR representing that Anthos software may be run on a particular cluster. This is written to Anthos-enabled clusters by a Hub controller. This is read by in-cluster Anthos services performing Entitlement checks.
 */
export interface IEntitlement {
  "apiVersion": "anthos.gke.io/v1alpha1";
  "kind": "Entitlement";
  "metadata": IObjectMeta;
  "spec"?: {
    /**
     * ExpirationTimestamp is when this Entitlement expires. An RFC3339 date/time.
     */
    "expirationTimestamp"?: string;
  };
}

/**
 * Entitlement is a CR representing that Anthos software may be run on a particular cluster. This is written to Anthos-enabled clusters by a Hub controller. This is read by in-cluster Anthos services performing Entitlement checks.
 */
export class Entitlement extends Model<IEntitlement> implements IEntitlement {
  "apiVersion": IEntitlement["apiVersion"];
  "kind": IEntitlement["kind"];
  "metadata": IEntitlement["metadata"];
  "spec"?: IEntitlement["spec"];

static apiVersion: IEntitlement["apiVersion"] = "anthos.gke.io/v1alpha1";
static kind: IEntitlement["kind"] = "Entitlement";
static is = createTypeMetaGuard<IEntitlement>(Entitlement);

constructor(data?: ModelData<IEntitlement>) {
  super();

  this.setDefinedProps({
    apiVersion: Entitlement.apiVersion,
    kind: Entitlement.kind,
    ...data
  } as IEntitlement);
}
}


setValidateFunc(Entitlement, validate as ValidateFunc<IEntitlement>);
