//Interface class
//Do not delete this file
module.exports = class DiscordPlugin
{
	constructor(pluginDesc, discordHandler)
	{
		this.pluginDesc = pluginDesc;
		this.discordHandler = discordHandler;
	}

	onEnable()
	{
	}

	onDisable()
	{
	}
    
	addCommand()
	{

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
};