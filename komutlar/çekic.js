//hash komutlar/çekiç.js atınız.
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'çekiç adlı komutu özel mesajlarda kullanamazsın.')}
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
  .setColor("RANDOM")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: Attı. Canın Acımış Olmalı!**')
    return message.channel.sendEmbed(embed);
}
                                                  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 kategori: "eğlence"
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç'
};