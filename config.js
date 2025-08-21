// ⛧▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰⛧
// ⛧ 𝐃𝐀𝐑𝐊 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐓𝐈𝐎𝐍 𝐅𝐎𝐑 𝐗𝐄𝐉𝐈𝐍 ⛧
// ⛧▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰⛧

const darkConfig = {
  // ⛧ 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐍𝐅𝐈𝐆
  owners: [
  {
    "name": "⛧KING⛧",
    "number": "918108742384",
    "isPrimary": true,
    "socials": {
      "instagram": "https://www.instagram.com/heukjin143",
      "discord": "𝐃𝐢𝐬𝐜𝐨𝐫𝐝: Heukjin#6666"
    }
  }
],

  // ⛧ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐏𝐑𝐄𝐅𝐈𝐗𝐄𝐒
  prefix: ["⛧",".","!","#","/"],
  
  // ⛧ 𝐒𝐎𝐂𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀
  socialMedia: {
    instagram: "https://www.instagram.com/heukjin143",
    discord: "𝐃𝐢𝐬𝐜𝐨𝐫𝐝: Heukjin#6666",
    github: "https://github.com/xejin-bot"
  },

  // ⛧ 𝐁𝐎𝐓 𝐈𝐃𝐄𝐍𝐓𝐈𝐓𝐘
  name: "⛧ 𝐗𝐄𝐉𝐈𝐍 𝐓𝐇𝐄 𝐃𝐀𝐌𝐍𝐄𝐃 ⛧",
  version: "𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟔𝟔𝟔.𝟔𝟔",
  description: "⛧ 𝐈 𝐝𝐨 𝐧𝐨𝐭 𝐛𝐞𝐥𝐨𝐧𝐠 𝐡𝐞𝐫𝐞... 𝐬𝐢𝐥𝐞𝐧𝐜𝐞 𝐜𝐚𝐥𝐥𝐬, 𝐚𝐧𝐝 𝐈 𝐚𝐧𝐬𝐰𝐞𝐫 ⛧"
};

// ⛧ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐂𝐎𝐍𝐅𝐈𝐆 (Defined AFTER socialMedia)
darkConfig.messages = {
  owner: "⛧ 𝐓𝐡𝐞 𝐯𝐨𝐢𝐜𝐞𝐬 𝐰𝐡𝐢𝐬𝐩𝐞𝐫... 𝐨𝐧𝐥𝐲 𝐦𝐲 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 𝐦𝐚𝐲 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 ⛧",
  error: "⚰ 𝐓𝐡𝐞 𝐝𝐚𝐫𝐤𝐧𝐞𝐬𝐬 𝐫𝐞𝐣𝐞𝐜𝐭𝐞𝐝 𝐲𝐨𝐮𝐫 𝐩𝐥𝐞𝐚...",
  banned: "⛧ 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐛𝐚𝐧𝐢𝐬𝐡𝐞𝐝 𝐟𝐫𝐨𝐦 𝐭𝐡𝐢𝐬 𝐫𝐞𝐚𝐥𝐦 𝐨𝐟 𝐬𝐡𝐚𝐝𝐨𝐰𝐬 ⛧",
  
  socials: `
⛧ 𝐃𝐀𝐑𝐊 𝐏𝐎𝐑𝐓𝐀𝐋𝐒 ⛧
⚰ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: ${darkConfig.socialMedia.instagram}
☠ 𝐃𝐢𝐬𝐜𝐨𝐫𝐝: ${darkConfig.socialMedia.discord}
⚰ 𝐆𝐢𝐭𝐇𝐮𝐛: ${darkConfig.socialMedia.github}
  `,
  
  maintenance: "⛧ 𝐓𝐡𝐞 𝐚𝐛𝐲𝐬𝐬 𝐢𝐬 𝐮𝐧𝐝𝐞𝐫 𝐫𝐞𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧... ⛧",
  cooldown: "⚰ 𝐓𝐡𝐞 𝐯𝐨𝐢𝐝 𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐬 𝐩𝐚𝐭𝐢𝐞𝐧𝐜𝐞... 𝐰𝐚𝐢𝐭 {time}𝐬"
};

// ⛧ 𝐁𝐀𝐂𝐊𝐖𝐀𝐑𝐃 𝐂𝐎𝐌𝐏𝐀𝐓𝐈𝐁𝐈𝐋𝐈𝐓𝐘
darkConfig.owner = darkConfig.owners.map(o => o.number.replace(/\D/g, ''));

// ⛧ 𝐄𝐗𝐏𝐎𝐑𝐓 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊𝐍𝐄𝐒𝐒
export default darkConfig;
