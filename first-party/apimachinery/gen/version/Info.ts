import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApimachineryPkgVersionInfo";

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export interface IInfo {
  "buildDate": string;
  "compiler": string;
  "gitCommit": string;
  "gitTreeState": string;
  "gitVersion": string;
  "goVersion": string;
  "major": string;
  "minor": string;
  "platform": string;
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export class Info extends Model<IInfo> implements IInfo {
  "buildDate": string;
  "compiler": string;
  "gitCommit": string;
  "gitTreeState": string;
  "gitVersion": string;
  "goVersion": string;
  "major": string;
  "minor": string;
  "platform": string;

constructor(data?: ModelData<IInfo>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Info, validate as ValidateFunc<IInfo>);

export {
  IInfo as IIoK8sApimachineryPkgVersionInfo,
  Info as IoK8sApimachineryPkgVersionInfo
};
