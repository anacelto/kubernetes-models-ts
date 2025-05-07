import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SecretmanagerCnrmCloudGoogleComV1beta1SecretManagerSecretVersion";

export interface ISecretManagerSecretVersion {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "secretmanager.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "SecretManagerSecretVersion";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The deletion policy for the secret version. Setting 'ABANDON' allows the resource
     * to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be
     * disabled rather than deleted. Default is 'DELETE'. Possible values are:
     *   \* DELETE
     *   \* DISABLE
     *   \* ABANDON.
     */
    "deletionPolicy"?: string;
    /**
     * The current state of the SecretVersion.
     */
    "enabled"?: boolean;
    /**
     * Immutable. If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.
     */
    "isSecretDataBase64"?: boolean;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. The secret data. Must be no larger than 64KiB.
     */
    "secretData": {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    } & (Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }> | Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }>);
    /**
     * Secret Manager secret resource
     */
    "secretRef": {
      /**
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
       * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
     * The time at which the Secret was created.
     */
    "createTime"?: string;
    /**
     * The time at which the Secret was destroyed. Only present if state is DESTROYED.
     */
    "destroyTime"?: string;
    /**
     * The resource name of the SecretVersion. Format:
     * 'projects/{{project}}/secrets/{{secret_id}}/versions/{{version}}'.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The version of the Secret.
     */
    "version"?: string;
  };
}

export class SecretManagerSecretVersion extends Model<ISecretManagerSecretVersion> implements ISecretManagerSecretVersion {
  "apiVersion": ISecretManagerSecretVersion["apiVersion"];
  "kind": ISecretManagerSecretVersion["kind"];
  "metadata"?: ISecretManagerSecretVersion["metadata"];
  "spec": ISecretManagerSecretVersion["spec"];
  "status"?: ISecretManagerSecretVersion["status"];

static apiVersion: ISecretManagerSecretVersion["apiVersion"] = "secretmanager.cnrm.cloud.google.com/v1beta1";
static kind: ISecretManagerSecretVersion["kind"] = "SecretManagerSecretVersion";
static is = createTypeMetaGuard<ISecretManagerSecretVersion>(SecretManagerSecretVersion);

constructor(data?: ModelData<ISecretManagerSecretVersion>) {
  super();

  this.setDefinedProps({
    apiVersion: SecretManagerSecretVersion.apiVersion,
    kind: SecretManagerSecretVersion.kind,
    ...data
  } as ISecretManagerSecretVersion);
}
}


setValidateFunc(SecretManagerSecretVersion, validate as ValidateFunc<ISecretManagerSecretVersion>);
