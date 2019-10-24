const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  
  
   let bot;
    
    if (message.mentions.users.first()) {
      bot = message.mentions.users.first().id;
    } else {
        bot = message.author.id;
    } 
  
  if(client.users.get(bot).bot) return message.channel.send('<:alien:538361391221047316> Botların Parası Olmaz!')
  
  await db.fetch(`para_${bot}`).then(para => {
  message.channel.send(new Discord.RichEmbed()
                       .setDescription(`**${client.users.get(bot).tag}** adlı kullanıcının para miktarı: **${para}**`)
                       .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
                       .setColor('RANDOM'))
  
})}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para',
  description: '',
  usage: 'ascii'
}; 