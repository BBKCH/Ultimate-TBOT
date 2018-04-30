const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDQwMDU4ODI5Mzk3Mjk1MTA1.Dchoeg.g1q4UOqTq6N7UMg5AurCKmSob4A);
