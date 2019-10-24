const Discord = require('discord.js');
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args, member) => {

  if (!args[0]) return message.channel.send("**Hata:** Lütfen **Bu Kanalda Yazılmış** bir mesajın id'sini girin!")

  message.channel.fetchMessage(args[0]).then(dest => {
   hastebin(dest.content, "text").then(r => {
     var hastLink = r
let embed = new Discord.RichEmbed()
.setAuthor(`Bir Mesaj Alıntılandı!`)
.setDescription(`**Mesaj Sahibi:** ${dest.author.tag}\n**Mesaj İçeriği:** ${dest.content}\n**Mesaj Linki:** [Tıkla](${hastLink})`)
.setColor("RANDOM")
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)

message.channel.send(embed)
}
)}).catch(err => {
    
 if (err.name === 'DiscordAPIError' && err.message === 'Unknown Message') {
       message.channel.send(":x: | **Hata:** Mesaj Bulunamadı. Lütfen Mesaj ID'sini kontrol edin"); 
   }
})}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['alinti','alıntıla','alintila'],
  permLevel: 0,
  kategori: 'kullanıcı'
};

exports.help = {
  name: 'alıntı',
  description: 'Sunucunun ayarlarını gösterir.',
  usage: 'g!ayarlar'
};