const Discord = require("discord.js");
const client = new Discord.Client();
var Jimp = require('jimp');
const ayarlar = require('../ayarlar.json')
const DBL = require("dblapi.js");
const dbl = new DBL(ayarlar.dbltoken , client);

exports.run = async (bot, message, args) => {
    const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }

  var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

    dbl.hasVoted(message.author.id).then(voted => {
 if (!voted) {
message.channel.sendEmbed(new Discord.RichEmbed()
                          .addField("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor.", "Eğer oy verdiyseniz bi kaç dakika bekleyin")
                          .addField("Oy vermek için:", "https://discordbots.org/bot/497761216169639936/vote")
                          .setColor('RANDOM'))
 } else {
   message.channel.send(`:timer:  | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(3000));
        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/wasted/${message.guild.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/${message.guild.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
     }})
    })}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'wasted',
  description: 'wasted',
  usage: 'wasted'
};