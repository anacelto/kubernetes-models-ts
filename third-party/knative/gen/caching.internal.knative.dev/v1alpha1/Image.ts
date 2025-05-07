import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CachingInternalKnativeDevV1alpha1Image";

/**
 * Image is a Knative abstraction that encapsulates the interface by which Knative components express a desire to have a particular image cached.
 */
export interface IImage {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "caching.internal.knative.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Image";
  "metadata"?: IObjectMeta;
  /**
   * Spec holds the desired state of the Image (from the client).
   */
  "spec"?: {
    /**
     * Image is the name of the container image url to cache across the cluster.
     */
    "image": string;
    /**
     * ImagePullSecrets contains the names of the Kubernetes Secrets containing login information used by the Pods which will run this container.
     */
    "imagePullSecrets"?: Array<{
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    }>;
    /**
     * ServiceAccountName is the name of the Kubernetes ServiceAccount as which the Pods will run this container.  This is potentially used to authenticate the image pull if the service account has attached pull secrets.  For more information: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account
     */
    "serviceAccountName"?: string;
  };
  /**
   * Status communicates the observed state of the Image (from the controller).
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
  };
}

/**
 * Image is a Knative abstraction that encapsulates the interface by which Knative components express a desire to have a particular image cached.
 */
export class Image extends Model<IImage> implements IImage {
  "apiVersion": IImage["apiVersion"];
  "kind": IImage["kind"];
  "metadata"?: IImage["metadata"];
  "spec"?: IImage["spec"];
  "status"?: IImage["status"];

static apiVersion: IImage["apiVersion"] = "caching.internal.knative.dev/v1alpha1";
static kind: IImage["kind"] = "Image";
static is = createTypeMetaGuard<IImage>(Image);

constructor(data?: ModelData<IImage>) {
  super();

  this.setDefinedProps({
    apiVersion: Image.apiVersion,
    kind: Image.kind,
    ...data
  } as IImage);
}
}


setValidateFunc(Image, validate as ValidateFunc<IImage>);
