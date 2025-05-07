import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1KafkaVersion";

export interface IKafkaVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "KafkaVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "podSecurityPolicies"?: {
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

export class KafkaVersion extends Model<IKafkaVersion> implements IKafkaVersion {
  "apiVersion": IKafkaVersion["apiVersion"];
  "kind": IKafkaVersion["kind"];
  "metadata"?: IKafkaVersion["metadata"];
  "spec"?: IKafkaVersion["spec"];

static apiVersion: IKafkaVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IKafkaVersion["kind"] = "KafkaVersion";
static is = createTypeMetaGuard<IKafkaVersion>(KafkaVersion);

constructor(data?: ModelData<IKafkaVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: KafkaVersion.apiVersion,
    kind: KafkaVersion.kind,
    ...data
  } as IKafkaVersion);
}
}


setValidateFunc(KafkaVersion, validate as ValidateFunc<IKafkaVersion>);
