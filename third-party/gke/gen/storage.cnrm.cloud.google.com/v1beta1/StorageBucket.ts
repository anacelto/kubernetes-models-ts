import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/StorageCnrmCloudGoogleComV1beta1StorageBucket";

export interface IStorageBucket {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "storage.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "StorageBucket";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * The bucket's autoclass configuration.
     */
    "autoclass"?: {
      /**
       * While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
       */
      "enabled": boolean;
    };
    /**
     * DEPRECATED. Please use the `uniformBucketLevelAccess` field as this field has been renamed by Google. The `uniformBucketLevelAccess` field will supersede this field.
     * Enables Bucket PolicyOnly access to a bucket.
     */
    "bucketPolicyOnly"?: boolean;
    /**
     * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
     */
    "cors"?: Array<{
      /**
       * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
       */
      "maxAgeSeconds"?: number;
      /**
       * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "\*" is permitted in the list of methods, and means "any method".
       */
      "method"?: Array<string>;
      /**
       * The list of Origins eligible to receive CORS response headers. Note: "\*" is permitted in the list of origins, and means "any Origin".
       */
      "origin"?: Array<string>;
      /**
       * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
       */
      "responseHeader"?: Array<string>;
    }>;
    /**
     * The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty.
     */
    "customPlacementConfig"?: {
      /**
       * Immutable. The list of individual regions that comprise a dual-region bucket. See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.
       */
      "dataLocations": Array<string>;
    };
    /**
     * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
     */
    "defaultEventBasedHold"?: boolean;
    /**
     * The bucket's encryption configuration.
     */
    "encryption"?: {
      "kmsKeyRef": {
        /**
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
     * The bucket's Lifecycle Rules configuration.
     */
    "lifecycleRule"?: Array<{
      /**
       * The Lifecycle Rule's action configuration. A single block of this type is supported.
       */
      "action": {
        /**
         * The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
         */
        "storageClass"?: string;
        /**
         * The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.
         */
        "type": string;
      };
      /**
       * The Lifecycle Rule's condition configuration.
       */
      "condition": {
        /**
         * Minimum age of an object in days to satisfy this condition.
         */
        "age"?: number;
        /**
         * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
         */
        "createdBefore"?: string;
        /**
         * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
         */
        "customTimeBefore"?: string;
        /**
         * Number of days elapsed since the user-specified timestamp set on an object.
         */
        "daysSinceCustomTime"?: number;
        /**
         * Number of days elapsed since the noncurrent timestamp of an object. This
         * 										condition is relevant only for versioned objects.
         */
        "daysSinceNoncurrentTime"?: number;
        /**
         * One or more matching name prefixes to satisfy this condition.
         */
        "matchesPrefix"?: Array<string>;
        /**
         * Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
         */
        "matchesStorageClass"?: Array<string>;
        /**
         * One or more matching name suffixes to satisfy this condition.
         */
        "matchesSuffix"?: Array<string>;
        /**
         * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
         */
        "noncurrentTimeBefore"?: string;
        /**
         * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
         */
        "numNewerVersions"?: number;
        /**
         * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
         */
        "withState"?: string;
      };
    }>;
    /**
     * Immutable. The Google Cloud Storage location.
     */
    "location"?: string;
    /**
     * The bucket's Access & Storage Logs configuration.
     */
    "logging"?: {
      /**
       * The bucket that will receive log objects.
       */
      "logBucket": string;
      /**
       * The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
       */
      "logObjectPrefix"?: string;
    };
    /**
     * Prevents public access to a bucket.
     */
    "publicAccessPrevention"?: string;
    /**
     * Enables Requester Pays on a storage bucket.
     */
    "requesterPays"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Configuration of the bucket's data retention policy for how long objects in the bucket should be retained.
     */
    "retentionPolicy"?: {
      /**
       * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
       */
      "isLocked"?: boolean;
      /**
       * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
       */
      "retentionPeriod": number;
    };
    /**
     * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
     */
    "storageClass"?: string;
    /**
     * Enables uniform bucket-level access on a bucket.
     */
    "uniformBucketLevelAccess"?: boolean;
    /**
     * The bucket's Versioning configuration.
     */
    "versioning"?: {
      /**
       * While set to true, versioning is fully enabled for this bucket.
       */
      "enabled": boolean;
    };
    /**
     * Configuration if the bucket acts as a website.
     */
    "website"?: {
      /**
       * Behaves as the bucket's directory index where missing objects are treated as potential directories.
       */
      "mainPageSuffix"?: string;
      /**
       * The custom object to return when a requested resource is not found.
       */
      "notFoundPage"?: string;
    };
  };
  "status"?: {
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
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The URI of the created resource.
     */
    "selfLink"?: string;
    /**
     * The base URL of the bucket, in the format gs://<bucket-name>.
     */
    "url"?: string;
  };
}

export class StorageBucket extends Model<IStorageBucket> implements IStorageBucket {
  "apiVersion": IStorageBucket["apiVersion"];
  "kind": IStorageBucket["kind"];
  "metadata"?: IStorageBucket["metadata"];
  "spec"?: IStorageBucket["spec"];
  "status"?: IStorageBucket["status"];

static apiVersion: IStorageBucket["apiVersion"] = "storage.cnrm.cloud.google.com/v1beta1";
static kind: IStorageBucket["kind"] = "StorageBucket";
static is = createTypeMetaGuard<IStorageBucket>(StorageBucket);

constructor(data?: ModelData<IStorageBucket>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageBucket.apiVersion,
    kind: StorageBucket.kind,
    ...data
  } as IStorageBucket);
}
}


setValidateFunc(StorageBucket, validate as ValidateFunc<IStorageBucket>);
