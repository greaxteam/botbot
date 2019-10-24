const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
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
  .addField(':warning: Uyarı :warning:', 'uyar adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  
  
  let guild = message.guild

  let modlog = db.fetch(`membermodChannel_${guild.id}`)
  if(!modlog) return message.channel.send(':x: | Modlog Kanalı Yok! Ayarlamak İçin g!modlog #kanal')
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!user) return message.reply('Kimi uyaracağını yazmalısın.').catch(console.error);
  else if (!reason) return message.reply('Uyarı sebebini yazmalısın.');
  
  message.guild.channels.get(modlog).send(new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Eylem:', 'Uyarma')
  .addField('Kullanıcı:', `${user.tag}`)
  .addField('Yetkili:', `${message.author.tag}`)
  .addField('Sebep', reason))
  
})}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};
