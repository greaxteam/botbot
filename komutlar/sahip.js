const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    let cooldown = 8.64e+7, 
        para = 100;
        
        
        const embed = new Discord.RichEmbed()
        .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
        .setDescription(`<✔> | Başarıyla Günlük Ödülünüzü Aldınız.`)
        .setColor('GREEN')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`para_${message.author.id}`, para);
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['11'],
  permLevel: 2
};

exports.help = {
  name: 'günlük',
  description: 'Günlük maaşınızı verir.',
  usage: '11',
};