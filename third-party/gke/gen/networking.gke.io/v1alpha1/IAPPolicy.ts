import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1alpha1IAPPolicy";

/**
 * IAPPolicy provides a way to apply IAP policy configuration with the GKE implementation of the Gateway API.
 */
export interface IIAPPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "networking.gke.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "IAPPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of IAPPolicy.
   */
  "spec": {
    /**
     * Default defines default policy configuration for the targeted resource.
     */
    "default"?: {
      /**
       * This field configures OAuth client credentials.
       */
      "oauthclientCredentials": {
        /**
         * Direct reference to OAuth client id.
         */
        "clientID"?: string;
        /**
         * Direct reference to OAuth client secret.
         */
        "clientSecret"?: string;
        /**
         * The name of a k8s secret which stores the OAuth client id & secret.
         */
        "secretName": string;
      };
    };
    /**
     * TargetRef identifies an API object to apply policy to.
     */
    "targetRef": {
      /**
       * Group is the group of the target resource.
       */
      "group": string;
      /**
       * Kind is kind of the target resource.
       */
      "kind": string;
      /**
       * Name is the name of the target resource.
       */
      "name": string;
      /**
       * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
       */
      "namespace"?: string;
    };
  };
  /**
   * Status defines the current state of IAPPolicy.
   */
  "status"?: {
    /**
     * Conditions describe the current conditions of the IAPPolicy.
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
  };
}

/**
 * IAPPolicy provides a way to apply IAP policy configuration with the GKE implementation of the Gateway API.
 */
export class IAPPolicy extends Model<IIAPPolicy> implements IIAPPolicy {
  "apiVersion": IIAPPolicy["apiVersion"];
  "kind": IIAPPolicy["kind"];
  "metadata"?: IIAPPolicy["metadata"];
  "spec": IIAPPolicy["spec"];
  "status"?: IIAPPolicy["status"];

static apiVersion: IIAPPolicy["apiVersion"] = "networking.gke.io/v1alpha1";
static kind: IIAPPolicy["kind"] = "IAPPolicy";
static is = createTypeMetaGuard<IIAPPolicy>(IAPPolicy);

constructor(data?: ModelData<IIAPPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: IAPPolicy.apiVersion,
    kind: IAPPolicy.kind,
    ...data
  } as IIAPPolicy);
}
}


setValidateFunc(IAPPolicy, validate as ValidateFunc<IIAPPolicy>);
