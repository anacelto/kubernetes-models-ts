import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingInternalKnativeDevV1alpha1Ingress";

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable URLs, load balance traffic, offer name based virtual hosting, etc. 
 *  This is heavily based on K8s Ingress https://godoc.org/k8s.io/api/networking/v1beta1#Ingress which some highlighted modifications.
 */
export interface IIngress {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "networking.internal.knative.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Ingress";
  "metadata"?: IObjectMeta;
  /**
   * Spec is the desired state of the Ingress. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec"?: {
    /**
     * HTTPOption is the option of HTTP. It has the following two values: `HTTPOptionEnabled`, `HTTPOptionRedirected`
     */
    "httpOption"?: string;
    /**
     * A list of host rules used to configure the Ingress.
     */
    "rules"?: Array<{
      /**
       * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently a rule value can only apply to the IP in the Spec of the parent . 2. The `:` delimiter is not respected because ports are not allowed. Currently the port of an Ingress is implicitly :80 for http and :443 for https. Both these may change in the future. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. If multiple matching Hosts were provided, the first rule will take precedent.
       */
      "hosts"?: Array<string>;
      /**
       * HTTP represents a rule to apply against incoming requests. If the rule is satisfied, the request is routed to the specified backend.
       */
      "http"?: {
        /**
         * A collection of paths that map requests to backends. 
         *  If they are multiple matching paths, the first match takes precedence.
         */
        "paths": Array<{
          /**
           * AppendHeaders allow specifying additional HTTP headers to add before forwarding a request to the destination service. 
           *  NOTE: This differs from K8s Ingress which doesn't allow header appending.
           */
          "appendHeaders"?: {
            [key: string]: string;
          };
          /**
           * Headers defines header matching rules which is a map from a header name to HeaderMatch which specify a matching condition. When a request matched with all the header matching rules, the request is routed by the corresponding ingress rule. If it is empty, the headers are not used for matching
           */
          "headers"?: {
            [key: string]: {
              "exact": string;
            };
          };
          /**
           * Path represents a literal prefix to which this rule should apply. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
           */
          "path"?: string;
          /**
           * RewriteHost rewrites the incoming request's host header. 
           *  This field is currently experimental and not supported by all Ingress implementations.
           */
          "rewriteHost"?: string;
          /**
           * Splits defines the referenced service endpoints to which the traffic will be forwarded to.
           */
          "splits": Array<{
            /**
             * AppendHeaders allow specifying additional HTTP headers to add before forwarding a request to the destination service. 
             *  NOTE: This differs from K8s Ingress which doesn't allow header appending.
             */
            "appendHeaders"?: {
              [key: string]: string;
            };
            /**
             * Specifies the split percentage, a number between 0 and 100.  If only one split is specified, we default to 100. 
             *  NOTE: This differs from K8s Ingress to allow percentage split.
             */
            "percent"?: number;
            /**
             * Specifies the name of the referenced service.
             */
            "serviceName": string;
            /**
             * Specifies the namespace of the referenced service. 
             *  NOTE: This differs from K8s Ingress to allow routing to different namespaces.
             */
            "serviceNamespace": string;
            /**
             * Specifies the port of the referenced service.
             */
            "servicePort": number | string;
          }>;
        }>;
      };
      /**
       * Visibility signifies whether this rule should `ClusterLocal`. If it's not specified then it defaults to `ExternalIP`.
       */
      "visibility"?: string;
    }>;
    /**
     * TLS configuration. Currently Ingress only supports a single TLS port: 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     */
    "tls"?: Array<{
      /**
       * Hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
       */
      "hosts"?: Array<string>;
      /**
       * SecretName is the name of the secret used to terminate SSL traffic.
       */
      "secretName"?: string;
      /**
       * SecretNamespace is the namespace of the secret used to terminate SSL traffic. If not set the namespace should be assumed to be the same as the Ingress. If set the secret should have the same namespace as the Ingress otherwise the behaviour is undefined and not supported.
       */
      "secretNamespace"?: string;
    }>;
  };
  /**
   * Status is the current state of the Ingress. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: {
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
      [key: string]: string;
    };
    /**
     * Conditions the latest available observations of a resource's current state.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
       */
      "lastTransitionTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition.
       */
      "type": string;
    }>;
    /**
     * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
     */
    "observedGeneration"?: number;
    /**
     * PrivateLoadBalancer contains the current status of the load-balancer.
     */
    "privateLoadBalancer"?: {
      /**
       * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
       */
      "ingress"?: Array<{
        /**
         * Domain is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
         */
        "domain"?: string;
        /**
         * DomainInternal is set if there is a cluster-local DNS name to access the Ingress. 
         *  NOTE: This differs from K8s Ingress, since we also desire to have a cluster-local DNS name to allow routing in case of not having a mesh.
         */
        "domainInternal"?: string;
        /**
         * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
         */
        "ip"?: string;
        /**
         * MeshOnly is set if the Ingress is only load-balanced through a Service mesh.
         */
        "meshOnly"?: boolean;
      }>;
    };
    /**
     * PublicLoadBalancer contains the current status of the load-balancer.
     */
    "publicLoadBalancer"?: {
      /**
       * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
       */
      "ingress"?: Array<{
        /**
         * Domain is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
         */
        "domain"?: string;
        /**
         * DomainInternal is set if there is a cluster-local DNS name to access the Ingress. 
         *  NOTE: This differs from K8s Ingress, since we also desire to have a cluster-local DNS name to allow routing in case of not having a mesh.
         */
        "domainInternal"?: string;
        /**
         * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
         */
        "ip"?: string;
        /**
         * MeshOnly is set if the Ingress is only load-balanced through a Service mesh.
         */
        "meshOnly"?: boolean;
      }>;
    };
  };
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable URLs, load balance traffic, offer name based virtual hosting, etc. 
 *  This is heavily based on K8s Ingress https://godoc.org/k8s.io/api/networking/v1beta1#Ingress which some highlighted modifications.
 */
export class Ingress extends Model<IIngress> implements IIngress {
  "apiVersion": IIngress["apiVersion"];
  "kind": IIngress["kind"];
  "metadata"?: IIngress["metadata"];
  "spec"?: IIngress["spec"];
  "status"?: IIngress["status"];

static apiVersion: IIngress["apiVersion"] = "networking.internal.knative.dev/v1alpha1";
static kind: IIngress["kind"] = "Ingress";
static is = createTypeMetaGuard<IIngress>(Ingress);

constructor(data?: ModelData<IIngress>) {
  super();

  this.setDefinedProps({
    apiVersion: Ingress.apiVersion,
    kind: Ingress.kind,
    ...data
  } as IIngress);
}
}


setValidateFunc(Ingress, validate as ValidateFunc<IIngress>);
