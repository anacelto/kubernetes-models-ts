import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TraefikIoV1alpha1TLSStore";

/**
 * TLSStore is the CRD implementation of a Traefik TLS Store. For the time being, only the TLSStore named default is supported. This means that you cannot have two stores that are named default in different Kubernetes namespaces. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#certificates-stores
 */
export interface ITLSStore {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "traefik.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TLSStore";
  "metadata": IObjectMeta;
  /**
   * TLSStoreSpec defines the desired state of a TLSStore.
   */
  "spec": {
    /**
     * Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.
     */
    "certificates"?: Array<{
      /**
       * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
       */
      "secretName": string;
    }>;
    /**
     * DefaultCertificate defines the default certificate configuration.
     */
    "defaultCertificate"?: {
      /**
       * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
       */
      "secretName": string;
    };
    /**
     * DefaultGeneratedCert defines the default generated certificate configuration.
     */
    "defaultGeneratedCert"?: {
      /**
       * Domain is the domain definition for the DefaultCertificate.
       */
      "domain"?: {
        /**
         * Main defines the main domain name.
         */
        "main"?: string;
        /**
         * SANs defines the subject alternative domain names.
         */
        "sans"?: Array<string>;
      };
      /**
       * Resolver is the name of the resolver that will be used to issue the DefaultCertificate.
       */
      "resolver"?: string;
    };
  };
}

/**
 * TLSStore is the CRD implementation of a Traefik TLS Store. For the time being, only the TLSStore named default is supported. This means that you cannot have two stores that are named default in different Kubernetes namespaces. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#certificates-stores
 */
export class TLSStore extends Model<ITLSStore> implements ITLSStore {
  "apiVersion": ITLSStore["apiVersion"];
  "kind": ITLSStore["kind"];
  "metadata": ITLSStore["metadata"];
  "spec": ITLSStore["spec"];

static apiVersion: ITLSStore["apiVersion"] = "traefik.io/v1alpha1";
static kind: ITLSStore["kind"] = "TLSStore";
static is = createTypeMetaGuard<ITLSStore>(TLSStore);

constructor(data?: ModelData<ITLSStore>) {
  super();

  this.setDefinedProps({
    apiVersion: TLSStore.apiVersion,
    kind: TLSStore.kind,
    ...data
  } as ITLSStore);
}
}


setValidateFunc(TLSStore, validate as ValidateFunc<ITLSStore>);
