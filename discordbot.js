const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '/ping') {
    message.reply('pong');
  }
});

client.login(token);
