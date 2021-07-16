const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons')
module.exports = {
    name: "selecet-menü",
    aliases: [],
    async execute(client,message,args){

        
const Tedoa1 = new MessageMenuOption()
.setLabel("Gartic IO")
.setDescription("Gartic IO Rolü")
.setEmoji("Emoji")
.setValue('gar')


const Tedoa2 = new MessageMenuOption()
.setLabel("Doğruluk Cesaret")
.setDescription("Doğruluk Cesaret Rolü")
.setEmoji("Emoji")
.setValue('dc')

const Tedoa3 = new MessageMenuOption()
.setLabel("Vampir Köylü")
.setDescription("Vampir Köylü Rolü")
.setEmoji("Emoji")
.setValue('vk')


const Menu = new MessageMenu()
.setID('menu1')
.setPlaceholder('Yaptıgınız aktivitenin rolünü alabilirsiniz Developed By Tedoa!')
.addOption(Tedoa1)
.addOption(Tedoa2)
.addOption(Tedoa3)
.setMaxValues(2)

const TedoaMesajGönder = new MessageActionRow()
.addComponent(Menu)

await message.channel.send("Merhaba Kullanıcı", { components: [TedoaMesajGönder] })

    }
}