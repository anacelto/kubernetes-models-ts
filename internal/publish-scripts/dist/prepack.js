"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prePack = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
async function prePack(args) {
    const rootPkgJsonPath = (0, path_1.join)(args.cwd, "package.json");
    const distPkgJsonPath = (0, path_1.join)(args.cwd, "dist/package.json");
    const rootPkgJson = await (0, fs_extra_1.readJSON)(rootPkgJsonPath);
    const distPkgJson = await (0, fs_extra_1.readJSON)(distPkgJsonPath);
    await (0, fs_extra_1.writeJSON)(distPkgJsonPath, {
        ...distPkgJson,
        version: rootPkgJson.version,
        dependencies: rootPkgJson.dependencies,
        devDependencies: rootPkgJson.devDependencies,
        peerDependencies: rootPkgJson.peerDependencies
    }, { spaces: 2 });
    console.log("Updated package.json dependencies");
}
exports.prePack = prePack;
//# sourceMappingURL=prepack.js.map