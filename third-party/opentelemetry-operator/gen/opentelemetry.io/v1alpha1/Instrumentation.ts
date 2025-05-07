import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OpentelemetryIoV1alpha1Instrumentation";

export interface IInstrumentation {
  "apiVersion": "opentelemetry.io/v1alpha1";
  "kind": "Instrumentation";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "apacheHttpd"?: {
      "attrs"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "configPath"?: string;
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "version"?: string;
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "defaults"?: {
      "useLabelsForResourceAttributes"?: boolean;
    };
    "dotnet"?: {
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "env"?: Array<{
      "name": string;
      "value"?: string;
      "valueFrom"?: {
        "configMapKeyRef"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "fieldRef"?: {
          "apiVersion"?: string;
          "fieldPath": string;
        };
        "resourceFieldRef"?: {
          "containerName"?: string;
          "divisor"?: number | string;
          "resource": string;
        };
        "secretKeyRef"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
    }>;
    "exporter"?: {
      "endpoint"?: string;
      "tls"?: {
        "ca_file"?: string;
        "cert_file"?: string;
        "configMapName"?: string;
        "key_file"?: string;
        "secretName"?: string;
      };
    };
    "go"?: {
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "imagePullPolicy"?: string;
    "java"?: {
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "extensions"?: Array<{
        "dir": string;
        "image": string;
      }>;
      "image"?: string;
      "resources"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "nginx"?: {
      "attrs"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "configFile"?: string;
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "nodejs"?: {
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "propagators"?: Array<"tracecontext" | "baggage" | "b3" | "b3multi" | "jaeger" | "xray" | "ottrace" | "none">;
    "python"?: {
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "resourceRequirements"?: {
        "claims"?: Array<{
          "name": string;
          "request"?: string;
        }>;
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "volumeClaimTemplate"?: {
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec": {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
            "namespace"?: string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeAttributesClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
      };
      "volumeLimitSize"?: number | string;
    };
    "resource"?: {
      "addK8sUIDAttributes"?: boolean;
      "resourceAttributes"?: {
        [key: string]: string;
      };
    };
    "sampler"?: {
      "argument"?: string;
      "type"?: "always_on" | "always_off" | "traceidratio" | "parentbased_always_on" | "parentbased_always_off" | "parentbased_traceidratio" | "jaeger_remote" | "xray";
    };
  };
  "status"?: {
  };
}

export class Instrumentation extends Model<IInstrumentation> implements IInstrumentation {
  "apiVersion": IInstrumentation["apiVersion"];
  "kind": IInstrumentation["kind"];
  "metadata"?: IInstrumentation["metadata"];
  "spec"?: IInstrumentation["spec"];
  "status"?: IInstrumentation["status"];

static apiVersion: IInstrumentation["apiVersion"] = "opentelemetry.io/v1alpha1";
static kind: IInstrumentation["kind"] = "Instrumentation";
static is = createTypeMetaGuard<IInstrumentation>(Instrumentation);

constructor(data?: ModelData<IInstrumentation>) {
  super();

  this.setDefinedProps({
    apiVersion: Instrumentation.apiVersion,
    kind: Instrumentation.kind,
    ...data
  } as IInstrumentation);
}
}


setValidateFunc(Instrumentation, validate as ValidateFunc<IInstrumentation>);
