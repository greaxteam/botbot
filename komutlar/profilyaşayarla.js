const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let yas = args.slice(0).join(' ');
  if (!yas) return message.channel.send('Lütfen yaşını yazarmısın.')
  message.channel.send('Yaşın ``'+ yas +'`` olarak ayarlandı!')
  db.set(`pyas_${message.author.id}`, yas)
  
  
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'yaş',
 description: 'Profilde Yaşını Ayarlar',
 usage: 'profilyaşayarla'
};