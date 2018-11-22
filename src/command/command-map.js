module.exports = class CommandMap
{
	constructor()
	{
		this.commands = {};
	}
    
	addCommand(File)
	{
		var command = new File();
		console.log("ADDD command : " + command.getCommand());
		this.commands[command.getCommand()] = command;
	}

	execute(sender, command, args)
	{
		command = command.toLowerCase();
		if(this.commands[command] === undefined) 
			return false;
		this.onExecute(sender, command, args);
		return true;
	}
    
	onExecute(sender, command, args)
	{
		this.commands[command].onExecute(sender, command, args);
	}
};