export declare function mergeOpenAPISpecs<T extends {
    definitions?: Record<string, unknown>;
}>(specs: readonly T[]): T;
export declare function getSchemaPath(id: string): string;
export declare function getRelativePath(from: string, to: string): string;
export declare function isAPIMachineryID(id: string): boolean;
