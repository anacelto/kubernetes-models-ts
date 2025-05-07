import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertificatemanagerCnrmCloudGoogleComV1alpha1CertificateManagerCertificateMap";

export interface ICertificateManagerCertificateMap {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "certificatemanager.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CertificateManagerCertificateMap";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A human-readable description of the resource.
     */
    "description"?: string;
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
     * Creation timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
     * accurate to nanoseconds with up to nine fractional digits.
     * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    "createTime"?: string;
    /**
     * A list of target proxies that use this Certificate Map.
     */
    "gclbTargets"?: Array<{
      /**
       * An IP configuration where this Certificate Map is serving.
       */
      "ipConfigs"?: Array<{
        /**
         * An external IP address.
         */
        "ipAddress"?: string;
        /**
         * A list of ports.
         */
        "ports"?: Array<number>;
      }>;
      /**
       * Proxy name must be in the format projects/\*\/locations/\*\/targetHttpsProxies/\*.
       * This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
       * 'targetSslProxy' may be set.
       */
      "targetHttpsProxy"?: string;
      /**
       * Proxy name must be in the format projects/\*\/locations/\*\/targetSslProxies/\*.
       * This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
       * 'targetSslProxy' may be set.
       */
      "targetSslProxy"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Update timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
     * accurate to nanoseconds with up to nine fractional digits.
     * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    "updateTime"?: string;
  };
}

export class CertificateManagerCertificateMap extends Model<ICertificateManagerCertificateMap> implements ICertificateManagerCertificateMap {
  "apiVersion": ICertificateManagerCertificateMap["apiVersion"];
  "kind": ICertificateManagerCertificateMap["kind"];
  "metadata"?: ICertificateManagerCertificateMap["metadata"];
  "spec": ICertificateManagerCertificateMap["spec"];
  "status"?: ICertificateManagerCertificateMap["status"];

static apiVersion: ICertificateManagerCertificateMap["apiVersion"] = "certificatemanager.cnrm.cloud.google.com/v1alpha1";
static kind: ICertificateManagerCertificateMap["kind"] = "CertificateManagerCertificateMap";
static is = createTypeMetaGuard<ICertificateManagerCertificateMap>(CertificateManagerCertificateMap);

constructor(data?: ModelData<ICertificateManagerCertificateMap>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateManagerCertificateMap.apiVersion,
    kind: CertificateManagerCertificateMap.kind,
    ...data
  } as ICertificateManagerCertificateMap);
}
}


setValidateFunc(CertificateManagerCertificateMap, validate as ValidateFunc<ICertificateManagerCertificateMap>);
