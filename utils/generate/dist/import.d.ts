export interface Import {
    name: string;
    alias?: string;
    path: string;
}
export declare function generateImports(imports: readonly Import[]): string;
