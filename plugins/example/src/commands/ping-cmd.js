const { CommandBase } = require("../../../discord-plugin.js");


module.exports = class PingCmd extends CommandBase
{
	constructor()
	{
		super("ping", "base.commands.ping");
	}
    
	onExecute(sender, command, args)
	{
		sender.channel.send("pong");
	}
};