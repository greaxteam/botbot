const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
 var prefix = 'g?'

message.channel.send(new Discord.RichEmbed()
.setDescription(`**Ekonomi Komutları**\n${prefix}günlüködül** -** Günlük Ödülünüzü Alırsınız\n${prefix}market **-** Marketi Görüntüler\n${prefix}market kontrol **-** Marketinizdeki eşyaları görüntüler\n${prefix}satınal **-** Herhangi Bir Eşya Satın Alırsınız (olta, boks eldiveni, çekiç)\n${prefix}para **-** Paranızı Görüntüler\n**Not Bu Özellik Henüz Betadır Kullanımı Yoktur!**`)
.setColor('RANDOM')
                     )
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['eko'],
 permLevel: 0
};

exports.help = {
 name: 'ekonomi',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 