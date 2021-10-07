const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on("message", async message => {
   if(message.content === "!embed") {
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))//you can also set the author to say whatever you want, not just who send the command.  Exp: .setAuthor("My embed").
  .setTitle("set-the-embeds-title-here!")
  .setDescription("set-the-embeds-description-here")
  .addField("title-of-the-field-goes-here", "field-text-goes-here")
  .addField("title-of-the-field-goes-here", "field-text-goes-here")
  .addField("title-of-the-field-goes-here", "field-text-goes-here")
  .setColor("")//put a color here like RED, BLUE, GREEN etc...  Or use https://htmlcolors.com/color-picker and put the hex code in.  Exp: #FF0000 = RED.
  .setTimestamp()//this is left blank, this will say when the message was sent, it's just for looks as every discord message says when it was sent.
  .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true}))//you can change this to say what you want as well as the author.  Exp: .setFooter("Pepe")
  message.channel.send(embed)
  }
})


client.login(config.token);
