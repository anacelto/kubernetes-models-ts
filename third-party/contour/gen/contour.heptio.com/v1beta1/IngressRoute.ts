import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ContourHeptioComV1beta1IngressRoute";

/**
 * IngressRoute is an Ingress CRD specificiation
 */
export interface IIngressRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "contour.heptio.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "IngressRoute";
  "metadata": IObjectMeta;
  /**
   * IngressRouteSpec defines the spec of the CRD
   */
  "spec": {
    /**
     * Routes are the ingress routes. If TCPProxy is present, Routes is ignored.
     */
    "routes"?: Array<{
      /**
       * Delegate specifies that this route should be delegated to another IngressRoute
       */
      "delegate"?: {
        /**
         * Name of the IngressRoute
         */
        "name": string;
        /**
         * Namespace of the IngressRoute. Defaults to the current namespace if not supplied.
         */
        "namespace"?: string;
      };
      /**
       * Enables websocket support for the route
       */
      "enableWebsockets"?: boolean;
      /**
       * Match defines the prefix match
       */
      "match": string;
      /**
       * Allow this path to respond to insecure requests over HTTP which are normally not permitted when a `virtualhost.tls` block is present.
       */
      "permitInsecure"?: boolean;
      /**
       * Indicates that during forwarding, the matched prefix (or path) should be swapped with this value
       */
      "prefixRewrite"?: string;
      /**
       * The retry policy for this route
       */
      "retryPolicy"?: {
        /**
         * NumRetries is maximum allowed number of retries. If not supplied, the number of retries is one.
         */
        "count"?: number;
        /**
         * PerTryTimeout specifies the timeout per retry attempt. Ignored if NumRetries is not supplied.
         */
        "perTryTimeout"?: string;
      };
      /**
       * Services are the services to proxy traffic
       */
      "services"?: Array<{
        /**
         * HealthCheck defines optional healthchecks on the upstream service
         */
        "healthCheck"?: {
          /**
           * The number of healthy health checks required before a host is marked healthy
           */
          "healthyThresholdCount"?: number;
          /**
           * The value of the host header in the HTTP health check request. If left empty (default value), the name "contour-envoy-healthcheck" will be used.
           */
          "host"?: string;
          /**
           * The interval (seconds) between health checks
           */
          "intervalSeconds"?: number;
          /**
           * HTTP endpoint used to perform health checks on upstream service
           */
          "path": string;
          /**
           * The time to wait (seconds) for a health check response
           */
          "timeoutSeconds"?: number;
          /**
           * The number of unhealthy health checks required before a host is marked unhealthy
           */
          "unhealthyThresholdCount"?: number;
        };
        /**
         * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
         */
        "name": string;
        /**
         * Port (defined as Integer) to proxy traffic to since a service can have multiple defined
         */
        "port": number;
        /**
         * LB Algorithm to apply (see https://github.com/projectcontour/contour/blob/master/design/ingressroute-design.md#load-balancing)
         */
        "strategy"?: string;
        /**
         * UpstreamValidation defines how to verify the backend service's certificate
         */
        "validation"?: {
          /**
           * Name of the Kubernetes secret be used to validate the certificate presented by the backend
           */
          "caSecret": string;
          /**
           * Key which is expected to be present in the 'subjectAltName' of the presented certificate
           */
          "subjectName": string;
        };
        /**
         * Weight defines percentage of traffic to balance traffic
         */
        "weight"?: number;
      }>;
      /**
       * The timeout policy for this route
       */
      "timeoutPolicy"?: {
        /**
         * Timeout for receiving a response from the server after processing a request from client. If not supplied the timeout duration is undefined.
         */
        "request"?: string;
      };
    }>;
    /**
     * TCPProxy holds TCP proxy information.
     */
    "tcpproxy"?: {
      /**
       * Delegate specifies that this tcpproxy should be delegated to another IngressRoute
       */
      "delegate"?: {
        /**
         * Name of the IngressRoute
         */
        "name": string;
        /**
         * Namespace of the IngressRoute. Defaults to the current namespace if not supplied.
         */
        "namespace"?: string;
      };
      /**
       * Services are the services to proxy traffic
       */
      "services"?: Array<{
        /**
         * HealthCheck defines optional healthchecks on the upstream service
         */
        "healthCheck"?: {
          /**
           * The number of healthy health checks required before a host is marked healthy
           */
          "healthyThresholdCount"?: number;
          /**
           * The value of the host header in the HTTP health check request. If left empty (default value), the name "contour-envoy-healthcheck" will be used.
           */
          "host"?: string;
          /**
           * The interval (seconds) between health checks
           */
          "intervalSeconds"?: number;
          /**
           * HTTP endpoint used to perform health checks on upstream service
           */
          "path": string;
          /**
           * The time to wait (seconds) for a health check response
           */
          "timeoutSeconds"?: number;
          /**
           * The number of unhealthy health checks required before a host is marked unhealthy
           */
          "unhealthyThresholdCount"?: number;
        };
        /**
         * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
         */
        "name": string;
        /**
         * Port (defined as Integer) to proxy traffic to since a service can have multiple defined
         */
        "port": number;
        /**
         * LB Algorithm to apply (see https://github.com/projectcontour/contour/blob/master/design/ingressroute-design.md#load-balancing)
         */
        "strategy"?: string;
        /**
         * UpstreamValidation defines how to verify the backend service's certificate
         */
        "validation"?: {
          /**
           * Name of the Kubernetes secret be used to validate the certificate presented by the backend
           */
          "caSecret": string;
          /**
           * Key which is expected to be present in the 'subjectAltName' of the presented certificate
           */
          "subjectName": string;
        };
        /**
         * Weight defines percentage of traffic to balance traffic
         */
        "weight"?: number;
      }>;
    };
    /**
     * Virtualhost appears at most once. If it is present, the object is considered to be a "root".
     */
    "virtualhost"?: {
      /**
       * The fully qualified domain name of the root of the ingress tree all leaves of the DAG rooted at this object relate to the fqdn
       */
      "fqdn": string;
      /**
       * If present describes tls properties. The SNI names that will be matched on are described in fqdn, the tls.secretName secret must contain a matching certificate
       */
      "tls"?: {
        /**
         * Minimum TLS version this vhost should negotiate
         */
        "minimumProtocolVersion"?: string;
        /**
         * If Passthrough is set to true, the SecretName will be ignored and the encrypted handshake will be passed through to the backing cluster.
         */
        "passthrough"?: boolean;
        /**
         * required, the name of a secret in the current namespace
         */
        "secretName"?: string;
      };
    };
  };
  /**
   * Status reports the current state of the HTTPProxy.
   */
  "status"?: {
    "currentStatus"?: string;
    "description"?: string;
    /**
     * LoadBalancer contains the current status of the load balancer.
     */
    "loadBalancer"?: {
      /**
       * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
       */
      "ingress"?: Array<{
        /**
         * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
         */
        "hostname"?: string;
        /**
         * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
         */
        "ip"?: string;
      }>;
    };
  };
}

/**
 * IngressRoute is an Ingress CRD specificiation
 */
export class IngressRoute extends Model<IIngressRoute> implements IIngressRoute {
  "apiVersion": IIngressRoute["apiVersion"];
  "kind": IIngressRoute["kind"];
  "metadata": IIngressRoute["metadata"];
  "spec": IIngressRoute["spec"];
  "status"?: IIngressRoute["status"];

static apiVersion: IIngressRoute["apiVersion"] = "contour.heptio.com/v1beta1";
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
