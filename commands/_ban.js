/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: User id
  keyboard: 
  aliases: 
CMD*/

var admin="1194007250"

if (message=="Back 🔙"){
Bot.runCommand("Panel 👮")
}else{
if (user.telegramid==admin){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("User Has Been unban");
}else{
Bot.sendMessage("Not the admin");
}
}
