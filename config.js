const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '12103219065' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Ghost:33jcrpXJmh4CQfxD@cluster0.ya4uhjm.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000 ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = '' ;
global.github = 'https://github.com' ;
global.location = 'mumbai, india' ;
global.gurl = 'https://youtube.com' ; // add your username
global.sudo =  process.env.SUDO || "12103219065" ;
global.devs = "12103219065"; //Dont change it From here
global.website = 'https://github.com' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlZekQzRmNUYXRyaDJMSmk4cmJ5ZWdzR2ZURVdJOU4yRVNSc1dvOFFGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWxwSjBwR1FGTGx0ME1KVWdJNWNjUzd1blp4WjZIY3B1dUNWNTBMcFlncz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRFdzdk92WWVJSjE0Y282OWhjSEs5dnlkNG9pcG9WbFFGZGRrWTdaeTJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZU5VK3NzcVIrYXdTbTd5UUNSTWNsT25JZmNXRTZvN1pjTEE0aHBFbEdjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIYlNiR3crOEt4R3FFZXdodHZNdmhZTGJvL3hXZ3BvUW9LN1JxOG5rSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBZksxZHdvUUwyRmtEL1pTM1BMTGh5TkFsbS9WdnI2WWdhS3VQclQ3Rkk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SUl5amJvRGJDMzVKaGNIWG0vZnNtOGYvRmpEc01RdTBaUzlJMUY2T1YxRjhkTHQ0cHI4MVNIYUxIeUFNQ3doUlE5V3hRWjdOczQvUkZMYzhFVjVndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1LCJhZHZTZWNyZXRLZXkiOiJjeTJOeDNUWU0xa2pNYUMxRHlhM1o3SUU3SThrQThBZEQzS2pFODhJZjlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQyMzQ4MDkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNTMxOTNGMjY5NzAwM0ZBNzVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE2OTI3NDA4OTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQyMzQ4MDkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDA2RjZBQjQzRUU2QzY0M0E0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE2OTI3NDA5MDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhybUJnbGVrUnNHZ3BtQVBoNnNJSEEiLCJwaG9uZUlkIjoiMDYzOWE3NzQtZDVhZi00NGI0LTk1M2EtMmRhZWE3YWRmNTk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMZUFsOEVzSjVvT3BNN0k2WkNOZCt5UG1rZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjU3N2Y1a2I4ZHd6MWhsQ1RGVURtQ3gvVmtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUxucGIwS0VKM2FsS2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibWtpQXh2YW8zSGp4SnpTUlNkcWxFMm4wS21NMG12UzJBd3ZiZGNxRzNITT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlNld0tLYjQ0MVc5UVkzMERJcHhpMEdpaGxMU3lueXdWNUZsaU03REhCUDVpaHBITldkL0kyK2pLeEhEWEgvdzhlemZBK3ppMEh6M1FTOUlKcldwamc9PSIsImRldmljZVNpZ25hdHVyZSI6IndrQmN0TTh5T05VMzBtK0plUFVFUm1JZXczbDhDZ2ozMEJWSmJEaHFkZ0N0VWRQeGVHTmRjSVhBUkQyejlLejR5V09saytYLzRCRTVTWWp4QXYxSWhnPT0ifSwibWUiOnsiaWQiOiI1MDk0MjM0ODA5MjoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMZSBTb3V2ZXJhaW4gQm90In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQyMzQ4MDkyOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpwSWdNYjJxTng0OFNjMGtVbmFwUk5wOUNwak5KcjB0Z01MMjNYS2h0eHoifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5Mjc0MDg5NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHNmoifQ==',
  botname: process.env.BOT_NAME || 'Le Souverain Bot',
  ownername:  process.env.OWNER_NAME || `Le Souverain`,
  author:  process.env.PACK_AUTHER || 'koko manmanw', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t♡ Isshiki 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '!',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "    *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐷𝛯𝛻𝛪𝐿•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'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' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME|| 'ZEROTWO',
  WORKTYPE: process.env.WORKTYPE || 'Public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
