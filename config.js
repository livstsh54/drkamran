const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9YZ0wycVpvd000NmFBb3JmMjd0VDdoSEVFVUdsZUZVV2tQTGFpb0pVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjJpTmEvNGd0OGM0VSsyTUNtU2JCbXoyZWFQMXZnRnlrRGVYTWh3Zmtqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSWs0ZWtVdnZXQkxSM2FkNEhyWGpXNUpWVWtsbDl6U0I2enF6cFV0Z21ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSkZ6K0x2NGY0amJlY1BSRVBUK01UMGJZY0VWaFJBdWY5STkrVnpoOHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQWFplVFFJbGVPRHFGZ2xURHJvbVJwSW5rcW4vNGdSUmg5QXg3Q0EwbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEremxrdmMxOUwrSkIyTDlWV3FGUjJnYVdZTDBSeUJsaXA2RzJVUjZaM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0h1aWVTdjh1NStGckx1VHl6NEFtUjNEeWNSdmdCL3FzQmJyWHRzRjkxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHZsOXJtb1FvQUMybkZFdmtGY1ptQ3VWNU9YbmFLV1o5YjdkRWR2cWx5OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4UTBRTHZEQlJINzMxdDliUUltcXhjdVpUMklobmJvUm9IU1VHL29RZUNQVUZaTVgrNXBWdTdZN0FyMVl4aGZkZnhOTURpcFlxM3BKUzdPTkpCbGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiQlFlUkk5eG9jVFdIeVBlOGNTY05mNHlZUEZNRWxHVElvK0t4WXJraHlRUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiME4yeTF0VlNRcGFQMnpiOTlJNUNvUSIsInBob25lSWQiOiJjNmMyOGQxNC1jZDU0LTRiYzEtODIyNy1mODUxNTc3NjA3YTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1h4b3A2MUI4aXRlYWpib2FhU1FuQWFwRCtNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sd0NHTjhjOGNuRTNHWDNOSDFsWXNUczh4cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJERVZTUEFDRSIsIm1lIjp7ImlkIjoiOTIzMTQ3MTY4MzA5OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qg8m8zJogxpjJkc2iz7vNodafybzMmsmRzaLOt8y9ICAgXG7gvJJcbiAg4LySICBcbuC8kiBcbiDgvJJcbuC8klxuICDgvJIgIFxu4LySIiwibGlkIjoiMjc1ODU3ODEzODExMzM2OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJWFZtZVFDRUllQm1jZ0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0eXl6Rms5b2UzUkV2QVR3MGFOeWRYckFvU1Rockl5V1hqY2w3Q3B3U21BPSIsImFjY291bnRTaWduYXR1cmUiOiJPbDdGRTYxMWVObVZoUnVKQThhZkxZcVlFYi9kWUpFbitrZXpvKys1UkRUc0tMdFplTU4wSVVrN0dCUzl3TENZZHpzeWxTK1RreWlEK3dwVkdKWHRCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWDJISEc5bmhUUFNZeG5LYVBEZmNvRHlTYXFRNGEwVi9sRmEvWkdBQ00yYUMvaGdJQXZody9xVG9WaHliSERjUDZnb05ZMjhKa0toSlNoUGw2Rkh2Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDcxNjgzMDk6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTXNzeFpQYUh0MFJMd0U4TkdqY25WNndLRWs0YXlNbGw0M0pld3FjRXBnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjIwMTc0MTl9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KAMRAN-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/so68jp.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KAMRAN-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "KAMRAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92195068309",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "KAMRAN-MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 KAMRAN-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/so68jp.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *KAMRAN-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923195068309",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
