const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1198466129664950374/1219138804821135431/chibix.gif?ex=660a367d&is=65f7c17d&hm=d10da8f979090ef0f8896d9a92bb1569bfafa3c657203efb2bd491543ed19bfb&=&width=242&height=242',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138805202813018/dance.gif?ex=660a367d&is=65f7c17d&hm=ca4f7dc9e1db730a6d38d7d56c891491a23fb9a9d9fca8f8ad4ce5a2c10faf4a&=&width=242&height=136',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138805538230282/okok.gif?ex=660a367d&is=65f7c17d&hm=9d6c23278ad889a7c9afbcb869815e43c643328352f3d818063ef64351949762&=&width=242&height=242',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138805869711370/whatdahall.gif?ex=660a367d&is=65f7c17d&hm=8f9e0746ee9fc169412961f4d7f329291c974411f518e3b17a98f365f591279e&=&width=242&height=242',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138806603710567/hairxd.gif?ex=660a367d&is=65f7c17d&hm=800195b065ea93e8371d40a7542bcc24e91f0b9464daf3e7f1527bd3c6a9609d&=&width=242&height=107',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138806968488026/dedx.gif?ex=660a367e&is=65f7c17e&hm=3bd341ede54e54cd0d9caf1523c9025da3d33459be339190d3c4afb45abc58c2&=&width=242&height=176',
    'https://media.discordapp.net/attachments/1198466129664950374/1219138807354495056/xdxasd.gif?ex=660a367e&is=65f7c17e&hm=f79173c18380baed33392db0c6119638cbd6e8979513adc2a9dde1c327ff5b8e&=&width=242&height=141'
    // Add more large image URLs as needed
];

const stateTexts = [
    'ﮩ٨ـﮩﮩ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับกดเเอพพรีเมียม ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันดักซอง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ٨มีเเจกของฟรี 100+ ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ มีบอทให้ใช้ฟรี ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันเม็ดม่วง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันดักซอง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับบูสดิสราคาถูก ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รหัสติดไนโตรถูกๆ ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ'
    // Add more state texts as needed
];

const nameTexts = [
    'ﮩ٨ـﮩﮩ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับกดเเอพพรีเมียม ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันดักซอง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ٨มีเเจกของฟรี 100+ ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ มีบอทให้ใช้ฟรี ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันเม็ดม่วง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันดักซอง ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับบูสดิสราคาถูก ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รหัสติดไนโตรถูกๆ ﮩ٨ـﮩﮩ',
    'ﮩ٨ـﮩﮩ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ'
    // Add more state texts as needed
];

let currentStateIndex = 0; // Index to track the current state text

let currentLargeImageIndex = 0;

let currentnameTextsIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

        const r = new Discord.RichPresence()
            .setApplicationId('1121867777867788309')
            .setType('STREAMING')
            .setURL('https://www.youtube.com/watch?v=MoN9ql6Yymw')
            .setState(stateTexts[currentStateIndex])
            .setName(nameTexts[currentnameTextsIndex])
            .setDetails(` ≽ ^ • ⩊ • ^ ≼ `)
            .setStartTimestamp(startedAt)
            .setAssetsLargeText(`┆ ʚ📅 ${currentDate} ♡ ⌚${currentTime}ɞ ┆`)
            .setAssetsLargeImage(largeImages[currentLargeImageIndex])
            .setAssetsSmallText('A$t๏r 🖤')
            .addButton('เข้าดิส', 'https://discord.gg/charlisy');


        client.user.setActivity(r);

        currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
        currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
        currentnameTextsIndex = (currentnameTextsIndex + 1) % nameTexts.length;
    }, 2500); // Change large image and state text every 1 second
});

function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}

client.login(process.env.token);
