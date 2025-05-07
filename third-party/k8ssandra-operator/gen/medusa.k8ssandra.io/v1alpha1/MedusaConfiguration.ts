import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MedusaK8ssandraIoV1alpha1MedusaConfiguration";

/**
 * MedusaConfiguration is the Schema for the medusaconfigurations API
 */
export interface IMedusaConfiguration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "medusa.k8ssandra.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "MedusaConfiguration";
  "metadata"?: IObjectMeta;
  /**
   * MedusaConfigurationSpec defines the desired state of MedusaConfiguration
   */
  "spec"?: {
    /**
     * StorageProperties defines the storage backend settings to use for the backups.
     */
    "storageProperties"?: {
      /**
       * AWS Profile to use for authentication.
       */
      "apiProfile"?: string;
      /**
       * Age after which orphan sstables can be deleted from the storage backend. Protects from race conditions between purge and ongoing backups. Defaults to 10 days.
       */
      "backupGracePeriodInDays"?: number;
      /**
       * The name of the bucket to use for the backups.
       */
      "bucketName"?: string;
      /**
       * Number of concurrent uploads. Helps maximizing the speed of uploads but puts more pressure on the network. Defaults to 1.
       */
      "concurrentTransfers"?: number;
      /**
       * Type of credentials to use for authentication. Can be "role-based", "credential-based" or empty.
       */
      "credentialsType"?: "role-based" | "credential-based";
      /**
       * Host to connect to for the storage backend.
       */
      "host"?: string;
      /**
       * Maximum backup age that the purge process should observe.
       */
      "maxBackupAge"?: number;
      /**
       * Maximum number of backups to keep (used by the purge process). Default is unlimited.
       */
      "maxBackupCount"?: number;
      /**
       * File size over which cloud specific cli tools are used for transfer. Defaults to 100 MB.
       */
      "multiPartUploadThreshold"?: number;
      /**
       * Pod storage settings for the local storage provider
       */
      "podStorage"?: {
        /**
         * Pod local storage access modes
         */
        "accessModes"?: Array<string>;
        /**
         * Size of the pod's storage in bytes. Defaults to 10 GB.
         */
        "size"?: number | string;
        /**
         * Storage class name to use for the pod's storage.
         */
        "storageClassName"?: string;
      };
      /**
       * Port to connect to for the storage backend.
       */
      "port"?: number;
      /**
       * Name of the top level folder in the backup bucket. If empty, the cluster name will be used.
       */
      "prefix"?: string;
      /**
       * Region of the storage bucket. Defaults to "default".
       */
      "region"?: string;
      /**
       * Whether to use SSL for the storage backend.
       */
      "secure"?: boolean;
      /**
       * When using SSL, whether to also verify the certificate.
       */
      "sslVerify"?: boolean;
      /**
       * The storage backend to use for the backups.
       */
      "storageProvider"?: "google_storage" | "azure_blobs" | "s3" | "s3_compatible" | "s3_rgw" | "ibm_storage";
      /**
       * Kubernetes Secret that stores the key file for the storage provider's API. If using 'local' storage, this value is ignored.
       */
      "storageSecretRef"?: {
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
      /**
       * Max upload bandwidth in MB/s. Defaults to 50 MB/s.
       */
      "transferMaxBandwidth"?: string;
    };
  };
  /**
   * MedusaConfigurationStatus defines the observed state of MedusaConfiguration
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
  };
}

/**
 * MedusaConfiguration is the Schema for the medusaconfigurations API
 */
export class MedusaConfiguration extends Model<IMedusaConfiguration> implements IMedusaConfiguration {
  "apiVersion": IMedusaConfiguration["apiVersion"];
  "kind": IMedusaConfiguration["kind"];
  "metadata"?: IMedusaConfiguration["metadata"];
  "spec"?: IMedusaConfiguration["spec"];
  "status"?: IMedusaConfiguration["status"];

static apiVersion: IMedusaConfiguration["apiVersion"] = "medusa.k8ssandra.io/v1alpha1";
static kind: IMedusaConfiguration["kind"] = "MedusaConfiguration";
static is = createTypeMetaGuard<IMedusaConfiguration>(MedusaConfiguration);

constructor(data?: ModelData<IMedusaConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: MedusaConfiguration.apiVersion,
    kind: MedusaConfiguration.kind,
    ...data
  } as IMedusaConfiguration);
}
}


setValidateFunc(MedusaConfiguration, validate as ValidateFunc<IMedusaConfiguration>);
