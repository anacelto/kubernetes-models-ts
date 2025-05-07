import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1MemcachedVersion";

export interface IMemcachedVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "MemcachedVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "exporter": {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "version": string;
  };
}

export class MemcachedVersion extends Model<IMemcachedVersion> implements IMemcachedVersion {
  "apiVersion": IMemcachedVersion["apiVersion"];
  "kind": IMemcachedVersion["kind"];
  "metadata"?: IMemcachedVersion["metadata"];
  "spec"?: IMemcachedVersion["spec"];

static apiVersion: IMemcachedVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IMemcachedVersion["kind"] = "MemcachedVersion";
static is = createTypeMetaGuard<IMemcachedVersion>(MemcachedVersion);

constructor(data?: ModelData<IMemcachedVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: MemcachedVersion.apiVersion,
    kind: MemcachedVersion.kind,
    ...data
  } as IMemcachedVersion);
}
}


setValidateFunc(MemcachedVersion, validate as ValidateFunc<IMemcachedVersion>);
