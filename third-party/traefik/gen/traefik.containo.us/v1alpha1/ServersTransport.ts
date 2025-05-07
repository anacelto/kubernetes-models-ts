import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TraefikContainoUsV1alpha1ServersTransport";

/**
 * ServersTransport is the CRD implementation of a ServersTransport. If no serversTransport is specified, the default@internal will be used. The default@internal serversTransport is created from the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#serverstransport_1
 */
export interface IServersTransport {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "traefik.containo.us/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ServersTransport";
  "metadata": IObjectMeta;
  /**
   * ServersTransportSpec defines the desired state of a ServersTransport.
   */
  "spec": {
    /**
     * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
     */
    "certificatesSecrets"?: Array<string>;
    /**
     * DisableHTTP2 disables HTTP/2 for connections with backend servers.
     */
    "disableHTTP2"?: boolean;
    /**
     * ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.
     */
    "forwardingTimeouts"?: {
      /**
       * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
       */
      "dialTimeout"?: number | string;
      /**
       * IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.
       */
      "idleConnTimeout"?: number | string;
      /**
       * PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.
       */
      "pingTimeout"?: number | string;
      /**
       * ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.
       */
      "readIdleTimeout"?: number | string;
      /**
       * ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).
       */
      "responseHeaderTimeout"?: number | string;
    };
    /**
     * InsecureSkipVerify disables SSL certificate verification.
     */
    "insecureSkipVerify"?: boolean;
    /**
     * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.
     */
    "maxIdleConnsPerHost"?: number;
    /**
     * PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
     */
    "peerCertURI"?: string;
    /**
     * RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.
     */
    "rootCAsSecrets"?: Array<string>;
    /**
     * ServerName defines the server name used to contact the server.
     */
    "serverName"?: string;
  };
}

/**
 * ServersTransport is the CRD implementation of a ServersTransport. If no serversTransport is specified, the default@internal will be used. The default@internal serversTransport is created from the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#serverstransport_1
 */
export class ServersTransport extends Model<IServersTransport> implements IServersTransport {
  "apiVersion": IServersTransport["apiVersion"];
  "kind": IServersTransport["kind"];
  "metadata": IServersTransport["metadata"];
  "spec": IServersTransport["spec"];

static apiVersion: IServersTransport["apiVersion"] = "traefik.containo.us/v1alpha1";
static kind: IServersTransport["kind"] = "ServersTransport";
static is = createTypeMetaGuard<IServersTransport>(ServersTransport);

constructor(data?: ModelData<IServersTransport>) {
  super();

  this.setDefinedProps({
    apiVersion: ServersTransport.apiVersion,
    kind: ServersTransport.kind,
    ...data
  } as IServersTransport);
}
}


setValidateFunc(ServersTransport, validate as ValidateFunc<IServersTransport>);
