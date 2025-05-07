import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TraefikContainoUsV1alpha1IngressRouteUDP";

/**
 * IngressRouteUDP is a CRD implementation of a Traefik UDP Router.
 */
export interface IIngressRouteUDP {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "traefik.containo.us/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "IngressRouteUDP";
  "metadata": IObjectMeta;
  /**
   * IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.
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
       * Services defines the list of UDP services.
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
         * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
         */
        "weight"?: number;
      }>;
    }>;
  };
}

/**
 * IngressRouteUDP is a CRD implementation of a Traefik UDP Router.
 */
export class IngressRouteUDP extends Model<IIngressRouteUDP> implements IIngressRouteUDP {
  "apiVersion": IIngressRouteUDP["apiVersion"];
  "kind": IIngressRouteUDP["kind"];
  "metadata": IIngressRouteUDP["metadata"];
  "spec": IIngressRouteUDP["spec"];

static apiVersion: IIngressRouteUDP["apiVersion"] = "traefik.containo.us/v1alpha1";
static kind: IIngressRouteUDP["kind"] = "IngressRouteUDP";
static is = createTypeMetaGuard<IIngressRouteUDP>(IngressRouteUDP);

constructor(data?: ModelData<IIngressRouteUDP>) {
  super();

  this.setDefinedProps({
    apiVersion: IngressRouteUDP.apiVersion,
    kind: IngressRouteUDP.kind,
    ...data
  } as IIngressRouteUDP);
}
}


setValidateFunc(IngressRouteUDP, validate as ValidateFunc<IIngressRouteUDP>);
