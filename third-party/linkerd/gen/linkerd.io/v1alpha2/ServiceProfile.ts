import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LinkerdIoV1alpha2ServiceProfile";

export interface IServiceProfile {
  /**
   * Spec is the custom resource spec
   */
  "spec"?: {
    "dstOverrides"?: Array<{
      "authority"?: string;
      "weight"?: number | string;
    }>;
    "opaquePorts"?: Array<string>;
    /**
     * RetryBudget describes the maximum number of retries that should be issued to this service.
     */
    "retryBudget"?: {
      "minRetriesPerSecond": number;
      "retryRatio": number;
      "ttl": string;
    };
    "routes"?: Array<{
      /**
       * RequestMatch describes the conditions under which to match a Route.
       */
      "condition": {
        "pathRegex"?: string;
        "method"?: string;
        "all"?: Array<{
        }>;
        "any"?: Array<{
        }>;
        "not"?: Array<{
        }>;
      };
      "isRetryable"?: boolean;
      "name": string;
      "timeout"?: string;
      "responseClasses"?: Array<{
        /**
         * ResponseMatch describes the conditions under which to classify a response.
         */
        "condition": {
          "all"?: Array<{
          }>;
          "any"?: Array<{
          }>;
          "not"?: {
          };
          /**
           * Range describes a range of integers (e.g. status codes).
           */
          "status"?: {
            "max"?: number;
            "min"?: number;
          };
        };
        "isFailure"?: boolean;
      }>;
    }>;
  };
  "apiVersion": "linkerd.io/v1alpha2";
  "kind": "ServiceProfile";
  "metadata"?: IObjectMeta;
}

export class ServiceProfile extends Model<IServiceProfile> implements IServiceProfile {
  "spec"?: IServiceProfile["spec"];
  "apiVersion": IServiceProfile["apiVersion"];
  "kind": IServiceProfile["kind"];
  "metadata"?: IServiceProfile["metadata"];

static apiVersion: IServiceProfile["apiVersion"] = "linkerd.io/v1alpha2";
static kind: IServiceProfile["kind"] = "ServiceProfile";
static is = createTypeMetaGuard<IServiceProfile>(ServiceProfile);

constructor(data?: ModelData<IServiceProfile>) {
  super();

  this.setDefinedProps({
    apiVersion: ServiceProfile.apiVersion,
    kind: ServiceProfile.kind,
    ...data
  } as IServiceProfile);
}
}


setValidateFunc(ServiceProfile, validate as ValidateFunc<IServiceProfile>);
