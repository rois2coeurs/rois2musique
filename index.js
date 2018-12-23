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

client.on('ready', function () {
    client.user.setActivity("utilisez !help pour voire toutes les commandes")
});

client.login(process.env.TOKEN);
