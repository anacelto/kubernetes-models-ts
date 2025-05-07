"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIVersion = exports.writeOutputFiles = exports.composeGenerators = exports.PathConflictError = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
class PathConflictError extends Error {
    constructor(path) {
        super(`Path conflict: ${path}`);
        this.path = path;
    }
}
exports.PathConflictError = PathConflictError;
PathConflictError.prototype.name = "PathConflictError";
function composeGenerators(generators) {
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
exports.composeGenerators = composeGenerators;
async function writeOutputFiles(outDir, files) {
    for (const f of files) {
        console.log("Writing:", f.path);
        await (0, fs_extra_1.outputFile)((0, path_1.join)(outDir, f.path), f.content);
    }
}
exports.writeOutputFiles = writeOutputFiles;
function getAPIVersion({ group, version }) {
    return group ? `${group}/${version}` : version;
}
exports.getAPIVersion = getAPIVersion;
//# sourceMappingURL=utils.js.map