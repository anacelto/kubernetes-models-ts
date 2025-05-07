import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2CiliumEnvoyConfig";

export interface ICiliumEnvoyConfig {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumEnvoyConfig";
  "metadata": IObjectMeta;
  "spec"?: {
    /**
     * BackendServices specifies Kubernetes services whose backends are automatically synced to Envoy using EDS.  Traffic for these services is not forwarded to an Envoy listener. This allows an Envoy listener load balance traffic to these backends while normal Cilium service load balancing takes care of balancing traffic for these services at the same time.
     */
    "backendServices"?: Array<{
      /**
       * Name is the name of a destination Kubernetes service that identifies traffic to be redirected.
       */
      "name": string;
      /**
       * Namespace is the Kubernetes service namespace. In CiliumEnvoyConfig namespace defaults to the namespace of the CEC, In CiliumClusterwideEnvoyConfig namespace defaults to "default".
       */
      "namespace"?: string;
      /**
       * Port is the port number, which can be used for filtering in case of underlying is exposing multiple port numbers.
       */
      "number"?: Array<string>;
    }>;
    /**
     * Envoy xDS resources, a list of the following Envoy resource types: type.googleapis.com/envoy.config.listener.v3.Listener, type.googleapis.com/envoy.config.route.v3.RouteConfiguration, type.googleapis.com/envoy.config.cluster.v3.Cluster, type.googleapis.com/envoy.config.endpoint.v3.ClusterLoadAssignment, and type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret.
     */
    "resources"?: Array<{
    }>;
    /**
     * Services specifies Kubernetes services for which traffic is forwarded to an Envoy listener for L7 load balancing. Backends of these services are automatically synced to Envoy usign EDS.
     */
    "services"?: Array<{
      /**
       * Listener specifies the name of the Envoy listener the service traffic is redirected to. The listener must be specified in the Envoy 'resources' of the same CiliumEnvoyConfig. 
       *  If omitted, the first listener specified in 'resources' is used.
       */
      "listener"?: string;
      /**
       * Name is the name of a destination Kubernetes service that identifies traffic to be redirected.
       */
      "name": string;
      /**
       * Namespace is the Kubernetes service namespace. In CiliumEnvoyConfig namespace this is overridden to the namespace of the CEC, In CiliumClusterwideEnvoyConfig namespace defaults to "default".
       */
      "namespace"?: string;
    }>;
  };
}

export class CiliumEnvoyConfig extends Model<ICiliumEnvoyConfig> implements ICiliumEnvoyConfig {
  "apiVersion": ICiliumEnvoyConfig["apiVersion"];
  "kind": ICiliumEnvoyConfig["kind"];
  "metadata": ICiliumEnvoyConfig["metadata"];
  "spec"?: ICiliumEnvoyConfig["spec"];

static apiVersion: ICiliumEnvoyConfig["apiVersion"] = "cilium.io/v2";
static kind: ICiliumEnvoyConfig["kind"] = "CiliumEnvoyConfig";
static is = createTypeMetaGuard<ICiliumEnvoyConfig>(CiliumEnvoyConfig);

constructor(data?: ModelData<ICiliumEnvoyConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: CiliumEnvoyConfig.apiVersion,
    kind: CiliumEnvoyConfig.kind,
    ...data
  } as ICiliumEnvoyConfig);
}
}


setValidateFunc(CiliumEnvoyConfig, validate as ValidateFunc<ICiliumEnvoyConfig>);
