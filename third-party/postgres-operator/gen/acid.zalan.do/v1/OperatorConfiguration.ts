import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AcidZalanDoV1OperatorConfiguration";

export interface IOperatorConfiguration {
  "kind": "OperatorConfiguration";
  "apiVersion": "acid.zalan.do/v1";
  "configuration": {
    "crd_categories"?: Array<string>;
    "docker_image"?: string;
    "enable_crd_registration"?: boolean;
    /**
     * deprecated
     */
    "enable_crd_validation"?: boolean;
    "enable_lazy_spilo_upgrade"?: boolean;
    "enable_pgversion_env_var"?: boolean;
    "enable_shm_volume"?: boolean;
    "enable_spilo_wal_path_compat"?: boolean;
    "enable_team_id_clustername_prefix"?: boolean;
    "etcd_host"?: string;
    "ignore_instance_limits_annotation_key"?: string;
    "kubernetes_use_configmaps"?: boolean;
    /**
     * -1 = disabled
     */
    "max_instances"?: number;
    /**
     * -1 = disabled
     */
    "min_instances"?: number;
    "resync_period"?: string;
    "repair_period"?: string;
    "set_memory_request_to_limit"?: boolean;
    "sidecar_docker_images"?: {
      [key: string]: string;
    };
    "sidecars"?: Array<{
    }>;
    "workers"?: number;
    "users"?: {
      "additional_owner_roles"?: Array<string>;
      "enable_password_rotation"?: boolean;
      "password_rotation_interval"?: number;
      "password_rotation_user_retention"?: number;
      "replication_username"?: string;
      "super_username"?: string;
    };
    "major_version_upgrade"?: {
      "major_version_upgrade_mode"?: string;
      "major_version_upgrade_team_allow_list"?: Array<string>;
      "minimal_major_version"?: string;
      "target_major_version"?: string;
    };
    "kubernetes"?: {
      "additional_pod_capabilities"?: Array<string>;
      "cluster_domain"?: string;
      "cluster_labels"?: {
        [key: string]: string;
      };
      "cluster_name_label"?: string;
      "custom_pod_annotations"?: {
        [key: string]: string;
      };
      "delete_annotation_date_key"?: string;
      "delete_annotation_name_key"?: string;
      "downscaler_annotations"?: Array<string>;
      "enable_cross_namespace_secret"?: boolean;
      "enable_finalizers"?: boolean;
      "enable_init_containers"?: boolean;
      "enable_persistent_volume_claim_deletion"?: boolean;
      "enable_pod_antiaffinity"?: boolean;
      "enable_pod_disruption_budget"?: boolean;
      "enable_readiness_probe"?: boolean;
      "enable_sidecars"?: boolean;
      "ignored_annotations"?: Array<string>;
      "infrastructure_roles_secret_name"?: string;
      "infrastructure_roles_secrets"?: Array<{
        "secretname": string;
        "userkey": string;
        "passwordkey": string;
        "rolekey"?: string;
        "defaultuservalue"?: string;
        "defaultrolevalue"?: string;
        "details"?: string;
        "template"?: boolean;
      }>;
      "inherited_annotations"?: Array<string>;
      "inherited_labels"?: Array<string>;
      "master_pod_move_timeout"?: string;
      "node_readiness_label"?: {
        [key: string]: string;
      };
      "node_readiness_label_merge"?: "AND" | "OR";
      "oauth_token_secret_name"?: string;
      "pdb_name_format"?: string;
      "persistent_volume_claim_retention_policy"?: {
        "when_deleted"?: "delete" | "retain";
        "when_scaled"?: "delete" | "retain";
      };
      "pod_antiaffinity_preferred_during_scheduling"?: boolean;
      "pod_antiaffinity_topology_key"?: string;
      "pod_environment_configmap"?: string;
      "pod_environment_secret"?: string;
      "pod_management_policy"?: "ordered_ready" | "parallel";
      "pod_priority_class_name"?: string;
      "pod_role_label"?: string;
      "pod_service_account_definition"?: string;
      "pod_service_account_name"?: string;
      "pod_service_account_role_binding_definition"?: string;
      "pod_terminate_grace_period"?: string;
      "secret_name_template"?: string;
      "share_pgsocket_with_sidecars"?: boolean;
      "spilo_allow_privilege_escalation"?: boolean;
      "spilo_runasuser"?: number;
      "spilo_runasgroup"?: number;
      "spilo_fsgroup"?: number;
      "spilo_privileged"?: boolean;
      "storage_resize_mode"?: "ebs" | "mixed" | "pvc" | "off";
      "toleration"?: {
        [key: string]: string;
      };
      "watched_namespace"?: string;
    };
    "postgres_pod_resources"?: {
      "default_cpu_limit"?: string;
      "default_cpu_request"?: string;
      "default_memory_limit"?: string;
      "default_memory_request"?: string;
      "max_cpu_request"?: string;
      "max_memory_request"?: string;
      "min_cpu_limit"?: string;
      "min_memory_limit"?: string;
    };
    "timeouts"?: {
      "patroni_api_check_interval"?: string;
      "patroni_api_check_timeout"?: string;
      "pod_label_wait_timeout"?: string;
      "pod_deletion_wait_timeout"?: string;
      "ready_wait_interval"?: string;
      "ready_wait_timeout"?: string;
      "resource_check_interval"?: string;
      "resource_check_timeout"?: string;
    };
    "load_balancer"?: {
      "custom_service_annotations"?: {
        [key: string]: string;
      };
      "db_hosted_zone"?: string;
      "enable_master_load_balancer"?: boolean;
      "enable_master_pooler_load_balancer"?: boolean;
      "enable_replica_load_balancer"?: boolean;
      "enable_replica_pooler_load_balancer"?: boolean;
      "external_traffic_policy"?: "Cluster" | "Local";
      "master_dns_name_format"?: string;
      "master_legacy_dns_name_format"?: string;
      "replica_dns_name_format"?: string;
      "replica_legacy_dns_name_format"?: string;
    };
    "aws_or_gcp"?: {
      "additional_secret_mount"?: string;
      "additional_secret_mount_path"?: string;
      "aws_region"?: string;
      "enable_ebs_gp3_migration"?: boolean;
      "enable_ebs_gp3_migration_max_size"?: number;
      "gcp_credentials"?: string;
      "kube_iam_role"?: string;
      "log_s3_bucket"?: string;
      "wal_az_storage_account"?: string;
      "wal_gs_bucket"?: string;
      "wal_s3_bucket"?: string;
    };
    "logical_backup"?: {
      "logical_backup_azure_storage_account_name"?: string;
      "logical_backup_azure_storage_container"?: string;
      "logical_backup_azure_storage_account_key"?: string;
      "logical_backup_cpu_limit"?: string;
      "logical_backup_cpu_request"?: string;
      "logical_backup_docker_image"?: string;
      "logical_backup_google_application_credentials"?: string;
      "logical_backup_job_prefix"?: string;
      "logical_backup_memory_limit"?: string;
      "logical_backup_memory_request"?: string;
      "logical_backup_provider"?: "az" | "gcs" | "s3";
      "logical_backup_s3_access_key_id"?: string;
      "logical_backup_s3_bucket"?: string;
      "logical_backup_s3_endpoint"?: string;
      "logical_backup_s3_region"?: string;
      "logical_backup_s3_secret_access_key"?: string;
      "logical_backup_s3_sse"?: string;
      "logical_backup_s3_retention_time"?: string;
      "logical_backup_schedule"?: string;
      "logical_backup_cronjob_environment_secret"?: string;
    };
    "debug"?: {
      "debug_logging"?: boolean;
      "enable_database_access"?: boolean;
    };
    "teams_api"?: {
      "enable_admin_role_for_users"?: boolean;
      "enable_postgres_team_crd"?: boolean;
      "enable_postgres_team_crd_superusers"?: boolean;
      "enable_team_member_deprecation"?: boolean;
      "enable_team_superuser"?: boolean;
      "enable_teams_api"?: boolean;
      "pam_configuration"?: string;
      "pam_role_name"?: string;
      "postgres_superuser_teams"?: Array<string>;
      "protected_role_names"?: Array<string>;
      "role_deletion_suffix"?: string;
      "team_admin_role"?: string;
      "team_api_role_configuration"?: {
        [key: string]: string;
      };
      "teams_api_url"?: string;
    };
    "logging_rest_api"?: {
      "api_port"?: number;
      "cluster_history_entries"?: number;
      "ring_log_lines"?: number;
    };
    "scalyr"?: {
      "scalyr_api_key"?: string;
      "scalyr_cpu_limit"?: string;
      "scalyr_cpu_request"?: string;
      "scalyr_image"?: string;
      "scalyr_memory_limit"?: string;
      "scalyr_memory_request"?: string;
      "scalyr_server_url"?: string;
    };
    "connection_pooler"?: {
      "connection_pooler_schema"?: string;
      "connection_pooler_user"?: string;
      "connection_pooler_image"?: string;
      "connection_pooler_max_db_connections"?: number;
      "connection_pooler_mode"?: "session" | "transaction";
      "connection_pooler_number_of_instances"?: number;
      "connection_pooler_default_cpu_limit"?: string;
      "connection_pooler_default_cpu_request"?: string;
      "connection_pooler_default_memory_limit"?: string;
      "connection_pooler_default_memory_request"?: string;
    };
    "patroni"?: {
      "enable_patroni_failsafe_mode"?: boolean;
    };
  };
  "status"?: {
    [key: string]: string;
  };
  "metadata"?: IObjectMeta;
}

export class OperatorConfiguration extends Model<IOperatorConfiguration> implements IOperatorConfiguration {
  "kind": IOperatorConfiguration["kind"];
  "apiVersion": IOperatorConfiguration["apiVersion"];
  "configuration": IOperatorConfiguration["configuration"];
  "status"?: IOperatorConfiguration["status"];
  "metadata"?: IOperatorConfiguration["metadata"];

static apiVersion: IOperatorConfiguration["apiVersion"] = "acid.zalan.do/v1";
static kind: IOperatorConfiguration["kind"] = "OperatorConfiguration";
static is = createTypeMetaGuard<IOperatorConfiguration>(OperatorConfiguration);

constructor(data?: ModelData<IOperatorConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: OperatorConfiguration.apiVersion,
    kind: OperatorConfiguration.kind,
    ...data
  } as IOperatorConfiguration);
}
}


setValidateFunc(OperatorConfiguration, validate as ValidateFunc<IOperatorConfiguration>);
