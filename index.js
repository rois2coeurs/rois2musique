const Discord = require('discord.js');
const client = new Discord.Client();
client.music = require("./node_modules/discord.js-musicbot-addon/index.js");

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

  ownerOverMember: {
    enable: true,
    ownerID: "234647775621414912",
  }
  cooldown: {
    enabled: false
  }
});

client.on('message', message => {
  if (message.content === '!ping') {
    var ping = new Discord.RichEmbed()
      ping.addField(":zap: Connection actuelle du bot :zap: " , `**${message.createdTimestamp - Date.now()} ms**`)
      ping.setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
      ping.setColor("#ffff66")
    message.channel.send(ping)
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
    message.channel.send(serverlist)
  }
});

client.on('message', message => {
  if (message.content === '!help') {
    var help = new Discord.RichEmbed()
      help.addField(":keyboard: Commandes autres :keyboard:" , `Visualise les autres commandes du robot.`)
      help.addField("serverlist" , `Voire, sur quels autres serveurs le robot est connecté.`)
      help.addField("ping" , `Tester la connexion du robot.`)
      help.addField("Votez pour le bot" , "Vous pouvez voter pour le bot grâce à [ce lien](https://discordbots.org/bot/523803859768967198/vote).")
      help.setColor("#ff3333")
      help.setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
    message.channel.send(help)
  }
});

client.login(process.env.TOKEN);
