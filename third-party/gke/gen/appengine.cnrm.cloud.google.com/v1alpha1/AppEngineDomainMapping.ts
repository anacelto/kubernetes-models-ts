import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AppengineCnrmCloudGoogleComV1alpha1AppEngineDomainMapping";

export interface IAppEngineDomainMapping {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "appengine.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AppEngineDomainMapping";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Whether the domain creation should override any existing mappings for this domain.
     * By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"].
     */
    "overrideStrategy"?: string;
    /**
     * Immutable.
     */
    "project"?: string;
    /**
     * Immutable. Optional. The domainName of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
     */
    "sslSettings"?: {
      /**
       * ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will
       * remove SSL support.
       * By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
       * or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
       * authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
       * Example: 12345.
       */
      "certificateId"?: string;
      /**
       * ID of the managed 'AuthorizedCertificate' resource currently being provisioned, if applicable. Until the new
       * managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the
       * provisioning process completes, the 'certificateId' field will reflect the new managed certificate and this
       * field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the
       * 'certificateId' field with an update request.
       */
      "pendingManagedCertificateId"?: string;
      /**
       * SSL management type for this domain. If 'AUTOMATIC', a managed certificate is automatically provisioned.
       * If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"].
       */
      "sslManagementType": string;
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
     * Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain's DNS
     * configuration in order to serve the application via this domain mapping.
     */
    "resourceRecords"?: Array<{
      /**
       * Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
       */
      "name"?: string;
      /**
       * Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
       */
      "rrdata"?: string;
      /**
       * Resource record type. Example: 'AAAA'. Possible values: ["A", "AAAA", "CNAME"].
       */
      "type"?: string;
    }>;
  };
}

export class AppEngineDomainMapping extends Model<IAppEngineDomainMapping> implements IAppEngineDomainMapping {
  "apiVersion": IAppEngineDomainMapping["apiVersion"];
  "kind": IAppEngineDomainMapping["kind"];
  "metadata"?: IAppEngineDomainMapping["metadata"];
  "spec"?: IAppEngineDomainMapping["spec"];
  "status"?: IAppEngineDomainMapping["status"];

static apiVersion: IAppEngineDomainMapping["apiVersion"] = "appengine.cnrm.cloud.google.com/v1alpha1";
static kind: IAppEngineDomainMapping["kind"] = "AppEngineDomainMapping";
static is = createTypeMetaGuard<IAppEngineDomainMapping>(AppEngineDomainMapping);

constructor(data?: ModelData<IAppEngineDomainMapping>) {
  super();

  this.setDefinedProps({
    apiVersion: AppEngineDomainMapping.apiVersion,
    kind: AppEngineDomainMapping.kind,
    ...data
  } as IAppEngineDomainMapping);
}
}


setValidateFunc(AppEngineDomainMapping, validate as ValidateFunc<IAppEngineDomainMapping>);
