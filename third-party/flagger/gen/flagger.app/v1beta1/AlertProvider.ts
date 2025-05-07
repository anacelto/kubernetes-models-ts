import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FlaggerAppV1beta1AlertProvider";

/**
 * AlertProvider is the Schema for the AlertProvider API.
 */
export interface IAlertProvider {
  "apiVersion": "flagger.app/v1beta1";
  "kind": "AlertProvider";
  "metadata"?: IObjectMeta;
  /**
   * AlertProviderSpec defines the desired state of a AlertProvider.
   */
  "spec"?: {
    /**
     * Type of this provider
     */
    "type"?: "slack" | "msteams" | "discord" | "rocket" | "gchat";
    /**
     * Alert channel for this provider
     */
    "channel"?: string;
    /**
     * Bot username for this provider
     */
    "username"?: string;
    /**
     * Hook URL address of this provider
     */
    "address"?: string;
    /**
     * Http/s proxy of this provider
     */
    "proxy"?: string;
    /**
     * Kubernetes secret reference containing the provider address
     */
    "secretRef"?: {
      /**
       * Name of the Kubernetes secret
       */
      "name": string;
    };
  } & ({
    /**
     * Type of this provider
     */
    "type": "slack" | "msteams" | "discord" | "rocket" | "gchat";
    /**
     * Alert channel for this provider
     */
    "channel"?: string;
    /**
     * Bot username for this provider
     */
    "username"?: string;
    /**
     * Hook URL address of this provider
     */
    "address": string;
    /**
     * Http/s proxy of this provider
     */
    "proxy"?: string;
    /**
     * Kubernetes secret reference containing the provider address
     */
    "secretRef"?: {
      /**
       * Name of the Kubernetes secret
       */
      "name": string;
    };
  } | {
    /**
     * Type of this provider
     */
    "type": "slack" | "msteams" | "discord" | "rocket" | "gchat";
    /**
     * Alert channel for this provider
     */
    "channel"?: string;
    /**
     * Bot username for this provider
     */
    "username"?: string;
    /**
     * Hook URL address of this provider
     */
    "address"?: string;
    /**
     * Http/s proxy of this provider
     */
    "proxy"?: string;
    /**
     * Kubernetes secret reference containing the provider address
     */
    "secretRef": {
      /**
       * Name of the Kubernetes secret
       */
      "name": string;
    };
  });
}

/**
 * AlertProvider is the Schema for the AlertProvider API.
 */
export class AlertProvider extends Model<IAlertProvider> implements IAlertProvider {
  "apiVersion": IAlertProvider["apiVersion"];
  "kind": IAlertProvider["kind"];
  "metadata"?: IAlertProvider["metadata"];
  "spec"?: IAlertProvider["spec"];

static apiVersion: IAlertProvider["apiVersion"] = "flagger.app/v1beta1";
static kind: IAlertProvider["kind"] = "AlertProvider";
static is = createTypeMetaGuard<IAlertProvider>(AlertProvider);

constructor(data?: ModelData<IAlertProvider>) {
  super();

  this.setDefinedProps({
    apiVersion: AlertProvider.apiVersion,
    kind: AlertProvider.kind,
    ...data
  } as IAlertProvider);
}
}


setValidateFunc(AlertProvider, validate as ValidateFunc<IAlertProvider>);
