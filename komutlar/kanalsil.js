const Discord = require('discord.js');

exports.run = (client, message, args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    let kanal = message.mentions.channels.first()
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(':x: | Bunun için gerekli iznin yok');
    if (!args[0]) return message.reply(':x: | Lütfen Sileceğim kanalı etiketle.');
  guild.channels.find(x => x.name === kanal).delete();
  message.channel.send(":white_check_mark: | Kanal Silindi");
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kanalsil',
  description: 'Bir yazı kanalı açmanızı sağlar',
  usage: 'yazı-kanalı-aç [açmak istediğiniz kanalın adı]'
};
