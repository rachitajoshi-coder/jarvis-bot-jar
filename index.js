const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(async ({ message, say }) => {
  await say("Hi, I’m Jarvis 👋");
});

(async () => {
  await app.start(3000);
  console.log("⚡ Jarvis is running!");
})();