import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ApigatewayCnrmCloudGoogleComV1alpha1APIGatewayGateway";

export interface IAPIGatewayGateway {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "apigateway.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "APIGatewayGateway";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
     * When changing api configs please ensure the new config is a new resource and the lifecycle rule 'create_before_destroy' is set.
     */
    "apiConfig": string;
    /**
     * A user-visible name for the API.
     */
    "displayName"?: string;
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
     * Immutable. The region of the gateway for the API.
     */
    "region": string;
    /**
     * Immutable. Optional. The gatewayId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
     * The default API Gateway host name of the form {gatewayId}-{hash}.{region_code}.gateway.dev.
     */
    "defaultHostname"?: string;
    /**
     * Resource name of the Gateway. Format: projects/{project}/locations/{region}/gateways/{gateway}.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class APIGatewayGateway extends Model<IAPIGatewayGateway> implements IAPIGatewayGateway {
  "apiVersion": IAPIGatewayGateway["apiVersion"];
  "kind": IAPIGatewayGateway["kind"];
  "metadata"?: IAPIGatewayGateway["metadata"];
  "spec": IAPIGatewayGateway["spec"];
  "status"?: IAPIGatewayGateway["status"];

static apiVersion: IAPIGatewayGateway["apiVersion"] = "apigateway.cnrm.cloud.google.com/v1alpha1";
static kind: IAPIGatewayGateway["kind"] = "APIGatewayGateway";
static is = createTypeMetaGuard<IAPIGatewayGateway>(APIGatewayGateway);

constructor(data?: ModelData<IAPIGatewayGateway>) {
  super();

  this.setDefinedProps({
    apiVersion: APIGatewayGateway.apiVersion,
    kind: APIGatewayGateway.kind,
    ...data
  } as IAPIGatewayGateway);
}
}


setValidateFunc(APIGatewayGateway, validate as ValidateFunc<IAPIGatewayGateway>);
