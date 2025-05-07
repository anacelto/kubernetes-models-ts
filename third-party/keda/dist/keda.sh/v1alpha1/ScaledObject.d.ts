import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ScaledObject is a specification for a ScaledObject resource
 */
export interface IScaledObject {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "keda.sh/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ScaledObject";
    "metadata"?: IObjectMeta;
    /**
     * ScaledObjectSpec is the spec for a ScaledObject resource
     */
    "spec": {
        /**
         * AdvancedConfig specifies advance scaling options
         */
        "advanced"?: {
            /**
             * HorizontalPodAutoscalerConfig specifies horizontal scale config
             */
            "horizontalPodAutoscalerConfig"?: {
                /**
                 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
                 */
                "behavior"?: {
                    /**
                     * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
                     */
                    "scaleDown"?: {
                        /**
                         * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
                         */
                        "policies"?: Array<{
                            /**
                             * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                             */
                            "periodSeconds": number;
                            /**
                             * Type is used to specify the scaling policy.
                             */
                            "type": string;
                            /**
                             * Value contains the amount of change which is permitted by the policy. It must be greater than zero
                             */
                            "value": number;
                        }>;
                        /**
                         * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
                         */
                        "selectPolicy"?: string;
                        /**
                         * StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
                         */
                        "stabilizationWindowSeconds"?: number;
                    };
                    /**
                     * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of: \* increase no more than 4 pods per 60 seconds \* double the number of pods per 60 seconds No stabilization is used.
                     */
                    "scaleUp"?: {
                        /**
                         * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
                         */
                        "policies"?: Array<{
                            /**
                             * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                             */
                            "periodSeconds": number;
                            /**
                             * Type is used to specify the scaling policy.
                             */
                            "type": string;
                            /**
                             * Value contains the amount of change which is permitted by the policy. It must be greater than zero
                             */
                            "value": number;
                        }>;
                        /**
                         * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
                         */
                        "selectPolicy"?: string;
                        /**
                         * StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
                         */
                        "stabilizationWindowSeconds"?: number;
                    };
                };
                "name"?: string;
            };
            "restoreToOriginalReplicaCount"?: boolean;
        };
        "cooldownPeriod"?: number;
        /**
         * Fallback is the spec for fallback options
         */
        "fallback"?: {
            "failureThreshold": number;
            "replicas": number;
        };
        "idleReplicaCount"?: number;
        "maxReplicaCount"?: number;
        "minReplicaCount"?: number;
        "pollingInterval"?: number;
        /**
         * ScaleTarget holds the a reference to the scale target Object
         */
        "scaleTargetRef": {
            "apiVersion"?: string;
            "envSourceContainerName"?: string;
            "kind"?: string;
            "name": string;
        };
        "triggers": Array<{
            /**
             * ScaledObjectAuthRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that is used to authenticate the scaler with the environment
             */
            "authenticationRef"?: {
                /**
                 * Kind of the resource being referred to. Defaults to TriggerAuthentication.
                 */
                "kind"?: string;
                "name": string;
            };
            "metadata": {
                [key: string]: string;
            };
            /**
             * MetricTargetType specifies the type of metric being targeted, and should be either "Value", "AverageValue", or "Utilization"
             */
            "metricType"?: string;
            "name"?: string;
            "type": string;
            "useCachedMetrics"?: boolean;
        }>;
    };
    /**
     * ScaledObjectStatus is the status for a ScaledObject resource
     */
    "status"?: {
        /**
         * Conditions an array representation to store multiple Conditions
         */
        "conditions"?: Array<{
            /**
             * A human readable message indicating details about the transition.
             */
            "message"?: string;
            /**
             * The reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            "status": string;
            /**
             * Type of condition
             */
            "type": string;
        }>;
        "externalMetricNames"?: Array<string>;
        "health"?: {
            [key: string]: {
                "numberOfFailures"?: number;
                /**
                 * HealthStatusType is an indication of whether the health status is happy or failing
                 */
                "status"?: string;
            };
        };
        "hpaName"?: string;
        "lastActiveTime"?: string;
        "originalReplicaCount"?: number;
        "pausedReplicaCount"?: number;
        "resourceMetricNames"?: Array<string>;
        /**
         * GroupVersionKindResource provides unified structure for schema.GroupVersionKind and Resource
         */
        "scaleTargetGVKR"?: {
            "group": string;
            "kind": string;
            "resource": string;
            "version": string;
        };
        "scaleTargetKind"?: string;
    };
}
/**
 * ScaledObject is a specification for a ScaledObject resource
 */
export declare class ScaledObject extends Model<IScaledObject> implements IScaledObject {
    "apiVersion": IScaledObject["apiVersion"];
    "kind": IScaledObject["kind"];
    "metadata"?: IScaledObject["metadata"];
    "spec": IScaledObject["spec"];
    "status"?: IScaledObject["status"];
    static apiVersion: IScaledObject["apiVersion"];
    static kind: IScaledObject["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IScaledObject>;
    constructor(data?: ModelData<IScaledObject>);
}
