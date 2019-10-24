const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
    var soru = args.join(' ');
    
    if(!soru) return message.channel.sendEmbed(new Discord.RichEmbed()
                                               .addField('Bir işlem belirtin.','Doğru Kullanım: g!hesapla <işlem>')
                                               .addField('**Toplama:** + \n**Çıkarma:** -','**Çarpma:** * \n**Bölme:** /')
                                               .setColor("RANDOM"))
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        .setColor('RANDOM')

        message.channel.send(embed)
    }

})}  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};