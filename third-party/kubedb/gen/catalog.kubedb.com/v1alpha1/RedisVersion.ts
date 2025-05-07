import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1RedisVersion";

export interface IRedisVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "RedisVersion";
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
    "initContainer"?: {
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

export class RedisVersion extends Model<IRedisVersion> implements IRedisVersion {
  "apiVersion": IRedisVersion["apiVersion"];
  "kind": IRedisVersion["kind"];
  "metadata"?: IRedisVersion["metadata"];
  "spec"?: IRedisVersion["spec"];

static apiVersion: IRedisVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IRedisVersion["kind"] = "RedisVersion";
static is = createTypeMetaGuard<IRedisVersion>(RedisVersion);

constructor(data?: ModelData<IRedisVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: RedisVersion.apiVersion,
    kind: RedisVersion.kind,
    ...data
  } as IRedisVersion);
}
}


setValidateFunc(RedisVersion, validate as ValidateFunc<IRedisVersion>);
