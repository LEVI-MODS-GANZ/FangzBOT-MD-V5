let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โข @${nomorown.split`@`[0]} โข
------- ${nameown} -------

๐ฎ *Note:*
โข Owner menerima save contact
โข Owner berhak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข Owner Hanya merespon yang berkaitan dengan BOT
โข No Telp
โข Chat gajelas = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*๐ Nama* : levi
*โ๏ธ Nama RL* : FangzBOT
*โ๏ธ Gender* : Laki - laki
*๐ Agama* : Islam
*โฐ Tanggal lahir* : 7 desember 2007
*๐จ Umur* : 14
*๐งฎ Kelas* : 7
*๐งฉ Hobby* : Nonton henta*, main game, Recode script
*๐ฌ Sifat* : Baik, hode, softboy, tydack ramah, g*y
*๐บ๏ธ Tinggal* : Indonesia, jawa, bogor
*โค๏ธ Suka* : warnah pink & hitam, trap, waifu wangy, kucing
*๐ Benci* : anak alay, autis, anak epep, sok asik

*- - sแดษชสสs: - -* 
> JavaScript [70.7%]
> Python [11.4%]
> CSS [4.1%]
> Html [0.9%]
> Recode [76.8%]
> Create Webs [88.9%]

โโโโโโโ[ SOSIAL MEDIA ]โโโโโโโ

๐ท *Instagram:* ${sig}
๐ *Github:* ${sgh}
๐ฅ *Whatsapp* wa.me/${nomorown}
๐ *Discord:* Soon
๐ *Website:* https://fangzbot.websites.co.in/
๐ถ *Tiktok:* https://www.tiktok.com/@leviatnansyah?_t=8UnaVTcn97p&_r=1

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ฑ โข Nomor", rowId: ".owner nomor"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	{title: "๐ โข Website", rowId: ".website"},
	{title: "๐ โข Script", rowId: ".sc"},
	{title: "๐ฎ โข Youtube", rowId: ".fyt"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".donasi"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "๐ฌ แดสแดแดs", null,null, [["แดแดษดแดsษช", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
