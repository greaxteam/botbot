const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')  
var prefix = 'g?'
message.channel.send(new Discord.RichEmbed()
                     .setDescription(`**Eğlence Komutları**\n**${prefix}sor:** Bota Soru Sorarsınız\n**${prefix}ascii:** ASCII Fontunda Yazı Yazarsınız\n**${prefix}aşkölçer:** Etiketlenen Kişi İle Aşkınızı Test Edersiniz\n**${prefix}emojiyazı:** Emojiler İle Yazı Yazarsınız\n**${prefix}espri:** Bot Size Espri Yapar\n**${prefix}gifara:** Arattığınız Kriterlere Göre Gif Arar\n**${prefix}rastgeleşifre:** Yazılan Sayı Miktarında Rastgele Şifre Üretir\n**${prefix}romen:** Girdiğiniz Sayıları Romen Rakamına Çevirir\n**${prefix}sarıl:** Etiketlenen Kişiye Sarılırsınız\n**${prefix}söz:** Rastgele Söz Atar\n**${prefix}troll:** Troll Gifi Atar\n**${prefix}yazdır:** Etiketlenen Kişiye Yazı Yazdırır\n**${prefix}yazıtura:** Yazı Tura Atarsınız\n**${prefix}çekiç:** Etiketlenen Kişiye Çekiç Atarsınız\n**${prefix}tkm:** Botla taş kağıt makas oynarsınız\n**${prefix}stresçarkı:** Sizin için bir stres çarkı çevirir\n**${prefix}söv:** Bot küfür eder.\n**${prefix}kaçcm:** Dene ve gör!\n**${prefix}çeviri:** Yazdığınız kelimeyi yazdığınız dile çevirir\n**${prefix}çayiç:** Çay içersiniz\n**${prefix}balıktut:** Balık tutarsın\n**${prefix}trampet:** Bot trampet çalar\n**${prefix}kafasınasık:** Belirttiğiniz kullanıcının kafasına sıkar\n**${prefix}havadurumu:** Belirttiğiniz Lokasyonun (Bölgenin) Hava durumunu gösterir\n**${prefix}fakemesaj:** Belirtilen Kullanıcı Fake Mesaj Yazar\n**${prefix}simit:** Simit Yersiniz\n**${prefix}reklamlar:** Kısa bir reklam arası\n**${prefix}radyo**\n**${prefix}playstore:** Playstorede oyun aratırsınız\n**${prefix}vur:** Dene ve gör "D\n**${prefix}inek:** İnek Yazısı\n**${prefix}korkut:** Korkmaya hazır ol\n**${prefix}atam:** Atam❤\n**${prefix}winner:** Kazanan!\n**${prefix}tr:** TÜRKİYE❤❤\n**${prefix}trinity:**Çerçeve\n**${prefix}saat:**Saati Gösterir\n**${prefix}teravatar:**Ters Avatar`)                     
                     .setColor('RANDOM')
                     )
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'eğlence',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          
 