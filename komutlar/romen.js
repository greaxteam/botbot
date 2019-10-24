const Discord = require('discord.js')
const numerals = {
                                        "M": 1000,
                                        "CM": 900,
                                        "D": 500,
                                        "CD": 400,
                                        "C": 100,
                                        "XC": 90,
                                        "L": 50,
                                        "XL": 40,
                                        "X": 10,
                                        "IX": 9,
                                        "V": 5,
                                        "IV": 4,
                                        "I": 1
                                }
exports.run = (client, message, args) => {
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
  .addField(':warning: Uyarı :warning:', 'romen adlı komutu özel mesajlarda kullanamazsın.')}
        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Lütfen geçerli bir sayı yazın!')
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen bir sayı girin!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
       
        if(args[0] > 1000) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen 1000 veya daha düşük bir sayı girin!!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        const sayi = args[0]
 
        if(args[0] === 0) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Karşılıksız')
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        let result = '';
        for (const [numeral, value] of Object.entries(numerals)) {
                while (args[0] >= value) {
                        result += numeral;
                        args[0] -= value;
                }
        }
        const embed = new Discord.RichEmbed()
                .addField('Yazılan Sayı', sayi)
                .addField('Romen Karşılığı', result)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
})}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0
}
 
exports.help = {
        name: 'romen',
        description: 'Yazdığınız sayının romen karşılığını yazar.',
        usage: 'romen [sayı]'
}