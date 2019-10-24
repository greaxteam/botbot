const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
 var prefix = 'g?'

message.channel.send(new Discord.RichEmbed()
                     .setDescription(`**Moderasyon Komutları**\n**${prefix}ban:** Etiketlenen Kullanıcıyı Sunucudan Yasaklar\n**${prefix}kanalkilit:** Bulunduğunuz Kanalı Belirtilen süre boyunca kilitler\n**${prefix}kick:** Etiketlenen Kullanıcıyı Sunucudan Atar\n**${prefix}küfür-engel Aç/Kapat:** Sunucuda Küfür Korumasını Aktifleştirir veya Kapatır\n**${prefix}otorol:** Etiketlenen Rolü Sunucuya Katılımlarda Otomatik Olarak verir\n**${prefix}oylama:** Girilen Konu Hakkında Oylama Yapar\n**${prefix}reklam-engel Aç/Kapat:** Sunucuda Reklam Korumasını Açar/Kapatır\n**${prefix}reklamtaraması:** Oynuyor Yerine Reklam Koyanları Tarar\n**${prefix}rolver:** Etiketlenen Kullanıcıya Etiketlenen Rolü Verir\n**${prefix}rolal:** Etiketlenen kullanıcıdan etiketlenen rolü alır\${prefix}ses-kanalı-aç:** Yazılan İsimde Bir Ses Kanalı Açar\n**${prefix}mute:** Etiketlenen Kişiyi Susturur \n**${prefix}unmute:** Etiketlenen Kişinin Susturmasını Kaldırır\n**${prefix}temizle:** Girilen Miktarda Mesaj Siler\n**${prefix}uyar:** Etiketlenen Kişiyi Uyarır\n**${prefix}yazıkanalıaç:** Yazılan İsimde Bir Yazı Kanalı Açar\n**${prefix}çekiliş:** Bir Çekiliş Başlatır\n**${prefix}modlog:** Etiketlenen Kanalı modlog Kanalı Olarak Ayarlar\n**${prefix}nick:** Etiketlenen kişinin nickini değiştirir\n**${prefix}roller2:** Rolleri gösterir\n**${prefix}yavaş-mod:** Kanal yazma süresi belirler\n**${prefix}prefix-ayarla:** Bakımda!\n`)
                     .setColor('RANDOM')
                     )
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [''],
 permLevel: 0
};

exports.help = {
 name: 'moderasyon',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 