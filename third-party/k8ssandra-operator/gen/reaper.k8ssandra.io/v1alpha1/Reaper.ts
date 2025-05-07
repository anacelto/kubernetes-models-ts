import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ReaperK8ssandraIoV1alpha1Reaper";

/**
 * Reaper is the Schema for the reapers API
 */
export interface IReaper {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "reaper.k8ssandra.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Reaper";
  "metadata"?: IObjectMeta;
  /**
   * ReaperSpec defines the desired state of Reaper
   */
  "spec"?: {
    "ServiceAccountName"?: string;
    /**
     * Affinity applied to the Reaper pods.
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
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
             */
            "namespaceSelector"?: {
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
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
           * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
           */
          "namespaceSelector"?: {
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
           * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
             */
            "namespaceSelector"?: {
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
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
           * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
           */
          "namespaceSelector"?: {
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
           * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
     * Auto scheduling properties. When you enable the auto-schedule feature, Reaper dynamically schedules repairs for all non-system keyspaces in a cluster. A cluster's keyspaces are monitored and any modifications (additions or removals) are detected. When a new keyspace is created, a new repair schedule is created automatically for that keyspace. Conversely, when a keyspace is removed, the corresponding repair schedule is deleted.
     */
    "autoScheduling"?: {
      "enabled"?: boolean;
      /**
       * ExcludedClusters are the clusters that are to be excluded from the repair schedule.
       */
      "excludedClusters"?: Array<string>;
      /**
       * ExcludedKeyspaces are the keyspaces that are to be excluded from the repair schedule.
       */
      "excludedKeyspaces"?: Array<string>;
      /**
       * InitialDelay is the amount of delay time before the schedule period starts. Must be a valid ISO-8601 duration string. The default is "PT15S" (15 seconds).
       */
      "initialDelayPeriod"?: string;
      /**
       * PercentUnrepairedThreshold is the percentage of unrepaired data over which an incremental repair should be started. Only relevant when using repair type INCREMENTAL.
       */
      "percentUnrepairedThreshold"?: number;
      /**
       * PeriodBetweenPolls is the interval time to wait before checking whether to start a repair task. Must be a valid ISO-8601 duration string. The default is "PT10M" (10 minutes).
       */
      "periodBetweenPolls"?: string;
      /**
       * RepairType is the type of repair to create: - REGULAR creates a regular repair (non-adaptive and non-incremental); - ADAPTIVE creates an adaptive repair; adaptive repairs are most suited for Cassandra 3. - INCREMENTAL creates an incremental repair; incremental repairs should only be used with Cassandra 4+. - AUTO chooses between ADAPTIVE and INCREMENTAL depending on the Cassandra server version; ADAPTIVE for Cassandra 3 and INCREMENTAL for Cassandra 4+.
       */
      "repairType"?: "REGULAR" | "ADAPTIVE" | "INCREMENTAL" | "AUTO";
      /**
       * ScheduleSpreadPeriod is the time spacing between each of the repair schedules that is to be carried out. Must be a valid ISO-8601 duration string. The default is "PT6H" (6 hours).
       */
      "scheduleSpreadPeriod"?: string;
      /**
       * TimeBeforeFirstSchedule is the grace period before the first repair in the schedule is started. Must be a valid ISO-8601 duration string. The default is "PT5M" (5 minutes).
       */
      "timeBeforeFirstSchedule"?: string;
    };
    /**
     * Defines the username and password that Reaper will use to authenticate CQL connections to Cassandra clusters. These credentials will be automatically turned into CQL roles by cass-operator when bootstrapping the datacenter, then passed to the Reaper instance, so that it can authenticate against nodes in the datacenter using CQL. If CQL authentication is not required, leave this field empty. The secret must be in the same namespace as Reaper itself and must contain two keys: "username" and "password".
     */
    "cassandraUserSecretRef"?: {
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    };
    /**
     * Client encryption stores which are used by Cassandra and Reaper.
     */
    "clientEncryptionStores"?: {
      /**
       * ref to the secret that contains the keystore password if password stored in different secret than keystoreSecretRef if key isn't specified explicitly, "keystore-password" entry will be used
       */
      "keystorePasswordSecretRef"?: {
        /**
         * The key of the entry in the Secret resource's `data` field to be used.
         */
        "key"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * ref to the secret that contains the keystore and optionally its password (which can also be specified through the keystorePasswordSecretRef field) if keys are not specified, "keystore" entry and a "keystore-password" entry will be used
       */
      "keystoreSecretRef": {
        /**
         * The key of the entry in the Secret resource's `data` field to be used.
         */
        "key"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * ref to the secret that contains the truststore password if password stored in different secret than keystoreSecretRef if key isn't specified  explicitly, "truststore-password" entry will be used
       */
      "truststorePasswordSecretRef"?: {
        /**
         * The key of the entry in the Secret resource's `data` field to be used.
         */
        "key"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * ref to the secret that contains the truststore and optionally its password (which can also be specified through the truststorePasswordSecretRef field) if keys are not specified explicitly, "keystore" entry and a "keystore-password" entry will be used
       */
      "truststoreSecretRef": {
        /**
         * The key of the entry in the Secret resource's `data` field to be used.
         */
        "key"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
    };
    /**
     * The image to use for the Reaper pod main container. The default is "thelastpickle/cassandra-reaper:3.5.0". TODO: update with real release version.
     */
    "containerImage"?: {
      /**
       * The image name to use.
       */
      "name"?: string;
      /**
       * The image pull policy to use. Defaults to "Always" if the tag is "latest", otherwise to "IfNotPresent".
       */
      "pullPolicy"?: "Always" | "IfNotPresent" | "Never";
      /**
       * The secret to use when pulling the image from private repositories. If specified, this secret will be passed to individual puller implementations for them to use. For example, in the case of Docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
       */
      "pullSecretRef"?: {
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * The Docker registry to use. Defaults to "docker.io", the official Docker Hub.
       */
      "registry"?: string;
      /**
       * The Docker repository to use.
       */
      "repository"?: string;
      /**
       * The image tag to use. Defaults to "latest".
       */
      "tag"?: string;
    };
    /**
     * DatacenterAvailability indicates to Reaper its deployment in relation to the target datacenter's network. For single-DC clusters, the default (ALL) is fine. For multi-DC clusters, it is recommended to use EACH, provided that there is one Reaper instance managing each DC in the cluster; otherwise, if one single Reaper instance is going to manage more than one DC in the cluster, use ALL. See https://cassandra-reaper.io/docs/usage/multi_dc/.
     */
    "datacenterAvailability"?: "LOCAL" | "ALL" | "EACH";
    /**
     * DatacenterRef is the reference of a CassandraDatacenter resource that this Reaper instance should manage. It will also be used as the backend for persisting Reaper's state. Reaper must be able to access the JMX port (7199 by default) and the CQL port (9042 by default) on this DC.
     */
    "datacenterRef": {
      /**
       * The datacenter name.
       */
      "name": string;
      /**
       * The datacenter namespace. If empty, the datacenter will be assumed to reside in the same namespace as the Reaper instance.
       */
      "namespace"?: string;
    };
    /**
     * HeapSize sets the JVM heap size to use for Reaper.
     */
    "heapSize"?: number | string;
    "httpManagement"?: {
      /**
       * Enable/disable the HTTP management connection between Reaper and Cassandra. When enabled, HTTP will be used instead of JMX for management connectivity between Cassandra and Reaper. In future, this will be true by default
       */
      "enabled"?: boolean;
      /**
       * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
       */
      "keystores"?: {
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
    };
    /**
     * The image to use for the Reaper pod init container (that performs schema migrations). The default is "thelastpickle/cassandra-reaper:3.5.0". TODO: update with real release version.
     */
    "initContainerImage"?: {
      /**
       * The image name to use.
       */
      "name"?: string;
      /**
       * The image pull policy to use. Defaults to "Always" if the tag is "latest", otherwise to "IfNotPresent".
       */
      "pullPolicy"?: "Always" | "IfNotPresent" | "Never";
      /**
       * The secret to use when pulling the image from private repositories. If specified, this secret will be passed to individual puller implementations for them to use. For example, in the case of Docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
       */
      "pullSecretRef"?: {
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * The Docker registry to use. Defaults to "docker.io", the official Docker Hub.
       */
      "registry"?: string;
      /**
       * The Docker repository to use.
       */
      "repository"?: string;
      /**
       * The image tag to use. Defaults to "latest".
       */
      "tag"?: string;
    };
    /**
     * Init Container resources.
     */
    "initContainerResources"?: {
      /**
       * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. 
       *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. 
       *  This field is immutable. It can only be set for containers.
       */
      "claims"?: Array<{
        /**
         * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
         */
        "name": string;
      }>;
      /**
       * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "limits"?: {
        [key: string]: number | string;
      };
      /**
       * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "requests"?: {
        [key: string]: number | string;
      };
    };
    /**
     * InitContainerSecurityContext is the SecurityContext applied to the Reaper init container, used to perform schema migrations.
     */
    "initContainerSecurityContext"?: {
      /**
       * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
       */
      "allowPrivilegeEscalation"?: boolean;
      /**
       * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
       */
      "capabilities"?: {
        /**
         * Added capabilities
         */
        "add"?: Array<string>;
        /**
         * Removed capabilities
         */
        "drop"?: Array<string>;
      };
      /**
       * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
       */
      "privileged"?: boolean;
      /**
       * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
       */
      "procMount"?: string;
      /**
       * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
       */
      "readOnlyRootFilesystem"?: boolean;
      /**
       * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsGroup"?: number;
      /**
       * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
       */
      "runAsNonRoot"?: boolean;
      /**
       * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsUser"?: number;
      /**
       * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "seLinuxOptions"?: {
        /**
         * Level is SELinux level label that applies to the container.
         */
        "level"?: string;
        /**
         * Role is a SELinux role label that applies to the container.
         */
        "role"?: string;
        /**
         * Type is a SELinux type label that applies to the container.
         */
        "type"?: string;
        /**
         * User is a SELinux user label that applies to the container.
         */
        "user"?: string;
      };
      /**
       * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
       */
      "seccompProfile"?: {
        /**
         * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
         */
        "localhostProfile"?: string;
        /**
         * type indicates which kind of seccomp profile will be applied. Valid options are: 
         *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
         */
        "type": string;
      };
      /**
       * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
       */
      "windowsOptions"?: {
        /**
         * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
         */
        "gmsaCredentialSpec"?: string;
        /**
         * GMSACredentialSpecName is the name of the GMSA credential spec to use.
         */
        "gmsaCredentialSpecName"?: string;
        /**
         * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
         */
        "hostProcess"?: boolean;
        /**
         * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
         */
        "runAsUserName"?: string;
      };
    };
    /**
     * Deprecated: JMX security is now based on CQL roles. Reaper will use cassandraUsefSecretRef for authentication, this field is ignored.
     */
    "jmxUserSecretRef"?: {
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    };
    /**
     * The keyspace to use to store Reaper's state. Will default to "reaper_db" if unspecified. Will be created if it does not exist, and if this Reaper resource is managed by K8ssandra.
     */
    "keyspace"?: string;
    /**
     * LivenessProbe sets the Reaper liveness probe. Leave nil to use defaults.
     */
    "livenessProbe"?: {
      /**
       * Exec specifies the action to take.
       */
      "exec"?: {
        /**
         * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
         */
        "command"?: Array<string>;
      };
      /**
       * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
       */
      "failureThreshold"?: number;
      /**
       * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
       */
      "grpc"?: {
        /**
         * Port number of the gRPC service. Number must be in the range 1 to 65535.
         */
        "port": number;
        /**
         * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
         *  If this is not specified, the default behavior is defined by gRPC.
         */
        "service"?: string;
      };
      /**
       * HTTPGet specifies the http request to perform.
       */
      "httpGet"?: {
        /**
         * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
         */
        "host"?: string;
        /**
         * Custom headers to set in the request. HTTP allows repeated headers.
         */
        "httpHeaders"?: Array<{
          /**
           * The header field name
           */
          "name": string;
          /**
           * The header field value
           */
          "value": string;
        }>;
        /**
         * Path to access on the HTTP server.
         */
        "path"?: string;
        /**
         * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        "port": number | string;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP.
         */
        "scheme"?: string;
      };
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
       * TCPSocket specifies an action involving a TCP port.
       */
      "tcpSocket"?: {
        /**
         * Optional: Host name to connect to, defaults to the pod IP.
         */
        "host"?: string;
        /**
         * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        "port": number | string;
      };
      /**
       * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
       */
      "terminationGracePeriodSeconds"?: number;
      /**
       * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
       */
      "timeoutSeconds"?: number;
    };
    /**
     * labels and annotations for Reaper resources
     */
    "metadata"?: {
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * labels/annotations that will be applied to all components created by the CRD
       */
      "commonLabels"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
      /**
       * labels/annotations for the pod components
       */
      "pods"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      /**
       * labels/annotations for the service component
       */
      "service"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
    };
    /**
     * PodSecurityContext contains a pod-level SecurityContext to apply to Reaper pods.
     */
    "podSecurityContext"?: {
      /**
       * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 
       *  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- 
       *  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
       */
      "fsGroup"?: number;
      /**
       * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.
       */
      "fsGroupChangePolicy"?: string;
      /**
       * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsGroup"?: number;
      /**
       * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
       */
      "runAsNonRoot"?: boolean;
      /**
       * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsUser"?: number;
      /**
       * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      "seLinuxOptions"?: {
        /**
         * Level is SELinux level label that applies to the container.
         */
        "level"?: string;
        /**
         * Role is a SELinux role label that applies to the container.
         */
        "role"?: string;
        /**
         * Type is a SELinux type label that applies to the container.
         */
        "type"?: string;
        /**
         * User is a SELinux user label that applies to the container.
         */
        "user"?: string;
      };
      /**
       * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
       */
      "seccompProfile"?: {
        /**
         * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
         */
        "localhostProfile"?: string;
        /**
         * type indicates which kind of seccomp profile will be applied. Valid options are: 
         *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
         */
        "type": string;
      };
      /**
       * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
       */
      "supplementalGroups"?: Array<number>;
      /**
       * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
       */
      "sysctls"?: Array<{
        /**
         * Name of a property to set
         */
        "name": string;
        /**
         * Value of a property to set
         */
        "value": string;
      }>;
      /**
       * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
       */
      "windowsOptions"?: {
        /**
         * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
         */
        "gmsaCredentialSpec"?: string;
        /**
         * GMSACredentialSpecName is the name of the GMSA credential spec to use.
         */
        "gmsaCredentialSpecName"?: string;
        /**
         * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
         */
        "hostProcess"?: boolean;
        /**
         * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
         */
        "runAsUserName"?: string;
      };
    };
    /**
     * ReadinessProbe sets the Reaper readiness probe. Leave nil to use defaults.
     */
    "readinessProbe"?: {
      /**
       * Exec specifies the action to take.
       */
      "exec"?: {
        /**
         * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
         */
        "command"?: Array<string>;
      };
      /**
       * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
       */
      "failureThreshold"?: number;
      /**
       * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
       */
      "grpc"?: {
        /**
         * Port number of the gRPC service. Number must be in the range 1 to 65535.
         */
        "port": number;
        /**
         * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
         *  If this is not specified, the default behavior is defined by gRPC.
         */
        "service"?: string;
      };
      /**
       * HTTPGet specifies the http request to perform.
       */
      "httpGet"?: {
        /**
         * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
         */
        "host"?: string;
        /**
         * Custom headers to set in the request. HTTP allows repeated headers.
         */
        "httpHeaders"?: Array<{
          /**
           * The header field name
           */
          "name": string;
          /**
           * The header field value
           */
          "value": string;
        }>;
        /**
         * Path to access on the HTTP server.
         */
        "path"?: string;
        /**
         * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        "port": number | string;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP.
         */
        "scheme"?: string;
      };
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
       * TCPSocket specifies an action involving a TCP port.
       */
      "tcpSocket"?: {
        /**
         * Optional: Host name to connect to, defaults to the pod IP.
         */
        "host"?: string;
        /**
         * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        "port": number | string;
      };
      /**
       * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
       */
      "terminationGracePeriodSeconds"?: number;
      /**
       * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
       */
      "timeoutSeconds"?: number;
    };
    /**
     * Main Container resources.
     */
    "resources"?: {
      /**
       * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. 
       *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. 
       *  This field is immutable. It can only be set for containers.
       */
      "claims"?: Array<{
        /**
         * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
         */
        "name": string;
      }>;
      /**
       * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "limits"?: {
        [key: string]: number | string;
      };
      /**
       * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "requests"?: {
        [key: string]: number | string;
      };
    };
    /**
     * SecretsProvider defines whether the secrets used for credentials and certs will be backed by an external secret backend. This moves the responsibility of generating and storing secrets from the operators to the user and will rely on a mutating webhook to inject the secrets into the necessary resources
     */
    "secretsProvider"?: "internal" | "external";
    /**
     * SecurityContext applied to the Reaper main container.
     */
    "securityContext"?: {
      /**
       * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
       */
      "allowPrivilegeEscalation"?: boolean;
      /**
       * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
       */
      "capabilities"?: {
        /**
         * Added capabilities
         */
        "add"?: Array<string>;
        /**
         * Removed capabilities
         */
        "drop"?: Array<string>;
      };
      /**
       * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
       */
      "privileged"?: boolean;
      /**
       * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
       */
      "procMount"?: string;
      /**
       * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
       */
      "readOnlyRootFilesystem"?: boolean;
      /**
       * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsGroup"?: number;
      /**
       * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
       */
      "runAsNonRoot"?: boolean;
      /**
       * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsUser"?: number;
      /**
       * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      "seLinuxOptions"?: {
        /**
         * Level is SELinux level label that applies to the container.
         */
        "level"?: string;
        /**
         * Role is a SELinux role label that applies to the container.
         */
        "role"?: string;
        /**
         * Type is a SELinux type label that applies to the container.
         */
        "type"?: string;
        /**
         * User is a SELinux user label that applies to the container.
         */
        "user"?: string;
      };
      /**
       * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
       */
      "seccompProfile"?: {
        /**
         * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
         */
        "localhostProfile"?: string;
        /**
         * type indicates which kind of seccomp profile will be applied. Valid options are: 
         *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
         */
        "type": string;
      };
      /**
       * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
       */
      "windowsOptions"?: {
        /**
         * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
         */
        "gmsaCredentialSpec"?: string;
        /**
         * GMSACredentialSpecName is the name of the GMSA credential spec to use.
         */
        "gmsaCredentialSpecName"?: string;
        /**
         * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
         */
        "hostProcess"?: boolean;
        /**
         * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
         */
        "runAsUserName"?: string;
      };
    };
    /**
     * Whether to skip schema migration. Schema migration is done in an init container on every Reaper deployment and can slow down Reaper's startup time. Besides, schema migration requires reading data at QUORUM. It can be skipped if you know that the schema is already up-to-date, or if you know upfront that QUORUM cannot be achieved (for example, because a DC is down).
     */
    "skipSchemaMigration"?: boolean;
    /**
     * Telemetry defines the desired telemetry integrations to deploy targeting the Reaper pods for all DCs in this cluster (unless overridden by DC specific settings)
     */
    "telemetry"?: {
      "cassandra"?: {
        "endpoint"?: {
          "address"?: string;
          "port"?: string;
        };
        "relabels"?: Array<{
          /**
           * Action to perform based on regex matching. Default is 'replace'
           */
          "action"?: string;
          /**
           * Modulus to take of the hash of the source label values.
           */
          "modulus"?: number;
          /**
           * Regular expression against which the extracted value is matched. Default is '(.\*)'
           */
          "regex"?: string;
          /**
           * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
           */
          "replacement"?: string;
          /**
           * Separator placed between concatenated source label values. default is ';'.
           */
          "separator"?: string;
          /**
           * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
           */
          "sourceLabels"?: Array<string>;
          /**
           * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
           */
          "targetLabel"?: string;
        }>;
      };
      "mcac"?: {
        /**
         * enabled sets whether MCAC (legacy metrics endpoint) is enabled. This is considered true by default.
         */
        "enabled"?: boolean;
        /**
         * MetricFilters allows passing filters to MCAC in order to reduce the amount of extracted metrics. Not setting this field will result in the default filters being used: - "deny:org.apache.cassandra.metrics.Table" - "deny:org.apache.cassandra.metrics.table" - "allow:org.apache.cassandra.metrics.table.live_ss_table_count" - "allow:org.apache.cassandra.metrics.Table.LiveSSTableCount" - "allow:org.apache.cassandra.metrics.table.live_disk_space_used" - "allow:org.apache.cassandra.metrics.table.LiveDiskSpaceUsed" - "allow:org.apache.cassandra.metrics.Table.Pending" - "allow:org.apache.cassandra.metrics.Table.Memtable" - "allow:org.apache.cassandra.metrics.Table.Compaction" - "allow:org.apache.cassandra.metrics.table.read" - "allow:org.apache.cassandra.metrics.table.write" - "allow:org.apache.cassandra.metrics.table.range" - "allow:org.apache.cassandra.metrics.table.coordinator" - "allow:org.apache.cassandra.metrics.table.dropped_mutations" Setting it to an empty list will result in all metrics being extracted.
         */
        "metricFilters"?: Array<string>;
      };
      "prometheus"?: {
        /**
         * CommonLabels are applied to all serviceMonitors created.
         */
        "commonLabels"?: {
          [key: string]: string;
        };
        /**
         * Enable the creation of Prometheus serviceMonitors for this resource (Cassandra or Stargate).
         */
        "enabled"?: boolean;
      };
      "vector"?: {
        "components"?: {
          /**
           * Sinks is the list of sinks to use for the Vector agent.
           */
          "sinks"?: Array<{
            /**
             * Config is the configuration for the sink.
             */
            "config"?: string;
            /**
             * Inputs is the list of inputs for the transform.
             */
            "inputs"?: Array<string>;
            /**
             * Name is the name of the sink.
             */
            "name": string;
            /**
             * Type is the type of the sink.
             */
            "type": string;
          }>;
          /**
           * Sources is the list of sources to use for the Vector agent.
           */
          "sources"?: Array<{
            /**
             * Config is the configuration for the source.
             */
            "config"?: string;
            /**
             * Name is the name of the source.
             */
            "name": string;
            /**
             * Type is the type of the source.
             */
            "type": string;
          }>;
          /**
           * Transforms is the list of transforms to use for the Vector agent.
           */
          "transforms"?: Array<{
            /**
             * Config is the configuration for the transform.
             */
            "config"?: string;
            /**
             * Inputs is the list of inputs for the transform.
             */
            "inputs"?: Array<string>;
            /**
             * Name is the name of the transform.
             */
            "name": string;
            /**
             * Type is the type of the transform.
             */
            "type": string;
          }>;
        };
        /**
         * Enabled enables the Vector agent for this resource (Cassandra, Reaper or Stargate). Enabling the vector agent will inject a sidecar container into the pod.
         */
        "enabled"?: boolean;
        /**
         * Image is the name of the Vector image to use. If not set, the default image will be used. kube:default="timberio/vector:0.26.0-alpine"
         */
        "image"?: string;
        /**
         * Resources is the resource requirements for the Vector agent.
         */
        "resources"?: {
          /**
           * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. 
           *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. 
           *  This field is immutable. It can only be set for containers.
           */
          "claims"?: Array<{
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
             */
            "name": string;
          }>;
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * ScrapeInterval is the interval at which the Vector agent will scrape the metrics endpoint. Use values like 30s, 1m, 5m. kube:default=30s
         */
        "scrapeInterval"?: string;
      };
    };
    /**
     * Tolerations applied to the Reaper pods.
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
     * Defines the secret which contains the username and password for the Reaper UI and REST API authentication. When UiUserSecretRef.Name == "", authentication is turned off in the front-end only.
     */
    "uiUserSecretRef"?: {
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    };
  };
  /**
   * ReaperStatus defines the observed state of Reaper
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transited from one status to another.
       */
      "lastTransitionTime"?: string;
      "status": string;
      "type": string;
    }>;
    /**
     * Progress is the progress of this Reaper object.
     */
    "progress"?: "Pending" | "Deploying" | "Configuring" | "Running";
  };
}

/**
 * Reaper is the Schema for the reapers API
 */
export class Reaper extends Model<IReaper> implements IReaper {
  "apiVersion": IReaper["apiVersion"];
  "kind": IReaper["kind"];
  "metadata"?: IReaper["metadata"];
  "spec"?: IReaper["spec"];
  "status"?: IReaper["status"];

static apiVersion: IReaper["apiVersion"] = "reaper.k8ssandra.io/v1alpha1";
static kind: IReaper["kind"] = "Reaper";
static is = createTypeMetaGuard<IReaper>(Reaper);

constructor(data?: ModelData<IReaper>) {
  super();

  this.setDefinedProps({
    apiVersion: Reaper.apiVersion,
    kind: Reaper.kind,
    ...data
  } as IReaper);
}
}


setValidateFunc(Reaper, validate as ValidateFunc<IReaper>);
