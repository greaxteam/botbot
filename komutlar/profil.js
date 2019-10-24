const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send('Botların profili olmaz!')
  //isim profil
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = 'İsim ayarlanmamış!'
  else isimYazi = `${isim}`
  //soyisim profil
    let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = 'Soy İsim ayarlanmamış!'
  else soyisimYazi = `${soyisim}`
  //renk profil
    let renk = await db.fetch(`prenk_${user.id}`);
  let renkYazi;
  if (renk == null) renkYazi = "RANDOM"
  else renkYazi = `${renk}`
  //cinsiyet profil
   let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = 'Cinsiyet ayarlanmamış!'
  if (cinsiyet == 'kız') csYazi = 'Kız'
  if (cinsiyet == 'erkek') csYazi = 'Erkek'
  if (cinsiyet == 'yok') csYazi = 'Belirtmek istemiyor.'
  //hakkında profil
    let hak = await db.fetch(`phakkinda_${user.id}`);
  let hkYazi;
  if (hak == null) hkYazi = 'Hakkında ayarlanmamış!'
  else hkYazi = `${hak}`
  //iş profil
    let is = await db.fetch(`pis_${user.id}`);
  let isYazi;
  if (is == null) isYazi = 'İş ayarlanmamış!'
  else isYazi = `${is}`
  //yaş profil
   let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = 'Yaş ayarlanmamış!'
  else yasYazi = `${yas}`
  //kısabilgi profil
  let kb = await db.fetch(`pkbilgi_${user.id}`);
  let kYazi;
  if (kb == null) kYazi = 'Kısa bilgi ayarlanmamış!'
  else kYazi = `${kb}`
  //resim profil
  let resim = await db.fetch(`presim_${user.id}`);
  let rYazi;
  if (resim == null) rYazi = `${user.avatarURL}`
  else rYazi = `${resim}`
  //rozet profil
  let rozet = await db.fetch(`promosyon_${user.id}`);
  let r1Yazi;
  if (rozet == null) r1Yazi = `<:100:513810692185522198>`
  else r1Yazi = `${rozet}`
  //rozet2 profil
  let rozet1 = await db.fetch(`promosyon2_${user.id}`);
  let r2Yazi;
  if (rozet1 == null) r2Yazi = `<:100:513810692185522198>`
  else r2Yazi = `${rozet1}`
  //rozet3 profil
   let rozet2 = await db.fetch(`promosyon3_${user.id}`);
  let r3Yazi;
  if (rozet2 == null) r3Yazi = `<:100:513810692185522198>`
  else r3Yazi = `${rozet2}`
  //rozet4 profil
    let rozet3 = await db.fetch(`promosyon4_${user.id}`);
  let r4Yazi;
  if (rozet3 == null) r4Yazi = `<:100:513810692185522198>`
  else r4Yazi = `${rozet3}`
  //bayrak profil
   let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = `🇹🇷`
  else bYazi = `${bayrak}`
  
  const embed = new Discord.RichEmbed()
  .setAuthor(`${user.username} adlı kullanıcının profil kartı`)
  .setColor(renkYazi)
  .addField('İsim', isimYazi, true)
  .addField('Soy isim', soyisimYazi, true)
  .addField('Yaş', yasYazi, true)
  .addField('Cinsiyet', csYazi, true)
  .addField('Meslek', isYazi, true)
  .addField('Hakkında', hkYazi, true)
  message.channel.send(embed)
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'profil',
 description: 'Profilinizi Gösterir',
 usage: 'profil'
};