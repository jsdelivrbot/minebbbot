const TelegramBot = require('node-telegram-bot-api');

module.exports.bot = new TelegramBot('540598327:AAGIjenrXsflIK7qFUyXs-1j4RJRGa2nXX4', {
    polling: true
});