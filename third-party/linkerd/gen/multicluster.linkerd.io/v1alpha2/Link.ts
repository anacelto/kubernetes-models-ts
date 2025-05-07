import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MulticlusterLinkerdIoV1alpha2Link";

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
     * Selector for federated service memebers
     */
    "federatedServiceSelector"?: {
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
  /**
   * Status defines the state of resources managed by this Link
   */
  "status"?: {
    /**
     * List of services mirrored by this Link
     */
    "mirrorServices"?: Array<{
      /**
       * Conditions of the mirrored service
       */
      "conditions"?: Array<{
        /**
         * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        "lastTransitionTime": string;
        /**
         * message is a human readable message indicating details about the transition. This may be an empty string.
         */
        "message": string;
        /**
         * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
         */
        "reason": string;
        /**
         * status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
        /**
         * LocalRef corresponds with the Service in the local cluster that this Link is managing.
         */
        "localRef"?: {
          /**
           * Group is the group of the referent.
           */
          "group"?: string;
          /**
           * Kind is kind of the referent.
           */
          "kind"?: string;
          /**
           * Name is the name of the referent.
           */
          "name": string;
          /**
           * Namespace is the namespace of the referent.
           */
          "namespace": string;
        };
      }>;
      /**
       * ControllerName is a domain/path string that indicates the name of the controller that wrote this status. This corresponds with the controllerName field on GatewayClass. 
       *  Example: "example.net/gateway-controller". 
       *  The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are valid Kubernetes names (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names). 
       *  Controllers MUST populate this field when writing status. Controllers should ensure that entries to status populated with their ControllerName are cleaned up when they are no longer necessary.
       */
      "controllerName": string;
      /**
       * RemoteRef corresponds with the Service in the target cluster that this Link is mirroring.
       */
      "remoteRef": {
        /**
         * Group is the group of the referent.
         */
        "group"?: string;
        /**
         * Kind is kind of the referent.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent.
         */
        "name": string;
        /**
         * Namespace is the namespace of the referent.
         */
        "namespace": string;
      };
    }>;
    /**
     * List of federated services mirrored by this Link
     */
    "federatedServices"?: Array<{
      /**
       * Conditions of the federated service
       */
      "conditions"?: Array<{
        /**
         * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        "lastTransitionTime": string;
        /**
         * message is a human readable message indicating details about the transition. This may be an empty string.
         */
        "message": string;
        /**
         * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
         */
        "reason": string;
        /**
         * status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
        /**
         * LocalRef corresponds with the Service in the local cluster that this Link is managing.
         */
        "localRef"?: {
          /**
           * Group is the group of the referent.
           */
          "group"?: string;
          /**
           * Kind is kind of the referent.
           */
          "kind"?: string;
          /**
           * Name is the name of the referent.
           */
          "name": string;
          /**
           * Namespace is the namespace of the referent.
           */
          "namespace": string;
        };
      }>;
      /**
       * ControllerName is a domain/path string that indicates the name of the controller that wrote this status. This corresponds with the controllerName field on GatewayClass. 
       *  Example: "example.net/gateway-controller". 
       *  The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are valid Kubernetes names (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names). 
       *  Controllers MUST populate this field when writing status. Controllers should ensure that entries to status populated with their ControllerName are cleaned up when they are no longer necessary.
       */
      "controllerName": string;
      /**
       * RemoteRef corresponds with the Service in the target cluster that this Link is mirroring.
       */
      "remoteRef": {
        /**
         * Group is the group of the referent.
         */
        "group"?: string;
        /**
         * Kind is kind of the referent.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent.
         */
        "name": string;
        /**
         * Namespace is the namespace of the referent.
         */
        "namespace": string;
      };
    }>;
  };
  "apiVersion": "multicluster.linkerd.io/v1alpha2";
  "kind": "Link";
  "metadata"?: IObjectMeta;
}

export class Link extends Model<ILink> implements ILink {
  "spec"?: ILink["spec"];
  "status"?: ILink["status"];
  "apiVersion": ILink["apiVersion"];
  "kind": ILink["kind"];
  "metadata"?: ILink["metadata"];

static apiVersion: ILink["apiVersion"] = "multicluster.linkerd.io/v1alpha2";
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
