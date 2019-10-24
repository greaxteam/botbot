const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {

  let nesne = args[0]
    var i = args.slice(0).join(' ');

  if (!nesne) return message.channel.send('gold listesine alınamadı')
 

  db.delete(`gold_${nesne}`)
 
      message.channel.send(`${nesne} id numarasına sahip kullancıı Gold Üyelik Sisteminden Silindi !`)
       
  
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldüye","goldüye"],
  permLevel: 4
};

exports.help = {
  name: 'goldal',
  description: '',
  usage: 'goldüye'
};

// SAPPHIRE CODE
   