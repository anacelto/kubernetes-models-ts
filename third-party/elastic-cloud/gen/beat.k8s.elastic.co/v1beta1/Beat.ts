import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BeatK8sElasticCoV1beta1Beat";

/**
 * Beat is the Schema for the Beats API.
 */
export interface IBeat {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "beat.k8s.elastic.co/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Beat";
  "metadata"?: IObjectMeta;
  /**
   * BeatSpec defines the desired state of a Beat.
   */
  "spec"?: {
    /**
     * Config holds the Beat configuration. At most one of [`Config`, `ConfigRef`] can be specified.
     */
    "config"?: {
    };
    /**
     * ConfigRef contains a reference to an existing Kubernetes Secret holding the Beat configuration. Beat settings must be specified as yaml, under a single "beat.yml" entry. At most one of [`Config`, `ConfigRef`] can be specified.
     */
    "configRef"?: {
      /**
       * SecretName is the name of the secret.
       */
      "secretName"?: string;
    };
    /**
     * DaemonSet specifies the Beat should be deployed as a DaemonSet, and allows providing its spec. Cannot be used along with `deployment`. If both are absent a default for the Type is used.
     */
    "daemonSet"?: {
      /**
       * PodTemplateSpec describes the data a pod should have when created from a template
       */
      "podTemplate"?: {
      };
      /**
       * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
       */
      "updateStrategy"?: {
        /**
         * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
         */
        "rollingUpdate"?: {
          /**
           * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
           */
          "maxSurge"?: number | string;
          /**
           * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
           */
          "maxUnavailable"?: number | string;
        };
        /**
         * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
         */
        "type"?: string;
      };
    };
    /**
     * Deployment specifies the Beat should be deployed as a Deployment, and allows providing its spec. Cannot be used along with `daemonSet`. If both are absent a default for the Type is used.
     */
    "deployment"?: {
      /**
       * PodTemplateSpec describes the data a pod should have when created from a template
       */
      "podTemplate"?: {
      };
      "replicas"?: number;
      /**
       * DeploymentStrategy describes how to replace existing pods with new ones.
       */
      "strategy"?: {
        /**
         * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
         */
        "rollingUpdate"?: {
          /**
           * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
           */
          "maxSurge"?: number | string;
          /**
           * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
           */
          "maxUnavailable"?: number | string;
        };
        /**
         * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
         */
        "type"?: string;
      };
    };
    /**
     * ElasticsearchRef is a reference to an Elasticsearch cluster running in the same Kubernetes cluster.
     */
    "elasticsearchRef"?: {
      /**
       * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
       */
      "name"?: string;
      /**
       * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
       */
      "namespace"?: string;
      /**
       * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
       */
      "secretName"?: string;
      /**
       * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
       */
      "serviceName"?: string;
    };
    /**
     * Image is the Beat Docker image to deploy. Version and Type have to match the Beat in the image.
     */
    "image"?: string;
    /**
     * KibanaRef is a reference to a Kibana instance running in the same Kubernetes cluster. It allows automatic setup of dashboards and visualizations.
     */
    "kibanaRef"?: {
      /**
       * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
       */
      "name"?: string;
      /**
       * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
       */
      "namespace"?: string;
      /**
       * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
       */
      "secretName"?: string;
      /**
       * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
       */
      "serviceName"?: string;
    };
    /**
     * Monitoring enables you to collect and ship logs and metrics for this Beat. Metricbeat and/or Filebeat sidecars are configured and send monitoring data to an Elasticsearch monitoring cluster running in the same Kubernetes cluster.
     */
    "monitoring"?: {
      /**
       * Logs holds references to Elasticsearch clusters which receive log data from an associated resource.
       */
      "logs"?: {
        /**
         * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
         */
        "elasticsearchRefs"?: Array<{
          /**
           * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
           */
          "name"?: string;
          /**
           * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
           */
          "namespace"?: string;
          /**
           * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
           */
          "secretName"?: string;
          /**
           * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
           */
          "serviceName"?: string;
        }>;
      };
      /**
       * Metrics holds references to Elasticsearch clusters which receive monitoring data from this resource.
       */
      "metrics"?: {
        /**
         * ElasticsearchRefs is a reference to a list of monitoring Elasticsearch clusters running in the same Kubernetes cluster. Due to existing limitations, only a single Elasticsearch cluster is currently supported.
         */
        "elasticsearchRefs"?: Array<{
          /**
           * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
           */
          "name"?: string;
          /**
           * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
           */
          "namespace"?: string;
          /**
           * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
           */
          "secretName"?: string;
          /**
           * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
           */
          "serviceName"?: string;
        }>;
      };
    };
    /**
     * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying DaemonSet or Deployment.
     */
    "revisionHistoryLimit"?: number;
    /**
     * SecureSettings is a list of references to Kubernetes Secrets containing sensitive configuration options for the Beat. Secrets data can be then referenced in the Beat config using the Secret's keys or as specified in `Entries` field of each SecureSetting.
     */
    "secureSettings"?: Array<{
      /**
       * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
       */
      "entries"?: Array<{
        /**
         * Key is the key contained in the secret.
         */
        "key": string;
        /**
         * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
         */
        "path"?: string;
      }>;
      /**
       * SecretName is the name of the secret.
       */
      "secretName": string;
    }>;
    /**
     * ServiceAccountName is used to check access from the current resource to Elasticsearch resource in a different namespace. Can only be used if ECK is enforcing RBAC on references.
     */
    "serviceAccountName"?: string;
    /**
     * Type is the type of the Beat to deploy (filebeat, metricbeat, heartbeat, auditbeat, journalbeat, packetbeat, and so on). Any string can be used, but well-known types will have the image field defaulted and have the appropriate Elasticsearch roles created automatically. It also allows for dashboard setup when combined with a `KibanaRef`.
     */
    "type": string;
    /**
     * Version of the Beat.
     */
    "version": string;
  };
  /**
   * BeatStatus defines the observed state of a Beat.
   */
  "status"?: {
    "availableNodes"?: number;
    /**
     * AssociationStatus is the status of an association resource.
     */
    "elasticsearchAssociationStatus"?: string;
    "expectedNodes"?: number;
    "health"?: string;
    /**
     * AssociationStatus is the status of an association resource.
     */
    "kibanaAssociationStatus"?: string;
    /**
     * AssociationStatusMap is the map of association's namespaced name string to its AssociationStatus. For resources that have a single Association of a given type (for ex. single ES reference), this map contains a single entry.
     */
    "monitoringAssociationStatus"?: {
      [key: string]: string;
    };
    /**
     * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Beats controller has not yet processed the changes contained in the Beats specification.
     */
    "observedGeneration"?: number;
    /**
     * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
     */
    "version"?: string;
  };
}

/**
 * Beat is the Schema for the Beats API.
 */
export class Beat extends Model<IBeat> implements IBeat {
  "apiVersion": IBeat["apiVersion"];
  "kind": IBeat["kind"];
  "metadata"?: IBeat["metadata"];
  "spec"?: IBeat["spec"];
  "status"?: IBeat["status"];

static apiVersion: IBeat["apiVersion"] = "beat.k8s.elastic.co/v1beta1";
static kind: IBeat["kind"] = "Beat";
static is = createTypeMetaGuard<IBeat>(Beat);

constructor(data?: ModelData<IBeat>) {
  super();

  this.setDefinedProps({
    apiVersion: Beat.apiVersion,
    kind: Beat.kind,
    ...data
  } as IBeat);
}
}


setValidateFunc(Beat, validate as ValidateFunc<IBeat>);
