const Discord = require('discord.js');
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  youtubeKey: process.env.YTTOKEN,
  insertMusic: true,
  botPrefix: "!",
  messageNewSong: true,
  play: {
    alt: ["p"],
    help: "Mettre une chanson/playlist de lecture en file d'attente par URL ou par nom.",
  },
  remove: {
    help: "Supprimer une chanson de la file d'attente avec sa position"
  },
  help: {
    alt: ["h"],
    help: "Aide pour les commandes."
  },
  skip: {
    alt: ["s"],
    help: "Ignorer une chanson ou des chansons avec ``skip [numéro]``"
  },
  leave: {
    help: "Quitte le canal vocal."
  },
  search: {
    help: "Recherche jusqu'à 10 vidéos de YouTube."
  },
  pause: {
    alt: ["p"],
    help: "Pause de la musique."
  },
  resume: {
    help: "Reprend une file d'attente en pause."
  },
  volume: {
    help: "Modifie le volume de sortie du bot."
  },
  queue: {
    alt: ["q"],
    help: "Afficher la file d'attente actuelle."
  },
  loop: {
    enable: false,
    help: "Définit l'état de la boucle pour la file d'attente."
  },
  clear: {
    help: "Efface toute la file d'attente."
  },
  np: {
    help: "Affiche la musique en cours de lecture."
  },

  anyoneCanSkip: false,

  ownerOverMember: true,
  ownerID: "234647775621414912",

  cooldown: {
    enabled: false
  }
});

client.on('message', message => {
  if (message.content === '!ping') {
    var ping = new Discord.RichEmbed()
      ping.addField(":zap: Connection actuelle du bot :zap: " , `**${message.createdTimestamp - Date.now()} ms**`)
      .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
      .setColor("#ffff66")
      .timestamp = new Date()
    message.channel.sendEmbed(ping)
  }
});

client.on('ready', function () {
    setInterval(intervalle, 10000, 'inter')
    function intervalle(){
    client.user.setActivity(`!help |-| ${client.guilds.size} serveurs`)
    }
});

client.on('message', message => {
  if (message.content === '!serverlist') {
    var serverlist = new Discord.RichEmbed()
    serverlist.addField(":desktop: Les serveurs du bot", client.guilds.map(r => r.name + ` |  **${r.memberCount}** membres :levitate:`))
    serverlist.setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
    serverlist.setColor("#33adff")
    .timestamp = new Date()
    message.channel.sendEmbed(serverlist)
  }
});

client.on('message', message => {
  if (message.content === '!help') {
    var help = new Discord.RichEmbed()
      .addField(":keyboard: Commandes autres :keyboard:" , `Visualise les autres commandes du robot.`)
      .addField("serverlist" , `Voire, sur quels autres serveurs le robot est connecté.`)
      .addField("ping" , `Tester la connexion du robot.`)
      .setColor("#ff3333")
      .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
      .timestamp = new Date()
    message.channel.sendEmbed(help)
  }
});

client.login(process.env.TOKEN);
