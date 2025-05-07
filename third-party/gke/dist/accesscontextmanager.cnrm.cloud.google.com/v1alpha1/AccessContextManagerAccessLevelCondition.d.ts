import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IAccessContextManagerAccessLevelCondition {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "accesscontextmanager.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "AccessContextManagerAccessLevelCondition";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "accessLevelRef"?: {
            /**
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
             * Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
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
         * Immutable. Device specific restrictions, all restrictions must hold for
         * the Condition to be true. If not specified, all devices are
         * allowed.
         */
        "devicePolicy"?: {
            /**
             * Immutable. A list of allowed device management levels.
             * An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].
             */
            "allowedDeviceManagementLevels"?: Array<string>;
            /**
             * Immutable. A list of allowed encryptions statuses.
             * An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].
             */
            "allowedEncryptionStatuses"?: Array<string>;
            /**
             * Immutable. A list of allowed OS versions.
             * An empty list allows all types and all versions.
             */
            "osConstraints"?: Array<{
                /**
                 * Immutable. The minimum allowed OS version. If not set, any version
                 * of this OS satisfies the constraint.
                 * Format: "major.minor.patch" such as "10.5.301", "9.2.1".
                 */
                "minimumVersion"?: string;
                /**
                 * Immutable. The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].
                 */
                "osType": string;
            }>;
            /**
             * Immutable. Whether the device needs to be approved by the customer admin.
             */
            "requireAdminApproval"?: boolean;
            /**
             * Immutable. Whether the device needs to be corp owned.
             */
            "requireCorpOwned"?: boolean;
            /**
             * Immutable. Whether or not screenlock is required for the DevicePolicy
             * to be true. Defaults to false.
             */
            "requireScreenLock"?: boolean;
        };
        /**
         * Immutable. A list of CIDR block IP subnetwork specification. May be IPv4
         * or IPv6.
         * Note that for a CIDR IP address block, the specified IP address
         * portion must be properly truncated (i.e. all the host bits must
         * be zero) or the input is considered malformed. For example,
         * "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
         * for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
         * is not. The originating IP of a request must be in one of the
         * listed subnets in order for this Condition to be true.
         * If empty, all IP addresses are allowed.
         */
        "ipSubnetworks"?: Array<string>;
        /**
         * Immutable. An allowed list of members (users, service accounts).
         * Using groups is not supported yet.
         *
         * The signed-in user originating the request must be a part of one
         * of the provided members. If not specified, a request may come
         * from any user (logged in/not logged in, not present in any
         * groups, etc.).
         * Formats: 'user:{emailid}', 'serviceAccount:{emailid}'.
         */
        "members"?: Array<string>;
        /**
         * Immutable. Whether to negate the Condition. If true, the Condition becomes
         * a NAND over its non-empty fields, each field must be false for
         * the Condition overall to be satisfied. Defaults to false.
         */
        "negate"?: boolean;
        /**
         * Immutable. The request must originate from one of the provided
         * countries/regions.
         * Format: A valid ISO 3166-1 alpha-2 code.
         */
        "regions"?: Array<string>;
        /**
         * Immutable. A list of other access levels defined in the same Policy,
         * referenced by resource name. Referencing an AccessLevel which
         * does not exist is an error. All access levels listed must be
         * granted for the Condition to be true.
         * Format: accessPolicies/{policy_id}/accessLevels/{short_name}.
         */
        "requiredAccessLevels"?: Array<string>;
        /**
         * Immutable. Optional. The accessLevel of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class AccessContextManagerAccessLevelCondition extends Model<IAccessContextManagerAccessLevelCondition> implements IAccessContextManagerAccessLevelCondition {
    "apiVersion": IAccessContextManagerAccessLevelCondition["apiVersion"];
    "kind": IAccessContextManagerAccessLevelCondition["kind"];
    "metadata"?: IAccessContextManagerAccessLevelCondition["metadata"];
    "spec"?: IAccessContextManagerAccessLevelCondition["spec"];
    "status"?: IAccessContextManagerAccessLevelCondition["status"];
    static apiVersion: IAccessContextManagerAccessLevelCondition["apiVersion"];
    static kind: IAccessContextManagerAccessLevelCondition["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAccessContextManagerAccessLevelCondition>;
    constructor(data?: ModelData<IAccessContextManagerAccessLevelCondition>);
}
