import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HubGkeIoV1Membership";

export interface IMembership {
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Name of the Identity Provider corresponding to this Membership. This is useful for workloads running in this cluster to use Workload Identity.
     */
    "identity_provider"?: string;
    "owner"?: {
      /**
       * Fully qualified name of the GCP resource that owns the cluster. Should be immutable.
       */
      "id"?: string;
    };
    /**
     * Name of the Workload Identity Pool that this Membership is part of. This will be of the form proj-id.svc.id.goog. This is useful for workloads running in this cluster to use Workload Identity.
     */
    "workload_identity_pool"?: string;
  };
  "apiVersion": "hub.gke.io/v1";
  "kind": "Membership";
}

export class Membership extends Model<IMembership> implements IMembership {
  "metadata"?: IMembership["metadata"];
  "spec": IMembership["spec"];
  "apiVersion": IMembership["apiVersion"];
  "kind": IMembership["kind"];

static apiVersion: IMembership["apiVersion"] = "hub.gke.io/v1";
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
