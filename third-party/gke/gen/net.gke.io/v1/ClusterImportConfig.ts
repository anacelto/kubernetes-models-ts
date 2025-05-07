import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetGkeIoV1ClusterImportConfig";

export interface IClusterImportConfig {
  "spec": {
    "clusteripranges"?: Array<{
      "cidrs"?: Array<string>;
      "cluster"?: string;
    }>;
    "networks"?: Array<string>;
    "zones"?: Array<string>;
  };
  "apiVersion": "net.gke.io/v1";
  "kind": "ClusterImportConfig";
  "metadata"?: IObjectMeta;
}

export class ClusterImportConfig extends Model<IClusterImportConfig> implements IClusterImportConfig {
  "spec": IClusterImportConfig["spec"];
  "apiVersion": IClusterImportConfig["apiVersion"];
  "kind": IClusterImportConfig["kind"];
  "metadata"?: IClusterImportConfig["metadata"];

static apiVersion: IClusterImportConfig["apiVersion"] = "net.gke.io/v1";
static kind: IClusterImportConfig["kind"] = "ClusterImportConfig";
static is = createTypeMetaGuard<IClusterImportConfig>(ClusterImportConfig);

constructor(data?: ModelData<IClusterImportConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterImportConfig.apiVersion,
    kind: ClusterImportConfig.kind,
    ...data
  } as IClusterImportConfig);
}
}


setValidateFunc(ClusterImportConfig, validate as ValidateFunc<IClusterImportConfig>);
