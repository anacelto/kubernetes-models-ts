import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IScrapeConfig {
    "apiVersion": "monitoring.coreos.com/v1alpha1";
    "kind": "ScrapeConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        "fileSDConfigs"?: Array<{
            "files": Array<string>;
            "refreshInterval"?: string;
        }>;
        "honorLabels"?: boolean;
        "honorTimestamps"?: boolean;
        "httpSDConfigs"?: Array<{
            "refreshInterval"?: string;
            "url": string;
        }>;
        "metricsPath"?: string;
        "relabelings"?: Array<{
            "action"?: "replace" | "Replace" | "keep" | "Keep" | "drop" | "Drop" | "hashmod" | "HashMod" | "labelmap" | "LabelMap" | "labeldrop" | "LabelDrop" | "labelkeep" | "LabelKeep" | "lowercase" | "Lowercase" | "uppercase" | "Uppercase" | "keepequal" | "KeepEqual" | "dropequal" | "DropEqual";
            "modulus"?: number;
            "regex"?: string;
            "replacement"?: string;
            "separator"?: string;
            "sourceLabels"?: Array<string>;
            "targetLabel"?: string;
        }>;
        "staticConfigs"?: Array<{
            "labels"?: {
                [key: string]: string;
            };
            "targets"?: Array<string>;
        }>;
    };
}
export declare class ScrapeConfig extends Model<IScrapeConfig> implements IScrapeConfig {
    "apiVersion": IScrapeConfig["apiVersion"];
    "kind": IScrapeConfig["kind"];
    "metadata"?: IScrapeConfig["metadata"];
    "spec": IScrapeConfig["spec"];
    static apiVersion: IScrapeConfig["apiVersion"];
    static kind: IScrapeConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IScrapeConfig>;
    constructor(data?: ModelData<IScrapeConfig>);
}
