import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BeyondcorpCnrmCloudGoogleComV1alpha1BeyondCorpAppConnection";

export interface IBeyondCorpAppConnection {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "beyondcorp.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BeyondCorpAppConnection";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Address of the remote application endpoint for the BeyondCorp AppConnection.
     */
    "applicationEndpoint": {
      /**
       * Hostname or IP address of the remote application endpoint.
       */
      "host": string;
      /**
       * Port of the remote application endpoint.
       */
      "port": number;
    };
    /**
     * List of AppConnectors that are authorised to be associated with this AppConnection.
     */
    "connectors"?: Array<string>;
    /**
     * An arbitrary user-provided name for the AppConnection.
     */
    "displayName"?: string;
    /**
     * Gateway used by the AppConnection.
     */
    "gateway"?: {
      /**
       * AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
       */
      "appGateway": string;
      /**
       * Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
       */
      "ingressPort"?: number;
      /**
       * The type of hosting used by the gateway. Refer to
       * https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
       * for a list of possible values.
       */
      "type"?: string;
      /**
       * Server-defined URI for this resource.
       */
      "uri"?: string;
    };
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
     * Immutable. The region of the AppConnection.
     */
    "region": string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. The type of network connectivity used by the AppConnection. Refer to
     * https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
     * for a list of possible values.
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BeyondCorpAppConnection extends Model<IBeyondCorpAppConnection> implements IBeyondCorpAppConnection {
  "apiVersion": IBeyondCorpAppConnection["apiVersion"];
  "kind": IBeyondCorpAppConnection["kind"];
  "metadata"?: IBeyondCorpAppConnection["metadata"];
  "spec": IBeyondCorpAppConnection["spec"];
  "status"?: IBeyondCorpAppConnection["status"];

static apiVersion: IBeyondCorpAppConnection["apiVersion"] = "beyondcorp.cnrm.cloud.google.com/v1alpha1";
static kind: IBeyondCorpAppConnection["kind"] = "BeyondCorpAppConnection";
static is = createTypeMetaGuard<IBeyondCorpAppConnection>(BeyondCorpAppConnection);

constructor(data?: ModelData<IBeyondCorpAppConnection>) {
  super();

  this.setDefinedProps({
    apiVersion: BeyondCorpAppConnection.apiVersion,
    kind: BeyondCorpAppConnection.kind,
    ...data
  } as IBeyondCorpAppConnection);
}
}


setValidateFunc(BeyondCorpAppConnection, validate as ValidateFunc<IBeyondCorpAppConnection>);
