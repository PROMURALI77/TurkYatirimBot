/*CMD
  command: Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [
[{title: "Kripto Tür 〽️", command: "tursec"}],[{title: "0", command: "Ban"}]
];
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n✒Coded By [LORD](https://t.me/yusiqo)")
}else{
Bot.sendMessage("You Are Not An Admin")
}
