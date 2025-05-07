import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IRequestAuthentication {
    /**
     * RequestAuthentication defines what request authentication methods are supported by a workload.
     */
    "spec"?: {
        /**
         * Define the list of JWTs that can be validated at the selected workloads' proxy.
         */
        "jwtRules"?: Array<{
            "audiences"?: Array<string>;
            /**
             * If set to true, the original token will be kept for the upstream request.
             */
            "forwardOriginalToken"?: boolean;
            /**
             * List of header locations from which JWT is expected.
             */
            "fromHeaders"?: Array<{
                /**
                 * The HTTP header name.
                 */
                "name"?: string;
                /**
                 * The prefix that should be stripped before decoding the token.
                 */
                "prefix"?: string;
            }>;
            /**
             * List of query parameters from which JWT is expected.
             */
            "fromParams"?: Array<string>;
            /**
             * Identifies the issuer that issued the JWT.
             */
            "issuer"?: string;
            /**
             * JSON Web Key Set of public keys to validate signature of the JWT.
             */
            "jwks"?: string;
            "jwks_uri"?: string;
            "jwksUri"?: string;
            /**
             * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
             */
            "outputClaimToHeaders"?: Array<{
                /**
                 * The name of the claim to be copied from.
                 */
                "claim"?: string;
                /**
                 * The name of the header to be created.
                 */
                "header"?: string;
            }>;
            "outputPayloadToHeader"?: string;
        }>;
        /**
         * Optional.
         */
        "selector"?: {
            "matchLabels"?: {
                [key: string]: string;
            };
        };
    };
    "status"?: {};
    "apiVersion": "security.istio.io/v1";
    "kind": "RequestAuthentication";
    "metadata"?: IObjectMeta;
}
export declare class RequestAuthentication extends Model<IRequestAuthentication> implements IRequestAuthentication {
    "spec"?: IRequestAuthentication["spec"];
    "status"?: IRequestAuthentication["status"];
    "apiVersion": IRequestAuthentication["apiVersion"];
    "kind": IRequestAuthentication["kind"];
    "metadata"?: IRequestAuthentication["metadata"];
    static apiVersion: IRequestAuthentication["apiVersion"];
    static kind: IRequestAuthentication["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRequestAuthentication>;
    constructor(data?: ModelData<IRequestAuthentication>);
}
