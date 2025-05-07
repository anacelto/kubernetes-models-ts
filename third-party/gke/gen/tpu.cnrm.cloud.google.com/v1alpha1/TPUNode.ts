import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TpuCnrmCloudGoogleComV1alpha1TPUNode";

export interface ITPUNode {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "tpu.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "TPUNode";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The type of hardware accelerators associated with this node.
     */
    "acceleratorType": string;
    /**
     * Immutable. The CIDR block that the TPU node will use when selecting an IP
     * address. This CIDR block must be a /29 block; the Compute Engine
     * networks API forbids a smaller block, and using a larger block would
     * be wasteful (a node can only consume one IP address).
     * 
     * Errors will occur if the CIDR block has already been used for a
     * currently existing TPU node, the CIDR block conflicts with any
     * subnetworks in the user's provided network, or the provided network
     * is peered with another network that is using that CIDR block.
     */
    "cidrBlock"?: string;
    /**
     * Immutable. The user-supplied description of the TPU. Maximum of 512 characters.
     */
    "description"?: string;
    /**
     * Immutable. The name of a network to peer the TPU node to. It must be a
     * preexisting Compute Engine network inside of the project on which
     * this API has been activated. If none is provided, "default" will be
     * used.
     */
    "network"?: string;
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
     * Immutable. Sets the scheduling options for this TPU instance.
     */
    "schedulingConfig"?: {
      /**
       * Immutable. Defines whether the TPU instance is preemptible.
       */
      "preemptible": boolean;
    };
    /**
     * The version of Tensorflow running in the Node.
     */
    "tensorflowVersion": string;
    /**
     * Immutable. Whether the VPC peering for the node is set up through Service Networking API.
     * The VPC Peering should be set up before provisioning the node. If this field is set,
     * cidr_block field should not be specified. If the network that you want to peer the
     * TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
     */
    "useServiceNetworking"?: boolean;
    /**
     * Immutable. The GCP location for the TPU. If it is not provided, the provider zone is used.
     */
    "zone": string;
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
     * The network endpoints where TPU workers can be accessed and sent work.
     * It is recommended that Tensorflow clients of the node first reach out
     * to the first (index 0) entry.
     */
    "networkEndpoints"?: Array<{
      /**
       * The IP address of this network endpoint.
       */
      "ipAddress"?: string;
      /**
       * The port of this network endpoint.
       */
      "port"?: number;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The service account used to run the tensor flow services within the
     * node. To share resources, including Google Cloud Storage data, with
     * the Tensorflow job running in the Node, this account must have
     * permissions to that data.
     */
    "serviceAccount"?: string;
  };
}

export class TPUNode extends Model<ITPUNode> implements ITPUNode {
  "apiVersion": ITPUNode["apiVersion"];
  "kind": ITPUNode["kind"];
  "metadata"?: ITPUNode["metadata"];
  "spec": ITPUNode["spec"];
  "status"?: ITPUNode["status"];

static apiVersion: ITPUNode["apiVersion"] = "tpu.cnrm.cloud.google.com/v1alpha1";
static kind: ITPUNode["kind"] = "TPUNode";
static is = createTypeMetaGuard<ITPUNode>(TPUNode);

constructor(data?: ModelData<ITPUNode>) {
  super();

  this.setDefinedProps({
    apiVersion: TPUNode.apiVersion,
    kind: TPUNode.kind,
    ...data
  } as ITPUNode);
}
}


setValidateFunc(TPUNode, validate as ValidateFunc<ITPUNode>);
