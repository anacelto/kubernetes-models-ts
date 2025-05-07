import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IServiceProfile {
    /**
     * Spec is the custom resource spec
     */
    "spec"?: {
        "dstOverrides"?: Array<{
            "authority"?: string;
            "weight"?: number | string;
        }>;
        "opaquePorts"?: Array<string>;
        /**
         * RetryBudget describes the maximum number of retries that should be issued to this service.
         */
        "retryBudget"?: {
            "minRetriesPerSecond": number;
            "retryRatio": number;
            "ttl": string;
        };
        "routes"?: Array<{
            /**
             * RequestMatch describes the conditions under which to match a Route.
             */
            "condition": {
                "pathRegex"?: string;
                "method"?: string;
                "all"?: Array<{}>;
                "any"?: Array<{}>;
                "not"?: Array<{}>;
            };
            "isRetryable"?: boolean;
            "name": string;
            "timeout"?: string;
            "responseClasses"?: Array<{
                /**
                 * ResponseMatch describes the conditions under which to classify a response.
                 */
                "condition": {
                    "all"?: Array<{}>;
                    "any"?: Array<{}>;
                    "not"?: {};
                    /**
                     * Range describes a range of integers (e.g. status codes).
                     */
                    "status"?: {
                        "max"?: number;
                        "min"?: number;
                    };
                };
                "isFailure"?: boolean;
            }>;
        }>;
    };
    "apiVersion": "linkerd.io/v1alpha2";
    "kind": "ServiceProfile";
    "metadata"?: IObjectMeta;
}
export declare class ServiceProfile extends Model<IServiceProfile> implements IServiceProfile {
    "spec"?: IServiceProfile["spec"];
    "apiVersion": IServiceProfile["apiVersion"];
    "kind": IServiceProfile["kind"];
    "metadata"?: IServiceProfile["metadata"];
    static apiVersion: IServiceProfile["apiVersion"];
    static kind: IServiceProfile["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceProfile>;
    constructor(data?: ModelData<IServiceProfile>);
}
