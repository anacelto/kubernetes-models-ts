import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetGkeIoV1ServiceImport";

export interface IServiceImport {
  "spec"?: {
    "ips"?: Array<string>;
    "ports": Array<{
      "appProtocol"?: string;
      "name"?: string;
      "port": number;
      "protocol"?: string;
    }>;
    "sessionAffinity"?: string;
    "sessionAffinityConfig"?: {
      "clientIP"?: {
        "timeoutSeconds"?: number;
      };
    };
    "type": string;
  };
  "status"?: {
    "clusters"?: Array<{
      "cluster": string;
    }>;
  };
  "apiVersion": "net.gke.io/v1";
  "kind": "ServiceImport";
  "metadata"?: IObjectMeta;
}

export class ServiceImport extends Model<IServiceImport> implements IServiceImport {
  "spec"?: IServiceImport["spec"];
  "status"?: IServiceImport["status"];
  "apiVersion": IServiceImport["apiVersion"];
  "kind": IServiceImport["kind"];
  "metadata"?: IServiceImport["metadata"];

static apiVersion: IServiceImport["apiVersion"] = "net.gke.io/v1";
static kind: IServiceImport["kind"] = "ServiceImport";
static is = createTypeMetaGuard<IServiceImport>(ServiceImport);

constructor(data?: ModelData<IServiceImport>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceImport.apiVersion,
    kind: ServiceImport.kind,
    ...data
  } as IServiceImport);
}
}


setValidateFunc(ServiceImport, validate as ValidateFunc<IServiceImport>);
