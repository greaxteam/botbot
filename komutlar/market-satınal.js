const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db')

exports.run = (client, message, args) => {
 db.fetch(`para_${message.author.id}`).then(para => { 
 let oltafiyat = "15 TL"
 let CekiçFiyat = "20 TL"
 let bokseldivenfiyat = "25 TL"
 let çekiçfiyatnotl = 30
 let oltafiyatnotl = 35
 let bokselfiyatnotl = 50

 
 if(!args[0]) {
 
 const esyalistesi = new Discord.RichEmbed()
                         .setDescription(`**Alabileceğin Eşyalar:**\n**1)** :fishing_pole_and_fish: Olta ( ${oltafiyat} )\n**2)** :boxing_glove: Boks Eldiveni ( ${bokseldivenfiyat} ) \n**3)** :hammer: Çekiç ( ${CekiçFiyat} )\n\n Satın Almak İçin **g!satınal eşya**`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
  
 
 message.channel.send(esyalistesi)
   
   
 
 } else if(args[0] === 'olta') {
 db.fetch(`oltavarmi_${message.author.id}`).then(olta => {
  if (!olta) {
    
    if(para < oltafiyatnotl) return message.channel.send('<:alien:538361391221047316> | Bu Eşyayı Satın Almak İçin Yeterli Miktarda Paranız Bulunmamaktadır Gereken Fiyat: ' + oltafiyat)
   
    else {
    
    db.add(`para_${message.author.id}`, -oltafiyat)
      
    db.set(`oltavarmi_${message.author.id}`, 'aktif')
    
   const envkontrol = new Discord.RichEmbed()
                         .setDescription(`Bir Adet Oltayı ${oltafiyat}'ye Satın Aldınız!`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
  }} else { 
    
        const envkontrol = new Discord.RichEmbed()
                         .setDescription(`**HATA:** Zaten Olta Eşyasını Satın Almışsınız`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
    
  }
  
  })} else if(args[0] === 'boks') {
     
   if(db.fetch('para_' + message.author.id) < bokselfiyatnotl) return message.channel.send('<:hyr:538361391221047316> | Bu Eşyayı Satın Almak İçin Yeterli Miktarda Paranız Bulunmamaktadır Gereken Fiyat: ' + bokseldivenfiyat)
   
  db.fetch(`boksvarmi_${message.author.id}`).then(boks => {
  if (!boks) {
  
    db.add(`para_${message.author.id}`, -bokseldivenfiyat)
    
    db.set(`boksvarmi_${message.author.id}`, 'aktif')
    
   const envkontrol = new Discord.RichEmbed()
                         .setDescription(`Bir Adet Boks Eldivenini ${bokseldivenfiyat}'ye Satın Aldınız!`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
  } else { 
    
        const envkontrol = new Discord.RichEmbed()
                         .setDescription(`**HATA:** Zaten Boks Eldiveni Eşyasını Satın Almışsınız`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
    
  }
  })} else if(args[0] === 'çekiç') {
  db.fetch(`cekicvarmi_${message.author.id}`).then(çekiç => {
  if (!çekiç) {
  
     if(para < çekiçfiyatnotl) return message.channel.send('<:alien:538361391221047316> | Bu Eşyayı Satın Almak İçin Yeterli Miktarda Paranız Bulunmamaktadır Gereken Fiyat: ' + CekiçFiyat)
    
    db.add(`para_${message.author.id}`, -CekiçFiyat)
    db.set(`cekicvarmi_${message.author.id}`, 'aktif')
    
     const envkontrol = new Discord.RichEmbed()
                         .setDescription(`Bir Adet Çekici ${CekiçFiyat}'ye Satın Aldınız!`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
  
  } else {
         
    const envkontrol = new Discord.RichEmbed()
                         .setDescription(`**HATA:** Zaten Çekiç Eşyasını Satın Almışsınız`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
     
 message.channel.send(envkontrol)
    
    
  }
 })} else {
    
     const esyalistesi = new Discord.RichEmbed()
                         .setDescription(`**Alabileceğin Eşyalar:**\n**1)** :fishing_pole_and_fish: Olta ( ${oltafiyat} )\n**2)** :boxing_glove: Boks Eldiveni ( ${bokseldivenfiyat} ) \n**3)** :hammer: Çekiç ( ${CekiçFiyat} )\n\n Satın Almak İçin **g!satınal eşya**`)
                         .setColor("RANDOM")
                         .setAuthor("GreaxBOT Market")
                         .setFooter(`${message.author.tag} tarafından istendi!`, message.author.avatarURL)
  
 
 message.channel.send(esyalistesi)
 
  }})}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'satınal',
  description: '[Admin Komutu]',
  usage: 'reboot'
};
 