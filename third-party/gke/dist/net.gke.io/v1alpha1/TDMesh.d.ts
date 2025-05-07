import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * TDMesh represents an instantiation of a Traffic Director service mesh.
 */
export interface ITDMesh {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "net.gke.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "TDMesh";
    "metadata"?: IObjectMeta;
    /**
     * MeshSpec defines the desired state of Mesh.
     */
    "spec"?: {
        /**
         * MeshAllowedRoutes defines which Routes may be attached to this mesh.
         */
        "allowedRoutes"?: {
            /**
             * Kinds specifies the groups and kinds of Routes that are allowed to bind to this Mesh. When unspecified or empty, the kinds of Routes selected are HTTPRoute, TCPRoute, and GRPCRoute.
             */
            "kinds"?: Array<{
                /**
                 * Group is the group of the Route.
                 */
                "group"?: string;
                /**
                 * Kind is the kind of the Route.
                 */
                "kind": string;
            }>;
            /**
             * Namespaces indicates namespaces from which Routes may be attached to this Mesh. This is set to all namespaces by default.
             */
            "namespaces"?: {
                /**
                 * From indicates where Routes will be selected for this Gateway. Possible values are: \* All: Routes in all namespaces may be used by this Gateway. \* Selector: Routes in namespaces selected by the selector may be used by   this Gateway. \* Same: Only Routes in the same namespace may be used by this Gateway.
                 *  Support: Core
                 */
                "from"?: "All" | "Selector" | "Same";
                /**
                 * Selector must be specified when From is set to "Selector". In that case, only Routes in Namespaces matching this Selector will be selected by this Gateway. This field is ignored for other values of "From".
                 *  Support: Core
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
            };
        };
        /**
         * GatewayClassName used for this Mesh. This is the name of a GatewayClass resource.
         */
        "gatewayClassName": string;
    };
    /**
     * MeshStatus defines the observed state of Mesh.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the Mesh. Known condition types are:
         *  \* "Scheduled" \* "Ready"
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
 * TDMesh represents an instantiation of a Traffic Director service mesh.
 */
export declare class TDMesh extends Model<ITDMesh> implements ITDMesh {
    "apiVersion": ITDMesh["apiVersion"];
    "kind": ITDMesh["kind"];
    "metadata"?: ITDMesh["metadata"];
    "spec"?: ITDMesh["spec"];
    "status"?: ITDMesh["status"];
    static apiVersion: ITDMesh["apiVersion"];
    static kind: ITDMesh["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITDMesh>;
    constructor(data?: ModelData<ITDMesh>);
}
