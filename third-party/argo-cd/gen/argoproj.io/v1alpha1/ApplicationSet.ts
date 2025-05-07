import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1ApplicationSet";

export interface IApplicationSet {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "ApplicationSet";
  "metadata": IObjectMeta;
  "spec": {
    "applyNestedSelectors"?: boolean;
    "generators": Array<{
      "clusterDecisionResource"?: {
        "configMapRef": string;
        "labelSelector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        "name"?: string;
        "requeueAfterSeconds"?: number;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
        "values"?: {
          [key: string]: string;
        };
      };
      "clusters"?: {
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
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
        "values"?: {
          [key: string]: string;
        };
      };
      "git"?: {
        "directories"?: Array<{
          "exclude"?: boolean;
          "path": string;
        }>;
        "files"?: Array<{
          "path": string;
        }>;
        "pathParamPrefix"?: string;
        "repoURL": string;
        "requeueAfterSeconds"?: number;
        "revision": string;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
        "values"?: {
          [key: string]: string;
        };
      };
      "list"?: {
        "elements"?: Array<any>;
        "elementsYaml"?: string;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
      };
      "matrix"?: {
        "generators": Array<{
          "clusterDecisionResource"?: {
            "configMapRef": string;
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "name"?: string;
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "clusters"?: {
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
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "git"?: {
            "directories"?: Array<{
              "exclude"?: boolean;
              "path": string;
            }>;
            "files"?: Array<{
              "path": string;
            }>;
            "pathParamPrefix"?: string;
            "repoURL": string;
            "requeueAfterSeconds"?: number;
            "revision": string;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "list"?: {
            "elements"?: Array<any>;
            "elementsYaml"?: string;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
          };
          "matrix"?: any;
          "merge"?: any;
          "plugin"?: {
            "configMapRef": {
              "name": string;
            };
            "input"?: {
              "parameters"?: {
                [key: string]: any;
              };
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "pullRequest"?: {
            "azuredevops"?: {
              "api"?: string;
              "labels"?: Array<string>;
              "organization": string;
              "project": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "bitbucket"?: {
              "api"?: string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "bearerToken"?: {
                "tokenRef": {
                  "key": string;
                  "secretName": string;
                };
              };
              "owner": string;
              "repo": string;
            };
            "bitbucketServer"?: {
              "api": string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "project": string;
              "repo": string;
            };
            "filters"?: Array<{
              "branchMatch"?: string;
              "targetBranchMatch"?: string;
            }>;
            "gitea"?: {
              "api": string;
              "insecure"?: boolean;
              "owner": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "github"?: {
              "api"?: string;
              "appSecretName"?: string;
              "labels"?: Array<string>;
              "owner": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "gitlab"?: {
              "api"?: string;
              "insecure"?: boolean;
              "labels"?: Array<string>;
              "project": string;
              "pullRequestState"?: string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
          };
          "scmProvider"?: {
            "awsCodeCommit"?: {
              "allBranches"?: boolean;
              "region"?: string;
              "role"?: string;
              "tagFilters"?: Array<{
                "key": string;
                "value"?: string;
              }>;
            };
            "azureDevOps"?: {
              "accessTokenRef": {
                "key": string;
                "secretName": string;
              };
              "allBranches"?: boolean;
              "api"?: string;
              "organization": string;
              "teamProject": string;
            };
            "bitbucket"?: {
              "allBranches"?: boolean;
              "appPasswordRef": {
                "key": string;
                "secretName": string;
              };
              "owner": string;
              "user": string;
            };
            "bitbucketServer"?: {
              "allBranches"?: boolean;
              "api": string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "project": string;
            };
            "cloneProtocol"?: string;
            "filters"?: Array<{
              "branchMatch"?: string;
              "labelMatch"?: string;
              "pathsDoNotExist"?: Array<string>;
              "pathsExist"?: Array<string>;
              "repositoryMatch"?: string;
            }>;
            "gitea"?: {
              "allBranches"?: boolean;
              "api": string;
              "insecure"?: boolean;
              "owner": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "github"?: {
              "allBranches"?: boolean;
              "api"?: string;
              "appSecretName"?: string;
              "organization": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "gitlab"?: {
              "allBranches"?: boolean;
              "api"?: string;
              "group": string;
              "includeSharedProjects"?: boolean;
              "includeSubgroups"?: boolean;
              "insecure"?: boolean;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
              "topic"?: string;
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
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
        }>;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
      };
      "merge"?: {
        "generators": Array<{
          "clusterDecisionResource"?: {
            "configMapRef": string;
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "name"?: string;
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "clusters"?: {
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
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "git"?: {
            "directories"?: Array<{
              "exclude"?: boolean;
              "path": string;
            }>;
            "files"?: Array<{
              "path": string;
            }>;
            "pathParamPrefix"?: string;
            "repoURL": string;
            "requeueAfterSeconds"?: number;
            "revision": string;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "list"?: {
            "elements"?: Array<any>;
            "elementsYaml"?: string;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
          };
          "matrix"?: any;
          "merge"?: any;
          "plugin"?: {
            "configMapRef": {
              "name": string;
            };
            "input"?: {
              "parameters"?: {
                [key: string]: any;
              };
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
            };
          };
          "pullRequest"?: {
            "azuredevops"?: {
              "api"?: string;
              "labels"?: Array<string>;
              "organization": string;
              "project": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "bitbucket"?: {
              "api"?: string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "bearerToken"?: {
                "tokenRef": {
                  "key": string;
                  "secretName": string;
                };
              };
              "owner": string;
              "repo": string;
            };
            "bitbucketServer"?: {
              "api": string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "project": string;
              "repo": string;
            };
            "filters"?: Array<{
              "branchMatch"?: string;
              "targetBranchMatch"?: string;
            }>;
            "gitea"?: {
              "api": string;
              "insecure"?: boolean;
              "owner": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "github"?: {
              "api"?: string;
              "appSecretName"?: string;
              "labels"?: Array<string>;
              "owner": string;
              "repo": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "gitlab"?: {
              "api"?: string;
              "insecure"?: boolean;
              "labels"?: Array<string>;
              "project": string;
              "pullRequestState"?: string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
          };
          "scmProvider"?: {
            "awsCodeCommit"?: {
              "allBranches"?: boolean;
              "region"?: string;
              "role"?: string;
              "tagFilters"?: Array<{
                "key": string;
                "value"?: string;
              }>;
            };
            "azureDevOps"?: {
              "accessTokenRef": {
                "key": string;
                "secretName": string;
              };
              "allBranches"?: boolean;
              "api"?: string;
              "organization": string;
              "teamProject": string;
            };
            "bitbucket"?: {
              "allBranches"?: boolean;
              "appPasswordRef": {
                "key": string;
                "secretName": string;
              };
              "owner": string;
              "user": string;
            };
            "bitbucketServer"?: {
              "allBranches"?: boolean;
              "api": string;
              "basicAuth"?: {
                "passwordRef": {
                  "key": string;
                  "secretName": string;
                };
                "username": string;
              };
              "project": string;
            };
            "cloneProtocol"?: string;
            "filters"?: Array<{
              "branchMatch"?: string;
              "labelMatch"?: string;
              "pathsDoNotExist"?: Array<string>;
              "pathsExist"?: Array<string>;
              "repositoryMatch"?: string;
            }>;
            "gitea"?: {
              "allBranches"?: boolean;
              "api": string;
              "insecure"?: boolean;
              "owner": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "github"?: {
              "allBranches"?: boolean;
              "api"?: string;
              "appSecretName"?: string;
              "organization": string;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
            };
            "gitlab"?: {
              "allBranches"?: boolean;
              "api"?: string;
              "group": string;
              "includeSharedProjects"?: boolean;
              "includeSubgroups"?: boolean;
              "insecure"?: boolean;
              "tokenRef"?: {
                "key": string;
                "secretName": string;
              };
              "topic"?: string;
            };
            "requeueAfterSeconds"?: number;
            "template"?: {
              "metadata": {
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
                "destination": {
                  "name"?: string;
                  "namespace"?: string;
                  "server"?: string;
                };
                "ignoreDifferences"?: Array<{
                  "group"?: string;
                  "jqPathExpressions"?: Array<string>;
                  "jsonPointers"?: Array<string>;
                  "kind": string;
                  "managedFieldsManagers"?: Array<string>;
                  "name"?: string;
                  "namespace"?: string;
                }>;
                "info"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "project": string;
                "revisionHistoryLimit"?: number;
                "source"?: {
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                };
                "sources"?: Array<{
                  "chart"?: string;
                  "directory"?: {
                    "exclude"?: string;
                    "include"?: string;
                    "jsonnet"?: {
                      "extVars"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                      "libs"?: Array<string>;
                      "tlas"?: Array<{
                        "code"?: boolean;
                        "name": string;
                        "value": string;
                      }>;
                    };
                    "recurse"?: boolean;
                  };
                  "helm"?: {
                    "fileParameters"?: Array<{
                      "name"?: string;
                      "path"?: string;
                    }>;
                    "ignoreMissingValueFiles"?: boolean;
                    "parameters"?: Array<{
                      "forceString"?: boolean;
                      "name"?: string;
                      "value"?: string;
                    }>;
                    "passCredentials"?: boolean;
                    "releaseName"?: string;
                    "skipCrds"?: boolean;
                    "valueFiles"?: Array<string>;
                    "values"?: string;
                    "valuesObject"?: {
                    };
                    "version"?: string;
                  };
                  "kustomize"?: {
                    "commonAnnotations"?: {
                      [key: string]: string;
                    };
                    "commonAnnotationsEnvsubst"?: boolean;
                    "commonLabels"?: {
                      [key: string]: string;
                    };
                    "components"?: Array<string>;
                    "forceCommonAnnotations"?: boolean;
                    "forceCommonLabels"?: boolean;
                    "images"?: Array<string>;
                    "namePrefix"?: string;
                    "nameSuffix"?: string;
                    "namespace"?: string;
                    "patches"?: Array<{
                      "options"?: {
                        [key: string]: boolean;
                      };
                      "patch"?: string;
                      "path"?: string;
                      "target"?: {
                        "annotationSelector"?: string;
                        "group"?: string;
                        "kind"?: string;
                        "labelSelector"?: string;
                        "name"?: string;
                        "namespace"?: string;
                        "version"?: string;
                      };
                    }>;
                    "replicas"?: Array<{
                      "count": number | string;
                      "name": string;
                    }>;
                    "version"?: string;
                  };
                  "path"?: string;
                  "plugin"?: {
                    "env"?: Array<{
                      "name": string;
                      "value": string;
                    }>;
                    "name"?: string;
                    "parameters"?: Array<{
                      "array"?: Array<string>;
                      "map"?: {
                        [key: string]: string;
                      };
                      "name"?: string;
                      "string"?: string;
                    }>;
                  };
                  "ref"?: string;
                  "repoURL": string;
                  "targetRevision"?: string;
                }>;
                "syncPolicy"?: {
                  "automated"?: {
                    "allowEmpty"?: boolean;
                    "prune"?: boolean;
                    "selfHeal"?: boolean;
                  };
                  "managedNamespaceMetadata"?: {
                    "annotations"?: {
                      [key: string]: string;
                    };
                    "labels"?: {
                      [key: string]: string;
                    };
                  };
                  "retry"?: {
                    "backoff"?: {
                      "duration"?: string;
                      "factor"?: number;
                      "maxDuration"?: string;
                    };
                    "limit"?: number;
                  };
                  "syncOptions"?: Array<string>;
                };
              };
            };
            "values"?: {
              [key: string]: string;
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
        }>;
        "mergeKeys": Array<string>;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
      };
      "plugin"?: {
        "configMapRef": {
          "name": string;
        };
        "input"?: {
          "parameters"?: {
            [key: string]: any;
          };
        };
        "requeueAfterSeconds"?: number;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
        "values"?: {
          [key: string]: string;
        };
      };
      "pullRequest"?: {
        "azuredevops"?: {
          "api"?: string;
          "labels"?: Array<string>;
          "organization": string;
          "project": string;
          "repo": string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "bitbucket"?: {
          "api"?: string;
          "basicAuth"?: {
            "passwordRef": {
              "key": string;
              "secretName": string;
            };
            "username": string;
          };
          "bearerToken"?: {
            "tokenRef": {
              "key": string;
              "secretName": string;
            };
          };
          "owner": string;
          "repo": string;
        };
        "bitbucketServer"?: {
          "api": string;
          "basicAuth"?: {
            "passwordRef": {
              "key": string;
              "secretName": string;
            };
            "username": string;
          };
          "project": string;
          "repo": string;
        };
        "filters"?: Array<{
          "branchMatch"?: string;
          "targetBranchMatch"?: string;
        }>;
        "gitea"?: {
          "api": string;
          "insecure"?: boolean;
          "owner": string;
          "repo": string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "github"?: {
          "api"?: string;
          "appSecretName"?: string;
          "labels"?: Array<string>;
          "owner": string;
          "repo": string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "gitlab"?: {
          "api"?: string;
          "insecure"?: boolean;
          "labels"?: Array<string>;
          "project": string;
          "pullRequestState"?: string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "requeueAfterSeconds"?: number;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
      };
      "scmProvider"?: {
        "awsCodeCommit"?: {
          "allBranches"?: boolean;
          "region"?: string;
          "role"?: string;
          "tagFilters"?: Array<{
            "key": string;
            "value"?: string;
          }>;
        };
        "azureDevOps"?: {
          "accessTokenRef": {
            "key": string;
            "secretName": string;
          };
          "allBranches"?: boolean;
          "api"?: string;
          "organization": string;
          "teamProject": string;
        };
        "bitbucket"?: {
          "allBranches"?: boolean;
          "appPasswordRef": {
            "key": string;
            "secretName": string;
          };
          "owner": string;
          "user": string;
        };
        "bitbucketServer"?: {
          "allBranches"?: boolean;
          "api": string;
          "basicAuth"?: {
            "passwordRef": {
              "key": string;
              "secretName": string;
            };
            "username": string;
          };
          "project": string;
        };
        "cloneProtocol"?: string;
        "filters"?: Array<{
          "branchMatch"?: string;
          "labelMatch"?: string;
          "pathsDoNotExist"?: Array<string>;
          "pathsExist"?: Array<string>;
          "repositoryMatch"?: string;
        }>;
        "gitea"?: {
          "allBranches"?: boolean;
          "api": string;
          "insecure"?: boolean;
          "owner": string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "github"?: {
          "allBranches"?: boolean;
          "api"?: string;
          "appSecretName"?: string;
          "organization": string;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
        };
        "gitlab"?: {
          "allBranches"?: boolean;
          "api"?: string;
          "group": string;
          "includeSharedProjects"?: boolean;
          "includeSubgroups"?: boolean;
          "insecure"?: boolean;
          "tokenRef"?: {
            "key": string;
            "secretName": string;
          };
          "topic"?: string;
        };
        "requeueAfterSeconds"?: number;
        "template"?: {
          "metadata": {
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
            "destination": {
              "name"?: string;
              "namespace"?: string;
              "server"?: string;
            };
            "ignoreDifferences"?: Array<{
              "group"?: string;
              "jqPathExpressions"?: Array<string>;
              "jsonPointers"?: Array<string>;
              "kind": string;
              "managedFieldsManagers"?: Array<string>;
              "name"?: string;
              "namespace"?: string;
            }>;
            "info"?: Array<{
              "name": string;
              "value": string;
            }>;
            "project": string;
            "revisionHistoryLimit"?: number;
            "source"?: {
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            };
            "sources"?: Array<{
              "chart"?: string;
              "directory"?: {
                "exclude"?: string;
                "include"?: string;
                "jsonnet"?: {
                  "extVars"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                  "libs"?: Array<string>;
                  "tlas"?: Array<{
                    "code"?: boolean;
                    "name": string;
                    "value": string;
                  }>;
                };
                "recurse"?: boolean;
              };
              "helm"?: {
                "fileParameters"?: Array<{
                  "name"?: string;
                  "path"?: string;
                }>;
                "ignoreMissingValueFiles"?: boolean;
                "parameters"?: Array<{
                  "forceString"?: boolean;
                  "name"?: string;
                  "value"?: string;
                }>;
                "passCredentials"?: boolean;
                "releaseName"?: string;
                "skipCrds"?: boolean;
                "valueFiles"?: Array<string>;
                "values"?: string;
                "valuesObject"?: {
                };
                "version"?: string;
              };
              "kustomize"?: {
                "commonAnnotations"?: {
                  [key: string]: string;
                };
                "commonAnnotationsEnvsubst"?: boolean;
                "commonLabels"?: {
                  [key: string]: string;
                };
                "components"?: Array<string>;
                "forceCommonAnnotations"?: boolean;
                "forceCommonLabels"?: boolean;
                "images"?: Array<string>;
                "namePrefix"?: string;
                "nameSuffix"?: string;
                "namespace"?: string;
                "patches"?: Array<{
                  "options"?: {
                    [key: string]: boolean;
                  };
                  "patch"?: string;
                  "path"?: string;
                  "target"?: {
                    "annotationSelector"?: string;
                    "group"?: string;
                    "kind"?: string;
                    "labelSelector"?: string;
                    "name"?: string;
                    "namespace"?: string;
                    "version"?: string;
                  };
                }>;
                "replicas"?: Array<{
                  "count": number | string;
                  "name": string;
                }>;
                "version"?: string;
              };
              "path"?: string;
              "plugin"?: {
                "env"?: Array<{
                  "name": string;
                  "value": string;
                }>;
                "name"?: string;
                "parameters"?: Array<{
                  "array"?: Array<string>;
                  "map"?: {
                    [key: string]: string;
                  };
                  "name"?: string;
                  "string"?: string;
                }>;
              };
              "ref"?: string;
              "repoURL": string;
              "targetRevision"?: string;
            }>;
            "syncPolicy"?: {
              "automated"?: {
                "allowEmpty"?: boolean;
                "prune"?: boolean;
                "selfHeal"?: boolean;
              };
              "managedNamespaceMetadata"?: {
                "annotations"?: {
                  [key: string]: string;
                };
                "labels"?: {
                  [key: string]: string;
                };
              };
              "retry"?: {
                "backoff"?: {
                  "duration"?: string;
                  "factor"?: number;
                  "maxDuration"?: string;
                };
                "limit"?: number;
              };
              "syncOptions"?: Array<string>;
            };
          };
        };
        "values"?: {
          [key: string]: string;
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
    }>;
    "goTemplate"?: boolean;
    "goTemplateOptions"?: Array<string>;
    "ignoreApplicationDifferences"?: Array<{
      "jqPathExpressions"?: Array<string>;
      "jsonPointers"?: Array<string>;
      "name"?: string;
    }>;
    "preservedFields"?: {
      "annotations"?: Array<string>;
      "labels"?: Array<string>;
    };
    "strategy"?: {
      "rollingSync"?: {
        "steps"?: Array<{
          "matchExpressions"?: Array<{
            "key"?: string;
            "operator"?: string;
            "values"?: Array<string>;
          }>;
          "maxUpdate"?: number | string;
        }>;
      };
      "type"?: string;
    };
    "syncPolicy"?: {
      "applicationsSync"?: "create-only" | "create-update" | "create-delete" | "sync";
      "preserveResourcesOnDeletion"?: boolean;
    };
    "template": {
      "metadata": {
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
        "destination": {
          "name"?: string;
          "namespace"?: string;
          "server"?: string;
        };
        "ignoreDifferences"?: Array<{
          "group"?: string;
          "jqPathExpressions"?: Array<string>;
          "jsonPointers"?: Array<string>;
          "kind": string;
          "managedFieldsManagers"?: Array<string>;
          "name"?: string;
          "namespace"?: string;
        }>;
        "info"?: Array<{
          "name": string;
          "value": string;
        }>;
        "project": string;
        "revisionHistoryLimit"?: number;
        "source"?: {
          "chart"?: string;
          "directory"?: {
            "exclude"?: string;
            "include"?: string;
            "jsonnet"?: {
              "extVars"?: Array<{
                "code"?: boolean;
                "name": string;
                "value": string;
              }>;
              "libs"?: Array<string>;
              "tlas"?: Array<{
                "code"?: boolean;
                "name": string;
                "value": string;
              }>;
            };
            "recurse"?: boolean;
          };
          "helm"?: {
            "fileParameters"?: Array<{
              "name"?: string;
              "path"?: string;
            }>;
            "ignoreMissingValueFiles"?: boolean;
            "parameters"?: Array<{
              "forceString"?: boolean;
              "name"?: string;
              "value"?: string;
            }>;
            "passCredentials"?: boolean;
            "releaseName"?: string;
            "skipCrds"?: boolean;
            "valueFiles"?: Array<string>;
            "values"?: string;
            "valuesObject"?: {
            };
            "version"?: string;
          };
          "kustomize"?: {
            "commonAnnotations"?: {
              [key: string]: string;
            };
            "commonAnnotationsEnvsubst"?: boolean;
            "commonLabels"?: {
              [key: string]: string;
            };
            "components"?: Array<string>;
            "forceCommonAnnotations"?: boolean;
            "forceCommonLabels"?: boolean;
            "images"?: Array<string>;
            "namePrefix"?: string;
            "nameSuffix"?: string;
            "namespace"?: string;
            "patches"?: Array<{
              "options"?: {
                [key: string]: boolean;
              };
              "patch"?: string;
              "path"?: string;
              "target"?: {
                "annotationSelector"?: string;
                "group"?: string;
                "kind"?: string;
                "labelSelector"?: string;
                "name"?: string;
                "namespace"?: string;
                "version"?: string;
              };
            }>;
            "replicas"?: Array<{
              "count": number | string;
              "name": string;
            }>;
            "version"?: string;
          };
          "path"?: string;
          "plugin"?: {
            "env"?: Array<{
              "name": string;
              "value": string;
            }>;
            "name"?: string;
            "parameters"?: Array<{
              "array"?: Array<string>;
              "map"?: {
                [key: string]: string;
              };
              "name"?: string;
              "string"?: string;
            }>;
          };
          "ref"?: string;
          "repoURL": string;
          "targetRevision"?: string;
        };
        "sources"?: Array<{
          "chart"?: string;
          "directory"?: {
            "exclude"?: string;
            "include"?: string;
            "jsonnet"?: {
              "extVars"?: Array<{
                "code"?: boolean;
                "name": string;
                "value": string;
              }>;
              "libs"?: Array<string>;
              "tlas"?: Array<{
                "code"?: boolean;
                "name": string;
                "value": string;
              }>;
            };
            "recurse"?: boolean;
          };
          "helm"?: {
            "fileParameters"?: Array<{
              "name"?: string;
              "path"?: string;
            }>;
            "ignoreMissingValueFiles"?: boolean;
            "parameters"?: Array<{
              "forceString"?: boolean;
              "name"?: string;
              "value"?: string;
            }>;
            "passCredentials"?: boolean;
            "releaseName"?: string;
            "skipCrds"?: boolean;
            "valueFiles"?: Array<string>;
            "values"?: string;
            "valuesObject"?: {
            };
            "version"?: string;
          };
          "kustomize"?: {
            "commonAnnotations"?: {
              [key: string]: string;
            };
            "commonAnnotationsEnvsubst"?: boolean;
            "commonLabels"?: {
              [key: string]: string;
            };
            "components"?: Array<string>;
            "forceCommonAnnotations"?: boolean;
            "forceCommonLabels"?: boolean;
            "images"?: Array<string>;
            "namePrefix"?: string;
            "nameSuffix"?: string;
            "namespace"?: string;
            "patches"?: Array<{
              "options"?: {
                [key: string]: boolean;
              };
              "patch"?: string;
              "path"?: string;
              "target"?: {
                "annotationSelector"?: string;
                "group"?: string;
                "kind"?: string;
                "labelSelector"?: string;
                "name"?: string;
                "namespace"?: string;
                "version"?: string;
              };
            }>;
            "replicas"?: Array<{
              "count": number | string;
              "name": string;
            }>;
            "version"?: string;
          };
          "path"?: string;
          "plugin"?: {
            "env"?: Array<{
              "name": string;
              "value": string;
            }>;
            "name"?: string;
            "parameters"?: Array<{
              "array"?: Array<string>;
              "map"?: {
                [key: string]: string;
              };
              "name"?: string;
              "string"?: string;
            }>;
          };
          "ref"?: string;
          "repoURL": string;
          "targetRevision"?: string;
        }>;
        "syncPolicy"?: {
          "automated"?: {
            "allowEmpty"?: boolean;
            "prune"?: boolean;
            "selfHeal"?: boolean;
          };
          "managedNamespaceMetadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          "retry"?: {
            "backoff"?: {
              "duration"?: string;
              "factor"?: number;
              "maxDuration"?: string;
            };
            "limit"?: number;
          };
          "syncOptions"?: Array<string>;
        };
      };
    };
    "templatePatch"?: string;
  };
  "status"?: {
    "applicationStatus"?: Array<{
      "application": string;
      "lastTransitionTime"?: string;
      "message": string;
      "status": string;
      "step": string;
    }>;
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message": string;
      "reason": string;
      "status": string;
      "type": string;
    }>;
  };
}

export class ApplicationSet extends Model<IApplicationSet> implements IApplicationSet {
  "apiVersion": IApplicationSet["apiVersion"];
  "kind": IApplicationSet["kind"];
  "metadata": IApplicationSet["metadata"];
  "spec": IApplicationSet["spec"];
  "status"?: IApplicationSet["status"];

static apiVersion: IApplicationSet["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IApplicationSet["kind"] = "ApplicationSet";
static is = createTypeMetaGuard<IApplicationSet>(ApplicationSet);

constructor(data?: ModelData<IApplicationSet>) {
  super();

  this.setDefinedProps({
    apiVersion: ApplicationSet.apiVersion,
    kind: ApplicationSet.kind,
    ...data
  } as IApplicationSet);
}
}


setValidateFunc(ApplicationSet, validate as ValidateFunc<IApplicationSet>);
