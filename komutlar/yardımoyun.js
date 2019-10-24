const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  var prefix = 'g?'

message.channel.send(new Discord.RichEmbed()
                     .setDescription(`**Oyun Komutları**\n**${prefix}fortnite:** Ismi Yazılan Kişinin Fortnite Bilgilerini Gösterir\n**${prefix}mcsunucu:** IPsi Yazılan MC sunucusunun bilgilerini gösterir\n**${prefix}roblox:** Ismi Yazılan Kullanıcının ROBLOX bilgilerini gösterir`)
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
 name: 'oyun',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 