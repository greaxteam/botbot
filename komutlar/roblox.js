const Discord = require('discord.js');
const jsroblox = require('js-robloxapi');

exports.run = (client, message, args) => {
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
  .addField(':warning: Uyarı :warning:', 'roblox adlı komutu özel mesajlarda kullanamazsın.')}
    let isim = args[0]
    if (!isim) return message.reply('Lütfen Roblox Kullanıcı Adı Yazınız')
    jsroblox.getInfo(isim, (data) => {
        if (!data) return message.reply(`**${isim}** Adlı Kullanıcı Bulunamadı`)
        let durum = {
            "No": "Offline",
            "undefined": "Bilinmiyor"
        };
        const embed = new Discord.RichEmbed()
        .setColor("#36393F")
        .setThumbnail(data.Avatar)
        .setTitle(isim)
        .addField('ID', `**${data.Id}**`)
        .addField('Durumu', `**${durum[data.Online]}**`)
        .addField('Arkadaşlar', `Arkadaş Sayısı: **${data.TotalFriends}**
Arkadaş Listesi: **${data.ListFriends}**`)
        .addField('Grup Listesi', `**${data.ListGroup}**`)
        .addField('Rozetleri', `**${data.ListBadges}**`)
        return message.channel.send(embed)
    })
})}

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roblox',
   description: 'roblox',
   usage: 'roblox'
 };