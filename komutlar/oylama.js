const Discord = require('discord.js');

 exports.run = (client, message, args) => {
       const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.RichEmbed()

     .setDescription("Oylama yapmak için bir konu girmen gerek.")
     .setColor(0x36393E)
     
       )
       message.channel.send(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setFooter("GreaxBOT | Oylama Sistemi ", client.user.avatarURL)

       .addField(`Bir Oylama Basladi!.`, `:white_small_square: | **Oylama konusu**: ${question}`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     })}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '/oylama <oylamaismi>'
};
 