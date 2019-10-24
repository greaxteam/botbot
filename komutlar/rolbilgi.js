const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client,message,args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'rolbilgi adlı komutu özel mesajlarda kullanamazsın.')}
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription("❌ Lütfen Bir Rol İsmi Yazın `Örnek: g!rolinfo Üye`");
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ Rol İsmi', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Role Sahip Kullanıcılar', role.members.size, true)
  .addField('💙 Renk', role.hexColor, true)
  .addField('📣 Etiketleme?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('📅 Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  .setFooter("");
  message.channel.send(roleinfoEmbed)
})}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolbilgi <rolismi>'
};