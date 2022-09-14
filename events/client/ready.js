const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is now online and ready to use And Eat Your Dad[Developer © WildLife Studio] 
Support Server https://discord.gg/r6smUJDREt`)
    setInterval(() => bot.user.setActivity(`پدرت`, { type: "WATCHING"}),5000)
};
