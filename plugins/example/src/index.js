const DiscordPlugin = require("../../discord-plugin.js");

module.exports = class Example extends DiscordPlugin
{
	onEnable()
	{
		this.log("Enabled");
	}

	onDisable()
	{
		this.log("Disabled");
	}
};

