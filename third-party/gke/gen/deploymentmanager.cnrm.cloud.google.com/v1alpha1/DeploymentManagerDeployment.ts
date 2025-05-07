import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DeploymentmanagerCnrmCloudGoogleComV1alpha1DeploymentManagerDeployment";

export interface IDeploymentManagerDeployment {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "deploymentmanager.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DeploymentManagerDeployment";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Set the policy to use for creating new resources. Only used on
     * create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
     * 'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
     * the deployment will fail. Note that updating this field does not
     * actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"].
     */
    "createPolicy"?: string;
    /**
     * Immutable. Set the policy to use for deleting new resources on update/delete.
     * Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
     * resource is deleted after removal from Deployment Manager. If
     * 'ABANDON', the resource is only removed from Deployment Manager
     * and is not actually deleted. Note that updating this field does not
     * actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"].
     */
    "deletePolicy"?: string;
    /**
     * Optional user-provided description of deployment.
     */
    "description"?: string;
    "preview"?: boolean;
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Parameters that define your deployment, including the deployment
     * configuration and relevant templates.
     */
    "target": {
      /**
       * The root configuration file to use for this deployment.
       */
      "config": {
        /**
         * The full YAML contents of your configuration file.
         */
        "content": string;
      };
      /**
       * Specifies import files for this configuration. This can be
       * used to import templates or other files. For example, you might
       * import a text file in order to use the file in a template.
       */
      "imports"?: Array<{
        /**
         * The full contents of the template that you want to import.
         */
        "content"?: string;
        /**
         * The name of the template to import, as declared in the YAML
         * configuration.
         */
        "name"?: string;
      }>;
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
     * Unique identifier for deployment. Output only.
     */
    "deploymentId"?: string;
    /**
     * Output only. URL of the manifest representing the last manifest that
     * was successfully deployed.
     */
    "manifest"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Server defined URL for the resource.
     */
    "selfLink"?: string;
  };
}

export class DeploymentManagerDeployment extends Model<IDeploymentManagerDeployment> implements IDeploymentManagerDeployment {
  "apiVersion": IDeploymentManagerDeployment["apiVersion"];
  "kind": IDeploymentManagerDeployment["kind"];
  "metadata"?: IDeploymentManagerDeployment["metadata"];
  "spec": IDeploymentManagerDeployment["spec"];
  "status"?: IDeploymentManagerDeployment["status"];

static apiVersion: IDeploymentManagerDeployment["apiVersion"] = "deploymentmanager.cnrm.cloud.google.com/v1alpha1";
static kind: IDeploymentManagerDeployment["kind"] = "DeploymentManagerDeployment";
static is = createTypeMetaGuard<IDeploymentManagerDeployment>(DeploymentManagerDeployment);

constructor(data?: ModelData<IDeploymentManagerDeployment>) {
  super();

  this.setDefinedProps({
    apiVersion: DeploymentManagerDeployment.apiVersion,
    kind: DeploymentManagerDeployment.kind,
    ...data
  } as IDeploymentManagerDeployment);
}
}


setValidateFunc(DeploymentManagerDeployment, validate as ValidateFunc<IDeploymentManagerDeployment>);
