const DiscordPlugin = require("../../discord-plugin.js");

module.exports = class Example extends DiscordPlugin
{
	onEnable()
	{
		console.log("Enabled");
	}

	onDisable()
	{
		console.log("Disabled");
	}
};

