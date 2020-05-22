const Discord = require('discord.js');
require('dotenv').config();

const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX
};

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'pog') {
      msg.reply('champ');
    }

    if (command === 'me') {
      msg.reply(msg.author.displayAvatarURL());
    }

    if (command === 'roll') {
      int = Math.floor((Math.random() * 20) + 1)
      msg.reply(int);
    }

    if (command === 'args-info') {
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
      }
    
      msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

    if(command === 'mention') {
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
      }
      const taggedUser = msg.mentions.users.first();

      msg.channel.send(taggedUser.roles)
    }

    if(command === 'giverole') {
    
      const user = msg.mentions.users.first();
      if(!user) msg.channel.send("specify the user you would like to give the role to")
      const role = msg.cache.roles.find(r => r.name === args.slice(1).join(" "));
      if(!role) msg.channel.send("specify the role you would like to give to the user")
      user.addRole(role.id), msg.channel.send(`${user} now has the ${role} role`)
    }
  });

  client.on('event', async (first, last) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'rps') {
      const chooseArr = ["🗻", "📰", "✂"];

      const embed = new RichEmbed()
        .setColor("#ffffff")
        .setFooter(msg.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("Add a reaction to one of these emojis to play the game")
        .setTimestamp();

      const m = await msg.channel.send(embed);
      const reacted = await promptMessage(m, message.author, 30, chooseArr);

      const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

      const result = await getResult(reacted, botChoice);
      await m.clearReactions();

      embed.setDescription("")
           .setField(result, `${reacted} vs ${botChoice}`)

      m.edit(embed);

      function getResult(me,clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
          (me === "📰" && clientChosen === "🗻") ||
          (me === "✂" && clientChosen === "📰")) {
            return "You won!"
          }
        else if (me === clientChosen) {
          return "Its a tie!"
        }
        else {
          return "You lost!"
        }
      }
    }

});




client.login(config.token);