const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let soyisim = args.slice(0).join(' ');
  if (!soyisim) return message.channel.send('Lütfen hakkındaya yazacağın şeyi yaz.')
  message.channel.send('Hakkında Bölümü ``'+ soyisim +'`` olarak ayarlandı!')
  db.set(`phakkinda_${message.author.id}`, soyisim)
  
  
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'hakkında',
 description: 'Soy İsminizi Ayarlar',
 usage: 'profilsoyisimayarla'
};