const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
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
  .addField(':warning: Uyarı :warning:', 'roller adlı komutu özel mesajlarda kullanamazsın.')}
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('Varsayılan rol:', message.guild.defaultRole, true)
   .addField('Roller:', message.guild.roles.map(role => role.name).join(', '), true)
   .setFooter('Rol Listesi', message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✅')
 })}

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roller',
   description: 'Sunucu bilgisini söyler.',
   usage: 'roller'
 };