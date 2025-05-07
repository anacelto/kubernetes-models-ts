import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/WorkloadLinkerdIoV1beta1ExternalWorkload";

/**
 * An ExternalWorkload describes a single workload (i.e. a deployable unit) external to the cluster that should be enrolled in the mesh.
 */
export interface IExternalWorkload {
  "apiVerson"?: string;
  "kind": "ExternalWorkload";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * meshTLS describes TLS settings associated with an external workload.
     */
    "meshTLS": {
      /**
       * identity of the workload. Corresponds to the identity used in the workload's certificate. It is used by peers to perform verification in the mTLS handshake.
       */
      "identity": string;
      /**
       * serverName is the name of the workload in DNS format. It is used by the workload to terminate TLS using SNI.
       */
      "serverName": string;
    };
    /**
     * ports describes a list of ports exposed by the workload
     */
    "ports"?: Array<{
      /**
       * name must be an IANA_SVC_NAME and unique within the ports set. Each named port can be referred to by services.
       */
      "name"?: string;
      "port": number;
      /**
       * protocol exposed by the port. Must be UDP or TCP. Defaults to TCP.
       */
      "protocol"?: string;
    }>;
    /**
     * workloadIPs contains a list of IP addresses that can be used to send traffic to the workload. This field may hold a maximum of two entries. If one entry, it can be an IPv4 or IPv6 address; if two entries it should contain one IPv4 address and one IPv6 address.
     */
    "workloadIPs"?: Array<{
      "ip"?: string;
    }>;
  };
  "status"?: {
    "conditions"?: Array<{
      /**
       * lastProbeTime is the last time the healthcheck endpoint was probed.
       */
      "lastProbeTime"?: string;
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * status of the condition (one of True, False, Unknown)
       */
      "status"?: "True" | "False" | "Unknown";
      /**
       * type of the condition in CamelCase or in foo.example.com/CamelCase.
       */
      "type"?: string;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason"?: string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message"?: string;
    }>;
  };
  "apiVersion": "workload.linkerd.io/v1beta1";
}

/**
 * An ExternalWorkload describes a single workload (i.e. a deployable unit) external to the cluster that should be enrolled in the mesh.
 */
export class ExternalWorkload extends Model<IExternalWorkload> implements IExternalWorkload {
  "apiVerson"?: IExternalWorkload["apiVerson"];
  "kind": IExternalWorkload["kind"];
  "metadata"?: IExternalWorkload["metadata"];
  "spec": IExternalWorkload["spec"];
  "status"?: IExternalWorkload["status"];
  "apiVersion": IExternalWorkload["apiVersion"];

static apiVersion: IExternalWorkload["apiVersion"] = "workload.linkerd.io/v1beta1";
static kind: IExternalWorkload["kind"] = "ExternalWorkload";
static is = createTypeMetaGuard<IExternalWorkload>(ExternalWorkload);

constructor(data?: ModelData<IExternalWorkload>) {
  super();

  this.setDefinedProps({
    apiVersion: ExternalWorkload.apiVersion,
    kind: ExternalWorkload.kind,
    ...data
  } as IExternalWorkload);
}
}


setValidateFunc(ExternalWorkload, validate as ValidateFunc<IExternalWorkload>);
