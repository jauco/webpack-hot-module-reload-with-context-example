document.write("Open the javascript console!");
var context = require.context("./filesToLoad", false, /\.js$/);
var modules = {};
context.keys().forEach(function (key) {
  var module = context(key);
  modules[key] = module;
  customReloadLogic(key, module, false);
})
module.exports.modules = modules;
if (module.hot) {
  module.hot.accept(context.id, function () {
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    var reloadedContext = require.context("./filesToLoad", false, /\.js$/);
    //To find out what module was changed you just compare the result of the
    //require call with the version stored in the modules hash using strict
    //equality. Equal means it is unchanged.
    var changedModules = reloadedContext.keys()
      .map(function (key) {
        return [key, reloadedContext(key)];
      })
      .filter(function (reloadedModule) {
        return modules[reloadedModule[0]] !== reloadedModule[1];
      });
    changedModules.forEach(function (module) {
      modules[module[0]] = module[1];
      customReloadLogic(module[0], module[1], true);
    });
  });
}

function customReloadLogic(name, module, isReload) {
  console.log("module " + name + (isReload ? " re" : " ") + "loaded");
}
