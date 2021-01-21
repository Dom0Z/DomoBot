module.exports.run = async(client, message, args) => {

let msg = await message.channel.send("Vote!");
await msg.react("✅");
await msg.react("🚫");

const reactions = await msg.awaitReactions( reaction => {
    return reaction.emoji.name === "✅"|| reaction.emoji.name === "🚫";
}, {time: 15000});
console.log(reactions);
}

module.exports.help = {
    name: 'pog'
}