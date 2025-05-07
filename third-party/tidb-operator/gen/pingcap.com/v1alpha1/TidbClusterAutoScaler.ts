import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PingcapComV1alpha1TidbClusterAutoScaler";

export interface ITidbClusterAutoScaler {
  "apiVersion": "pingcap.com/v1alpha1";
  "kind": "TidbClusterAutoScaler";
  "metadata": IObjectMeta;
  "spec": {
    "cluster": {
      "clusterDomain"?: string;
      "name": string;
      "namespace"?: string;
    };
    "tidb"?: {
      "external"?: {
        "endpoint"?: {
          "host": string;
          "path": string;
          "port": number;
          "tlsSecret"?: {
            "name": string;
            "namespace": string;
          };
        };
        "maxReplicas": number;
      };
      "resources"?: {
        [key: string]: {
          "count"?: number;
          "cpu": number | string;
          "memory": number | string;
          "storage"?: number | string;
        };
      };
      "rules"?: {
        [key: string]: {
          "max_threshold": number;
          "min_threshold"?: number;
          "resource_types"?: Array<string>;
        };
      };
      "scaleInIntervalSeconds"?: number;
      "scaleOutIntervalSeconds"?: number;
    };
    "tikv"?: {
      "external"?: {
        "endpoint"?: {
          "host": string;
          "path": string;
          "port": number;
          "tlsSecret"?: {
            "name": string;
            "namespace": string;
          };
        };
        "maxReplicas": number;
      };
      "resources"?: {
        [key: string]: {
          "count"?: number;
          "cpu": number | string;
          "memory": number | string;
          "storage"?: number | string;
        };
      };
      "rules"?: {
        [key: string]: {
          "max_threshold": number;
          "min_threshold"?: number;
          "resource_types"?: Array<string>;
        };
      };
      "scaleInIntervalSeconds"?: number;
      "scaleOutIntervalSeconds"?: number;
    };
  };
  "status"?: {
    "tidb"?: {
      [key: string]: {
        "lastAutoScalingTimestamp"?: string;
      };
    };
    "tikv"?: {
      [key: string]: {
        "lastAutoScalingTimestamp"?: string;
      };
    };
  };
}

export class TidbClusterAutoScaler extends Model<ITidbClusterAutoScaler> implements ITidbClusterAutoScaler {
  "apiVersion": ITidbClusterAutoScaler["apiVersion"];
  "kind": ITidbClusterAutoScaler["kind"];
  "metadata": ITidbClusterAutoScaler["metadata"];
  "spec": ITidbClusterAutoScaler["spec"];
  "status"?: ITidbClusterAutoScaler["status"];

static apiVersion: ITidbClusterAutoScaler["apiVersion"] = "pingcap.com/v1alpha1";
static kind: ITidbClusterAutoScaler["kind"] = "TidbClusterAutoScaler";
static is = createTypeMetaGuard<ITidbClusterAutoScaler>(TidbClusterAutoScaler);

constructor(data?: ModelData<ITidbClusterAutoScaler>) {
  super();

  this.setDefinedProps({
    apiVersion: TidbClusterAutoScaler.apiVersion,
    kind: TidbClusterAutoScaler.kind,
    ...data
  } as ITidbClusterAutoScaler);
}
}


setValidateFunc(TidbClusterAutoScaler, validate as ValidateFunc<ITidbClusterAutoScaler>);
