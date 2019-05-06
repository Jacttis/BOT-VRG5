const Telegraf = require('telegraf')

const config =require('./config.json');



const bot = new Telegraf(config.secret_token);

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.command('come',ctx => {
    ctx.replyWithPhoto("https://ibb.co/Y8rHSRF")
})
bot.launch()