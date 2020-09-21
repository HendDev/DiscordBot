const Discord = require('discord.js');

const messageEmbed = ({ authorName, title, content }) => {
  const parseContent = content.map(i => `${i}\n`)
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Hola <b style="color: #723ceb">${authorName}<b>`)
    .setDescription(`${title} ${parseContent}`)
    .setFooter('Comunidad Hend')

  return msgEmbed;
};

module.exports = messageEmbed;