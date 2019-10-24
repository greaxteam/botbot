const Discord = require("discord.js");
const client = new Discord.Client();
var Jimp = require('jimp');
const ayarlar = require('../ayarlar.json')
const DBL = require("dblapi.js");
const dbl = new DBL(ayarlar.dbltoken , client);

exports.run = (client, message, args) => { 
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    
        var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    
    dbl.hasVoted(message.author.id).then(voted => {
 if (!voted) {
message.channel.sendEmbed(new Discord.RichEmbed()
                          .addField("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor.", "Eğer oy verdiyseniz bi kaç dakika bekleyin")
                          .addField("Oy vermek için:", "https://discordbots.org/bot/497761216169639936/vote")
                          .setColor('RANDOM'))
 } else {
message.channel.send(`⏲ | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.glitch.com/bddb906b-1c32-4abe-b698-c698c3664c98%2Fmaxresdefault-1.png?1545421851306", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/hacked/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/hacked/${client.user.id}-${user.id}.png`));
        }, 1000);
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
  name: 'hacked',
  description: 'Etiketlediniz Kişinin Profiline Azerbaycan Effecti Eklenir.',
  usage: 'g!aze @User'
};
