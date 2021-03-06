const { DiscordPlugin } = require("../../discord-plugin.js");

module.exports = class Example extends DiscordPlugin
{
	onEnable()
	{
		this.log("Enabled");
		console.log(this.main);
		this.addCommand(require("./commands/ping-cmd.js"));
		this.addCommand(require("./commands/random-num-cmd.js"));
	}

	onDisable()
	{
		this.log("Disabled");
	}
};

