/*CMD
  command: 💵 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let profit = Libs.ResourcesLib.userRes("profit");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let refcom = Libs.ResourcesLib.userRes("refcom");
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";







Bot.sendMessage( "👤 _Account Summary_:  "+inf+
"\n\n➖ *Withdrawable Balance:"+ "\n"+ res.value().toFixed(8) + " TRX" + "\n\n💳 Active Investments: "+ "\n"+ deposit.value().toFixed(8) + " TRX" + "\n\n💰Total Profit: "+ "\n"+ profit.value().toFixed(8) + " TRX" + "\n\n🎁 Total Affiliate Bonus:"+"\n"+ refcom.value().toFixed(8) + " TRX" + "\n\n💵 Total Withdrawn:"+ "\n"+ withdraw.value().toFixed(8) + " TRX" + "*\n" )
