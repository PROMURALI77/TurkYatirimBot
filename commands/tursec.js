/*CMD
  command: tursec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("coin", message, "string")
Bot.sendMessage("Ayarlandı "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
