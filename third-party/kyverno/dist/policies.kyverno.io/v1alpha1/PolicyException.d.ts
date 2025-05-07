import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * PolicyException declares resources to be excluded from specified policies.
 */
export interface IPolicyException {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "policies.kyverno.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "PolicyException";
    "metadata"?: IObjectMeta;
    /**
     * Spec declares policy exception behaviors.
     */
    "spec": {
        /**
         * MatchConditions is a list of CEL expressions that must be met for a resource to be excluded.
         */
        "matchConditions"?: Array<{
            /**
             * Expression represents the expression which will be evaluated by CEL. Must evaluate to bool.
             * CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:
             *
             * 'object' - The object from the incoming request. The value is null for DELETE requests.
             * 'oldObject' - The existing object. The value is null for CREATE requests.
             * 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest).
             * 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
             *   See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
             * 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
             *   request resource.
             * Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/
             *
             * Required.
             */
            "expression": string;
            /**
             * Name is an identifier for this match condition, used for strategic merging of MatchConditions,
             * as well as providing an identifier for logging purposes. A good name should be descriptive of
             * the associated expression.
             * Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and
             * must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or
             * '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]\*)?[A-Za-z0-9]') with an
             * optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')
             *
             * Required.
             */
            "name": string;
        }>;
        /**
         * PolicyRefs identifies the policies to which the exception is applied.
         */
        "policyRefs": Array<{
            /**
             * Kind is the kind of the policy
             */
            "kind": string;
            /**
             * Name is the name of the policy
             */
            "name": string;
        }>;
    };
}
/**
 * PolicyException declares resources to be excluded from specified policies.
 */
export declare class PolicyException extends Model<IPolicyException> implements IPolicyException {
    "apiVersion": IPolicyException["apiVersion"];
    "kind": IPolicyException["kind"];
    "metadata"?: IPolicyException["metadata"];
    "spec": IPolicyException["spec"];
    static apiVersion: IPolicyException["apiVersion"];
    static kind: IPolicyException["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPolicyException>;
    constructor(data?: ModelData<IPolicyException>);
}
