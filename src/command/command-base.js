module.exports = class CommandBase 
{
	constructor(command, permission)
	{
		this.command = command.toLowerCase();
		this.permission = permission;
	}

	getCommand()
	{
		return this.command;
	}

	// onExecute(sender, command, args)
	// {}
};