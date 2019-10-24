const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db')

exports.run = (client, message, args) => {
 db.fetch(`para_${message.author.id}`).then(para => { 
 let oltafiyat = "10 TL"
 let CekiçFiyat = "10 TL"
 let bokseldivenfiyat = "10 TL"
    
 
 if(!args[0]) {
 
 const esyalistesi = new Discord.RichEmbed()
                         .addField(`:fishing_pole_and_fish: Olta`, `Olta Alırsınız\n**Fiyatı:** ${oltafiyat}`)
                         .addField(`:hammer: Çekiç`,`Çekiç Alırsınız\n**Fiyat:** ${CekiçFiyat}`)
                         .addField(`:boxing_glove: Boks Eldiveni`,`Boks Elsiveni Alırsınız\n**Fiyat:** ${bokseldivenfiyat}`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
  
 
 message.channel.send(esyalistesi)
   
   
 
 } else if(args[0] === 'kontrol') {

  db.fetch(`oltavarmi_${message.author.id}`).then(olta => {
  let oltayazı;
  if (!olta) oltayazı = '<:eyes:538361391221047316> Alınmamış'
  else oltayazı = `<:eyes:538361115743354901> Alınmış!`
 
  db.fetch(`boksvarmi_${message.author.id}`).then(boks => {
  let boksyazı;
  if (!boks) boksyazı = '<:alien:538361391221047316> Alınmamış'
  else boksyazı = `<:eyes:538361115743354901> Alınmış!`
  
  db.fetch(`cekicvarmi_${message.author.id}`).then(çekiç => {
  let çekiçyazı;
  if (!çekiç) çekiçyazı = '<:alien:538361391221047316> Alınmamış'
  else çekiçyazı = `<:eyes:538361115743354901> Alınmış!`
  
  
  const envkontrol = new Discord.RichEmbed()
                         .addField(`:fishing_pole_and_fish: Olta`, `${oltayazı}`)
                         .addField(`:hammer: Çekiç`,`${çekiçyazı}`)
                         .addField(`:boxing_glove: Boks Eldiveni`,`${boksyazı}`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
  
 })})})}})}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: '[Admin Komutu]',
  usage: 'reboot'
};