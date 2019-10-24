const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
	let guild = message.guild
	let duyur = db.fetch(`duyurukanal_${guild.id}`).then(i => { 
  let duyurular = client.channels.get(i)
	if (!duyurular) return message.reply('Duyuru kanalı ayarlanmamış!.\n\nAyarlamak İçin g?duyuru mesajınız');
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('Bir şey yazmadınız.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:loudspeaker: **Tüm Herkese Duyurulur ;**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  permLevel: 0,
  kategori:"Sunucu"
};

exports.help = {
  name: 'duyuru',
  aciklama: 'Sunucuda Duyuru yapmanızı sağlar.',
  kullanim: 'duyuruyap [yazı]'
};