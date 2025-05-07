import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RecaptchaenterpriseCnrmCloudGoogleComV1beta1RecaptchaEnterpriseKey";

export interface IRecaptchaEnterpriseKey {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "recaptchaenterprise.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "RecaptchaEnterpriseKey";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Settings for keys that can be used by Android apps.
     */
    "androidSettings"?: {
      /**
       * If set to true, it means allowed_package_names will not be enforced.
       */
      "allowAllPackageNames"?: boolean;
      /**
       * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
       */
      "allowedPackageNames"?: Array<string>;
    };
    /**
     * Human-readable display name of this key. Modifiable by user.
     */
    "displayName": string;
    /**
     * Settings for keys that can be used by iOS apps.
     */
    "iosSettings"?: {
      /**
       * If set to true, it means allowed_bundle_ids will not be enforced.
       */
      "allowAllBundleIds"?: boolean;
      /**
       * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
       */
      "allowedBundleIds"?: Array<string>;
    };
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. Options for user acceptance testing.
     */
    "testingOptions"?: {
      /**
       * Immutable. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
       */
      "testingChallenge"?: string;
      /**
       * Immutable. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
       */
      "testingScore"?: number;
    };
    /**
     * Settings for keys that can be used by websites.
     */
    "webSettings"?: {
      /**
       * If set to true, it means allowed_domains will not be enforced.
       */
      "allowAllDomains"?: boolean;
      /**
       * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
       */
      "allowAmpTraffic"?: boolean;
      /**
       * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
       */
      "allowedDomains"?: Array<string>;
      /**
       * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
       */
      "challengeSecurityPreference"?: string;
      /**
       * Immutable. Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
       */
      "integrationType": string;
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
     * The timestamp corresponding to the creation of this Key.
     */
    "createTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class RecaptchaEnterpriseKey extends Model<IRecaptchaEnterpriseKey> implements IRecaptchaEnterpriseKey {
  "apiVersion": IRecaptchaEnterpriseKey["apiVersion"];
  "kind": IRecaptchaEnterpriseKey["kind"];
  "metadata"?: IRecaptchaEnterpriseKey["metadata"];
  "spec": IRecaptchaEnterpriseKey["spec"];
  "status"?: IRecaptchaEnterpriseKey["status"];

static apiVersion: IRecaptchaEnterpriseKey["apiVersion"] = "recaptchaenterprise.cnrm.cloud.google.com/v1beta1";
static kind: IRecaptchaEnterpriseKey["kind"] = "RecaptchaEnterpriseKey";
static is = createTypeMetaGuard<IRecaptchaEnterpriseKey>(RecaptchaEnterpriseKey);

constructor(data?: ModelData<IRecaptchaEnterpriseKey>) {
  super();

  this.setDefinedProps({
    apiVersion: RecaptchaEnterpriseKey.apiVersion,
    kind: RecaptchaEnterpriseKey.kind,
    ...data
  } as IRecaptchaEnterpriseKey);
}
}


setValidateFunc(RecaptchaEnterpriseKey, validate as ValidateFunc<IRecaptchaEnterpriseKey>);
