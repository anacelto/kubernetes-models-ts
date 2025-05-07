import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1WorkflowTaskResult";

export interface IWorkflowTaskResult {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "WorkflowTaskResult";
  "message"?: string;
  "metadata": IObjectMeta;
  "outputs"?: {
    "artifacts"?: Array<{
      "archive"?: {
        "none"?: {
        };
        "tar"?: {
          "compressionLevel"?: number;
        };
        "zip"?: {
        };
      };
      "archiveLogs"?: boolean;
      "artifactGC"?: {
        "podMetadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "serviceAccountName"?: string;
        "strategy"?: "" | "OnWorkflowCompletion" | "OnWorkflowDeletion" | "Never";
      };
      "artifactory"?: {
        "passwordSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "url": string;
        "usernameSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "azure"?: {
        "accountKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "blob": string;
        "container": string;
        "endpoint": string;
        "useSDKCreds"?: boolean;
      };
      "deleted"?: boolean;
      "from"?: string;
      "fromExpression"?: string;
      "gcs"?: {
        "bucket"?: string;
        "key": string;
        "serviceAccountKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "git"?: {
        "branch"?: string;
        "depth"?: number;
        "disableSubmodules"?: boolean;
        "fetch"?: Array<string>;
        "insecureIgnoreHostKey"?: boolean;
        "passwordSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "repo": string;
        "revision"?: string;
        "singleBranch"?: boolean;
        "sshPrivateKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "usernameSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
      "globalName"?: string;
      "hdfs"?: {
        "addresses"?: Array<string>;
        "force"?: boolean;
        "hdfsUser"?: string;
        "krbCCacheSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "krbConfigConfigMap"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "krbKeytabSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "krbRealm"?: string;
        "krbServicePrincipalName"?: string;
        "krbUsername"?: string;
        "path": string;
      };
      "http"?: {
        "auth"?: {
          "basicAuth"?: {
            "passwordSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "usernameSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
          };
          "clientCert"?: {
            "clientCertSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "clientKeySecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
          };
          "oauth2"?: {
            "clientIDSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "clientSecretSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "endpointParams"?: Array<{
              "key": string;
              "value"?: string;
            }>;
            "scopes"?: Array<string>;
            "tokenURLSecret"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
          };
        };
        "headers"?: Array<{
          "name": string;
          "value": string;
        }>;
        "url": string;
      };
      "mode"?: number;
      "name": string;
      "optional"?: boolean;
      "oss"?: {
        "accessKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "bucket"?: string;
        "createBucketIfNotPresent"?: boolean;
        "endpoint"?: string;
        "key": string;
        "lifecycleRule"?: {
          "markDeletionAfterDays"?: number;
          "markInfrequentAccessAfterDays"?: number;
        };
        "secretKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "securityToken"?: string;
        "useSDKCreds"?: boolean;
      };
      "path"?: string;
      "raw"?: {
        "data": string;
      };
      "recurseMode"?: boolean;
      "s3"?: {
        "accessKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "bucket"?: string;
        "caSecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "createBucketIfNotPresent"?: {
          "objectLocking"?: boolean;
        };
        "encryptionOptions"?: {
          "enableEncryption"?: boolean;
          "kmsEncryptionContext"?: string;
          "kmsKeyId"?: string;
          "serverSideCustomerKeySecret"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
        "endpoint"?: string;
        "insecure"?: boolean;
        "key"?: string;
        "region"?: string;
        "roleARN"?: string;
        "secretKeySecret"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "useSDKCreds"?: boolean;
      };
      "subPath"?: string;
    }>;
    "exitCode"?: string;
    "parameters"?: Array<{
      "default"?: string;
      "description"?: string;
      "enum"?: Array<string>;
      "globalName"?: string;
      "name": string;
      "value"?: string;
      "valueFrom"?: {
        "configMapKeyRef"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "default"?: string;
        "event"?: string;
        "expression"?: string;
        "jqFilter"?: string;
        "jsonPath"?: string;
        "parameter"?: string;
        "path"?: string;
        "supplied"?: {
        };
      };
    }>;
    "result"?: string;
  };
  "phase"?: string;
  "progress"?: string;
}

export class WorkflowTaskResult extends Model<IWorkflowTaskResult> implements IWorkflowTaskResult {
  "apiVersion": IWorkflowTaskResult["apiVersion"];
  "kind": IWorkflowTaskResult["kind"];
  "message"?: IWorkflowTaskResult["message"];
  "metadata": IWorkflowTaskResult["metadata"];
  "outputs"?: IWorkflowTaskResult["outputs"];
  "phase"?: IWorkflowTaskResult["phase"];
  "progress"?: IWorkflowTaskResult["progress"];

static apiVersion: IWorkflowTaskResult["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflowTaskResult["kind"] = "WorkflowTaskResult";
static is = createTypeMetaGuard<IWorkflowTaskResult>(WorkflowTaskResult);

constructor(data?: ModelData<IWorkflowTaskResult>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkflowTaskResult.apiVersion,
    kind: WorkflowTaskResult.kind,
    ...data
  } as IWorkflowTaskResult);
}
}


setValidateFunc(WorkflowTaskResult, validate as ValidateFunc<IWorkflowTaskResult>);
