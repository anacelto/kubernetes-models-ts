import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPostgresTeam {
    "kind": "PostgresTeam";
    "apiVersion": "acid.zalan.do/v1";
    "spec": {
        /**
         * Map for teamId and associated additional superuser teams
         */
        "additionalSuperuserTeams"?: {
            [key: string]: Array<string>;
        };
        /**
         * Map for teamId and associated additional teams
         */
        "additionalTeams"?: {
            [key: string]: Array<string>;
        };
        /**
         * Map for teamId and associated additional users
         */
        "additionalMembers"?: {
            [key: string]: Array<string>;
        };
    };
    "metadata"?: IObjectMeta;
}
export declare class PostgresTeam extends Model<IPostgresTeam> implements IPostgresTeam {
    "kind": IPostgresTeam["kind"];
    "apiVersion": IPostgresTeam["apiVersion"];
    "spec": IPostgresTeam["spec"];
    "metadata"?: IPostgresTeam["metadata"];
    static apiVersion: IPostgresTeam["apiVersion"];
    static kind: IPostgresTeam["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPostgresTeam>;
    constructor(data?: ModelData<IPostgresTeam>);
}
