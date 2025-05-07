import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy";

/**
 * StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.
 */
export interface IStatefulSetPersistentVolumeClaimRetentionPolicy {
  /**
   * WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of `Retain` causes PVCs to not be affected by StatefulSet deletion. The `Delete` policy causes those PVCs to be deleted.
   */
  "whenDeleted"?: string;
  /**
   * WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of `Retain` causes PVCs to not be affected by a scaledown. The `Delete` policy causes the associated PVCs for any excess pods above the replica count to be deleted.
   */
  "whenScaled"?: string;
}

/**
 * StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.
 */
export class StatefulSetPersistentVolumeClaimRetentionPolicy extends Model<IStatefulSetPersistentVolumeClaimRetentionPolicy> implements IStatefulSetPersistentVolumeClaimRetentionPolicy {
  "whenDeleted"?: string;
  "whenScaled"?: string;

constructor(data?: ModelData<IStatefulSetPersistentVolumeClaimRetentionPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StatefulSetPersistentVolumeClaimRetentionPolicy, validate as ValidateFunc<IStatefulSetPersistentVolumeClaimRetentionPolicy>);

export {
  IStatefulSetPersistentVolumeClaimRetentionPolicy as IIoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy,
  StatefulSetPersistentVolumeClaimRetentionPolicy as IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy
};
