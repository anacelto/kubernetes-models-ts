import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PostgresKubedbComV1alpha1Subscriber";

export interface ISubscriber {
  "apiVersion": "postgres.kubedb.com/v1alpha1";
  "kind": "Subscriber";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "databaseName": string;
    "deletionPolicy"?: "Delete" | "Retain";
    "disable"?: boolean;
    "name": string;
    "parameters"?: {
      "binary"?: boolean;
      "connect"?: boolean;
      "copyData"?: boolean;
      "createSlot"?: boolean;
      "enabled"?: boolean;
      "slotName"?: string;
      "streaming"?: boolean;
      "synchronousCommit"?: string;
      "tableCreationPolicy"?: string;
    };
    "publisher": {
      "external"?: {
        "databaseName": string;
        "publications": Array<string>;
        "serverRef": {
          "name": string;
          "namespace"?: string;
        };
      };
      "managed"?: {
        "namespace"?: string;
        "refs": Array<{
          "name"?: string;
        }>;
      };
    };
    "serverRef": {
      "name"?: string;
    };
  };
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime": string;
      "message": string;
      "observedGeneration"?: number;
      "reason": string;
      "status": string;
      "type": string;
    }>;
    "observedGeneration"?: number;
    "phase"?: "Pending" | "InProgress" | "Current" | "Failed";
  };
}

export class Subscriber extends Model<ISubscriber> implements ISubscriber {
  "apiVersion": ISubscriber["apiVersion"];
  "kind": ISubscriber["kind"];
  "metadata"?: ISubscriber["metadata"];
  "spec"?: ISubscriber["spec"];
  "status"?: ISubscriber["status"];

static apiVersion: ISubscriber["apiVersion"] = "postgres.kubedb.com/v1alpha1";
static kind: ISubscriber["kind"] = "Subscriber";
static is = createTypeMetaGuard<ISubscriber>(Subscriber);

constructor(data?: ModelData<ISubscriber>) {
  super();

  this.setDefinedProps({
    apiVersion: Subscriber.apiVersion,
    kind: Subscriber.kind,
    ...data
  } as ISubscriber);
}
}


setValidateFunc(Subscriber, validate as ValidateFunc<ISubscriber>);
