var CommandBase = require("../command-base.js");

module.exports = class DemoCmd extends CommandBase
{
	constructor()
	{
		super("demo", "base.commands.demo");
	}
    
	onExecute(sender, command, args)
	{
		sender.channel.send("Yeet");
	}
};