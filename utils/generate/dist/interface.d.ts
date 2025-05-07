import { Schema } from "./types";
export interface GenerateInterfaceOptions {
    includeDescription?: boolean;
    getRefType?(ref: string): string;
    getFieldType?(key: string[], schema: Schema): string | undefined;
}
export declare function generateInterface(schema: Schema, options?: GenerateInterfaceOptions): string;
