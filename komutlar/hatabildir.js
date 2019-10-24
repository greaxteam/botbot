const Discord = require('discord.js');


exports.run = function(client, message, args) {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: g?hatabildir <Hata>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Hata Bildiriminiz Ulaştı :white_check_mark:\nSpam Yazmayınız Bloke Edilebilirsiniz!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Hata Bildirimi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Hata", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('626504466455068674').send(embed2); // Kanal ID 

})}

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bug', 'hata', 'hata-bildir'],
  permLevel: 0 
};

exports.help = {
  name: 'hatabildir',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};