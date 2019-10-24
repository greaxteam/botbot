const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
  if (!args[0]) return message.channel.send('aç yada kapat yazmalısın! Örnek: g?reklam-engel aç')
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== "495825025207894016") return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik').then(i => {
      message.channel.send('✅ Reklam Engel başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanlar`ın reklama engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send('✅ Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    })
  }

})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: '[Admin Komutu]',
  usage: 'reklam-koruması'
};