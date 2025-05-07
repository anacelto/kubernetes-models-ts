import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface INetworkManagementConnectivityTest {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "networkmanagement.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "NetworkManagementConnectivityTest";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The user-supplied description of the Connectivity Test.
         * Maximum of 512 characters.
         */
        "description"?: string;
        /**
         * Required. Destination specification of the Connectivity Test.
         *
         * You can use a combination of destination IP address, Compute
         * Engine VM instance, or VPC network to uniquely identify the
         * destination location.
         *
         * Even if the destination IP address is not unique, the source IP
         * location is unique. Usually, the analysis can infer the destination
         * endpoint from route information.
         *
         * If the destination you specify is a VM instance and the instance has
         * multiple network interfaces, then you must also specify either a
         * destination IP address or VPC network to identify the destination
         * interface.
         *
         * A reachability analysis proceeds even if the destination location
         * is ambiguous. However, the result can include endpoints that you
         * don't intend to test.
         */
        "destination": {
            /**
             * A Compute Engine instance URI.
             */
            "instance"?: string;
            /**
             * The IP address of the endpoint, which can be an external or
             * internal IP. An IPv6 address is only allowed when the test's
             * destination is a global load balancer VIP.
             */
            "ipAddress"?: string;
            /**
             * A Compute Engine network URI.
             */
            "network"?: string;
            /**
             * The IP protocol port of the endpoint. Only applicable when
             * protocol is TCP or UDP.
             */
            "port"?: number;
            /**
             * Project ID where the endpoint is located. The Project ID can be
             * derived from the URI if you provide a VM instance or network URI.
             * The following are two cases where you must provide the project ID:
             * 1. Only the IP address is specified, and the IP address is within
             * a GCP project. 2. When you are using Shared VPC and the IP address
             * that you provide is from the service project. In this case, the
             * network that the IP address resides in is defined in the host
             * project.
             */
            "projectId"?: string;
        };
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
         * IP Protocol of the test. When not provided, "TCP" is assumed.
         */
        "protocol"?: string;
        /**
         * Other projects that may be relevant for reachability analysis.
         * This is applicable to scenarios where a test can cross project
         * boundaries.
         */
        "relatedProjects"?: Array<string>;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Required. Source specification of the Connectivity Test.
         *
         * You can use a combination of source IP address, virtual machine
         * (VM) instance, or Compute Engine network to uniquely identify the
         * source location.
         *
         * Examples: If the source IP address is an internal IP address within
         * a Google Cloud Virtual Private Cloud (VPC) network, then you must
         * also specify the VPC network. Otherwise, specify the VM instance,
         * which already contains its internal IP address and VPC network
         * information.
         *
         * If the source of the test is within an on-premises network, then
         * you must provide the destination VPC network.
         *
         * If the source endpoint is a Compute Engine VM instance with multiple
         * network interfaces, the instance itself is not sufficient to
         * identify the endpoint. So, you must also specify the source IP
         * address or VPC network.
         *
         * A reachability analysis proceeds even if the source location is
         * ambiguous. However, the test result may include endpoints that
         * you don't intend to test.
         */
        "source": {
            /**
             * A Compute Engine instance URI.
             */
            "instance"?: string;
            /**
             * The IP address of the endpoint, which can be an external or
             * internal IP. An IPv6 address is only allowed when the test's
             * destination is a global load balancer VIP.
             */
            "ipAddress"?: string;
            /**
             * A Compute Engine network URI.
             */
            "network"?: string;
            /**
             * Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].
             */
            "networkType"?: string;
            /**
             * The IP protocol port of the endpoint. Only applicable when
             * protocol is TCP or UDP.
             */
            "port"?: number;
            /**
             * Project ID where the endpoint is located. The Project ID can be
             * derived from the URI if you provide a VM instance or network URI.
             * The following are two cases where you must provide the project ID:
             *
             * 1. Only the IP address is specified, and the IP address is
             *    within a GCP project.
             * 2. When you are using Shared VPC and the IP address
             *    that you provide is from the service project. In this case,
             *    the network that the IP address resides in is defined in the
             *    host project.
             */
            "projectId"?: string;
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
export declare class NetworkManagementConnectivityTest extends Model<INetworkManagementConnectivityTest> implements INetworkManagementConnectivityTest {
    "apiVersion": INetworkManagementConnectivityTest["apiVersion"];
    "kind": INetworkManagementConnectivityTest["kind"];
    "metadata"?: INetworkManagementConnectivityTest["metadata"];
    "spec": INetworkManagementConnectivityTest["spec"];
    "status"?: INetworkManagementConnectivityTest["status"];
    static apiVersion: INetworkManagementConnectivityTest["apiVersion"];
    static kind: INetworkManagementConnectivityTest["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkManagementConnectivityTest>;
    constructor(data?: ModelData<INetworkManagementConnectivityTest>);
}
