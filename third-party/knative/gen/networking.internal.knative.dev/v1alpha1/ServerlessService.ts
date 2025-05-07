import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingInternalKnativeDevV1alpha1ServerlessService";

/**
 * ServerlessService is a proxy for the K8s service objects containing the endpoints for the revision, whether those are endpoints of the activator or revision pods. See: https://knative.page.link/naxz for details.
 */
export interface IServerlessService {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "networking.internal.knative.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ServerlessService";
  "metadata"?: IObjectMeta;
  /**
   * Spec is the desired state of the ServerlessService. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec"?: {
    /**
     * Mode describes the mode of operation of the ServerlessService.
     */
    "mode"?: string;
    /**
     * NumActivators contains number of Activators that this revision should be assigned. O means — assign all.
     */
    "numActivators"?: number;
    /**
     * ObjectRef defines the resource that this ServerlessService is responsible for making "serverless".
     */
    "objectRef": {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      "fieldPath"?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      "resourceVersion"?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      "uid"?: string;
    };
    /**
     * The application-layer protocol. Matches `RevisionProtocolType` set on the owning pa/revision. serving imports networking, so just use string.
     */
    "protocolType": string;
  };
  /**
   * Status is the current state of the ServerlessService. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: {
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
      [key: string]: string;
    };
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
    /**
     * PrivateServiceName holds the name of a core K8s Service resource that load balances over the user service pods backing this Revision.
     */
    "privateServiceName"?: string;
    /**
     * ServiceName holds the name of a core K8s Service resource that load balances over the pods backing this Revision (activator or revision).
     */
    "serviceName"?: string;
  };
}

/**
 * ServerlessService is a proxy for the K8s service objects containing the endpoints for the revision, whether those are endpoints of the activator or revision pods. See: https://knative.page.link/naxz for details.
 */
export class ServerlessService extends Model<IServerlessService> implements IServerlessService {
  "apiVersion": IServerlessService["apiVersion"];
  "kind": IServerlessService["kind"];
  "metadata"?: IServerlessService["metadata"];
  "spec"?: IServerlessService["spec"];
  "status"?: IServerlessService["status"];

static apiVersion: IServerlessService["apiVersion"] = "networking.internal.knative.dev/v1alpha1";
static kind: IServerlessService["kind"] = "ServerlessService";
static is = createTypeMetaGuard<IServerlessService>(ServerlessService);

constructor(data?: ModelData<IServerlessService>) {
  super();

  this.setDefinedProps({
    apiVersion: ServerlessService.apiVersion,
    kind: ServerlessService.kind,
    ...data
  } as IServerlessService);
}
}


setValidateFunc(ServerlessService, validate as ValidateFunc<IServerlessService>);
