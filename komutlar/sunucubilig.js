const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let moment = require('moment')
exports.run = (client, message, params) => {
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
    .addField(':warning: Uyarı :warning:', 'sunucubilgi adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      
  
  const sunucubilgi = new Discord.RichEmbed()
    .setColor("#15f153")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
   // .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Üyeler ['+message.guild.memberCount+']', `Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status === "online").size} \nRahatsız Etmeyin: ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} \nBoşta: ${message.guild.members.filter(m => m.user.presence.status === "idle").size} \nÇevrımdışı/Görünmez: ${message.guild.members.filter(m => m.user.presence.status === "offline").size} \n:tools: Bot: ${message.guild.members.filter(m => m.user.bot).size}`, true)
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Roller:', '**g!roller** Yazarak Bakabilirsin',true)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Oluşturulma tarihi:', moment(message.guild.createdAt).format('DD/MM/YYYY'))
    .setThumbnail(message.guild.iconURL);
    return message.channel.sendEmbed(sunucubilgi);
    }
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};