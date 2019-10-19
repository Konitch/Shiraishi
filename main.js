const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

client.login('NDEyNjk0MzAyOTQ3NTQwOTk3.XaqyrA.oE9WbOBIpniPUFWBeoLi_8nvWAc')
//vou criar um bot e pegar o token pera