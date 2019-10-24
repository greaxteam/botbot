const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  

  let  bot = message.mentions.users.first();
  if(!bot) return message.channel.send('<:eyes:538361391221047316> | Kimin Parasını Sıfırlayacaksın?')
  
  db.delete(`para_${bot.id}`)
  message.channel.send(new Discord.RichEmbed()
                       .setDescription(`<:eyes:538361115743354901> | **${bot.tag}** adlı kullanıcının parası sıfırlanmıştır`)
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
  name: 'parasıfırla',
  description: '',
  usage: 'ascii'
}; 