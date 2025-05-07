import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MulticlusterLinkerdIoV1alpha1Link";

export interface ILink {
  "spec"?: {
    /**
     * Kubernetes secret of target cluster
     */
    "clusterCredentialsSecret"?: string;
    /**
     * Gateway address of target cluster
     */
    "gatewayAddress"?: string;
    /**
     * Gateway Identity FQDN
     */
    "gatewayIdentity"?: string;
    /**
     * Gateway Port
     */
    "gatewayPort"?: string;
    /**
     * Spec for gateway health probe
     */
    "probeSpec"?: {
      /**
       * Minimum consecutive failures for the probe to be considered failed
       */
      "failureThreshold"?: string;
      /**
       * Path of remote gateway health endpoint
       */
      "path"?: string;
      /**
       * Interval in between probe requests
       */
      "period"?: string;
      /**
       * Port of remote gateway health endpoint
       */
      "port"?: string;
      /**
       * Probe request timeout
       */
      "timeout"?: string;
    };
    /**
     * Kubernetes Label Selector
     */
    "selector"?: {
      "matchLabels"?: {
      };
      /**
       * List of selector requirements
       */
      "matchExpressions"?: Array<{
        /**
         * Label key that selector should apply to
         */
        "key": string;
        /**
         * Evaluation of a label in relation to set
         */
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * Selector for Services to mirror in remote discovery mode
     */
    "remoteDiscoverySelector"?: {
      "matchLabels"?: {
      };
      /**
       * List of selector requirements
       */
      "matchExpressions"?: Array<{
        /**
         * Label key that selector should apply to
         */
        "key": string;
        /**
         * Evaluation of a label in relation to set
         */
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * Name of target cluster to link to
     */
    "targetClusterName"?: string;
    /**
     * Domain name of target cluster to link to
     */
    "targetClusterDomain"?: string;
    /**
     * Name of namespace Linkerd control plane is installed in on target cluster
     */
    "targetClusterLinkerdNamespace"?: string;
  };
  "apiVersion": "multicluster.linkerd.io/v1alpha1";
  "kind": "Link";
  "metadata"?: IObjectMeta;
}

export class Link extends Model<ILink> implements ILink {
  "spec"?: ILink["spec"];
  "apiVersion": ILink["apiVersion"];
  "kind": ILink["kind"];
  "metadata"?: ILink["metadata"];

static apiVersion: ILink["apiVersion"] = "multicluster.linkerd.io/v1alpha1";
static kind: ILink["kind"] = "Link";
static is = createTypeMetaGuard<ILink>(Link);

constructor(data?: ModelData<ILink>) {
  super();

  this.setDefinedProps({
    apiVersion: Link.apiVersion,
    kind: Link.kind,
    ...data
  } as ILink);
}
}


setValidateFunc(Link, validate as ValidateFunc<ILink>);
