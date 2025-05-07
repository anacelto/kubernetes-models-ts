import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FissionIoV1Package";

/**
 * Package Think of these as function-level images.
 */
export interface IPackage {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "fission.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Package";
  "metadata": IObjectMeta;
  /**
   * PackageSpec includes source/deploy archives and the reference of environment to build the package.
   */
  "spec": {
    /**
     * BuildCommand is a custom build command that builder used to build the source archive.
     */
    "buildcmd"?: string;
    /**
     * Deployment is the deployable archive that environment runtime used to run user function.
     */
    "deployment"?: {
      /**
       * Checksum ensures the integrity of packages
       * referenced by URL. Ignored for literals.
       */
      "checksum"?: {
        "sum"?: string;
        /**
         * ChecksumType specifies the checksum algorithm, such as
         * sha256, used for a checksum.
         */
        "type"?: string;
      };
      /**
       * Literal contents of the package. Can be used for
       * encoding packages below TODO (256 KB?) size.
       */
      "literal"?: string;
      /**
       * Type defines how the package is specified: literal or URL.
       * Available value:
       *  - literal
       *  - url
       */
      "type"?: string;
      /**
       * URL references a package.
       */
      "url"?: string;
    };
    /**
     * Environment is a reference to the environment for building source archive.
     */
    "environment": {
      "name": string;
      "namespace": string;
    };
    /**
     * Source is the archive contains source code and dependencies file.
     * If the package status is in PENDING state, builder manager will then
     * notify builder to compile source and save the result as deployable archive.
     */
    "source"?: {
      /**
       * Checksum ensures the integrity of packages
       * referenced by URL. Ignored for literals.
       */
      "checksum"?: {
        "sum"?: string;
        /**
         * ChecksumType specifies the checksum algorithm, such as
         * sha256, used for a checksum.
         */
        "type"?: string;
      };
      /**
       * Literal contents of the package. Can be used for
       * encoding packages below TODO (256 KB?) size.
       */
      "literal"?: string;
      /**
       * Type defines how the package is specified: literal or URL.
       * Available value:
       *  - literal
       *  - url
       */
      "type"?: string;
      /**
       * URL references a package.
       */
      "url"?: string;
    };
  };
  /**
   * Status indicates the build status of package.
   */
  "status"?: {
    /**
     * BuildLog stores build log during the compilation.
     */
    "buildlog"?: string;
    /**
     * BuildStatus is the package build status.
     */
    "buildstatus"?: string;
    /**
     * LastUpdateTimestamp will store the timestamp the package was last updated
     * metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.
     * https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35
     */
    "lastUpdateTimestamp"?: string;
  };
}

/**
 * Package Think of these as function-level images.
 */
export class Package extends Model<IPackage> implements IPackage {
  "apiVersion": IPackage["apiVersion"];
  "kind": IPackage["kind"];
  "metadata": IPackage["metadata"];
  "spec": IPackage["spec"];
  "status"?: IPackage["status"];

static apiVersion: IPackage["apiVersion"] = "fission.io/v1";
static kind: IPackage["kind"] = "Package";
static is = createTypeMetaGuard<IPackage>(Package);

constructor(data?: ModelData<IPackage>) {
  super();

  this.setDefinedProps({
    apiVersion: Package.apiVersion,
    kind: Package.kind,
    ...data
  } as IPackage);
}
}


setValidateFunc(Package, validate as ValidateFunc<IPackage>);
