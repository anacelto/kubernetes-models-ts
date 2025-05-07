import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeRegionNetworkEndpointGroup";

export interface IComputeRegionNetworkEndpointGroup {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeRegionNetworkEndpointGroup";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Only valid when networkEndpointType is "SERVERLESS".
     * Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
     */
    "cloudFunction"?: {
      /**
       * Immutable. A user-defined name of the Cloud Function.
       * The function name is case-sensitive and must be 1-63 characters long.
       * Example value: "func1".
       */
      "functionRef"?: {
        /**
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
         * Allowed value: The `name` field of a `CloudFunctionsFunction` resource.
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
       * Immutable. A template to parse function field from a request URL. URL mask allows
       * for routing to multiple Cloud Functions without having to create
       * multiple Network Endpoint Groups and backend services.
       * 
       * For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
       * can be backed by the same Serverless NEG with URL mask "/". The URL mask
       * will parse them to { function = "function1" } and { function = "function2" } respectively.
       */
      "urlMask"?: string;
    };
    /**
     * Immutable. Only valid when networkEndpointType is "SERVERLESS".
     * Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
     */
    "cloudRun"?: {
      /**
       * Immutable. Cloud Run service is the main resource of Cloud Run.
       * The service must be 1-63 characters long, and comply with RFC1035.
       * Example value: "run-service".
       */
      "serviceRef"?: {
        /**
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
         * Allowed value: The `name` field of a `RunService` resource.
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
       * Immutable. Cloud Run tag represents the "named-revision" to provide
       * additional fine-grained traffic routing information.
       * The tag must be 1-63 characters long, and comply with RFC1035.
       * Example value: "revision-0010".
       */
      "tag"?: string;
      /**
       * Immutable. A template to parse service and tag fields from a request URL.
       * URL mask allows for routing to multiple Run services without having
       * to create multiple network endpoint groups and backend services.
       * 
       * For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
       * an be backed by the same Serverless Network Endpoint Group (NEG) with
       * URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
       * and { service="bar2", tag="foo2" } respectively.
       */
      "urlMask"?: string;
    };
    /**
     * Immutable. An optional description of this resource. Provide this property when
     * you create the resource.
     */
    "description"?: string;
    /**
     * Immutable. Type of network endpoints in this network endpoint group. Defaults to SERVERLESS Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT"].
     */
    "networkEndpointType"?: string;
    /**
     * Immutable. This field is only used for PSC.
     * The URL of the network to which all network endpoints in the NEG belong. Uses
     * "default" project network if unspecified.
     */
    "networkRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
     * Immutable. The target service url used to set up private service connection to
     * a Google API or a PSC Producer Service Attachment.
     */
    "pscTargetService"?: string;
    /**
     * Immutable. A reference to the region where the Serverless NEGs Reside.
     */
    "region": string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. This field is only used for PSC.
     * Optional URL of the subnetwork to which all network endpoints in the NEG belong.
     */
    "subnetworkRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
    "selfLink"?: string;
  };
}

export class ComputeRegionNetworkEndpointGroup extends Model<IComputeRegionNetworkEndpointGroup> implements IComputeRegionNetworkEndpointGroup {
  "apiVersion": IComputeRegionNetworkEndpointGroup["apiVersion"];
  "kind": IComputeRegionNetworkEndpointGroup["kind"];
  "metadata"?: IComputeRegionNetworkEndpointGroup["metadata"];
  "spec": IComputeRegionNetworkEndpointGroup["spec"];
  "status"?: IComputeRegionNetworkEndpointGroup["status"];

static apiVersion: IComputeRegionNetworkEndpointGroup["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeRegionNetworkEndpointGroup["kind"] = "ComputeRegionNetworkEndpointGroup";
static is = createTypeMetaGuard<IComputeRegionNetworkEndpointGroup>(ComputeRegionNetworkEndpointGroup);

constructor(data?: ModelData<IComputeRegionNetworkEndpointGroup>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeRegionNetworkEndpointGroup.apiVersion,
    kind: ComputeRegionNetworkEndpointGroup.kind,
    ...data
  } as IComputeRegionNetworkEndpointGroup);
}
}


setValidateFunc(ComputeRegionNetworkEndpointGroup, validate as ValidateFunc<IComputeRegionNetworkEndpointGroup>);
