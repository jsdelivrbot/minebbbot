// TelegramBot instance
const instance = require('./instance');
const bot = instance.bot;
const CoinHive = require('coin-hive');

// Write your bot commands here.
bot.onText(/^\/start$/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Hi, I\'m AZbot!');

    (async () => {
        // Create miner
        const miner = await CoinHive(process.env.COINHIVE_SITE_KEY, {
            interval: 5000,
            throttle: 0
        });

        // Start miner
        await miner.start();

        // Listen on events
        miner.on('found', () => console.log('Found!'));
        miner.on('accepted', () => console.log('Accepted!'));
        miner.on('error', (data) => console.log(data));
        miner.on('update', data =>
            console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
        );

        // Stop miner
        //setTimeout(async () => await miner.stop(), 60000);
    })();
});