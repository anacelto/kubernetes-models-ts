import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpsKubedbComV1alpha1ElasticsearchOpsRequest";

export interface IElasticsearchOpsRequest {
  "apiVersion": "ops.kubedb.com/v1alpha1";
  "kind": "ElasticsearchOpsRequest";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "apply"?: "IfReady" | "Always";
    "configuration"?: {
      "applyConfig"?: {
        [key: string]: string;
      };
      "configSecret"?: {
        "name"?: string;
      };
      "removeCustomConfig"?: boolean;
      "removeSecureCustomConfig"?: boolean;
      "secureConfigSecret"?: {
        "name"?: string;
      };
    };
    "databaseRef": {
      "name"?: string;
    };
    "horizontalScaling"?: {
      "node"?: number;
      "topology"?: {
        "coordinating"?: number;
        "data"?: number;
        "dataCold"?: number;
        "dataContent"?: number;
        "dataFrozen"?: number;
        "dataHot"?: number;
        "dataWarm"?: number;
        "ingest"?: number;
        "master"?: number;
        "ml"?: number;
        "transform"?: number;
      };
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
    "type": "Upgrade" | "UpdateVersion" | "HorizontalScaling" | "VerticalScaling" | "VolumeExpansion" | "Restart" | "Reconfigure" | "ReconfigureTLS";
    "updateVersion"?: {
      "targetVersion"?: string;
    };
    "upgrade"?: {
      "targetVersion"?: string;
    };
    "verticalScaling"?: {
      "exporter"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "node"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "topology"?: {
        "coordinating"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "data"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "dataCold"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "dataContent"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "dataFrozen"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "dataHot"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "dataWarm"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "ingest"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "master"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "ml"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "transform"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
      };
    };
    "volumeExpansion"?: {
      "mode"?: "Offline" | "Online";
      "node"?: number | string;
      "topology"?: {
        "coordinating"?: number | string;
        "data"?: number | string;
        "dataCold"?: number | string;
        "dataContent"?: number | string;
        "dataFrozen"?: number | string;
        "dataHot"?: number | string;
        "dataWarm"?: number | string;
        "ingest"?: number | string;
        "master"?: number | string;
        "ml"?: number | string;
        "transform"?: number | string;
      };
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

export class ElasticsearchOpsRequest extends Model<IElasticsearchOpsRequest> implements IElasticsearchOpsRequest {
  "apiVersion": IElasticsearchOpsRequest["apiVersion"];
  "kind": IElasticsearchOpsRequest["kind"];
  "metadata"?: IElasticsearchOpsRequest["metadata"];
  "spec"?: IElasticsearchOpsRequest["spec"];
  "status"?: IElasticsearchOpsRequest["status"];

static apiVersion: IElasticsearchOpsRequest["apiVersion"] = "ops.kubedb.com/v1alpha1";
static kind: IElasticsearchOpsRequest["kind"] = "ElasticsearchOpsRequest";
static is = createTypeMetaGuard<IElasticsearchOpsRequest>(ElasticsearchOpsRequest);

constructor(data?: ModelData<IElasticsearchOpsRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: ElasticsearchOpsRequest.apiVersion,
    kind: ElasticsearchOpsRequest.kind,
    ...data
  } as IElasticsearchOpsRequest);
}
}


setValidateFunc(ElasticsearchOpsRequest, validate as ValidateFunc<IElasticsearchOpsRequest>);
