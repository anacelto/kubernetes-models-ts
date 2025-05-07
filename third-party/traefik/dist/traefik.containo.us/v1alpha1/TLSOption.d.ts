import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options
 */
export interface ITLSOption {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "traefik.containo.us/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "TLSOption";
    "metadata": IObjectMeta;
    /**
     * TLSOptionSpec defines the desired state of a TLSOption.
     */
    "spec": {
        /**
         * ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#alpn-protocols
         */
        "alpnProtocols"?: Array<string>;
        /**
         * CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#cipher-suites
         */
        "cipherSuites"?: Array<string>;
        /**
         * ClientAuth defines the server's policy for TLS Client Authentication.
         */
        "clientAuth"?: {
            /**
             * ClientAuthType defines the client authentication type to apply.
             */
            "clientAuthType"?: "NoClientCert" | "RequestClientCert" | "RequireAnyClientCert" | "VerifyClientCertIfGiven" | "RequireAndVerifyClientCert";
            /**
             * SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.
             */
            "secretNames"?: Array<string>;
        };
        /**
         * CurvePreferences defines the preferred elliptic curves in a specific order. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#curve-preferences
         */
        "curvePreferences"?: Array<string>;
        /**
         * MaxVersion defines the maximum TLS version that Traefik will accept. Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: None.
         */
        "maxVersion"?: string;
        /**
         * MinVersion defines the minimum TLS version that Traefik will accept. Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: VersionTLS10.
         */
        "minVersion"?: string;
        /**
         * PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's. It is enabled automatically when minVersion or maxVersion is set. Deprecated: https://github.com/golang/go/issues/45430
         */
        "preferServerCipherSuites"?: boolean;
        /**
         * SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.
         */
        "sniStrict"?: boolean;
    };
}
/**
 * TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options
 */
export declare class TLSOption extends Model<ITLSOption> implements ITLSOption {
    "apiVersion": ITLSOption["apiVersion"];
    "kind": ITLSOption["kind"];
    "metadata": ITLSOption["metadata"];
    "spec": ITLSOption["spec"];
    static apiVersion: ITLSOption["apiVersion"];
    static kind: ITLSOption["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITLSOption>;
    constructor(data?: ModelData<ITLSOption>);
}
