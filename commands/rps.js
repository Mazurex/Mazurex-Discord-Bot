const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');
const replies = [
    'rock',
    'paper',
    'scizzors'
];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('Have a game of rock paper scizzors?')
    .addStringOption(option =>
        option
            .setName('choice')
            .setDescription('What choice will you pick?')
            .addChoices(
                { name: 'rock', value: 'rock' },
                { name: 'paper', value: 'paper' },
                { name: 'scizzors', value: 'scizzors' }
            )
            .setRequired(true)),
    async execute(interaction) {
        const reply = Math.floor(Math.random() * replies.length);
        const words = replies[reply]
        const choice = interaction.options.getString('choice');
        console.log(words) //This is just for testing, get rid of this after testing
        interaction.reply({ content: `**Fun Command**\nYou chose \`${choice}\`, I chose \`${words}\`, did I win?`})
    }
}