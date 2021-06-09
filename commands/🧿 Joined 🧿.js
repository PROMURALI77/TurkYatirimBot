/*CMD
  command: 🧿 Joined 🧿
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: back 🔙, 🔙 back
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
} else {
  let channel = "@TrxYatirimbotu"
  let id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "Check"
  })
}

