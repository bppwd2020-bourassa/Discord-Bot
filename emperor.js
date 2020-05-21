const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'pog') {
    msg.reply('champ');
  }
  client.on('message', message => {
    if (message.content === 'what is my avatar') {
      message.reply(message.author.displayAvatarURL());
    }
  }
});

client.login('NzEzMTAyNjAzMjM5NTU1MTE1.XsbPhg.3bqrcWofdGBHm46dL-kIYds9deU');