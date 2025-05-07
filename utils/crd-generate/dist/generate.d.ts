import { DocumentOptions } from "yaml";
export interface GenerateOptions {
    input: string;
    outputPath: string;
    yamlVersion?: DocumentOptions["version"];
}
export declare function generate(options: GenerateOptions): Promise<void>;
