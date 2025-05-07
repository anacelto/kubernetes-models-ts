import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * IngressRouteTCP is the CRD implementation of a Traefik TCP Router.
 */
export interface IIngressRouteTCP {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "traefik.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "IngressRouteTCP";
    "metadata": IObjectMeta;
    /**
     * IngressRouteTCPSpec defines the desired state of IngressRouteTCP.
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
             * Match defines the router's rule. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#rule_1
             */
            "match": string;
            /**
             * Middlewares defines the list of references to MiddlewareTCP resources.
             */
            "middlewares"?: Array<{
                /**
                 * Name defines the name of the referenced Traefik resource.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Traefik resource.
                 */
                "namespace"?: string;
            }>;
            /**
             * Priority defines the router's priority. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#priority_1
             */
            "priority"?: number;
            /**
             * Services defines the list of TCP services.
             */
            "services"?: Array<{
                /**
                 * Name defines the name of the referenced Kubernetes Service.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Kubernetes Service.
                 */
                "namespace"?: string;
                /**
                 * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
                 */
                "nativeLB"?: boolean;
                /**
                 * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
                 */
                "port": number | string;
                /**
                 * ProxyProtocol defines the PROXY protocol configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#proxy-protocol
                 */
                "proxyProtocol"?: {
                    /**
                     * Version defines the PROXY Protocol version to use.
                     */
                    "version"?: number;
                };
                /**
                 * TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates it has closed the writing capability of its connection, to close the reading capability as well, hence fully terminating the connection. It is a duration in milliseconds, defaulting to 100. A negative value means an infinite deadline (i.e. the reading capability is never closed).
                 */
                "terminationDelay"?: number;
                /**
                 * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
                 */
                "weight"?: number;
            }>;
        }>;
        /**
         * TLS defines the TLS configuration on a layer 4 / TCP Route. More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls_1
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
                 * Name defines the name of the referenced Traefik resource.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Traefik resource.
                 */
                "namespace"?: string;
            };
            /**
             * Passthrough defines whether a TLS router will terminate the TLS connection.
             */
            "passthrough"?: boolean;
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            "secretName"?: string;
            /**
             * Store defines the reference to the TLSStore, that will be used to store certificates. Please note that only `default` TLSStore can be used.
             */
            "store"?: {
                /**
                 * Name defines the name of the referenced Traefik resource.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Traefik resource.
                 */
                "namespace"?: string;
            };
        };
    };
}
/**
 * IngressRouteTCP is the CRD implementation of a Traefik TCP Router.
 */
export declare class IngressRouteTCP extends Model<IIngressRouteTCP> implements IIngressRouteTCP {
    "apiVersion": IIngressRouteTCP["apiVersion"];
    "kind": IIngressRouteTCP["kind"];
    "metadata": IIngressRouteTCP["metadata"];
    "spec": IIngressRouteTCP["spec"];
    static apiVersion: IIngressRouteTCP["apiVersion"];
    static kind: IIngressRouteTCP["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIngressRouteTCP>;
    constructor(data?: ModelData<IIngressRouteTCP>);
}
