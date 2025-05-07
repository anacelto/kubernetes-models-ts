"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const read_input_1 = require("@kubernetes-models/read-input");
const generate_1 = require("./generate.js");
const utils_1 = require("./utils.js");
async function readFiles(paths) {
    const contents = [];
    for (const path of paths) {
        console.log("Reading:", path);
        contents.push(await (0, read_input_1.readInput)(path));
    }
    const spec = (0, utils_1.mergeOpenAPISpecs)(contents.map((x) => JSON.parse(x)));
    return JSON.stringify(spec);
}
async function run() {
    const args = await yargs_1.default
        .pkgConf("openapi-generate")
        .option("input", {
        type: "array",
        describe: "Path of the input file or URL",
        demandOption: true,
        string: true
    })
        .option("output", {
        type: "string",
        describe: "Path of output files",
        demandOption: true
    })
        .parse();
    try {
        await (0, generate_1.generate)({
            input: await readFiles(args.input),
            outputPath: args.output
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