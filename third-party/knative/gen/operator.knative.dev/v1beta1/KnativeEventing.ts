import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OperatorKnativeDevV1beta1KnativeEventing";

/**
 * Schema for the knativeeventings API
 */
export interface IKnativeEventing {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "operator.knative.dev/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "KnativeEventing";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of KnativeEventing
   */
  "spec"?: {
    /**
     * A list of the additional eventing manifests, which will be installed by the operator
     */
    "additionalManifests"?: Array<{
      /**
       * The link of the additional manifest URL
       */
      "URL"?: string;
    }>;
    /**
     * A means to override the corresponding entries in the upstream configmaps
     */
    "config"?: {
      [key: string]: {
        [key: string]: string;
      };
    };
    /**
     * The default broker type to use for the brokers Knative creates. If no value is provided, MTChannelBasedBroker will be used.
     */
    "defaultBrokerClass"?: string;
    /**
     * Allows specification of HA control plane
     */
    "high-availability"?: {
      /**
       * The number of replicas that HA parts of the control plane will be scaled to
       */
      "replicas"?: number;
    };
    /**
     * A mapping of deployment or statefulset name to override
     */
    "workloads"?: Array<{
      /**
       * The name of the deployment
       */
      "name"?: string;
      /**
       * Labels overrides labels for the deployment and its template.
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * LivenessProbes overrides liveness probes for the containers.
       */
      "livenessProbes"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
         */
        "failureThreshold"?: number;
        /**
         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "initialDelaySeconds"?: number;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
         */
        "periodSeconds"?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
         */
        "successThreshold"?: number;
        /**
         * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "timeoutSeconds"?: number;
      }>;
      /**
       * Annotations overrides labels for the deployment and its template.
       */
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * Env overrides env vars for the containers.
       */
      "env"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * The desired EnvVarRequirements
         */
        "envVars"?: Array<{
          /**
           * Name of the environment variable. Must be a C_IDENTIFIER.
           */
          "name": string;
          /**
           * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
           */
          "value"?: string;
          /**
           * Source for the environment variable's value. Cannot be used if value is not empty.
           */
          "valueFrom"?: {
            /**
             * Selects a key of a ConfigMap.
             */
            "configMapKeyRef"?: {
              /**
               * The key to select.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
             */
            "fieldRef"?: {
              /**
               * Version of the schema the FieldPath is written in terms of, defaults to "v1".
               */
              "apiVersion"?: string;
              /**
               * Path of the field to select in the specified API version.
               */
              "fieldPath": string;
            };
            /**
             * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
             */
            "resourceFieldRef"?: {
              /**
               * Container name: required for volumes, optional for env vars
               */
              "containerName"?: string;
              /**
               * Specifies the output format of the exposed resources, defaults to "1"
               */
              "divisor"?: number | string;
              /**
               * Required: resource to select
               */
              "resource": string;
            };
            /**
             * Selects a key of a secret in the pod's namespace
             */
            "secretKeyRef"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
        }>;
      }>;
      /**
       * The number of replicas that HA parts of the control plane will be scaled to
       */
      "replicas"?: number;
      /**
       * NodeSelector overrides nodeSelector for the deployment.
       */
      "nodeSelector"?: {
        [key: string]: string;
      };
      /**
       * ReadinessProbes overrides readiness probes for the containers.
       */
      "readinessProbes"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
         */
        "failureThreshold"?: number;
        /**
         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "initialDelaySeconds"?: number;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
         */
        "periodSeconds"?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
         */
        "successThreshold"?: number;
        /**
         * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "timeoutSeconds"?: number;
      }>;
      /**
       * If specified, the pod's tolerations.
       */
      "tolerations"?: Array<{
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        "effect"?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        "key"?: string;
        /**
         * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
         */
        "operator"?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
         */
        "tolerationSeconds"?: number;
        /**
         * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        "value"?: string;
      }>;
      /**
       * Use the host's network namespace if true. Make sure to understand the security implications if you want to enable it. When hostNetwork is enabled, this will set dnsPolicy to ClusterFirstWithHostNet automatically.
       */
      "hostNetwork"?: boolean;
      /**
       * If specified, the pod's topology spread constraints.
       */
      "topologySpreadConstraints"?: Array<{
        /**
         * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
         */
        "labelSelector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * MaxSkew describes the degree to which pods may be unevenly distributed. It's the maximum permitted difference between the number of matching pods in any two topology domains of a given topology type. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. It's a required field. Default value is 1 and 0 is not allowed.
         */
        "maxSkew": number;
        /**
         * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
         */
        "topologyKey": string;
        /**
         * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it - ScheduleAnyway tells the scheduler to still schedule it It's considered as "Unsatisfiable" if and only if placing incoming pod on any topology violates "MaxSkew". For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
         */
        "whenUnsatisfiable": string;
      }>;
      /**
       * Version the cluster should be on.
       */
      "version"?: string;
      /**
       * VolumeMounts allows configuration of additional VolumeMounts on the output StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the alertmanager container, that are generated as a result of StorageSpec objects.
       */
      "volumeMounts"?: Array<{
        /**
         * Path within the container at which the volume should be mounted.  Must not contain ':'.
         */
        "mountPath": string;
        /**
         * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
         */
        "mountPropagation"?: string;
        /**
         * This must match the Name of a Volume.
         */
        "name": string;
        /**
         * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
         */
        "readOnly"?: boolean;
        /**
         * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
         */
        "subPath"?: string;
        /**
         * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
         */
        "subPathExpr"?: string;
      }>;
      /**
       * If specified, the pod's scheduling constraints.
       */
      "affinity"?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        "nodeAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A node selector term, associated with the corresponding weight.
             */
            "preference": {
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            "nodeSelectorTerms": Array<{
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAntiAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
      };
      /**
       * If specified, the container's resources.
       */
      "resources"?: Array<{
        /**
         * The name of the container
         */
        "container"?: string;
        "limits"?: {
          "cpu"?: string;
          "memory"?: string;
        };
        "requests"?: {
          "cpu"?: string;
          "memory"?: string;
        };
      }>;
    }>;
    /**
     * A mapping of deployment name to override
     */
    "deployments"?: Array<{
      /**
       * The name of the deployment
       */
      "name"?: string;
      /**
       * Labels overrides labels for the deployment and its template.
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Annotations overrides labels for the deployment and its template.
       */
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * Env overrides env vars for the containers.
       */
      "env"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * The desired EnvVarRequirements
         */
        "envVars"?: Array<{
          /**
           * Name of the environment variable. Must be a C_IDENTIFIER.
           */
          "name": string;
          /**
           * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
           */
          "value"?: string;
          /**
           * Source for the environment variable's value. Cannot be used if value is not empty.
           */
          "valueFrom"?: {
            /**
             * Selects a key of a ConfigMap.
             */
            "configMapKeyRef"?: {
              /**
               * The key to select.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
             */
            "fieldRef"?: {
              /**
               * Version of the schema the FieldPath is written in terms of, defaults to "v1".
               */
              "apiVersion"?: string;
              /**
               * Path of the field to select in the specified API version.
               */
              "fieldPath": string;
            };
            /**
             * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
             */
            "resourceFieldRef"?: {
              /**
               * Container name: required for volumes, optional for env vars
               */
              "containerName"?: string;
              /**
               * Specifies the output format of the exposed resources, defaults to "1"
               */
              "divisor"?: number | string;
              /**
               * Required: resource to select
               */
              "resource": string;
            };
            /**
             * Selects a key of a secret in the pod's namespace
             */
            "secretKeyRef"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
        }>;
      }>;
      /**
       * LivenessProbes overrides liveness probes for the containers.
       */
      "livenessProbes"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
         */
        "failureThreshold"?: number;
        /**
         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "initialDelaySeconds"?: number;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
         */
        "periodSeconds"?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
         */
        "successThreshold"?: number;
        /**
         * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "timeoutSeconds"?: number;
      }>;
      /**
       * The number of replicas that HA parts of the control plane will be scaled to
       */
      "replicas"?: number;
      /**
       * NodeSelector overrides nodeSelector for the deployment.
       */
      "nodeSelector"?: {
        [key: string]: string;
      };
      /**
       * ReadinessProbes overrides readiness probes for the containers.
       */
      "readinessProbes"?: Array<{
        /**
         * The container name
         */
        "container": string;
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
         */
        "failureThreshold"?: number;
        /**
         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "initialDelaySeconds"?: number;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
         */
        "periodSeconds"?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
         */
        "successThreshold"?: number;
        /**
         * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "timeoutSeconds"?: number;
      }>;
      /**
       * If specified, the pod's tolerations.
       */
      "tolerations"?: Array<{
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        "effect"?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        "key"?: string;
        /**
         * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
         */
        "operator"?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
         */
        "tolerationSeconds"?: number;
        /**
         * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        "value"?: string;
      }>;
      /**
       * Use the host's network namespace if true. Make sure to understand the security implications if you want to enable it. When hostNetwork is enabled, this will set dnsPolicy to ClusterFirstWithHostNet automatically.
       */
      "hostNetwork"?: boolean;
      /**
       * If specified, the pod's topology spread constraints.
       */
      "topologySpreadConstraints"?: Array<{
        /**
         * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
         */
        "labelSelector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * MaxSkew describes the degree to which pods may be unevenly distributed. It's the maximum permitted difference between the number of matching pods in any two topology domains of a given topology type. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. It's a required field. Default value is 1 and 0 is not allowed.
         */
        "maxSkew": number;
        /**
         * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
         */
        "topologyKey": string;
        /**
         * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it - ScheduleAnyway tells the scheduler to still schedule it It's considered as "Unsatisfiable" if and only if placing incoming pod on any topology violates "MaxSkew". For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
         */
        "whenUnsatisfiable": string;
      }>;
      /**
       * If specified, the pod's scheduling constraints.
       */
      "affinity"?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        "nodeAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A node selector term, associated with the corresponding weight.
             */
            "preference": {
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            "nodeSelectorTerms": Array<{
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAntiAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
      };
      /**
       * If specified, the container's resources.
       */
      "resources"?: Array<{
        /**
         * The name of the container
         */
        "container"?: string;
        "limits"?: {
          "cpu"?: string;
          "memory"?: string;
        };
        "requests"?: {
          "cpu"?: string;
          "memory"?: string;
        };
      }>;
    }>;
    /**
     * A mapping of service name to override
     */
    "services"?: Array<{
      /**
       * The name of the service
       */
      "name"?: string;
      /**
       * Labels overrides labels for the service
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Annotations overrides labels for the service
       */
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * Selector overrides selector for the service
       */
      "selector"?: {
        [key: string]: string;
      };
    }>;
    /**
     * A mapping of podDisruptionBudget name to override
     */
    "podDisruptionBudgets"?: Array<{
      /**
       * The name of the podDisruptionBudget
       */
      "name"?: string;
      /**
       * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
       */
      "minAvailable"?: number | string;
    }>;
    /**
     * The source configuration for Knative Eventing
     */
    "source"?: {
      /**
       * Ceph settings
       */
      "ceph"?: {
        "enabled"?: boolean;
      };
      /**
       * GitHub settings
       */
      "github"?: {
        "enabled"?: boolean;
      };
      /**
       * GitLab settings
       */
      "gitlab"?: {
        "enabled"?: boolean;
      };
      /**
       * Apache Kafka settings
       */
      "kafka"?: {
        "enabled"?: boolean;
      };
      /**
       * RabbitMQ settings
       */
      "rabbitmq"?: {
        "enabled"?: boolean;
      };
      /**
       * Redis settings
       */
      "redis"?: {
        "enabled"?: boolean;
      };
    };
    /**
     * A list of eventing manifests, which will be installed by the operator
     */
    "manifests"?: Array<{
      /**
       * The link of the manifest URL
       */
      "URL"?: string;
    }>;
    /**
     * A means to override the corresponding deployment images in the upstream. This affects both apps/v1.Deployment and caching.internal.knative.dev/v1alpha1.Image.
     */
    "registry"?: {
      /**
       * The default image reference template to use for all knative images. Takes the form of example-registry.io/custom/path/${NAME}:custom-tag
       */
      "default"?: string;
      /**
       * A list of secrets to be used when pulling the knative images. The secret must be created in the same namespace as the knative-eventing deployments, and not the namespace of this resource.
       */
      "imagePullSecrets"?: Array<{
        /**
         * The name of the secret.
         */
        "name"?: string;
      }>;
      /**
       * A map of a container name or image name to the full image location of the individual knative image.
       */
      "override"?: {
        [key: string]: string;
      };
    };
    /**
     * Specifies the selection mode for the sinkbinding webhook. If the value is `inclusion`, only namespaces/objects labelled as `bindings.knative.dev/include:true` will be considered. If `exclusion` is selected, only `bindings.knative.dev/exclude:true` label is checked and these will NOT be considered. The default is `exclusion`.
     */
    "sinkBindingSelectionMode"?: string;
    /**
     * The version of Knative Eventing to be installed
     */
    "version"?: string;
  };
  "status"?: {
    /**
     * The latest available observations of a resource's current state.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
       */
      "lastTransitionTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition.
       */
      "type": string;
    }>;
    /**
     * The list of eventing manifests, which have been installed by the operator
     */
    "manifests"?: Array<string>;
    /**
     * The generation last processed by the controller
     */
    "observedGeneration"?: number;
    /**
     * The version of the installed release
     */
    "version"?: string;
  };
}

/**
 * Schema for the knativeeventings API
 */
export class KnativeEventing extends Model<IKnativeEventing> implements IKnativeEventing {
  "apiVersion": IKnativeEventing["apiVersion"];
  "kind": IKnativeEventing["kind"];
  "metadata"?: IKnativeEventing["metadata"];
  "spec"?: IKnativeEventing["spec"];
  "status"?: IKnativeEventing["status"];

static apiVersion: IKnativeEventing["apiVersion"] = "operator.knative.dev/v1beta1";
static kind: IKnativeEventing["kind"] = "KnativeEventing";
static is = createTypeMetaGuard<IKnativeEventing>(KnativeEventing);

constructor(data?: ModelData<IKnativeEventing>) {
  super();

  this.setDefinedProps({
    apiVersion: KnativeEventing.apiVersion,
    kind: KnativeEventing.kind,
    ...data
  } as IKnativeEventing);
}
}


setValidateFunc(KnativeEventing, validate as ValidateFunc<IKnativeEventing>);
