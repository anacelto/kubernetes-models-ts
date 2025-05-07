import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SpiffeidSpiffeIoV1beta1SpiffeID";

/**
 * SpiffeID is the Schema for the spiffeid API
 */
export interface ISpiffeID {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "spiffeid.spiffe.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SpiffeID";
  "metadata"?: IObjectMeta;
  /**
   * SpiffeIDSpec defines the desired state of SpiffeID
   */
  "spec"?: {
    "dnsNames"?: Array<string>;
    "federatesWith"?: Array<string>;
    "parentId": string;
    "downstream"?: boolean;
    "selector": {
      /**
       * Arbitrary selectors
       */
      "arbitrary"?: Array<string>;
      /**
       * Container image to match for this spiffe ID
       */
      "containerImage"?: string;
      /**
       * Container name to match for this spiffe ID
       */
      "containerName"?: string;
      /**
       * Namespace to match for this spiffe ID
       */
      "namespace"?: string;
      /**
       * Node name to match for this spiffe ID
       */
      "nodeName"?: string;
      /**
       * Pod label name/value to match for this spiffe ID
       */
      "podLabel"?: {
        [key: string]: string;
      };
      /**
       * Pod name to match for this spiffe ID
       */
      "podName"?: string;
      /**
       * Pod UID to match for this spiffe ID
       */
      "podUid"?: string;
      /**
       * ServiceAccount to match for this spiffe ID
       */
      "serviceAccount"?: string;
      /**
       * The k8s_psat cluster name
       */
      "cluster"?: string;
      /**
       * UID of the node
       */
      "agent_node_uid"?: string;
    };
    "spiffeId": string;
  };
  /**
   * SpiffeIDStatus defines the observed state of SpiffeID
   */
  "status"?: {
    /**
     * INSERT ADDITIONAL STATUS FIELD - define observed state of cluster Important: Run "make" to regenerate code after modifying this file
     */
    "entryId"?: string;
  };
}

/**
 * SpiffeID is the Schema for the spiffeid API
 */
export class SpiffeID extends Model<ISpiffeID> implements ISpiffeID {
  "apiVersion": ISpiffeID["apiVersion"];
  "kind": ISpiffeID["kind"];
  "metadata"?: ISpiffeID["metadata"];
  "spec"?: ISpiffeID["spec"];
  "status"?: ISpiffeID["status"];

static apiVersion: ISpiffeID["apiVersion"] = "spiffeid.spiffe.io/v1beta1";
static kind: ISpiffeID["kind"] = "SpiffeID";
static is = createTypeMetaGuard<ISpiffeID>(SpiffeID);

constructor(data?: ModelData<ISpiffeID>) {
  super();

  this.setDefinedProps({
    apiVersion: SpiffeID.apiVersion,
    kind: SpiffeID.kind,
    ...data
  } as ISpiffeID);
}
}


setValidateFunc(SpiffeID, validate as ValidateFunc<ISpiffeID>);
