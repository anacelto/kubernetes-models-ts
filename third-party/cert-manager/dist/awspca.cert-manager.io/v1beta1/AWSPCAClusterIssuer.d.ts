import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * AWSPCAClusterIssuer is the Schema for the awspcaclusterissuers API
 */
export interface IAWSPCAClusterIssuer {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "awspca.cert-manager.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "AWSPCAClusterIssuer";
    "metadata"?: IObjectMeta;
    /**
     * AWSPCAIssuerSpec defines the desired state of AWSPCAIssuer
     */
    "spec"?: {
        /**
         * Specifies the ARN of the PCA resource
         */
        "arn"?: string;
        /**
         * Should contain the AWS region if it cannot be inferred
         */
        "region"?: string;
        /**
         * Needs to be specified if you want to authorize with AWS using an access and secret key
         */
        "secretRef"?: {
            /**
             * Name is unique within a namespace to reference a secret resource.
             */
            "name"?: string;
            /**
             * Namespace defines the space within which the secret name must be unique.
             */
            "namespace"?: string;
        };
    };
    /**
     * AWSPCAIssuerStatus defines the observed state of AWSPCAIssuer
     */
    "status"?: {
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
 * AWSPCAClusterIssuer is the Schema for the awspcaclusterissuers API
 */
export declare class AWSPCAClusterIssuer extends Model<IAWSPCAClusterIssuer> implements IAWSPCAClusterIssuer {
    "apiVersion": IAWSPCAClusterIssuer["apiVersion"];
    "kind": IAWSPCAClusterIssuer["kind"];
    "metadata"?: IAWSPCAClusterIssuer["metadata"];
    "spec"?: IAWSPCAClusterIssuer["spec"];
    "status"?: IAWSPCAClusterIssuer["status"];
    static apiVersion: IAWSPCAClusterIssuer["apiVersion"];
    static kind: IAWSPCAClusterIssuer["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAWSPCAClusterIssuer>;
    constructor(data?: ModelData<IAWSPCAClusterIssuer>);
}
