import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CatalogKubedbComV1alpha1EtcdVersion";

export interface IEtcdVersion {
  "apiVersion": "catalog.kubedb.com/v1alpha1";
  "kind": "EtcdVersion";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "db": {
      "image": string;
    };
    "deprecated"?: boolean;
    "exporter": {
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
    "version": string;
  };
}

export class EtcdVersion extends Model<IEtcdVersion> implements IEtcdVersion {
  "apiVersion": IEtcdVersion["apiVersion"];
  "kind": IEtcdVersion["kind"];
  "metadata"?: IEtcdVersion["metadata"];
  "spec"?: IEtcdVersion["spec"];

static apiVersion: IEtcdVersion["apiVersion"] = "catalog.kubedb.com/v1alpha1";
static kind: IEtcdVersion["kind"] = "EtcdVersion";
static is = createTypeMetaGuard<IEtcdVersion>(EtcdVersion);

constructor(data?: ModelData<IEtcdVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: EtcdVersion.apiVersion,
    kind: EtcdVersion.kind,
    ...data
  } as IEtcdVersion);
}
}


setValidateFunc(EtcdVersion, validate as ValidateFunc<IEtcdVersion>);
