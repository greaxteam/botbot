const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args[0]
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (!mesaj) return message.reply('Bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('Discord Kullanıcı Adı Değil, bir Minecraft oyuncu adı belirtmelisin ')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcbody'],
 permLevel: 0
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcskin <oyuncu>'
};