const TelegramBot = require('node-telegram-bot-api');

module.exports.bot = new TelegramBot('523705222:AAGOgFyFXajnphqrxdiWrizXOALNiy5_cRk', {
    polling: true
});