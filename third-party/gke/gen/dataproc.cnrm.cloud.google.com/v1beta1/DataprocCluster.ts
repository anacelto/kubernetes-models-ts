import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DataprocCnrmCloudGoogleComV1beta1DataprocCluster";

export interface IDataprocCluster {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dataproc.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DataprocCluster";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The cluster config. Note that Dataproc may set default values, and values may change when clusters are updated.
     */
    "config"?: {
      /**
       * Immutable. Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
       */
      "autoscalingConfig"?: {
        /**
         * Immutable.
         */
        "policyRef"?: {
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` \* `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
           * 
           * Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`).
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
      };
      /**
       * Immutable. Optional. The config for Dataproc metrics.
       */
      "dataprocMetricConfig"?: {
        /**
         * Immutable. Required. Metrics sources to enable.
         */
        "metrics": Array<{
          /**
           * Immutable. Optional. Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course (for the `SPARK` metric source, any [Spark metric] (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified). Provide metrics in the following format: `METRIC_SOURCE:INSTANCE:GROUP:METRIC` Use camelcase as appropriate. Examples: ``` yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used ``` Notes: \* Only the specified overridden metrics will be collected for the metric source. For example, if one or more `spark:executive` metrics are listed as metric overrides, other `SPARK` metrics will not be collected. The collection of the default metrics for other OSS metric sources is unaffected. For example, if both `SPARK` andd `YARN` metric sources are enabled, and overrides are provided for Spark metrics only, all default YARN metrics will be collected.
           */
          "metricOverrides"?: Array<string>;
          /**
           * Immutable. Required. Default metrics are collected unless `metricOverrides` are specified for the metric source (see [Available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information). Possible values: METRIC_SOURCE_UNSPECIFIED, MONITORING_AGENT_DEFAULTS, HDFS, SPARK, YARN, SPARK_HISTORY_SERVER, HIVESERVER2
           */
          "metricSource": string;
        }>;
      };
      /**
       * Immutable. Optional. Encryption settings for the cluster.
       */
      "encryptionConfig"?: {
        /**
         * Immutable.
         */
        "gcePdKmsKeyRef"?: {
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
           * 
           * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
      };
      /**
       * Immutable. Optional. Port/endpoint configuration for this cluster
       */
      "endpointConfig"?: {
        /**
         * Immutable. Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
         */
        "enableHttpPortAccess"?: boolean;
      };
      /**
       * Immutable. Optional. The shared Compute Engine config settings for all instances in a cluster.
       */
      "gceClusterConfig"?: {
        /**
         * Immutable. Optional. Confidential Instance Config for clusters using [Confidential VMs](https://cloud.google.com/compute/confidential-vm/docs).
         */
        "confidentialInstanceConfig"?: {
          /**
           * Immutable. Optional. Defines whether the instance should have confidential compute enabled.
           */
          "enableConfidentialCompute"?: boolean;
        };
        /**
         * Immutable. Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
         */
        "internalIPOnly"?: boolean;
        /**
         * Immutable. The Compute Engine metadata entries to add to all instances (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
         */
        "metadata"?: {
          [key: string]: string;
        };
        /**
         * Immutable.
         */
        "networkRef"?: {
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` \* `projects/[project_id]/regions/global/default` \* `default`
           * 
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. Optional. Node Group Affinity for sole-tenant clusters.
         */
        "nodeGroupAffinity"?: {
          /**
           * Immutable.
           */
          "nodeGroupRef": {
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & (Exclude<{
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }> | Exclude<{
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & ({
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } | {
            /**
             * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` \* `node-group-1`
             * 
             * Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
          })>);
        };
        /**
         * Immutable. Optional. The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL
         */
        "privateIPv6GoogleAccess"?: string;
        /**
         * Immutable. Optional. Reservation Affinity for consuming Zonal reservation.
         */
        "reservationAffinity"?: {
          /**
           * Immutable. Optional. Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
           */
          "consumeReservationType"?: string;
          /**
           * Immutable. Optional. Corresponds to the label key of reservation resource.
           */
          "key"?: string;
          /**
           * Immutable. Optional. Corresponds to the label values of reservation resource.
           */
          "values"?: Array<string>;
        };
        /**
         * Immutable.
         */
        "serviceAccountRef"?: {
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
           * 
           * Allowed value: The `email` field of an `IAMServiceAccount` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: \* https://www.googleapis.com/auth/cloud.useraccounts.readonly \* https://www.googleapis.com/auth/devstorage.read_write \* https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: \* https://www.googleapis.com/auth/bigquery \* https://www.googleapis.com/auth/bigtable.admin.table \* https://www.googleapis.com/auth/bigtable.data \* https://www.googleapis.com/auth/devstorage.full_control
         */
        "serviceAccountScopes"?: Array<string>;
        /**
         * Immutable. Optional. Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm).
         */
        "shieldedInstanceConfig"?: {
          /**
           * Immutable. Optional. Defines whether instances have integrity monitoring enabled.
           */
          "enableIntegrityMonitoring"?: boolean;
          /**
           * Immutable. Optional. Defines whether instances have Secure Boot enabled.
           */
          "enableSecureBoot"?: boolean;
          /**
           * Immutable. Optional. Defines whether instances have the vTPM enabled.
           */
          "enableVtpm"?: boolean;
        };
        /**
         * Immutable.
         */
        "subnetworkRef"?: {
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `projects/[project_id]/regions/us-east1/subnetworks/sub0` \* `sub0`
           * 
           * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. The Compute Engine tags to add to all instances (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
         */
        "tags"?: Array<string>;
        /**
         * Immutable. Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]` \* `projects/[project_id]/zones/[zone]` \* `us-central1-f`
         */
        "zone"?: string;
      };
      /**
       * Immutable. Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
       */
      "initializationActions"?: Array<{
        /**
         * Immutable. Required. Cloud Storage URI of executable file.
         */
        "executableFile": string;
        /**
         * Immutable. Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
         */
        "executionTimeout"?: string;
      }>;
      /**
       * Immutable. Optional. Lifecycle setting for the cluster.
       */
      "lifecycleConfig"?: {
        /**
         * Immutable. Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
         */
        "autoDeleteTime"?: string;
        /**
         * Immutable. Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).
         */
        "autoDeleteTtl"?: string;
        /**
         * Immutable. Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).
         */
        "idleDeleteTtl"?: string;
      };
      /**
       * Immutable. Optional. The Compute Engine config settings for the master instance in a cluster.
       */
      "masterConfig"?: {
        /**
         * Immutable. Optional. The Compute Engine accelerator configuration for these instances.
         */
        "accelerators"?: Array<{
          /**
           * Immutable. The number of the accelerator cards of this type exposed to this instance.
           */
          "acceleratorCount"?: number;
          /**
           * Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `nvidia-tesla-k80` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
           */
          "acceleratorType"?: string;
        }>;
        /**
         * Immutable. Optional. Disk option config settings.
         */
        "diskConfig"?: {
          /**
           * Immutable. Optional. Size in GB of the boot disk (default is 500GB).
           */
          "bootDiskSizeGb"?: number;
          /**
           * Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
           */
          "bootDiskType"?: string;
          /**
           * Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance).
           */
          "localSsdInterface"?: string;
          /**
           * Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
           */
          "numLocalSsds"?: number;
        };
        /**
         * Immutable.
         */
        "imageRef"?: {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `n1-standard-2` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
         */
        "machineType"?: string;
        /**
         * Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, \*\*must be set to 3\*\*. For standard cluster [master_config](#FIELDS.master_config) groups, \*\*must be set to 1\*\*.
         */
        "numInstances"?: number;
        /**
         * Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
         */
        "preemptibility"?: string;
      };
      /**
       * Immutable. Optional. Metastore configuration.
       */
      "metastoreConfig"?: {
        /**
         * Immutable.
         */
        "dataprocMetastoreServiceRef": {
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external"?: string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external"?: string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external": string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external": string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external": string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external"?: string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
           */
          "external"?: string;
          /**
           * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
      };
      /**
       * Immutable. Optional. The Compute Engine config settings for additional worker instances in a cluster.
       */
      "secondaryWorkerConfig"?: {
        /**
         * Immutable. Optional. The Compute Engine accelerator configuration for these instances.
         */
        "accelerators"?: Array<{
          /**
           * Immutable. The number of the accelerator cards of this type exposed to this instance.
           */
          "acceleratorCount"?: number;
          /**
           * Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `nvidia-tesla-k80` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
           */
          "acceleratorType"?: string;
        }>;
        /**
         * Immutable. Optional. Disk option config settings.
         */
        "diskConfig"?: {
          /**
           * Immutable. Optional. Size in GB of the boot disk (default is 500GB).
           */
          "bootDiskSizeGb"?: number;
          /**
           * Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
           */
          "bootDiskType"?: string;
          /**
           * Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance).
           */
          "localSsdInterface"?: string;
          /**
           * Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
           */
          "numLocalSsds"?: number;
        };
        /**
         * Immutable.
         */
        "imageRef"?: {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `n1-standard-2` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
         */
        "machineType"?: string;
        /**
         * Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, \*\*must be set to 3\*\*. For standard cluster [master_config](#FIELDS.master_config) groups, \*\*must be set to 1\*\*.
         */
        "numInstances"?: number;
        /**
         * Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
         */
        "preemptibility"?: string;
      };
      /**
       * Immutable. Optional. Security settings for the cluster.
       */
      "securityConfig"?: {
        /**
         * Immutable. Optional. Identity related configuration, including service account based secure multi-tenancy user mappings.
         */
        "identityConfig"?: {
          /**
           * Immutable. Required. Map of user to service account.
           */
          "userServiceAccountMapping": {
            [key: string]: string;
          };
        };
        /**
         * Immutable. Optional. Kerberos related configuration.
         */
        "kerberosConfig"?: {
          /**
           * Immutable. Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
           */
          "crossRealmTrustAdminServer"?: string;
          /**
           * Immutable. Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
           */
          "crossRealmTrustKdc"?: string;
          /**
           * Immutable. Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
           */
          "crossRealmTrustRealm"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
           */
          "crossRealmTrustSharedPassword"?: string;
          /**
           * Immutable. Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.
           */
          "enableKerberos"?: boolean;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
           */
          "kdcDbKey"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
           */
          "keyPassword"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
           */
          "keystore"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.
           */
          "keystorePassword"?: string;
          /**
           * Immutable.
           */
          "kmsKeyRef"?: {
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & (Exclude<{
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }> | Exclude<{
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & ({
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } | {
            /**
             * Optional. The uri of the KMS key used to encrypt various sensitive files.
             * 
             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
          })>);
          /**
           * Immutable. Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
           */
          "realm"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.
           */
          "rootPrincipalPassword"?: string;
          /**
           * Immutable. Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
           */
          "tgtLifetimeHours"?: number;
          /**
           * Immutable. Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
           */
          "truststore"?: string;
          /**
           * Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
           */
          "truststorePassword"?: string;
        };
      };
      /**
       * Immutable. Optional. The config settings for software inside the cluster.
       */
      "softwareConfig"?: {
        /**
         * Immutable. Optional. The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
         */
        "imageVersion"?: string;
        /**
         * Immutable. Optional. The set of components to activate on the cluster.
         */
        "optionalComponents"?: Array<string>;
        /**
         * Immutable. Optional. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings: \* capacity-scheduler: `capacity-scheduler.xml` \* core: `core-site.xml` \* distcp: `distcp-default.xml` \* hdfs: `hdfs-site.xml` \* hive: `hive-site.xml` \* mapred: `mapred-site.xml` \* pig: `pig.properties` \* spark: `spark-defaults.conf` \* yarn: `yarn-site.xml` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
         */
        "properties"?: {
          [key: string]: string;
        };
      };
      /**
       * Immutable.
       */
      "stagingBucketRef"?: {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & (Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }> | Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & ({
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } | {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace": string;
      })>);
      /**
       * Immutable.
       */
      "tempBucketRef"?: {
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & (Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }> | Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & ({
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } | {
        /**
         * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. \*\*This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace": string;
      })>);
      /**
       * Immutable. Optional. The Compute Engine config settings for worker instances in a cluster.
       */
      "workerConfig"?: {
        /**
         * Immutable. Optional. The Compute Engine accelerator configuration for these instances.
         */
        "accelerators"?: Array<{
          /**
           * Immutable. The number of the accelerator cards of this type exposed to this instance.
           */
          "acceleratorCount"?: number;
          /**
           * Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` \* `nvidia-tesla-k80` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
           */
          "acceleratorType"?: string;
        }>;
        /**
         * Immutable. Optional. Disk option config settings.
         */
        "diskConfig"?: {
          /**
           * Immutable. Optional. Size in GB of the boot disk (default is 500GB).
           */
          "bootDiskSizeGb"?: number;
          /**
           * Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
           */
          "bootDiskType"?: string;
          /**
           * Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance).
           */
          "localSsdInterface"?: string;
          /**
           * Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
           */
          "numLocalSsds"?: number;
        };
        /**
         * Immutable.
         */
        "imageRef"?: {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & (Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }> | Exclude<{
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        }, {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } & ({
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace"?: string;
        } | {
          /**
           * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` \* `projects/[project_id]/global/images/[image-id]` \* `image-id` Image family examples. Dataproc will use the most recent image from the family: \* `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` \* `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
           * 
           * Allowed value: The `selfLink` field of a `ComputeImage` resource.
           */
          "external"?: string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          "namespace": string;
        })>);
        /**
         * Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: \* `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` \* `n1-standard-2` \*\*Auto Zone Exception\*\*: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
         */
        "machineType"?: string;
        /**
         * Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, \*\*must be set to 3\*\*. For standard cluster [master_config](#FIELDS.master_config) groups, \*\*must be set to 1\*\*.
         */
        "numInstances"?: number;
        /**
         * Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
         */
        "preemptibility"?: string;
      };
    };
    /**
     * Immutable. The location for the resource, usually a GCP region.
     */
    "location": string;
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef"?: {
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Required. The Google Cloud Platform project ID that the cluster belongs to.
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a [Dataproc-on-GKE cluster](https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.
     */
    "virtualClusterConfig"?: {
      /**
       * Immutable. Optional. Configuration of auxiliary services used by this cluster.
       */
      "auxiliaryServicesConfig"?: {
        /**
         * Immutable. Optional. The Hive Metastore configuration for this workload.
         */
        "metastoreConfig"?: {
          /**
           * Immutable.
           */
          "dataprocMetastoreServiceRef": {
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external"?: string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & (Exclude<{
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external"?: string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external": string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }> | Exclude<{
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external": string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external": string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & ({
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external"?: string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } | {
            /**
             * Required. Resource name of an existing Dataproc Metastore service. Example: \* `projects/[project_id]/locations/[dataproc_region]/services/[service-name]`
             */
            "external"?: string;
            /**
             * [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
          })>);
        };
        /**
         * Immutable. Optional. The Spark History Server configuration for the workload.
         */
        "sparkHistoryServerConfig"?: {
          /**
           * Immutable.
           */
          "dataprocClusterRef"?: {
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & (Exclude<{
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }> | Exclude<{
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & ({
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } | {
            /**
             * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: \* `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
             * 
             * Allowed value: The `selfLink` field of a `DataprocCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
          })>);
        };
      };
      /**
       * Immutable. Required. The configuration for running the Dataproc cluster on Kubernetes.
       */
      "kubernetesClusterConfig": {
        /**
         * Immutable. Required. The configuration for running the Dataproc cluster on GKE.
         */
        "gkeClusterConfig": {
          /**
           * Immutable.
           */
          "gkeClusterTargetRef"?: {
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & (Exclude<{
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }> | Exclude<{
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          }, {
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } & ({
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
          } | {
            /**
             * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
             * 
             * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
          })>);
          /**
           * Immutable. Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` GkeNodePoolTarget.Role. If a `GkeNodePoolTarget` is not specified, Dataproc constructs a `DEFAULT` `GkeNodePoolTarget`. Each role can be given to only one `GkeNodePoolTarget`. All node pools must have the same location settings.
           */
          "nodePoolTarget"?: Array<{
            /**
             * Immutable. Input only. The configuration for the GKE node pool. If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail. If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values. This is an input only field. It will not be returned by the API.
             */
            "nodePoolConfig"?: {
              /**
               * Immutable. Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present.
               */
              "autoscaling"?: {
                /**
                 * Immutable. The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. \*\*Note:\*\* Quota must be sufficient to scale up the cluster.
                 */
                "maxNodeCount"?: number;
                /**
                 * Immutable. The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count.
                 */
                "minNodeCount"?: number;
              };
              /**
               * Immutable. Optional. The node pool configuration.
               */
              "config"?: {
                /**
                 * Immutable. Optional. A list of [hardware accelerators](https://cloud.google.com/compute/docs/gpus) to attach to each node.
                 */
                "accelerators"?: Array<{
                  /**
                   * Immutable. The number of accelerator cards exposed to an instance.
                   */
                  "acceleratorCount"?: number;
                  /**
                   * Immutable. The accelerator type resource namename (see GPUs on Compute Engine).
                   */
                  "acceleratorType"?: string;
                  /**
                   * Immutable. Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
                   */
                  "gpuPartitionSize"?: string;
                }>;
                /**
                 * Immutable. Optional. The [Customer Managed Encryption Key (CMEK)] (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: `projects/KEY_PROJECT_ID/locations/LOCATION/keyRings/RING_NAME/cryptoKeys/KEY_NAME`.
                 */
                "bootDiskKmsKey"?: string;
                /**
                 * Immutable. Optional. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
                 */
                "ephemeralStorageConfig"?: {
                  /**
                   * Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.
                   */
                  "localSsdCount"?: number;
                };
                /**
                 * Immutable. Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see [Adding Local SSDs](https://cloud.google.com/compute/docs/disks/local-ssd)).
                 */
                "localSsdCount"?: number;
                /**
                 * Immutable. Optional. The name of a Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types).
                 */
                "machineType"?: string;
                /**
                 * Immutable. Optional. [Minimum CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge".
                 */
                "minCpuPlatform"?: string;
                /**
                 * Immutable. Optional. Whether the nodes are created as legacy [preemptible VM instances] (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the `CONTROLLER` [role] (/dataproc/docs/reference/rest/v1/projects.regions.clusters#role) or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
                 */
                "preemptible"?: boolean;
                /**
                 * Immutable. Optional. Whether the nodes are created as [Spot VM instances] (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the `CONTROLLER` [role](/dataproc/docs/reference/rest/v1/projects.regions.clusters#role) or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
                 */
                "spot"?: boolean;
              };
              /**
               * Immutable. Optional. The list of Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located. \*\*Note:\*\* All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region. If a location is not specified during node pool creation, Dataproc on GKE will choose the zone.
               */
              "locations"?: Array<string>;
            };
            /**
             * Immutable.
             */
            "nodePoolRef": {
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external"?: string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            } & (Exclude<{
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external"?: string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            }, {
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            }> | Exclude<{
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            }, {
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            } & ({
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external"?: string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace"?: string;
            } | {
              /**
               * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
               * 
               * Allowed value: The `selfLink` field of a `ContainerNodePool` resource.
               */
              "external"?: string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
               */
              "namespace": string;
            })>);
            /**
             * Immutable. Required. The roles associated with the GKE node pool.
             */
            "roles": Array<string>;
          }>;
        };
        /**
         * Immutable. Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.
         */
        "kubernetesNamespace"?: string;
        /**
         * Immutable. Optional. The software configuration for this Dataproc cluster running on Kubernetes.
         */
        "kubernetesSoftwareConfig"?: {
          /**
           * Immutable. The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
           */
          "componentVersion"?: {
            [key: string]: string;
          };
          /**
           * Immutable. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `spark:spark.kubernetes.container.image`. The following are supported prefixes and their mappings: \* spark: `spark-defaults.conf` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
           */
          "properties"?: {
            [key: string]: string;
          };
        };
      };
      /**
       * Immutable.
       */
      "stagingBucketRef"?: {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & (Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }> | Exclude<{
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & ({
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } | {
        /**
         * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). \*\*This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.\*\*
         * 
         * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
         */
        "external"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace": string;
      })>);
    };
  };
  "status"?: {
    /**
     * Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.
     */
    "clusterUuid"?: string;
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    "config"?: {
      "endpointConfig"?: {
        /**
         * Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
         */
        "httpPorts"?: {
          [key: string]: string;
        };
      };
      "lifecycleConfig"?: {
        /**
         * Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
         */
        "idleStartTime"?: string;
      };
      "masterConfig"?: {
        /**
         * Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
         */
        "instanceNames"?: Array<string>;
        /**
         * Output only. List of references to Compute Engine instances.
         */
        "instanceReferences"?: Array<{
          /**
           * The unique identifier of the Compute Engine instance.
           */
          "instanceId"?: string;
          /**
           * The user-friendly name of the Compute Engine instance.
           */
          "instanceName"?: string;
          /**
           * The public ECIES key used for sharing data with this instance.
           */
          "publicEciesKey"?: string;
          /**
           * The public RSA key used for sharing data with this instance.
           */
          "publicKey"?: string;
        }>;
        /**
         * Output only. Specifies that this instance group contains preemptible instances.
         */
        "isPreemptible"?: boolean;
        /**
         * Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
         */
        "managedGroupConfig"?: {
          /**
           * Output only. The name of the Instance Group Manager for this group.
           */
          "instanceGroupManagerName"?: string;
          /**
           * Output only. The name of the Instance Template used for the Managed Instance Group.
           */
          "instanceTemplateName"?: string;
        };
      };
      "secondaryWorkerConfig"?: {
        /**
         * Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
         */
        "instanceNames"?: Array<string>;
        /**
         * Output only. List of references to Compute Engine instances.
         */
        "instanceReferences"?: Array<{
          /**
           * The unique identifier of the Compute Engine instance.
           */
          "instanceId"?: string;
          /**
           * The user-friendly name of the Compute Engine instance.
           */
          "instanceName"?: string;
          /**
           * The public ECIES key used for sharing data with this instance.
           */
          "publicEciesKey"?: string;
          /**
           * The public RSA key used for sharing data with this instance.
           */
          "publicKey"?: string;
        }>;
        /**
         * Output only. Specifies that this instance group contains preemptible instances.
         */
        "isPreemptible"?: boolean;
        /**
         * Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
         */
        "managedGroupConfig"?: {
          /**
           * Output only. The name of the Instance Group Manager for this group.
           */
          "instanceGroupManagerName"?: string;
          /**
           * Output only. The name of the Instance Template used for the Managed Instance Group.
           */
          "instanceTemplateName"?: string;
        };
      };
      "workerConfig"?: {
        /**
         * Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group.
         */
        "instanceNames"?: Array<string>;
        /**
         * Output only. List of references to Compute Engine instances.
         */
        "instanceReferences"?: Array<{
          /**
           * The unique identifier of the Compute Engine instance.
           */
          "instanceId"?: string;
          /**
           * The user-friendly name of the Compute Engine instance.
           */
          "instanceName"?: string;
          /**
           * The public ECIES key used for sharing data with this instance.
           */
          "publicEciesKey"?: string;
          /**
           * The public RSA key used for sharing data with this instance.
           */
          "publicKey"?: string;
        }>;
        /**
         * Output only. Specifies that this instance group contains preemptible instances.
         */
        "isPreemptible"?: boolean;
        /**
         * Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
         */
        "managedGroupConfig"?: {
          /**
           * Output only. The name of the Instance Group Manager for this group.
           */
          "instanceGroupManagerName"?: string;
          /**
           * Output only. The name of the Instance Template used for the Managed Instance Group.
           */
          "instanceTemplateName"?: string;
        };
      };
    };
    /**
     * Output only. Contains cluster daemon metrics such as HDFS and YARN stats. \*\*Beta Feature\*\*: This report is available for testing purposes only. It may be changed before final release.
     */
    "metrics"?: {
      /**
       * The HDFS metrics.
       */
      "hdfsMetrics"?: {
        [key: string]: string;
      };
      /**
       * The YARN metrics.
       */
      "yarnMetrics"?: {
        [key: string]: string;
      };
    };
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Cluster status.
     */
    "status"?: {
      /**
       * Optional. Output only. Details of cluster's state.
       */
      "detail"?: string;
      /**
       * Output only. The cluster's state. Possible values: UNKNOWN, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, STOPPED, STARTING
       */
      "state"?: string;
      /**
       * Output only. Time when this state was entered (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
       */
      "stateStartTime"?: string;
      /**
       * Output only. Additional state information that includes status reported by the agent. Possible values: UNSPECIFIED, UNHEALTHY, STALE_STATUS
       */
      "substate"?: string;
    };
    /**
     * Output only. The previous cluster status.
     */
    "statusHistory"?: Array<{
      /**
       * Optional. Output only. Details of cluster's state.
       */
      "detail"?: string;
      /**
       * Output only. The cluster's state. Possible values: UNKNOWN, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, STOPPED, STARTING
       */
      "state"?: string;
      /**
       * Output only. Time when this state was entered (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
       */
      "stateStartTime"?: string;
      /**
       * Output only. Additional state information that includes status reported by the agent. Possible values: UNSPECIFIED, UNHEALTHY, STALE_STATUS
       */
      "substate"?: string;
    }>;
  };
}

export class DataprocCluster extends Model<IDataprocCluster> implements IDataprocCluster {
  "apiVersion": IDataprocCluster["apiVersion"];
  "kind": IDataprocCluster["kind"];
  "metadata"?: IDataprocCluster["metadata"];
  "spec": IDataprocCluster["spec"];
  "status"?: IDataprocCluster["status"];

static apiVersion: IDataprocCluster["apiVersion"] = "dataproc.cnrm.cloud.google.com/v1beta1";
static kind: IDataprocCluster["kind"] = "DataprocCluster";
static is = createTypeMetaGuard<IDataprocCluster>(DataprocCluster);

constructor(data?: ModelData<IDataprocCluster>) {
  super();

  this.setDefinedProps({
    apiVersion: DataprocCluster.apiVersion,
    kind: DataprocCluster.kind,
    ...data
  } as IDataprocCluster);
}
}


setValidateFunc(DataprocCluster, validate as ValidateFunc<IDataprocCluster>);
