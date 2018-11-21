//Entry point
//Utils
const { getResource } = require("./resource-manager.js");

//Configs
const configs = getResource("configs.json");

// ===================================================== 

console.log(configs.message);

//This mess is just a testing the best way to set up a
//plugin infrastructure 
var pluginDesc = require("../plugins/example/plugin.json");
console.log(pluginDesc);
var Plugin = require("../plugins/example/" + pluginDesc.entry);
var plugin = new Plugin(null);
plugin.onEnable();