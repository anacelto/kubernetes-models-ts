import yargs from "yargs";
import { readInput } from "@kubernetes-models/read-input";
import { generate } from "./generate.mjs";
import { mergeOpenAPISpecs } from "./utils.mjs";
async function readFiles(paths) {
    const contents = [];
    for (const path of paths) {
        console.log("Reading:", path);
        contents.push(await readInput(path));
    }
    const spec = mergeOpenAPISpecs(contents.map((x) => JSON.parse(x)));
    return JSON.stringify(spec);
}
export async function run() {
    const args = await yargs
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
        await generate({
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
//# sourceMappingURL=cli.mjs.map