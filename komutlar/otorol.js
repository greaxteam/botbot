const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message) => {
if (!message.member.hasPermission ('MANAGE_GUILD') && message.guild.id !== "578702364362539048") return message.channel.send (':x: | Sunucuyu yönet yetkin olmalı!')

  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
   
  if(!rol) return message.channel.send(':x: | Bir Rol Etiketlemelisin Örnek: g?otorol @Rol #kanal')
  else if(!kanal) return message.channel.send(':x: | Bir kanal Etiketlemelisin Örnek: g?otorol @Rol #kanal')
  
  db.set(`otorol_${message.guild.id}`, rol.id)
  db.set(`otorolkanal_${message.guild.id}`, kanal.id)
  message.channel.send(`:white_check_mark: | Otorol <@&${rol.id}>, Otorol Kanalı <#${kanal.id}> olarak Ayarlandı!`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'JavaScript Rolü alırsın',
  usage: 'js'
};
