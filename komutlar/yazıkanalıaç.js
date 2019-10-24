exports.run = (client, message, args) => {
    const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(':x: | Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply(':x: | Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send(":white_check_mark: | Yazı Kanalı Oluşturuldu");
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıkanalıaç'],
  permLevel: 3
};

exports.help = {
  name: 'yazı-kanalı-aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanalı-aç [açmak istediğiniz kanalın adı]'
};
