const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için `Yönetici` yetkiniz olması lazım')
 
  let tag = args[0]
  if (!tag) return message.channel.send('Bir tag girmelisin?')
  db.set(`tag_${message.guild.id}`, tag)
  message.channel.send('Tag başarıyla `'+ tag +'` olarak ayarlandı!')
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag'],
  permLevel: 0
};

exports.help = {
  name: 'oto-tag',
  description: '',
  usage: ''
};