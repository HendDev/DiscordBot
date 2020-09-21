const Discord = require('discord.js');

const messageEmbed = ({ authorName, title, content }) => {
  const parseContent = content.map(i => `${i}\n`)
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#723ceb')
    .setTitle(`Hola ${authorName}`)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor('#0099ff')
    .setDescription(`${title} ${parseContent}`)
    .setColor('#723ceb')
    .setFooter('Comunidad Hend')

  return msgEmbed;
};

module.exports = messageEmbed;