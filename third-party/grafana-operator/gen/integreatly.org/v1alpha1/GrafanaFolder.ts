import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IntegreatlyOrgV1alpha1GrafanaFolder";

/**
 * GrafanaFolder is the Schema for the grafana folders and folderpermissions API
 */
export interface IGrafanaFolder {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "integreatly.org/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "GrafanaFolder";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * FolderPermissions shall contain the _complete_ permissions for the folder. Any permission not listed here, will be removed from the folder.
     */
    "permissions"?: Array<{
      "permissionLevel": number;
      "permissionTarget": string;
      "permissionTargetType": string;
    }>;
    /**
     * FolderName is the display-name of the folder and must match CustomFolderName of any GrafanaDashboard you want to put in
     */
    "title": string;
  };
}

/**
 * GrafanaFolder is the Schema for the grafana folders and folderpermissions API
 */
export class GrafanaFolder extends Model<IGrafanaFolder> implements IGrafanaFolder {
  "apiVersion": IGrafanaFolder["apiVersion"];
  "kind": IGrafanaFolder["kind"];
  "metadata"?: IGrafanaFolder["metadata"];
  "spec"?: IGrafanaFolder["spec"];

static apiVersion: IGrafanaFolder["apiVersion"] = "integreatly.org/v1alpha1";
static kind: IGrafanaFolder["kind"] = "GrafanaFolder";
static is = createTypeMetaGuard<IGrafanaFolder>(GrafanaFolder);

constructor(data?: ModelData<IGrafanaFolder>) {
  super();

  this.setDefinedProps({
    apiVersion: GrafanaFolder.apiVersion,
    kind: GrafanaFolder.kind,
    ...data
  } as IGrafanaFolder);
}
}


setValidateFunc(GrafanaFolder, validate as ValidateFunc<IGrafanaFolder>);
