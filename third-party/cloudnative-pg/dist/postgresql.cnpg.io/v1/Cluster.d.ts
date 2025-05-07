import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Cluster is the Schema for the PostgreSQL API
 */
export interface ICluster {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "postgresql.cnpg.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Cluster";
    "metadata": IObjectMeta;
    /**
     * Specification of the desired behavior of the cluster.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec": {
        /**
         * Affinity/Anti-affinity rules for Pods
         */
        "affinity"?: {
            /**
             * AdditionalPodAffinity allows to specify pod affinity terms to be passed to all the cluster's pods.
             */
            "additionalPodAffinity"?: {
                /**
                 * The scheduler will prefer to schedule pods to nodes that satisfy
                 * the affinity expressions specified by this field, but it may choose
                 * a node that violates one or more of the expressions. The node that is
                 * most preferred is the one with the greatest sum of weights, i.e.
                 * for each node that meets all of the scheduling requirements (resource
                 * request, requiredDuringScheduling affinity expressions, etc.),
                 * compute a sum by iterating through the elements of this field and adding
                 * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                 * node(s) with the highest sum are the most preferred.
                 */
                "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                    /**
                     * Required. A pod affinity term, associated with the corresponding weight.
                     */
                    "podAffinityTerm": {
                        /**
                         * A label query over a set of resources, in this case pods.
                         * If it's null, this PodAffinityTerm matches with no Pods.
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
                                 * operator represents a key's relationship to a set of values.
                                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                                 */
                                "operator": string;
                                /**
                                 * values is an array of string values. If the operator is In or NotIn,
                                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                 * the values array must be empty. This array is replaced during a strategic
                                 * merge patch.
                                 */
                                "values"?: Array<string>;
                            }>;
                            /**
                             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                             * map is equivalent to an element of matchExpressions, whose key field is "key", the
                             * operator is "In", and the values array contains only "value". The requirements are ANDed.
                             */
                            "matchLabels"?: {
                                [key: string]: string;
                            };
                        };
                        /**
                         * MatchLabelKeys is a set of pod label keys to select which pods will
                         * be taken into consideration. The keys are used to lookup values from the
                         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         * to select the group of existing pods which pods will be taken into consideration
                         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         * pod labels will be ignored. The default value is empty.
                         * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                         */
                        "matchLabelKeys"?: Array<string>;
                        /**
                         * MismatchLabelKeys is a set of pod label keys to select which pods will
                         * be taken into consideration. The keys are used to lookup values from the
                         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         * to select the group of existing pods which pods will be taken into consideration
                         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         * pod labels will be ignored. The default value is empty.
                         * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                         */
                        "mismatchLabelKeys"?: Array<string>;
                        /**
                         * A label query over the set of namespaces that the term applies to.
                         * The term is applied to the union of the namespaces selected by this field
                         * and the ones listed in the namespaces field.
                         * null selector and null or empty namespaces list means "this pod's namespace".
                         * An empty selector ({}) matches all namespaces.
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
                                 * operator represents a key's relationship to a set of values.
                                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                                 */
                                "operator": string;
                                /**
                                 * values is an array of string values. If the operator is In or NotIn,
                                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                 * the values array must be empty. This array is replaced during a strategic
                                 * merge patch.
                                 */
                                "values"?: Array<string>;
                            }>;
                            /**
                             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                             * map is equivalent to an element of matchExpressions, whose key field is "key", the
                             * operator is "In", and the values array contains only "value". The requirements are ANDed.
                             */
                            "matchLabels"?: {
                                [key: string]: string;
                            };
                        };
                        /**
                         * namespaces specifies a static list of namespace names that the term applies to.
                         * The term is applied to the union of the namespaces listed in this field
                         * and the ones selected by namespaceSelector.
                         * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                         */
                        "namespaces"?: Array<string>;
                        /**
                         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         * the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         * whose value of the label with key topologyKey matches that of any node on which any of the
                         * selected pods is running.
                         * Empty topologyKey is not allowed.
                         */
                        "topologyKey": string;
                    };
                    /**
                     * weight associated with matching the corresponding podAffinityTerm,
                     * in the range 1-100.
                     */
                    "weight": number;
                }>;
                /**
                 * If the affinity requirements specified by this field are not met at
                 * scheduling time, the pod will not be scheduled onto the node.
                 * If the affinity requirements specified by this field cease to be met
                 * at some point during pod execution (e.g. due to a pod label update), the
                 * system may or may not try to eventually evict the pod from its node.
                 * When there are multiple elements, the lists of nodes corresponding to each
                 * podAffinityTerm are intersected, i.e. all terms must be satisfied.
                 */
                "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                    /**
                     * A label query over a set of resources, in this case pods.
                     * If it's null, this PodAffinityTerm matches with no Pods.
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
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * MatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                     */
                    "matchLabelKeys"?: Array<string>;
                    /**
                     * MismatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                     */
                    "mismatchLabelKeys"?: Array<string>;
                    /**
                     * A label query over the set of namespaces that the term applies to.
                     * The term is applied to the union of the namespaces selected by this field
                     * and the ones listed in the namespaces field.
                     * null selector and null or empty namespaces list means "this pod's namespace".
                     * An empty selector ({}) matches all namespaces.
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
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * namespaces specifies a static list of namespace names that the term applies to.
                     * The term is applied to the union of the namespaces listed in this field
                     * and the ones selected by namespaceSelector.
                     * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    "namespaces"?: Array<string>;
                    /**
                     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     * the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     * whose value of the label with key topologyKey matches that of any node on which any of the
                     * selected pods is running.
                     * Empty topologyKey is not allowed.
                     */
                    "topologyKey": string;
                }>;
            };
            /**
             * AdditionalPodAntiAffinity allows to specify pod anti-affinity terms to be added to the ones generated
             * by the operator if EnablePodAntiAffinity is set to true (default) or to be used exclusively if set to false.
             */
            "additionalPodAntiAffinity"?: {
                /**
                 * The scheduler will prefer to schedule pods to nodes that satisfy
                 * the anti-affinity expressions specified by this field, but it may choose
                 * a node that violates one or more of the expressions. The node that is
                 * most preferred is the one with the greatest sum of weights, i.e.
                 * for each node that meets all of the scheduling requirements (resource
                 * request, requiredDuringScheduling anti-affinity expressions, etc.),
                 * compute a sum by iterating through the elements of this field and adding
                 * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                 * node(s) with the highest sum are the most preferred.
                 */
                "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                    /**
                     * Required. A pod affinity term, associated with the corresponding weight.
                     */
                    "podAffinityTerm": {
                        /**
                         * A label query over a set of resources, in this case pods.
                         * If it's null, this PodAffinityTerm matches with no Pods.
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
                                 * operator represents a key's relationship to a set of values.
                                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                                 */
                                "operator": string;
                                /**
                                 * values is an array of string values. If the operator is In or NotIn,
                                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                 * the values array must be empty. This array is replaced during a strategic
                                 * merge patch.
                                 */
                                "values"?: Array<string>;
                            }>;
                            /**
                             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                             * map is equivalent to an element of matchExpressions, whose key field is "key", the
                             * operator is "In", and the values array contains only "value". The requirements are ANDed.
                             */
                            "matchLabels"?: {
                                [key: string]: string;
                            };
                        };
                        /**
                         * MatchLabelKeys is a set of pod label keys to select which pods will
                         * be taken into consideration. The keys are used to lookup values from the
                         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         * to select the group of existing pods which pods will be taken into consideration
                         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         * pod labels will be ignored. The default value is empty.
                         * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                         */
                        "matchLabelKeys"?: Array<string>;
                        /**
                         * MismatchLabelKeys is a set of pod label keys to select which pods will
                         * be taken into consideration. The keys are used to lookup values from the
                         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         * to select the group of existing pods which pods will be taken into consideration
                         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         * pod labels will be ignored. The default value is empty.
                         * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                         */
                        "mismatchLabelKeys"?: Array<string>;
                        /**
                         * A label query over the set of namespaces that the term applies to.
                         * The term is applied to the union of the namespaces selected by this field
                         * and the ones listed in the namespaces field.
                         * null selector and null or empty namespaces list means "this pod's namespace".
                         * An empty selector ({}) matches all namespaces.
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
                                 * operator represents a key's relationship to a set of values.
                                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                                 */
                                "operator": string;
                                /**
                                 * values is an array of string values. If the operator is In or NotIn,
                                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                 * the values array must be empty. This array is replaced during a strategic
                                 * merge patch.
                                 */
                                "values"?: Array<string>;
                            }>;
                            /**
                             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                             * map is equivalent to an element of matchExpressions, whose key field is "key", the
                             * operator is "In", and the values array contains only "value". The requirements are ANDed.
                             */
                            "matchLabels"?: {
                                [key: string]: string;
                            };
                        };
                        /**
                         * namespaces specifies a static list of namespace names that the term applies to.
                         * The term is applied to the union of the namespaces listed in this field
                         * and the ones selected by namespaceSelector.
                         * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                         */
                        "namespaces"?: Array<string>;
                        /**
                         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         * the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         * whose value of the label with key topologyKey matches that of any node on which any of the
                         * selected pods is running.
                         * Empty topologyKey is not allowed.
                         */
                        "topologyKey": string;
                    };
                    /**
                     * weight associated with matching the corresponding podAffinityTerm,
                     * in the range 1-100.
                     */
                    "weight": number;
                }>;
                /**
                 * If the anti-affinity requirements specified by this field are not met at
                 * scheduling time, the pod will not be scheduled onto the node.
                 * If the anti-affinity requirements specified by this field cease to be met
                 * at some point during pod execution (e.g. due to a pod label update), the
                 * system may or may not try to eventually evict the pod from its node.
                 * When there are multiple elements, the lists of nodes corresponding to each
                 * podAffinityTerm are intersected, i.e. all terms must be satisfied.
                 */
                "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                    /**
                     * A label query over a set of resources, in this case pods.
                     * If it's null, this PodAffinityTerm matches with no Pods.
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
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * MatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                     */
                    "matchLabelKeys"?: Array<string>;
                    /**
                     * MismatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
                     */
                    "mismatchLabelKeys"?: Array<string>;
                    /**
                     * A label query over the set of namespaces that the term applies to.
                     * The term is applied to the union of the namespaces selected by this field
                     * and the ones listed in the namespaces field.
                     * null selector and null or empty namespaces list means "this pod's namespace".
                     * An empty selector ({}) matches all namespaces.
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
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * namespaces specifies a static list of namespace names that the term applies to.
                     * The term is applied to the union of the namespaces listed in this field
                     * and the ones selected by namespaceSelector.
                     * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    "namespaces"?: Array<string>;
                    /**
                     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     * the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     * whose value of the label with key topologyKey matches that of any node on which any of the
                     * selected pods is running.
                     * Empty topologyKey is not allowed.
                     */
                    "topologyKey": string;
                }>;
            };
            /**
             * Activates anti-affinity for the pods. The operator will define pods
             * anti-affinity unless this field is explicitly set to false
             */
            "enablePodAntiAffinity"?: boolean;
            /**
             * NodeAffinity describes node affinity scheduling rules for the pod.
             * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity
             */
            "nodeAffinity"?: {
                /**
                 * The scheduler will prefer to schedule pods to nodes that satisfy
                 * the affinity expressions specified by this field, but it may choose
                 * a node that violates one or more of the expressions. The node that is
                 * most preferred is the one with the greatest sum of weights, i.e.
                 * for each node that meets all of the scheduling requirements (resource
                 * request, requiredDuringScheduling affinity expressions, etc.),
                 * compute a sum by iterating through the elements of this field and adding
                 * "weight" to the sum if the node matches the corresponding matchExpressions; the
                 * node(s) with the highest sum are the most preferred.
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
                             * Represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                             */
                            "operator": string;
                            /**
                             * An array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. If the operator is Gt or Lt, the values
                             * array must have a single element, which will be interpreted as an integer.
                             * This array is replaced during a strategic merge patch.
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
                             * Represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                             */
                            "operator": string;
                            /**
                             * An array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. If the operator is Gt or Lt, the values
                             * array must have a single element, which will be interpreted as an integer.
                             * This array is replaced during a strategic merge patch.
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
                 * If the affinity requirements specified by this field are not met at
                 * scheduling time, the pod will not be scheduled onto the node.
                 * If the affinity requirements specified by this field cease to be met
                 * at some point during pod execution (e.g. due to an update), the system
                 * may or may not try to eventually evict the pod from its node.
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
                             * Represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                             */
                            "operator": string;
                            /**
                             * An array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. If the operator is Gt or Lt, the values
                             * array must have a single element, which will be interpreted as an integer.
                             * This array is replaced during a strategic merge patch.
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
                             * Represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                             */
                            "operator": string;
                            /**
                             * An array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. If the operator is Gt or Lt, the values
                             * array must have a single element, which will be interpreted as an integer.
                             * This array is replaced during a strategic merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                    }>;
                };
            };
            /**
             * NodeSelector is map of key-value pairs used to define the nodes on which
             * the pods can run.
             * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            "nodeSelector"?: {
                [key: string]: string;
            };
            /**
             * PodAntiAffinityType allows the user to decide whether pod anti-affinity between cluster instance has to be
             * considered a strong requirement during scheduling or not. Allowed values are: "preferred" (default if empty) or
             * "required". Setting it to "required", could lead to instances remaining pending until new kubernetes nodes are
             * added if all the existing nodes don't match the required pod anti-affinity rule.
             * More info:
             * https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
             */
            "podAntiAffinityType"?: string;
            /**
             * Tolerations is a list of Tolerations that should be set for all the pods, in order to allow them to run
             * on tainted nodes.
             * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/
             */
            "tolerations"?: Array<{
                /**
                 * Effect indicates the taint effect to match. Empty means match all taint effects.
                 * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                 */
                "effect"?: string;
                /**
                 * Key is the taint key that the toleration applies to. Empty means match all taint keys.
                 * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                 */
                "key"?: string;
                /**
                 * Operator represents a key's relationship to the value.
                 * Valid operators are Exists and Equal. Defaults to Equal.
                 * Exists is equivalent to wildcard for value, so that a pod can
                 * tolerate all taints of a particular category.
                 */
                "operator"?: string;
                /**
                 * TolerationSeconds represents the period of time the toleration (which must be
                 * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
                 * it is not set, which means tolerate the taint forever (do not evict). Zero and
                 * negative values will be treated as 0 (evict immediately) by the system.
                 */
                "tolerationSeconds"?: number;
                /**
                 * Value is the taint value the toleration matches to.
                 * If the operator is Exists, the value should be empty, otherwise just a regular string.
                 */
                "value"?: string;
            }>;
            /**
             * TopologyKey to use for anti-affinity configuration. See k8s documentation
             * for more info on that
             */
            "topologyKey"?: string;
        };
        /**
         * The configuration to be used for backups
         */
        "backup"?: {
            /**
             * The configuration for the barman-cloud tool suite
             */
            "barmanObjectStore"?: {
                /**
                 * The credentials to use to upload data to Azure Blob Storage
                 */
                "azureCredentials"?: {
                    /**
                     * The connection string to be used
                     */
                    "connectionString"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * Use the Azure AD based authentication without providing explicitly the keys.
                     */
                    "inheritFromAzureAD"?: boolean;
                    /**
                     * The storage account where to upload data
                     */
                    "storageAccount"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The storage account key to be used in conjunction
                     * with the storage account name
                     */
                    "storageKey"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * A shared-access-signature to be used in conjunction with
                     * the storage account name
                     */
                    "storageSasToken"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                };
                /**
                 * The configuration to be used to backup the data files
                 * When not defined, base backups files will be stored uncompressed and may
                 * be unencrypted in the object store, according to the bucket default
                 * policy.
                 */
                "data"?: {
                    /**
                     * AdditionalCommandArgs represents additional arguments that can be appended
                     * to the 'barman-cloud-backup' command-line invocation. These arguments
                     * provide flexibility to customize the backup process further according to
                     * specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-backup' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "additionalCommandArgs"?: Array<string>;
                    /**
                     * Compress a backup file (a tar file per tablespace) while streaming it
                     * to the object store. Available options are empty string (no
                     * compression, default), `gzip`, `bzip2` or `snappy`.
                     */
                    "compression"?: "gzip" | "bzip2" | "snappy";
                    /**
                     * Whenever to force the encryption of files (if the bucket is
                     * not already configured for that).
                     * Allowed options are empty string (use the bucket policy, default),
                     * `AES256` and `aws:kms`
                     */
                    "encryption"?: "AES256" | "aws:kms";
                    /**
                     * Control whether the I/O workload for the backup initial checkpoint will
                     * be limited, according to the `checkpoint_completion_target` setting on
                     * the PostgreSQL server. If set to true, an immediate checkpoint will be
                     * used, meaning PostgreSQL will complete the checkpoint as soon as
                     * possible. `false` by default.
                     */
                    "immediateCheckpoint"?: boolean;
                    /**
                     * The number of parallel jobs to be used to upload the backup, defaults
                     * to 2
                     */
                    "jobs"?: number;
                };
                /**
                 * The path where to store the backup (i.e. s3://bucket/path/to/folder)
                 * this path, with different destination folders, will be used for WALs
                 * and for data
                 */
                "destinationPath": string;
                /**
                 * EndpointCA store the CA bundle of the barman endpoint.
                 * Useful when using self-signed certificates to avoid
                 * errors with certificate issuer and barman-cloud-wal-archive
                 */
                "endpointCA"?: {
                    /**
                     * The key to select
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * Endpoint to be used to upload data to the cloud,
                 * overriding the automatic endpoint discovery
                 */
                "endpointURL"?: string;
                /**
                 * The credentials to use to upload data to Google Cloud Storage
                 */
                "googleCredentials"?: {
                    /**
                     * The secret containing the Google Cloud Storage JSON file with the credentials
                     */
                    "applicationCredentials"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * If set to true, will presume that it's running inside a GKE environment,
                     * default to false.
                     */
                    "gkeEnvironment"?: boolean;
                };
                /**
                 * HistoryTags is a list of key value pairs that will be passed to the
                 * Barman --history-tags option.
                 */
                "historyTags"?: {
                    [key: string]: string;
                };
                /**
                 * The credentials to use to upload data to S3
                 */
                "s3Credentials"?: {
                    /**
                     * The reference to the access key id
                     */
                    "accessKeyId"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * Use the role based authentication without providing explicitly the keys.
                     */
                    "inheritFromIAMRole"?: boolean;
                    /**
                     * The reference to the secret containing the region name
                     */
                    "region"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The reference to the secret access key
                     */
                    "secretAccessKey"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The references to the session key
                     */
                    "sessionToken"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                };
                /**
                 * The server name on S3, the cluster name is used if this
                 * parameter is omitted
                 */
                "serverName"?: string;
                /**
                 * Tags is a list of key value pairs that will be passed to the
                 * Barman --tags option.
                 */
                "tags"?: {
                    [key: string]: string;
                };
                /**
                 * The configuration for the backup of the WAL stream.
                 * When not defined, WAL files will be stored uncompressed and may be
                 * unencrypted in the object store, according to the bucket default policy.
                 */
                "wal"?: {
                    /**
                     * Additional arguments that can be appended to the 'barman-cloud-wal-archive'
                     * command-line invocation. These arguments provide flexibility to customize
                     * the WAL archive process further, according to specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-wal-archive' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "archiveAdditionalCommandArgs"?: Array<string>;
                    /**
                     * Compress a WAL file before sending it to the object store. Available
                     * options are empty string (no compression, default), `gzip`, `bzip2` or `snappy`.
                     */
                    "compression"?: "gzip" | "bzip2" | "snappy";
                    /**
                     * Whenever to force the encryption of files (if the bucket is
                     * not already configured for that).
                     * Allowed options are empty string (use the bucket policy, default),
                     * `AES256` and `aws:kms`
                     */
                    "encryption"?: "AES256" | "aws:kms";
                    /**
                     * Number of WAL files to be either archived in parallel (when the
                     * PostgreSQL instance is archiving to a backup object store) or
                     * restored in parallel (when a PostgreSQL standby is fetching WAL
                     * files from a recovery object store). If not specified, WAL files
                     * will be processed one at a time. It accepts a positive integer as a
                     * value - with 1 being the minimum accepted value.
                     */
                    "maxParallel"?: number;
                    /**
                     * Additional arguments that can be appended to the 'barman-cloud-wal-restore'
                     * command-line invocation. These arguments provide flexibility to customize
                     * the WAL restore process further, according to specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-wal-restore' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "restoreAdditionalCommandArgs"?: Array<string>;
                };
            };
            /**
             * RetentionPolicy is the retention policy to be used for backups
             * and WALs (i.e. '60d'). The retention policy is expressed in the form
             * of `XXu` where `XX` is a positive integer and `u` is in `[dwm]` -
             * days, weeks, months.
             * It's currently only applicable when using the BarmanObjectStore method.
             */
            "retentionPolicy"?: string;
            /**
             * The policy to decide which instance should perform backups. Available
             * options are empty string, which will default to `prefer-standby` policy,
             * `primary` to have backups run always on primary instances, `prefer-standby`
             * to have backups run preferably on the most updated standby, if available.
             */
            "target"?: "primary" | "prefer-standby";
            /**
             * VolumeSnapshot provides the configuration for the execution of volume snapshot backups.
             */
            "volumeSnapshot"?: {
                /**
                 * Annotations key-value pairs that will be added to .metadata.annotations snapshot resources.
                 */
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * ClassName specifies the Snapshot Class to be used for PG_DATA PersistentVolumeClaim.
                 * It is the default class for the other types if no specific class is present
                 */
                "className"?: string;
                /**
                 * Labels are key-value pairs that will be added to .metadata.labels snapshot resources.
                 */
                "labels"?: {
                    [key: string]: string;
                };
                /**
                 * Whether the default type of backup with volume snapshots is
                 * online/hot (`true`, default) or offline/cold (`false`)
                 */
                "online"?: boolean;
                /**
                 * Configuration parameters to control the online/hot backup with volume snapshots
                 */
                "onlineConfiguration"?: {
                    /**
                     * Control whether the I/O workload for the backup initial checkpoint will
                     * be limited, according to the `checkpoint_completion_target` setting on
                     * the PostgreSQL server. If set to true, an immediate checkpoint will be
                     * used, meaning PostgreSQL will complete the checkpoint as soon as
                     * possible. `false` by default.
                     */
                    "immediateCheckpoint"?: boolean;
                    /**
                     * If false, the function will return immediately after the backup is completed,
                     * without waiting for WAL to be archived.
                     * This behavior is only useful with backup software that independently monitors WAL archiving.
                     * Otherwise, WAL required to make the backup consistent might be missing and make the backup useless.
                     * By default, or when this parameter is true, pg_backup_stop will wait for WAL to be archived when archiving is
                     * enabled.
                     * On a standby, this means that it will wait only when archive_mode = always.
                     * If write activity on the primary is low, it may be useful to run pg_switch_wal on the primary in order to trigger
                     * an immediate segment switch.
                     */
                    "waitForArchive"?: boolean;
                };
                /**
                 * SnapshotOwnerReference indicates the type of owner reference the snapshot should have
                 */
                "snapshotOwnerReference"?: "none" | "cluster" | "backup";
                /**
                 * TablespaceClassName specifies the Snapshot Class to be used for the tablespaces.
                 * defaults to the PGDATA Snapshot Class, if set
                 */
                "tablespaceClassName"?: {
                    [key: string]: string;
                };
                /**
                 * WalClassName specifies the Snapshot Class to be used for the PG_WAL PersistentVolumeClaim.
                 */
                "walClassName"?: string;
            };
        };
        /**
         * Instructions to bootstrap this cluster
         */
        "bootstrap"?: {
            /**
             * Bootstrap the cluster via initdb
             */
            "initdb"?: {
                /**
                 * Whether the `-k` option should be passed to initdb,
                 * enabling checksums on data pages (default: `false`)
                 */
                "dataChecksums"?: boolean;
                /**
                 * Name of the database used by the application. Default: `app`.
                 */
                "database"?: string;
                /**
                 * The value to be passed as option `--encoding` for initdb (default:`UTF8`)
                 */
                "encoding"?: string;
                /**
                 * Bootstraps the new cluster by importing data from an existing PostgreSQL
                 * instance using logical backup (`pg_dump` and `pg_restore`)
                 */
                "import"?: {
                    /**
                     * The databases to import
                     */
                    "databases": Array<string>;
                    /**
                     * List of SQL queries to be executed as a superuser in the application
                     * database right after is imported - to be used with extreme care
                     * (by default empty). Only available in microservice type.
                     */
                    "postImportApplicationSQL"?: Array<string>;
                    /**
                     * The roles to import
                     */
                    "roles"?: Array<string>;
                    /**
                     * When set to true, only the `pre-data` and `post-data` sections of
                     * `pg_restore` are invoked, avoiding data import. Default: `false`.
                     */
                    "schemaOnly"?: boolean;
                    /**
                     * The source of the import
                     */
                    "source": {
                        /**
                         * The name of the externalCluster used for import
                         */
                        "externalCluster": string;
                    };
                    /**
                     * The import type. Can be `microservice` or `monolith`.
                     */
                    "type": "microservice" | "monolith";
                };
                /**
                 * The value to be passed as option `--lc-ctype` for initdb (default:`C`)
                 */
                "localeCType"?: string;
                /**
                 * The value to be passed as option `--lc-collate` for initdb (default:`C`)
                 */
                "localeCollate"?: string;
                /**
                 * The list of options that must be passed to initdb when creating the cluster.
                 * Deprecated: This could lead to inconsistent configurations,
                 * please use the explicit provided parameters instead.
                 * If defined, explicit values will be ignored.
                 */
                "options"?: Array<string>;
                /**
                 * Name of the owner of the database in the instance to be used
                 * by applications. Defaults to the value of the `database` key.
                 */
                "owner"?: string;
                /**
                 * List of SQL queries to be executed as a superuser in the application
                 * database right after the cluster has been created - to be used with extreme care
                 * (by default empty)
                 */
                "postInitApplicationSQL"?: Array<string>;
                /**
                 * List of references to ConfigMaps or Secrets containing SQL files
                 * to be executed as a superuser in the application database right after
                 * the cluster has been created. The references are processed in a specific order:
                 * first, all Secrets are processed, followed by all ConfigMaps.
                 * Within each group, the processing order follows the sequence specified
                 * in their respective arrays.
                 * (by default empty)
                 */
                "postInitApplicationSQLRefs"?: {
                    /**
                     * ConfigMapRefs holds a list of references to ConfigMaps
                     */
                    "configMapRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                    /**
                     * SecretRefs holds a list of references to Secrets
                     */
                    "secretRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                };
                /**
                 * List of SQL queries to be executed as a superuser in the `postgres`
                 * database right after the cluster has been created - to be used with extreme care
                 * (by default empty)
                 */
                "postInitSQL"?: Array<string>;
                /**
                 * List of references to ConfigMaps or Secrets containing SQL files
                 * to be executed as a superuser in the `postgres` database right after
                 * the cluster has been created. The references are processed in a specific order:
                 * first, all Secrets are processed, followed by all ConfigMaps.
                 * Within each group, the processing order follows the sequence specified
                 * in their respective arrays.
                 * (by default empty)
                 */
                "postInitSQLRefs"?: {
                    /**
                     * ConfigMapRefs holds a list of references to ConfigMaps
                     */
                    "configMapRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                    /**
                     * SecretRefs holds a list of references to Secrets
                     */
                    "secretRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                };
                /**
                 * List of SQL queries to be executed as a superuser in the `template1`
                 * database right after the cluster has been created - to be used with extreme care
                 * (by default empty)
                 */
                "postInitTemplateSQL"?: Array<string>;
                /**
                 * List of references to ConfigMaps or Secrets containing SQL files
                 * to be executed as a superuser in the `template1` database right after
                 * the cluster has been created. The references are processed in a specific order:
                 * first, all Secrets are processed, followed by all ConfigMaps.
                 * Within each group, the processing order follows the sequence specified
                 * in their respective arrays.
                 * (by default empty)
                 */
                "postInitTemplateSQLRefs"?: {
                    /**
                     * ConfigMapRefs holds a list of references to ConfigMaps
                     */
                    "configMapRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                    /**
                     * SecretRefs holds a list of references to Secrets
                     */
                    "secretRefs"?: Array<{
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    }>;
                };
                /**
                 * Name of the secret containing the initial credentials for the
                 * owner of the user database. If empty a new secret will be
                 * created from scratch
                 */
                "secret"?: {
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * The value in megabytes (1 to 1024) to be passed to the `--wal-segsize`
                 * option for initdb (default: empty, resulting in PostgreSQL default: 16MB)
                 */
                "walSegmentSize"?: number;
            };
            /**
             * Bootstrap the cluster taking a physical backup of another compatible
             * PostgreSQL instance
             */
            "pg_basebackup"?: {
                /**
                 * Name of the database used by the application. Default: `app`.
                 */
                "database"?: string;
                /**
                 * Name of the owner of the database in the instance to be used
                 * by applications. Defaults to the value of the `database` key.
                 */
                "owner"?: string;
                /**
                 * Name of the secret containing the initial credentials for the
                 * owner of the user database. If empty a new secret will be
                 * created from scratch
                 */
                "secret"?: {
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * The name of the server of which we need to take a physical backup
                 */
                "source": string;
            };
            /**
             * Bootstrap the cluster from a backup
             */
            "recovery"?: {
                /**
                 * The backup object containing the physical base backup from which to
                 * initiate the recovery procedure.
                 * Mutually exclusive with `source` and `volumeSnapshots`.
                 */
                "backup"?: {
                    /**
                     * EndpointCA store the CA bundle of the barman endpoint.
                     * Useful when using self-signed certificates to avoid
                     * errors with certificate issuer and barman-cloud-wal-archive.
                     */
                    "endpointCA"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * Name of the database used by the application. Default: `app`.
                 */
                "database"?: string;
                /**
                 * Name of the owner of the database in the instance to be used
                 * by applications. Defaults to the value of the `database` key.
                 */
                "owner"?: string;
                /**
                 * By default, the recovery process applies all the available
                 * WAL files in the archive (full recovery). However, you can also
                 * end the recovery as soon as a consistent state is reached or
                 * recover to a point-in-time (PITR) by specifying a `RecoveryTarget` object,
                 * as expected by PostgreSQL (i.e., timestamp, transaction Id, LSN, ...).
                 * More info: https://www.postgresql.org/docs/current/runtime-config-wal.html#RUNTIME-CONFIG-WAL-RECOVERY-TARGET
                 */
                "recoveryTarget"?: {
                    /**
                     * The ID of the backup from which to start the recovery process.
                     * If empty (default) the operator will automatically detect the backup
                     * based on targetTime or targetLSN if specified. Otherwise use the
                     * latest available backup in chronological order.
                     */
                    "backupID"?: string;
                    /**
                     * Set the target to be exclusive. If omitted, defaults to false, so that
                     * in Postgres, `recovery_target_inclusive` will be true
                     */
                    "exclusive"?: boolean;
                    /**
                     * End recovery as soon as a consistent state is reached
                     */
                    "targetImmediate"?: boolean;
                    /**
                     * The target LSN (Log Sequence Number)
                     */
                    "targetLSN"?: string;
                    /**
                     * The target name (to be previously created
                     * with `pg_create_restore_point`)
                     */
                    "targetName"?: string;
                    /**
                     * The target timeline ("latest" or a positive integer)
                     */
                    "targetTLI"?: string;
                    /**
                     * The target time as a timestamp in the RFC3339 standard
                     */
                    "targetTime"?: string;
                    /**
                     * The target transaction ID
                     */
                    "targetXID"?: string;
                };
                /**
                 * Name of the secret containing the initial credentials for the
                 * owner of the user database. If empty a new secret will be
                 * created from scratch
                 */
                "secret"?: {
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * The external cluster whose backup we will restore. This is also
                 * used as the name of the folder under which the backup is stored,
                 * so it must be set to the name of the source cluster
                 * Mutually exclusive with `backup`.
                 */
                "source"?: string;
                /**
                 * The static PVC data source(s) from which to initiate the
                 * recovery procedure. Currently supporting `VolumeSnapshot`
                 * and `PersistentVolumeClaim` resources that map an existing
                 * PVC group, compatible with CloudNativePG, and taken with
                 * a cold backup copy on a fenced Postgres instance (limitation
                 * which will be removed in the future when online backup
                 * will be implemented).
                 * Mutually exclusive with `backup`.
                 */
                "volumeSnapshots"?: {
                    /**
                     * Configuration of the storage of the instances
                     */
                    "storage": {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                    };
                    /**
                     * Configuration of the storage for PostgreSQL tablespaces
                     */
                    "tablespaceStorage"?: {
                        [key: string]: {
                            /**
                             * APIGroup is the group for the resource being referenced.
                             * If APIGroup is not specified, the specified Kind must be in the core API group.
                             * For any other third-party types, APIGroup is required.
                             */
                            "apiGroup"?: string;
                            /**
                             * Kind is the type of resource being referenced
                             */
                            "kind": string;
                            /**
                             * Name is the name of resource being referenced
                             */
                            "name": string;
                        };
                    };
                    /**
                     * Configuration of the storage for PostgreSQL WAL (Write-Ahead Log)
                     */
                    "walStorage"?: {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                    };
                };
            };
        };
        /**
         * The configuration for the CA and related certificates
         */
        "certificates"?: {
            /**
             * The secret containing the Client CA certificate. If not defined, a new secret will be created
             * with a self-signed CA and will be used to generate all the client certificates.<br />
             * <br />
             * Contains:<br />
             * <br />
             * - `ca.crt`: CA that should be used to validate the client certificates,
             * used as `ssl_ca_file` of all the instances.<br />
             * - `ca.key`: key used to generate client certificates, if ReplicationTLSSecret is provided,
             * this can be omitted.<br />
             */
            "clientCASecret"?: string;
            /**
             * The secret of type kubernetes.io/tls containing the client certificate to authenticate as
             * the `streaming_replica` user.
             * If not defined, ClientCASecret must provide also `ca.key`, and a new secret will be
             * created using the provided CA.
             */
            "replicationTLSSecret"?: string;
            /**
             * The list of the server alternative DNS names to be added to the generated server TLS certificates, when required.
             */
            "serverAltDNSNames"?: Array<string>;
            /**
             * The secret containing the Server CA certificate. If not defined, a new secret will be created
             * with a self-signed CA and will be used to generate the TLS certificate ServerTLSSecret.<br />
             * <br />
             * Contains:<br />
             * <br />
             * - `ca.crt`: CA that should be used to validate the server certificate,
             * used as `sslrootcert` in client connection strings.<br />
             * - `ca.key`: key used to generate Server SSL certs, if ServerTLSSecret is provided,
             * this can be omitted.<br />
             */
            "serverCASecret"?: string;
            /**
             * The secret of type kubernetes.io/tls containing the server TLS certificate and key that will be set as
             * `ssl_cert_file` and `ssl_key_file` so that clients can connect to postgres securely.
             * If not defined, ServerCASecret must provide also `ca.key` and a new secret will be
             * created using the provided CA.
             */
            "serverTLSSecret"?: string;
        };
        /**
         * Description of this PostgreSQL cluster
         */
        "description"?: string;
        /**
         * Manage the `PodDisruptionBudget` resources within the cluster. When
         * configured as `true` (default setting), the pod disruption budgets
         * will safeguard the primary node from being terminated. Conversely,
         * setting it to `false` will result in the absence of any
         * `PodDisruptionBudget` resource, permitting the shutdown of all nodes
         * hosting the PostgreSQL cluster. This latter configuration is
         * advisable for any PostgreSQL cluster employed for
         * development/staging purposes.
         */
        "enablePDB"?: boolean;
        /**
         * When this option is enabled, the operator will use the `SuperuserSecret`
         * to update the `postgres` user password (if the secret is
         * not present, the operator will automatically create one). When this
         * option is disabled, the operator will ignore the `SuperuserSecret` content, delete
         * it when automatically created, and then blank the password of the `postgres`
         * user by setting it to `NULL`. Disabled by default.
         */
        "enableSuperuserAccess"?: boolean;
        /**
         * Env follows the Env format to pass environment variables
         * to the pods created in the cluster
         */
        "env"?: Array<{
            /**
             * Name of the environment variable. Must be a C_IDENTIFIER.
             */
            "name": string;
            /**
             * Variable references $(VAR_NAME) are expanded
             * using the previously defined environment variables in the container and
             * any service environment variables. If a variable cannot be resolved,
             * the reference in the input string will be unchanged. Double $$ are reduced
             * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
             * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
             * Escaped references will never be expanded, regardless of whether the variable
             * exists or not.
             * Defaults to "".
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
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
                 * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
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
                 * Selects a resource of the container: only resources limits and requests
                 * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
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
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
        }>;
        /**
         * EnvFrom follows the EnvFrom format to pass environment variables
         * sources to the pods to be used by Env
         */
        "envFrom"?: Array<{
            /**
             * The ConfigMap to select from
             */
            "configMapRef"?: {
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
             */
            "prefix"?: string;
            /**
             * The Secret to select from
             */
            "secretRef"?: {
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret must be defined
                 */
                "optional"?: boolean;
            };
        }>;
        /**
         * EphemeralVolumeSource allows the user to configure the source of ephemeral volumes.
         */
        "ephemeralVolumeSource"?: {
            /**
             * Will be used to create a stand-alone PVC to provision the volume.
             * The pod in which this EphemeralVolumeSource is embedded will be the
             * owner of the PVC, i.e. the PVC will be deleted together with the
             * pod.  The name of the PVC will be `<pod name>-<volume name>` where
             * `<volume name>` is the name from the `PodSpec.Volumes` array
             * entry. Pod validation will reject the pod if the concatenated name
             * is not valid for a PVC (for example, too long).
             *
             * An existing PVC with that name that is not owned by the pod
             * will \*not\* be used for the pod to avoid using an unrelated
             * volume by mistake. Starting the pod is then blocked until
             * the unrelated PVC is removed. If such a pre-created PVC is
             * meant to be used by the pod, the PVC has to updated with an
             * owner reference to the pod once the pod exists. Normally
             * this should not be necessary, but it may be useful when
             * manually reconstructing a broken cluster.
             *
             * This field is read-only and no changes will be made by Kubernetes
             * to the PVC after it has been created.
             *
             * Required, must not be nil.
             */
            "volumeClaimTemplate"?: {
                /**
                 * May contain labels and annotations that will be copied into the PVC
                 * when creating it. No other fields are allowed and will be rejected during
                 * validation.
                 */
                "metadata"?: {};
                /**
                 * The specification for the PersistentVolumeClaim. The entire content is
                 * copied unchanged into the PVC that gets created from this
                 * template. The same fields as in a PersistentVolumeClaim
                 * are also valid here.
                 */
                "spec": {
                    /**
                     * accessModes contains the desired access modes the volume should have.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                     */
                    "accessModes"?: Array<string>;
                    /**
                     * dataSource field can be used to specify either:
                     * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                     * \* An existing PVC (PersistentVolumeClaim)
                     * If the provisioner or an external controller can support the specified data source,
                     * it will create a new volume based on the contents of the specified data source.
                     * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                     * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                     * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                     */
                    "dataSource"?: {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                    };
                    /**
                     * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                     * volume is desired. This may be any object from a non-empty API group (non
                     * core object) or a PersistentVolumeClaim object.
                     * When this field is specified, volume binding will only succeed if the type of
                     * the specified object matches some installed volume populator or dynamic
                     * provisioner.
                     * This field will replace the functionality of the dataSource field and as such
                     * if both fields are non-empty, they must have the same value. For backwards
                     * compatibility, when namespace isn't specified in dataSourceRef,
                     * both fields (dataSource and dataSourceRef) will be set to the same
                     * value automatically if one of them is empty and the other is non-empty.
                     * When namespace is specified in dataSourceRef,
                     * dataSource isn't set to the same value and must be empty.
                     * There are three important differences between dataSource and dataSourceRef:
                     * \* While dataSource only allows two specific types of objects, dataSourceRef
                     *   allows any non-core object, as well as PersistentVolumeClaim objects.
                     * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
                     *   preserves all values, and generates an error if a disallowed value is
                     *   specified.
                     * \* While dataSource only allows local objects, dataSourceRef allows objects
                     *   in any namespaces.
                     * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                     * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                     */
                    "dataSourceRef"?: {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                        /**
                         * Namespace is the namespace of resource being referenced
                         * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                         * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                         */
                        "namespace"?: string;
                    };
                    /**
                     * resources represents the minimum resources the volume should have.
                     * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                     * that are lower than previous value but must still be higher than capacity recorded in the
                     * status field of the claim.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                     */
                    "resources"?: {
                        /**
                         * Limits describes the maximum amount of compute resources allowed.
                         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "limits"?: {
                            [key: string]: number | string;
                        };
                        /**
                         * Requests describes the minimum amount of compute resources required.
                         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
                         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "requests"?: {
                            [key: string]: number | string;
                        };
                    };
                    /**
                     * selector is a label query over volumes to consider for binding.
                     */
                    "selector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * storageClassName is the name of the StorageClass required by the claim.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                     */
                    "storageClassName"?: string;
                    /**
                     * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                     * If specified, the CSI driver will create or update the volume with the attributes defined
                     * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                     * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
                     * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
                     * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
                     * will be set by the persistentvolume controller if it exists.
                     * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                     * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                     * exists.
                     * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                     * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
                     */
                    "volumeAttributesClassName"?: string;
                    /**
                     * volumeMode defines what type of volume is required by the claim.
                     * Value of Filesystem is implied when not included in claim spec.
                     */
                    "volumeMode"?: string;
                    /**
                     * volumeName is the binding reference to the PersistentVolume backing this claim.
                     */
                    "volumeName"?: string;
                };
            };
        };
        /**
         * EphemeralVolumesSizeLimit allows the user to set the limits for the ephemeral
         * volumes
         */
        "ephemeralVolumesSizeLimit"?: {
            /**
             * Shm is the size limit of the shared memory volume
             */
            "shm"?: number | string;
            /**
             * TemporaryData is the size limit of the temporary data volume
             */
            "temporaryData"?: number | string;
        };
        /**
         * The list of external clusters which are used in the configuration
         */
        "externalClusters"?: Array<{
            /**
             * The configuration for the barman-cloud tool suite
             */
            "barmanObjectStore"?: {
                /**
                 * The credentials to use to upload data to Azure Blob Storage
                 */
                "azureCredentials"?: {
                    /**
                     * The connection string to be used
                     */
                    "connectionString"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * Use the Azure AD based authentication without providing explicitly the keys.
                     */
                    "inheritFromAzureAD"?: boolean;
                    /**
                     * The storage account where to upload data
                     */
                    "storageAccount"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The storage account key to be used in conjunction
                     * with the storage account name
                     */
                    "storageKey"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * A shared-access-signature to be used in conjunction with
                     * the storage account name
                     */
                    "storageSasToken"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                };
                /**
                 * The configuration to be used to backup the data files
                 * When not defined, base backups files will be stored uncompressed and may
                 * be unencrypted in the object store, according to the bucket default
                 * policy.
                 */
                "data"?: {
                    /**
                     * AdditionalCommandArgs represents additional arguments that can be appended
                     * to the 'barman-cloud-backup' command-line invocation. These arguments
                     * provide flexibility to customize the backup process further according to
                     * specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-backup' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "additionalCommandArgs"?: Array<string>;
                    /**
                     * Compress a backup file (a tar file per tablespace) while streaming it
                     * to the object store. Available options are empty string (no
                     * compression, default), `gzip`, `bzip2` or `snappy`.
                     */
                    "compression"?: "gzip" | "bzip2" | "snappy";
                    /**
                     * Whenever to force the encryption of files (if the bucket is
                     * not already configured for that).
                     * Allowed options are empty string (use the bucket policy, default),
                     * `AES256` and `aws:kms`
                     */
                    "encryption"?: "AES256" | "aws:kms";
                    /**
                     * Control whether the I/O workload for the backup initial checkpoint will
                     * be limited, according to the `checkpoint_completion_target` setting on
                     * the PostgreSQL server. If set to true, an immediate checkpoint will be
                     * used, meaning PostgreSQL will complete the checkpoint as soon as
                     * possible. `false` by default.
                     */
                    "immediateCheckpoint"?: boolean;
                    /**
                     * The number of parallel jobs to be used to upload the backup, defaults
                     * to 2
                     */
                    "jobs"?: number;
                };
                /**
                 * The path where to store the backup (i.e. s3://bucket/path/to/folder)
                 * this path, with different destination folders, will be used for WALs
                 * and for data
                 */
                "destinationPath": string;
                /**
                 * EndpointCA store the CA bundle of the barman endpoint.
                 * Useful when using self-signed certificates to avoid
                 * errors with certificate issuer and barman-cloud-wal-archive
                 */
                "endpointCA"?: {
                    /**
                     * The key to select
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * Endpoint to be used to upload data to the cloud,
                 * overriding the automatic endpoint discovery
                 */
                "endpointURL"?: string;
                /**
                 * The credentials to use to upload data to Google Cloud Storage
                 */
                "googleCredentials"?: {
                    /**
                     * The secret containing the Google Cloud Storage JSON file with the credentials
                     */
                    "applicationCredentials"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * If set to true, will presume that it's running inside a GKE environment,
                     * default to false.
                     */
                    "gkeEnvironment"?: boolean;
                };
                /**
                 * HistoryTags is a list of key value pairs that will be passed to the
                 * Barman --history-tags option.
                 */
                "historyTags"?: {
                    [key: string]: string;
                };
                /**
                 * The credentials to use to upload data to S3
                 */
                "s3Credentials"?: {
                    /**
                     * The reference to the access key id
                     */
                    "accessKeyId"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * Use the role based authentication without providing explicitly the keys.
                     */
                    "inheritFromIAMRole"?: boolean;
                    /**
                     * The reference to the secret containing the region name
                     */
                    "region"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The reference to the secret access key
                     */
                    "secretAccessKey"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                    /**
                     * The references to the session key
                     */
                    "sessionToken"?: {
                        /**
                         * The key to select
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         */
                        "name": string;
                    };
                };
                /**
                 * The server name on S3, the cluster name is used if this
                 * parameter is omitted
                 */
                "serverName"?: string;
                /**
                 * Tags is a list of key value pairs that will be passed to the
                 * Barman --tags option.
                 */
                "tags"?: {
                    [key: string]: string;
                };
                /**
                 * The configuration for the backup of the WAL stream.
                 * When not defined, WAL files will be stored uncompressed and may be
                 * unencrypted in the object store, according to the bucket default policy.
                 */
                "wal"?: {
                    /**
                     * Additional arguments that can be appended to the 'barman-cloud-wal-archive'
                     * command-line invocation. These arguments provide flexibility to customize
                     * the WAL archive process further, according to specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-wal-archive' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "archiveAdditionalCommandArgs"?: Array<string>;
                    /**
                     * Compress a WAL file before sending it to the object store. Available
                     * options are empty string (no compression, default), `gzip`, `bzip2` or `snappy`.
                     */
                    "compression"?: "gzip" | "bzip2" | "snappy";
                    /**
                     * Whenever to force the encryption of files (if the bucket is
                     * not already configured for that).
                     * Allowed options are empty string (use the bucket policy, default),
                     * `AES256` and `aws:kms`
                     */
                    "encryption"?: "AES256" | "aws:kms";
                    /**
                     * Number of WAL files to be either archived in parallel (when the
                     * PostgreSQL instance is archiving to a backup object store) or
                     * restored in parallel (when a PostgreSQL standby is fetching WAL
                     * files from a recovery object store). If not specified, WAL files
                     * will be processed one at a time. It accepts a positive integer as a
                     * value - with 1 being the minimum accepted value.
                     */
                    "maxParallel"?: number;
                    /**
                     * Additional arguments that can be appended to the 'barman-cloud-wal-restore'
                     * command-line invocation. These arguments provide flexibility to customize
                     * the WAL restore process further, according to specific requirements or configurations.
                     *
                     * Example:
                     * In a scenario where specialized backup options are required, such as setting
                     * a specific timeout or defining custom behavior, users can use this field
                     * to specify additional command arguments.
                     *
                     * Note:
                     * It's essential to ensure that the provided arguments are valid and supported
                     * by the 'barman-cloud-wal-restore' command, to avoid potential errors or unintended
                     * behavior during execution.
                     */
                    "restoreAdditionalCommandArgs"?: Array<string>;
                };
            };
            /**
             * The list of connection parameters, such as dbname, host, username, etc
             */
            "connectionParameters"?: {
                [key: string]: string;
            };
            /**
             * The server name, required
             */
            "name": string;
            /**
             * The reference to the password to be used to connect to the server.
             * If a password is provided, CloudNativePG creates a PostgreSQL
             * passfile at `/controller/external/NAME/pass` (where "NAME" is the
             * cluster's name). This passfile is automatically referenced in the
             * connection string when establishing a connection to the remote
             * PostgreSQL server from the current PostgreSQL `Cluster`. This ensures
             * secure and efficient password management for external clusters.
             */
            "password"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * The reference to an SSL certificate to be used to connect to this
             * instance
             */
            "sslCert"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * The reference to an SSL private key to be used to connect to this
             * instance
             */
            "sslKey"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * The reference to an SSL CA public key to be used to connect to this
             * instance
             */
            "sslRootCert"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
        }>;
        /**
         * The amount of time (in seconds) to wait before triggering a failover
         * after the primary PostgreSQL instance in the cluster was detected
         * to be unhealthy
         */
        "failoverDelay"?: number;
        /**
         * Defines the major PostgreSQL version we want to use within an ImageCatalog
         */
        "imageCatalogRef"?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            "apiGroup"?: string;
            /**
             * Kind is the type of resource being referenced
             */
            "kind": string;
            /**
             * The major version of PostgreSQL we want to use from the ImageCatalog
             */
            "major": number;
            /**
             * Name is the name of resource being referenced
             */
            "name": string;
        };
        /**
         * Name of the container image, supporting both tags (`<image>:<tag>`)
         * and digests for deterministic and repeatable deployments
         * (`<image>:<tag>@sha256:<digestValue>`)
         */
        "imageName"?: string;
        /**
         * Image pull policy.
         * One of `Always`, `Never` or `IfNotPresent`.
         * If not defined, it defaults to `IfNotPresent`.
         * Cannot be updated.
         * More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
         */
        "imagePullPolicy"?: string;
        /**
         * The list of pull secrets to be used to pull the images
         */
        "imagePullSecrets"?: Array<{
            /**
             * Name of the referent.
             */
            "name": string;
        }>;
        /**
         * Metadata that will be inherited by all objects related to the Cluster
         */
        "inheritedMetadata"?: {
            "annotations"?: {
                [key: string]: string;
            };
            "labels"?: {
                [key: string]: string;
            };
        };
        /**
         * Number of instances required in the cluster
         */
        "instances": number;
        /**
         * LivenessProbeTimeout is the time (in seconds) that is allowed for a PostgreSQL instance
         * to successfully respond to the liveness probe (default 30).
         * The Liveness probe failure threshold is derived from this value using the formula:
         * ceiling(livenessProbe / 10).
         */
        "livenessProbeTimeout"?: number;
        /**
         * The instances' log level, one of the following values: error, warning, info (default), debug, trace
         */
        "logLevel"?: "error" | "warning" | "info" | "debug" | "trace";
        /**
         * The configuration that is used by the portions of PostgreSQL that are managed by the instance manager
         */
        "managed"?: {
            /**
             * Database roles managed by the `Cluster`
             */
            "roles"?: Array<{
                /**
                 * Whether a role bypasses every row-level security (RLS) policy.
                 * Default is `false`.
                 */
                "bypassrls"?: boolean;
                /**
                 * Description of the role
                 */
                "comment"?: string;
                /**
                 * If the role can log in, this specifies how many concurrent
                 * connections the role can make. `-1` (the default) means no limit.
                 */
                "connectionLimit"?: number;
                /**
                 * When set to `true`, the role being defined will be allowed to create
                 * new databases. Specifying `false` (default) will deny a role the
                 * ability to create databases.
                 */
                "createdb"?: boolean;
                /**
                 * Whether the role will be permitted to create, alter, drop, comment
                 * on, change the security label for, and grant or revoke membership in
                 * other roles. Default is `false`.
                 */
                "createrole"?: boolean;
                /**
                 * DisablePassword indicates that a role's password should be set to NULL in Postgres
                 */
                "disablePassword"?: boolean;
                /**
                 * Ensure the role is `present` or `absent` - defaults to "present"
                 */
                "ensure"?: "present" | "absent";
                /**
                 * List of one or more existing roles to which this role will be
                 * immediately added as a new member. Default empty.
                 */
                "inRoles"?: Array<string>;
                /**
                 * Whether a role "inherits" the privileges of roles it is a member of.
                 * Defaults is `true`.
                 */
                "inherit"?: boolean;
                /**
                 * Whether the role is allowed to log in. A role having the `login`
                 * attribute can be thought of as a user. Roles without this attribute
                 * are useful for managing database privileges, but are not users in
                 * the usual sense of the word. Default is `false`.
                 */
                "login"?: boolean;
                /**
                 * Name of the role
                 */
                "name": string;
                /**
                 * Secret containing the password of the role (if present)
                 * If null, the password will be ignored unless DisablePassword is set
                 */
                "passwordSecret"?: {
                    /**
                     * Name of the referent.
                     */
                    "name": string;
                };
                /**
                 * Whether a role is a replication role. A role must have this
                 * attribute (or be a superuser) in order to be able to connect to the
                 * server in replication mode (physical or logical replication) and in
                 * order to be able to create or drop replication slots. A role having
                 * the `replication` attribute is a very highly privileged role, and
                 * should only be used on roles actually used for replication. Default
                 * is `false`.
                 */
                "replication"?: boolean;
                /**
                 * Whether the role is a `superuser` who can override all access
                 * restrictions within the database - superuser status is dangerous and
                 * should be used only when really needed. You must yourself be a
                 * superuser to create a new superuser. Defaults is `false`.
                 */
                "superuser"?: boolean;
                /**
                 * Date and time after which the role's password is no longer valid.
                 * When omitted, the password will never expire (default).
                 */
                "validUntil"?: string;
            }>;
            /**
             * Services roles managed by the `Cluster`
             */
            "services"?: {
                /**
                 * Additional is a list of additional managed services specified by the user.
                 */
                "additional"?: Array<{
                    /**
                     * SelectorType specifies the type of selectors that the service will have.
                     * Valid values are "rw", "r", and "ro", representing read-write, read, and read-only services.
                     */
                    "selectorType": string & ("rw" | "r" | "ro" & "rw" | "r" | "ro");
                    /**
                     * ServiceTemplate is the template specification for the service.
                     */
                    "serviceTemplate": {
                        /**
                         * Standard object's metadata.
                         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
                         */
                        "metadata"?: {
                            /**
                             * Annotations is an unstructured key value map stored with a resource that may be
                             * set by external tools to store and retrieve arbitrary metadata. They are not
                             * queryable and should be preserved when modifying objects.
                             * More info: http://kubernetes.io/docs/user-guide/annotations
                             */
                            "annotations"?: {
                                [key: string]: string;
                            };
                            /**
                             * Map of string keys and values that can be used to organize and categorize
                             * (scope and select) objects. May match selectors of replication controllers
                             * and services.
                             * More info: http://kubernetes.io/docs/user-guide/labels
                             */
                            "labels"?: {
                                [key: string]: string;
                            };
                            /**
                             * The name of the resource. Only supported for certain types
                             */
                            "name"?: string;
                        };
                        /**
                         * Specification of the desired behavior of the service.
                         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
                         */
                        "spec"?: {
                            /**
                             * allocateLoadBalancerNodePorts defines if NodePorts will be automatically
                             * allocated for services with type LoadBalancer.  Default is "true". It
                             * may be set to "false" if the cluster load-balancer does not rely on
                             * NodePorts.  If the caller requests specific NodePorts (by specifying a
                             * value), those requests will be respected, regardless of this field.
                             * This field may only be set for services with type LoadBalancer and will
                             * be cleared if the type is changed to any other type.
                             */
                            "allocateLoadBalancerNodePorts"?: boolean;
                            /**
                             * clusterIP is the IP address of the service and is usually assigned
                             * randomly. If an address is specified manually, is in-range (as per
                             * system configuration), and is not in use, it will be allocated to the
                             * service; otherwise creation of the service will fail. This field may not
                             * be changed through updates unless the type field is also being changed
                             * to ExternalName (which requires this field to be blank) or the type
                             * field is being changed from ExternalName (in which case this field may
                             * optionally be specified, as describe above).  Valid values are "None",
                             * empty string (""), or a valid IP address. Setting this to "None" makes a
                             * "headless service" (no virtual IP), which is useful when direct endpoint
                             * connections are preferred and proxying is not required.  Only applies to
                             * types ClusterIP, NodePort, and LoadBalancer. If this field is specified
                             * when creating a Service of type ExternalName, creation will fail. This
                             * field will be wiped when updating a Service to type ExternalName.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                             */
                            "clusterIP"?: string;
                            /**
                             * ClusterIPs is a list of IP addresses assigned to this service, and are
                             * usually assigned randomly.  If an address is specified manually, is
                             * in-range (as per system configuration), and is not in use, it will be
                             * allocated to the service; otherwise creation of the service will fail.
                             * This field may not be changed through updates unless the type field is
                             * also being changed to ExternalName (which requires this field to be
                             * empty) or the type field is being changed from ExternalName (in which
                             * case this field may optionally be specified, as describe above).  Valid
                             * values are "None", empty string (""), or a valid IP address.  Setting
                             * this to "None" makes a "headless service" (no virtual IP), which is
                             * useful when direct endpoint connections are preferred and proxying is
                             * not required.  Only applies to types ClusterIP, NodePort, and
                             * LoadBalancer. If this field is specified when creating a Service of type
                             * ExternalName, creation will fail. This field will be wiped when updating
                             * a Service to type ExternalName.  If this field is not specified, it will
                             * be initialized from the clusterIP field.  If this field is specified,
                             * clients must ensure that clusterIPs[0] and clusterIP have the same
                             * value.
                             *
                             * This field may hold a maximum of two entries (dual-stack IPs, in either order).
                             * These IPs must correspond to the values of the ipFamilies field. Both
                             * clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                             */
                            "clusterIPs"?: Array<string>;
                            /**
                             * externalIPs is a list of IP addresses for which nodes in the cluster
                             * will also accept traffic for this service.  These IPs are not managed by
                             * Kubernetes.  The user is responsible for ensuring that traffic arrives
                             * at a node with this IP.  A common example is external load-balancers
                             * that are not part of the Kubernetes system.
                             */
                            "externalIPs"?: Array<string>;
                            /**
                             * externalName is the external reference that discovery mechanisms will
                             * return as an alias for this service (e.g. a DNS CNAME record). No
                             * proxying will be involved.  Must be a lowercase RFC-1123 hostname
                             * (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
                             */
                            "externalName"?: string;
                            /**
                             * externalTrafficPolicy describes how nodes distribute service traffic they
                             * receive on one of the Service's "externally-facing" addresses (NodePorts,
                             * ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure
                             * the service in a way that assumes that external load balancers will take care
                             * of balancing the service traffic between nodes, and so each node will deliver
                             * traffic only to the node-local endpoints of the service, without masquerading
                             * the client source IP. (Traffic mistakenly sent to a node with no endpoints will
                             * be dropped.) The default value, "Cluster", uses the standard behavior of
                             * routing to all endpoints evenly (possibly modified by topology and other
                             * features). Note that traffic sent to an External IP or LoadBalancer IP from
                             * within the cluster will always get "Cluster" semantics, but clients sending to
                             * a NodePort from within the cluster may need to take traffic policy into account
                             * when picking a node.
                             */
                            "externalTrafficPolicy"?: string;
                            /**
                             * healthCheckNodePort specifies the healthcheck nodePort for the service.
                             * This only applies when type is set to LoadBalancer and
                             * externalTrafficPolicy is set to Local. If a value is specified, is
                             * in-range, and is not in use, it will be used.  If not specified, a value
                             * will be automatically allocated.  External systems (e.g. load-balancers)
                             * can use this port to determine if a given node holds endpoints for this
                             * service or not.  If this field is specified when creating a Service
                             * which does not need it, creation will fail. This field will be wiped
                             * when updating a Service to no longer need it (e.g. changing type).
                             * This field cannot be updated once set.
                             */
                            "healthCheckNodePort"?: number;
                            /**
                             * InternalTrafficPolicy describes how nodes distribute service traffic they
                             * receive on the ClusterIP. If set to "Local", the proxy will assume that pods
                             * only want to talk to endpoints of the service on the same node as the pod,
                             * dropping the traffic if there are no local endpoints. The default value,
                             * "Cluster", uses the standard behavior of routing to all endpoints evenly
                             * (possibly modified by topology and other features).
                             */
                            "internalTrafficPolicy"?: string;
                            /**
                             * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this
                             * service. This field is usually assigned automatically based on cluster
                             * configuration and the ipFamilyPolicy field. If this field is specified
                             * manually, the requested family is available in the cluster,
                             * and ipFamilyPolicy allows it, it will be used; otherwise creation of
                             * the service will fail. This field is conditionally mutable: it allows
                             * for adding or removing a secondary IP family, but it does not allow
                             * changing the primary IP family of the Service. Valid values are "IPv4"
                             * and "IPv6".  This field only applies to Services of types ClusterIP,
                             * NodePort, and LoadBalancer, and does apply to "headless" services.
                             * This field will be wiped when updating a Service to type ExternalName.
                             *
                             * This field may hold a maximum of two entries (dual-stack families, in
                             * either order).  These families must correspond to the values of the
                             * clusterIPs field, if specified. Both clusterIPs and ipFamilies are
                             * governed by the ipFamilyPolicy field.
                             */
                            "ipFamilies"?: Array<string>;
                            /**
                             * IPFamilyPolicy represents the dual-stack-ness requested or required by
                             * this Service. If there is no value provided, then this field will be set
                             * to SingleStack. Services can be "SingleStack" (a single IP family),
                             * "PreferDualStack" (two IP families on dual-stack configured clusters or
                             * a single IP family on single-stack clusters), or "RequireDualStack"
                             * (two IP families on dual-stack configured clusters, otherwise fail). The
                             * ipFamilies and clusterIPs fields depend on the value of this field. This
                             * field will be wiped when updating a service to type ExternalName.
                             */
                            "ipFamilyPolicy"?: string;
                            /**
                             * loadBalancerClass is the class of the load balancer implementation this Service belongs to.
                             * If specified, the value of this field must be a label-style identifier, with an optional prefix,
                             * e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users.
                             * This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load
                             * balancer implementation is used, today this is typically done through the cloud provider integration,
                             * but should apply for any default implementation. If set, it is assumed that a load balancer
                             * implementation is watching for Services with a matching class. Any default load balancer
                             * implementation (e.g. cloud providers) should ignore Services that set this field.
                             * This field can only be set when creating or updating a Service to type 'LoadBalancer'.
                             * Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
                             */
                            "loadBalancerClass"?: string;
                            /**
                             * Only applies to Service Type: LoadBalancer.
                             * This feature depends on whether the underlying cloud-provider supports specifying
                             * the loadBalancerIP when a load balancer is created.
                             * This field will be ignored if the cloud-provider does not support the feature.
                             * Deprecated: This field was under-specified and its meaning varies across implementations.
                             * Using it is non-portable and it may not support dual-stack.
                             * Users are encouraged to use implementation-specific annotations when available.
                             */
                            "loadBalancerIP"?: string;
                            /**
                             * If specified and supported by the platform, this will restrict traffic through the cloud-provider
                             * load-balancer will be restricted to the specified client IPs. This field will be ignored if the
                             * cloud-provider does not support the feature."
                             * More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
                             */
                            "loadBalancerSourceRanges"?: Array<string>;
                            /**
                             * The list of ports that are exposed by this service.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                             */
                            "ports"?: Array<{
                                /**
                                 * The application protocol for this port.
                                 * This is used as a hint for implementations to offer richer behavior for protocols that they understand.
                                 * This field follows standard Kubernetes label syntax.
                                 * Valid values are either:
                                 *
                                 * \* Un-prefixed protocol names - reserved for IANA standard service names (as per
                                 * RFC-6335 and https://www.iana.org/assignments/service-names).
                                 *
                                 * \* Kubernetes-defined prefixed names:
                                 *   \* 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-
                                 *   \* 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
                                 *   \* 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
                                 *
                                 * \* Other protocols should use implementation-defined prefixed names such as
                                 * mycompany.com/my-custom-protocol.
                                 */
                                "appProtocol"?: string;
                                /**
                                 * The name of this port within the service. This must be a DNS_LABEL.
                                 * All ports within a ServiceSpec must have unique names. When considering
                                 * the endpoints for a Service, this must match the 'name' field in the
                                 * EndpointPort.
                                 * Optional if only one ServicePort is defined on this service.
                                 */
                                "name"?: string;
                                /**
                                 * The port on each node on which this service is exposed when type is
                                 * NodePort or LoadBalancer.  Usually assigned by the system. If a value is
                                 * specified, in-range, and not in use it will be used, otherwise the
                                 * operation will fail.  If not specified, a port will be allocated if this
                                 * Service requires one.  If this field is specified when creating a
                                 * Service which does not need it, creation will fail. This field will be
                                 * wiped when updating a Service to no longer need it (e.g. changing type
                                 * from NodePort to ClusterIP).
                                 * More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
                                 */
                                "nodePort"?: number;
                                /**
                                 * The port that will be exposed by this service.
                                 */
                                "port": number;
                                /**
                                 * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP".
                                 * Default is TCP.
                                 */
                                "protocol"?: string;
                                /**
                                 * Number or name of the port to access on the pods targeted by the service.
                                 * Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                                 * If this is a string, it will be looked up as a named port in the
                                 * target Pod's container ports. If this is not specified, the value
                                 * of the 'port' field is used (an identity map).
                                 * This field is ignored for services with clusterIP=None, and should be
                                 * omitted or set equal to the 'port' field.
                                 * More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
                                 */
                                "targetPort"?: number | string;
                            }>;
                            /**
                             * publishNotReadyAddresses indicates that any agent which deals with endpoints for this
                             * Service should disregard any indications of ready/not-ready.
                             * The primary use case for setting this field is for a StatefulSet's Headless Service to
                             * propagate SRV DNS records for its Pods for the purpose of peer discovery.
                             * The Kubernetes controllers that generate Endpoints and EndpointSlice resources for
                             * Services interpret this to mean that all endpoints are considered "ready" even if the
                             * Pods themselves are not. Agents which consume only Kubernetes generated endpoints
                             * through the Endpoints or EndpointSlice resources can safely assume this behavior.
                             */
                            "publishNotReadyAddresses"?: boolean;
                            /**
                             * Route service traffic to pods with label keys and values matching this
                             * selector. If empty or not present, the service is assumed to have an
                             * external process managing its endpoints, which Kubernetes will not
                             * modify. Only applies to types ClusterIP, NodePort, and LoadBalancer.
                             * Ignored if type is ExternalName.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/
                             */
                            "selector"?: {
                                [key: string]: string;
                            };
                            /**
                             * Supports "ClientIP" and "None". Used to maintain session affinity.
                             * Enable client IP based session affinity.
                             * Must be ClientIP or None.
                             * Defaults to None.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                             */
                            "sessionAffinity"?: string;
                            /**
                             * sessionAffinityConfig contains the configurations of session affinity.
                             */
                            "sessionAffinityConfig"?: {
                                /**
                                 * clientIP contains the configurations of Client IP based session affinity.
                                 */
                                "clientIP"?: {
                                    /**
                                     * timeoutSeconds specifies the seconds of ClientIP type session sticky time.
                                     * The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP".
                                     * Default value is 10800(for 3 hours).
                                     */
                                    "timeoutSeconds"?: number;
                                };
                            };
                            /**
                             * TrafficDistribution offers a way to express preferences for how traffic is
                             * distributed to Service endpoints. Implementations can use this field as a
                             * hint, but are not required to guarantee strict adherence. If the field is
                             * not set, the implementation will apply its default routing strategy. If set
                             * to "PreferClose", implementations should prioritize endpoints that are
                             * topologically close (e.g., same zone).
                             * This is an alpha field and requires enabling ServiceTrafficDistribution feature.
                             */
                            "trafficDistribution"?: string;
                            /**
                             * type determines how the Service is exposed. Defaults to ClusterIP. Valid
                             * options are ExternalName, ClusterIP, NodePort, and LoadBalancer.
                             * "ClusterIP" allocates a cluster-internal IP address for load-balancing
                             * to endpoints. Endpoints are determined by the selector or if that is not
                             * specified, by manual construction of an Endpoints object or
                             * EndpointSlice objects. If clusterIP is "None", no virtual IP is
                             * allocated and the endpoints are published as a set of endpoints rather
                             * than a virtual IP.
                             * "NodePort" builds on ClusterIP and allocates a port on every node which
                             * routes to the same endpoints as the clusterIP.
                             * "LoadBalancer" builds on NodePort and creates an external load-balancer
                             * (if supported in the current cloud) which routes to the same endpoints
                             * as the clusterIP.
                             * "ExternalName" aliases this service to the specified externalName.
                             * Several other fields do not apply to ExternalName services.
                             * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
                             */
                            "type"?: string;
                        };
                    };
                    /**
                     * UpdateStrategy describes how the service differences should be reconciled
                     */
                    "updateStrategy"?: "patch" | "replace";
                }>;
                /**
                 * DisabledDefaultServices is a list of service types that are disabled by default.
                 * Valid values are "r", and "ro", representing read, and read-only services.
                 */
                "disabledDefaultServices"?: Array<"rw" | "r" | "ro">;
            };
        };
        /**
         * The target value for the synchronous replication quorum, that can be
         * decreased if the number of ready standbys is lower than this.
         * Undefined or 0 disable synchronous replication.
         */
        "maxSyncReplicas"?: number;
        /**
         * Minimum number of instances required in synchronous replication with the
         * primary. Undefined or 0 allow writes to complete when no standby is
         * available.
         */
        "minSyncReplicas"?: number;
        /**
         * The configuration of the monitoring infrastructure of this cluster
         */
        "monitoring"?: {
            /**
             * The list of config maps containing the custom queries
             */
            "customQueriesConfigMap"?: Array<{
                /**
                 * The key to select
                 */
                "key": string;
                /**
                 * Name of the referent.
                 */
                "name": string;
            }>;
            /**
             * The list of secrets containing the custom queries
             */
            "customQueriesSecret"?: Array<{
                /**
                 * The key to select
                 */
                "key": string;
                /**
                 * Name of the referent.
                 */
                "name": string;
            }>;
            /**
             * Whether the default queries should be injected.
             * Set it to `true` if you don't want to inject default queries into the cluster.
             * Default: false.
             */
            "disableDefaultQueries"?: boolean;
            /**
             * Enable or disable the `PodMonitor`
             */
            "enablePodMonitor"?: boolean;
            /**
             * The list of metric relabelings for the `PodMonitor`. Applied to samples before ingestion.
             */
            "podMonitorMetricRelabelings"?: Array<{
                /**
                 * Action to perform based on the regex matching.
                 *
                 * `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0.
                 * `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
                 *
                 * Default: "Replace"
                 */
                "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
                /**
                 * Modulus to take of the hash of the source label values.
                 *
                 * Only applicable when the action is `HashMod`.
                 */
                "modulus"?: number;
                /**
                 * Regular expression against which the extracted value is matched.
                 */
                "regex"?: string;
                /**
                 * Replacement value against which a Replace action is performed if the
                 * regular expression matches.
                 *
                 * Regex capture groups are available.
                 */
                "replacement"?: string;
                /**
                 * Separator is the string between concatenated SourceLabels.
                 */
                "separator"?: string;
                /**
                 * The source labels select values from existing labels. Their content is
                 * concatenated using the configured Separator and matched against the
                 * configured regular expression.
                 */
                "sourceLabels"?: Array<string>;
                /**
                 * Label to which the resulting string is written in a replacement.
                 *
                 * It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`,
                 * `KeepEqual` and `DropEqual` actions.
                 *
                 * Regex capture groups are available.
                 */
                "targetLabel"?: string;
            }>;
            /**
             * The list of relabelings for the `PodMonitor`. Applied to samples before scraping.
             */
            "podMonitorRelabelings"?: Array<{
                /**
                 * Action to perform based on the regex matching.
                 *
                 * `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0.
                 * `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
                 *
                 * Default: "Replace"
                 */
                "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
                /**
                 * Modulus to take of the hash of the source label values.
                 *
                 * Only applicable when the action is `HashMod`.
                 */
                "modulus"?: number;
                /**
                 * Regular expression against which the extracted value is matched.
                 */
                "regex"?: string;
                /**
                 * Replacement value against which a Replace action is performed if the
                 * regular expression matches.
                 *
                 * Regex capture groups are available.
                 */
                "replacement"?: string;
                /**
                 * Separator is the string between concatenated SourceLabels.
                 */
                "separator"?: string;
                /**
                 * The source labels select values from existing labels. Their content is
                 * concatenated using the configured Separator and matched against the
                 * configured regular expression.
                 */
                "sourceLabels"?: Array<string>;
                /**
                 * Label to which the resulting string is written in a replacement.
                 *
                 * It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`,
                 * `KeepEqual` and `DropEqual` actions.
                 *
                 * Regex capture groups are available.
                 */
                "targetLabel"?: string;
            }>;
            /**
             * Configure TLS communication for the metrics endpoint.
             * Changing tls.enabled option will force a rollout of all instances.
             */
            "tls"?: {
                /**
                 * Enable TLS for the monitoring endpoint.
                 * Changing this option will force a rollout of all instances.
                 */
                "enabled"?: boolean;
            };
        };
        /**
         * Define a maintenance window for the Kubernetes nodes
         */
        "nodeMaintenanceWindow"?: {
            /**
             * Is there a node maintenance activity in progress?
             */
            "inProgress"?: boolean;
            /**
             * Reuse the existing PVC (wait for the node to come
             * up again) or not (recreate it elsewhere - when `instances` >1)
             */
            "reusePVC"?: boolean;
        };
        /**
         * The plugins configuration, containing
         * any plugin to be loaded with the corresponding configuration
         */
        "plugins"?: Array<{
            /**
             * Name is the plugin name
             */
            "name": string;
            /**
             * Parameters is the configuration of the plugin
             */
            "parameters"?: {
                [key: string]: string;
            };
        }>;
        /**
         * The GID of the `postgres` user inside the image, defaults to `26`
         */
        "postgresGID"?: number;
        /**
         * The UID of the `postgres` user inside the image, defaults to `26`
         */
        "postgresUID"?: number;
        /**
         * Configuration of the PostgreSQL server
         */
        "postgresql"?: {
            /**
             * If this parameter is true, the user will be able to invoke `ALTER SYSTEM`
             * on this CloudNativePG Cluster.
             * This should only be used for debugging and troubleshooting.
             * Defaults to false.
             */
            "enableAlterSystem"?: boolean;
            /**
             * Options to specify LDAP configuration
             */
            "ldap"?: {
                /**
                 * Bind as authentication configuration
                 */
                "bindAsAuth"?: {
                    /**
                     * Prefix for the bind authentication option
                     */
                    "prefix"?: string;
                    /**
                     * Suffix for the bind authentication option
                     */
                    "suffix"?: string;
                };
                /**
                 * Bind+Search authentication configuration
                 */
                "bindSearchAuth"?: {
                    /**
                     * Root DN to begin the user search
                     */
                    "baseDN"?: string;
                    /**
                     * DN of the user to bind to the directory
                     */
                    "bindDN"?: string;
                    /**
                     * Secret with the password for the user to bind to the directory
                     */
                    "bindPassword"?: {
                        /**
                         * The key of the secret to select from.  Must be a valid secret key.
                         */
                        "key": string;
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        "name"?: string;
                        /**
                         * Specify whether the Secret or its key must be defined
                         */
                        "optional"?: boolean;
                    };
                    /**
                     * Attribute to match against the username
                     */
                    "searchAttribute"?: string;
                    /**
                     * Search filter to use when doing the search+bind authentication
                     */
                    "searchFilter"?: string;
                };
                /**
                 * LDAP server port
                 */
                "port"?: number;
                /**
                 * LDAP schema to be used, possible options are `ldap` and `ldaps`
                 */
                "scheme"?: "ldap" | "ldaps";
                /**
                 * LDAP hostname or IP address
                 */
                "server"?: string;
                /**
                 * Set to 'true' to enable LDAP over TLS. 'false' is default
                 */
                "tls"?: boolean;
            };
            /**
             * PostgreSQL configuration options (postgresql.conf)
             */
            "parameters"?: {
                [key: string]: string;
            };
            /**
             * PostgreSQL Host Based Authentication rules (lines to be appended
             * to the pg_hba.conf file)
             */
            "pg_hba"?: Array<string>;
            /**
             * PostgreSQL User Name Maps rules (lines to be appended
             * to the pg_ident.conf file)
             */
            "pg_ident"?: Array<string>;
            /**
             * Specifies the maximum number of seconds to wait when promoting an instance to primary.
             * Default value is 40000000, greater than one year in seconds,
             * big enough to simulate an infinite timeout
             */
            "promotionTimeout"?: number;
            /**
             * Lists of shared preload libraries to add to the default ones
             */
            "shared_preload_libraries"?: Array<string>;
            /**
             * Requirements to be met by sync replicas. This will affect how the "synchronous_standby_names" parameter will be
             * set up.
             */
            "syncReplicaElectionConstraint"?: {
                /**
                 * This flag enables the constraints for sync replicas
                 */
                "enabled": boolean;
                /**
                 * A list of node labels values to extract and compare to evaluate if the pods reside in the same topology or not
                 */
                "nodeLabelsAntiAffinity"?: Array<string>;
            };
            /**
             * Configuration of the PostgreSQL synchronous replication feature
             */
            "synchronous"?: {
                /**
                 * Specifies the maximum number of local cluster pods that can be
                 * automatically included in the `synchronous_standby_names` option in
                 * PostgreSQL.
                 */
                "maxStandbyNamesFromCluster"?: number;
                /**
                 * Method to select synchronous replication standbys from the listed
                 * servers, accepting 'any' (quorum-based synchronous replication) or
                 * 'first' (priority-based synchronous replication) as values.
                 */
                "method": "any" | "first";
                /**
                 * Specifies the number of synchronous standby servers that
                 * transactions must wait for responses from.
                 */
                "number": number;
                /**
                 * A user-defined list of application names to be added to
                 * `synchronous_standby_names` after local cluster pods (the order is
                 * only useful for priority-based synchronous replication).
                 */
                "standbyNamesPost"?: Array<string>;
                /**
                 * A user-defined list of application names to be added to
                 * `synchronous_standby_names` before local cluster pods (the order is
                 * only useful for priority-based synchronous replication).
                 */
                "standbyNamesPre"?: Array<string>;
            };
        };
        /**
         * Method to follow to upgrade the primary server during a rolling
         * update procedure, after all replicas have been successfully updated:
         * it can be with a switchover (`switchover`) or in-place (`restart` - default)
         */
        "primaryUpdateMethod"?: "switchover" | "restart";
        /**
         * Deployment strategy to follow to upgrade the primary server during a rolling
         * update procedure, after all replicas have been successfully updated:
         * it can be automated (`unsupervised` - default) or manual (`supervised`)
         */
        "primaryUpdateStrategy"?: "unsupervised" | "supervised";
        /**
         * Name of the priority class which will be used in every generated Pod, if the PriorityClass
         * specified does not exist, the pod will not be able to schedule.  Please refer to
         * https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#priorityclass
         * for more information
         */
        "priorityClassName"?: string;
        /**
         * Template to be used to define projected volumes, projected volumes will be mounted
         * under `/projected` base folder
         */
        "projectedVolumeTemplate"?: {
            /**
             * defaultMode are the mode bits used to set permissions on created files by default.
             * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
             * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
             * Directories within the path are not affected by this setting.
             * This might be in conflict with other options that affect the file
             * mode, like fsGroup, and the result can be other mode bits set.
             */
            "defaultMode"?: number;
            /**
             * sources is the list of volume projections. Each entry in this list
             * handles one source.
             */
            "sources"?: Array<{
                /**
                 * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                 * of ClusterTrustBundle objects in an auto-updating file.
                 *
                 * Alpha, gated by the ClusterTrustBundleProjection feature gate.
                 *
                 * ClusterTrustBundle objects can either be selected by name, or by the
                 * combination of signer name and a label selector.
                 *
                 * Kubelet performs aggressive normalization of the PEM contents written
                 * into the pod filesystem.  Esoteric PEM features such as inter-block
                 * comments and block headers are stripped.  Certificates are deduplicated.
                 * The ordering of certificates within the file is arbitrary, and Kubelet
                 * may change the order over time.
                 */
                "clusterTrustBundle"?: {
                    /**
                     * Select all ClusterTrustBundles that match this label selector.  Only has
                     * effect if signerName is set.  Mutually-exclusive with name.  If unset,
                     * interpreted as "match nothing".  If set but empty, interpreted as "match
                     * everything".
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
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * Select a single ClusterTrustBundle by object name.  Mutually-exclusive
                     * with signerName and labelSelector.
                     */
                    "name"?: string;
                    /**
                     * If true, don't block pod startup if the referenced ClusterTrustBundle(s)
                     * aren't available.  If using name, then the named ClusterTrustBundle is
                     * allowed not to exist.  If using signerName, then the combination of
                     * signerName and labelSelector is allowed to match zero
                     * ClusterTrustBundles.
                     */
                    "optional"?: boolean;
                    /**
                     * Relative path from the volume root to write the bundle.
                     */
                    "path": string;
                    /**
                     * Select all ClusterTrustBundles that match this signer name.
                     * Mutually-exclusive with name.  The contents of all selected
                     * ClusterTrustBundles will be unified and deduplicated.
                     */
                    "signerName"?: string;
                };
                /**
                 * configMap information about the configMap data to project
                 */
                "configMap"?: {
                    /**
                     * items if unspecified, each key-value pair in the Data field of the referenced
                     * ConfigMap will be projected into the volume as a file whose name is the
                     * key and content is the value. If specified, the listed keys will be
                     * projected into the specified paths, and unlisted keys will not be
                     * present. If a key is specified which is not present in the ConfigMap,
                     * the volume setup will error unless it is marked optional. Paths must be
                     * relative and may not contain the '..' path or start with '..'.
                     */
                    "items"?: Array<{
                        /**
                         * key is the key to project.
                         */
                        "key": string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file.
                         * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * path is the relative path of the file to map the key to.
                         * May not be an absolute path.
                         * May not contain the path element '..'.
                         * May not start with the string '..'.
                         */
                        "path": string;
                    }>;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * optional specify whether the ConfigMap or its keys must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * downwardAPI information about the downwardAPI data to project
                 */
                "downwardAPI"?: {
                    /**
                     * Items is a list of DownwardAPIVolume file
                     */
                    "items"?: Array<{
                        /**
                         * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
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
                         * Optional: mode bits used to set permissions on this file, must be an octal value
                         * between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                         */
                        "path": string;
                        /**
                         * Selects a resource of the container: only resources limits and requests
                         * (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
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
                    }>;
                };
                /**
                 * secret information about the secret data to project
                 */
                "secret"?: {
                    /**
                     * items if unspecified, each key-value pair in the Data field of the referenced
                     * Secret will be projected into the volume as a file whose name is the
                     * key and content is the value. If specified, the listed keys will be
                     * projected into the specified paths, and unlisted keys will not be
                     * present. If a key is specified which is not present in the Secret,
                     * the volume setup will error unless it is marked optional. Paths must be
                     * relative and may not contain the '..' path or start with '..'.
                     */
                    "items"?: Array<{
                        /**
                         * key is the key to project.
                         */
                        "key": string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file.
                         * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * path is the relative path of the file to map the key to.
                         * May not be an absolute path.
                         * May not contain the path element '..'.
                         * May not start with the string '..'.
                         */
                        "path": string;
                    }>;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * optional field specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * serviceAccountToken is information about the serviceAccountToken data to project
                 */
                "serviceAccountToken"?: {
                    /**
                     * audience is the intended audience of the token. A recipient of a token
                     * must identify itself with an identifier specified in the audience of the
                     * token, and otherwise should reject the token. The audience defaults to the
                     * identifier of the apiserver.
                     */
                    "audience"?: string;
                    /**
                     * expirationSeconds is the requested duration of validity of the service
                     * account token. As the token approaches expiration, the kubelet volume
                     * plugin will proactively rotate the service account token. The kubelet will
                     * start trying to rotate the token if the token is older than 80 percent of
                     * its time to live or if the token is older than 24 hours.Defaults to 1 hour
                     * and must be at least 10 minutes.
                     */
                    "expirationSeconds"?: number;
                    /**
                     * path is the path relative to the mount point of the file to project the
                     * token into.
                     */
                    "path": string;
                };
            }>;
        };
        /**
         * Replica cluster configuration
         */
        "replica"?: {
            /**
             * If replica mode is enabled, this cluster will be a replica of an
             * existing cluster. Replica cluster can be created from a recovery
             * object store or via streaming through pg_basebackup.
             * Refer to the Replica clusters page of the documentation for more information.
             */
            "enabled"?: boolean;
            /**
             * When replica mode is enabled, this parameter allows you to replay
             * transactions only when the system time is at least the configured
             * time past the commit time. This provides an opportunity to correct
             * data loss errors. Note that when this parameter is set, a promotion
             * token cannot be used.
             */
            "minApplyDelay"?: string;
            /**
             * Primary defines which Cluster is defined to be the primary in the distributed PostgreSQL cluster, based on the
             * topology specified in externalClusters
             */
            "primary"?: string;
            /**
             * A demotion token generated by an external cluster used to
             * check if the promotion requirements are met.
             */
            "promotionToken"?: string;
            /**
             * Self defines the name of this cluster. It is used to determine if this is a primary
             * or a replica cluster, comparing it with `primary`
             */
            "self"?: string;
            /**
             * The name of the external cluster which is the replication origin
             */
            "source": string;
        };
        /**
         * Replication slots management configuration
         */
        "replicationSlots"?: {
            /**
             * Replication slots for high availability configuration
             */
            "highAvailability"?: {
                /**
                 * If enabled (default), the operator will automatically manage replication slots
                 * on the primary instance and use them in streaming replication
                 * connections with all the standby instances that are part of the HA
                 * cluster. If disabled, the operator will not take advantage
                 * of replication slots in streaming connections with the replicas.
                 * This feature also controls replication slots in replica cluster,
                 * from the designated primary to its cascading replicas.
                 */
                "enabled"?: boolean;
                /**
                 * Prefix for replication slots managed by the operator for HA.
                 * It may only contain lower case letters, numbers, and the underscore character.
                 * This can only be set at creation time. By default set to `_cnpg_`.
                 */
                "slotPrefix"?: string;
            };
            /**
             * Configures the synchronization of the user defined physical replication slots
             */
            "synchronizeReplicas"?: {
                /**
                 * When set to true, every replication slot that is on the primary is synchronized on each standby
                 */
                "enabled": boolean;
                /**
                 * List of regular expression patterns to match the names of replication slots to be excluded (by default empty)
                 */
                "excludePatterns"?: Array<string>;
            };
            /**
             * Standby will update the status of the local replication slots
             * every `updateInterval` seconds (default 30).
             */
            "updateInterval"?: number;
        };
        /**
         * Resources requirements of every generated Pod. Please refer to
         * https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         * for more information.
         */
        "resources"?: {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            "claims"?: Array<{
                /**
                 * Name must match the name of one entry in pod.spec.resourceClaims of
                 * the Pod where this field is used. It makes that resource available
                 * inside a container.
                 */
                "name": string;
                /**
                 * Request is the name chosen for a request in the referenced claim.
                 * If empty, everything from the claim is made available, otherwise
                 * only the result of this request.
                 */
                "request"?: string;
            }>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
                [key: string]: number | string;
            };
        };
        /**
         * If specified, the pod will be dispatched by specified Kubernetes
         * scheduler. If not specified, the pod will be dispatched by the default
         * scheduler. More info:
         * https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/
         */
        "schedulerName"?: string;
        /**
         * The SeccompProfile applied to every Pod and Container.
         * Defaults to: `RuntimeDefault`
         */
        "seccompProfile"?: {
            /**
             * localhostProfile indicates a profile defined in a file on the node should be used.
             * The profile must be preconfigured on the node to work.
             * Must be a descending path, relative to the kubelet's configured seccomp profile location.
             * Must be set if type is "Localhost". Must NOT be set for any other type.
             */
            "localhostProfile"?: string;
            /**
             * type indicates which kind of seccomp profile will be applied.
             * Valid options are:
             *
             * Localhost - a profile defined in a file on the node should be used.
             * RuntimeDefault - the container runtime default profile should be used.
             * Unconfined - no profile should be applied.
             */
            "type": string;
        };
        /**
         * Configure the generation of the service account
         */
        "serviceAccountTemplate"?: {
            /**
             * Metadata are the metadata to be used for the generated
             * service account
             */
            "metadata": {
                /**
                 * Annotations is an unstructured key value map stored with a resource that may be
                 * set by external tools to store and retrieve arbitrary metadata. They are not
                 * queryable and should be preserved when modifying objects.
                 * More info: http://kubernetes.io/docs/user-guide/annotations
                 */
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * Map of string keys and values that can be used to organize and categorize
                 * (scope and select) objects. May match selectors of replication controllers
                 * and services.
                 * More info: http://kubernetes.io/docs/user-guide/labels
                 */
                "labels"?: {
                    [key: string]: string;
                };
                /**
                 * The name of the resource. Only supported for certain types
                 */
                "name"?: string;
            };
        };
        /**
         * The time in seconds that controls the window of time reserved for the smart shutdown of Postgres to complete.
         * Make sure you reserve enough time for the operator to request a fast shutdown of Postgres
         * (that is: `stopDelay` - `smartShutdownTimeout`).
         */
        "smartShutdownTimeout"?: number;
        /**
         * The time in seconds that is allowed for a PostgreSQL instance to
         * successfully start up (default 3600).
         * The startup probe failure threshold is derived from this value using the formula:
         * ceiling(startDelay / 10).
         */
        "startDelay"?: number;
        /**
         * The time in seconds that is allowed for a PostgreSQL instance to
         * gracefully shutdown (default 1800)
         */
        "stopDelay"?: number;
        /**
         * Configuration of the storage of the instances
         */
        "storage"?: {
            /**
             * Template to be used to generate the Persistent Volume Claim
             */
            "pvcTemplate"?: {
                /**
                 * accessModes contains the desired access modes the volume should have.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                 */
                "accessModes"?: Array<string>;
                /**
                 * dataSource field can be used to specify either:
                 * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                 * \* An existing PVC (PersistentVolumeClaim)
                 * If the provisioner or an external controller can support the specified data source,
                 * it will create a new volume based on the contents of the specified data source.
                 * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                 * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                 * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                 */
                "dataSource"?: {
                    /**
                     * APIGroup is the group for the resource being referenced.
                     * If APIGroup is not specified, the specified Kind must be in the core API group.
                     * For any other third-party types, APIGroup is required.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind is the type of resource being referenced
                     */
                    "kind": string;
                    /**
                     * Name is the name of resource being referenced
                     */
                    "name": string;
                };
                /**
                 * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                 * volume is desired. This may be any object from a non-empty API group (non
                 * core object) or a PersistentVolumeClaim object.
                 * When this field is specified, volume binding will only succeed if the type of
                 * the specified object matches some installed volume populator or dynamic
                 * provisioner.
                 * This field will replace the functionality of the dataSource field and as such
                 * if both fields are non-empty, they must have the same value. For backwards
                 * compatibility, when namespace isn't specified in dataSourceRef,
                 * both fields (dataSource and dataSourceRef) will be set to the same
                 * value automatically if one of them is empty and the other is non-empty.
                 * When namespace is specified in dataSourceRef,
                 * dataSource isn't set to the same value and must be empty.
                 * There are three important differences between dataSource and dataSourceRef:
                 * \* While dataSource only allows two specific types of objects, dataSourceRef
                 *   allows any non-core object, as well as PersistentVolumeClaim objects.
                 * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
                 *   preserves all values, and generates an error if a disallowed value is
                 *   specified.
                 * \* While dataSource only allows local objects, dataSourceRef allows objects
                 *   in any namespaces.
                 * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                 * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                 */
                "dataSourceRef"?: {
                    /**
                     * APIGroup is the group for the resource being referenced.
                     * If APIGroup is not specified, the specified Kind must be in the core API group.
                     * For any other third-party types, APIGroup is required.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind is the type of resource being referenced
                     */
                    "kind": string;
                    /**
                     * Name is the name of resource being referenced
                     */
                    "name": string;
                    /**
                     * Namespace is the namespace of resource being referenced
                     * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                     * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                     */
                    "namespace"?: string;
                };
                /**
                 * resources represents the minimum resources the volume should have.
                 * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                 * that are lower than previous value but must still be higher than capacity recorded in the
                 * status field of the claim.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                 */
                "resources"?: {
                    /**
                     * Limits describes the maximum amount of compute resources allowed.
                     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    /**
                     * Requests describes the minimum amount of compute resources required.
                     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
                     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                /**
                 * selector is a label query over volumes to consider for binding.
                 */
                "selector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                        /**
                         * key is the label key that the selector applies to.
                         */
                        "key": string;
                        /**
                         * operator represents a key's relationship to a set of values.
                         * Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        "operator": string;
                        /**
                         * values is an array of string values. If the operator is In or NotIn,
                         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         * the values array must be empty. This array is replaced during a strategic
                         * merge patch.
                         */
                        "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     * map is equivalent to an element of matchExpressions, whose key field is "key", the
                     * operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                        [key: string]: string;
                    };
                };
                /**
                 * storageClassName is the name of the StorageClass required by the claim.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                 */
                "storageClassName"?: string;
                /**
                 * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                 * If specified, the CSI driver will create or update the volume with the attributes defined
                 * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                 * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
                 * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
                 * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
                 * will be set by the persistentvolume controller if it exists.
                 * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                 * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                 * exists.
                 * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                 * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
                 */
                "volumeAttributesClassName"?: string;
                /**
                 * volumeMode defines what type of volume is required by the claim.
                 * Value of Filesystem is implied when not included in claim spec.
                 */
                "volumeMode"?: string;
                /**
                 * volumeName is the binding reference to the PersistentVolume backing this claim.
                 */
                "volumeName"?: string;
            };
            /**
             * Resize existent PVCs, defaults to true
             */
            "resizeInUseVolumes"?: boolean;
            /**
             * Size of the storage. Required if not already specified in the PVC template.
             * Changes to this field are automatically reapplied to the created PVCs.
             * Size cannot be decreased.
             */
            "size"?: string;
            /**
             * StorageClass to use for PVCs. Applied after
             * evaluating the PVC template, if available.
             * If not specified, the generated PVCs will use the
             * default storage class
             */
            "storageClass"?: string;
        };
        /**
         * The secret containing the superuser password. If not defined a new
         * secret will be created with a randomly generated password
         */
        "superuserSecret"?: {
            /**
             * Name of the referent.
             */
            "name": string;
        };
        /**
         * The time in seconds that is allowed for a primary PostgreSQL instance
         * to gracefully shutdown during a switchover.
         * Default value is 3600 seconds (1 hour).
         */
        "switchoverDelay"?: number;
        /**
         * The tablespaces configuration
         */
        "tablespaces"?: Array<{
            /**
             * The name of the tablespace
             */
            "name": string;
            /**
             * Owner is the PostgreSQL user owning the tablespace
             */
            "owner"?: {
                "name"?: string;
            };
            /**
             * The storage configuration for the tablespace
             */
            "storage": {
                /**
                 * Template to be used to generate the Persistent Volume Claim
                 */
                "pvcTemplate"?: {
                    /**
                     * accessModes contains the desired access modes the volume should have.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                     */
                    "accessModes"?: Array<string>;
                    /**
                     * dataSource field can be used to specify either:
                     * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                     * \* An existing PVC (PersistentVolumeClaim)
                     * If the provisioner or an external controller can support the specified data source,
                     * it will create a new volume based on the contents of the specified data source.
                     * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                     * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                     * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                     */
                    "dataSource"?: {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                    };
                    /**
                     * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                     * volume is desired. This may be any object from a non-empty API group (non
                     * core object) or a PersistentVolumeClaim object.
                     * When this field is specified, volume binding will only succeed if the type of
                     * the specified object matches some installed volume populator or dynamic
                     * provisioner.
                     * This field will replace the functionality of the dataSource field and as such
                     * if both fields are non-empty, they must have the same value. For backwards
                     * compatibility, when namespace isn't specified in dataSourceRef,
                     * both fields (dataSource and dataSourceRef) will be set to the same
                     * value automatically if one of them is empty and the other is non-empty.
                     * When namespace is specified in dataSourceRef,
                     * dataSource isn't set to the same value and must be empty.
                     * There are three important differences between dataSource and dataSourceRef:
                     * \* While dataSource only allows two specific types of objects, dataSourceRef
                     *   allows any non-core object, as well as PersistentVolumeClaim objects.
                     * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
                     *   preserves all values, and generates an error if a disallowed value is
                     *   specified.
                     * \* While dataSource only allows local objects, dataSourceRef allows objects
                     *   in any namespaces.
                     * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                     * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                     */
                    "dataSourceRef"?: {
                        /**
                         * APIGroup is the group for the resource being referenced.
                         * If APIGroup is not specified, the specified Kind must be in the core API group.
                         * For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                        /**
                         * Namespace is the namespace of resource being referenced
                         * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                         * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                         */
                        "namespace"?: string;
                    };
                    /**
                     * resources represents the minimum resources the volume should have.
                     * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                     * that are lower than previous value but must still be higher than capacity recorded in the
                     * status field of the claim.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                     */
                    "resources"?: {
                        /**
                         * Limits describes the maximum amount of compute resources allowed.
                         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "limits"?: {
                            [key: string]: number | string;
                        };
                        /**
                         * Requests describes the minimum amount of compute resources required.
                         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
                         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "requests"?: {
                            [key: string]: number | string;
                        };
                    };
                    /**
                     * selector is a label query over volumes to consider for binding.
                     */
                    "selector"?: {
                        /**
                         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                         */
                        "matchExpressions"?: Array<{
                            /**
                             * key is the label key that the selector applies to.
                             */
                            "key": string;
                            /**
                             * operator represents a key's relationship to a set of values.
                             * Valid operators are In, NotIn, Exists and DoesNotExist.
                             */
                            "operator": string;
                            /**
                             * values is an array of string values. If the operator is In or NotIn,
                             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             * the values array must be empty. This array is replaced during a strategic
                             * merge patch.
                             */
                            "values"?: Array<string>;
                        }>;
                        /**
                         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         * map is equivalent to an element of matchExpressions, whose key field is "key", the
                         * operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * storageClassName is the name of the StorageClass required by the claim.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                     */
                    "storageClassName"?: string;
                    /**
                     * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                     * If specified, the CSI driver will create or update the volume with the attributes defined
                     * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                     * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
                     * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
                     * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
                     * will be set by the persistentvolume controller if it exists.
                     * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                     * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                     * exists.
                     * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                     * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
                     */
                    "volumeAttributesClassName"?: string;
                    /**
                     * volumeMode defines what type of volume is required by the claim.
                     * Value of Filesystem is implied when not included in claim spec.
                     */
                    "volumeMode"?: string;
                    /**
                     * volumeName is the binding reference to the PersistentVolume backing this claim.
                     */
                    "volumeName"?: string;
                };
                /**
                 * Resize existent PVCs, defaults to true
                 */
                "resizeInUseVolumes"?: boolean;
                /**
                 * Size of the storage. Required if not already specified in the PVC template.
                 * Changes to this field are automatically reapplied to the created PVCs.
                 * Size cannot be decreased.
                 */
                "size"?: string;
                /**
                 * StorageClass to use for PVCs. Applied after
                 * evaluating the PVC template, if available.
                 * If not specified, the generated PVCs will use the
                 * default storage class
                 */
                "storageClass"?: string;
            };
            /**
             * When set to true, the tablespace will be added as a `temp_tablespaces`
             * entry in PostgreSQL, and will be available to automatically house temp
             * database objects, or other temporary files. Please refer to PostgreSQL
             * documentation for more information on the `temp_tablespaces` GUC.
             */
            "temporary"?: boolean;
        }>;
        /**
         * TopologySpreadConstraints specifies how to spread matching pods among the given topology.
         * More info:
         * https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/
         */
        "topologySpreadConstraints"?: Array<{
            /**
             * LabelSelector is used to find matching pods.
             * Pods that match this label selector are counted to determine the number of pods
             * in their corresponding topology domain.
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
                     * operator represents a key's relationship to a set of values.
                     * Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn,
                     * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                     * the values array must be empty. This array is replaced during a strategic
                     * merge patch.
                     */
                    "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                 * map is equivalent to an element of matchExpressions, whose key field is "key", the
                 * operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                    [key: string]: string;
                };
            };
            /**
             * MatchLabelKeys is a set of pod label keys to select the pods over which
             * spreading will be calculated. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are ANDed with labelSelector
             * to select the group of existing pods over which spreading will be calculated
             * for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
             * MatchLabelKeys cannot be set when LabelSelector isn't set.
             * Keys that don't exist in the incoming pod labels will
             * be ignored. A null or empty list means only match against labelSelector.
             *
             * This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
             */
            "matchLabelKeys"?: Array<string>;
            /**
             * MaxSkew describes the degree to which pods may be unevenly distributed.
             * When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference
             * between the number of matching pods in the target topology and the global minimum.
             * The global minimum is the minimum number of matching pods in an eligible domain
             * or zero if the number of eligible domains is less than MinDomains.
             * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
             * labelSelector spread as 2/2/1:
             * In this case, the global minimum is 1.
             * | zone1 | zone2 | zone3 |
             * |  P P  |  P P  |   P   |
             * - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
             * scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
             * violate MaxSkew(1).
             * - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
             * When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence
             * to topologies that satisfy it.
             * It's a required field. Default value is 1 and 0 is not allowed.
             */
            "maxSkew": number;
            /**
             * MinDomains indicates a minimum number of eligible domains.
             * When the number of eligible domains with matching topology keys is less than minDomains,
             * Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
             * And when the number of eligible domains with matching topology keys equals or greater than minDomains,
             * this value has no effect on scheduling.
             * As a result, when the number of eligible domains is less than minDomains,
             * scheduler won't schedule more than maxSkew Pods to those domains.
             * If value is nil, the constraint behaves as if MinDomains is equal to 1.
             * Valid values are integers greater than 0.
             * When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
             *
             * For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same
             * labelSelector spread as 2/2/2:
             * | zone1 | zone2 | zone3 |
             * |  P P  |  P P  |  P P  |
             * The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0.
             * In this situation, new pod with the same labelSelector cannot be scheduled,
             * because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones,
             * it will violate MaxSkew.
             */
            "minDomains"?: number;
            /**
             * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
             * when calculating pod topology spread skew. Options are:
             * - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
             * - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
             *
             * If this value is nil, the behavior is equivalent to the Honor policy.
             * This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
             */
            "nodeAffinityPolicy"?: string;
            /**
             * NodeTaintsPolicy indicates how we will treat node taints when calculating
             * pod topology spread skew. Options are:
             * - Honor: nodes without taints, along with tainted nodes for which the incoming pod
             * has a toleration, are included.
             * - Ignore: node taints are ignored. All nodes are included.
             *
             * If this value is nil, the behavior is equivalent to the Ignore policy.
             * This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
             */
            "nodeTaintsPolicy"?: string;
            /**
             * TopologyKey is the key of node labels. Nodes that have a label with this key
             * and identical values are considered to be in the same topology.
             * We consider each <key, value> as a "bucket", and try to put balanced number
             * of pods into each bucket.
             * We define a domain as a particular instance of a topology.
             * Also, we define an eligible domain as a domain whose nodes meet the requirements of
             * nodeAffinityPolicy and nodeTaintsPolicy.
             * e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
             * And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
             * It's a required field.
             */
            "topologyKey": string;
            /**
             * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
             * the spread constraint.
             * - DoNotSchedule (default) tells the scheduler not to schedule it.
             * - ScheduleAnyway tells the scheduler to schedule the pod in any location,
             *   but giving higher precedence to topologies that would help reduce the
             *   skew.
             * A constraint is considered "Unsatisfiable" for an incoming pod
             * if and only if every possible node assignment for that pod would violate
             * "MaxSkew" on some topology.
             * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
             * labelSelector spread as 3/1/1:
             * | zone1 | zone2 | zone3 |
             * | P P P |   P   |   P   |
             * If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
             * to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
             * MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
             * won't make it \*more\* imbalanced.
             * It's a required field.
             */
            "whenUnsatisfiable": string;
        }>;
        /**
         * Configuration of the storage for PostgreSQL WAL (Write-Ahead Log)
         */
        "walStorage"?: {
            /**
             * Template to be used to generate the Persistent Volume Claim
             */
            "pvcTemplate"?: {
                /**
                 * accessModes contains the desired access modes the volume should have.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                 */
                "accessModes"?: Array<string>;
                /**
                 * dataSource field can be used to specify either:
                 * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                 * \* An existing PVC (PersistentVolumeClaim)
                 * If the provisioner or an external controller can support the specified data source,
                 * it will create a new volume based on the contents of the specified data source.
                 * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                 * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                 * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                 */
                "dataSource"?: {
                    /**
                     * APIGroup is the group for the resource being referenced.
                     * If APIGroup is not specified, the specified Kind must be in the core API group.
                     * For any other third-party types, APIGroup is required.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind is the type of resource being referenced
                     */
                    "kind": string;
                    /**
                     * Name is the name of resource being referenced
                     */
                    "name": string;
                };
                /**
                 * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                 * volume is desired. This may be any object from a non-empty API group (non
                 * core object) or a PersistentVolumeClaim object.
                 * When this field is specified, volume binding will only succeed if the type of
                 * the specified object matches some installed volume populator or dynamic
                 * provisioner.
                 * This field will replace the functionality of the dataSource field and as such
                 * if both fields are non-empty, they must have the same value. For backwards
                 * compatibility, when namespace isn't specified in dataSourceRef,
                 * both fields (dataSource and dataSourceRef) will be set to the same
                 * value automatically if one of them is empty and the other is non-empty.
                 * When namespace is specified in dataSourceRef,
                 * dataSource isn't set to the same value and must be empty.
                 * There are three important differences between dataSource and dataSourceRef:
                 * \* While dataSource only allows two specific types of objects, dataSourceRef
                 *   allows any non-core object, as well as PersistentVolumeClaim objects.
                 * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
                 *   preserves all values, and generates an error if a disallowed value is
                 *   specified.
                 * \* While dataSource only allows local objects, dataSourceRef allows objects
                 *   in any namespaces.
                 * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                 * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                 */
                "dataSourceRef"?: {
                    /**
                     * APIGroup is the group for the resource being referenced.
                     * If APIGroup is not specified, the specified Kind must be in the core API group.
                     * For any other third-party types, APIGroup is required.
                     */
                    "apiGroup"?: string;
                    /**
                     * Kind is the type of resource being referenced
                     */
                    "kind": string;
                    /**
                     * Name is the name of resource being referenced
                     */
                    "name": string;
                    /**
                     * Namespace is the namespace of resource being referenced
                     * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                     * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                     */
                    "namespace"?: string;
                };
                /**
                 * resources represents the minimum resources the volume should have.
                 * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                 * that are lower than previous value but must still be higher than capacity recorded in the
                 * status field of the claim.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                 */
                "resources"?: {
                    /**
                     * Limits describes the maximum amount of compute resources allowed.
                     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "limits"?: {
                        [key: string]: number | string;
                    };
                    /**
                     * Requests describes the minimum amount of compute resources required.
                     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
                     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                /**
                 * selector is a label query over volumes to consider for binding.
                 */
                "selector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                        /**
                         * key is the label key that the selector applies to.
                         */
                        "key": string;
                        /**
                         * operator represents a key's relationship to a set of values.
                         * Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        "operator": string;
                        /**
                         * values is an array of string values. If the operator is In or NotIn,
                         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         * the values array must be empty. This array is replaced during a strategic
                         * merge patch.
                         */
                        "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     * map is equivalent to an element of matchExpressions, whose key field is "key", the
                     * operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                        [key: string]: string;
                    };
                };
                /**
                 * storageClassName is the name of the StorageClass required by the claim.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                 */
                "storageClassName"?: string;
                /**
                 * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                 * If specified, the CSI driver will create or update the volume with the attributes defined
                 * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                 * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
                 * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
                 * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
                 * will be set by the persistentvolume controller if it exists.
                 * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                 * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                 * exists.
                 * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                 * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
                 */
                "volumeAttributesClassName"?: string;
                /**
                 * volumeMode defines what type of volume is required by the claim.
                 * Value of Filesystem is implied when not included in claim spec.
                 */
                "volumeMode"?: string;
                /**
                 * volumeName is the binding reference to the PersistentVolume backing this claim.
                 */
                "volumeName"?: string;
            };
            /**
             * Resize existent PVCs, defaults to true
             */
            "resizeInUseVolumes"?: boolean;
            /**
             * Size of the storage. Required if not already specified in the PVC template.
             * Changes to this field are automatically reapplied to the created PVCs.
             * Size cannot be decreased.
             */
            "size"?: string;
            /**
             * StorageClass to use for PVCs. Applied after
             * evaluating the PVC template, if available.
             * If not specified, the generated PVCs will use the
             * default storage class
             */
            "storageClass"?: string;
        };
    };
    /**
     * Most recently observed status of the cluster. This data may not be up
     * to date. Populated by the system. Read-only.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "status"?: {
        /**
         * AvailableArchitectures reports the available architectures of a cluster
         */
        "availableArchitectures"?: Array<{
            /**
             * GoArch is the name of the executable architecture
             */
            "goArch": string;
            /**
             * Hash is the hash of the executable
             */
            "hash": string;
        }>;
        /**
         * AzurePVCUpdateEnabled shows if the PVC online upgrade is enabled for this cluster
         */
        "azurePVCUpdateEnabled"?: boolean;
        /**
         * The configuration for the CA and related certificates, initialized with defaults.
         */
        "certificates"?: {
            /**
             * The secret containing the Client CA certificate. If not defined, a new secret will be created
             * with a self-signed CA and will be used to generate all the client certificates.<br />
             * <br />
             * Contains:<br />
             * <br />
             * - `ca.crt`: CA that should be used to validate the client certificates,
             * used as `ssl_ca_file` of all the instances.<br />
             * - `ca.key`: key used to generate client certificates, if ReplicationTLSSecret is provided,
             * this can be omitted.<br />
             */
            "clientCASecret"?: string;
            /**
             * Expiration dates for all certificates.
             */
            "expirations"?: {
                [key: string]: string;
            };
            /**
             * The secret of type kubernetes.io/tls containing the client certificate to authenticate as
             * the `streaming_replica` user.
             * If not defined, ClientCASecret must provide also `ca.key`, and a new secret will be
             * created using the provided CA.
             */
            "replicationTLSSecret"?: string;
            /**
             * The list of the server alternative DNS names to be added to the generated server TLS certificates, when required.
             */
            "serverAltDNSNames"?: Array<string>;
            /**
             * The secret containing the Server CA certificate. If not defined, a new secret will be created
             * with a self-signed CA and will be used to generate the TLS certificate ServerTLSSecret.<br />
             * <br />
             * Contains:<br />
             * <br />
             * - `ca.crt`: CA that should be used to validate the server certificate,
             * used as `sslrootcert` in client connection strings.<br />
             * - `ca.key`: key used to generate Server SSL certs, if ServerTLSSecret is provided,
             * this can be omitted.<br />
             */
            "serverCASecret"?: string;
            /**
             * The secret of type kubernetes.io/tls containing the server TLS certificate and key that will be set as
             * `ssl_cert_file` and `ssl_key_file` so that clients can connect to postgres securely.
             * If not defined, ServerCASecret must provide also `ca.key` and a new secret will be
             * created using the provided CA.
             */
            "serverTLSSecret"?: string;
        };
        /**
         * The commit hash number of which this operator running
         */
        "cloudNativePGCommitHash"?: string;
        /**
         * The hash of the binary of the operator
         */
        "cloudNativePGOperatorHash"?: string;
        /**
         * Conditions for cluster object
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type": string;
        }>;
        /**
         * The list of resource versions of the configmaps,
         * managed by the operator. Every change here is done in the
         * interest of the instance manager, which will refresh the
         * configmap data
         */
        "configMapResourceVersion"?: {
            /**
             * A map with the versions of all the config maps used to pass metrics.
             * Map keys are the config map names, map values are the versions
             */
            "metrics"?: {
                [key: string]: string;
            };
        };
        /**
         * Current primary instance
         */
        "currentPrimary"?: string;
        /**
         * The timestamp when the primary was detected to be unhealthy
         * This field is reported when `.spec.failoverDelay` is populated or during online upgrades
         */
        "currentPrimaryFailingSinceTimestamp"?: string;
        /**
         * The timestamp when the last actual promotion to primary has occurred
         */
        "currentPrimaryTimestamp"?: string;
        /**
         * List of all the PVCs created by this cluster and still available
         * which are not attached to a Pod
         */
        "danglingPVC"?: Array<string>;
        /**
         * DemotionToken is a JSON token containing the information
         * from pg_controldata such as Database system identifier, Latest checkpoint's
         * TimeLineID, Latest checkpoint's REDO location, Latest checkpoint's REDO
         * WAL file, and Time of latest checkpoint
         */
        "demotionToken"?: string;
        /**
         * The first recoverability point, stored as a date in RFC3339 format.
         * This field is calculated from the content of FirstRecoverabilityPointByMethod
         */
        "firstRecoverabilityPoint"?: string;
        /**
         * The first recoverability point, stored as a date in RFC3339 format, per backup method type
         */
        "firstRecoverabilityPointByMethod"?: {
            [key: string]: string;
        };
        /**
         * List of all the PVCs not dangling nor initializing
         */
        "healthyPVC"?: Array<string>;
        /**
         * Image contains the image name used by the pods
         */
        "image"?: string;
        /**
         * List of all the PVCs that are being initialized by this cluster
         */
        "initializingPVC"?: Array<string>;
        /**
         * List of instance names in the cluster
         */
        "instanceNames"?: Array<string>;
        /**
         * The total number of PVC Groups detected in the cluster. It may differ from the number of existing instance pods.
         */
        "instances"?: number;
        /**
         * The reported state of the instances during the last reconciliation loop
         */
        "instancesReportedState"?: {
            [key: string]: {
                /**
                 * indicates if an instance is the primary one
                 */
                "isPrimary": boolean;
                /**
                 * indicates on which TimelineId the instance is
                 */
                "timeLineID"?: number;
            };
        };
        /**
         * InstancesStatus indicates in which status the instances are
         */
        "instancesStatus"?: {
            [key: string]: Array<string>;
        };
        /**
         * How many Jobs have been created by this cluster
         */
        "jobCount"?: number;
        /**
         * Stored as a date in RFC3339 format
         */
        "lastFailedBackup"?: string;
        /**
         * LastPromotionToken is the last verified promotion token that
         * was used to promote a replica cluster
         */
        "lastPromotionToken"?: string;
        /**
         * Last successful backup, stored as a date in RFC3339 format
         * This field is calculated from the content of LastSuccessfulBackupByMethod
         */
        "lastSuccessfulBackup"?: string;
        /**
         * Last successful backup, stored as a date in RFC3339 format, per backup method type
         */
        "lastSuccessfulBackupByMethod"?: {
            [key: string]: string;
        };
        /**
         * ID of the latest generated node (used to avoid node name clashing)
         */
        "latestGeneratedNode"?: number;
        /**
         * ManagedRolesStatus reports the state of the managed roles in the cluster
         */
        "managedRolesStatus"?: {
            /**
             * ByStatus gives the list of roles in each state
             */
            "byStatus"?: {
                [key: string]: Array<string>;
            };
            /**
             * CannotReconcile lists roles that cannot be reconciled in PostgreSQL,
             * with an explanation of the cause
             */
            "cannotReconcile"?: {
                [key: string]: Array<string>;
            };
            /**
             * PasswordStatus gives the last transaction id and password secret version for each managed role
             */
            "passwordStatus"?: {
                [key: string]: {
                    /**
                     * the resource version of the password secret
                     */
                    "resourceVersion"?: string;
                    /**
                     * the last transaction ID to affect the role definition in PostgreSQL
                     */
                    "transactionID"?: number;
                };
            };
        };
        /**
         * OnlineUpdateEnabled shows if the online upgrade is enabled inside the cluster
         */
        "onlineUpdateEnabled"?: boolean;
        /**
         * Current phase of the cluster
         */
        "phase"?: string;
        /**
         * Reason for the current phase
         */
        "phaseReason"?: string;
        /**
         * PluginStatus is the status of the loaded plugins
         */
        "pluginStatus"?: Array<{
            /**
             * BackupCapabilities are the list of capabilities of the
             * plugin regarding the Backup management
             */
            "backupCapabilities"?: Array<string>;
            /**
             * Capabilities are the list of capabilities of the
             * plugin
             */
            "capabilities"?: Array<string>;
            /**
             * Name is the name of the plugin
             */
            "name": string;
            /**
             * OperatorCapabilities are the list of capabilities of the
             * plugin regarding the reconciler
             */
            "operatorCapabilities"?: Array<string>;
            /**
             * Status contain the status reported by the plugin through the SetStatusInCluster interface
             */
            "status"?: string;
            /**
             * Version is the version of the plugin loaded by the
             * latest reconciliation loop
             */
            "version": string;
            /**
             * WALCapabilities are the list of capabilities of the
             * plugin regarding the WAL management
             */
            "walCapabilities"?: Array<string>;
        }>;
        /**
         * The integration needed by poolers referencing the cluster
         */
        "poolerIntegrations"?: {
            /**
             * PgBouncerIntegrationStatus encapsulates the needed integration for the pgbouncer poolers referencing the cluster
             */
            "pgBouncerIntegration"?: {
                "secrets"?: Array<string>;
            };
        };
        /**
         * How many PVCs have been created by this cluster
         */
        "pvcCount"?: number;
        /**
         * Current list of read pods
         */
        "readService"?: string;
        /**
         * The total number of ready instances in the cluster. It is equal to the number of ready instance pods.
         */
        "readyInstances"?: number;
        /**
         * List of all the PVCs that have ResizingPVC condition.
         */
        "resizingPVC"?: Array<string>;
        /**
         * The list of resource versions of the secrets
         * managed by the operator. Every change here is done in the
         * interest of the instance manager, which will refresh the
         * secret data
         */
        "secretsResourceVersion"?: {
            /**
             * The resource version of the "app" user secret
             */
            "applicationSecretVersion"?: string;
            /**
             * The resource version of the Barman Endpoint CA if provided
             */
            "barmanEndpointCA"?: string;
            /**
             * Unused. Retained for compatibility with old versions.
             */
            "caSecretVersion"?: string;
            /**
             * The resource version of the PostgreSQL client-side CA secret version
             */
            "clientCaSecretVersion"?: string;
            /**
             * The resource versions of the external cluster secrets
             */
            "externalClusterSecretVersion"?: {
                [key: string]: string;
            };
            /**
             * The resource versions of the managed roles secrets
             */
            "managedRoleSecretVersion"?: {
                [key: string]: string;
            };
            /**
             * A map with the versions of all the secrets used to pass metrics.
             * Map keys are the secret names, map values are the versions
             */
            "metrics"?: {
                [key: string]: string;
            };
            /**
             * The resource version of the "streaming_replica" user secret
             */
            "replicationSecretVersion"?: string;
            /**
             * The resource version of the PostgreSQL server-side CA secret version
             */
            "serverCaSecretVersion"?: string;
            /**
             * The resource version of the PostgreSQL server-side secret version
             */
            "serverSecretVersion"?: string;
            /**
             * The resource version of the "postgres" user secret
             */
            "superuserSecretVersion"?: string;
        };
        /**
         * SwitchReplicaClusterStatus is the status of the switch to replica cluster
         */
        "switchReplicaClusterStatus"?: {
            /**
             * InProgress indicates if there is an ongoing procedure of switching a cluster to a replica cluster.
             */
            "inProgress"?: boolean;
        };
        /**
         * TablespacesStatus reports the state of the declarative tablespaces in the cluster
         */
        "tablespacesStatus"?: Array<{
            /**
             * Error is the reconciliation error, if any
             */
            "error"?: string;
            /**
             * Name is the name of the tablespace
             */
            "name": string;
            /**
             * Owner is the PostgreSQL user owning the tablespace
             */
            "owner"?: string;
            /**
             * State is the latest reconciliation state
             */
            "state": string;
        }>;
        /**
         * Target primary instance, this is different from the previous one
         * during a switchover or a failover
         */
        "targetPrimary"?: string;
        /**
         * The timestamp when the last request for a new primary has occurred
         */
        "targetPrimaryTimestamp"?: string;
        /**
         * The timeline of the Postgres cluster
         */
        "timelineID"?: number;
        /**
         * Instances topology.
         */
        "topology"?: {
            /**
             * Instances contains the pod topology of the instances
             */
            "instances"?: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * NodesUsed represents the count of distinct nodes accommodating the instances.
             * A value of '1' suggests that all instances are hosted on a single node,
             * implying the absence of High Availability (HA). Ideally, this value should
             * be the same as the number of instances in the Postgres HA cluster, implying
             * shared nothing architecture on the compute side.
             */
            "nodesUsed"?: number;
            /**
             * SuccessfullyExtracted indicates if the topology data was extract. It is useful to enact fallback behaviors
             * in synchronous replica election in case of failures
             */
            "successfullyExtracted"?: boolean;
        };
        /**
         * List of all the PVCs that are unusable because another PVC is missing
         */
        "unusablePVC"?: Array<string>;
        /**
         * Current write pod
         */
        "writeService"?: string;
    };
}
/**
 * Cluster is the Schema for the PostgreSQL API
 */
export declare class Cluster extends Model<ICluster> implements ICluster {
    "apiVersion": ICluster["apiVersion"];
    "kind": ICluster["kind"];
    "metadata": ICluster["metadata"];
    "spec": ICluster["spec"];
    "status"?: ICluster["status"];
    static apiVersion: ICluster["apiVersion"];
    static kind: ICluster["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICluster>;
    constructor(data?: ModelData<ICluster>);
}
