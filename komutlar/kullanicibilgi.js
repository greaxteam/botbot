const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');

exports.run = (client, message) => {
 
var user = '';
        let member = message.mentions.users.first();
        let author = message.author; 
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
       if (roles.length < 1) roles = ['Bu Kullanıcının Rolü Yok!'];
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye oluyor şu işe bak birde dakika yetmezmiş diye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye oluyor şu işe bak birde dakika yetmezmiş diye]")
    if(user.presence.status === "dnd"){
      var durum = 'Rahatsız Etmeyin'
    }
    else if(user.presence.status === "online"){
      var durum = 'Çevrimiçi'
    }
    else if(user.presence.status === "idle"){
      var durum = "Boşta"
    }
      else {
      var durum = "Çevrimdışı/Görünmez"
    }
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(user.tag, user.avatarURL || user.defaultAvatarURL)
      .setThumbnail(user.avatarURL || user.defaultAvatarURL)
      .setTitle('Kullanıcı Bilgileri;')
      .addField("Şu anda yaptığı;", user.presence.game ? user.presence.game.name : 'Şu anda bir şey yapmıyor.', true) 
      .addField('Durum:', `${durum}`)
      .addField('Bot mu?:', user.bot ? '\n Evet' : 'Hayır', true)
      .addField('Hesap Oluşturma tarihi:', moment(user.createdAt).format('DD/MM/YYYY'), true)
      .addField('Katılım tarihi (Sunucu)', `${userJoined}`, true)
      .addField('Katılım Tarihi (Discord)', `${daysCreated}`, true)
      .setFooter(`${message.author.username} tarafından istendi`, client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
    
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi','kbilgi', 'kb'],  
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'İstediğiniz kişinin bilgisini gösterir.',
  usage: 'kullanıcıbilgi'
};