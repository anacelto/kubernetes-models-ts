import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * PGAdmin is the Schema for the PGAdmin API
 */
export interface IPGAdmin {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "postgres-operator.crunchydata.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "PGAdmin";
    "metadata"?: IObjectMeta;
    /**
     * PGAdminSpec defines the desired state of PGAdmin
     */
    "spec"?: {
        /**
         * Scheduling constraints of the PGAdmin pod.
         * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
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
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
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
                         * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                         * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                     * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                     * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
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
                         * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                         * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                     * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
                     * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
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
        };
        /**
         * Configuration settings for the pgAdmin process. Changes to any of these
         * values will be loaded without validation. Be careful, as
         * you may put pgAdmin into an unusable state.
         */
        "config"?: {
            /**
             * A Secret containing the value for the CONFIG_DATABASE_URI setting.
             * More info: https://www.pgadmin.org/docs/pgadmin4/latest/external_database.html
             */
            "configDatabaseURI"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * Files allows the user to mount projected volumes into the pgAdmin
             * container so that files can be referenced by pgAdmin as needed.
             */
            "files"?: Array<{
                /**
                 * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                 * of ClusterTrustBundle objects in an auto-updating file.
                 *
                 *
                 * Alpha, gated by the ClusterTrustBundleProjection feature gate.
                 *
                 *
                 * ClusterTrustBundle objects can either be selected by name, or by the
                 * combination of signer name and a label selector.
                 *
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
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
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
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
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
            /**
             * Settings for the gunicorn server.
             * More info: https://docs.gunicorn.org/en/latest/settings.html
             */
            "gunicorn"?: {};
            /**
             * A Secret containing the value for the LDAP_BIND_PASSWORD setting.
             * More info: https://www.pgadmin.org/docs/pgadmin4/latest/ldap.html
             */
            "ldapBindPassword"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * Settings for the pgAdmin server process. Keys should be uppercase and
             * values must be constants.
             * More info: https://www.pgadmin.org/docs/pgadmin4/latest/config_py.html
             */
            "settings"?: {};
        };
        /**
         * Defines a PersistentVolumeClaim for pgAdmin data.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
         */
        "dataVolumeClaimSpec": {
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
             * (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
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
         * The image name to use for pgAdmin instance.
         */
        "image"?: string;
        /**
         * ImagePullPolicy is used to determine when Kubernetes will attempt to
         * pull (download) container images.
         * More info: https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy
         */
        "imagePullPolicy"?: "Always" | "Never" | "IfNotPresent";
        /**
         * The image pull secrets used to pull from a private registry.
         * Changing this value causes all running PGAdmin pods to restart.
         * https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
         */
        "imagePullSecrets"?: Array<{
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
        }>;
        /**
         * Metadata contains metadata for custom resources
         */
        "metadata"?: {
            "annotations"?: {
                [key: string]: string;
            };
            "labels"?: {
                [key: string]: string;
            };
        };
        /**
         * Priority class name for the PGAdmin pod. Changing this
         * value causes PGAdmin pod to restart.
         * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * Resource requirements for the PGAdmin container.
         */
        "resources"?: {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
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
         * ServerGroups for importing PostgresClusters to pgAdmin.
         * To create a pgAdmin with no selectors, leave this field empty.
         * A pgAdmin created with no `ServerGroups` will not automatically
         * add any servers through discovery. PostgresClusters can still be
         * added manually.
         */
        "serverGroups"?: Array<{
            /**
             * The name for the ServerGroup in pgAdmin.
             * Must be unique in the pgAdmin's ServerGroups since it becomes the ServerGroup name in pgAdmin.
             */
            "name": string;
            /**
             * PostgresClusterName selects one cluster to add to pgAdmin by name.
             */
            "postgresClusterName"?: string;
            /**
             * PostgresClusterSelector selects clusters to dynamically add to pgAdmin by matching labels.
             * An empty selector like `{}` will select ALL clusters in the namespace.
             */
            "postgresClusterSelector"?: {
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
        }>;
        /**
         * ServiceName will be used as the name of a ClusterIP service pointing
         * to the pgAdmin pod and port. If the service already exists, PGO will
         * update the service. For more information about services reference
         * the Kubernetes and CrunchyData documentation.
         * https://kubernetes.io/docs/concepts/services-networking/service/
         */
        "serviceName"?: string;
        /**
         * Tolerations of the PGAdmin pod.
         * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
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
         * pgAdmin users that are managed via the PGAdmin spec. Users can still
         * be added via the pgAdmin GUI, but those users will not show up here.
         */
        "users"?: Array<{
            /**
             * A reference to the secret that holds the user's password.
             */
            "passwordRef": {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * Role determines whether the user has admin privileges or not.
             * Defaults to User. Valid options are Administrator and User.
             */
            "role"?: "Administrator" | "User";
            /**
             * The username for User in pgAdmin.
             * Must be unique in the pgAdmin's users list.
             */
            "username": string;
        }>;
    };
    /**
     * PGAdminStatus defines the observed state of PGAdmin
     */
    "status"?: {
        /**
         * conditions represent the observations of pgAdmin's current state.
         * Known .status.conditions.type is: "PersistentVolumeResizing"
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
             * ---
             * Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
             * useful (see .node.status.conditions), the ability to deconflict is important.
             * The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
        }>;
        /**
         * ImageSHA represents the image SHA for the container running pgAdmin.
         */
        "imageSHA"?: string;
        /**
         * MajorVersion represents the major version of the running pgAdmin.
         */
        "majorVersion"?: number;
        /**
         * observedGeneration represents the .metadata.generation on which the status was based.
         */
        "observedGeneration"?: number;
    };
}
/**
 * PGAdmin is the Schema for the PGAdmin API
 */
export declare class PGAdmin extends Model<IPGAdmin> implements IPGAdmin {
    "apiVersion": IPGAdmin["apiVersion"];
    "kind": IPGAdmin["kind"];
    "metadata"?: IPGAdmin["metadata"];
    "spec"?: IPGAdmin["spec"];
    "status"?: IPGAdmin["status"];
    static apiVersion: IPGAdmin["apiVersion"];
    static kind: IPGAdmin["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPGAdmin>;
    constructor(data?: ModelData<IPGAdmin>);
}
