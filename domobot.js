const Discord = require('discord.js');

const client = new Discord.Client({disableEveryone: true});
config = require("./config.json");
const fs = require ('fs');

client.commands = new Discord.Collection();

client.once('ready',() => {
    console.log('DomoBot is Online!');
});

let files = fs.readdirSync("./commands/"),
	cmds = new Map();

files.forEach(f => {
	let props = require(`./commands/${f}`);
	cmds.set(props.help.name, props);

	if(props.help.aliases) {
		props.help.aliases.forEach(a => cmds.set(a, props));
	}
});


client.on("message", (message) => {
	if(!message.content.startsWith(config.client.prefix)) return;
	console.log('if 1!');
	if(!message.guild.me.permissionsIn(message.channel).has(["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"])) return;
	console.log('if 2!');
	

	/*---------------------------------------------------------------------------
		Command handler
	---------------------------------------------------------------------------*/
	let split = message.content.split(/ +/g);
	let name = split[0].slice(config.client.prefix.length).toLowerCase();
	let args = split.slice(1);
	console.log('going in!');
	let cmd = cmds.get(name);
	if(cmd) cmd.run(client, message, args);


});


client.login(config.client.token);