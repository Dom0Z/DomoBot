module.exports.run = async(client, message, args) => {
    message.channel.send("Pong");
}

module.exports.help = {
    name: 'ping',
    description: "This is a ping command!"
    }
