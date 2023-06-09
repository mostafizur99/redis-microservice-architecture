import { createClient } from "redis";
import { redisCacheName, redisChannel, redisConfigs } from "./configs.js";

// create redis client
const redisClient = createClient(redisConfigs);

// add redis cache
export const addTechToCache = async (tech) => {
  await redisClient.connect();
  await redisClient.set(redisCacheName, JSON.stringify(tech));
  await redisClient.disconnect();
};

// get cache from redis
export const getTechFromCache = async () => {
  await redisClient.connect();
  const cachedTechString = await redisClient.get(redisCacheName);
  await redisClient.disconnect();
  return JSON.parse(cachedTechString);
};

// delete cache from redis
export const deleteTechFromCache = async () => {
  await redisClient.connect();
  await redisClient.del(redisCacheName);
  await redisClient.disconnect();
};

// publish to a redis channel (worker-server)
export const publishTech = async (tech) => {
  await redisClient.connect();
  await redisClient.publish(redisChannel, tech);
  await redisClient.disconnect();
};
