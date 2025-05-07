import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodIP";

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 * 
 * 	IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export interface IPodIP {
  /**
   * ip is an IP address (IPv4 or IPv6) assigned to the pod
   */
  "ip"?: string;
}

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 * 
 * 	IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export class PodIP extends Model<IPodIP> implements IPodIP {
  "ip"?: string;

constructor(data?: ModelData<IPodIP>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodIP, validate as ValidateFunc<IPodIP>);

export {
  IPodIP as IIoK8sApiCoreV1PodIP,
  PodIP as IoK8sApiCoreV1PodIP
};
