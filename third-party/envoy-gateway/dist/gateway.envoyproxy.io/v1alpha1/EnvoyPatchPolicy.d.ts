import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * EnvoyPatchPolicy allows the user to modify the generated Envoy xDS resources by Envoy Gateway using this patch API
 */
export interface IEnvoyPatchPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "gateway.envoyproxy.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "EnvoyPatchPolicy";
    "metadata"?: IObjectMeta;
    /**
     * Spec defines the desired state of EnvoyPatchPolicy.
     */
    "spec": {
        /**
         * JSONPatch defines the JSONPatch configuration.
         */
        "jsonPatches"?: Array<{
            /**
             * Name is the name of the resource
             */
            "name": string;
            /**
             * Patch defines the JSON Patch Operation
             */
            "operation": {
                /**
                 * From is the source location of the value to be copied or moved. Only valid for move or copy operations Refer to https://datatracker.ietf.org/doc/html/rfc6901 for more details.
                 */
                "from"?: string;
                /**
                 * Op is the type of operation to perform
                 */
                "op": "add" | "remove" | "replace" | "move" | "copy" | "test";
                /**
                 * Path is the location of the target document/field where the operation will be performed Refer to https://datatracker.ietf.org/doc/html/rfc6901 for more details.
                 */
                "path": string;
                /**
                 * Value is the new value of the path location. The value is only used by the `add` and `replace` operations.
                 */
                "value"?: any;
            };
            /**
             * Type is the typed URL of the Envoy xDS Resource
             */
            "type": "type.googleapis.com/envoy.config.listener.v3.Listener" | "type.googleapis.com/envoy.config.route.v3.RouteConfiguration" | "type.googleapis.com/envoy.config.cluster.v3.Cluster" | "type.googleapis.com/envoy.config.endpoint.v3.ClusterLoadAssignment" | "type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret";
        }>;
        /**
         * Priority of the EnvoyPatchPolicy. If multiple EnvoyPatchPolicies are applied to the same TargetRef, they will be applied in the ascending order of the priority i.e. int32.min has the highest priority and int32.max has the lowest priority. Defaults to 0.
         */
        "priority"?: number;
        /**
         * TargetRef is the name of the Gateway API resource this policy is being attached to. By default attaching to Gateway is supported and when mergeGateways is enabled it should attach to GatewayClass. This Policy and the TargetRef MUST be in the same namespace for this Policy to have effect and be applied to the Gateway TargetRef
         */
        "targetRef": {
            /**
             * Group is the group of the target resource.
             */
            "group": string;
            /**
             * Kind is kind of the target resource.
             */
            "kind": string;
            /**
             * Name is the name of the target resource.
             */
            "name": string;
            /**
             * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
             */
            "namespace"?: string;
        };
        /**
         * Type decides the type of patch. Valid EnvoyPatchType values are "JSONPatch".
         */
        "type": "JSONPatch";
    };
    /**
     * Status defines the current status of EnvoyPatchPolicy.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the EnvoyPatchPolicy.
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
    };
}
/**
 * EnvoyPatchPolicy allows the user to modify the generated Envoy xDS resources by Envoy Gateway using this patch API
 */
export declare class EnvoyPatchPolicy extends Model<IEnvoyPatchPolicy> implements IEnvoyPatchPolicy {
    "apiVersion": IEnvoyPatchPolicy["apiVersion"];
    "kind": IEnvoyPatchPolicy["kind"];
    "metadata"?: IEnvoyPatchPolicy["metadata"];
    "spec": IEnvoyPatchPolicy["spec"];
    "status"?: IEnvoyPatchPolicy["status"];
    static apiVersion: IEnvoyPatchPolicy["apiVersion"];
    static kind: IEnvoyPatchPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEnvoyPatchPolicy>;
    constructor(data?: ModelData<IEnvoyPatchPolicy>);
}
