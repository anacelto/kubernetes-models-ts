import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ApigeeCnrmCloudGoogleComV1beta1ApigeeOrganization";

export interface IApigeeOrganization {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "apigee.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ApigeeOrganization";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Addon configurations of the Apigee organization.
     */
    "addonsConfig"?: {
      /**
       * Configuration for the Advanced API Ops add-on.
       */
      "advancedApiOpsConfig"?: {
        /**
         * Flag that specifies whether the Advanced API Ops add-on is enabled.
         */
        "enabled"?: boolean;
      };
      /**
       * Configuration for the Monetization add-on.
       */
      "monetizationConfig"?: {
        /**
         * Flag that specifies whether the Monetization add-on is enabled.
         */
        "enabled"?: boolean;
      };
    };
    /**
     * Immutable. Required. Primary GCP region for analytics data storage. For valid values, see (https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
     */
    "analyticsRegion": string;
    "authorizedNetworkRef"?: {
      /**
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
       * Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See (https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
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
     * Description of the Apigee organization.
     */
    "description"?: string;
    /**
     * Display name for the Apigee organization.
     */
    "displayName"?: string;
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
       * Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: projects/<project> Authorization requires the following IAM permission on the specified resource parent: apigee.organizations.create
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
     * Properties defined in the Apigee organization profile.
     */
    "properties"?: {
      [key: string]: string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    "runtimeDatabaseEncryptionKeyRef"?: {
      /**
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
       * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when (#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". \*\*Note:\*\* Not supported for Apigee hybrid.
       * 
       * Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`).
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
     * Immutable. Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. Possible values: RUNTIME_TYPE_UNSPECIFIED, CLOUD, HYBRID
     */
    "runtimeType": string;
  };
  "status"?: {
    /**
     * Output only. Billing type of the Apigee organization. See (https://cloud.google.com/apigee/pricing). Possible values: BILLING_TYPE_UNSPECIFIED, SUBSCRIPTION, EVALUATION
     */
    "billingType"?: string;
    /**
     * Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when (#RuntimeType) is `CLOUD`.
     */
    "caCertificate"?: string;
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
     * Output only. Time that the Apigee organization was created in milliseconds since epoch.
     */
    "createdAt"?: number;
    /**
     * Output only. List of environments in the Apigee organization.
     */
    "environments"?: Array<string>;
    /**
     * Output only. Time that the Apigee organization is scheduled for deletion.
     */
    "expiresAt"?: number;
    /**
     * Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
     */
    "lastModifiedAt"?: number;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Project ID associated with the Apigee organization.
     */
    "projectId"?: string;
    /**
     * Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use. Possible values: SNAPSHOT_STATE_UNSPECIFIED, MISSING, OK_DOCSTORE, OK_SUBMITTED, OK_EXTERNAL, DELETED
     */
    "state"?: string;
    /**
     * Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See (https://cloud.google.com/apigee/pricing/). Possible values: SUBSCRIPTION_TYPE_UNSPECIFIED, PAID, TRIAL
     */
    "subscriptionType"?: string;
  };
}

export class ApigeeOrganization extends Model<IApigeeOrganization> implements IApigeeOrganization {
  "apiVersion": IApigeeOrganization["apiVersion"];
  "kind": IApigeeOrganization["kind"];
  "metadata"?: IApigeeOrganization["metadata"];
  "spec": IApigeeOrganization["spec"];
  "status"?: IApigeeOrganization["status"];

static apiVersion: IApigeeOrganization["apiVersion"] = "apigee.cnrm.cloud.google.com/v1beta1";
static kind: IApigeeOrganization["kind"] = "ApigeeOrganization";
static is = createTypeMetaGuard<IApigeeOrganization>(ApigeeOrganization);

constructor(data?: ModelData<IApigeeOrganization>) {
  super();

  this.setDefinedProps({
    apiVersion: ApigeeOrganization.apiVersion,
    kind: ApigeeOrganization.kind,
    ...data
  } as IApigeeOrganization);
}
}


setValidateFunc(ApigeeOrganization, validate as ValidateFunc<IApigeeOrganization>);
