import { Definition } from "@kubernetes-models/generate";
export interface Context {
    getDefinitionPath(id: string): string;
    externalAPIMachinery?: boolean;
}
export interface ContextOptions {
    rewriteDefinitionPath?(path: string): string;
    externalAPIMachinery?: boolean;
}
export declare function buildContext(definitions: readonly Definition[], { rewriteDefinitionPath, externalAPIMachinery }: ContextOptions): Context;
