const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message) => {
if (!message.member.hasPermission ('MANAGE_GUILD')) return message.channel.send (':x: | Sunucuyu yönet yetkin olmalı!')
  
  db.delete(`otorol_${message.guild.id}`)
  db.delete(`otorolkanal_${message.guild.id}`)
  message.channel.send(`:white_check_mark: | Otorol başarıyla kapatıldı!`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorolkapat',
  description: 'JavaScript Rolü alırsın',
  usage: 'js'
};
