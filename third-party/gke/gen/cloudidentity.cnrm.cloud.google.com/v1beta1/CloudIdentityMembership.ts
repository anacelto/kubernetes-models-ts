import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CloudidentityCnrmCloudGoogleComV1beta1CloudIdentityMembership";

export interface ICloudIdentityMembership {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "cloudidentity.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CloudIdentityMembership";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable.
     */
    "groupRef": {
      /**
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
       * The group for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
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
     * Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
     */
    "memberKey"?: {
      /**
       * The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
       */
      "id"?: string;
      /**
       * The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
       */
      "namespace"?: string;
    };
    /**
     * Immutable. Required. Immutable. The `EntityKey` of the member.
     */
    "preferredMemberKey": {
      /**
       * Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of a group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
       */
      "id": string;
      /**
       * Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
       */
      "namespace"?: string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
     */
    "roles": Array<{
      /**
       * The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
       */
      "expiryDetail"?: {
        /**
         * The time at which the `MembershipRole` will expire.
         */
        "expireTime"?: string;
      };
      "name": string;
      /**
       * Evaluations of restrictions applied to parent group on this membership.
       */
      "restrictionEvaluations"?: {
        /**
         * Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.
         */
        "memberRestrictionEvaluation"?: {
          /**
           * Output only. The current state of the restriction Possible values: ENCRYPTION_STATE_UNSPECIFIED, UNSUPPORTED_BY_DEVICE, ENCRYPTED, NOT_ENCRYPTED
           */
          "state"?: string;
        };
      };
    }>;
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
     * Output only. The time when the `Membership` was created.
     */
    "createTime"?: string;
    /**
     * Output only. Delivery setting associated with the membership. Possible values: DELIVERY_SETTING_UNSPECIFIED, ALL_MAIL, DIGEST, DAILY, NONE, DISABLED
     */
    "deliverySetting"?: string;
    /**
     * Output only. The display name of this member, if available
     */
    "displayName"?: {
      /**
       * Output only. Member's family name
       */
      "familyName"?: string;
      /**
       * Output only. Localized UTF-16 full name for the member. Localization is done based on the language in the request and the language of the stored display name.
       */
      "fullName"?: string;
      /**
       * Output only. Member's given name
       */
      "givenName"?: string;
    };
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. The type of the membership. Possible values: OWNER_TYPE_UNSPECIFIED, OWNER_TYPE_CUSTOMER, OWNER_TYPE_PARTNER
     */
    "type"?: string;
    /**
     * Output only. The time when the `Membership` was last updated.
     */
    "updateTime"?: string;
  };
}

export class CloudIdentityMembership extends Model<ICloudIdentityMembership> implements ICloudIdentityMembership {
  "apiVersion": ICloudIdentityMembership["apiVersion"];
  "kind": ICloudIdentityMembership["kind"];
  "metadata"?: ICloudIdentityMembership["metadata"];
  "spec": ICloudIdentityMembership["spec"];
  "status"?: ICloudIdentityMembership["status"];

static apiVersion: ICloudIdentityMembership["apiVersion"] = "cloudidentity.cnrm.cloud.google.com/v1beta1";
static kind: ICloudIdentityMembership["kind"] = "CloudIdentityMembership";
static is = createTypeMetaGuard<ICloudIdentityMembership>(CloudIdentityMembership);

constructor(data?: ModelData<ICloudIdentityMembership>) {
  super();

  this.setDefinedProps({
    apiVersion: CloudIdentityMembership.apiVersion,
    kind: CloudIdentityMembership.kind,
    ...data
  } as ICloudIdentityMembership);
}
}


setValidateFunc(CloudIdentityMembership, validate as ValidateFunc<ICloudIdentityMembership>);
