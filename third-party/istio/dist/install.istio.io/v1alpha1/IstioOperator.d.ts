import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIstioOperator {
    "apiVersion": "install.istio.io/v1alpha1";
    "kind": "IstioOperator";
    "metadata"?: IObjectMeta;
}
export declare class IstioOperator extends Model<IIstioOperator> implements IIstioOperator {
    "apiVersion": IIstioOperator["apiVersion"];
    "kind": IIstioOperator["kind"];
    "metadata"?: IIstioOperator["metadata"];
    static apiVersion: IIstioOperator["apiVersion"];
    static kind: IIstioOperator["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIstioOperator>;
    constructor(data?: ModelData<IIstioOperator>);
}
