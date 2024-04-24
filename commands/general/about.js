const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require("discord.js");
const { version } = require('../../package.json');

module.exports ={
  name: "about",
  description: "معلومات عن البوت",
  run: async (client, interaction, message) => {
    try {
      let embed = new MessageEmbed()
        .setAuthor({ name: "About Me", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setColor("#0099ff")
        .setTitle("معلومات عن البوت")
        .setDescription("معلومات عن البوت:")
        .addField("Bot Name", client.user.username)
        .addField("Bot ID", client.user.id)
        .addField("Bot creation time", `<t:${parseInt(client.user.createdTimestamp / 1000)}:R>`)
        .addField("Bot Owner", "[𝐌𝐚𝐆𝐝𝐄𝐞](https://discord.com/users/1150890847768936458)")
        .addField("Up Time", `<t:${parseInt(client.readyTimestamp / 1000)}:R>`)
        .addField("Ping", `${client.ws.ping}ms`)
        .addField("Bot Version", `v${version}`)
        .setFooter({ text: `Made By 𝐌𝐚𝐆𝐝𝐄𝐞`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/1220651731503812649/1227026634838900746/YY52ytm.gif?ex=6626e89a&is=6614739a&hm=593a1dee0b455a53f9cec85cf5a379516708fdb885c646a397d6ab4299194c1d&");
      interaction.reply({ embeds: [embed], ephemeral: false });
    } catch (err) {
        console.log(err);
    }
  }
}
