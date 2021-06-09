/*CMD
  command: /createWalletTrx99
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  onSuccess: "/onWalletCreated",
  onIncome: "/onGettingTRX",
  onIPN: "/onifipn"
});
