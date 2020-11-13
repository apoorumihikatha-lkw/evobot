const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume of currently playing music",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("මුකුත් නෑ මිනිහො play කරන්න").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("සින්දු දාන්න කලින් voice channel එකකට Join වෙයන් බල්ලො!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 The current volume is: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Number එකක් දාපන් මිනිහො volume එක set කරන්න. පරයා!").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Please use a number between 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`ඇද්ද තොට මූසලයා: **${args[0]}%**`).catch(console.error);
  }
};
