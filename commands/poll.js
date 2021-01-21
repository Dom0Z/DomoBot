const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let poll = message.content.substring(config.client.prefix.length).split(" ");
    
    switch (poll[0]) {
 
        case 'poll':
 
            const pollEmbed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("**Creating a Poll!**")
                .setDescription("-poll is used to create a yes or no poll");
 
            if (!poll[1]) {
                message.channel.send(pollEmbed);
                break;
 
            }
 
            let msgArgs = poll.slice(1).join(" ");
 
            const pollMessage = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("New Poll Received!")
                .setDescription("Submitted by " + message.author.username)
                .setThumbnail(message.author.avatarURL)
                .addField("**Law proposal:**", msgArgs)
                .setFooter(message.guild.name);

            const pollWinner = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("Poll Passed!")
                .setDescription("Submitted by " + message.author.username)
                .addField("**Law:**", msgArgs)



           
 
 
                message.channel.send(pollMessage).then(messageReaction => {
                messageReaction.react("✅");
                messageReaction.react("🚫");
                message.delete({ timeout: 1000});
                });
                break;
 
    }

};
module.exports.help = {
    name: 'poll',
    description: "This is a poll command!"
}
    /*execute(message, poll){
        
        switch (poll[0]) {
 
            case 'poll':
     
                const pollEmbed = new Discord.MessageEmbed()
                    .setColor(0xFFC300)
                    .setTitle("**Creating a Poll!**")
                    .setDescription("-poll is used to create a yes or no poll");
     
                if (!poll[1]) {
                    message.channel.send(pollEmbed);
                    break;
     
                }
     
                let msgArgs = poll.slice(1).join(" ");
     
                const pollMessage = new Discord.MessageEmbed()
                    .setColor(0xFFC300)
                    .setTitle("New Poll Received!")
                    .setDescription("Submitted by " + message.author.username)
                    .setThumbnail(message.author.avatarURL)
                    .addField("**Law proposal:**", msgArgs)
                    .setFooter(message.guild.name);

                const pollWinner = new Discord.MessageEmbed()
                    .setColor(0xFFC300)
                    .setTitle("Poll Passed!")
                    .setDescription("Submitted by " + message.author.username)
                    .addField("**Law:**", msgArgs)



               
     
     
                    message.channel.send(pollMessage).then(messageReaction => {
                    messageReaction.react("👍");
                    messageReaction.react("👎");
                    message.delete({ timeout: 1000});
                    });
                    break;
     
        }
    
}
};
*/