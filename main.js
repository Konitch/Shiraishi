const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env.BOT_TOKEN

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    client.channels.get('780955663365963846').send(user.message)

    });

client.login(token).catch(err => console.log(err))