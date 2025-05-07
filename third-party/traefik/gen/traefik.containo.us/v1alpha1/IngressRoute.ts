import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TraefikContainoUsV1alpha1IngressRoute";

/**
 * IngressRoute is the CRD implementation of a Traefik HTTP Router.
 */
export interface IIngressRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "traefik.containo.us/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "IngressRoute";
  "metadata": IObjectMeta;
  /**
   * IngressRouteSpec defines the desired state of IngressRoute.
   */
  "spec": {
    /**
     * EntryPoints defines the list of entry point names to bind to. Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/entrypoints/ Default: all.
     */
    "entryPoints"?: Array<string>;
    /**
     * Routes defines the list of routes.
     */
    "routes": Array<{
      /**
       * Kind defines the kind of the route. Rule is the only supported kind.
       */
      "kind": "Rule";
      /**
       * Match defines the router's rule. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#rule
       */
      "match": string;
      /**
       * Middlewares defines the list of references to Middleware resources. More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-middleware
       */
      "middlewares"?: Array<{
        /**
         * Name defines the name of the referenced Middleware resource.
         */
        "name": string;
        /**
         * Namespace defines the namespace of the referenced Middleware resource.
         */
        "namespace"?: string;
      }>;
      /**
       * Priority defines the router's priority. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#priority
       */
      "priority"?: number;
      /**
       * Services defines the list of Service. It can contain any combination of TraefikService and/or reference to a Kubernetes Service.
       */
      "services"?: Array<{
        /**
         * Kind defines the kind of the Service.
         */
        "kind"?: "Service" | "TraefikService";
        /**
         * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
         */
        "name": string;
        /**
         * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
         */
        "namespace"?: string;
        /**
         * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
         */
        "nativeLB"?: boolean;
        /**
         * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
         */
        "passHostHeader"?: boolean;
        /**
         * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
         */
        "port"?: number | string;
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        "responseForwarding"?: {
          /**
           * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
           */
          "flushInterval"?: string;
        };
        /**
         * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
         */
        "scheme"?: string;
        /**
         * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
         */
        "serversTransport"?: string;
        /**
         * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions
         */
        "sticky"?: {
          /**
           * Cookie defines the sticky cookie configuration.
           */
          "cookie"?: {
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            "httpOnly"?: boolean;
            /**
             * Name defines the Cookie name.
             */
            "name"?: string;
            /**
             * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            "sameSite"?: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            "secure"?: boolean;
          };
        };
        /**
         * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
         */
        "strategy"?: string;
        /**
         * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
         */
        "weight"?: number;
      }>;
    }>;
    /**
     * TLS defines the TLS configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls
     */
    "tls"?: {
      /**
       * CertResolver defines the name of the certificate resolver to use. Cert resolvers have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/https/acme/#certificate-resolvers
       */
      "certResolver"?: string;
      /**
       * Domains defines the list of domains that will be used to issue certificates. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#domains
       */
      "domains"?: Array<{
        /**
         * Main defines the main domain name.
         */
        "main"?: string;
        /**
         * SANs defines the subject alternative domain names.
         */
        "sans"?: Array<string>;
      }>;
      /**
       * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection. If not defined, the `default` TLSOption is used. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options
       */
      "options"?: {
        /**
         * Name defines the name of the referenced TLSOption. More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsoption
         */
        "name": string;
        /**
         * Namespace defines the namespace of the referenced TLSOption. More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsoption
         */
        "namespace"?: string;
      };
      /**
       * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
       */
      "secretName"?: string;
      /**
       * Store defines the reference to the TLSStore, that will be used to store certificates. Please note that only `default` TLSStore can be used.
       */
      "store"?: {
        /**
         * Name defines the name of the referenced TLSStore. More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsstore
         */
        "name": string;
        /**
         * Namespace defines the namespace of the referenced TLSStore. More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsstore
         */
        "namespace"?: string;
      };
    };
  };
}

/**
 * IngressRoute is the CRD implementation of a Traefik HTTP Router.
 */
export class IngressRoute extends Model<IIngressRoute> implements IIngressRoute {
  "apiVersion": IIngressRoute["apiVersion"];
  "kind": IIngressRoute["kind"];
  "metadata": IIngressRoute["metadata"];
  "spec": IIngressRoute["spec"];

static apiVersion: IIngressRoute["apiVersion"] = "traefik.containo.us/v1alpha1";
static kind: IIngressRoute["kind"] = "IngressRoute";
static is = createTypeMetaGuard<IIngressRoute>(IngressRoute);

constructor(data?: ModelData<IIngressRoute>) {
  super();

  this.setDefinedProps({
    apiVersion: IngressRoute.apiVersion,
    kind: IngressRoute.kind,
    ...data
  } as IIngressRoute);
}
}


setValidateFunc(IngressRoute, validate as ValidateFunc<IIngressRoute>);
