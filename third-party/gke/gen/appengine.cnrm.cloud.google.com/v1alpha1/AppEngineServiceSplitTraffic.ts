import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AppengineCnrmCloudGoogleComV1alpha1AppEngineServiceSplitTraffic";

export interface IAppEngineServiceSplitTraffic {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "appengine.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AppEngineServiceSplitTraffic";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * If set to true traffic will be migrated to this version.
     */
    "migrateTraffic"?: boolean;
    /**
     * Immutable.
     */
    "project"?: string;
    /**
     * Immutable. Optional. The service of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Mapping that defines fractional HTTP traffic diversion to different versions within the service.
     */
    "split": {
      /**
       * Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
       */
      "allocations": {
        [key: string]: string;
      };
      /**
       * Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"].
       */
      "shardBy"?: string;
    };
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class AppEngineServiceSplitTraffic extends Model<IAppEngineServiceSplitTraffic> implements IAppEngineServiceSplitTraffic {
  "apiVersion": IAppEngineServiceSplitTraffic["apiVersion"];
  "kind": IAppEngineServiceSplitTraffic["kind"];
  "metadata"?: IAppEngineServiceSplitTraffic["metadata"];
  "spec": IAppEngineServiceSplitTraffic["spec"];
  "status"?: IAppEngineServiceSplitTraffic["status"];

static apiVersion: IAppEngineServiceSplitTraffic["apiVersion"] = "appengine.cnrm.cloud.google.com/v1alpha1";
static kind: IAppEngineServiceSplitTraffic["kind"] = "AppEngineServiceSplitTraffic";
static is = createTypeMetaGuard<IAppEngineServiceSplitTraffic>(AppEngineServiceSplitTraffic);

constructor(data?: ModelData<IAppEngineServiceSplitTraffic>) {
  super();

  this.setDefinedProps({
    apiVersion: AppEngineServiceSplitTraffic.apiVersion,
    kind: AppEngineServiceSplitTraffic.kind,
    ...data
  } as IAppEngineServiceSplitTraffic);
}
}


setValidateFunc(AppEngineServiceSplitTraffic, validate as ValidateFunc<IAppEngineServiceSplitTraffic>);
