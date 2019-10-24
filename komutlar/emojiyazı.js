const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
	  'ü': ':regional_indicator_u:',
  	'ı': ':regional_indicator_i:',
  	'ğ': ':regional_indicator_g:',
    'ö': ':regional_indicator_o:',
   	'ş': ':regional_indicator_s:',
   	'ç': ':regional_indicator_c:',
  	'Ü': ':regional_indicator_u:',
  	'İ': ':regional_indicator_i:',
  	'Ğ': ':regional_indicator_g:',
    'Ö': ':regional_indicator_o:',
   	'Ş': ':regional_indicator_s:',
   	'Ç': ':regional_indicator_c:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = (bot, msg, args) => {
      const db = require('quick.db')  
  db.fetch(`karaliste_${msg.author.id}`).then(i => {
    if (i == 'aktif') {
    return msg.reply('Botun Karalistesindesin')
    }
    if (args.length < 1) {
        throw '**Bir mesaj belirt**';
    }

    msg.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'emojiyazı',
  description: 'Mesajınızı emojiye çevirir.',
  usage: 'emojiyazı <mesaj>'
};