const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} - Komut Sayısı`)
    .setDescription('__**' + client.commands.size + '**__ adet komut barındırmaktayım.')
    .setColor("#ff0000")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Lütfen daha sonra tekrar deneyiniz.!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["kodlar","komutlar"],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlarım'
};