const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Html");
  message.member.addRole(role);
  message.channel.send('✅   | Başarıyla │Html Rolünü Aldınız..');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['html', 'html'],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'JavaScript Kanallarını Görürsünüz.',
  usage: 'js'
};