const { DiscordPlugin } = require("../../discord-plugin.js");

module.exports = class ClassManager extends DiscordPlugin
{
	onEnable()
	{
		this.log("Enabled");
		console.log(this.main);
	}

	onDisable()
	{
		this.log("Disabled");
	}
};

