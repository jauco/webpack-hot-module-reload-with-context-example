var modules = require("./hmr_example").modules;

function printModuleContents() {
    console.log(JSON.stringify(modules));
}

printModuleContents();
window.setInterval(function () { printModuleContents(); }, 2000);