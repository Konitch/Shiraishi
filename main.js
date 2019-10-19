const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

client.login({
    token: "NDEyNjk0MzAyOTQ3NTQwOTk3.XaqlmA.zv_HIT7trkkE47L0bj9JkY57Ilk"
});
//vou criar um bot e pegar o token pera