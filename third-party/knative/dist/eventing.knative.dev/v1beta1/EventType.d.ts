import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * EventType represents a type of event that can be consumed from a Broker.
 */
export interface IEventType {
    /**
     * Spec defines the desired state of the EventType.
     */
    "spec"?: {
        "broker"?: string;
        /**
         * Description is an optional field used to describe the EventType, in any meaningful way.
         */
        "description"?: string;
        /**
         * Schema is a URI, it represents the CloudEvents schemaurl extension attribute. It may be a JSON schema, a protobuf schema, etc. It is optional.
         */
        "schema"?: string;
        /**
         * SchemaData allows the CloudEvents schema to be stored directly in the EventType. Content is dependent on the encoding. Optional attribute. The contents are not validated or manipulated by the system.
         */
        "schemaData"?: string;
        /**
         * Source is a URI, it represents the CloudEvents source.
         */
        "source"?: string;
        /**
         * Type represents the CloudEvents type. It is authoritative.
         */
        "type"?: string;
    };
    /**
     * Status represents the current state of the EventType. This data may be out of date.
     */
    "status"?: {
        /**
         * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
         */
        "annotations"?: {};
        /**
         * Conditions the latest available observations of a resource's current state.
         */
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
             */
            "lastTransitionTime"?: string;
            /**
             * A human readable message indicating details about the transition.
             */
            "message"?: string;
            /**
             * The reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
             */
            "severity"?: string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            "status": string;
            /**
             * Type of condition.
             */
            "type": string;
        }>;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
    };
    "apiVersion": "eventing.knative.dev/v1beta1";
    "kind": "EventType";
    "metadata"?: IObjectMeta;
}
/**
 * EventType represents a type of event that can be consumed from a Broker.
 */
export declare class EventType extends Model<IEventType> implements IEventType {
    "spec"?: IEventType["spec"];
    "status"?: IEventType["status"];
    "apiVersion": IEventType["apiVersion"];
    "kind": IEventType["kind"];
    "metadata"?: IEventType["metadata"];
    static apiVersion: IEventType["apiVersion"];
    static kind: IEventType["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEventType>;
    constructor(data?: ModelData<IEventType>);
}
