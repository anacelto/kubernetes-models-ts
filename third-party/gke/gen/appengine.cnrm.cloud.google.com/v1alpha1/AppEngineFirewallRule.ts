import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AppengineCnrmCloudGoogleComV1alpha1AppEngineFirewallRule";

export interface IAppEngineFirewallRule {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "appengine.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AppEngineFirewallRule";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The action to take if this rule matches. Possible values: ["UNSPECIFIED_ACTION", "ALLOW", "DENY"].
     */
    "action": string;
    /**
     * An optional string description of this rule.
     */
    "description"?: string;
    /**
     * Immutable.
     */
    "project"?: string;
    /**
     * Immutable. Optional. The priority of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * IP address or range, defined using CIDR notation, of requests that this rule applies to.
     */
    "sourceRange": string;
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

export class AppEngineFirewallRule extends Model<IAppEngineFirewallRule> implements IAppEngineFirewallRule {
  "apiVersion": IAppEngineFirewallRule["apiVersion"];
  "kind": IAppEngineFirewallRule["kind"];
  "metadata"?: IAppEngineFirewallRule["metadata"];
  "spec": IAppEngineFirewallRule["spec"];
  "status"?: IAppEngineFirewallRule["status"];

static apiVersion: IAppEngineFirewallRule["apiVersion"] = "appengine.cnrm.cloud.google.com/v1alpha1";
static kind: IAppEngineFirewallRule["kind"] = "AppEngineFirewallRule";
static is = createTypeMetaGuard<IAppEngineFirewallRule>(AppEngineFirewallRule);

constructor(data?: ModelData<IAppEngineFirewallRule>) {
  super();

  this.setDefinedProps({
    apiVersion: AppEngineFirewallRule.apiVersion,
    kind: AppEngineFirewallRule.kind,
    ...data
  } as IAppEngineFirewallRule);
}
}


setValidateFunc(AppEngineFirewallRule, validate as ValidateFunc<IAppEngineFirewallRule>);
