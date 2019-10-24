const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    let cooldown = 8.64e+7, 
        para = 100;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== 100 && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        const embed = new Discord.RichEmbed()
        .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
        .setColor('RED')
        .setDescription(`<❌>  | Günlük Ödülünüzü Zaten Aldınız! Lütfen **${timeObj.hours} saat ${timeObj.minutes} dakika** daha bekleyiniz!`)
        message.channel.send(embed);
        
    } else {
        const embed = new Discord.RichEmbed()
        .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
        .setDescription(`<✔> | Başarıyla Günlük Ödülünüzü Aldınız.`)
        .setColor('GREEN')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`para_${message.author.id}`, para);
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['günlüködül'],
  permLevel: 0
};

exports.help = {
  name: 'günlük',
  description: 'Günlük maaşınızı verir.',
  usage: 'günlük',
};