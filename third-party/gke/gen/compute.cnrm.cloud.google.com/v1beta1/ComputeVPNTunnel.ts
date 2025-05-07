import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeVPNTunnel";

export interface IComputeVPNTunnel {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeVPNTunnel";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. IKE protocol version to use when establishing the VPN tunnel with
     * peer VPN gateway.
     * Acceptable IKE versions are 1 or 2. Default version is 2.
     */
    "ikeVersion"?: number;
    /**
     * Immutable. Local traffic selector to use when establishing the VPN tunnel with
     * peer VPN gateway. The value should be a CIDR formatted string,
     * for example '192.168.0.0/16'. The ranges should be disjoint.
     * Only IPv4 is supported.
     */
    "localTrafficSelector"?: Array<string>;
    /**
     * Immutable. The interface ID of the external VPN gateway to which this VPN tunnel is connected.
     */
    "peerExternalGatewayInterface"?: number;
    /**
     * The peer side external VPN gateway to which this VPN tunnel
     * is connected.
     */
    "peerExternalGatewayRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource.
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
     * The peer side HA GCP VPN gateway to which this VPN tunnel is
     * connected. If provided, the VPN tunnel will automatically use the
     * same VPN gateway interface ID in the peer GCP VPN gateway.
     */
    "peerGCPGatewayRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
     * Immutable. IP address of the peer VPN gateway. Only IPv4 is supported.
     */
    "peerIp"?: string;
    /**
     * Immutable. The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.
     */
    "region": string;
    /**
     * Immutable. Remote traffic selector to use when establishing the VPN tunnel with
     * peer VPN gateway. The value should be a CIDR formatted string,
     * for example '192.168.0.0/16'. The ranges should be disjoint.
     * Only IPv4 is supported.
     */
    "remoteTrafficSelector"?: Array<string>;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The router to be used for dynamic routing.
     */
    "routerRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
     * Immutable. Shared secret used to set the secure session between the Cloud VPN
     * gateway and the peer VPN gateway.
     */
    "sharedSecret": {
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
     * The ComputeTargetVPNGateway with which this VPN tunnel is
     * associated.
     */
    "targetVPNGatewayRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource.
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
     * Immutable. The interface ID of the VPN gateway with which this VPN tunnel is associated.
     */
    "vpnGatewayInterface"?: number;
    /**
     * The ComputeVPNGateway with which this VPN tunnel is associated.
     * This must be used if a High Availability VPN gateway resource is
     * created.
     */
    "vpnGatewayRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource.
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * Detailed status message for the VPN tunnel.
     */
    "detailedStatus"?: string;
    /**
     * The fingerprint used for optimistic locking of this resource.  Used
     * internally during updates.
     */
    "labelFingerprint"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
    /**
     * Hash of the shared secret.
     */
    "sharedSecretHash"?: string;
    /**
     * The unique identifier for the resource. This identifier is defined by the server.
     */
    "tunnelId"?: string;
  };
}

export class ComputeVPNTunnel extends Model<IComputeVPNTunnel> implements IComputeVPNTunnel {
  "apiVersion": IComputeVPNTunnel["apiVersion"];
  "kind": IComputeVPNTunnel["kind"];
  "metadata"?: IComputeVPNTunnel["metadata"];
  "spec": IComputeVPNTunnel["spec"];
  "status"?: IComputeVPNTunnel["status"];

static apiVersion: IComputeVPNTunnel["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeVPNTunnel["kind"] = "ComputeVPNTunnel";
static is = createTypeMetaGuard<IComputeVPNTunnel>(ComputeVPNTunnel);

constructor(data?: ModelData<IComputeVPNTunnel>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeVPNTunnel.apiVersion,
    kind: ComputeVPNTunnel.kind,
    ...data
  } as IComputeVPNTunnel);
}
}


setValidateFunc(ComputeVPNTunnel, validate as ValidateFunc<IComputeVPNTunnel>);
