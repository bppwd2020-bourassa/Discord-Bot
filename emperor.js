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

      msg.channel.send(`The user mentioned is: ${taggedUser.username}`)
    }

});




client.login(config.token);