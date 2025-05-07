export function generateImports(imports) {
    const importMap = new Map();
    for (const { path, name, alias } of imports) {
        let names = importMap.get(path);
        if (!names) {
            names = new Set();
            importMap.set(path, names);
        }
        if (alias) {
            names.add(`${name} as ${alias}`);
        }
        else {
            names.add(name);
        }
    }
    return [...importMap.entries()]
        .map(([path, names]) => `import { ${[...names].join(", ")} } from ${JSON.stringify(path)};`)
        .join("\n");
}
//# sourceMappingURL=import.mjs.map