//Entry point
//Utils
const { getResource } = require("./resource-manager.js");

//Configs
const configs = getResource("configs.json");

//Classes
const PluginManager = require("./plugin/plugin-manager.js");

// ===================================================== 

console.log(configs.message);

var pluginManager = new PluginManager();
pluginManager.loadAllPlugins();