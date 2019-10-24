const Discord = require("discord.js");
const db = require('quick.db')



module.exports.run = async (bot, message, args) => {
    
var prefix = 'g?'
    
message.channel.send(new Discord.RichEmbed()
                     .setDescription(`
**Profil Komutları**\n
**${prefix}profil -** Profilinizi Görüntüler\n
**${prefix}isim - **Profil İsminizi Ayarlar\n
**${prefix}soyisim - **Profil Soyisminizi ayarlar\n
**${prefix}hakkında -** Profil Hakkındanızı Ayarlar\n
**${prefix}yaş - **Profil Yaşınızı Ayarlar\n
**${prefix}meslek -** Profil Mesleğinizi Ayarlar\n
**${prefix}cinsiyet ['erkek','kadın'] -** Profil Cinsiyetinizi Ayarlar
`)
                     .setColor('RED')
                     )
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['profily'],
 permLevel: 0
};

exports.help = {
 name: 'profilyardım',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 