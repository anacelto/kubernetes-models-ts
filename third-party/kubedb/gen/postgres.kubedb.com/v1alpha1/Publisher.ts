import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PostgresKubedbComV1alpha1Publisher";

export interface IPublisher {
  "apiVersion": "postgres.kubedb.com/v1alpha1";
  "kind": "Publisher";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "allowedSubscribers"?: {
      "namespaces"?: {
        "from"?: "All" | "Selector" | "Same";
        "selector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
      };
      "selector"?: {
        "matchExpressions"?: Array<{
          "key": string;
          "operator": string;
          "values"?: Array<string>;
        }>;
        "matchLabels"?: {
          [key: string]: string;
        };
      };
    };
    "databaseName": string;
    "deletionPolicy"?: "Delete" | "Retain";
    "disable"?: boolean;
    "name": string;
    "parameters"?: {
      "operations"?: Array<"insert" | "update" | "delete" | "truncate">;
      "publishViaPartitionRoot"?: boolean;
    };
    "publishAllTables"?: boolean;
    "serverRef": {
      "name"?: string;
    };
    "tables"?: Array<string>;
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
    "subscribers"?: Array<{
      "name": string;
      "namespace"?: string;
    }>;
  };
}

export class Publisher extends Model<IPublisher> implements IPublisher {
  "apiVersion": IPublisher["apiVersion"];
  "kind": IPublisher["kind"];
  "metadata"?: IPublisher["metadata"];
  "spec"?: IPublisher["spec"];
  "status"?: IPublisher["status"];

static apiVersion: IPublisher["apiVersion"] = "postgres.kubedb.com/v1alpha1";
static kind: IPublisher["kind"] = "Publisher";
static is = createTypeMetaGuard<IPublisher>(Publisher);

constructor(data?: ModelData<IPublisher>) {
  super();

  this.setDefinedProps({
    apiVersion: Publisher.apiVersion,
    kind: Publisher.kind,
    ...data
  } as IPublisher);
}
}


setValidateFunc(Publisher, validate as ValidateFunc<IPublisher>);
