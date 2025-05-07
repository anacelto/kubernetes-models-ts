"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const tslib_1 = require("tslib");
const fast_glob_1 = tslib_1.__importDefault(require("fast-glob"));
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const promises_1 = require("fs/promises");
const execa_1 = tslib_1.__importDefault(require("execa"));
const swc = tslib_1.__importStar(require("@swc/core"));
const ECMA_VERSION = 2020;
const DTS_EXT = ".d.ts";
const CJS_EXT = ".js";
const ESM_EXT = ".mjs";
function sortObjectByKey(input) {
    const entries = Object.entries(input).sort((a, b) => a[0].localeCompare(b[0]));
    return Object.fromEntries(entries);
}
function generateExportEntry(name) {
    return {
        types: name + DTS_EXT,
        import: name + ESM_EXT,
        require: name + CJS_EXT
    };
}
async function generateExportMap(args) {
    const paths = await (0, fast_glob_1.default)(["**/*.{js,ts}"], {
        cwd: (0, path_1.join)(args.cwd, "gen"),
        ...(!args["include-hidden"] && { ignore: ["!_**/*"] })
    });
    const exportMap = {
        "./package.json": "./package.json"
    };
    for (const path of paths) {
        const base = (0, path_1.basename)(path, (0, path_1.extname)(path));
        const dir = path_1.posix.dirname(path);
        const exportPath = dir === "." ? dir : `./${dir}`;
        if (base === "index") {
            exportMap[exportPath] = generateExportEntry(`${exportPath}/index`);
        }
        else {
            exportMap[`${exportPath}/*`] = generateExportEntry(`${exportPath}/*`);
        }
    }
    return sortObjectByKey(exportMap);
}
async function compileDts(cwd) {
    const tscBin = (0, path_1.join)(__dirname, "../node_modules/.bin/tsc");
    console.log("Generating declaration files");
    await (0, execa_1.default)(tscBin, ["--emitDeclarationOnly"], { cwd, stdio: "inherit" });
}
async function writeJs({ ast, module, path }) {
    const transformResult = await swc.transform(ast, {
        jsc: {
            target: `es${ECMA_VERSION}`,
            externalHelpers: true,
            loose: true
        },
        module: { type: module }
    });
    const minifyResult = await swc.minify(transformResult.code, {
        compress: {
            toplevel: true,
            ecma: ECMA_VERSION
        },
        mangle: false,
        ecma: ECMA_VERSION,
        module: module === "es6"
    });
    await (0, promises_1.mkdir)((0, path_1.dirname)(path), { recursive: true });
    await (0, promises_1.writeFile)(path, minifyResult.code);
}
function isRelativeImport(source) {
    return source.startsWith("./") || source.startsWith("../");
}
function rewriteImportPath(ast, ext) {
    const body = [];
    function rewrite(stmt) {
        if (!stmt.source ||
            !isRelativeImport(stmt.source.value) ||
            (0, path_1.extname)(stmt.source.value).length) {
            return stmt;
        }
        const newValue = stmt.source.value + ext;
        return {
            ...stmt,
            source: {
                ...stmt.source,
                value: newValue,
                raw: JSON.stringify(newValue)
            }
        };
    }
    for (const stmt of ast.body) {
        switch (stmt.type) {
            case "ImportDeclaration":
            case "ExportAllDeclaration":
            case "ExportNamedDeclaration":
                body.push(rewrite(stmt));
                break;
            default:
                body.push(stmt);
        }
    }
    return { ...ast, body };
}
async function compileJs(cwd) {
    const genDir = (0, path_1.join)(cwd, "gen");
    const distDir = (0, path_1.join)(cwd, "dist");
    const srcPaths = await (0, fast_glob_1.default)(["**/*.{js,ts}"], {
        cwd: genDir,
        ignore: ["**/*.d.ts"]
    });
    for (const path of srcPaths) {
        const srcPath = (0, path_1.join)(genDir, path);
        const ext = (0, path_1.extname)(path);
        const name = path.substring(0, path.length - ext.length);
        console.log("Transforming:", `gen/${path}`);
        const ast = await swc.parseFile(srcPath, {
            syntax: ext === ".ts" ? "typescript" : "ecmascript"
        });
        await Promise.all([
            writeJs({
                ast: rewriteImportPath(ast, CJS_EXT),
                module: "commonjs",
                path: (0, path_1.join)(distDir, name + CJS_EXT)
            }),
            writeJs({
                ast: rewriteImportPath(ast, ESM_EXT),
                module: "es6",
                path: (0, path_1.join)(distDir, name + ESM_EXT)
            })
        ]);
    }
}
async function copySchemaDts(cwd) {
    const genDir = (0, path_1.join)(cwd, "gen");
    const paths = await (0, fast_glob_1.default)(["_schemas/**/*.d.ts"], { cwd: genDir });
    for (const path of paths) {
        const src = (0, path_1.join)(genDir, path);
        const dst = (0, path_1.join)(cwd, "dist", path);
        console.log("Copying:", path);
        await (0, promises_1.mkdir)((0, path_1.dirname)(dst), { recursive: true });
        await (0, promises_1.copyFile)(src, dst);
    }
}
async function copyDistFiles(cwd) {
    for (const file of ["README.md"]) {
        const src = (0, path_1.join)(cwd, file);
        const dst = (0, path_1.join)(cwd, "dist", file);
        if (!(await (0, fs_extra_1.pathExists)(src)))
            continue;
        await (0, promises_1.copyFile)(src, dst);
        console.log("Copying:", file);
    }
}
async function writePkgJson(args) {
    const pkgJson = await (0, fs_extra_1.readJSON)((0, path_1.join)(args.cwd, "package.json"));
    pkgJson.exports = await generateExportMap(args);
    await (0, fs_extra_1.writeJSON)((0, path_1.join)(args.cwd, "dist/package.json"), pkgJson, { spaces: 2 });
}
async function build(args) {
    await (0, promises_1.rm)((0, path_1.join)(args.cwd, "dist"), { recursive: true, force: true });
    await compileDts(args.cwd);
    await compileJs(args.cwd);
    if (args["include-hidden"]) {
        await copySchemaDts(args.cwd);
    }
    await copyDistFiles(args.cwd);
    await writePkgJson(args);
}
exports.build = build;
//# sourceMappingURL=build.js.map