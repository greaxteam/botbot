
exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send(`⛔ Lütfen bir id giriniz.`);

    let sunucu = client.guilds.find(sunucu => sunucu.id === args[0]);
    try {
        let inviteChannel;
        channelLoop:
        for (let c of sunucu.channels) {
            let channelType = c[1].type;
            if (channelType === "text") {
                inviteChannel = client.channels.get(sunucu.systemChannelID || c[0]);
                break channelLoop;
            }
        }
        let inviteLink = await inviteChannel.createInvite().then(invite => invite.url);
        message.channel.send(inviteLink);
    } catch (error) {
        message.channel.send(`⛔ Böyle bir sunucu bulunamadı.`);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dç'],
    permLevel: 4,
  kategori: 'Bot Sahibi'
};

exports.help = {
    name: 'davetoluştur',
    description: 'Belirtilen sunucunun davet linkini yollar.',
    usage: 'davetoluştur <sunucu-id>'
};
 