import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1MongoDBOpsRequest";

export interface IMongoDBOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "MongoDBOpsRequest";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "apply"?: "IfReady" | "Always";
    "configuration"?: {
      "arbiter"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "configServer"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "hidden"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "mongos"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "replicaSet"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "shard"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
      "standalone"?: {
        "applyConfig"?: {
          [key: string]: string;
        };
        "configSecret"?: {
          "name"?: string;
        };
        "inlineConfig"?: string;
        "removeCustomConfig"?: boolean;
      };
    };
    "databaseRef": {
      "name"?: string;
    };
    "horizontalScaling"?: {
      "configServer"?: {
        "replicas"?: number;
      };
      "hidden"?: {
        "replicas"?: number;
      };
      "mongos"?: {
        "replicas"?: number;
      };
      "replicas"?: number;
      "shard"?: {
        "replicas"?: number;
        "shards"?: number;
      };
    };
    "readinessCriteria"?: {
      "objectsCountDiffPercentage"?: number;
      "oplogMaxLagSeconds"?: number;
    };
    "reprovision"?: {
    };
    "restart"?: {
    };
    "timeout"?: string;
    "tls"?: {
      "certificates"?: Array<{
        "alias": string;
        "dnsNames"?: Array<string>;
        "duration"?: string;
        "emailAddresses"?: Array<string>;
        "ipAddresses"?: Array<string>;
        "issuerRef"?: {
          "apiGroup"?: string;
          "kind": string;
          "name": string;
        };
        "privateKey"?: {
          "encoding"?: "PKCS1" | "PKCS8";
        };
        "renewBefore"?: string;
        "secretName"?: string;
        "subject"?: {
          "countries"?: Array<string>;
          "localities"?: Array<string>;
          "organizationalUnits"?: Array<string>;
          "organizations"?: Array<string>;
          "postalCodes"?: Array<string>;
          "provinces"?: Array<string>;
          "serialNumber"?: string;
          "streetAddresses"?: Array<string>;
        };
        "uris"?: Array<string>;
      }>;
      "issuerRef"?: {
        "apiGroup"?: string;
        "kind": string;
        "name": string;
      };
      "remove"?: boolean;
      "rotateCertificates"?: boolean;
    };
    "type": "Upgrade" | "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "VolumeExpansion" | "Restart" | "Reconfigure" | "ReconfigureTLS" | "Reprovision";
    "updateVersion"?: {
      "targetVersion"?: string;
    };
    "upgrade"?: {
      "targetVersion"?: string;
    };
    "verticalScaling"?: {
      "arbiter"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "configServer"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "coordinator"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "exporter"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "hidden"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "mongos"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "replicaSet"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "shard"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "standalone"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
    };
    "volumeExpansion"?: {
      "configServer"?: number | string;
      "hidden"?: number | string;
      "mode"?: "Offline" | "Online";
      "replicaSet"?: number | string;
      "shard"?: number | string;
      "standalone"?: number | string;
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
    "phase"?: "Pending" | "Progressing" | "Successful" | "WaitingForApproval" | "Failed" | "Approved" | "Denied" | "Skipped";
  };
}

export class MongoDBOpsRequest extends Model<IMongoDBOpsRequest> implements IMongoDBOpsRequest {
  "apiVersion": IMongoDBOpsRequest["apiVersion"];
  "kind": IMongoDBOpsRequest["kind"];
  "metadata"?: IMongoDBOpsRequest["metadata"];
  "spec"?: IMongoDBOpsRequest["spec"];
  "status"?: IMongoDBOpsRequest["status"];

static apiVersion: IMongoDBOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IMongoDBOpsRequest["kind"] = "MongoDBOpsRequest";
static is = createTypeMetaGuard<IMongoDBOpsRequest>(MongoDBOpsRequest);

constructor(data?: ModelData<IMongoDBOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: MongoDBOpsRequest.apiVersion,
    kind: MongoDBOpsRequest.kind,
    ...data
  } as IMongoDBOpsRequest);
}
}


setValidateFunc(MongoDBOpsRequest, validate as ValidateFunc<IMongoDBOpsRequest>);
