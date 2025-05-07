import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Certificate is responsible for provisioning a SSL certificate for the given hosts. It is a Knative abstraction for various SSL certificate provisioning solutions (such as cert-manager or self-signed SSL certificate).
 */
export interface ICertificate {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.internal.knative.dev/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Certificate";
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired state of the Certificate. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec"?: {
        /**
         * DNSNames is a list of DNS names the Certificate could support. The wildcard format of DNSNames (e.g. \*.default.example.com) is supported.
         */
        "dnsNames": Array<string>;
        /**
         * Domain is the top level domain of the values for DNSNames.
         */
        "domain"?: string;
        /**
         * SecretName is the name of the secret resource to store the SSL certificate in.
         */
        "secretName": string;
    };
    /**
     * Status is the current state of the Certificate. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "status"?: {
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
         * HTTP01Challenges is a list of HTTP01 challenges that need to be fulfilled in order to get the TLS certificate..
         */
        "http01Challenges"?: Array<{
            /**
             * ServiceName is the name of the service to serve HTTP01 challenge requests.
             */
            "serviceName"?: string;
            /**
             * ServiceNamespace is the namespace of the service to serve HTTP01 challenge requests.
             */
            "serviceNamespace"?: string;
            /**
             * ServicePort is the port of the service to serve HTTP01 challenge requests.
             */
            "servicePort"?: number | string;
            /**
             * URL is the URL that the HTTP01 challenge is expected to serve on.
             */
            "url"?: string;
        }>;
        /**
         * The expiration time of the TLS certificate stored in the secret named by this resource in spec.secretName.
         */
        "notAfter"?: string;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Certificate is responsible for provisioning a SSL certificate for the given hosts. It is a Knative abstraction for various SSL certificate provisioning solutions (such as cert-manager or self-signed SSL certificate).
 */
export declare class Certificate extends Model<ICertificate> implements ICertificate {
    "apiVersion": ICertificate["apiVersion"];
    "kind": ICertificate["kind"];
    "metadata"?: ICertificate["metadata"];
    "spec"?: ICertificate["spec"];
    "status"?: ICertificate["status"];
    static apiVersion: ICertificate["apiVersion"];
    static kind: ICertificate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICertificate>;
    constructor(data?: ModelData<ICertificate>);
}
