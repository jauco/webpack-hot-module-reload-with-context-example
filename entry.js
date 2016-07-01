var hmr = require("./hmr_example");

function printModuleContents(name, module, isReload) {
    console.log("My subscription ", arguments);
}

hmr.subscribe(printModuleContents);
