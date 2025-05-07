import { ContextOptions } from "./context";
export interface GenerateOptions extends ContextOptions {
    input: string;
    outputPath: string;
}
export declare function generate({ input, outputPath, ...contextOptions }: GenerateOptions): Promise<void>;
