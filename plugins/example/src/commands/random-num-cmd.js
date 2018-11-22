const { CommandBase } = require("../../../discord-plugin.js");

module.exports = class RandomNumCmd extends CommandBase
{
	constructor()
	{
		super("rannum", "base.commands.random_num");
	}
    
	onExecute(sender, command, args)
	{
		sender.channel.send("....");
	}
};