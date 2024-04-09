const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1201892625008037981/1227158192702623784/wiw1.gif?ex=66276320&is=6614ee20&hm=15192ee39ba4a6738a3b08fed2195c65cbd0a44bb4099bf35cdbacdfe89ff0a9&=',
    'https://media.discordapp.net/attachments/1201892625008037981/1227158192316874834/wiw2.gif?ex=66276320&is=6614ee20&hm=070c3f5ce43f3816dbb357a2245aeec4414233bfcdc19f05aeb42bf845feba50&=',
    'https://media.discordapp.net/attachments/1201892625008037981/1227158191888928839/wiw3.gif?ex=66276320&is=6614ee20&hm=c12e67e33444a7896a1947b2a9202555543e35b5ce099fcfb2059bd1645f530d&=',
    'https://media.discordapp.net/attachments/1201892625008037981/1227158191368966164/wiw4.gif?ex=66276320&is=6614ee20&hm=11cb84d26bc24e5a287fcb01c1caf0251e90cd68c7f5611bbc9e518c115a7617&=',
    'https://media.discordapp.net/attachments/1201892625008037981/1227158190995669033/wiw5.gif?ex=66276320&is=6614ee20&hm=5b48ebc6c04201b95678fd9e92f554cf8e46c6363a050e75796f1b04f6ed824c&='
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
