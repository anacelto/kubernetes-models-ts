import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FissionIoV1TimeTrigger";

/**
 * TimeTrigger invokes functions based on given cron schedule.
 */
export interface ITimeTrigger {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "fission.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TimeTrigger";
  "metadata": IObjectMeta;
  /**
   * TimeTriggerSpec invokes the specific function at a time or
   * times specified by a cron string.
   */
  "spec": {
    /**
     * Cron schedule
     */
    "cron": string;
    /**
     * The reference to function
     */
    "functionref": {
      /**
       * Function Reference by weight. this map contains function name as key and its weight
       * as the value. This is for canary upgrade purpose.
       */
      "functionweights"?: {
        [key: string]: number;
      };
      /**
       * Name of the function.
       */
      "name": string;
      /**
       * Type indicates whether this function reference is by name or selector. For now,
       * the only supported reference type is by "name".  Future reference types:
       *   \* Function by label or annotation
       *   \* Branch or tag of a versioned function
       *   \* A "rolling upgrade" from one version of a function to another
       * Available value:
       * - name
       * - function-weights
       */
      "type": string;
    };
  };
}

/**
 * TimeTrigger invokes functions based on given cron schedule.
 */
export class TimeTrigger extends Model<ITimeTrigger> implements ITimeTrigger {
  "apiVersion": ITimeTrigger["apiVersion"];
  "kind": ITimeTrigger["kind"];
  "metadata": ITimeTrigger["metadata"];
  "spec": ITimeTrigger["spec"];

static apiVersion: ITimeTrigger["apiVersion"] = "fission.io/v1";
static kind: ITimeTrigger["kind"] = "TimeTrigger";
static is = createTypeMetaGuard<ITimeTrigger>(TimeTrigger);

constructor(data?: ModelData<ITimeTrigger>) {
  super();

  this.setDefinedProps({
    apiVersion: TimeTrigger.apiVersion,
    kind: TimeTrigger.kind,
    ...data
  } as ITimeTrigger);
}
}


setValidateFunc(TimeTrigger, validate as ValidateFunc<ITimeTrigger>);
