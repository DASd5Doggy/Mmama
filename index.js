const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/917039007899213854/1235080160420560987/wsasd.gif?ex=66331188&is=6631c008&hm=72f4b0a2777f704c76edf2bca195067df10320e77835ba8536dc345fefea64f8&=',
    'https://media.discordapp.net/attachments/917039007899213854/1235080160886259762/asdadd5.gif?ex=66331189&is=6631c009&hm=906d5c339e623ae0a3e6ad47cbc140f10e478c1add915247d454a4e3a0b1a3cc&='
    // Add more large image URLs as needed
];

const stateTexts = [
    '‧⁺˚*･༓☾รับรันบอทราคาถูก☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับกดเเอพพรีเมียม☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันดักซอง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾มีเเจกของฟรี 100+☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾มีบอทให้ใช้ฟรี☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันเม็ดม่วง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันดักซอง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับบูสดิสราคาถูก☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รหัสติดไนโตรถูกๆ☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันบอทราคาถูก☽༓･*˚⁺‧'
    // Add more state texts as needed
];

const nameTexts = [
    '‧⁺˚*･༓☾รับรันบอทราคาถูก☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับกดเเอพพรีเมียม☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันดักซอง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾มีเเจกของฟรี 100+☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾มีบอทให้ใช้ฟรี☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันเม็ดม่วง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันดักซอง☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับบูสดิสราคาถูก☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รหัสติดไนโตรถูกๆ☽༓･*˚⁺‧',
    '‧⁺˚*･༓☾รับรันบอทราคาถูก☽༓･*˚⁺‧'
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
            .setURL('https://www.youtube.com/watch?v=1TsVjvEkc4s')
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
