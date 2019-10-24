const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  
  
   let bot = message.mentions.users.first();
   if(!bot) return message.channel.send('<❌>  | Kime Para Vereceksin?')
   else if(!args[1]) return message.reply('Kaç Para Vereceksin')
  
  db.add(`para_${bot.id}`, )
  
  await db.fetch(`para_${bot}`).then(para => {
  message.channel.send(new Discord.RichEmbed()
                       .setDescription(`<:alien:538361115743354901> | **${bot.tag}** adlı kullanıcıya  para verilmiştir`)
                       .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
                       .setColor('RANDOM'))
  
})}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'paraver',
  description: '',
  usage: 'paraver'
}; 