const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let soyisim = args.slice(0).join(' ');
  if (!soyisim) return message.channel.send('Lütfen Soy İsmini yaz.')
  message.channel.send('Soy İsmin ``'+ soyisim +'`` olarak ayarlandı!')
  db.set(`psoyisim_${message.author.id}`, soyisim)
  
  
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'soyisim',
 description: 'Soy İsminizi Ayarlar',
 usage: 'profilsoyisimayarla'
};