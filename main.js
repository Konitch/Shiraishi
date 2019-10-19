const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

client.login("NDEyNjk0MzAyOTQ3NTQwOTk3.Xap8rg.w8bt9dhR2m1K1L6DLhSVunnC8zw")