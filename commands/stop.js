const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Stop කරන්න මුකුත් නෑ බල්ලො.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ යනව තමයි බල්ලො, ගල් මූසලයා!`).catch(console.error);
  }
};
