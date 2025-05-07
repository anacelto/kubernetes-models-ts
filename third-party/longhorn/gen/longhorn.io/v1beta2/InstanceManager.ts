import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2InstanceManager";

/**
 * InstanceManager is where Longhorn stores instance manager object.
 */
export interface IInstanceManager {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "longhorn.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "InstanceManager";
  "metadata"?: IObjectMeta;
  /**
   * InstanceManagerSpec defines the desired state of the Longhorn instance manager
   */
  "spec"?: {
    "dataEngine"?: string;
    "image"?: string;
    "nodeID"?: string;
    "type"?: "aio" | "engine" | "replica";
  };
  /**
   * InstanceManagerStatus defines the observed state of the Longhorn instance manager
   */
  "status"?: {
    "apiMinVersion"?: number;
    "apiVersion"?: number;
    "currentState"?: string;
    "instanceEngines"?: {
      [key: string]: {
        "spec"?: {
          /**
           * Deprecated:Replaced by field `dataEngine`.
           */
          "backendStoreDriver"?: string;
          "dataEngine"?: string;
          "name"?: string;
        };
        "status"?: {
          "conditions"?: {
            [key: string]: boolean;
          };
          "endpoint"?: string;
          "errorMsg"?: string;
          "listen"?: string;
          "portEnd"?: number;
          "portStart"?: number;
          "resourceVersion"?: number;
          "state"?: string;
          "targetPortEnd"?: number;
          "targetPortStart"?: number;
          "type"?: string;
        };
      };
    };
    "instanceReplicas"?: {
      [key: string]: {
        "spec"?: {
          /**
           * Deprecated:Replaced by field `dataEngine`.
           */
          "backendStoreDriver"?: string;
          "dataEngine"?: string;
          "name"?: string;
        };
        "status"?: {
          "conditions"?: {
            [key: string]: boolean;
          };
          "endpoint"?: string;
          "errorMsg"?: string;
          "listen"?: string;
          "portEnd"?: number;
          "portStart"?: number;
          "resourceVersion"?: number;
          "state"?: string;
          "targetPortEnd"?: number;
          "targetPortStart"?: number;
          "type"?: string;
        };
      };
    };
    /**
     * Deprecated: Replaced by InstanceEngines and InstanceReplicas
     */
    "instances"?: {
      [key: string]: {
        "spec"?: {
          /**
           * Deprecated:Replaced by field `dataEngine`.
           */
          "backendStoreDriver"?: string;
          "dataEngine"?: string;
          "name"?: string;
        };
        "status"?: {
          "conditions"?: {
            [key: string]: boolean;
          };
          "endpoint"?: string;
          "errorMsg"?: string;
          "listen"?: string;
          "portEnd"?: number;
          "portStart"?: number;
          "resourceVersion"?: number;
          "state"?: string;
          "targetPortEnd"?: number;
          "targetPortStart"?: number;
          "type"?: string;
        };
      };
    };
    "ip"?: string;
    "ownerID"?: string;
    "proxyApiMinVersion"?: number;
    "proxyApiVersion"?: number;
  };
}

/**
 * InstanceManager is where Longhorn stores instance manager object.
 */
export class InstanceManager extends Model<IInstanceManager> implements IInstanceManager {
  "apiVersion": IInstanceManager["apiVersion"];
  "kind": IInstanceManager["kind"];
  "metadata"?: IInstanceManager["metadata"];
  "spec"?: IInstanceManager["spec"];
  "status"?: IInstanceManager["status"];

static apiVersion: IInstanceManager["apiVersion"] = "longhorn.io/v1beta2";
static kind: IInstanceManager["kind"] = "InstanceManager";
static is = createTypeMetaGuard<IInstanceManager>(InstanceManager);

constructor(data?: ModelData<IInstanceManager>) {
  super();

  this.setDefinedProps({
    apiVersion: InstanceManager.apiVersion,
    kind: InstanceManager.kind,
    ...data
  } as IInstanceManager);
}
}


setValidateFunc(InstanceManager, validate as ValidateFunc<IInstanceManager>);
