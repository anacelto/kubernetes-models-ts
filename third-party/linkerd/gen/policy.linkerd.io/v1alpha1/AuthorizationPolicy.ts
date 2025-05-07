import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1alpha1AuthorizationPolicy";

export interface IAuthorizationPolicy {
  /**
   * Authorizes clients to communicate with Linkerd-proxied server resources.
   */
  "spec": {
    /**
     * TargetRef references a resource to which the authorization policy applies.
     */
    "targetRef": {
      /**
       * Group is the group of the referent. When empty, the Kubernetes core API group is inferred.
       */
      "group"?: string;
      /**
       * Kind is the kind of the referent.
       */
      "kind": string;
      /**
       * Name is the name of the referent.
       */
      "name": string;
    };
    /**
     * RequiredAuthenticationRefs enumerates a set of required authentications. ALL authentications must be satisfied for the authorization to apply. If any of the referred objects cannot be found, the authorization will be ignored.
     */
    "requiredAuthenticationRefs": Array<{
      /**
       * Group is the group of the referent. When empty, the Kubernetes core API group is inferred."
       */
      "group"?: string;
      /**
       * Kind is the kind of the referent.
       */
      "kind": string;
      /**
       * Name is the name of the referent.
       */
      "name": string;
      /**
       * Name is the name of the referent. When unspecified, this authentication refers to the local namespace.
       */
      "namespace"?: string;
    }>;
  };
  "apiVersion": "policy.linkerd.io/v1alpha1";
  "kind": "AuthorizationPolicy";
  "metadata"?: IObjectMeta;
}

export class AuthorizationPolicy extends Model<IAuthorizationPolicy> implements IAuthorizationPolicy {
  "spec": IAuthorizationPolicy["spec"];
  "apiVersion": IAuthorizationPolicy["apiVersion"];
  "kind": IAuthorizationPolicy["kind"];
  "metadata"?: IAuthorizationPolicy["metadata"];

static apiVersion: IAuthorizationPolicy["apiVersion"] = "policy.linkerd.io/v1alpha1";
static kind: IAuthorizationPolicy["kind"] = "AuthorizationPolicy";
static is = createTypeMetaGuard<IAuthorizationPolicy>(AuthorizationPolicy);

constructor(data?: ModelData<IAuthorizationPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: AuthorizationPolicy.apiVersion,
    kind: AuthorizationPolicy.kind,
    ...data
  } as IAuthorizationPolicy);
}
}


setValidateFunc(AuthorizationPolicy, validate as ValidateFunc<IAuthorizationPolicy>);
