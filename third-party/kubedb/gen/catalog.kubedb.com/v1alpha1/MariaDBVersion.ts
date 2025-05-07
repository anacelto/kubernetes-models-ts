import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1MariaDBVersion";

export interface IMariaDBVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "MariaDBVersion";
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

export class MariaDBVersion extends Model<IMariaDBVersion> implements IMariaDBVersion {
  "apiVersion": IMariaDBVersion["apiVersion"];
  "kind": IMariaDBVersion["kind"];
  "metadata"?: IMariaDBVersion["metadata"];
  "spec"?: IMariaDBVersion["spec"];

static apiVersion: IMariaDBVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IMariaDBVersion["kind"] = "MariaDBVersion";
static is = createTypeMetaGuard<IMariaDBVersion>(MariaDBVersion);

constructor(data?: ModelData<IMariaDBVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: MariaDBVersion.apiVersion,
    kind: MariaDBVersion.kind,
    ...data
  } as IMariaDBVersion);
}
}


setValidateFunc(MariaDBVersion, validate as ValidateFunc<IMariaDBVersion>);
