const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, params, args) => {
     //if (args [0] === 'sıfırla'
     if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '578702364362539048') return message.channel.send(':x: | Kayıt kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
  if (args [0] === 'sıfırla') { 
    db.delete(`membertmodChannel_${message.guild.id}`)
    message.channel.send(':white_check_mark: | Modlog Sıfırlandı!')
  } else {
  let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send(':x: | **Kayıt kanalı ayarlamak için bir kanal etiketlemeniz gerekli veya sıfırla yazmalısınız!** `g?modlog #kanal` veya `sıfırla`')
     db.set(`membermodChannel_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`:white_check_mark: Kayıt kanalı, <#${i}> olarak ayarlandı.`)    
    })         
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'modlog',
    description: 'Mod log kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>'
}