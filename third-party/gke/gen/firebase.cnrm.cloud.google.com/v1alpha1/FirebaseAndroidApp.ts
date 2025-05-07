import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FirebaseCnrmCloudGoogleComV1alpha1FirebaseAndroidApp";

export interface IFirebaseAndroidApp {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "firebase.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "FirebaseAndroidApp";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
     * If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
     * This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
     */
    "apiKeyId"?: string;
    "deletionPolicy"?: string;
    /**
     * The user-assigned display name of the AndroidApp.
     */
    "displayName": string;
    /**
     * Immutable. The canonical package name of the Android app as would appear in the Google Play
     * Developer Console.
     */
    "packageName"?: string;
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
     * Immutable. Optional. The service-generated appId of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * The SHA1 certificate hashes for the AndroidApp.
     */
    "sha1Hashes"?: Array<string>;
    /**
     * The SHA256 certificate hashes for the AndroidApp.
     */
    "sha256Hashes"?: Array<string>;
  };
  "status"?: {
    /**
     * The globally unique, Firebase-assigned identifier of the AndroidApp.
     * This identifier should be treated as an opaque token, as the data format is not specified.
     */
    "appId"?: string;
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
     * This checksum is computed by the server based on the value of other fields, and it may be sent
     * with update requests to ensure the client has an up-to-date value before proceeding.
     */
    "etag"?: string;
    /**
     * The fully qualified resource name of the AndroidApp, for example:
     * projects/projectId/androidApps/appId.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class FirebaseAndroidApp extends Model<IFirebaseAndroidApp> implements IFirebaseAndroidApp {
  "apiVersion": IFirebaseAndroidApp["apiVersion"];
  "kind": IFirebaseAndroidApp["kind"];
  "metadata"?: IFirebaseAndroidApp["metadata"];
  "spec": IFirebaseAndroidApp["spec"];
  "status"?: IFirebaseAndroidApp["status"];

static apiVersion: IFirebaseAndroidApp["apiVersion"] = "firebase.cnrm.cloud.google.com/v1alpha1";
static kind: IFirebaseAndroidApp["kind"] = "FirebaseAndroidApp";
static is = createTypeMetaGuard<IFirebaseAndroidApp>(FirebaseAndroidApp);

constructor(data?: ModelData<IFirebaseAndroidApp>) {
  super();

  this.setDefinedProps({
    apiVersion: FirebaseAndroidApp.apiVersion,
    kind: FirebaseAndroidApp.kind,
    ...data
  } as IFirebaseAndroidApp);
}
}


setValidateFunc(FirebaseAndroidApp, validate as ValidateFunc<IFirebaseAndroidApp>);
