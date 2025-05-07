import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AcidZalanDoV1PostgresTeam";

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

export class PostgresTeam extends Model<IPostgresTeam> implements IPostgresTeam {
  "kind": IPostgresTeam["kind"];
  "apiVersion": IPostgresTeam["apiVersion"];
  "spec": IPostgresTeam["spec"];
  "metadata"?: IPostgresTeam["metadata"];

static apiVersion: IPostgresTeam["apiVersion"] = "acid.zalan.do/v1";
static kind: IPostgresTeam["kind"] = "PostgresTeam";
static is = createTypeMetaGuard<IPostgresTeam>(PostgresTeam);

constructor(data?: ModelData<IPostgresTeam>) {
  super();

  this.setDefinedProps({
    apiVersion: PostgresTeam.apiVersion,
    kind: PostgresTeam.kind,
    ...data
  } as IPostgresTeam);
}
}


setValidateFunc(PostgresTeam, validate as ValidateFunc<IPostgresTeam>);
