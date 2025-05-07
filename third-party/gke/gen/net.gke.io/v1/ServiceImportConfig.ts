import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetGkeIoV1ServiceImportConfig";

export interface IServiceImportConfig {
  "spec": {
    "clusters"?: Array<{
      "capacityScaler"?: string;
      "maxEatePerEndpoint"?: string;
      "maxrate"?: string;
      "membershipName"?: string;
      "neg"?: string;
    }>;
    "negs"?: Array<string>;
  };
  "apiVersion": "net.gke.io/v1";
  "kind": "ServiceImportConfig";
  "metadata"?: IObjectMeta;
}

export class ServiceImportConfig extends Model<IServiceImportConfig> implements IServiceImportConfig {
  "spec": IServiceImportConfig["spec"];
  "apiVersion": IServiceImportConfig["apiVersion"];
  "kind": IServiceImportConfig["kind"];
  "metadata"?: IServiceImportConfig["metadata"];

static apiVersion: IServiceImportConfig["apiVersion"] = "net.gke.io/v1";
static kind: IServiceImportConfig["kind"] = "ServiceImportConfig";
static is = createTypeMetaGuard<IServiceImportConfig>(ServiceImportConfig);

constructor(data?: ModelData<IServiceImportConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceImportConfig.apiVersion,
    kind: ServiceImportConfig.kind,
    ...data
  } as IServiceImportConfig);
}
}


setValidateFunc(ServiceImportConfig, validate as ValidateFunc<IServiceImportConfig>);
