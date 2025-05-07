import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeFirewallPolicyRule";

export interface IComputeFirewallPolicyRule {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeFirewallPolicyRule";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
     */
    "action": string;
    /**
     * An optional description for this resource.
     */
    "description"?: string;
    /**
     * The direction in which this rule applies. Possible values: INGRESS, EGRESS
     */
    "direction": string;
    /**
     * Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
     */
    "disabled"?: boolean;
    /**
     * Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
     */
    "enableLogging"?: boolean;
    /**
     * Immutable.
     */
    "firewallPolicyRef": {
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * The firewall policy of the resource.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
     */
    "match": {
      /**
       * Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.
       */
      "destAddressGroups"?: Array<string>;
      /**
       * Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.
       */
      "destFqdns"?: Array<string>;
      /**
       * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.
       */
      "destIPRanges"?: Array<string>;
      /**
       * The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.
       */
      "destRegionCodes"?: Array<string>;
      /**
       * Name of the Google Cloud Threat Intelligence list.
       */
      "destThreatIntelligences"?: Array<string>;
      /**
       * Pairs of IP protocols and ports that the rule should match.
       */
      "layer4Configs": Array<{
        /**
         * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.
         */
        "ipProtocol": string;
        /**
         * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.
         */
        "ports"?: Array<string>;
      }>;
      /**
       * Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.
       */
      "srcAddressGroups"?: Array<string>;
      /**
       * Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.
       */
      "srcFqdns"?: Array<string>;
      /**
       * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.
       */
      "srcIPRanges"?: Array<string>;
      /**
       * The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.
       */
      "srcRegionCodes"?: Array<string>;
      /**
       * Name of the Google Cloud Threat Intelligence list.
       */
      "srcThreatIntelligences"?: Array<string>;
    };
    /**
     * Immutable. An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
     */
    "priority": number;
    "targetResources"?: Array<{
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>)>;
    "targetServiceAccounts"?: Array<{
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The Google Cloud resource name of an `IAMServiceAccount` resource (format: `projects/{{project}}/serviceAccounts/{{name}}@{{project}}.iam.gserviceaccount.com`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>)>;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules
     */
    "kind"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Calculation of the complexity of a single firewall policy rule.
     */
    "ruleTupleCount"?: number;
  };
}

export class ComputeFirewallPolicyRule extends Model<IComputeFirewallPolicyRule> implements IComputeFirewallPolicyRule {
  "apiVersion": IComputeFirewallPolicyRule["apiVersion"];
  "kind": IComputeFirewallPolicyRule["kind"];
  "metadata"?: IComputeFirewallPolicyRule["metadata"];
  "spec": IComputeFirewallPolicyRule["spec"];
  "status"?: IComputeFirewallPolicyRule["status"];

static apiVersion: IComputeFirewallPolicyRule["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeFirewallPolicyRule["kind"] = "ComputeFirewallPolicyRule";
static is = createTypeMetaGuard<IComputeFirewallPolicyRule>(ComputeFirewallPolicyRule);

constructor(data?: ModelData<IComputeFirewallPolicyRule>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeFirewallPolicyRule.apiVersion,
    kind: ComputeFirewallPolicyRule.kind,
    ...data
  } as IComputeFirewallPolicyRule);
}
}


setValidateFunc(ComputeFirewallPolicyRule, validate as ValidateFunc<IComputeFirewallPolicyRule>);
