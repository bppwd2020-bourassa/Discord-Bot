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
  
  if(msg.content.substring(0,1) == (config.prefix)) {

    if (msg.content === 'pog') {
      msg.reply('champ');
    }

    if (msg.content === 'me') {
      msg.reply(msg.author.displayAvatarURL());
    }

    if (msg.content === 'roll') {
      int = Math.floor((Math.random() * 20) + 1)
      msg.reply(int);
    }

    if(msg.content === 'role') {

    }
  }
});

client.login(config.token);