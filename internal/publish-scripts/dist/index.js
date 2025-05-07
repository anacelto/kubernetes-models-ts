"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs/yargs"));
const build_1 = require("./build");
const prepack_1 = require("./prepack");
(0, yargs_1.default)(process.argv.slice(2))
    .command("build", "Run build script", (cmd) => {
    return cmd
        .option("cwd", {
        type: "string",
        default: process.cwd(),
        defaultDescription: "CWD",
        description: "Current working directory."
    })
        .option("include-hidden", {
        type: "boolean",
        description: "Include hidden files in the export map."
    });
}, build_1.build)
    .command("prepack", "Run prepack script", (cmd) => {
    return cmd.option("cwd", {
        type: "string",
        default: process.cwd(),
        defaultDescription: "CWD",
        description: "Current working directory."
    });
}, prepack_1.prePack)
    .demandCommand()
    .showHelpOnFail(false).argv;
//# sourceMappingURL=index.js.map