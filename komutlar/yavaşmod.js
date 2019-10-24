const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
   if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '495825025207894016') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Komutu Kullanmak İçin Sunucuyu Yönet Yetkisine Sahip Olman Gerekir.!').setColor("RED"));
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Doğru kullanım: \`g!yavaş-mod [0/20]\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }

      let number = ['0',"1","2","3","4","5","6","7","8","9","10",'11','12','13','14','15','16','17','18','19','20']
    
    if (!number.some(word => message.content.includes(word))) {
           {
                  return message.channel.send('Süre limiti sadece **Sayı** olabilir');
           }}   
  
if (limit > 20) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Süre limiti maksimum **20** saniye olabilir.").setColor('RANDOM'));
}
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})})}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod','yavaş-mod'],
  permLevel: 0
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};