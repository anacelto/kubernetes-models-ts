import { Schema, SchemaTransformer } from "./types";
export declare function collectRefs(data: Record<string, unknown>): string[];
/**
 * Converts the input schema into a valid JSON schema.
 */
export declare function transformSchema(schema: Schema, transformers?: readonly SchemaTransformer[]): Schema;
export declare function compileSchema(schema: Schema, refs: Record<string, string>): Promise<string>;
