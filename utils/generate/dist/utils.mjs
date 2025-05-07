import { outputFile } from "fs-extra";
import { join } from "path";
export class PathConflictError extends Error {
    constructor(path) {
        super(`Path conflict: ${path}`);
        this.path = path;
    }
}
PathConflictError.prototype.name = "PathConflictError";
export function composeGenerators(generators) {
    return async (definitions) => {
        const fileMap = new Map();
        for (const g of generators) {
            const files = await g(definitions);
            for (const f of files) {
                if (fileMap.has(f.path)) {
                    throw new PathConflictError(f.path);
                }
                fileMap.set(f.path, f);
            }
        }
        return [...fileMap.values()];
    };
}
export async function writeOutputFiles(outDir, files) {
    for (const f of files) {
        console.log("Writing:", f.path);
        await outputFile(join(outDir, f.path), f.content);
    }
}
export function getAPIVersion({ group, version }) {
    return group ? `${group}/${version}` : version;
}
//# sourceMappingURL=utils.mjs.map