const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
      const db = require('quick.db')  
      db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    const EtiketlenenKullanici = message.mentions.users.first();
    if(EtiketlenenKullanici) {
        const EtiketlenenAvatarEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('| Avatar Sistemi')
        .setImage(EtiketlenenKullanici.avatarURL)
        .setFooter(message.author.username + ' tarafından istendi.')
        message.channel.send(EtiketlenenAvatarEmbed)
        }//Bu komudu bitiriyoruz.
if(!EtiketlenenKullanici) { //Eğer kullanıcı etiketlenmemiş ise,
        const AvatarEmbed = new Discord.RichEmbed() //Fotoğrafı gönderdiğimizde daha havalı gözükmesi için bir EMBED oluşturuyoruz.
        .setColor('RANDOM') //Rengi rastgele göndermesi olarak ayarlıyoruz.
        .setAuthor('| Avatar Sistemi') //En üstte yazacak yazımız
        .setImage(message.author.avatarURL) //Komudu kullananın avatarını gösteriyoruz.
        .setFooter(message.author.username + ' tarafından istendi.') //Komudu kullanan kişiyi söylüyoruz.
        message.channel.send(AvatarEmbed)
        }
  }
                                                  )}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: 'avatar'
};

exports.help = {
  name: 'avatar',
  description: 'Avatar sistemi',
  usage: 'avatar'
};