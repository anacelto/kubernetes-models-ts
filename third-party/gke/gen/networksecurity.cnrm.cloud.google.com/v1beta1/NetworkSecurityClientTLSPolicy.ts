import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworksecurityCnrmCloudGoogleComV1beta1NetworkSecurityClientTLSPolicy";

export interface INetworkSecurityClientTLSPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "networksecurity.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "NetworkSecurityClientTLSPolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
     */
    "clientCertificate"?: {
      /**
       * The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
       */
      "certificateProviderInstance"?: {
        /**
         * Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
         */
        "pluginInstance": string;
      };
      /**
       * gRPC specific configuration to access the gRPC server to obtain the cert and private key.
       */
      "grpcEndpoint"?: {
        /**
         * Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with “unix:”.
         */
        "targetUri": string;
      };
    };
    /**
     * Optional. Free-text description of the resource.
     */
    "description"?: string;
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef"?: {
      /**
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
     * Required. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate.
     */
    "serverValidationCa"?: Array<{
      /**
       * The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
       */
      "certificateProviderInstance"?: {
        /**
         * Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
         */
        "pluginInstance": string;
      };
      /**
       * gRPC specific configuration to access the gRPC server to obtain the CA certificate.
       */
      "grpcEndpoint"?: {
        /**
         * Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with “unix:”.
         */
        "targetUri": string;
      };
    }>;
    /**
     * Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
     */
    "sni"?: string;
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
     * Output only. The timestamp when the resource was created.
     */
    "createTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    "updateTime"?: string;
  };
}

export class NetworkSecurityClientTLSPolicy extends Model<INetworkSecurityClientTLSPolicy> implements INetworkSecurityClientTLSPolicy {
  "apiVersion": INetworkSecurityClientTLSPolicy["apiVersion"];
  "kind": INetworkSecurityClientTLSPolicy["kind"];
  "metadata"?: INetworkSecurityClientTLSPolicy["metadata"];
  "spec": INetworkSecurityClientTLSPolicy["spec"];
  "status"?: INetworkSecurityClientTLSPolicy["status"];

static apiVersion: INetworkSecurityClientTLSPolicy["apiVersion"] = "networksecurity.cnrm.cloud.google.com/v1beta1";
static kind: INetworkSecurityClientTLSPolicy["kind"] = "NetworkSecurityClientTLSPolicy";
static is = createTypeMetaGuard<INetworkSecurityClientTLSPolicy>(NetworkSecurityClientTLSPolicy);

constructor(data?: ModelData<INetworkSecurityClientTLSPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkSecurityClientTLSPolicy.apiVersion,
    kind: NetworkSecurityClientTLSPolicy.kind,
    ...data
  } as INetworkSecurityClientTLSPolicy);
}
}


setValidateFunc(NetworkSecurityClientTLSPolicy, validate as ValidateFunc<INetworkSecurityClientTLSPolicy>);
