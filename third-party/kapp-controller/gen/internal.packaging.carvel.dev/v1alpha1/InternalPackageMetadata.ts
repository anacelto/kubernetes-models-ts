import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/InternalPackagingCarvelDevV1alpha1InternalPackageMetadata";

export interface IInternalPackageMetadata {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "internal.packaging.carvel.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "InternalPackageMetadata";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Classifiers of the package (optional; Array of strings)
     */
    "categories"?: Array<string>;
    /**
     * Human friendly name of the package (optional; string)
     */
    "displayName"?: string;
    /**
     * Base64 encoded icon (optional; string)
     */
    "iconSVGBase64"?: string;
    /**
     * Long description of the package (optional; string)
     */
    "longDescription"?: string;
    /**
     * List of maintainer info for the package. Currently only supports the name key. (optional; array of maintner info)
     */
    "maintainers"?: Array<{
      "name"?: string;
    }>;
    /**
     * Name of the entity distributing the package (optional; string)
     */
    "providerName"?: string;
    /**
     * Short desription of the package (optional; string)
     */
    "shortDescription"?: string;
    /**
     * Description of the support available for the package (optional; string)
     */
    "supportDescription"?: string;
  };
}

export class InternalPackageMetadata extends Model<IInternalPackageMetadata> implements IInternalPackageMetadata {
  "apiVersion": IInternalPackageMetadata["apiVersion"];
  "kind": IInternalPackageMetadata["kind"];
  "metadata"?: IInternalPackageMetadata["metadata"];
  "spec": IInternalPackageMetadata["spec"];

static apiVersion: IInternalPackageMetadata["apiVersion"] = "internal.packaging.carvel.dev/v1alpha1";
static kind: IInternalPackageMetadata["kind"] = "InternalPackageMetadata";
static is = createTypeMetaGuard<IInternalPackageMetadata>(InternalPackageMetadata);

constructor(data?: ModelData<IInternalPackageMetadata>) {
  super();

  this.setDefinedProps({
    apiVersion: InternalPackageMetadata.apiVersion,
    kind: InternalPackageMetadata.kind,
    ...data
  } as IInternalPackageMetadata);
}
}


setValidateFunc(InternalPackageMetadata, validate as ValidateFunc<IInternalPackageMetadata>);
