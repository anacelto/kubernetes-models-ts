import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1PerconaXtraDBVersion";

export interface IPerconaXtraDBVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "PerconaXtraDBVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "coordinator"?: {
      "image": string;
    };
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "exporter": {
      "image": string;
    };
    "initContainer": {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "stash"?: {
      "addon"?: {
        "backupTask": {
          "name": string;
          "params"?: Array<{
            "name": string;
            "value": string;
          }>;
        };
        "restoreTask": {
          "name": string;
          "params"?: Array<{
            "name": string;
            "value": string;
          }>;
        };
      };
    };
    "updateConstraints"?: {
      "allowlist"?: Array<string>;
      "denylist"?: Array<string>;
    };
    "version": string;
  };
}

export class PerconaXtraDBVersion extends Model<IPerconaXtraDBVersion> implements IPerconaXtraDBVersion {
  "apiVersion": IPerconaXtraDBVersion["apiVersion"];
  "kind": IPerconaXtraDBVersion["kind"];
  "metadata"?: IPerconaXtraDBVersion["metadata"];
  "spec"?: IPerconaXtraDBVersion["spec"];

static apiVersion: IPerconaXtraDBVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IPerconaXtraDBVersion["kind"] = "PerconaXtraDBVersion";
static is = createTypeMetaGuard<IPerconaXtraDBVersion>(PerconaXtraDBVersion);

constructor(data?: ModelData<IPerconaXtraDBVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: PerconaXtraDBVersion.apiVersion,
    kind: PerconaXtraDBVersion.kind,
    ...data
  } as IPerconaXtraDBVersion);
}
}


setValidateFunc(PerconaXtraDBVersion, validate as ValidateFunc<IPerconaXtraDBVersion>);
