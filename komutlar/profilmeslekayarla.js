const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let meslek = args.slice(0).join(' ');
  if (!meslek) return message.channel.send('Lütfen mesleğini yazarmısın.')
  message.channel.send('Mesleğin ``'+ meslek +'`` olarak ayarlandı!')
  db.set(`pis_${message.author.id}`, meslek)
  
  
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'meslek',
 description: 'Mesleğinizi Ayarlar',
 usage: 'profilmeslekayarla'
};