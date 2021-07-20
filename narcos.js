const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
var x = new smartestchatbot.Client();
client.on("ready", () => {
  client.user.setActivity("Seni", { Type: "LISTENING" });
  console.log("Narcos Code");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content // let content ( a variable used to fetch response ) be equal to the message's content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(
      `**:x: Lütfen benimle konuşurken kimseden bahsetme. 😭**`
    );
  }
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("Sadece metin mesajlarına cevap verebilirim");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "MustafaMert&Egehanss", // Add Owner Name Here
    user: message.author.id,
    language: "tr" // You can change the language here ( auto ) states it will detect your language and prepare a response in english for you
  }).then(reply => {
    message.reply({
      embed: {
        description: `**${reply}**`,
        color: "#87ceeb"
      }
    });
  });
  message.channel.stopTyping();
});
client.login("NzQ1NTg0MTc4MjcxMjIzODE4.Xzz5YA.GF61g1LA0dA7_r4ZHZ2ndoJgsAQ"); //login using the token
