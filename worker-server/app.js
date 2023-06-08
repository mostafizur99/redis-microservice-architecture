import { redisChannel } from "./configs.js";
import { expensiveWorker } from "./helper.js";
import { redisClient } from "./redis.js";

const main = async () => {
  const subscriber = redisClient.duplicate();
  subscriber.connect();

  subscriber.on("error", (err) => {
    console.log("\n redis connection error:", err);
  });

  subscriber.on("connect", () => {
    console.log("\n redis connected.");
  });

  subscriber.on("ready", () => {
    console.log("\n  ✔ redis subscriber is ready.");

    subscriber.subscribe(redisChannel, async (techName) => {
      console.log(`\n techName from worker service: ${techName}`);
      // call the task worker function listening from channel
      await expensiveWorker(techName);
    });
  });
};

main();
