/*CMD
  command: /add-bal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User id
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1109004518")) {
var msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
} else {
  Bot.sendMessage("*You Are Not Admin  ❌*")
}
