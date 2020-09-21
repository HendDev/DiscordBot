const Discord = require('discord.js');
const client = new Discord.Client(); 
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const rules = require('./messages/rules.json');
const redes = require('./messages/redes.json');
const saludo = require('./messages/saludo.json');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
  console.log(msg.content)
  if (msg.content.toLocaleLowerCase() === '!reglas') {
    const author = msg.author.username
    msg.channel.send(messageEmbed({
      authorName: author,
      title: rules.customMessage,
      content: rules.rules
    }))
  }

  if (msg.content.toLocaleLowerCase() === '!redes') {
    const author = msg.author.username
    msg.channel.send(messageEmbed({
      authorName: author,
      title: redes.customMessage,
      content: redes.redes
    }))
  }

  if (msg.content.toLocaleLowerCase() === 'hola') {
    const author = msg.author.username
    msg.channel.send(messageEmbed({
      authorName: author,
      title: saludo.customMessage,
      content: saludo.saludo
    }))
  }
  
});

client.on('ready', () => {
  console.log(`Conectado... ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);