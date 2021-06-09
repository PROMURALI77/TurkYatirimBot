/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var welcomey = User.getProperty("welcomey")
if (welcomey == undefined) {
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.05)
Bot.sendMessage("🎁* Welcome bonus 0.05 TRX*")
}
User.setProperty("welcomey", user.telegramid, "text")
Bot.sendKeyboard("🧿 Joined 🧿","📡 *To use this bot you must join this channel: @TrxYatirimbotu*")
function onAttracted(refUser){
var res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(0.01);
Bot.sendMessageToChatWithId(refUser.chatId,"*+0.01 TRX for New refferal*")}
Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});

