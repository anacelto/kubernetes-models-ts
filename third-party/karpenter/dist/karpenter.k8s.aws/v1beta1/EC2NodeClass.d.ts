import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * EC2NodeClass is the Schema for the EC2NodeClass API
 */
export interface IEC2NodeClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "karpenter.k8s.aws/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "EC2NodeClass";
    "metadata"?: IObjectMeta;
    /**
     * EC2NodeClassSpec is the top level specification for the AWS Karpenter Provider.
     * This will contain configuration necessary to launch instances in AWS.
     */
    "spec"?: {
        /**
         * AMIFamily is the AMI family that instances use.
         */
        "amiFamily": "AL2" | "AL2023" | "Bottlerocket" | "Ubuntu" | "Custom" | "Windows2019" | "Windows2022";
        /**
         * AMISelectorTerms is a list of or ami selector terms. The terms are ORed.
         */
        "amiSelectorTerms"?: Array<{
            /**
             * ID is the ami id in EC2
             */
            "id"?: string;
            /**
             * Name is the ami name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            "name"?: string;
            /**
             * Owner is the owner for the ami.
             * You can specify a combination of AWS account IDs, "self", "amazon", and "aws-marketplace"
             */
            "owner"?: string;
            /**
             * Tags is a map of key/value tags used to select subnets
             * Specifying '\*' for a value selects all values for a given tag key.
             */
            "tags"?: {
                [key: string]: string;
            };
        }>;
        /**
         * AssociatePublicIPAddress controls if public IP addresses are assigned to instances that are launched with the nodeclass.
         */
        "associatePublicIPAddress"?: boolean;
        /**
         * BlockDeviceMappings to be applied to provisioned nodes.
         */
        "blockDeviceMappings"?: Array<{
            /**
             * The device name (for example, /dev/sdh or xvdh).
             */
            "deviceName"?: string;
            /**
             * EBS contains parameters used to automatically set up EBS volumes when an instance is launched.
             */
            "ebs"?: {
                /**
                 * DeleteOnTermination indicates whether the EBS volume is deleted on instance termination.
                 */
                "deleteOnTermination"?: boolean;
                /**
                 * Encrypted indicates whether the EBS volume is encrypted. Encrypted volumes can only
                 * be attached to instances that support Amazon EBS encryption. If you are creating
                 * a volume from a snapshot, you can't specify an encryption value.
                 */
                "encrypted"?: boolean;
                /**
                 * IOPS is the number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes,
                 * this represents the number of IOPS that are provisioned for the volume. For
                 * gp2 volumes, this represents the baseline performance of the volume and the
                 * rate at which the volume accumulates I/O credits for bursting.
                 *
                 *
                 * The following are the supported values for each volume type:
                 *
                 *
                 *    \* gp3: 3,000-16,000 IOPS
                 *
                 *
                 *    \* io1: 100-64,000 IOPS
                 *
                 *
                 *    \* io2: 100-64,000 IOPS
                 *
                 *
                 * For io1 and io2 volumes, we guarantee 64,000 IOPS only for Instances built
                 * on the Nitro System (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances).
                 * Other instance families guarantee performance up to 32,000 IOPS.
                 *
                 *
                 * This parameter is supported for io1, io2, and gp3 volumes only. This parameter
                 * is not supported for gp2, st1, sc1, or standard volumes.
                 */
                "iops"?: number;
                /**
                 * KMSKeyID (ARN) of the symmetric Key Management Service (KMS) CMK used for encryption.
                 */
                "kmsKeyID"?: string;
                /**
                 * SnapshotID is the ID of an EBS snapshot
                 */
                "snapshotID"?: string;
                /**
                 * Throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
                 * Valid Range: Minimum value of 125. Maximum value of 1000.
                 */
                "throughput"?: number;
                /**
                 * VolumeSize in `Gi`, `G`, `Ti`, or `T`. You must specify either a snapshot ID or
                 * a volume size. The following are the supported volumes sizes for each volume
                 * type:
                 *
                 *
                 *    \* gp2 and gp3: 1-16,384
                 *
                 *
                 *    \* io1 and io2: 4-16,384
                 *
                 *
                 *    \* st1 and sc1: 125-16,384
                 *
                 *
                 *    \* standard: 1-1,024
                 */
                "volumeSize"?: number & (number & number) | string & (string & string);
                /**
                 * VolumeType of the block device.
                 * For more information, see Amazon EBS volume types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html)
                 * in the Amazon Elastic Compute Cloud User Guide.
                 */
                "volumeType"?: "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3";
            };
            /**
             * RootVolume is a flag indicating if this device is mounted as kubelet root dir. You can
             * configure at most one root volume in BlockDeviceMappings.
             */
            "rootVolume"?: boolean;
        }>;
        /**
         * Context is a Reserved field in EC2 APIs
         * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
         */
        "context"?: string;
        /**
         * DetailedMonitoring controls if detailed monitoring is enabled for instances that are launched
         */
        "detailedMonitoring"?: boolean;
        /**
         * InstanceProfile is the AWS entity that instances use.
         * This field is mutually exclusive from role.
         * The instance profile should already have a role assigned to it that Karpenter
         *  has PassRole permission on for instance launch using this instanceProfile to succeed.
         */
        "instanceProfile"?: string;
        /**
         * InstanceStorePolicy specifies how to handle instance-store disks.
         */
        "instanceStorePolicy"?: "RAID0";
        /**
         * MetadataOptions for the generated launch template of provisioned nodes.
         *
         *
         * This specifies the exposure of the Instance Metadata Service to
         * provisioned EC2 nodes. For more information,
         * see Instance Metadata and User Data
         * (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
         * in the Amazon Elastic Compute Cloud User Guide.
         *
         *
         * Refer to recommended, security best practices
         * (https://aws.github.io/aws-eks-best-practices/security/docs/iam/#restrict-access-to-the-instance-profile-assigned-to-the-worker-node)
         * for limiting exposure of Instance Metadata and User Data to pods.
         * If omitted, defaults to httpEndpoint enabled, with httpProtocolIPv6
         * disabled, with httpPutResponseLimit of 2, and with httpTokens
         * required.
         */
        "metadataOptions"?: {
            /**
             * HTTPEndpoint enables or disables the HTTP metadata endpoint on provisioned
             * nodes. If metadata options is non-nil, but this parameter is not specified,
             * the default state is "enabled".
             *
             *
             * If you specify a value of "disabled", instance metadata will not be accessible
             * on the node.
             */
            "httpEndpoint"?: "enabled" | "disabled";
            /**
             * HTTPProtocolIPv6 enables or disables the IPv6 endpoint for the instance metadata
             * service on provisioned nodes. If metadata options is non-nil, but this parameter
             * is not specified, the default state is "disabled".
             */
            "httpProtocolIPv6"?: "enabled" | "disabled";
            /**
             * HTTPPutResponseHopLimit is the desired HTTP PUT response hop limit for
             * instance metadata requests. The larger the number, the further instance
             * metadata requests can travel. Possible values are integers from 1 to 64.
             * If metadata options is non-nil, but this parameter is not specified, the
             * default value is 2.
             */
            "httpPutResponseHopLimit"?: number;
            /**
             * HTTPTokens determines the state of token usage for instance metadata
             * requests. If metadata options is non-nil, but this parameter is not
             * specified, the default state is "required".
             *
             *
             * If the state is optional, one can choose to retrieve instance metadata with
             * or without a signed token header on the request. If one retrieves the IAM
             * role credentials without a token, the version 1.0 role credentials are
             * returned. If one retrieves the IAM role credentials using a valid signed
             * token, the version 2.0 role credentials are returned.
             *
             *
             * If the state is "required", one must send a signed token header with any
             * instance metadata retrieval requests. In this state, retrieving the IAM
             * role credentials always returns the version 2.0 credentials; the version
             * 1.0 credentials are not available.
             */
            "httpTokens"?: "required" | "optional";
        };
        /**
         * Role is the AWS identity that nodes use. This field is immutable.
         * This field is mutually exclusive from instanceProfile.
         * Marking this field as immutable avoids concerns around terminating managed instance profiles from running instances.
         * This field may be made mutable in the future, assuming the correct garbage collection and drift handling is implemented
         * for the old instance profiles on an update.
         */
        "role"?: string;
        /**
         * SecurityGroupSelectorTerms is a list of or security group selector terms. The terms are ORed.
         */
        "securityGroupSelectorTerms": Array<{
            /**
             * ID is the security group id in EC2
             */
            "id"?: string;
            /**
             * Name is the security group name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            "name"?: string;
            /**
             * Tags is a map of key/value tags used to select subnets
             * Specifying '\*' for a value selects all values for a given tag key.
             */
            "tags"?: {
                [key: string]: string;
            };
        }>;
        /**
         * SubnetSelectorTerms is a list of or subnet selector terms. The terms are ORed.
         */
        "subnetSelectorTerms": Array<{
            /**
             * ID is the subnet id in EC2
             */
            "id"?: string;
            /**
             * Tags is a map of key/value tags used to select subnets
             * Specifying '\*' for a value selects all values for a given tag key.
             */
            "tags"?: {
                [key: string]: string;
            };
        }>;
        /**
         * Tags to be applied on ec2 resources like instances and launch templates.
         */
        "tags"?: {
            [key: string]: string;
        };
        /**
         * UserData to be applied to the provisioned nodes.
         * It must be in the appropriate format based on the AMIFamily in use. Karpenter will merge certain fields into
         * this UserData to ensure nodes are being provisioned with the correct configuration.
         */
        "userData"?: string;
    };
    /**
     * EC2NodeClassStatus contains the resolved state of the EC2NodeClass
     */
    "status"?: {
        /**
         * AMI contains the current AMI values that are available to the
         * cluster under the AMI selectors.
         */
        "amis"?: Array<{
            /**
             * ID of the AMI
             */
            "id": string;
            /**
             * Name of the AMI
             */
            "name"?: string;
            /**
             * Requirements of the AMI to be utilized on an instance type
             */
            "requirements": Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * This field is ALPHA and can be dropped or replaced at any time
                 * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
                 */
                "minValues"?: number;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
            }>;
        }>;
        /**
         * InstanceProfile contains the resolved instance profile for the role
         */
        "instanceProfile"?: string;
        /**
         * SecurityGroups contains the current Security Groups values that are available to the
         * cluster under the SecurityGroups selectors.
         */
        "securityGroups"?: Array<{
            /**
             * ID of the security group
             */
            "id": string;
            /**
             * Name of the security group
             */
            "name"?: string;
        }>;
        /**
         * Subnets contains the current Subnet values that are available to the
         * cluster under the subnet selectors.
         */
        "subnets"?: Array<{
            /**
             * ID of the subnet
             */
            "id": string;
            /**
             * The associated availability zone
             */
            "zone": string;
        }>;
    };
}
/**
 * EC2NodeClass is the Schema for the EC2NodeClass API
 */
export declare class EC2NodeClass extends Model<IEC2NodeClass> implements IEC2NodeClass {
    "apiVersion": IEC2NodeClass["apiVersion"];
    "kind": IEC2NodeClass["kind"];
    "metadata"?: IEC2NodeClass["metadata"];
    "spec"?: IEC2NodeClass["spec"];
    "status"?: IEC2NodeClass["status"];
    static apiVersion: IEC2NodeClass["apiVersion"];
    static kind: IEC2NodeClass["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEC2NodeClass>;
    constructor(data?: ModelData<IEC2NodeClass>);
}
