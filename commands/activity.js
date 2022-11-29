const { SlashCommandBuilder, PermissionFlagsBits, ReactionUserManager } = require('discord.js');
const allowed_users = [
    'USER ID 1',
    'USER ID 2',
    'USER ID 3'
];

const { SlashCommandBuilder } = require('discord.js');
 
module.exports = {
   data: new SlashCommandBuilder()
       .setName('activity')
       .setDescription('change the bots activity')
       .addStringOption(option =>
        option
            .setName('activity')
            .setDescription('what the activity should be')
            .setRequired(true))
       .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
   async execute(interaction) {
    const activity = interaction.options.getString('activity');
    if (interaction.user.id === allowed_users) {
        await interaction.reply({ content: '**Configuration Command**\nYou do not have permission to use this command!', ephemeral: true})
        return
    }
    await interaction.client.user.setActivity(activity);
    await interaction.reply({ content: `**Configuration Command&&\nI have set the bot's activity to ${activity}`})
   }
};