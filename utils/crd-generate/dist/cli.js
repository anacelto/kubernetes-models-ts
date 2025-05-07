"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const read_input_1 = require("@kubernetes-models/read-input");
const generate_1 = require("./generate.js");
async function readFiles(paths) {
    const documents = [];
    for (const path of paths) {
        console.log("Reading:", path);
        documents.push(await (0, read_input_1.readInput)(path));
    }
    return documents.join("\n---\n");
}
async function run() {
    const args = await yargs_1.default
        .pkgConf("crd-generate")
        .option("input", {
        type: "array",
        describe: "Path of the input file or URL",
        string: true,
        demandOption: true
    })
        .option("output", {
        type: "string",
        describe: "Path of output files",
        demandOption: true
    })
        .option("yamlVersion", {
        type: "string",
        describe: "YAML version.",
        choices: ["1.0", "1.1", "1.2"]
    })
        .parse();
    try {
        await (0, generate_1.generate)({
            input: await readFiles(args.input),
            outputPath: args.output,
            yamlVersion: args.yamlVersion
        });
    }
    catch (err) {
        console.error(err);
        // eslint-disable-next-line no-process-exit
        process.exit(1);
    }
}
exports.run = run;
//# sourceMappingURL=cli.js.map