const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env.BOT_TOKEN

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

if(message.content.startsWith('dm')) {
    const mentionedBot = message.mentions.client.first();
    if(!mentionedBot) return message.reply('Mention Somebody');
    mentionedBot.send('Hi');
}

client.login(token).catch(err => console.log(err))