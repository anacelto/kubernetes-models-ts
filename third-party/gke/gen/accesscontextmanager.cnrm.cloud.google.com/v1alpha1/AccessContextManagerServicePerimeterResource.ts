import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AccesscontextmanagerCnrmCloudGoogleComV1alpha1AccessContextManagerServicePerimeterResource";

export interface IAccessContextManagerServicePerimeterResource {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "accesscontextmanager.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AccessContextManagerServicePerimeterResource";
  "metadata"?: IObjectMeta;
  "spec": {
    "perimeterNameRef": {
      /**
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
       * Allowed value: string of the format `{{parent}}/servicePerimeters/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerServicePerimeter` resource.
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
     * Immutable. A GCP resource that is inside of the service perimeter.
     * Currently only projects are allowed.
     * Format: projects/{project_number}.
     */
    "resource": string;
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

export class AccessContextManagerServicePerimeterResource extends Model<IAccessContextManagerServicePerimeterResource> implements IAccessContextManagerServicePerimeterResource {
  "apiVersion": IAccessContextManagerServicePerimeterResource["apiVersion"];
  "kind": IAccessContextManagerServicePerimeterResource["kind"];
  "metadata"?: IAccessContextManagerServicePerimeterResource["metadata"];
  "spec": IAccessContextManagerServicePerimeterResource["spec"];
  "status"?: IAccessContextManagerServicePerimeterResource["status"];

static apiVersion: IAccessContextManagerServicePerimeterResource["apiVersion"] = "accesscontextmanager.cnrm.cloud.google.com/v1alpha1";
static kind: IAccessContextManagerServicePerimeterResource["kind"] = "AccessContextManagerServicePerimeterResource";
static is = createTypeMetaGuard<IAccessContextManagerServicePerimeterResource>(AccessContextManagerServicePerimeterResource);

constructor(data?: ModelData<IAccessContextManagerServicePerimeterResource>) {
  super();

  this.setDefinedProps({
    apiVersion: AccessContextManagerServicePerimeterResource.apiVersion,
    kind: AccessContextManagerServicePerimeterResource.kind,
    ...data
  } as IAccessContextManagerServicePerimeterResource);
}
}


setValidateFunc(AccessContextManagerServicePerimeterResource, validate as ValidateFunc<IAccessContextManagerServicePerimeterResource>);
