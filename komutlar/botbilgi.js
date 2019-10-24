const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
//require('moment-duration-format');
const ayarlar = require('../ayarlar.json')
const dateformat = require('dateformat')
exports.run = (client, message) => { 
  
   const millisJoined = client.uptime;
   const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 
  
  let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
  
        const embed = new Discord.RichEmbed()
            .addField("Méŕt", client.users.get(ayarlar.sahip).tag, true)
            .addField("❤ | Toplam;", `${client.guilds.size} Sunucuya\n${client.users.size} Kullanıcıya\n${client.channels.size} Kanala Hizmet Veriyorum`,true)        
            .addField("⏰ | Çalışma Süresi",userJoined, true)
            .addField("📚 | Kitaplık", "discord.js",true)
            .addField("💪 | Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
            .addField("🛠 | Versiyonlar", stripIndents`
            » Discord.js: v${version}
            » Node.js: ${process.version}
            `)
            .addField("🛡 | CPU Kullanımı", `%${percent.toFixed(2)}`)
            .setColor("RANDOM")
        
            .setFooter(`${client.user.username} | İstatistik`, client.user.avatarURL)
        return message.channel.sendEmbed(embed)
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi','i',"bb"],
  permLevel: 0,
  kategori: 'Bot'
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};