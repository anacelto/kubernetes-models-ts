import { Generator, GroupVersionKind, OutputFile } from "./types";
export declare class PathConflictError extends Error {
    path: string;
    constructor(path: string);
}
export declare function composeGenerators(generators: readonly Generator[]): Generator;
export declare function writeOutputFiles(outDir: string, files: readonly OutputFile[]): Promise<void>;
export declare function getAPIVersion({ group, version }: GroupVersionKind): string;
