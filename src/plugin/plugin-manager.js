
const fs = require("fs");

module.exports = class PluginManager 
{
	constructor(main)
	{
		this.main = main;
		console.log("=====-----======");
		console.log(this.main);
	}
    
	loadAllPlugins()
	{
		fs.readdir("./plugins/", (err, files) => 
		{
			for(var i = 0; i < files.length; i++)
			{
				var file = files[i];
				var fileDesc = fs.statSync("./plugins/" + file);
				if(fileDesc.isDirectory())
				{
					this.loadPlugin(file);
				}
			}
		});
	}
    
	loadPlugin(name)
	{
		var pluginDesc = require("../../plugins/" + name + "/plugin.json");
		var Plugin = require("../../plugins/" + name + "/" + pluginDesc.entry);
		if(Plugin === undefined || Plugin === {}) return;
		var plugin = new Plugin(pluginDesc, this.main);
		plugin.log(plugin.name + " has been enabled.");
		plugin.onEnable();
	}
};
