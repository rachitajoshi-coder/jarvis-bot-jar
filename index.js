const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(async ({ message, say }) => {
  const text = message.text.toLowerCase();

  if (text.includes("leave")) {
    await say("You have 12 Earned Leaves, 8 Sick Leaves and 7 Casual Leaves in a year");

  } else if (text.includes("holiday")) {
    await say("To check your holidays for this calendar year, go to Keka → Home → Dashboard → Holidays");

  } else if (text.includes("salary")) {
    await say("Salary is credited on the last day of the month. In case this day falls on a weekend, then the salary is credited on last weekday before the last day of the month");

} else if (["how are you", "sup", "whatsup", "wasgud"].some(word => text.includes(word))) {
  await say("I'm great, how is your day going?");

  } else {
    await say("Hi, I’m Jarvis! How can I help? Please note: I am still under testing, hold tight!");
  }
});

(async () => {
  await app.start(3000);
  console.log("⚡ Jarvis is running!");
})();