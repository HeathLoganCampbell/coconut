# Coconut
A simple modular discord bot which makes making commands for discord easier to use and understand.

## configurations
to make this all work, you'll need a discord token which you can get by...
* Going to the [Discord Developer Portal](https://discordapp.com/developers/applications/)
* Click 'Create an application'
* On the left bar, click OAuth2
* Scrolldown and select 'bot'
* Scrolldown a bit more, there should be a permissions panel now, select 'administrator', so the bot has all powers
* Now Go back to the left bar, click on Bot
* Click 'Add bot'
* Now click 'copy' under where it says 'token'
* Scrolldown to the permission panel and select 'administrator'
* Now go back to this project and enter in your token into the 'resources/configs.json' file

Now you'll need to get the client Id, so that your bot can join the server
* Going to the [Discord Developer Portal](https://discordapp.com/developers/applications/)
* Click on the application you just created 
* go to 'General Information'
* It should say 'CLIENT ID' on the page, just click the 'copy' button under it
* Now replace CLIENTIDGOESHERE with that client id https://discordapp.com/oauth2/authorize?client_id=CLIENTIDGOESHERE&scope=bot&permissions=3072
* paste that url into your browser and add the bot to your server


## How to run it

### Locally

1. I would suggest you [download docker](https://www.docker.com/get-started), which just make it so everything is ran in the same environment 
1. Type ```git clone https://github.com/HeathLoganCampbell/coconut.git``` into terminal to download the repo
1. Type ```cd coconut``` to enter the folder
1. Type ```docker-compose up``` to run the application

### Remotely

1. To run it remotely, you'll need to install [docker](https://www.docker.com/get-started) into the machine which there should be a few tutorials online that use it with your host
1. Type ```git clone https://github.com/HeathLoganCampbell/coconut.git``` into terminal to download the repo
1. Type ```cd coconut``` to enter the folder
1. Type ```docker-compose up -d``` to run the application

## Important commands

``` docker-compose up ```
runs the app

``` docker-compose up -d ```
runs app without locking terminal

``` docker-compose down ```
Deletes the container aka deletes the application

```docker exec -i -t coconut /bin/bash```
look into the container

```docker-compose build```
rebuilds the application 

## What is Docker
Docker is just makes it easier to share programs across muliple different types of platforms, so to minimize the "idk, It works on my machine" issue 

## Make a custom plugin
So in this application you can easily make plugins to add commands to the bot.

1. Create a folder inside of the plugins folder
1. inside that folder create a plugin.json
```{
    "name": "example",
    "author": "Heath Logan Campbell",
    "entry": "index.js"
}```
    1. This contains the name if the plugin
    1. the author of the plugin
    1. and the entry point of the plugin aka where your main file is.
    1. NOTE: Make sure your entry does not start with './' or '/'
1.  within the same folder create 'index.js' as we stated in the 'plugin.json' within the entry
1.  ```const { DiscordPlugin } = require("../../discord-plugin.js");

module.exports = class ClassManager extends DiscordPlugin
{
	onEnable()
	{
		this.log("Enabled");
	}

	onDisable()
	{
		this.log("Disabled");
	}
};
```
    1. The entry file *must* require ```const { DiscordPlugin } = require("../../discord-plugin.js");``` so that it can be extended