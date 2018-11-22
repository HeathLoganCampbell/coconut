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

const discordClient = new Discord.Client();

discordClient.on("ready", () => {
	console.log(`Logged in as ${discordClient.user.tag}!`);
});

var commandHandler = new CommandHandler(discordClient);
var commandMap = new CommandMap();

var pluginManager = new PluginManager(commandMap);
pluginManager.loadAllPlugins();

commandHandler.addCommandMap(commandMap);

discordClient.login(configs.discordToken);
