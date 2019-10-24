const express = require('express')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const Jimp = require('jimp');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const snekfetch = require('snekfetch');
const db = require('quick.db');
const DBL = require("dblapi.js");
const dbl = new DBL(ayarlar.dbltoken , { webhookPort: 8080, webhookAuth: 'webhuk'});
const dblsend = new DBL(ayarlar.dbltoken ,client);

// Optional events
dblsend.on('posted', () => {
  log('Sunucular Gönderildi!');
})

dblsend.on('error', e => {
 log(`Hata! ${e}`);
})

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////
var prefix = ayarlar.prefix

//////////////////////////////////////////////////////////////////////////////////////////////

const log = message => {
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
};

/////////////otorol///////

client.on('guildMemberAdd', async member => {
  db.fetch(`otorol_${member.guild.id}`).then(rol => {
    
  var role = member.guild.roles.get(rol)
  
  db.fetch(`otorolkanal_${member.guild.id}`).then (knl => {
  let kanal = member.guild.channels.get(knl)
  
  if(!rol || !kanal) return;
  
  member.addRole(role)
  kanal.send(`**${member.user.tag}** adlı kullanıcı sunucuya katıldı! **${role.name}** adlı rol başarıyla verildi!`)
})}).catch(err => {
    
 if (err.name === 'DiscordAPIError' && err.message === 'Missing Permissions') {
       member.channel.send(":x: | **Hata:** Otorol Hatası! Botta Yeterli Yetki Yok!"); 
       console.log(`${member.guild.name} sunucusunda otorol hatası`)
   }
})
  })

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {

  db.fetch(`afk_${message.author.id}`).then(i => {
  
  if(i === "aktif") {
    db.delete(`afk_${message.author.id}`)
    db.delete(`afksebep_${message.author.id}`)
    message.channel.send(":white_check_mark: | Artık Afk Değilsiniz")
  }
    
})})
 
//client.on("message", message => {
  //let user = message.mentions.users.first()
   //if(message.content == `<@${user.id}>`) {
  //db.fetch(`afk_${user.id}`).then(afk => {
  //db.fetch(`afksebep_${user.id}`).then(afksbp => {
  
  //if(!afk) return;
  
  //message.channel.send(`**Dur!** | ${user.tag} Şu an ${afksbp} sebebiyle afk!`)
  
  
//})})})/*

//////////////////////////////////////////////////////////////////////////////////////////////

client.on ('message', message => {
  if (message.author.bot) return;
 db.fetch(`para_${message.author.id}`).then(i => { 
          if(!i) {
            db.set(`para_${message.author.id}`, 100)
    }})
});


//////////////////////////////////////////////////////////////////////////////////////////////
  
client.on ('message',message => {
  if (message.channel.id === '' || message.channel.id === '')
    message.delete ()
});

//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

    

//Code By Mert, Çalmayınız Gördüğüm An Sikerim Belanızı.


////////////////////////////////////////////////////////////
client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'güvenlik.png');
    kanal.send(attachment)
});





//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async msg => {
  let komut = await db.fetch(`ozelkomut_${msg.guild.id}`);
  let komutYazi;
  if (komut == null) komutYazi = 'Burası böyle kalsın yoksa hata çıkabilir! xd'
  else komutYazi = ''+ komut +''
  if (msg.content.toLowerCase() === `${komutYazi}`) {
      let mesaj = await db.fetch(`ozelmesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Uçuş modu aktiff kanatlarını aç!'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

client.on ('message', message => {
if (message.content === "k-emojiler") {
  const server = message.guild.name
  const emojiList = message.guild.emojis.map(e=>e.toString()).join("|");
  message.channel.send(new Discord.RichEmbed()
                           .setAuthor('Sunucuya ait emojiler:')
                           .setDescription(emojiList)
                           .setColor("RANDOM")
                           .setFooer('Disconary Bot 2019 '));
  message.channel.send(emojiList)
}
})

client.on ('message', (message,args) => {
if (message.content === "g!emojiara") {
  let emoji = client.emojis.find(x => x.name = args[0])
  const emojiList = emoji.map(e=>e.toString()).join(" **|** ");
  message.channel.sendEmbed(new Discord.RichEmbed()
                           .setAuthor('Bulduğum Emojiler:')
                           .setDescription(emojiList)
                           .setColor("RANDOM"));
}
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (message, reaction, user) => {
if(message.channel.id !== '617341616444801054') return;
if (reaction.emoji.name == "shield") {
client.guilds.get("61731803974205440").members.get(user.id).addRole("530748189570105384")
client.guilds.get("617318039742054401>").members.get(user.id).removeRole("530837693232316457")

}
});


/////////////////////ping//////////

client.on('message', message => {
if (message.content === "g!ping") {
  let Ping = client.ping
 message.channel.sendEmbed(new Discord.RichEmbed()
                           .addField('Bot Pingi:',client.ping))
}
});

/////////////////////////////////////////////////////////////////////////////////////

/////////////reklam engel///////////

client.on("message", msg => {
  if(msg.author.bot) return;
  db.fetch(`reklam_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
        const reklam = [".com",".cf",".net",".xyz",".tk",".pw",".io",".me",".gg","www.","https","http",".gl",".org",".com",".tr",".biz","net","rf.gd",".az",".party",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Reklam yapmamalısın ⚠').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
    });
 
/////////////////küfür engel////////


client.on("message", msg => {
  
  
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
        const kufur = ["oç","amk","ananı sikiyim","ananıskm","piç","amk","amsk","sikim","sikiyim","orospu çocuğu","piç kurusu","kahpe","orospu","mal","sik","yarrak","am","amcık","amık","yarram","sikimi ye","mk","mq","aq","ak","amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Küfür etmemelisin! ⚠').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
    });
 

//////////////////////////////////////////////////////////////////////////////////////////////

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
  let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
    log(`Yüklenen komut: sayısı ${files.length}.`);
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
    ////////////////////////////////////
client.on('guildMemberAdd', async member => {
 
 let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
  //	let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
   //  if (!kanal) return
   
  const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'Hosgeldin.png');

	gözelkanal.send(`Sunucuya hoşgeldin, ${member}!`, attachment);
});


client.on('guildMemberRemove', async member => {
  
	//let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
    //if (!kanal) return
    const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

 let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 30, 30, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'GuleGule.png');

	gözelkanal.send(`Güle güle, **${member.user.tag}**`, attachment);
});


const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    let fontSize = 54;

    do {
  
    ctx.font = `${fontSize -= 2}px Helvetica`;
    } while (ctx.measureText(text).width > canvas.width - 111);

    return ctx.font;
};
    /////////////////////////////////////////////////////////////////////////////////////      
//////////////////////////////////////////////////////////////////////////////////////////////
client.elevation = message => {
  if(!message.guild) {
    return; }
  let permlvl = 0; 
  if (message.member.hasPermission("MANAGE_NICKNAMES")) permlvl = 1
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4
  if (message.author.id === ayarlar.viper ) permlvl = 4;
  return permlvl;
};

//////////////////////////////////////////////////////////////////////////////////////////////

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

///////istatistik////////

//////////istatistik yenile/////////

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'g!iy') {
    let k1 = client.channels.get("525523512711184404");
    let k2 = client.channels.get("525523540452048906");
    let k3 = client.channels.get("525523643154038805");
k1.setName(`${client.channels.size} Kanal`)
k2.setName(`${client.users.size} Kullanıcı`) 
k3.setName(`${client.guilds.size} Sunucu`)
    let mkanal = client.channels.get("617341616444801054");
    mkanal.send('ISTATISTIK YENILENDI')
}});


//////////modlog//////////
client.on('messageUpdate', async (oldMessage, newMessage) => {
 if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
  let embedds4 = new Discord.RichEmbed()
        .setColor("#0080ff")
        .setAuthor(`Mesaj Güncellendi!`)
        .setThumbnail(oldMessage.author.avatarURL)
        .addField("Gönderen", oldMessage.author.tag, true)
        .addField("Önceki Mesaj", `\`\`\`${oldMessage.content}\`\`\``, true)
        .addField("Şimdiki Mesaj", `\`\`\`${newMessage.content}\`\`\``, true)
        .addField("Kanal", newMessage.channel.name, true)
        .setFooter(`Greax Bot Kayıtlar | ID: ${newMessage.id}`)
    let membermodChannel = await db.fetch(`membermodChannel_${oldMessage.guild.id}`)
    if (!oldMessage.guild.channels.get(membermodChannel)) return;
    else oldMessage.guild.channels.get(membermodChannel).send(embedds4)
})
       
        client.on('guildBanRemove', async (guild, member) => {
                        var embed = new Discord.RichEmbed()
                        .setTitle('Üyenin yasaklaması kaldırıldı.')
                        .setAuthor(member.user.tag, member.user.avatarURL)
                        .setColor("BLUE")
                        .setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
                        .setThumbnail(member.user.avatarURL)
                        .setFooter(`Greax Bot Kayıtlar | ID: ${member.user.id}`)
                        .setTimestamp();
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return;
    else guild.channels.get(membermodChannel).send(embed)
        })     
 
        client.on('channelCreate', async channel => {
 
               
                        if (channel.type === "text") {
                                var embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
                                .setFooter(`Greax Bot Kayıtlar | ID: ${channel.id}`)
                                 let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return;
    else channel.guild.channels.get(membermodChannel).send(embed)                      
                        };
                        if (channel.type === "voice") {
                                var embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
                                .setFooter(`Greax Bot Kayıtlar | ID: ${channel.id}`)
         let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return;
    else channel.guild.channels.get(membermodChannel).send(embed)                       }
                        })
               
        client.on('channelDelete', async channel => {
 if (channel.type === "text") {
                                let embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
                                .setFooter(`Greax Bot Kayıtlar | ID: ${channel.id}`)
         let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return;
    else channel.guild.channels.get(membermodChannel).send(embed)
                        };
                        if (channel.type === "voice") {
                                let embed = new Discord.RichEmbed()
                        .setColor("BLUE")
                                .setAuthor(channel.guild.name, channel.guild.iconURL)
                                .setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
                                .setFooter(`Greax Bot Kayıtlar | ID: ${channel.id}`)
 let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return;
    else channel.guild.channels.get(membermodChannel).send(embed)                       }
               
        })
/////////destek talebi////////
client.on('message', msg => {
  if (msg.author.bot) return;
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== 'Destek Kanalı') { 
    if (!msg.guild.roles.exists("name", "Destek Ekibi")) return msg.reply(`Bu sunucuda **Destek Ekibi** isminde bir rol bulamıyorum. \nDestek Sisteminin çalışabilmesi için **Destek Ekibi** isminde bir rol oluşturulmalı!`).then(m2 => {
            m2.delete(5000)});
      msg.guild.createChannel(`destek-${msg.author.tag}`, "text").then(c => {
      let role = msg.guild.roles.find("name", "Destek Ekibi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Yetkililer burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${ayarlar.prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed })
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    }
  });
  

client.on('message', message => {
if (message.content.toLowerCase().startsWith(`g?kapat`)) {
  if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Destek Talebi Kapatma İşlemi`)
  .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`)
  .setTimestamp()
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete();
        }, 3000);
      });
  });
  }
})
/////////////çeviri////////
client.on("message", (message) => {
    const arg = message.content.slice(prefix.length).trim().split(/ +/g);
    const komut = arg.shift().toLowerCase();
    if(komut === "çevir") {
            var cevir = require('node-google-translate-skidz');
            let hdil = arg[0];
            if(!hdil) return message.channel.send("**Hata,** şöyle yazmalısın: `g!çevir [tr/en vs.] [kelime]`");
            if(hdil.length > 2) return message.channel.send("**Hata,** şöyle yazmalısın: `g!çevir [tr/en vs.] [kelime]`");
            var cevrt = arg.slice(1).join(" ");
            if(!cevrt){
                message.channel.send("Çevirmek istediğin dili yazmalıydın!");
            }
            cevir({
                text: cevrt,
                target: hdil
            }, function(result) {
                var dl = result.translation
                const embed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .addField("Çevrilmek istenen metin:", cevrt)
                .addField("Çevrilen Metin:", dl)
                .setFooter("GreaxBOT 2019 | Çeviri")
                 message.channel.send({embed})
                    .catch(error => message.channel.send("Bir hata oluştu!"))
            });
            }
});
//////////////sayaç/////////
client.on("message", async message => {
    let sayac = db.fetch(`sayac_${message.guild.id}`)
    let sayack = db.fetch(`sayackanal_${message.guild.id}`)
    if (!sayack) return;
    let sayackanal = message.guild.channels.find('name', sayack)
        if(sayac <= message.guild.members.size) {
    sayackanal.send(`:tada: Tebrikler \`${message.guild.name}!\` ${sayac} kullanıcıya başarıyla ulaştık! Sayaç başarıyla sıfırlandı.`)
  //message.guild.owner.send(`Tebrikler! \`${member.guild.name}\` adlı sunucun ${sayac} başarıyla kullanıcıya ulaştı! Sayaç başarıyla sıfırlandı.`)  
            db.delete(`sayac_${message.guild.id}`)
            db.delete(`sayackanal_${message.guild.id}`)
            }
});

client.on("guildMemberAdd", async member => {
       let sayac = db.fetch(`sayac_${member.guild.id}`)
        let sayack = db.fetch(`sayackanal_${member.guild.id}`)
        if (!sayack) return;
        let sayackanal = member.guild.channels.find('name', sayack)

 if (!sayackanal) {
    return;
  }

  try {
    sayackanal.send(`:loudspeaker: :inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı. \`${sayac}\` kişi olmamıza \`${sayac - member.guild.memberCount}\` kişi kaldı.`);
  } catch (e) { 
    return console.log(e)
  }

});

client.on("guildMemberRemove", async member => {
        let sayac = db.fetch(`sayac_${member.guild.id}`)
        let sayack = db.fetch(`sayackanal_${member.guild.id}`)
        if (!sayack) return;
        let sayackanal = member.guild.channels.find('name', sayack)

  if (!sayackanal) {
    return;
  }

  try {
    sayackanal.send(`:loudspeaker: :outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı. \`${sayac}\` kişi olmamıza \`${sayac - member.guild.memberCount}\` kişi kaldı.`);
  } catch (e) { 
    return console.log(e)
  }

});

 

client.login(ayarlar.token);


///////müzik///////

const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyAXpo6_ipn_i_nYO1SXVOWRrB4DgIf7-9g');
const queue = new Map();

client.on('ready', async () => {
  console.log(`${client.user.tag} Müzik Girişi Yapıldı!`);
});

client.on("message", async message => {
if (message.author.bot) return;

 var prefix = ayarlar.prefix;
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
    case "oynat":
    if(!searchString) return message.channel.send(":x: | Bir Şarkı Girmelisin")
    var voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`:x: | Lütfen herhangi bir sesli kanala katılınız.`);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send(`:x: | Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`);
    if (!permissions.has('SPEAK')) return message.channel.send(`:x: | Sunucuda Konuşma Yetkim Yok`)
    
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      return message.channel.send(`▶ **${playlist.title}** İsimli şarkı oynatma listesine Eklendi.`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var index = 0;
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**Şarkı Seç**`)
          .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')} \n\n**Lütfen hangi şarkıyı seçmek istiyorsan başındaki sayı numarasını yaz.**`)
          .setFooter(`Şarkı seçimi "20" saniye içinde iptal edilecektir.`)
          message.channel.send({embed})
          try { 
            var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
             const filter = res => {
                        const value = res.content.toLowerCase();
                        return res.author.id === message.author.id && !number.some(word => message.content.includes(word))
                };
            var response = await message.channel.awaitMessages(filter,{
              maxMatches: 1,
              time: 10000,
              errors: ['time']
            });
          } catch (err) {
            console.error(err);
            return message.channel.send(`:x: | Açmam Gereken Şarkının Numarasını Girmediniz.`);
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return message.channel.send(`Youtube üzerinde bu isimde bir şarkı bulunamadı`);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
break;
      case "geç":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    serverQueue.connection.dispatcher.end('g');
    message.channel.send(`:white_check_mark: | Şarkı başarıyla geçildi.`)
    return undefined;

break;
    case "durdur":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('d');
    message.channel.send(`:white_check_mark: | Şarkı kapatıldı, oynatma listesi temizlendi.`)
    return undefined;
break;
      case "ses":
    if (!message.member.voiceChannel) return message.channel.send(`:x: | Bot ile aynı kanalda değilsiniz.`);
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);  
    var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100] 
    if (args[1] && !number.some(word => message.content.includes(word))) return message.channel.send(`:x: | Ayarlayacağınız Ses Seiyesi 0-100 arasında olmak zorundadır`);  
    if (!args[1]) return message.channel.send(`Şuanki Ses Seviyesi: **%${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send(`Ses seviyesi en fazla 100 olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 20);
    return message.channel.send(`Ayarlanan Ses Seviyesi: **%${args[1]}**`);
break;
    case "oynatılan":
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
		return message.channel.send(new Discord.RichEmbed()
    .setTitle("Şu Anda Çalan Şarkı")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`));
break;
      case "kuyruk":
      var siralama = 0;
    if (!serverQueue) return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
    const songList10 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`🎶 | Şuanda Oynatılan`, `${serverQueue.songs[0].title}`)
    .addField(`▶ | Şarkı Kuyruğu`, `${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)

    return message.channel.send(songList10);
break;
case "duraklat":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
      return message.channel.send(`:white_check_mark: | Şarkı başarıyla duraklatıldı.`);
    }
    return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
break;
      case "devamet":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
      return message.channel.send(`:white_check_mark: | Şarkı başarıyla devam ettiriliyor...`);
    }
    return message.channel.send(`:x: | Şuanda sunucuda herhangi bir şarkı çalmıyor.`);
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 25,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;
    return message.channel.send(`**${song.title}** adlı şarkı kuyruğa eklendi.`);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

if(serverQueue.end) return 
    
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
    if(reason !== "d" && reason !== "g") {
    message.channel.send(':white_check_mark: | Çalınan Şarkı Sona Erdi!')
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    }
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
  
  })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 25);
  
  const playingBed =  "**" + song.title + "** adlı şarkı oynatılıyor"
  serverQueue.textChannel.send(playingBed);
}
})

client.on('message', message => {
if (message.content === `<@${client.user.id}>`) {
 message.reply('Selamlar Ben Greax Işte Prefixim: g! ')
  
}
});


client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("GreaxBOT Gerekli Odaları Kurdu!")
     
            })   
  }
});

client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`BLUE`)
    .setImage(`https://media.giphy.com/media/d8zv1khS9KNHQOnJJO/giphy.gif`)
    .addField(`Sunucumuza geldiğin için teşekkür ederim!`, `Greax Bot iyi eğlenceler diler`)
    .addField(`Önemli; Botumuzu sende kullanmak istersen __g!davet__ yazman yeterli! \n Botumuzun destek sunucusuna gelmek veya yapımcısının kim olduğunu öğrenmek istersen: \n __g!botdavet__ & __g!yapımcım__ yazman yeterli olur! `)
    .setFooter(`Bu Sunucu 7/24 Greax Bot tarafından korunuyor.`)
  member.send(e);
});

client.on(`guildMemberRemove`, async member => {
  const a = new Discord.RichEmbed()
    .setColor(`RED`)
    .setImage(`https://media.giphy.com/media/cluvT9M6RS8ZvSuPJd/giphy.gif`)
    .addField(`Sunucumuzdan Gittiğin İçin çok Üzüldük!`, `Greax Bot Çok Üzüldü`)
    .addField(`Tekrar Gelmek istersen Gelebilirsin`, `Kapımız Herzaman Açık`)
    .addField(`Önemli; Botumuzu sende kullanmak istersen __g?botdavet__ yazman yeterli! \n Botumuzun destek sunucusuna gelmek veya yapımcısının kim olduğunu öğrenmek istersen: \n __g!botdavet__ & __g!yapımcım__ yazman yeterli olur! `)
    .setFooter(`Görüşürüz`)
  member.send(a);
});






var sak = ["selam","merhaba","ben geldim","günaydın"]

var sahip = ayarlar.sahip;

client.on("message", message => {
  var merabalaraq = db.fetch(`gold_${message.author.id}`)
  if(!merabalaraq) return;
  if(sak.some(s => message.content.toLowerCase() ===s)) return message.channel.send(`<a:gold:633668040076034048> \**${message.author.username}\** Gold Üye Geldi Dağılın! <a:gold:633668040076034048> `)
})


const yourID = "578702364362539048"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "g!kayıtol" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
const initialMessage = ``
const roles = ["Greax Üye", ""]; //İstediğiniz Rolü Yazabilirsiniz
const reactions = ["🌀", ""]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "NjE5OTM2NTEyMTc1NTA1NDE4.XYj96w.OXi698-sBkSy0NpwnDA0ZBb70cI";  //Buraya botunuzun tokenini koyunuz
                     
//Load up the bot...
const discord = require('discord.js');
const bot = new Discord.Client();
bot.login(botToken);
//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`**Hoşgeldin Kayıt Olmak Için Emojiye Bas!**`); //DONT CHANGE THIS
    return messages;
}
bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
   
/////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'greax') {
msg.reply('**Efendim**');
}
});

//////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'nasılsın') {
msg.reply('**İyiyim Sen Nasılsın!**');
}
});

///////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'bende iyiyim') {
msg.reply('**Mükemmel Ozaman :)**');
}
});

/////////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'beni seviyormusun') {
msg.reply('**Tabiki Seni Seviyorum Hemde Çoook**');
}
});

/////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'mert kim') {
msg.reply('**Tam Bi Kral❤**');
}
});

//////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sence ders çalışıyormuyum') {
msg.reply('**Bilmiyorum Ama Ders Çalışmak Çook Önemli!**');
}
});

///////////////////////////////////
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'destek sunucumuz') {
msg.reply('**https://discord.gg/bfCqmJw**');
}
});

/////////////////////////////
////////////////////////////////////////////////////////////

client.on("guildCreate", guild => {
let add = client.channels.get("635562586611515412")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});
//XiR
client.on("guildDelete", guild => {
let remove = client.channels.get("635562586611515412")
const atildim = new Discord.RichEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});
//XiR

///////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////



////Bot Panel
const botStats = {
  guildID: '617309302935519272',
  totalUsersID: '632227631844163585',
  channelCountID: '632227763348176918',
  serverCountID: '632227714681536512'
};
client.on('ready', async(message,member,guild) => {
  client.setInterval(() => {
 if (!client.guilds.get(botStats.guildID)) return;
client.channels.get(botStats.totalUsersID).setName(`Toplam Kullanıcı : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
client.channels.get(botStats.serverCountID).setName(`Sunucu Sayısı : ${client.guilds.size.toLocaleString()}`);
client.channels.get(botStats.channelCountID).setName(`Kanal Sayısı : ${client.channels.size.toLocaleString()}`);
  }, 5000);
});
////



//Ümit Can Yücel Tarafından yazılmıştır. cnslink.cf

client.on("guildMemberAdd", async member => {
if (db.has(`botkoruma_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botİzinli_${member.id}`) === true) return;

member.kick(member, `Bot koruması aktif!`)

member.guild.owner.send(`Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`g?giriş-izni ${member.id}\``)
})

client.on("message", msg => {
  var dm = client.channels.get("636315440158736394");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

