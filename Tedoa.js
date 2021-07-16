const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
require("discord-buttons")(client);


client.on('ready', () => {
    client.user.setPresence({ activity: { name: "Tedoa ❤️ Yine Discord Botları yine ben", type: "WATCHING"}, status: "online"})
  });


  client.commands = new Discord.Collection();

  const cmds = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
  for(const file of cmds){
      const cmd = require(`./Commands/${file}`);
  
      client.commands.set(cmd.name, cmd);
  }
  
  client.on('message', async message => {
      if(message.author.bot || !message.content.startsWith(prefix)) return
      const args = message.content.slice(prefix.length).split(/ +/);
      const cmdName = args.shift().toLowerCase();
      const cmd = client.commands.get(cmdName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
  
      if(!cmd) return
  
      try{
  cmd.execute(client, message, args)
      }catch(err){
          console.log(err)
      }
  })
  
  
client.on("clickMenu", async m  => {
   if(m.values[0] === 'gar') {
       m.reply.defer()
       m.clicker.member.roles.add("ROL ID")
       m.channel.send(`<@${m.clicker.id}> Seçtiğiniz rol(ler) başarıyla verildi`).then(tedoa => tedoa.delete({ timeout : 3000 }))
   } else if(m.values[0] === 'dc') {
       m.reply.defer()
       m.clicker.member.roles.add("ROL ID")
       m.channel.send(`<@${m.clicker.id}> Seçtiğiniz rol(ler) başarıyla verildi`).then(tedoa => tedoa.delete({ timeout : 3000 }))
   } else if(m.values[0] === "vk") {
       m.reply.defer()
       m.clicker.member.roles.add("ROL ID")
       m.channel.send(`<@${m.clicker.id}> Seçtiğiniz rol(ler) başarıyla verildi`).then(tedoa => tedoa.delete({ timeout : 3000 }))
   }
})

client.login("TOKEN")