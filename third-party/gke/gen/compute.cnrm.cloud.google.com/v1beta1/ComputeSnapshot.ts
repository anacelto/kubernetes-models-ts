import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeSnapshot";

export interface IComputeSnapshot {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeSnapshot";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Creates the new snapshot in the snapshot chain labeled with the
     * specified name. The chain name must be 1-63 characters long and
     * comply with RFC1035. This is an uncommon option only for advanced
     * service owners who needs to create separate snapshot chains, for
     * example, for chargeback tracking.  When you describe your snapshot
     * resource, this field is visible only if it has a non-empty value.
     */
    "chainName"?: string;
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Encrypts the snapshot using a customer-supplied encryption key.
     * 
     * After you encrypt a snapshot using a customer-supplied key, you must
     * provide the same key if you use the snapshot later. For example, you
     * must provide the encryption key when you create a disk from the
     * encrypted snapshot in a future request.
     * 
     * Customer-supplied encryption keys do not protect access to metadata of
     * the snapshot.
     * 
     * If you do not provide an encryption key when creating the snapshot,
     * then the snapshot will be encrypted using an automatically generated
     * key and you do not need to provide a key to use the snapshot later.
     */
    "snapshotEncryptionKey"?: {
      /**
       * The encryption key that is stored in Google Cloud KMS.
       */
      "kmsKeyRef"?: {
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
      /**
       * The service account used for the encryption request for the given KMS key.
       * If absent, the Compute Engine Service Agent service account is used.
       */
      "kmsKeyServiceAccountRef"?: {
        /**
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
       * Immutable. Specifies a 256-bit customer-supplied encryption key, encoded in
       * RFC 4648 base64 to either encrypt or decrypt this resource.
       */
      "rawKey"?: {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      } & (Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }> | Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }>);
      /**
       * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
       * encryption key that protects this resource.
       */
      "sha256"?: string;
    };
    /**
     * Immutable. The customer-supplied encryption key of the source snapshot. Required
     * if the source snapshot is protected by a customer-supplied encryption
     * key.
     */
    "sourceDiskEncryptionKey"?: {
      /**
       * The service account used for the encryption request for the given KMS key.
       * If absent, the Compute Engine Service Agent service account is used.
       */
      "kmsKeyServiceAccountRef"?: {
        /**
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
       * Immutable. Specifies a 256-bit customer-supplied encryption key, encoded in
       * RFC 4648 base64 to either encrypt or decrypt this resource.
       */
      "rawKey"?: {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      } & (Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }> | Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }>);
    };
    /**
     * A reference to the disk used to create this snapshot.
     */
    "sourceDiskRef": {
      /**
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
       * Allowed value: The `name` field of a `ComputeDisk` resource.
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
     * Immutable. Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
     */
    "storageLocations"?: Array<string>;
    /**
     * Immutable. A reference to the zone where the disk is hosted.
     */
    "zone"?: string;
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * Size of the snapshot, specified in GB.
     */
    "diskSizeGb"?: number;
    /**
     * The fingerprint used for optimistic locking of this resource. Used
     * internally during updates.
     */
    "labelFingerprint"?: string;
    /**
     * A list of public visible licenses that apply to this snapshot. This
     * can be because the original image had licenses attached (such as a
     * Windows image).  snapshotEncryptionKey nested object Encrypts the
     * snapshot using a customer-supplied encryption key.
     */
    "licenses"?: Array<string>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
    /**
     * The unique identifier for the resource.
     */
    "snapshotId"?: number;
    /**
     * A size of the storage used by the snapshot. As snapshots share
     * storage, this number is expected to change with snapshot
     * creation/deletion.
     */
    "storageBytes"?: number;
  };
}

export class ComputeSnapshot extends Model<IComputeSnapshot> implements IComputeSnapshot {
  "apiVersion": IComputeSnapshot["apiVersion"];
  "kind": IComputeSnapshot["kind"];
  "metadata"?: IComputeSnapshot["metadata"];
  "spec": IComputeSnapshot["spec"];
  "status"?: IComputeSnapshot["status"];

static apiVersion: IComputeSnapshot["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeSnapshot["kind"] = "ComputeSnapshot";
static is = createTypeMetaGuard<IComputeSnapshot>(ComputeSnapshot);

constructor(data?: ModelData<IComputeSnapshot>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeSnapshot.apiVersion,
    kind: ComputeSnapshot.kind,
    ...data
  } as IComputeSnapshot);
}
}


setValidateFunc(ComputeSnapshot, validate as ValidateFunc<IComputeSnapshot>);
