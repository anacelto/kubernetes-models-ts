import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1PgBouncerVersion";

export interface IPgBouncerVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "PgBouncerVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "deprecated"?: boolean;
    "exporter": {
      "image": string;
    };
    "pgBouncer": {
      "image": string;
    };
    "securityContext"?: {
      "runAsAnyNonRoot"?: boolean;
      "runAsUser"?: number;
    };
    "updateConstraints"?: {
      "allowlist"?: Array<string>;
      "denylist"?: Array<string>;
    };
    "version": string;
  };
}

export class PgBouncerVersion extends Model<IPgBouncerVersion> implements IPgBouncerVersion {
  "apiVersion": IPgBouncerVersion["apiVersion"];
  "kind": IPgBouncerVersion["kind"];
  "metadata"?: IPgBouncerVersion["metadata"];
  "spec"?: IPgBouncerVersion["spec"];

static apiVersion: IPgBouncerVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IPgBouncerVersion["kind"] = "PgBouncerVersion";
static is = createTypeMetaGuard<IPgBouncerVersion>(PgBouncerVersion);

constructor(data?: ModelData<IPgBouncerVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: PgBouncerVersion.apiVersion,
    kind: PgBouncerVersion.kind,
    ...data
  } as IPgBouncerVersion);
}
}


setValidateFunc(PgBouncerVersion, validate as ValidateFunc<IPgBouncerVersion>);
