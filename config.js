
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlJc25NL0ppSFFQUVIrMFY3ak5mZnlMWXMrSDhUVlczUHlHVUxraUtWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjVzTzk5d2V4d1JJWDRtL091ZkpKYlNsYVhvemoxOCtzTHdldnNQYWdXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRHRMY1I0VENEYlpsL1UwYStCSi9CSnp5V3pMNVVRRlRXLzlaVlpJeG5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXalFna2llY2JEZlFPOE5rSjhacjJsK1kzWjFleWsrVSt3L0RmZE9NRXpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGUGFBditwUDBBaGdhemlIa0hZSnU2M0xtTitQcjdCRCtSTWZRdmxNbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJseXBHV3FEY0U0a1g4Q0VpcFJmeWJXZGxUTVhhWS9LNFVDVFk5N3hxQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJxd2lVOHBGV3JTYTFHOXgwbmJYVnFPd3NZMWdrUlVXTlc3S281MTRYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVRUZ0NBSlhWcFFrblhpeVdTY2p0VTk1WGdDUWNEU05oZ3l0bWZXK3ptQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd0RFJEa2xhZFRyVjFQc0RkQ01mdExmODJiWEwrOXNsak1hTzR4VW92amxydkMzNm1GQjUwZ0hoOTExWjZGZ05lbVN1dnQreGJHRW1mTVFScEtZcENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6InovU3g5aWIxajhWV3BKMm5mVDJGSUhSdFRLeiswTUw2eStKcFd2RmUrZXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTc1ODQ4Njg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyQkZEQ0IyQzA5MUU2MDJFNTYyQThCN0E0QkFDNjIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxNDc0Mjl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE3NTg0ODY4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEODJGN0UzMDM0MkEyM0E0RTEzQUJENDhDOEQ5MjI3QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTQ3NDI5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpR1E3Wi05YVJJT2tuUldDSkJONjVBIiwicGhvbmVJZCI6ImE0NzYyZDkwLTliMzYtNGEyMy1iYTc4LWY1ZTFhM2NmZGJlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxQ2N1UVB6QjliL1EzUUxVZytWSmVCT3VoQU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekl1b1VXejBwSXQ5NTBEMzRUZlZvQk9vdEdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM1TkZWWUMxIiwibWUiOnsiaWQiOiI5MjMxNzU4NDg2ODg6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5G/TVVaQU1JTCBaQUtITUnwn5G/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLVHE1TDBDRU5iRWw3VUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1MUdsY1h0akdkUjlOTmpSSUVXS2R3d2lWRDFSOHpZYW5VUDNZR2lMSFFNPSIsImFjY291bnRTaWduYXR1cmUiOiJYcG1uelpuRG05SHZiQ1RmRGd1VkNvNGtsQ3d1R1VMY1VXTTRpOVF4SHRWalozK0ZUbjRuT25ZM3dXM2xWNUhXcU11cmpseklEOG93ZUdLMGszWmRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicHVFV29LTXZTeTdrUlFTSDdjOVRpc2NFU1Y1T1cxMDM5WUxPRXFVWVl6b1I5SzBNMlpvTHNIT0tWWGh3bHlrNVphSWZuMXRaNWtWZGJpaTZQaXJ1REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNzU4NDg2ODg6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJidFJwWEY3WXhuVWZUVFkwU0JGaW5jTUlsUTlVZk0yR3AxRDkyQm9peDBEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTQ3NDI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkrbiJ9;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
