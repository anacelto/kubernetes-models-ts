import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AcidZalanDoV1Postgresql";

export interface Ipostgresql {
  "kind": "postgresql";
  "apiVersion": "acid.zalan.do/v1";
  "spec": {
    "additionalVolumes"?: Array<{
      "name": string;
      "mountPath": string;
      "targetContainers"?: Array<string>;
      "volumeSource": {
      };
      "subPath"?: string;
    }>;
    "allowedSourceRanges"?: Array<string>;
    "clone"?: {
      "cluster": string;
      "s3_endpoint"?: string;
      "s3_access_key_id"?: string;
      "s3_secret_access_key"?: string;
      "s3_force_path_style"?: boolean;
      "s3_wal_path"?: string;
      "timestamp"?: string;
      "uid"?: string;
    };
    "connectionPooler"?: {
      "dockerImage"?: string;
      "maxDBConnections"?: number;
      "mode"?: "session" | "transaction";
      "numberOfInstances"?: number;
      "resources"?: {
        "limits"?: {
          "cpu"?: string;
          "memory"?: string;
        };
        "requests"?: {
          "cpu"?: string;
          "memory"?: string;
        };
      };
      "schema"?: string;
      "user"?: string;
    };
    "databases"?: {
      [key: string]: string;
    };
    "dockerImage"?: string;
    "enableConnectionPooler"?: boolean;
    "enableReplicaConnectionPooler"?: boolean;
    "enableLogicalBackup"?: boolean;
    "enableMasterLoadBalancer"?: boolean;
    "enableMasterPoolerLoadBalancer"?: boolean;
    "enableReplicaLoadBalancer"?: boolean;
    "enableReplicaPoolerLoadBalancer"?: boolean;
    "enableShmVolume"?: boolean;
    "env"?: Array<{
    }>;
    /**
     * deprecated
     */
    "init_containers"?: Array<{
    }>;
    "initContainers"?: Array<{
    }>;
    "logicalBackupSchedule"?: string;
    "maintenanceWindows"?: Array<string>;
    "masterServiceAnnotations"?: {
      [key: string]: string;
    };
    "nodeAffinity"?: {
      "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
        "preference": {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchFields"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
        };
        "weight": number;
      }>;
      "requiredDuringSchedulingIgnoredDuringExecution"?: {
        "nodeSelectorTerms": Array<{
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchFields"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
        }>;
      };
    };
    "numberOfInstances": number;
    "patroni"?: {
      "failsafe_mode"?: boolean;
      "initdb"?: {
        [key: string]: string;
      };
      "loop_wait"?: number;
      "maximum_lag_on_failover"?: number;
      "pg_hba"?: Array<string>;
      "retry_timeout"?: number;
      "slots"?: {
        [key: string]: {
          [key: string]: string;
        };
      };
      "synchronous_mode"?: boolean;
      "synchronous_mode_strict"?: boolean;
      "synchronous_node_count"?: number;
      "ttl"?: number;
    };
    "podAnnotations"?: {
      [key: string]: string;
    };
    /**
     * deprecated
     */
    "pod_priority_class_name"?: string;
    "podPriorityClassName"?: string;
    "postgresql": {
      "version": "11" | "12" | "13" | "14" | "15" | "16";
      "parameters"?: {
        [key: string]: string;
      };
    };
    "preparedDatabases"?: {
      [key: string]: {
        "defaultUsers"?: boolean;
        "extensions"?: {
          [key: string]: string;
        };
        "schemas"?: {
          [key: string]: {
            "defaultUsers"?: boolean;
            "defaultRoles"?: boolean;
          };
        };
        "secretNamespace"?: string;
      };
    };
    /**
     * deprecated
     */
    "replicaLoadBalancer"?: boolean;
    "replicaServiceAnnotations"?: {
      [key: string]: string;
    };
    "resources"?: {
      "limits"?: {
        "cpu"?: string;
        "memory"?: string;
        "hugepages-2Mi"?: string;
        "hugepages-1Gi"?: string;
      };
      "requests"?: {
        "cpu"?: string;
        "memory"?: string;
        "hugepages-2Mi"?: string;
        "hugepages-1Gi"?: string;
      };
    };
    "schedulerName"?: string;
    "serviceAnnotations"?: {
      [key: string]: string;
    };
    "sidecars"?: Array<{
    }>;
    "spiloRunAsUser"?: number;
    "spiloRunAsGroup"?: number;
    "spiloFSGroup"?: number;
    "standby"?: {
      "s3_wal_path"?: string;
      "gs_wal_path"?: string;
      "standby_host"?: string;
      "standby_port"?: string;
    } & ({
      "s3_wal_path": string;
      "gs_wal_path"?: string;
      "standby_host"?: string;
      "standby_port"?: string;
    } | {
      "s3_wal_path"?: string;
      "gs_wal_path": string;
      "standby_host"?: string;
      "standby_port"?: string;
    } | {
      "s3_wal_path"?: string;
      "gs_wal_path"?: string;
      "standby_host": string;
      "standby_port"?: string;
    });
    "streams"?: Array<{
      "applicationId": string;
      "batchSize"?: number;
      "database": string;
      "enableRecovery"?: boolean;
      "filter"?: {
        [key: string]: string;
      };
      "tables": {
        [key: string]: {
          "eventType": string;
          "idColumn"?: string;
          "payloadColumn"?: string;
          "recoveryEventType"?: string;
        };
      };
    }>;
    "teamId": string;
    "tls"?: {
      "secretName": string;
      "certificateFile"?: string;
      "privateKeyFile"?: string;
      "caFile"?: string;
      "caSecretName"?: string;
    };
    "tolerations"?: Array<{
      "key"?: string;
      "operator"?: "Equal" | "Exists";
      "value"?: string;
      "effect"?: "NoExecute" | "NoSchedule" | "PreferNoSchedule";
      "tolerationSeconds"?: number;
    }>;
    /**
     * deprecated
     */
    "useLoadBalancer"?: boolean;
    "users"?: {
      [key: string]: Array<"bypassrls" | "BYPASSRLS" | "nobypassrls" | "NOBYPASSRLS" | "createdb" | "CREATEDB" | "nocreatedb" | "NOCREATEDB" | "createrole" | "CREATEROLE" | "nocreaterole" | "NOCREATEROLE" | "inherit" | "INHERIT" | "noinherit" | "NOINHERIT" | "login" | "LOGIN" | "nologin" | "NOLOGIN" | "replication" | "REPLICATION" | "noreplication" | "NOREPLICATION" | "superuser" | "SUPERUSER" | "nosuperuser" | "NOSUPERUSER">;
    };
    "usersIgnoringSecretRotation"?: Array<string>;
    "usersWithInPlaceSecretRotation"?: Array<string>;
    "usersWithSecretRotation"?: Array<string>;
    "volume": {
      "iops"?: number;
      "selector"?: {
        "matchExpressions"?: Array<{
          "key": string;
          "operator": "DoesNotExist" | "Exists" | "In" | "NotIn";
          "values"?: Array<string>;
        }>;
        "matchLabels"?: {
        };
      };
      "size": string;
      "storageClass"?: string;
      "subPath"?: string;
      "throughput"?: number;
    };
  };
  "status"?: {
    [key: string]: string;
  };
  "metadata"?: IObjectMeta;
}

export class postgresql extends Model<Ipostgresql> implements Ipostgresql {
  "kind": Ipostgresql["kind"];
  "apiVersion": Ipostgresql["apiVersion"];
  "spec": Ipostgresql["spec"];
  "status"?: Ipostgresql["status"];
  "metadata"?: Ipostgresql["metadata"];

static apiVersion: Ipostgresql["apiVersion"] = "acid.zalan.do/v1";
static kind: Ipostgresql["kind"] = "postgresql";
static is = createTypeMetaGuard<Ipostgresql>(postgresql);

constructor(data?: ModelData<Ipostgresql>) {
  super();

  this.setDefinedProps({
    apiVersion: postgresql.apiVersion,
    kind: postgresql.kind,
    ...data
  } as Ipostgresql);
}
}


setValidateFunc(postgresql, validate as ValidateFunc<Ipostgresql>);
