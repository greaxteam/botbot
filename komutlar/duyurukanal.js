const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, params, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '578702364362539048') return message.channel.send(':x: | Kayıt kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send(':x: | **Duyuru kanalı ayarlamak için bir kanal etiketlemeniz gerekli.** `g?duyurukanal #kanal`')
     db.set(`duyurukanal_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`:white_check_mark: | Duyuru kanalı, <#${i}> olarak ayarlandı.`)    
    })         
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['duyurukanal'],
    permLevel: 0
}

exports.help = {
    name: 'duyurukanal',
    description: 'Mod log kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>'
}