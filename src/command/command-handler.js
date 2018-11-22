var CommandSender = require("./command-sender.js");

module.exports = class CommandHandler
{
	constructor(discordClient)
	{
		this.commandMaps = [];
		this.discordClient = discordClient;

		this.discordClient.on("message", (message) => 
		{
			var sender = new CommandSender(message.author, message.channel, message.guild);
			this.commandParse(sender, message.content);
		});
	}
    
	addCommandMap(commandMap)
	{
		this.commandMaps.push(commandMap);
	}

	commandParse(sender, message)
	{
		var args = message.split(" ");
		if(message.charAt(0) === "!")
		{
			var command = args[0].substring(1);
			args = args.splice(0);
			for(var i = 0; i < this.commandMaps.length; i++)
			{
				var commandMap = this.commandMaps[i];
				if(commandMap.execute(sender, command, args))
					break;
			}
		}
	} 
};