const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
var prefix = 'g?'

message.channel.send(new Discord.RichEmbed()
                     .setDescription(`**Müzik Komutları**\n**${prefix}oynat <şarkı ismi veya linki>:** Bot girilen müziği çalar. \n**${prefix}geç:** Oynatılan şarkıyı geçer. \n**${prefix}durdur:** Çalan şarkıyı durdurur. \n**${prefix}ses <1-15 arası değer>:** Çalan şarkının sesini ayarlar.  \n**${prefix}oynatılan:** Çalan şarkıyı gösterir. \n**${prefix}kuyruk:**Şarkı kuyruğunu gösterir. \n**${prefix}duraklat:** Çalan şarkıyı duraklatır. \n**${prefix}devamet:** Duraklatılan şarkıyı devam ettirir.`)
                     .setColor('RANDOM')
                     )
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'müzik',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 