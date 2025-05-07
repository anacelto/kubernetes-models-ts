import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CloudassetCnrmCloudGoogleComV1alpha1CloudAssetOrganizationFeed";

export interface ICloudAssetOrganizationFeed {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "cloudasset.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CloudAssetOrganizationFeed";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A list of the full names of the assets to receive updates. You must specify either or both of
     * assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
     * exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
     * See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
     */
    "assetNames"?: Array<string>;
    /**
     * A list of types of the assets to receive updates. You must specify either or both of assetNames
     * and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
     * the feed. For example: "compute.googleapis.com/Disk"
     * See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
     * supported asset types.
     */
    "assetTypes"?: Array<string>;
    /**
     * Immutable. The project whose identity will be used when sending messages to the
     * destination pubsub topic. It also specifies the project for API
     * enablement check, quota, and billing.
     */
    "billingProject": string;
    /**
     * A condition which determines whether an asset update should be published. If specified, an asset
     * will be returned only when the expression evaluates to true. When set, expression field
     * must be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with
     * expression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of
     * condition are optional.
     */
    "condition"?: {
      /**
       * Description of the expression. This is a longer text which describes the expression,
       * e.g. when hovered over it in a UI.
       */
      "description"?: string;
      /**
       * Textual representation of an expression in Common Expression Language syntax.
       */
      "expression": string;
      /**
       * String indicating the location of the expression for error reporting, e.g. a file
       * name and a position in the file.
       */
      "location"?: string;
      /**
       * Title for the expression, i.e. a short string describing its purpose.
       * This can be used e.g. in UIs which allow to enter the expression.
       */
      "title"?: string;
    };
    /**
     * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"].
     */
    "contentType"?: string;
    /**
     * Immutable. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
     */
    "feedId": string;
    /**
     * Output configuration for asset feed destination.
     */
    "feedOutputConfig": {
      /**
       * Destination on Cloud Pubsub.
       */
      "pubsubDestination": {
        /**
         * Destination on Cloud Pubsub topic.
         */
        "topic": string;
      };
    };
    /**
     * The organization that this resource belongs to.
     */
    "organizationRef": {
      /**
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
       * Allowed value: The `name` field of an `Organization` resource.
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
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
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
     * The format will be organizations/{organization_number}/feeds/{client-assigned_feed_identifier}.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class CloudAssetOrganizationFeed extends Model<ICloudAssetOrganizationFeed> implements ICloudAssetOrganizationFeed {
  "apiVersion": ICloudAssetOrganizationFeed["apiVersion"];
  "kind": ICloudAssetOrganizationFeed["kind"];
  "metadata"?: ICloudAssetOrganizationFeed["metadata"];
  "spec": ICloudAssetOrganizationFeed["spec"];
  "status"?: ICloudAssetOrganizationFeed["status"];

static apiVersion: ICloudAssetOrganizationFeed["apiVersion"] = "cloudasset.cnrm.cloud.google.com/v1alpha1";
static kind: ICloudAssetOrganizationFeed["kind"] = "CloudAssetOrganizationFeed";
static is = createTypeMetaGuard<ICloudAssetOrganizationFeed>(CloudAssetOrganizationFeed);

constructor(data?: ModelData<ICloudAssetOrganizationFeed>) {
  super();

  this.setDefinedProps({
    apiVersion: CloudAssetOrganizationFeed.apiVersion,
    kind: CloudAssetOrganizationFeed.kind,
    ...data
  } as ICloudAssetOrganizationFeed);
}
}


setValidateFunc(CloudAssetOrganizationFeed, validate as ValidateFunc<ICloudAssetOrganizationFeed>);
