const TelegramBot = require('node-telegram-bot-api');

module.exports.bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
});