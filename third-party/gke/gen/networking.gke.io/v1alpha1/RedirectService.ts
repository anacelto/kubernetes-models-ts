import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1alpha1RedirectService";

/**
 * GoogleRedirectService describes the specification used by redirect services on GKE.
 */
export interface IRedirectService {
  "metadata"?: IObjectMeta;
  /**
   * Spec is the desired configuration for Google redirect service.
   */
  "spec"?: {
    /**
     * redirect specifies a redirection operation.
     */
    "redirect"?: {
      /**
       * Provider of the original service.
       */
      "provider"?: "kube-dns";
      /**
       * Type of service that needs redirection.
       */
      "type"?: "nodelocaldns";
    };
  };
  "apiVersion": "networking.gke.io/v1alpha1";
  "kind": "RedirectService";
}

/**
 * GoogleRedirectService describes the specification used by redirect services on GKE.
 */
export class RedirectService extends Model<IRedirectService> implements IRedirectService {
  "metadata"?: IRedirectService["metadata"];
  "spec"?: IRedirectService["spec"];
  "apiVersion": IRedirectService["apiVersion"];
  "kind": IRedirectService["kind"];

static apiVersion: IRedirectService["apiVersion"] = "networking.gke.io/v1alpha1";
static kind: IRedirectService["kind"] = "RedirectService";
static is = createTypeMetaGuard<IRedirectService>(RedirectService);

constructor(data?: ModelData<IRedirectService>) {
  super();

  this.setDefinedProps({
    apiVersion: RedirectService.apiVersion,
    kind: RedirectService.kind,
    ...data
  } as IRedirectService);
}
}


setValidateFunc(RedirectService, validate as ValidateFunc<IRedirectService>);
