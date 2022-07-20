const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const TOKEN = process.env.TOKEN

const {downloaderMethod} = require('./request')

const bot  = new TelegramBot(TOKEN, {polling:true});

bot.on('message' , async(message) =>{
     try {          
      const chatId = message.chat.id
      const name = message.from.first_name
      if(message.text=='/start'){
            await  bot.sendMessage(chatId, `Salom ${name} Xush Kelibsiz Botga instagram link yuboring 📲`)
        }
        const getVideoUrl = await downloaderMethod(message.text)
        await bot.sendVideo(chatId , getVideoUrl.videoUrl,{
              caption: getVideoUrl.caption + '\n \n  \n MuHaMmAdAli oKen 😎 ✅ \n 📲 Tg @bdm_uz '           
        })
        
     } 
     catch (error) {
      console.log(error+"")            
     }
})