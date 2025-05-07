import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1MySQLVersion";

export interface IMySQLVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "MySQLVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "coordinator"?: {
      "image": string;
    };
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "distribution"?: "Official" | "Oracle" | "Percona" | "KubeDB" | "MySQL";
    "exporter": {
      "image": string;
    };
    "initContainer": {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "replicationModeDetector"?: {
      "image": string;
    };
    "router"?: {
      "image": string;
    };
    "routerInitContainer"?: {
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
      "allowlist"?: {
        "groupReplication"?: Array<string>;
        "standalone"?: Array<string>;
      };
      "denylist"?: {
        "groupReplication"?: Array<string>;
        "standalone"?: Array<string>;
      };
    };
    "version": string;
  };
}

export class MySQLVersion extends Model<IMySQLVersion> implements IMySQLVersion {
  "apiVersion": IMySQLVersion["apiVersion"];
  "kind": IMySQLVersion["kind"];
  "metadata"?: IMySQLVersion["metadata"];
  "spec"?: IMySQLVersion["spec"];

static apiVersion: IMySQLVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IMySQLVersion["kind"] = "MySQLVersion";
static is = createTypeMetaGuard<IMySQLVersion>(MySQLVersion);

constructor(data?: ModelData<IMySQLVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: MySQLVersion.apiVersion,
    kind: MySQLVersion.kind,
    ...data
  } as IMySQLVersion);
}
}


setValidateFunc(MySQLVersion, validate as ValidateFunc<IMySQLVersion>);
