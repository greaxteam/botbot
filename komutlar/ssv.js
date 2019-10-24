const Discord = require('discord.js');
const client = new Discord.Client();
const hastebin = require('hastebin-gen');

exports.run = async (client, message) => {
   hastebin(`Botun Bulunduğu Sunucu Sayısı [ ${client.guilds.size} ] \n İsim: ${client.guilds.map(m => m.name + "\nID:" + m.id + "\nÜye Sayisi: " + m.members.size).join(` \n\n İsim `)}\n`).then(r => {
        message.channel.send(`Sunucu listesi hastebine yüklendi! \nLink: ${r}`);
  }).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sv'],
  permLevel: 4
};

exports.help = {
  name: 'sunucular',
  category: "bot",
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: 'r?sunucular'
};