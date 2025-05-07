import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetGkeIoV1alpha1ServiceExport";

export interface IServiceExport {
  "spec"?: {
    "superclusterIP"?: string;
  };
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status"?: string;
      "type"?: string;
    }>;
    "superclusterIP"?: string;
  };
  "apiVersion": "net.gke.io/v1alpha1";
  "kind": "ServiceExport";
  "metadata"?: IObjectMeta;
}

export class ServiceExport extends Model<IServiceExport> implements IServiceExport {
  "spec"?: IServiceExport["spec"];
  "status"?: IServiceExport["status"];
  "apiVersion": IServiceExport["apiVersion"];
  "kind": IServiceExport["kind"];
  "metadata"?: IServiceExport["metadata"];

static apiVersion: IServiceExport["apiVersion"] = "net.gke.io/v1alpha1";
static kind: IServiceExport["kind"] = "ServiceExport";
static is = createTypeMetaGuard<IServiceExport>(ServiceExport);

constructor(data?: ModelData<IServiceExport>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceExport.apiVersion,
    kind: ServiceExport.kind,
    ...data
  } as IServiceExport);
}
}


setValidateFunc(ServiceExport, validate as ValidateFunc<IServiceExport>);
