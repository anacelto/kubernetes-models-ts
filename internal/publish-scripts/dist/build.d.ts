export interface BuildArguments {
    cwd: string;
    "include-hidden"?: boolean;
}
export declare function build(args: BuildArguments): Promise<void>;
