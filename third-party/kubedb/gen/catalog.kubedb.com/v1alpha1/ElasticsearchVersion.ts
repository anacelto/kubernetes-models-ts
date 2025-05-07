import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1ElasticsearchVersion";

export interface IElasticsearchVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "ElasticsearchVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "authPlugin": "OpenDistro" | "SearchGuard" | "X-Pack" | "OpenSearch";
    "dashboard"?: {
      "image": string;
    };
    "dashboardInitContainer"?: {
      "yqImage": string;
    };
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "distribution"?: "ElasticStack" | "OpenDistro" | "SearchGuard" | "OpenSearch" | "KubeDB";
    "exporter": {
      "image": string;
    };
    "initContainer": {
      "image": string;
      "yqImage": string;
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

export class ElasticsearchVersion extends Model<IElasticsearchVersion> implements IElasticsearchVersion {
  "apiVersion": IElasticsearchVersion["apiVersion"];
  "kind": IElasticsearchVersion["kind"];
  "metadata"?: IElasticsearchVersion["metadata"];
  "spec"?: IElasticsearchVersion["spec"];

static apiVersion: IElasticsearchVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IElasticsearchVersion["kind"] = "ElasticsearchVersion";
static is = createTypeMetaGuard<IElasticsearchVersion>(ElasticsearchVersion);

constructor(data?: ModelData<IElasticsearchVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: ElasticsearchVersion.apiVersion,
    kind: ElasticsearchVersion.kind,
    ...data
  } as IElasticsearchVersion);
}
}


setValidateFunc(ElasticsearchVersion, validate as ValidateFunc<IElasticsearchVersion>);
