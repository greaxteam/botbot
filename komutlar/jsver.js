const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "JavaScript");
  message.member.addRole(role);
  message.channel.send('✅   | Başarıyla │js Rolünü Aldınız..');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['JavaScript', 'jsver'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript Kanallarını Görürsünüz.',
  usage: 'js'
};