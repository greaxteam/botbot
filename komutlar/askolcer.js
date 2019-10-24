const Discord = require('discord.js');

exports.run = async (client, message, args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'aşkölçer adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }

    let ask=[

      "Aşkölçer %3 Gösteriyor.",

      "Aşkölçer %6 Gösteriyor.",

      "Aşkölçer %9 Gösteriyor.",

      "Aşkölçer %12 Gösteriyor.",

      "Aşkölçer %18 Gösteriyor.",

      "Aşkölçer %20 Gösteriyor.",

      "Aşkölçer %23 Gösteriyor.",

      "Aşkölçer %26 Gösteriyor.",

      "Aşkölçer %29 Gösteriyor.",

      "Aşkölçer %30 Gösteriyor.",

      "Aşkölçer %40 Gösteriyor.",

      "Aşkölçer %50 Gösteriyor.",

      "Aşkölçer %60 Gösteriyor.",

      "Aşkölçer %70 Gösteriyor.",

      "Aşkölçer %73 Gösteriyor.",

      "Aşkölçer %76 Gösteriyor.",

      "Aşkölçer %79 Gösteriyor.",

      "Aşkölçer %82 Gösteriyor.",

      "Aşkölçer %85 Gösteriyor.",

      "Aşkölçer %88 Gösteriyor.",

      "Aşkölçer %90 Gösteriyor.",

      "Aşkölçer %91 Gösteriyor.",

      "Aşkölçer %92 Gösteriyor.",

      "Aşkölçer %93 Gösteriyor.",

      "Aşkölçer %94 Gösteriyor.",

      "Aşkölçer %95 Gösteriyor.",

      "Aşkölçer %96 Gösteriyor.",

      "Aşkölçer %97 Gösteriyor.",

      "Aşkölçer %98 Gösteriyor.",

      "Aşkölçer %99 Gösteriyor.",

      "Aşkölçer %100 Gösteriyor.",

    ]

      let member = message.mentions.members.first()

     if(!member)return message.channel.send({embed: {

   color: Math.floor(Math.random() * (0xFFFFFF + 1)),

   description: (':no_entry_sign: Kimi Seviyorsun?')

  }});







    else{

    message.channel.send({embed: {

   color: Math.floor(Math.random() * (0xFFFFFF + 1)),

   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)

    }})

    }





  })}



  exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0,
  kategori: 'eğlence'

   };



  exports.help = {

    name: 'aşkölçer',

    description: 'Aşk Ölçmeni sağlar.',

    usage: 'aşkölçer'

   }
