const Discord = require('discord.js');
module.exports = member => {
  const channel = member.guild.channels.find(x => x.name === 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('#8B0000')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setTitle('❎ | Sunucudan bir üye ayrıldı.')
  .setTimestamp()
  channel.send(embed); 
};