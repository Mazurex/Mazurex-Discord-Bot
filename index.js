const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

//Will only run once
client.once(events.ClientReady, () => {
    console.log('Ready!');
    client.user.setActivity(''); //Add a custom activity to the bot
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        await interaction.reply({ content: 'There was an error executing this command!', ephemeral: true});
    }
});

client.login(token);

//If you created a new command run: "node deploy-commands.js"
//Any other time, type: "node index.js"