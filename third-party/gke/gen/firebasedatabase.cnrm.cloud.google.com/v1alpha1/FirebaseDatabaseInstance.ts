import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FirebasedatabaseCnrmCloudGoogleComV1alpha1FirebaseDatabaseInstance";

export interface IFirebaseDatabaseInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "firebasedatabase.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "FirebaseDatabaseInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The intended database state.
     */
    "desiredState"?: string;
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
     * Immutable. A reference to the region where the Firebase Realtime database resides.
     * Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations).
     */
    "region": string;
    /**
     * Immutable. Optional. The instanceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. The database type.
     * Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
     * Creating user Databases is only available for projects on the Blaze plan.
     * Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Default value: "USER_DATABASE" Possible values: ["DEFAULT_DATABASE", "USER_DATABASE"].
     */
    "type"?: string;
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
     * The database URL in the form of https://{instance-id}.firebaseio.com for us-central1 instances
     * or https://{instance-id}.{region}.firebasedatabase.app in other regions.
     */
    "databaseUrl"?: string;
    /**
     * The fully-qualified resource name of the Firebase Realtime Database, in the
     * format: projects/PROJECT_NUMBER/locations/REGION_IDENTIFIER/instances/INSTANCE_ID
     * PROJECT_NUMBER: The Firebase project's ['ProjectNumber'](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)
     * Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The current database state. Set desired_state to :DISABLED to disable the database and :ACTIVE to reenable the database.
     */
    "state"?: string;
  };
}

export class FirebaseDatabaseInstance extends Model<IFirebaseDatabaseInstance> implements IFirebaseDatabaseInstance {
  "apiVersion": IFirebaseDatabaseInstance["apiVersion"];
  "kind": IFirebaseDatabaseInstance["kind"];
  "metadata"?: IFirebaseDatabaseInstance["metadata"];
  "spec": IFirebaseDatabaseInstance["spec"];
  "status"?: IFirebaseDatabaseInstance["status"];

static apiVersion: IFirebaseDatabaseInstance["apiVersion"] = "firebasedatabase.cnrm.cloud.google.com/v1alpha1";
static kind: IFirebaseDatabaseInstance["kind"] = "FirebaseDatabaseInstance";
static is = createTypeMetaGuard<IFirebaseDatabaseInstance>(FirebaseDatabaseInstance);

constructor(data?: ModelData<IFirebaseDatabaseInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: FirebaseDatabaseInstance.apiVersion,
    kind: FirebaseDatabaseInstance.kind,
    ...data
  } as IFirebaseDatabaseInstance);
}
}


setValidateFunc(FirebaseDatabaseInstance, validate as ValidateFunc<IFirebaseDatabaseInstance>);
