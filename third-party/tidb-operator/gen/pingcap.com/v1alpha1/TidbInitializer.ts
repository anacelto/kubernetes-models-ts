import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PingcapComV1alpha1TidbInitializer";

export interface ITidbInitializer {
  "apiVersion": "pingcap.com/v1alpha1";
  "kind": "TidbInitializer";
  "metadata": IObjectMeta;
  "spec": {
    "cluster": {
      "clusterDomain"?: string;
      "name": string;
      "namespace"?: string;
    };
    "image": string;
    "imagePullPolicy"?: string;
    "imagePullSecrets"?: Array<{
      "name"?: string;
    }>;
    "initSql"?: string;
    "initSqlConfigMap"?: string;
    "passwordSecret"?: string;
    "permitHost"?: string;
    "podSecurityContext"?: {
      "fsGroup"?: number;
      "fsGroupChangePolicy"?: string;
      "runAsGroup"?: number;
      "runAsNonRoot"?: boolean;
      "runAsUser"?: number;
      "seLinuxOptions"?: {
        "level"?: string;
        "role"?: string;
        "type"?: string;
        "user"?: string;
      };
      "seccompProfile"?: {
        "localhostProfile"?: string;
        "type": string;
      };
      "supplementalGroups"?: Array<number>;
      "sysctls"?: Array<{
        "name": string;
        "value": string;
      }>;
      "windowsOptions"?: {
        "gmsaCredentialSpec"?: string;
        "gmsaCredentialSpecName"?: string;
        "runAsUserName"?: string;
      };
    };
    "resources"?: {
      "limits"?: {
        [key: string]: number | string;
      };
      "requests"?: {
        [key: string]: number | string;
      };
    };
    "timezone"?: string;
    "tlsClientSecretName"?: string;
  };
  "status"?: {
    "active"?: number;
    "completionTime"?: string;
    "conditions"?: Array<{
      "lastProbeTime"?: string;
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
    "failed"?: number;
    "phase"?: string;
    "startTime"?: string;
    "succeeded"?: number;
  };
}

export class TidbInitializer extends Model<ITidbInitializer> implements ITidbInitializer {
  "apiVersion": ITidbInitializer["apiVersion"];
  "kind": ITidbInitializer["kind"];
  "metadata": ITidbInitializer["metadata"];
  "spec": ITidbInitializer["spec"];
  "status"?: ITidbInitializer["status"];

static apiVersion: ITidbInitializer["apiVersion"] = "pingcap.com/v1alpha1";
static kind: ITidbInitializer["kind"] = "TidbInitializer";
static is = createTypeMetaGuard<ITidbInitializer>(TidbInitializer);

constructor(data?: ModelData<ITidbInitializer>) {
  super();

  this.setDefinedProps({
    apiVersion: TidbInitializer.apiVersion,
    kind: TidbInitializer.kind,
    ...data
  } as ITidbInitializer);
}
}


setValidateFunc(TidbInitializer, validate as ValidateFunc<ITidbInitializer>);
