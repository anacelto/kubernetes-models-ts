import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkloadGroup {
    /**
     * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
     */
    "spec"?: {
        /**
         * Metadata that will be used for all corresponding `WorkloadEntries`.
         */
        "metadata"?: {
            "annotations"?: {
                [key: string]: string;
            };
            "labels"?: {
                [key: string]: string;
            };
        };
        /**
         * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
         */
        "probe"?: {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } & (Exclude<{
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        }, {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } & ({
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet": {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } | {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket": {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } | {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec": {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        })> | {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet": {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } | {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec"?: {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket": {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        } | {
            /**
             * Health is determined by how the command that is executed exited.
             */
            "exec": {
                /**
                 * Command to run.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded.
             */
            "failureThreshold"?: number;
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Headers the proxy will pass on to make the request.
                 */
                "httpHeaders"?: Array<{
                    "name"?: string;
                    "value"?: string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Port on which the endpoint lives.
                 */
                "port"?: number;
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before readiness probes are initiated.
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed.
             */
            "successThreshold"?: number;
            /**
             * Health is determined by if the proxy is able to connect.
             */
            "tcpSocket"?: {
                "host"?: string;
                "port"?: number;
            };
            /**
             * Number of seconds after which the probe times out.
             */
            "timeoutSeconds"?: number;
        });
        /**
         * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
         */
        "template"?: {
            "address"?: string;
            /**
             * One or more labels associated with the endpoint.
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * The locality associated with the endpoint.
             */
            "locality"?: string;
            "network"?: string;
            /**
             * Set of ports associated with the endpoint.
             */
            "ports"?: {
                [key: string]: number;
            };
            "serviceAccount"?: string;
            /**
             * The load balancing weight associated with the endpoint.
             */
            "weight"?: number;
        };
    };
    "status"?: {};
    "apiVersion": "networking.istio.io/v1alpha3";
    "kind": "WorkloadGroup";
    "metadata"?: IObjectMeta;
}
export declare class WorkloadGroup extends Model<IWorkloadGroup> implements IWorkloadGroup {
    "spec"?: IWorkloadGroup["spec"];
    "status"?: IWorkloadGroup["status"];
    "apiVersion": IWorkloadGroup["apiVersion"];
    "kind": IWorkloadGroup["kind"];
    "metadata"?: IWorkloadGroup["metadata"];
    static apiVersion: IWorkloadGroup["apiVersion"];
    static kind: IWorkloadGroup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkloadGroup>;
    constructor(data?: ModelData<IWorkloadGroup>);
}
