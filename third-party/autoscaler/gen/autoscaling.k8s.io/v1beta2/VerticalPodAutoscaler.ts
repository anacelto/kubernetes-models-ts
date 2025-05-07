import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingK8sIoV1beta2VerticalPodAutoscaler";

/**
 * VerticalPodAutoscaler is the configuration for a vertical pod autoscaler, which automatically manages pod resources based on historical and real time resource utilization.
 */
export interface IVerticalPodAutoscaler {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "autoscaling.k8s.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VerticalPodAutoscaler";
  "metadata"?: IObjectMeta;
  /**
   * Specification of the behavior of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
   */
  "spec": {
    /**
     * Controls how the autoscaler computes recommended resources. The resource policy may be used to set constraints on the recommendations for individual containers. If not specified, the autoscaler computes recommended resources for all containers in the pod, without additional constraints.
     */
    "resourcePolicy"?: {
      /**
       * Per-container resource policies.
       */
      "containerPolicies"?: Array<{
        /**
         * Name of the container or DefaultContainerResourcePolicy, in which case the policy is used by the containers that don't have their own policy specified.
         */
        "containerName"?: string;
        /**
         * Specifies the maximum amount of resources that will be recommended for the container. The default is no maximum.
         */
        "maxAllowed"?: {
          [key: string]: number | string;
        };
        /**
         * Specifies the minimal amount of resources that will be recommended for the container. The default is no minimum.
         */
        "minAllowed"?: {
          [key: string]: number | string;
        };
        /**
         * Whether autoscaler is enabled for the container. The default is "Auto".
         */
        "mode"?: "Auto" | "Off";
      }>;
    };
    /**
     * TargetRef points to the controller managing the set of pods for the autoscaler to control - e.g. Deployment, StatefulSet. VerticalPodAutoscaler can be targeted at controller implementing scale subresource (the pod set is retrieved from the controller's ScaleStatus) or some well known controllers (e.g. for DaemonSet the pod set is read from the controller's spec). If VerticalPodAutoscaler cannot use specified target it will report ConfigUnsupported condition. Note that VerticalPodAutoscaler does not require full implementation of scale subresource - it will not use it to modify the replica count. The only thing retrieved is a label selector matching pods grouped by the target resource.
     */
    "targetRef": {
      /**
       * API version of the referent
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
       */
      "kind": string;
      /**
       * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
       */
      "name": string;
    };
    /**
     * Describes the rules on how changes are applied to the pods. If not specified, all fields in the `PodUpdatePolicy` are set to their default values.
     */
    "updatePolicy"?: {
      /**
       * Controls when autoscaler applies changes to the pod resources. The default is 'Auto'.
       */
      "updateMode"?: "Off" | "Initial" | "Recreate" | "Auto";
    };
  };
  /**
   * Current information about the autoscaler.
   */
  "status"?: {
    /**
     * Conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another
       */
      "lastTransitionTime"?: string;
      /**
       * message is a human-readable explanation containing details about the transition
       */
      "message"?: string;
      /**
       * reason is the reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * status is the status of the condition (True, False, Unknown)
       */
      "status": string;
      /**
       * type describes the current condition
       */
      "type": string;
    }>;
    /**
     * The most recently computed amount of resources recommended by the autoscaler for the controlled pods.
     */
    "recommendation"?: {
      /**
       * Resources recommended by the autoscaler for each container.
       */
      "containerRecommendations"?: Array<{
        /**
         * Name of the container.
         */
        "containerName"?: string;
        /**
         * Minimum recommended amount of resources. Observes ContainerResourcePolicy. This amount is not guaranteed to be sufficient for the application to operate in a stable way, however running with less resources is likely to have significant impact on performance/availability.
         */
        "lowerBound"?: {
          [key: string]: number | string;
        };
        /**
         * Recommended amount of resources. Observes ContainerResourcePolicy.
         */
        "target": {
          [key: string]: number | string;
        };
        /**
         * The most recent recommended resources target computed by the autoscaler for the controlled pods, based only on actual resource usage, not taking into account the ContainerResourcePolicy. May differ from the Recommendation if the actual resource usage causes the target to violate the ContainerResourcePolicy (lower than MinAllowed or higher that MaxAllowed). Used only as status indication, will not affect actual resource assignment.
         */
        "uncappedTarget"?: {
          [key: string]: number | string;
        };
        /**
         * Maximum recommended amount of resources. Observes ContainerResourcePolicy. Any resources allocated beyond this value are likely wasted. This value may be larger than the maximum amount of application is actually capable of consuming.
         */
        "upperBound"?: {
          [key: string]: number | string;
        };
      }>;
    };
  };
}

/**
 * VerticalPodAutoscaler is the configuration for a vertical pod autoscaler, which automatically manages pod resources based on historical and real time resource utilization.
 */
export class VerticalPodAutoscaler extends Model<IVerticalPodAutoscaler> implements IVerticalPodAutoscaler {
  "apiVersion": IVerticalPodAutoscaler["apiVersion"];
  "kind": IVerticalPodAutoscaler["kind"];
  "metadata"?: IVerticalPodAutoscaler["metadata"];
  "spec": IVerticalPodAutoscaler["spec"];
  "status"?: IVerticalPodAutoscaler["status"];

static apiVersion: IVerticalPodAutoscaler["apiVersion"] = "autoscaling.k8s.io/v1beta2";
static kind: IVerticalPodAutoscaler["kind"] = "VerticalPodAutoscaler";
static is = createTypeMetaGuard<IVerticalPodAutoscaler>(VerticalPodAutoscaler);

constructor(data?: ModelData<IVerticalPodAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: VerticalPodAutoscaler.apiVersion,
    kind: VerticalPodAutoscaler.kind,
    ...data
  } as IVerticalPodAutoscaler);
}
}


setValidateFunc(VerticalPodAutoscaler, validate as ValidateFunc<IVerticalPodAutoscaler>);
