# Mazurex-Discord-Bot

To create a Discord Bot, it's not just copy + paste, you have to install a few libraries first.
I would recommend using Visual Studio Code, it has a built in terminal and is really helpful for coding, but you can use anything you wish.
To use discord.js, you'll need to install [Node.js](https://nodejs.org/). discord.js v14 requires Node v16.9.0 or higher.
To check your node version, in the console type in "node -v".

Run "npm init -y", this will create a file.


![image](https://user-images.githubusercontent.com/93735179/204050756-c5708b13-736e-4f43-94ea-0370c4ec9b59.png)

Then run "npm install discord.js", this will create all the libraries you will need.

Then you just download all the files in this project and place them into your bot's foler.

Create a new application at https://discord.com/developers, give it a name and go to the bots section.


![image](https://user-images.githubusercontent.com/93735179/204051121-93b266e7-2207-4009-b34d-ea5c5856b4a2.png)

Then press "add bot".


![image](https://user-images.githubusercontent.com/93735179/204051197-8993f7e5-1738-47f6-ae8d-61e9f60e0e51.png)

Then get the bots token, and go to the "config.json" file in your bots folder  (DO NOT SHARE YOUR TOKEN WITH ANYONE).
Paste your bots token in the "token part".


![image](https://user-images.githubusercontent.com/93735179/204051409-09d9e52b-b294-4a9a-95f6-c79f7a9d59fc.png)

Then invite the bot to your discord server, you can do this by going back to https://discord.com/developers and pressing "OAuth2" and "Url Generator".
Make sure you select "bot" and "applications.commands", then in the permissions tab, just select "Administrator".

Once the bot is in your server, right click on it and press "copy id", paste that id into the "client id" part of the config.json file


![image](https://user-images.githubusercontent.com/93735179/204051658-ae80bbc2-205b-4745-b5d2-db02da11cdd9.png)

Then, right click on the name of your discord server and press "copy id"


![image](https://user-images.githubusercontent.com/93735179/204051717-b63f0fc3-9692-460e-9af0-82adaffc84e8.png)

Then paste the id into the "guild id" part of the config.json file


![image](https://user-images.githubusercontent.com/93735179/204051758-d68ab8ba-af62-4b53-a281-551c05902f41.png)

You're almost done! If you create any new commands, in the terminal type in "node deploy-commands.js"

To start your bot, in the terminal type in "node index.js", you should see "Ready!" appear in the console shortly after, and the bot should be online, if you close the console/program, the bot will stay online for a bit but it is off.

You can use the bot in any way you want, I'm not responcible for any damages you cause, this is only for educational purposes, have a good day!
