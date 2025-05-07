import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeSSLPolicy";

export interface IComputeSSLPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeSSLPolicy";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Profile specifies the set of SSL features that can be used by the
     * load balancer when negotiating SSL with clients. This can be one of
     * 'COMPATIBLE', 'MODERN', 'RESTRICTED', or 'CUSTOM'. If using 'CUSTOM',
     * the set of SSL features to enable must be specified in the
     * 'customFeatures' field.
     * 
     * See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
     * for which ciphers are available to use. \*\*Note\*\*: this argument
     * \*must\* be present when using the 'CUSTOM' profile. This argument
     * \*must not\* be present when using any other profile.
     */
    "customFeatures"?: Array<string>;
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * The minimum version of SSL protocol that can be used by the clients
     * to establish a connection with the load balancer. Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"].
     */
    "minTlsVersion"?: string;
    /**
     * Profile specifies the set of SSL features that can be used by the
     * load balancer when negotiating SSL with clients. If using 'CUSTOM',
     * the set of SSL features to enable must be specified in the
     * 'customFeatures' field.
     * 
     * See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
     * for information on what cipher suites each profile provides. If
     * 'CUSTOM' is used, the 'custom_features' attribute \*\*must be set\*\*. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"].
     */
    "profile"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * The list of features enabled in the SSL policy.
     */
    "enabledFeatures"?: Array<string>;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this
     * object. This field is used in optimistic locking.
     */
    "fingerprint"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
  };
}

export class ComputeSSLPolicy extends Model<IComputeSSLPolicy> implements IComputeSSLPolicy {
  "apiVersion": IComputeSSLPolicy["apiVersion"];
  "kind": IComputeSSLPolicy["kind"];
  "metadata"?: IComputeSSLPolicy["metadata"];
  "spec"?: IComputeSSLPolicy["spec"];
  "status"?: IComputeSSLPolicy["status"];

static apiVersion: IComputeSSLPolicy["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeSSLPolicy["kind"] = "ComputeSSLPolicy";
static is = createTypeMetaGuard<IComputeSSLPolicy>(ComputeSSLPolicy);

constructor(data?: ModelData<IComputeSSLPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeSSLPolicy.apiVersion,
    kind: ComputeSSLPolicy.kind,
    ...data
  } as IComputeSSLPolicy);
}
}


setValidateFunc(ComputeSSLPolicy, validate as ValidateFunc<IComputeSSLPolicy>);
