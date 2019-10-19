const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Conectado como " + client.user.tag)
})

client.login({
    token: "IG1SiTdP77AsU30iCwZVvANNQfmIA48F"
});
//vou criar um bot e pegar o token pera