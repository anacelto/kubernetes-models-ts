import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBundle {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "trust.cert-manager.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Bundle";
    "metadata"?: IObjectMeta;
    /**
     * Desired state of the Bundle resource.
     */
    "spec": {
        /**
         * Sources is a set of references to data whose data will sync to the target.
         */
        "sources": Array<{
            /**
             * ConfigMap is a reference to a ConfigMap's `data` key, in the trust Namespace.
             */
            "configMap"?: {
                /**
                 * Key is the key of the entry in the object's `data` field to be used.
                 */
                "key": string;
                /**
                 * Name is the name of the source object in the trust Namespace.
                 */
                "name": string;
            };
            /**
             * InLine is a simple string to append as the source data.
             */
            "inLine"?: string;
            /**
             * Secret is a reference to a Secrets's `data` key, in the trust Namespace.
             */
            "secret"?: {
                /**
                 * Key is the key of the entry in the object's `data` field to be used.
                 */
                "key": string;
                /**
                 * Name is the name of the source object in the trust Namespace.
                 */
                "name": string;
            };
            /**
             * UseDefaultCAs, when true, requests the default CA bundle to be used as a source. Default CAs are available if trust-manager was installed via Helm or was otherwise set up to include a package-injecting init container by using the "--default-package-location" flag when starting the trust-manager controller. If default CAs were not configured at start-up, any request to use the default CAs will fail. The version of the default CA package which is used for a Bundle is stored in the defaultCAPackageVersion field of the Bundle's status field.
             */
            "useDefaultCAs"?: boolean;
        }>;
        /**
         * Target is the target location in all namespaces to sync source data to.
         */
        "target": {
            /**
             * ConfigMap is the target ConfigMap in Namespaces that all Bundle source data will be synced to.
             */
            "configMap"?: {
                /**
                 * Key is the key of the entry in the object's `data` field to be used.
                 */
                "key": string;
            };
            /**
             * NamespaceSelector will, if set, only sync the target resource in Namespaces which match the selector.
             */
            "namespaceSelector"?: {
                /**
                 * MatchLabels matches on the set of labels that must be present on a Namespace for the Bundle target to be synced there.
                 */
                "matchLabels"?: {
                    [key: string]: string;
                };
            };
        };
    };
    /**
     * Status of the Bundle. This is set and managed automatically.
     */
    "status"?: {
        /**
         * List of status conditions to indicate the status of the Bundle. Known condition types are `Bundle`.
         */
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            "lastTransitionTime"?: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            "message"?: string;
            /**
             * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Bundle.
             */
            "observedGeneration"?: number;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status of the condition, one of ('True', 'False', 'Unknown').
             */
            "status": string;
            /**
             * Type of the condition, known values are (`Synced`).
             */
            "type": string;
        }>;
        /**
         * DefaultCAPackageVersion, if set and non-empty, indicates the version information which was retrieved when the set of default CAs was requested in the bundle source. This should only be set if useDefaultCAs was set to "true" on a source, and will be the same for the same version of a bundle with identical certificates.
         */
        "defaultCAVersion"?: string;
        /**
         * Target is the current Target that the Bundle is attempting or has completed syncing the source data to.
         */
        "target"?: {
            /**
             * ConfigMap is the target ConfigMap in Namespaces that all Bundle source data will be synced to.
             */
            "configMap"?: {
                /**
                 * Key is the key of the entry in the object's `data` field to be used.
                 */
                "key": string;
            };
            /**
             * NamespaceSelector will, if set, only sync the target resource in Namespaces which match the selector.
             */
            "namespaceSelector"?: {
                /**
                 * MatchLabels matches on the set of labels that must be present on a Namespace for the Bundle target to be synced there.
                 */
                "matchLabels"?: {
                    [key: string]: string;
                };
            };
        };
    };
}
export declare class Bundle extends Model<IBundle> implements IBundle {
    "apiVersion": IBundle["apiVersion"];
    "kind": IBundle["kind"];
    "metadata"?: IBundle["metadata"];
    "spec": IBundle["spec"];
    "status"?: IBundle["status"];
    static apiVersion: IBundle["apiVersion"];
    static kind: IBundle["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBundle>;
    constructor(data?: ModelData<IBundle>);
}
