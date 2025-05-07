import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ClusterDomainClaim is a cluster-wide reservation for a particular domain name.
 */
export interface IClusterDomainClaim {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.internal.knative.dev/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ClusterDomainClaim";
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired state of the ClusterDomainClaim. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec"?: {
        /**
         * Namespace is the namespace which is allowed to create a DomainMapping using this ClusterDomainClaim's name.
         */
        "namespace": string;
    };
}
/**
 * ClusterDomainClaim is a cluster-wide reservation for a particular domain name.
 */
export declare class ClusterDomainClaim extends Model<IClusterDomainClaim> implements IClusterDomainClaim {
    "apiVersion": IClusterDomainClaim["apiVersion"];
    "kind": IClusterDomainClaim["kind"];
    "metadata"?: IClusterDomainClaim["metadata"];
    "spec"?: IClusterDomainClaim["spec"];
    static apiVersion: IClusterDomainClaim["apiVersion"];
    static kind: IClusterDomainClaim["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IClusterDomainClaim>;
    constructor(data?: ModelData<IClusterDomainClaim>);
}
