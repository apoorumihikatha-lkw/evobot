module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send("සින්දු දාන්න කලින් voice channel එකකට Join වෙයන් බල්ලො!").catch(console.error);
      return;
    }

    return true;
  }
};
