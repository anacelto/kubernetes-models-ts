import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PostgresqlCnpgIoV1ClusterImageCatalog";

/**
 * ClusterImageCatalog is the Schema for the clusterimagecatalogs API
 */
export interface IClusterImageCatalog {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "postgresql.cnpg.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ClusterImageCatalog";
  "metadata": IObjectMeta;
  /**
   * Specification of the desired behavior of the ClusterImageCatalog.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec": {
    /**
     * List of CatalogImages available in the catalog
     */
    "images": Array<{
      /**
       * The image reference
       */
      "image": string;
      /**
       * The PostgreSQL major version of the image. Must be unique within the catalog.
       */
      "major": number;
    }>;
  };
}

/**
 * ClusterImageCatalog is the Schema for the clusterimagecatalogs API
 */
export class ClusterImageCatalog extends Model<IClusterImageCatalog> implements IClusterImageCatalog {
  "apiVersion": IClusterImageCatalog["apiVersion"];
  "kind": IClusterImageCatalog["kind"];
  "metadata": IClusterImageCatalog["metadata"];
  "spec": IClusterImageCatalog["spec"];

static apiVersion: IClusterImageCatalog["apiVersion"] = "postgresql.cnpg.io/v1";
static kind: IClusterImageCatalog["kind"] = "ClusterImageCatalog";
static is = createTypeMetaGuard<IClusterImageCatalog>(ClusterImageCatalog);

constructor(data?: ModelData<IClusterImageCatalog>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterImageCatalog.apiVersion,
    kind: ClusterImageCatalog.kind,
    ...data
  } as IClusterImageCatalog);
}
}


setValidateFunc(ClusterImageCatalog, validate as ValidateFunc<IClusterImageCatalog>);
