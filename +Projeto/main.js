const Discord = require('discord.js')
const client = new Discord.Client()

client.on('Pronto!', () => {
    console.log("Conectado como " + client.user.tag)
})

client.login("NDEyNjk0MzAyOTQ3NTQwOTk3.XapGXw.m5vyyLhv_xyCQwsv2LrNaDCbsMY")