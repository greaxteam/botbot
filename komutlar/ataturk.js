const Discord = require('discord.js');
exports.run = function(client, message, args) {
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
  .addField(':warning: Uyarı :warning:', 'atatürk adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  var request = require('request');
request('https://www.google.com/search?q=atat%C3%BCrk+resmi&tbm=isch&chips=q:atat%C3%BCrk+resmi,online_chips:sinan+meydan&bih=560&biw=360&client=ms-android-samsung&prmd=ivn&hl=tr&ved=2ahUKEwjY-Y_-otbjAhUZ8RoKHd3fCy0Q4lZ6BAgBEBc', function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var genel = JSON.parse(body);
    }
  const embed = new Discord.RichEmbed()
  .setAuthor("Atam ❤️")
  .setColor(0x00AE86)
  .setImage(genel.ataturk)
  .setFooter("Gençlere Armağan")
  message.channel.send({embed});
  
});
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: 'Atatürk'
};

exports.help = {
  name: 'atatürk',
  description: 'Rastgele Atatürk Fotoğrafları Atar', 
  usage: 'atatürk'
};