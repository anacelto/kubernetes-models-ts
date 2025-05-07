import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON";

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export interface IJSON {
}

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export class JSON extends Model<IJSON> implements IJSON {

constructor(data?: ModelData<IJSON>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSON, validate as ValidateFunc<IJSON>);

export {
  IJSON as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON,
  JSON as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON
};
