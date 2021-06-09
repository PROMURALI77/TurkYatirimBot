/*CMD
  command: 🗃️ Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
var button = [[{title : "💼 Set / Change TRX Wallet" , command : "/wallet"}]]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* \n `"+wallet+"`\n\n💹It will be used for *all future withdrawals.*"
);

