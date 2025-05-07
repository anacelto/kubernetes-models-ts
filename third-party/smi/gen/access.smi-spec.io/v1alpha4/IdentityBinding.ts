import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AccessSmiSpecIoV1alpha4IdentityBinding";

/**
 * An `IdentityBinding` declares the set of identities belonging to a particular workload for the purposes of policy (i.e. TrafficTarget).
 */
export interface IIdentityBinding {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "access.smi-spec.io/v1alpha4";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "IdentityBinding";
  "metadata"?: IObjectMeta;
  /**
   * IdentityBindingSpec defines the desired state of IdentityBinding
   */
  "spec"?: {
    /**
     * IdentityBinding is composed of a set of schemes that describe a service's identity.
     */
    "schemes": {
      "podLabelSelector"?: {
        "matchLabels": {
          [key: string]: string;
        };
      };
      "serviceAccount"?: string;
      "spiffeIdentities"?: Array<string>;
    };
  };
  /**
   * IdentityBindingStatus defines the observed state of IdentityBinding
   */
  "status"?: {
  };
}

/**
 * An `IdentityBinding` declares the set of identities belonging to a particular workload for the purposes of policy (i.e. TrafficTarget).
 */
export class IdentityBinding extends Model<IIdentityBinding> implements IIdentityBinding {
  "apiVersion": IIdentityBinding["apiVersion"];
  "kind": IIdentityBinding["kind"];
  "metadata"?: IIdentityBinding["metadata"];
  "spec"?: IIdentityBinding["spec"];
  "status"?: IIdentityBinding["status"];

static apiVersion: IIdentityBinding["apiVersion"] = "access.smi-spec.io/v1alpha4";
static kind: IIdentityBinding["kind"] = "IdentityBinding";
static is = createTypeMetaGuard<IIdentityBinding>(IdentityBinding);

constructor(data?: ModelData<IIdentityBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: IdentityBinding.apiVersion,
    kind: IdentityBinding.kind,
    ...data
  } as IIdentityBinding);
}
}


setValidateFunc(IdentityBinding, validate as ValidateFunc<IIdentityBinding>);
