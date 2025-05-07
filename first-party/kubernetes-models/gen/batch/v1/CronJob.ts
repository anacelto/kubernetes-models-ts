import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiBatchV1CronJobSpec } from "./CronJobSpec";
import { IIoK8sApiBatchV1CronJobStatus } from "./CronJobStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1CronJob";

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface ICronJob extends TypeMeta {
  "apiVersion": "batch/v1";
  "kind": "CronJob";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec"?: IIoK8sApiBatchV1CronJobSpec;
  /**
   * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: IIoK8sApiBatchV1CronJobStatus;
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export class CronJob extends Model<ICronJob> implements ICronJob {
  "apiVersion": ICronJob["apiVersion"];
  "kind": ICronJob["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IIoK8sApiBatchV1CronJobSpec;
  "status"?: IIoK8sApiBatchV1CronJobStatus;

static apiVersion: ICronJob["apiVersion"] = "batch/v1";
static kind: ICronJob["kind"] = "CronJob";
static is = createTypeMetaGuard<ICronJob>(CronJob);

constructor(data?: ModelData<ICronJob>) {
  super();

  this.setDefinedProps({
    apiVersion: CronJob.apiVersion,
    kind: CronJob.kind,
    ...data
  } as ICronJob);
}
}

setValidateFunc(CronJob, validate as ValidateFunc<ICronJob>);

export {
  ICronJob as IIoK8sApiBatchV1CronJob,
  CronJob as IoK8sApiBatchV1CronJob
};
