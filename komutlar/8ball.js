const Discord = require('discord.js');

const cevaplar = [
    "Hayır",
    "Evet",
    "Belki",
    "Olabilir",
//    "daha sonra tekrar sor",
 //   "imkansız"
];

exports.run = function(client, message, args) {
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
  .addField(':warning: Uyarı :warning:', 'sor adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: g?sor <soru>')
    else message.channel.sendEmbed(new Discord.RichEmbed()
                                  .addField('♡ Makine Çalıştı', cevap)
                                  .setColor('RANDOM')
                                  .setFooter('GreaxBOT 2019  | 8Ball Sistemi'))

})}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: 'eğlence'
};

exports.help = {
  name: 'sor', 
  description: 'Bot sorularınızı cevaplar',
  usage: 'sor <soru>'
};