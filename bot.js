const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("Joue à Disney Laguna");
});

Client.on("message", message => {
    console.log("message");
});


Client.on("ready", () => {
    Client.user.setActivity("Disney Laguna | Serveur Fermé         Prefixe [!]", {type: "PLAYING"})
});
Client.commandes = new Discord.Collection()

Client.on("guildMemberAdd", member => {
    console.log("Bienvenue sur le serveur Disney Laguna");
    member.guild.channels.cache.find(channel => channel.id === "691697452033638421").send(`Hey ${member}, Bienvenue sur le serveur **𝕯𝖎𝖘𝖓𝖊𝖞𝕷𝖆𝖌𝖚𝖓𝖆** ! :tada::raised_hands:`);
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitter le serveur");
    member.guild.channels.cache.find(channel => channel.id === "691697452033638421").send(`${member.user.username} a quitté le serveur 😔 `);
});


Client.on("message", message => {
    if(message.author.bot) return;

    //!ip
    if(message.content == prefix + "ip"){
        message.channel.send("Serveur fermé | Ouverture prochainement !");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    //!version
    if(message.content == prefix + "version"){
        message.channel.send("La version du serveur est en **1.16.1**");
    }
});

Client.login("NzYyNzEyNDc2NTg3OTE3MzQz.X3tJWA.kbqirfRGWeRahdxQ-j02mygfCxs");
