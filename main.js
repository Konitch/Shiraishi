const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env.BOT_TOKEN

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

mainguild = Discord.Guild.get('429299876212506624')
confesschannel = channel.get('780955663365963846')

client.on('message', msg => {
    if (msg.channel.type == "dm") {
      msg.author.send("You are DMing me now!");
      return;
    }
  });
  

client.login(token).catch(err => console.log(err))