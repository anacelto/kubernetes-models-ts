import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayEnvoyproxyIoV1alpha1AuthenticationFilter";

export interface IAuthenticationFilter {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.envoyproxy.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "AuthenticationFilter";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of the AuthenticationFilter type.
   */
  "spec": {
    /**
     * JWT defines the JSON Web Token (JWT) authentication provider type. When multiple jwtProviders are specified, the JWT is considered valid if any of the providers successfully validate the JWT. For additional details, see https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/jwt_authn_filter.html.
     */
    "jwtProviders"?: Array<{
      /**
       * Audiences is a list of JWT audiences allowed access. For additional details, see https://tools.ietf.org/html/rfc7519#section-4.1.3. If not provided, JWT audiences are not checked.
       */
      "audiences"?: Array<string>;
      /**
       * ClaimToHeaders is a list of JWT claims that must be extracted into HTTP request headers For examples, following config: The claim must be of type; string, int, double, bool. Array type claims are not supported
       */
      "claimToHeaders"?: Array<{
        /**
         * Claim is the JWT Claim that should be saved into the header : it can be a nested claim of type (eg. "claim.nested.key", "sub"). The nested claim name must use dot "." to separate the JSON name path.
         */
        "claim": string;
        /**
         * Header defines the name of the HTTP request header that the JWT Claim will be saved into.
         */
        "header": string;
      }>;
      /**
       * Issuer is the principal that issued the JWT and takes the form of a URL or email address. For additional details, see https://tools.ietf.org/html/rfc7519#section-4.1.1 for URL format and https://rfc-editor.org/rfc/rfc5322.html for email format. If not provided, the JWT issuer is not checked.
       */
      "issuer"?: string;
      /**
       * Name defines a unique name for the JWT provider. A name can have a variety of forms, including RFC1123 subdomains, RFC 1123 labels, or RFC 1035 labels.
       */
      "name": string;
      /**
       * RemoteJWKS defines how to fetch and cache JSON Web Key Sets (JWKS) from a remote HTTP/HTTPS endpoint.
       */
      "remoteJWKS": {
        /**
         * URI is the HTTPS URI to fetch the JWKS. Envoy's system trust bundle is used to validate the server certificate.
         */
        "uri": string;
      };
    }>;
    /**
     * Type defines the type of authentication provider to use. Supported provider types are "JWT".
     */
    "type": "JWT";
  };
}

export class AuthenticationFilter extends Model<IAuthenticationFilter> implements IAuthenticationFilter {
  "apiVersion": IAuthenticationFilter["apiVersion"];
  "kind": IAuthenticationFilter["kind"];
  "metadata"?: IAuthenticationFilter["metadata"];
  "spec": IAuthenticationFilter["spec"];

static apiVersion: IAuthenticationFilter["apiVersion"] = "gateway.envoyproxy.io/v1alpha1";
static kind: IAuthenticationFilter["kind"] = "AuthenticationFilter";
static is = createTypeMetaGuard<IAuthenticationFilter>(AuthenticationFilter);

constructor(data?: ModelData<IAuthenticationFilter>) {
  super();

  this.setDefinedProps({
    apiVersion: AuthenticationFilter.apiVersion,
    kind: AuthenticationFilter.kind,
    ...data
  } as IAuthenticationFilter);
}
}


setValidateFunc(AuthenticationFilter, validate as ValidateFunc<IAuthenticationFilter>);
