import { addListToDB } from "./db.js";
import { deleteTechFromCache } from "./redis.js";

// the task worker from redis channel
export const expensiveWorker = async (techName) => {
  try {
    const techAnalysis = getTechPriority(techName);
    await addListToDB(techAnalysis);
    await deleteTechFromCache();
  } catch (error) {
    console.log("error", error);
  }
};

export const getTechPriority = (text) => {
  let result = "low";
  const iterations = 1000000000;
  // demo time-consuming calculation
  for (let i = 0; i < iterations; i++) {
    result = Math.random() > 0.5 ? "high" : "low";
  }
  return `${text} - priority (${result})`;
};
