import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GoogleRedirectService describes the specification used by redirect services on GKE.
 */
export interface IRedirectService {
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired configuration for Google redirect service.
     */
    "spec"?: {
        /**
         * redirect specifies a redirection operation.
         */
        "redirect"?: {
            /**
             * Provider of the original service.
             */
            "provider"?: "kube-dns";
            /**
             * Type of service that needs redirection.
             */
            "type"?: "nodelocaldns";
        };
    };
    "apiVersion": "networking.gke.io/v1alpha1";
    "kind": "RedirectService";
}
/**
 * GoogleRedirectService describes the specification used by redirect services on GKE.
 */
export declare class RedirectService extends Model<IRedirectService> implements IRedirectService {
    "metadata"?: IRedirectService["metadata"];
    "spec"?: IRedirectService["spec"];
    "apiVersion": IRedirectService["apiVersion"];
    "kind": IRedirectService["kind"];
    static apiVersion: IRedirectService["apiVersion"];
    static kind: IRedirectService["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRedirectService>;
    constructor(data?: ModelData<IRedirectService>);
}
