
const fs = require("fs");

module.exports = class PluginManager 
{
	constructor()
	{

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
		var plugin = new Plugin(pluginDesc, null);
		plugin.onEnable();
	}
};
