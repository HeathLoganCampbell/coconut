//Entry point
//Utils
const { getResource } = require("./resource-manager.js");

//Configs
const configs = getResource("configs.json");

//Classes
const Discord = require("discord.js");

const PluginManager = require("./plugin/plugin-manager.js");
const CommandHandler = require("./command/command-handler.js");
const CommandMap = require("./command/command-map.js");
// ===================================================== 
// ===
const discordClient = new Discord.Client();

discordClient.on("ready", () => {
	console.log(`Logged in as ${discordClient.user.tag}!`);
});

var pluginManager = new PluginManager(this);
pluginManager.loadAllPlugins();

var commandHandler = new CommandHandler(discordClient);
var commandMap = new CommandMap();

commandMap.addCommand(require("./command/commands/demo-cmd.js"));

commandHandler.addCommandMap(commandMap);

discordClient.login("NTE0NzgzNzkwNjA2ODQzOTA1.Dteiyg.mI0HfwKMaX3CSAJYhGgq-QODqCU");