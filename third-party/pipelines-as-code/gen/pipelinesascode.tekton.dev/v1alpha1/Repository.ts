import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PipelinesascodeTektonDevV1alpha1Repository";

/**
 * Schema for the repository API
 */
export interface IRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/  api-conventions.md#resources
   */
  "apiVersion": "pipelinesascode.tekton.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "Repository";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of Repository
   */
  "spec"?: {
    /**
     * Settings relative to the Repository
     */
    "settings"?: {
      /**
       * Set policy on actions allowing only some teams
       */
      "policy"?: {
        "ok_to_test"?: Array<string>;
        "pull_request"?: Array<string>;
      };
      "github_app_token_scope_repos"?: Array<string>;
      /**
       * From where the PipelineRun definitions will be coming from
       */
      "pipelinerun_provenance"?: "source" | "default_branch";
    };
    /**
     * Number of maximum pipelinerun running at any moment
     */
    "concurrency_limit"?: number;
    /**
     * Repository URL
     */
    "url"?: string;
    /**
     * Git repository provider
     */
    "type"?: "github" | "gitea" | "bitbucket" | "gitlab" | "bitbucket-enteprise";
    "params"?: Array<{
      /**
       * The name of the params for the pipelinerun variable
       */
      "name": string;
      /**
       * The value of the params as injected into pipelinerun
       */
      "value"?: string;
      /**
       * A CEL filter to set condition on param
       */
      "filter"?: string;
      /**
       * The value as coming from secret
       */
      "secret_ref"?: {
        /**
         * Key of the secret
         */
        "key": string;
        /**
         * Name of the secret
         */
        "name": string;
      };
    }>;
    "incoming"?: Array<{
      /**
       * Type of webhook
       */
      "type"?: "webhook-url";
      /**
       * Parameters accepted to be overwritten when posting to the webhook
       */
      "params"?: Array<string>;
      /**
       * List of target branches or ref to trigger webhooks on
       */
      "targets"?: Array<string>;
      /**
       * Secret to use for the webhook
       */
      "secret"?: {
        /**
         * Key of the secret
         */
        "key"?: string;
        /**
         * Name of the secret
         */
        "name"?: string;
      };
    }>;
    "git_provider"?: {
      /**
       * The Git provider api url
       */
      "url"?: string;
      /**
       * The Git provider api user
       */
      "user"?: string;
      /**
       * The Git provider type
       */
      "type"?: string;
      "secret"?: {
        /**
         * Key inside the secret
         */
        "key"?: string;
        /**
         * The secret name
         */
        "name"?: string;
      };
      "webhook_secret"?: {
        /**
         * Key inside the secret
         */
        "key"?: string;
        /**
         * The secret name
         */
        "name"?: string;
      };
    };
  };
}

/**
 * Schema for the repository API
 */
export class Repository extends Model<IRepository> implements IRepository {
  "apiVersion": IRepository["apiVersion"];
  "kind": IRepository["kind"];
  "metadata"?: IRepository["metadata"];
  "spec"?: IRepository["spec"];

static apiVersion: IRepository["apiVersion"] = "pipelinesascode.tekton.dev/v1alpha1";
static kind: IRepository["kind"] = "Repository";
static is = createTypeMetaGuard<IRepository>(Repository);

constructor(data?: ModelData<IRepository>) {
  super();

  this.setDefinedProps({
    apiVersion: Repository.apiVersion,
    kind: Repository.kind,
    ...data
  } as IRepository);
}
}


setValidateFunc(Repository, validate as ValidateFunc<IRepository>);
