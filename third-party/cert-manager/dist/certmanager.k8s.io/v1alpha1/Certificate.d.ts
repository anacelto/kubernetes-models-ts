import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Certificate is a type to represent a Certificate from ACME
 */
export interface ICertificate {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "certmanager.k8s.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "Certificate";
    "metadata"?: IObjectMeta;
    /**
     * CertificateSpec defines the desired state of Certificate
     */
    "spec"?: {
        /**
         * ACME contains configuration specific to ACME Certificates. Notably, this contains details on how the domain names listed on this Certificate resource should be 'solved', i.e. mapping HTTP01 and DNS01 providers to DNS names.
         */
        "acme"?: {
            "config": Array<{
                /**
                 * DNS01 contains DNS01 challenge solving configuration
                 */
                "dns01"?: {
                    /**
                     * Provider is the name of the DNS01 challenge provider to use, as configure on the referenced Issuer or ClusterIssuer resource.
                     */
                    "provider": string;
                };
                /**
                 * Domains is the list of domains that this SolverConfig applies to.
                 */
                "domains": Array<string>;
                /**
                 * HTTP01 contains HTTP01 challenge solving configuration
                 */
                "http01"?: {
                    /**
                     * Ingress is the name of an Ingress resource that will be edited to include the ACME HTTP01 'well-known' challenge path in order to solve HTTP01 challenges. If this field is specified, 'ingressClass' \*\*must not\*\* be specified.
                     */
                    "ingress"?: string;
                    /**
                     * IngressClass is the ingress class that should be set on new ingress resources that are created in order to solve HTTP01 challenges. This field should be used when using an ingress controller such as nginx, which 'flattens' ingress configuration instead of maintaining a 1:1 mapping between loadbalancer IP:ingress resources. If this field is not set, and 'ingress' is not set, then ingresses without an ingress class set will be created to solve HTTP01 challenges. If this field is specified, 'ingress' \*\*must not\*\* be specified.
                     */
                    "ingressClass"?: string;
                };
            }>;
        };
        /**
         * CommonName is a common name to be used on the Certificate. If no CommonName is given, then the first entry in DNSNames is used as the CommonName. The CommonName should have a length of 64 characters or fewer to avoid generating invalid CSRs; in order to have longer domain names, set the CommonName (or first DNSNames entry) to have 64 characters or fewer, and then add the longer domain name to DNSNames.
         */
        "commonName"?: string;
        /**
         * DNSNames is a list of subject alt names to be used on the Certificate. If no CommonName is given, then the first entry in DNSNames is used as the CommonName and must have a length of 64 characters or fewer.
         */
        "dnsNames"?: Array<string>;
        /**
         * Certificate default Duration
         */
        "duration"?: string;
        /**
         * IPAddresses is a list of IP addresses to be used on the Certificate
         */
        "ipAddresses"?: Array<string>;
        /**
         * IsCA will mark this Certificate as valid for signing. This implies that the 'cert sign' usage is set
         */
        "isCA"?: boolean;
        /**
         * IssuerRef is a reference to the issuer for this certificate. If the 'kind' field is not set, or set to 'Issuer', an Issuer resource with the given name in the same namespace as the Certificate will be used. If the 'kind' field is set to 'ClusterIssuer', a ClusterIssuer with the provided name will be used. The 'name' field in this stanza is required at all times.
         */
        "issuerRef": {
            "group"?: string;
            "kind"?: string;
            "name": string;
        };
        /**
         * KeyAlgorithm is the private key algorithm of the corresponding private key for this certificate. If provided, allowed values are either "rsa" or "ecdsa" If KeyAlgorithm is specified and KeySize is not provided, key size of 256 will be used for "ecdsa" key algorithm and key size of 2048 will be used for "rsa" key algorithm.
         */
        "keyAlgorithm"?: "rsa" | "ecdsa";
        /**
         * KeyEncoding is the private key cryptography standards (PKCS) for this certificate's private key to be encoded in. If provided, allowed values are "pkcs1" and "pkcs8" standing for PKCS#1 and PKCS#8, respectively. If KeyEncoding is not specified, then PKCS#1 will be used by default.
         */
        "keyEncoding"?: "pkcs1" | "pkcs8";
        /**
         * KeySize is the key bit size of the corresponding private key for this certificate. If provided, value must be between 2048 and 8192 inclusive when KeyAlgorithm is empty or is set to "rsa", and value must be one of (256, 384, 521) when KeyAlgorithm is set to "ecdsa".
         */
        "keySize"?: number;
        /**
         * Organization is the organization to be used on the Certificate
         */
        "organization"?: Array<string>;
        /**
         * Certificate renew before expiration duration
         */
        "renewBefore"?: string;
        /**
         * SecretName is the name of the secret resource to store this secret in
         */
        "secretName": string;
        /**
         * Usages is the set of x509 actions that are enabled for a given key. Defaults are ('digital signature', 'key encipherment') if empty
         */
        "usages"?: Array<"signing" | "digital signature" | "content commitment" | "key encipherment" | "key agreement" | "data encipherment" | "cert sign" | "crl sign" | "encipher only" | "decipher only" | "any" | "server auth" | "client auth" | "code signing" | "email protection" | "s/mime" | "ipsec end system" | "ipsec tunnel" | "ipsec user" | "timestamping" | "ocsp signing" | "microsoft sgc" | "netscape sgc">;
    };
    /**
     * CertificateStatus defines the observed state of Certificate
     */
    "status"?: {
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
             */
            "lastTransitionTime"?: string;
            /**
             * Message is a human readable description of the details of the last transition, complementing reason.
             */
            "message"?: string;
            /**
             * Reason is a brief machine readable explanation for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status of the condition, one of ('True', 'False', 'Unknown').
             */
            "status": "True" | "False" | "Unknown";
            /**
             * Type of the condition, currently ('Ready').
             */
            "type": string;
        }>;
        "lastFailureTime"?: string;
        /**
         * The expiration time of the certificate stored in the secret named by this resource in spec.secretName.
         */
        "notAfter"?: string;
    };
}
/**
 * Certificate is a type to represent a Certificate from ACME
 */
export declare class Certificate extends Model<ICertificate> implements ICertificate {
    "apiVersion": ICertificate["apiVersion"];
    "kind": ICertificate["kind"];
    "metadata"?: ICertificate["metadata"];
    "spec"?: ICertificate["spec"];
    "status"?: ICertificate["status"];
    static apiVersion: ICertificate["apiVersion"];
    static kind: ICertificate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICertificate>;
    constructor(data?: ModelData<ICertificate>);
}
