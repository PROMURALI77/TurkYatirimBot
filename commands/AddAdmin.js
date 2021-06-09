/*CMD
  command: AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send İd
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessageToChatWithId(""+message+"", "*Owner Made You Admin*")
Bot.sendMessage(message+" Promoted")
Bot.setProperty("admin"+message+"",""+message+"","string")
