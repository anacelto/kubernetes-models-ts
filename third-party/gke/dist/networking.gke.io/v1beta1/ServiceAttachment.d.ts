import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ServiceAttachment represents a Service Attachment associated with a service/ingress/gateway class
 */
export interface IServiceAttachment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ServiceAttachment";
    "metadata"?: IObjectMeta;
    /**
     * ServiceAttachmentSpec is the spec for a ServiceAttachment resource
     */
    "spec"?: {
        /**
         * ConnectionPreference determines how consumers are accepted.
         */
        "connectionPreference"?: string;
        /**
         * ConsumerAllowList is list of consumer projects that should be allow listed for this ServiceAttachment
         */
        "consumerAllowList"?: Array<{
            /**
             * ConnectionLimit is the connection limit for this Consumer project
             */
            "connectionLimit"?: number;
            /**
             * ForceSendFields is a list of field names (e.g. "ConnectionLimit") to unconditionally include in API requests. By default, fields with empty values are omitted from API requests. However, any non-pointer, non-interface field appearing in ForceSendFields will be sent to the server regardless of whether the field is empty or not. This may be used to include empty fields in Patch requests.
             */
            "forceSendFields"?: Array<string>;
            /**
             * NullFields is a list of field names (e.g. "ConnectionLimit") to include in API requests with the JSON null value. By default, fields with empty values are omitted from API requests. However, any field with an empty value appearing in NullFields will be sent to the server as null. It is an error if a field in this list has a non-empty value. This may be used to include null fields in Patch requests.
             */
            "nullFields"?: Array<string>;
            /**
             * Project is the project id or number for the project to set the limit for.
             */
            "project"?: string;
        }>;
        /**
         * ConsumerRejectList is the list of Consumer Project IDs or Numbers that should be rejected for this ServiceAttachment
         */
        "consumerRejectList"?: Array<string>;
        /**
         * NATSubnets contains the list of subnet names for PSC
         */
        "natSubnets"?: Array<string>;
        /**
         * ProxyProtocol when set will expose client information TCP/IP information
         */
        "proxyProtocol"?: boolean;
        /**
         * ResourceRef is the reference to the K8s resource that created the forwarding rule Only Services can be used as a reference
         */
        "resourceRef"?: {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            "apiGroup"?: string;
            /**
             * Kind is the type of resource being referenced
             */
            "kind": string;
            /**
             * Name is the name of resource being referenced
             */
            "name": string;
        };
    };
    /**
     * ServiceAttachmentStatus is the status for a ServiceAttachment resource
     */
    "status"?: {
        /**
         * Consumer Forwarding Rules using ts Service Attachment
         */
        "consumerForwardingRules"?: Array<{
            /**
             * Forwarding rule consumer created to use ServiceAttachment
             */
            "forwardingRuleURL"?: string;
            /**
             * Status of consumer forwarding rule
             */
            "status"?: string;
        }>;
        /**
         * ForwardingRuleURL is the URL to the GCE Forwarding Rule resource the Service Attachment points to
         */
        "forwardingRuleURL"?: string;
        /**
         * LastModifiedTimestamp tracks last time Status was updated
         */
        "lastModifiedTimestamp"?: string;
        /**
         * ServiceAttachmentURL is the URL for the GCE Service Attachment resource
         */
        "serviceAttachmentURL"?: string;
    };
}
/**
 * ServiceAttachment represents a Service Attachment associated with a service/ingress/gateway class
 */
export declare class ServiceAttachment extends Model<IServiceAttachment> implements IServiceAttachment {
    "apiVersion": IServiceAttachment["apiVersion"];
    "kind": IServiceAttachment["kind"];
    "metadata"?: IServiceAttachment["metadata"];
    "spec"?: IServiceAttachment["spec"];
    "status"?: IServiceAttachment["status"];
    static apiVersion: IServiceAttachment["apiVersion"];
    static kind: IServiceAttachment["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceAttachment>;
    constructor(data?: ModelData<IServiceAttachment>);
}
