const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
 
exports.run = async (client, message, args) => {
 
  this.fighting = new Set();
 
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply("Kiminle Savaşacaksın?")
 
  
   if (opponent.bot && opponent.id !== client.user.id) return message.reply('Botlar Savaşamazlar Sadece Yardım Ederler');
  if (opponent.id === message.authodiğr.id) return message.reply('Kendin ile düello atamazsın dostum.');
                if (this.fighting.has(message.channel.id)) return message.reply('Bu Kanal Zaten Savaşıyor :D');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot && opponent.id !== client.user.id) {
                await message.channel.send(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (evet veya hayır olarak cevap veriniz.)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`Düello kabul edilmedi...`);
                                }
                        }
                        let userHP = 750;
                        let oppoHP = 750;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const can = can => {
                                if (userTurn) oppoHP += can;
                                else userHP += can;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, ne yapmak istersin? Yapabileceğin Havalı Haraketler saldır,savun,ultra,kaç
                                                **${message.author.tag}**: %${userHP} :heartpulse:
                                                **${opponent.tag}**: %${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['saldır', 'savun', 'ultra', 'kaç','hile'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`Üzgünüm, süren doldu!`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['saldır', 'savun', 'ultra'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'saldır') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user} **${damage}** hasar vurdu!`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'savun') {
                                        await message.channel.send(`${user} Kendisini GamerKalkan ile savundu!!`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'ultra') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 100);
                                                await message.channel.send(`${user} ultra gücü ile ${damage} hasar vurdu`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user} ultra gücünü toparlayamadı`);
                                        }
                                        reset();
                                } else if (choice === 'kaç') {
                                        await message.channel.send(`${user} duellodan ayrıldı!`);
                                        forfeit();
                                        break;
                                } else  if (choice === 'vur') {
                                  if(user.id !== '495825025207894016') return;
                                        const damage = 750
                                        await message.channel.send(`Hemçkıd`);
                                        dealDamage(damage);
                                } else if (choice === 'can') {
                                  if(user.id !== '495825025207894016') return;
                                        const cann = 1000000
                                        await message.channel.send(`Canlandın!`);
                                        can(cann);
                                }else {
                                        await message.reply('Ne yapmak istediğini anlamadım.');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1'],
  permLevel: 0
};
 
exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};