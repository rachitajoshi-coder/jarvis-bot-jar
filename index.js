const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(async ({ message, say, client }) => {
  const text = message.text?.toLowerCase();

  if (message.subtype || message.bot_id) {
    return;
  }

  const bannedWords = ["shit", "fuck", "bitch", "asshole", "ass hole","ass","gandu","chod"];
  const hasBadWord = bannedWords.some(word => text.includes(word));

  if (hasBadWord) {
    await say("⚠️ Please avoid using inappropriate language.");

    await client.chat.postMessage({
      channel: "U0AQL0W10NB",
      text: `🚨 Alert: <@${message.user}> used inappropriate language: "${message.text}"`
    });

    return; 
  }

  if (text.includes("leave")) {
    await say("You have 12 Earned Leaves, 8 Sick Leaves and 7 Casual Leaves in a year");

  } else if (text.includes("holiday")) {
    await say("To check your holidays for this calendar year, go to Keka → Home → Dashboard → Holidays");

  } else if (text.includes("salary")) {
    await say("Salary is credited on the last day of the month. In case this day falls on a weekend, then the salary is credited on last weekday before the last day of the month");

  } else if (["how are you", "sup", "whatsup", "wasgud"].some(word => text.includes(word))) {
    await say("I'm great, how is your day going?");

  } else if (["thanks", "thank you"].some(word => text.includes(word))) {
    await say("You're welcome! Have a nice day :)");

  } else if (["about jar", "about the company", "about our company"].some(word => text.includes(word))) {
    await say("Jar is a popular Indian fintech app that helps users automatically save money and invest in 24-karat digital gold, starting from as low as ₹10. Founded in 2021 by Misbah Ashraf and Nishchay AG, it targets financial inclusion by automating daily savings, allowing users to invest spare change via UPI, and securing the gold through insurers like ICICI Lombard.");

  } else if (text.includes("bye")) {
    await say("Bye! Until next time.");

} else if (text.includes("tell me a joke")) {
await say (`Why don't scientists trust atoms? 
Because they make up everything!! 🤥
Wanna hear another one? Say "tell me another one"`);

} else if (text.includes("tell me another one")) {
await say ("What did the tree say to the lumberjack?
I'm falling for you 🌲❤️")) 

  } else {
    await say("Hi, I’m Jarvis! How can I help? Please note: I am still under testing, hold tight!");
  }
});

(async () => {
  await app.start(3000);
  console.log("⚡ Jarvis is running!");
})();