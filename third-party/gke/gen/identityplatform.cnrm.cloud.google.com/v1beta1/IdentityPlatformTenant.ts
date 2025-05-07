import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IdentityplatformCnrmCloudGoogleComV1beta1IdentityPlatformTenant";

export interface IIdentityPlatformTenant {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "identityplatform.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "IdentityPlatformTenant";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Whether to allow email/password user authentication.
     */
    "allowPasswordSignup"?: boolean;
    /**
     * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users.
     */
    "disableAuth"?: boolean;
    /**
     * Display name of the tenant.
     */
    "displayName"?: string;
    /**
     * Whether to enable anonymous user authentication.
     */
    "enableAnonymousUser"?: boolean;
    /**
     * Whether to enable email link user authentication.
     */
    "enableEmailLinkSignin"?: boolean;
    /**
     * The tenant-level configuration of MFA options.
     */
    "mfaConfig"?: {
      /**
       * A list of usable second factors for this project.
       */
      "enabledProviders"?: Array<string>;
      /**
       * Whether MultiFactor Authentication has been enabled for this project. Possible values: STATE_UNSPECIFIED, DISABLED, ENABLED, MANDATORY
       */
      "state"?: string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * A map of <test phone number, fake code> pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded).
     */
    "testPhoneNumbers"?: {
      [key: string]: string;
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
  };
}

export class IdentityPlatformTenant extends Model<IIdentityPlatformTenant> implements IIdentityPlatformTenant {
  "apiVersion": IIdentityPlatformTenant["apiVersion"];
  "kind": IIdentityPlatformTenant["kind"];
  "metadata"?: IIdentityPlatformTenant["metadata"];
  "spec"?: IIdentityPlatformTenant["spec"];
  "status"?: IIdentityPlatformTenant["status"];

static apiVersion: IIdentityPlatformTenant["apiVersion"] = "identityplatform.cnrm.cloud.google.com/v1beta1";
static kind: IIdentityPlatformTenant["kind"] = "IdentityPlatformTenant";
static is = createTypeMetaGuard<IIdentityPlatformTenant>(IdentityPlatformTenant);

constructor(data?: ModelData<IIdentityPlatformTenant>) {
  super();

  this.setDefinedProps({
    apiVersion: IdentityPlatformTenant.apiVersion,
    kind: IdentityPlatformTenant.kind,
    ...data
  } as IIdentityPlatformTenant);
}
}


setValidateFunc(IdentityPlatformTenant, validate as ValidateFunc<IIdentityPlatformTenant>);
