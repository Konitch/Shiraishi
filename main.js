const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env.BOT_TOKEN

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

let guild = client.guilds.get('429299876212506624'), // returns a Guild or undefined
    channel;

    channel = guild.channels.get('780955663365963846');

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        client.guild.channel.send(user.message); 
    }

    });

client.login(token).catch(err => console.log(err))