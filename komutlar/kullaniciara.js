const Discord = require('discord.js');

exports.run = (client, message, args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
      let users = client.users;
      let searchTerm = args[0];
      if(!searchTerm) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kullanıcı ara;').setDescription(message.author.tag + ', kullanım: g!avatar <mesaj>.').setFooter('Greax', client.user.avatarURL).setTimestamp());
      let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
      message.channel.send(`Bulunan Arama sonuçları;\n:arrow_right:` + matches.map(u => u.tag).join(',\n:arrow_right: '));
        })}

        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: [],
          permLevel: 0
        };

        exports.help = {
          name: "kullanıcıara",
          description: "yazdığınız kullanıcıyı arar",
          usage: "kullanıcıara"
        };