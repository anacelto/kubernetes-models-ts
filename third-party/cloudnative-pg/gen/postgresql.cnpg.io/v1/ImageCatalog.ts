import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PostgresqlCnpgIoV1ImageCatalog";

/**
 * ImageCatalog is the Schema for the imagecatalogs API
 */
export interface IImageCatalog {
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
  "kind": "ImageCatalog";
  "metadata": IObjectMeta;
  /**
   * Specification of the desired behavior of the ImageCatalog.
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
 * ImageCatalog is the Schema for the imagecatalogs API
 */
export class ImageCatalog extends Model<IImageCatalog> implements IImageCatalog {
  "apiVersion": IImageCatalog["apiVersion"];
  "kind": IImageCatalog["kind"];
  "metadata": IImageCatalog["metadata"];
  "spec": IImageCatalog["spec"];

static apiVersion: IImageCatalog["apiVersion"] = "postgresql.cnpg.io/v1";
static kind: IImageCatalog["kind"] = "ImageCatalog";
static is = createTypeMetaGuard<IImageCatalog>(ImageCatalog);

constructor(data?: ModelData<IImageCatalog>) {
  super();

  this.setDefinedProps({
    apiVersion: ImageCatalog.apiVersion,
    kind: ImageCatalog.kind,
    ...data
  } as IImageCatalog);
}
}


setValidateFunc(ImageCatalog, validate as ValidateFunc<IImageCatalog>);
