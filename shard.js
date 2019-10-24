const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./Greaxbot.js', {// Ana dosyanızın adını yazınız.
    totalShards: '10',
    token: "NjE5OTM2NTEyMTc1NTA1NDE4.Xass4g.u9muyd5zg3S7nQAnCBi2D_U4dZg"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);
