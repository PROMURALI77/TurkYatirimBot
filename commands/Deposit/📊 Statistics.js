/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let currency = "TRX" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
let re = Libs.ResourcesLib.anotherChatRes("re", "global")
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*📊 Bot Live Statistics*" + "\n\n👤* Total Investors:* `" + tota.value().toFixed(0) + "`\n\n*➕ Total Investments:* `\n" + depo.value().toFixed(4) + "` *TRX*\n\n*💳 Total Withdrawn:* `\n" + userPayment.value().toFixed(4) + "` *TRX*")

