import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HncXK8sIoV1alpha2HNCConfiguration";

/**
 * HNCConfiguration is a cluster-wide configuration for HNC as a whole. See details in http://bit.ly/hnc-type-configuration
 */
export interface IHNCConfiguration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "hnc.x-k8s.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HNCConfiguration";
  "metadata"?: IObjectMeta;
  /**
   * HNCConfigurationSpec defines the desired state of HNC configuration.
   */
  "spec"?: {
    /**
     * Resources defines the cluster-wide settings for resource synchronization. Note that 'roles' and 'rolebindings' are pre-configured by HNC with 'Propagate' mode and are omitted in the spec. Any configuration of 'roles' or 'rolebindings' are not allowed. To learn more, see https://github.com/kubernetes-sigs/hierarchical-namespaces/blob/master/docs/user-guide/how-to.md#admin-types
     */
    "resources"?: Array<{
      /**
       * Group of the resource defined below. This is used to unambiguously identify the resource. It may be omitted for core resources (e.g. "secrets").
       */
      "group"?: string;
      /**
       * Synchronization mode of the kind. If the field is empty, it will be treated as "Propagate".
       */
      "mode"?: "Propagate" | "Ignore" | "Remove" | "AllowPropagate";
      /**
       * Resource to be configured.
       */
      "resource": string;
    }>;
  };
  /**
   * HNCConfigurationStatus defines the observed state of HNC configuration.
   */
  "status"?: {
    /**
     * Conditions describes the errors, if any. If there are any conditions with "ActivitiesHalted" reason, this means that HNC cannot function in the affected namespaces. The HierarchyConfiguration object in each of the affected namespaces will have more information. To learn more about conditions, see https://github.com/kubernetes-sigs/hierarchical-namespaces/blob/master/docs/user-guide/concepts.md#admin-conditions.
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
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
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
    }>;
    /**
     * Resources indicates the observed synchronization states of the resources.
     */
    "resources"?: Array<{
      /**
       * The API group of the resource being synchronized.
       */
      "group": string;
      /**
       * Mode describes the synchronization mode of the kind. Typically, it will be the same as the mode in the spec, except when the reconciler has fallen behind or for resources with an enforced default synchronization mode, such as RBAC objects.
       */
      "mode"?: string;
      /**
       * Tracks the number of objects that are being propagated to descendant namespaces. The propagated objects are created by HNC.
       */
      "numPropagatedObjects"?: number;
      /**
       * Tracks the number of objects that are created by users.
       */
      "numSourceObjects"?: number;
      /**
       * The resource being synchronized.
       */
      "resource": string;
      /**
       * The API version used by HNC when propagating this resource.
       */
      "version": string;
    }>;
  };
}

/**
 * HNCConfiguration is a cluster-wide configuration for HNC as a whole. See details in http://bit.ly/hnc-type-configuration
 */
export class HNCConfiguration extends Model<IHNCConfiguration> implements IHNCConfiguration {
  "apiVersion": IHNCConfiguration["apiVersion"];
  "kind": IHNCConfiguration["kind"];
  "metadata"?: IHNCConfiguration["metadata"];
  "spec"?: IHNCConfiguration["spec"];
  "status"?: IHNCConfiguration["status"];

static apiVersion: IHNCConfiguration["apiVersion"] = "hnc.x-k8s.io/v1alpha2";
static kind: IHNCConfiguration["kind"] = "HNCConfiguration";
static is = createTypeMetaGuard<IHNCConfiguration>(HNCConfiguration);

constructor(data?: ModelData<IHNCConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: HNCConfiguration.apiVersion,
    kind: HNCConfiguration.kind,
    ...data
  } as IHNCConfiguration);
}
}


setValidateFunc(HNCConfiguration, validate as ValidateFunc<IHNCConfiguration>);
