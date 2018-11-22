const CommandBase = require("../command-base.js");
const { RichEmbed } = require("discord.js");

module.exports = class DemoCmd extends CommandBase
{
	constructor()
	{
		super("demo", "base.commands.demo");
	}
    
	onExecute(sender, command, args)
	{
		const embed = new RichEmbed()
			.setTitle("A slick little embed")
			.setColor(0xFF0000)
			.setDescription("Hello, this is a slick embed!");
		sender.channel.send(embed);
	}
};