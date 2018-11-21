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
commandHandler("!yeet brah123 this is easy");

function commandHandler(message)
{
	var args = message.split(" ");
	if(message.charAt(0) === "!")
	{
		var command = args[0].substring(1);
		args = args.splice(0);
		console.log(command );
		console.log(args.splice(1));
	}
}