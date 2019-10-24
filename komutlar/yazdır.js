const Discord = require('discord.js');

exports.run = function (client, message) {
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
  .addField(':warning: Uyarı :warning:', 'yazdır adlı komutu özel mesajlarda kullanamazsın.')}
  
  let messageArray = message.content.split("-");
  let args = messageArray.slice(1);
  
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen birisini etiketlermisin...')
    let yazi = args[0]
    if (!yazi) return message.reply('Lütfen mesajını yazınız.\ng!yazdır @Kişi - Mesaj')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi, { disableEveryone: true })
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
}
                                                  )}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
kategori: "eğlence"
};

exports.help = {
    name: 'yazdır',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};