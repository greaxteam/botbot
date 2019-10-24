const Discord = require('discord.js');
module.exports = member => {
  const channel = member.guild.channels.find(x => x.name === 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('#006400')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setTitle('✅ | Sunucuya bir üye katıldı!')
  .setTimestamp()
  channel.send(embed);
};