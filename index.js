const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(async ({ message, say }) => {
if (message.text.toLowerCase().includes("leave")) {
await say("You have 12 Earned Leaves, 8 Sick Leaves and 7 Casual Leaves in a year");
} else {
await say("Hi, I’m Jarvis! How can I help?");
}
});


(async () => {
  await app.start(3000);
  console.log("⚡ Jarvis is running!");
})();