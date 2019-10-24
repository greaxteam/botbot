const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')  
var prefix = 'g?'

            message.channel.send(new Discord.RichEmbed()
             .setDescription(`**${bot.user.username} Yardım Menüsü**\n
**g?eğlence -** Eğlence Komutlarını Gösterir\n
**g?moderasyon - **Moderatör Komutlarını Gösterir\n
**g?müzik -** Müzik Komutlarını Gösterir\n
**g?oyun -** Oyun Komutlarını Gösterir\n
**g?profilyardım -** Profil Komutlarını Gösterir\n
**g?ekonomi -** Ekonomi Komutlarını Gösterir
`)
.addField(`Greax linkler`, "**[Botu Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=619936512175505418&scope=bot&permissions=1032)** \n**[Destek Sunucum](https://discord.gg/bfCqmJw)** \n**[Web Sitemiz](https://greaxboth.glitch.me)** \n**[Bota Oy Ver](https://dctrlist.cf/bot/619936512175505418)**")
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
 name: 'yardım',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 