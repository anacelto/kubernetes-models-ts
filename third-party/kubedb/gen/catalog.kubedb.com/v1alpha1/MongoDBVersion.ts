import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1MongoDBVersion";

export interface IMongoDBVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "MongoDBVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "distribution"?: "Official" | "Percona" | "KubeDB" | "MongoDB";
    "exporter": {
      "image": string;
    };
    "initContainer": {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "replicationModeDetector": {
      "image": string;
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

export class MongoDBVersion extends Model<IMongoDBVersion> implements IMongoDBVersion {
  "apiVersion": IMongoDBVersion["apiVersion"];
  "kind": IMongoDBVersion["kind"];
  "metadata"?: IMongoDBVersion["metadata"];
  "spec"?: IMongoDBVersion["spec"];

static apiVersion: IMongoDBVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IMongoDBVersion["kind"] = "MongoDBVersion";
static is = createTypeMetaGuard<IMongoDBVersion>(MongoDBVersion);

constructor(data?: ModelData<IMongoDBVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: MongoDBVersion.apiVersion,
    kind: MongoDBVersion.kind,
    ...data
  } as IMongoDBVersion);
}
}


setValidateFunc(MongoDBVersion, validate as ValidateFunc<IMongoDBVersion>);
