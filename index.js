const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

//game mode
client.on('message', msg => {
    if (msg.content === '?game-mode') {
    msg.reply('Toggeld Game Mode');
    }
    });
//bingo
client.on('message', msg => {
    if (msg.content === '?start-bingo') {
    msg.reply('Ok, Have Fun!');
    }
    });


client.on('message', msg => {
        if (msg.content === 'bingo!') {
        msg.reply('GG! You Won Bingo!');
        }
        });


client.login(process.env.token);
