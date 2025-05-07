import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1PostgresVersion";

export interface IPostgresVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "PostgresVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "coordinator"?: {
      "image": string;
    };
    "db": {
      "baseOS"?: string;
      "image": string;
    };
    "deprecated"?: boolean;
    "distribution"?: "Official" | "TimescaleDB" | "PostGIS" | "KubeDB" | "PostgreSQL";
    "exporter": {
      "image": string;
    };
    "initContainer"?: {
      "image": string;
    };
    "podSecurityPolicies": {
      "databasePolicyName": string;
    };
    "securityContext"?: {
      "runAsAnyNonRoot"?: boolean;
      "runAsUser"?: number;
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

export class PostgresVersion extends Model<IPostgresVersion> implements IPostgresVersion {
  "apiVersion": IPostgresVersion["apiVersion"];
  "kind": IPostgresVersion["kind"];
  "metadata"?: IPostgresVersion["metadata"];
  "spec"?: IPostgresVersion["spec"];

static apiVersion: IPostgresVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IPostgresVersion["kind"] = "PostgresVersion";
static is = createTypeMetaGuard<IPostgresVersion>(PostgresVersion);

constructor(data?: ModelData<IPostgresVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: PostgresVersion.apiVersion,
    kind: PostgresVersion.kind,
    ...data
  } as IPostgresVersion);
}
}


setValidateFunc(PostgresVersion, validate as ValidateFunc<IPostgresVersion>);
