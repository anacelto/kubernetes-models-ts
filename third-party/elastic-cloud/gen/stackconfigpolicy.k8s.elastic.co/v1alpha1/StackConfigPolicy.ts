import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/StackconfigpolicyK8sElasticCoV1alpha1StackConfigPolicy";

/**
 * StackConfigPolicy represents a StackConfigPolicy resource in a Kubernetes cluster.
 */
export interface IStackConfigPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "stackconfigpolicy.k8s.elastic.co/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "StackConfigPolicy";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "elasticsearch"?: {
      /**
       * ClusterSettings holds the Elasticsearch cluster settings (/_cluster/settings)
       */
      "clusterSettings"?: {
      };
      /**
       * Config holds the settings that go into elasticsearch.yml.
       */
      "config"?: {
      };
      /**
       * IndexLifecyclePolicies holds the Index Lifecycle policies settings (/_ilm/policy)
       */
      "indexLifecyclePolicies"?: {
      };
      /**
       * IndexTemplates holds the Index and Component Templates settings
       */
      "indexTemplates"?: {
        /**
         * ComponentTemplates holds the Component Templates settings (/_component_template)
         */
        "componentTemplates"?: {
        };
        /**
         * ComposableIndexTemplates holds the Index Templates settings (/_index_template)
         */
        "composableIndexTemplates"?: {
        };
      };
      /**
       * IngestPipelines holds the Ingest Pipelines settings (/_ingest/pipeline)
       */
      "ingestPipelines"?: {
      };
      /**
       * SecretMounts are additional Secrets that need to be mounted into the Elasticsearch pods.
       */
      "secretMounts"?: Array<{
        /**
         * MountPath denotes the path to which the secret should be mounted to inside the elasticsearch pod
         */
        "mountPath"?: string;
        /**
         * SecretName denotes the name of the secret that needs to be mounted to the elasticsearch pod
         */
        "secretName"?: string;
      }>;
      /**
       * SecureSettings are additional Secrets that contain data to be configured to Elasticsearch's keystore.
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
       * SecurityRoleMappings holds the Role Mappings settings (/_security/role_mapping)
       */
      "securityRoleMappings"?: {
      };
      /**
       * SnapshotLifecyclePolicies holds the Snapshot Lifecycle Policies settings (/_slm/policy)
       */
      "snapshotLifecyclePolicies"?: {
      };
      /**
       * SnapshotRepositories holds the Snapshot Repositories settings (/_snapshot)
       */
      "snapshotRepositories"?: {
      };
    };
    "kibana"?: {
      /**
       * Config holds the settings that go into kibana.yml.
       */
      "config"?: {
      };
      /**
       * SecureSettings are additional Secrets that contain data to be configured to Kibana's keystore.
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
    };
    /**
     * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
     */
    "resourceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * Deprecated: SecureSettings only applies to Elasticsearch and is deprecated. It must be set per application instead.
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
  };
  "status"?: {
    /**
     * Details holds the status details for each resource to be configured.
     */
    "details"?: {
      [key: string]: {
        [key: string]: {
          /**
           * CurrentVersion denotes the current version of filesettings applied to the Elasticsearch cluster This field does not apply to Kibana resources
           */
          "currentVersion"?: number;
          "error"?: {
            "message"?: string;
            "version"?: number;
          };
          /**
           * ExpectedVersion denotes the expected version of filesettings that should be applied to the Elasticsearch cluster This field does not apply to Kibana resources
           */
          "expectedVersion"?: number;
          "phase"?: string;
        };
      };
    };
    /**
     * Errors is the number of resources which have an incorrect configuration
     */
    "errors"?: number;
    /**
     * ObservedGeneration is the most recent generation observed for this StackConfigPolicy.
     */
    "observedGeneration"?: number;
    /**
     * Phase is the phase of the StackConfigPolicy.
     */
    "phase"?: string;
    /**
     * Ready is the number of resources successfully configured.
     */
    "ready"?: number;
    /**
     * ReadyCount is a human representation of the number of resources successfully configured.
     */
    "readyCount"?: string;
    /**
     * Resources is the number of resources to be configured.
     */
    "resources"?: number;
    /**
     * ResourcesStatuses holds the status for each resource to be configured. Deprecated: Details is used to store the status of resources from ECK 2.11
     */
    "resourcesStatuses"?: {
      [key: string]: {
        /**
         * CurrentVersion denotes the current version of filesettings applied to the Elasticsearch cluster This field does not apply to Kibana resources
         */
        "currentVersion"?: number;
        "error"?: {
          "message"?: string;
          "version"?: number;
        };
        /**
         * ExpectedVersion denotes the expected version of filesettings that should be applied to the Elasticsearch cluster This field does not apply to Kibana resources
         */
        "expectedVersion"?: number;
        "phase"?: string;
      };
    };
  };
}

/**
 * StackConfigPolicy represents a StackConfigPolicy resource in a Kubernetes cluster.
 */
export class StackConfigPolicy extends Model<IStackConfigPolicy> implements IStackConfigPolicy {
  "apiVersion": IStackConfigPolicy["apiVersion"];
  "kind": IStackConfigPolicy["kind"];
  "metadata"?: IStackConfigPolicy["metadata"];
  "spec"?: IStackConfigPolicy["spec"];
  "status"?: IStackConfigPolicy["status"];

static apiVersion: IStackConfigPolicy["apiVersion"] = "stackconfigpolicy.k8s.elastic.co/v1alpha1";
static kind: IStackConfigPolicy["kind"] = "StackConfigPolicy";
static is = createTypeMetaGuard<IStackConfigPolicy>(StackConfigPolicy);

constructor(data?: ModelData<IStackConfigPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: StackConfigPolicy.apiVersion,
    kind: StackConfigPolicy.kind,
    ...data
  } as IStackConfigPolicy);
}
}


setValidateFunc(StackConfigPolicy, validate as ValidateFunc<IStackConfigPolicy>);
