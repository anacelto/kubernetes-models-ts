import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * DomainMapping is a mapping from a custom hostname to an Addressable.
 */
export interface IDomainMapping {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "serving.knative.dev/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "DomainMapping";
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired state of the DomainMapping. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec"?: {
        /**
         * Ref specifies the target of the Domain Mapping.
         *  The object identified by the Ref must be an Addressable with a URL of the form `{name}.{namespace}.{domain}` where `{domain}` is the cluster domain, and `{name}` and `{namespace}` are the name and namespace of a Kubernetes Service.
         *  This contract is satisfied by Knative types such as Knative Services and Knative Routes, and by Kubernetes Services.
         */
        "ref": {
            /**
             * Address points to a specific Address Name.
             */
            "address"?: string;
            /**
             * API version of the referent.
             */
            "apiVersion"?: string;
            /**
             * Group of the API, without the version of the group. This can be used as an alternative to the APIVersion, and then resolved using ResolveGroup. Note: This API is EXPERIMENTAL and might break anytime. For more details: https://github.com/knative/eventing/issues/5086
             */
            "group"?: string;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            "kind": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
             */
            "namespace"?: string;
        };
        /**
         * TLS allows the DomainMapping to terminate TLS traffic with an existing secret.
         */
        "tls"?: {
            /**
             * SecretName is the name of the existing secret used to terminate TLS traffic.
             */
            "secretName": string;
        };
    };
    /**
     * Status is the current state of the DomainMapping. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "status"?: {
        /**
         * Address holds the information needed for a DomainMapping to be the target of an event.
         */
        "address"?: {
            /**
             * CACerts is the Certification Authority (CA) certificates in PEM format according to https://www.rfc-editor.org/rfc/rfc7468.
             */
            "CACerts"?: string;
            /**
             * Name is the name of the address.
             */
            "name"?: string;
            "url"?: string;
        };
        /**
         * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
         */
        "annotations"?: {
            [key: string]: string;
        };
        /**
         * Conditions the latest available observations of a resource's current state.
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
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
        /**
         * URL is the URL of this DomainMapping.
         */
        "url"?: string;
    };
}
/**
 * DomainMapping is a mapping from a custom hostname to an Addressable.
 */
export declare class DomainMapping extends Model<IDomainMapping> implements IDomainMapping {
    "apiVersion": IDomainMapping["apiVersion"];
    "kind": IDomainMapping["kind"];
    "metadata"?: IDomainMapping["metadata"];
    "spec"?: IDomainMapping["spec"];
    "status"?: IDomainMapping["status"];
    static apiVersion: IDomainMapping["apiVersion"];
    static kind: IDomainMapping["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDomainMapping>;
    constructor(data?: ModelData<IDomainMapping>);
}
