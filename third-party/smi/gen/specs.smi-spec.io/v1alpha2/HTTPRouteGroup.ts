import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SpecsSmiSpecIoV1alpha2HTTPRouteGroup";

/**
 * HTTPRouteGroup is the Schema for the httproutegroups API It is used to describe HTTP/1 and HTTP/2 traffic. It enumerates the routes that can be served by an application.
 */
export interface IHTTPRouteGroup {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "specs.smi-spec.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HTTPRouteGroup";
  /**
   * Routes for inbound traffic
   */
  "matches"?: Array<{
    /**
     * Headers is a list of headers used to match HTTP traffic
     */
    "headers"?: {
      [key: string]: string;
    };
    /**
     * Methods for inbound traffic as defined in RFC 7231 https://tools.ietf.org/html/rfc7231#section-4
     */
    "methods"?: Array<string>;
    /**
     * Name is the name of the match for referencing in a TrafficTarget
     */
    "name"?: string;
    /**
     * PathRegex is a regular expression defining the route
     */
    "pathRegex"?: string;
  }>;
  "metadata"?: IObjectMeta;
  /**
   * HTTPRouteGroupStatus defines the observed state of UDPRoute
   */
  "status"?: {
  };
}

/**
 * HTTPRouteGroup is the Schema for the httproutegroups API It is used to describe HTTP/1 and HTTP/2 traffic. It enumerates the routes that can be served by an application.
 */
export class HTTPRouteGroup extends Model<IHTTPRouteGroup> implements IHTTPRouteGroup {
  "apiVersion": IHTTPRouteGroup["apiVersion"];
  "kind": IHTTPRouteGroup["kind"];
  "matches"?: IHTTPRouteGroup["matches"];
  "metadata"?: IHTTPRouteGroup["metadata"];
  "status"?: IHTTPRouteGroup["status"];

static apiVersion: IHTTPRouteGroup["apiVersion"] = "specs.smi-spec.io/v1alpha2";
static kind: IHTTPRouteGroup["kind"] = "HTTPRouteGroup";
static is = createTypeMetaGuard<IHTTPRouteGroup>(HTTPRouteGroup);

constructor(data?: ModelData<IHTTPRouteGroup>) {
  super();

  this.setDefinedProps({
    apiVersion: HTTPRouteGroup.apiVersion,
    kind: HTTPRouteGroup.kind,
    ...data
  } as IHTTPRouteGroup);
}
}


setValidateFunc(HTTPRouteGroup, validate as ValidateFunc<IHTTPRouteGroup>);
