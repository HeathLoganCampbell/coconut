module.exports = class CommandSender
{
	constructor(user, channel, server)
	{
		this.user = user;
		this.channel = channel;
		this.server = server;
	}
};