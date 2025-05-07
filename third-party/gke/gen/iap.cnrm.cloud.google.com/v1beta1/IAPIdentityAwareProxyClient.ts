import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IapCnrmCloudGoogleComV1beta1IAPIdentityAwareProxyClient";

export interface IIAPIdentityAwareProxyClient {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "iap.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "IAPIdentityAwareProxyClient";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable.
     */
    "brandRef": {
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * The brand for the resource
       * 
       * Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Human-friendly name given to the OAuth client.
     */
    "displayName"?: string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Client secret of the OAuth client.
     */
    "secret"?: string;
  };
}

export class IAPIdentityAwareProxyClient extends Model<IIAPIdentityAwareProxyClient> implements IIAPIdentityAwareProxyClient {
  "apiVersion": IIAPIdentityAwareProxyClient["apiVersion"];
  "kind": IIAPIdentityAwareProxyClient["kind"];
  "metadata"?: IIAPIdentityAwareProxyClient["metadata"];
  "spec": IIAPIdentityAwareProxyClient["spec"];
  "status"?: IIAPIdentityAwareProxyClient["status"];

static apiVersion: IIAPIdentityAwareProxyClient["apiVersion"] = "iap.cnrm.cloud.google.com/v1beta1";
static kind: IIAPIdentityAwareProxyClient["kind"] = "IAPIdentityAwareProxyClient";
static is = createTypeMetaGuard<IIAPIdentityAwareProxyClient>(IAPIdentityAwareProxyClient);

constructor(data?: ModelData<IIAPIdentityAwareProxyClient>) {
  super();

  this.setDefinedProps({
    apiVersion: IAPIdentityAwareProxyClient.apiVersion,
    kind: IAPIdentityAwareProxyClient.kind,
    ...data
  } as IIAPIdentityAwareProxyClient);
}
}


setValidateFunc(IAPIdentityAwareProxyClient, validate as ValidateFunc<IIAPIdentityAwareProxyClient>);
