const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  

  let  bot = message.mentions.users.first();
  if(!bot) return message.channel.send('<:alien:538361391221047316> | Kimin Market Eşyalarını Sıfırlayacaksın?')
  
  db.delete(`oltavarmi_${bot.id}`)
  db.delete(`cekicvarmi_${bot.id}`)
  db.delete(`boksvarmi_${bot.id}`)
  
  message.channel.send(new Discord.RichEmbed()
                       .setDescription(`<:eyes:538361115743354901> | **${bot.tag}** adlı kullanıcının marketi sıfırlanmıştır`)
                       .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
                       .setColor('RANDOM'))
  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'marketsıfırla',
  description: '',
  usage: 'ascii'
}; 