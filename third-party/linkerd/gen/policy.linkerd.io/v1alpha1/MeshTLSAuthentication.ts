import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1alpha1MeshTLSAuthentication";

export interface IMeshTLSAuthentication {
  /**
   * MeshTLSAuthentication defines a list of authenticated client IDs to be referenced by an `AuthorizationPolicy`. If a client connection has the mutually-authenticated identity that matches ANY of the of the provided identities, the connection is considered authenticated.
   */
  "spec": {
    /**
     * Authorizes clients with the provided proxy identity strings (as provided via MTLS)
     * The `\*` prefix can be used to match all identities in a domain. An identity string of `\*` indicates that all authentication clients are authorized.
     */
    "identities"?: Array<string>;
    "identityRefs"?: Array<{
      /**
       * Group is the group of the referent. When empty, the Kubernetes core API group is inferred."
       */
      "group"?: string;
      /**
       * Kind is the kind of the referent.
       */
      "kind": string;
      /**
       * Name is the name of the referent. When unspecified, this refers to all resources of the specified Group and Kind in the specified namespace.
       */
      "name"?: string;
      /**
       * Name is the name of the referent. When unspecified, this authentication refers to the local namespace.
       */
      "namespace"?: string;
    }>;
  } & ({
    /**
     * Authorizes clients with the provided proxy identity strings (as provided via MTLS)
     * The `\*` prefix can be used to match all identities in a domain. An identity string of `\*` indicates that all authentication clients are authorized.
     */
    "identities": Array<string>;
    "identityRefs"?: Array<{
      /**
       * Group is the group of the referent. When empty, the Kubernetes core API group is inferred."
       */
      "group"?: string;
      /**
       * Kind is the kind of the referent.
       */
      "kind": string;
      /**
       * Name is the name of the referent. When unspecified, this refers to all resources of the specified Group and Kind in the specified namespace.
       */
      "name"?: string;
      /**
       * Name is the name of the referent. When unspecified, this authentication refers to the local namespace.
       */
      "namespace"?: string;
    }>;
  } | {
    /**
     * Authorizes clients with the provided proxy identity strings (as provided via MTLS)
     * The `\*` prefix can be used to match all identities in a domain. An identity string of `\*` indicates that all authentication clients are authorized.
     */
    "identities"?: Array<string>;
    "identityRefs": Array<{
      /**
       * Group is the group of the referent. When empty, the Kubernetes core API group is inferred."
       */
      "group"?: string;
      /**
       * Kind is the kind of the referent.
       */
      "kind": string;
      /**
       * Name is the name of the referent. When unspecified, this refers to all resources of the specified Group and Kind in the specified namespace.
       */
      "name"?: string;
      /**
       * Name is the name of the referent. When unspecified, this authentication refers to the local namespace.
       */
      "namespace"?: string;
    }>;
  });
  "apiVersion": "policy.linkerd.io/v1alpha1";
  "kind": "MeshTLSAuthentication";
  "metadata"?: IObjectMeta;
}

export class MeshTLSAuthentication extends Model<IMeshTLSAuthentication> implements IMeshTLSAuthentication {
  "spec": IMeshTLSAuthentication["spec"];
  "apiVersion": IMeshTLSAuthentication["apiVersion"];
  "kind": IMeshTLSAuthentication["kind"];
  "metadata"?: IMeshTLSAuthentication["metadata"];

static apiVersion: IMeshTLSAuthentication["apiVersion"] = "policy.linkerd.io/v1alpha1";
static kind: IMeshTLSAuthentication["kind"] = "MeshTLSAuthentication";
static is = createTypeMetaGuard<IMeshTLSAuthentication>(MeshTLSAuthentication);

constructor(data?: ModelData<IMeshTLSAuthentication>) {
  super();

  this.setDefinedProps({
    apiVersion: MeshTLSAuthentication.apiVersion,
    kind: MeshTLSAuthentication.kind,
    ...data
  } as IMeshTLSAuthentication);
}
}


setValidateFunc(MeshTLSAuthentication, validate as ValidateFunc<IMeshTLSAuthentication>);
