import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IContainerAnalysisNote {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "containeranalysis.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ContainerAnalysisNote";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * A note describing an attestation role.
         */
        "attestation"?: {
            /**
             * Hint hints at the purpose of the attestation authority.
             */
            "hint"?: {
                /**
                 * Required. The human readable name of this attestation authority, for example "qa".
                 */
                "humanReadableName": string;
            };
        };
        /**
         * A note describing build provenance for a verifiable build.
         */
        "build"?: {
            /**
             * Required. Immutable. Version of the builder which produced this build.
             */
            "builderVersion": string;
        };
        /**
         * A note describing something that can be deployed.
         */
        "deployment"?: {
            /**
             * Required. Resource URI for the artifact being deployed.
             */
            "resourceUri": Array<string>;
        };
        /**
         * A note describing the initial analysis of a resource.
         */
        "discovery"?: {
            /**
             * The kind of analysis that is handled by this discovery. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE
             */
            "analysisKind": string;
        };
        /**
         * Time of expiration for this note. Empty if note does not expire.
         */
        "expirationTime"?: string;
        /**
         * A note describing a base image.
         */
        "image"?: {
            /**
             * Required. Immutable. The fingerprint of the base image.
             */
            "fingerprint": {
                /**
                 * Required. The layer ID of the final layer in the Docker image's v1 representation.
                 */
                "v1Name": string;
                /**
                 * Required. The ordered list of v2 blobs that represent a given image.
                 */
                "v2Blob": Array<string>;
            };
            /**
             * Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.
             */
            "resourceUrl": string;
        };
        /**
         * A detailed description of this note.
         */
        "longDescription"?: string;
        /**
         * Required for non-Windows OS. The package this Upgrade is for.
         */
        "package"?: {
            /**
             * The various channels by which a package is distributed.
             */
            "distribution"?: Array<{
                /**
                 * The CPU architecture for which packages in this distribution channel were built Possible values: ARCHITECTURE_UNSPECIFIED, X86, X64
                 */
                "architecture"?: string;
                /**
                 * The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
                 */
                "cpeUri": string;
                /**
                 * The distribution channel-specific description of this package.
                 */
                "description"?: string;
                /**
                 * The latest available version of this package in this distribution channel.
                 */
                "latestVersion"?: {
                    /**
                     * Used to correct mistakes in the version numbering scheme.
                     */
                    "epoch"?: number;
                    /**
                     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
                     */
                    "fullName"?: string;
                    /**
                     * Distinguish between sentinel MIN/MAX versions and normal versions. If kind is not NORMAL, then the other fields are ignored. Possible values: VERSION_KIND_UNSPECIFIED, NORMAL, MINIMUM, MAXIMUM
                     */
                    "kind": string;
                    /**
                     * The main part of the version name.
                     */
                    "name"?: string;
                    /**
                     * The iteration of the package build from the above version.
                     */
                    "revision"?: string;
                };
                /**
                 * A freeform string denoting the maintainer of this package.
                 */
                "maintainer"?: string;
                /**
                 * The distribution channel-specific homepage for this package.
                 */
                "url"?: string;
            }>;
            /**
             * The name of the package.
             */
            "name": string;
        };
        "relatedNoteNames"?: Array<{
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`).
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>)>;
        /**
         * URLs associated with this note.
         */
        "relatedUrl"?: Array<{
            /**
             * Label to describe usage of the URL
             */
            "label"?: string;
            /**
             * Specific URL to associate with the note
             */
            "url"?: string;
        }>;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * A one sentence description of this note.
         */
        "shortDescription"?: string;
        /**
         * A note describing a package vulnerability.
         */
        "vulnerability"?: {
            /**
             * The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
             */
            "cvssScore"?: number;
            /**
             * The full description of the CVSSv3 for this vulnerability.
             */
            "cvssV3"?: {
                /**
                 *  Possible values: ATTACK_COMPLEXITY_UNSPECIFIED, ATTACK_COMPLEXITY_LOW, ATTACK_COMPLEXITY_HIGH
                 */
                "attackComplexity"?: string;
                /**
                 * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Possible values: ATTACK_VECTOR_UNSPECIFIED, ATTACK_VECTOR_NETWORK, ATTACK_VECTOR_ADJACENT, ATTACK_VECTOR_LOCAL, ATTACK_VECTOR_PHYSICAL
                 */
                "attackVector"?: string;
                /**
                 *  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE
                 */
                "availabilityImpact"?: string;
                /**
                 * The base score is a function of the base metric scores.
                 */
                "baseScore"?: number;
                /**
                 *  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE
                 */
                "confidentialityImpact"?: string;
                "exploitabilityScore"?: number;
                "impactScore"?: number;
                /**
                 *  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE
                 */
                "integrityImpact"?: string;
                /**
                 *  Possible values: PRIVILEGES_REQUIRED_UNSPECIFIED, PRIVILEGES_REQUIRED_NONE, PRIVILEGES_REQUIRED_LOW, PRIVILEGES_REQUIRED_HIGH
                 */
                "privilegesRequired"?: string;
                /**
                 *  Possible values: SCOPE_UNSPECIFIED, SCOPE_UNCHANGED, SCOPE_CHANGED
                 */
                "scope"?: string;
                /**
                 *  Possible values: USER_INTERACTION_UNSPECIFIED, USER_INTERACTION_NONE, USER_INTERACTION_REQUIRED
                 */
                "userInteraction"?: string;
            };
            /**
             * Details of all known distros and packages affected by this vulnerability.
             */
            "details"?: Array<{
                /**
                 * Required. The (https://cpe.mitre.org/specification/) this vulnerability affects.
                 */
                "affectedCpeUri": string;
                /**
                 * Required. The package this vulnerability affects.
                 */
                "affectedPackage": string;
                /**
                 * The version number at the end of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: ) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail.
                 */
                "affectedVersionEnd"?: {
                    /**
                     * Used to correct mistakes in the version numbering scheme.
                     */
                    "epoch"?: number;
                    /**
                     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
                     */
                    "fullName"?: string;
                    /**
                     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE
                     */
                    "kind": string;
                    /**
                     * Required only when version kind is NORMAL. The main part of the version name.
                     */
                    "name"?: string;
                    /**
                     * The iteration of the package build from the above version.
                     */
                    "revision"?: string;
                };
                /**
                 * The version number at the start of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: ) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail.
                 */
                "affectedVersionStart"?: {
                    /**
                     * Used to correct mistakes in the version numbering scheme.
                     */
                    "epoch"?: number;
                    /**
                     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
                     */
                    "fullName"?: string;
                    /**
                     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE
                     */
                    "kind": string;
                    /**
                     * Required only when version kind is NORMAL. The main part of the version name.
                     */
                    "name"?: string;
                    /**
                     * The iteration of the package build from the above version.
                     */
                    "revision"?: string;
                };
                /**
                 * A vendor-specific description of this vulnerability.
                 */
                "description"?: string;
                /**
                 * The distro recommended (https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri.
                 */
                "fixedCpeUri"?: string;
                /**
                 * The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package.
                 */
                "fixedPackage"?: string;
                /**
                 * The distro recommended version to update to that contains a fix for this vulnerability. Setting this to VersionKind.MAXIMUM means no such version is yet available.
                 */
                "fixedVersion"?: {
                    /**
                     * Used to correct mistakes in the version numbering scheme.
                     */
                    "epoch"?: number;
                    /**
                     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
                     */
                    "fullName"?: string;
                    /**
                     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE
                     */
                    "kind": string;
                    /**
                     * Required only when version kind is NORMAL. The main part of the version name.
                     */
                    "name"?: string;
                    /**
                     * The iteration of the package build from the above version.
                     */
                    "revision"?: string;
                };
                /**
                 * Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.
                 */
                "isObsolete"?: boolean;
                /**
                 * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
                 */
                "packageType"?: string;
                /**
                 * The distro assigned severity of this vulnerability.
                 */
                "severityName"?: string;
                /**
                 * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
                 */
                "sourceUpdateTime"?: string;
            }>;
            /**
             * The note provider assigned severity of this vulnerability. Possible values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL
             */
            "severity"?: string;
            /**
             * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
             */
            "sourceUpdateTime"?: string;
            /**
             * Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.
             */
            "windowsDetails"?: Array<{
                /**
                 * Required. The (https://cpe.mitre.org/specification/) this vulnerability affects.
                 */
                "cpeUri": string;
                /**
                 * The description of this vulnerability.
                 */
                "description"?: string;
                /**
                 * Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix.
                 */
                "fixingKbs": Array<{
                    /**
                     * The KB name (generally of the form KB+ (e.g., KB123456)).
                     */
                    "name"?: string;
                    /**
                     * A link to the KB in the (https://www.catalog.update.microsoft.com/).
                     */
                    "url"?: string;
                }>;
                /**
                 * Required. The name of this vulnerability.
                 */
                "name": string;
            }>;
        };
    };
    "status"?: {
        /**
         * Conditions represent the latest available observation of the resource's current state.
         */
        "conditions"?: Array<{
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, one-word, CamelCase reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status is the status of the condition. Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        /**
         * Output only. The time this note was created. This field can be used as a filter in list requests.
         */
        "createTime"?: string;
        "image"?: {
            "fingerprint"?: {
                /**
                 * Output only. The name of the image's v2 blobs computed via: ) Only the name of the final blob is kept.
                 */
                "v2Name"?: string;
            };
        };
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. The time this note was last updated. This field can be used as a filter in list requests.
         */
        "updateTime"?: string;
    };
}
export declare class ContainerAnalysisNote extends Model<IContainerAnalysisNote> implements IContainerAnalysisNote {
    "apiVersion": IContainerAnalysisNote["apiVersion"];
    "kind": IContainerAnalysisNote["kind"];
    "metadata"?: IContainerAnalysisNote["metadata"];
    "spec"?: IContainerAnalysisNote["spec"];
    "status"?: IContainerAnalysisNote["status"];
    static apiVersion: IContainerAnalysisNote["apiVersion"];
    static kind: IContainerAnalysisNote["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IContainerAnalysisNote>;
    constructor(data?: ModelData<IContainerAnalysisNote>);
}
