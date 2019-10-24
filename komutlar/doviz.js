const Discord = require('discord.js');
exports.run = function(client, message, args) {  
  var request = require('request');
   request('https://simsekapi.glitch.me/Ms3PA4Gh/dolar', function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var dolar = JSON.parse(body);
    }
request('https://simsekapi.glitch.me/Ms3PA4Gh/euro', function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var euro = JSON.parse(body);
    }
  const embed = new Discord.RichEmbed()
  .setAuthor("Döviz")
  .setColor('RANDOM')
  .setDescription(`:dollar: **Uzun İsmi:** ${dolar.uzunisim}\n:dollar: **Kısa İsmi:** ${dolar.kisaltma}\n:dollar: **Dolar Alış:** ${dolar.sonalis} \n:dollar: **Dolar Satış:** ${dolar.sonsatis}\n:dollar: **Dolar Son Güncelleme:** ${dolar.guncelleme}\n\n:euro: **Uzun İsmi:** ${euro.uzunisim}\n:euro: **Kısa İsmi:** ${euro.kisaltma}\n:euro: **Euro Alış:** ${euro.sonalis} \n:euro: **Euro Satış:** ${euro.sonsatis}\n:euro: **Euro Son Güncelleme:** ${dolar.guncelleme}`)
  .setFooter(`GreaxBOT | Döviz`)
  message.channel.send({embed});
  
})});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doviz'],
  permLevel: 0,
  kategori: 'diğer'
};

exports.help = {
  name: 'döviz',
  description: 'Rastgele Atatürk Fotoğrafları Atar', 
  usage: 'atatürk'
};