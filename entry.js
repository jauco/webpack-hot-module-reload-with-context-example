var modules = require("./hmr_example").modules;
printModuleKeys(modules);

if(module.hot) {
    module.hot.accept("./hmr_example", function() {
        console.log("detected change to modules from entry.js");
        printModuleKeys(require("./hmr_example").modules);
    });
}

function printModuleKeys(modules) {
    console.log(Object.keys(modules));
}