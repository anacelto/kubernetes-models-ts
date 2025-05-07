import getStdin from "get-stdin";
import { readFile } from "fs/promises";
import { httpGet } from "./http.mjs";
const urlRegex = /^https?:\/\//;
export async function readInput(path) {
    if (path === "-") {
        return getStdin();
    }
    if (urlRegex.test(path)) {
        return httpGet(path);
    }
    return readFile(path, "utf8");
}
//# sourceMappingURL=read.mjs.map