let handler = async (m, { conn }) => {
let caption = `*silahkan tanya ke https://wa.me/6285828764046*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Otw tanya owner`, `.ownerzifa`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.beli sc|.beli)/i
handler.command = new RegExp
module.exports = handler
