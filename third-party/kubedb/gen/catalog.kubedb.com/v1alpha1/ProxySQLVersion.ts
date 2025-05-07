import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1ProxySQLVersion";

export interface IProxySQLVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "ProxySQLVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "deprecated"?: boolean;
    "exporter"?: {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "proxysql": {
      "image": string;
    };
    "updateConstraints"?: {
      "allowlist"?: Array<string>;
      "denylist"?: Array<string>;
    };
    "version": string;
  };
}

export class ProxySQLVersion extends Model<IProxySQLVersion> implements IProxySQLVersion {
  "apiVersion": IProxySQLVersion["apiVersion"];
  "kind": IProxySQLVersion["kind"];
  "metadata"?: IProxySQLVersion["metadata"];
  "spec"?: IProxySQLVersion["spec"];

static apiVersion: IProxySQLVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IProxySQLVersion["kind"] = "ProxySQLVersion";
static is = createTypeMetaGuard<IProxySQLVersion>(ProxySQLVersion);

constructor(data?: ModelData<IProxySQLVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: ProxySQLVersion.apiVersion,
    kind: ProxySQLVersion.kind,
    ...data
  } as IProxySQLVersion);
}
}


setValidateFunc(ProxySQLVersion, validate as ValidateFunc<IProxySQLVersion>);
