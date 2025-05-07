import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NodemanagementGkeIoV1alpha1UpdateInfo";

export interface IUpdateInfo {
  "spec"?: {
    "Type"?: string;
    "instanceGroupUrl"?: string;
    "surgeNode"?: string;
    "targetNode"?: string;
    "validUntil"?: string;
  };
  "apiVersion": "nodemanagement.gke.io/v1alpha1";
  "kind": "UpdateInfo";
  "metadata"?: IObjectMeta;
}

export class UpdateInfo extends Model<IUpdateInfo> implements IUpdateInfo {
  "spec"?: IUpdateInfo["spec"];
  "apiVersion": IUpdateInfo["apiVersion"];
  "kind": IUpdateInfo["kind"];
  "metadata"?: IUpdateInfo["metadata"];

static apiVersion: IUpdateInfo["apiVersion"] = "nodemanagement.gke.io/v1alpha1";
static kind: IUpdateInfo["kind"] = "UpdateInfo";
static is = createTypeMetaGuard<IUpdateInfo>(UpdateInfo);

constructor(data?: ModelData<IUpdateInfo>) {
  super();

  this.setDefinedProps({
    apiVersion: UpdateInfo.apiVersion,
    kind: UpdateInfo.kind,
    ...data
  } as IUpdateInfo);
}
}


setValidateFunc(UpdateInfo, validate as ValidateFunc<IUpdateInfo>);
