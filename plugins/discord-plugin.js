//Interface class
//Do not delete this file

class DiscordPlugin
{
	constructor(pluginDesc, main)
	{
		this.pluginDesc = pluginDesc;
		this.main = main;
	}

	onEnable()
	{
	}

	onDisable()
	{
	}
    
	addCommand(CommandFile)
	{
		this.main.addCommand(CommandFile);
	}
    
	removeCommand()
	{

	}

	get name()
	{
		return this.pluginDesc.name;
	}

	log(message)
	{
		console.log(this.name + " > " + message);
	}
}

module.exports =
{
	CommandBase: require("../src/command/command-base.js"),
	DiscordPlugin: DiscordPlugin
};