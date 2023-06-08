import { createClient } from "redis";
import { redisCacheName, redisConfigs } from "./configs.js";

const redisClient = createClient(redisConfigs);

export const addTechToCache = async (tech) => {
  await redisClient.connect();
  await redisClient.set(redisCacheName, JSON.stringify(tech));
  await redisClient.disconnect();
};

export const getTechFromCache = async () => {
  await redisClient.connect();
  const cachedTechString = await redisClient.get(redisCacheName);
  await redisClient.disconnect();
  return JSON.parse(cachedTechString);
};

export const deleteTechFromCache = async () => {
  await redisClient.connect();
  await redisClient.del(redisCacheName);
  await redisClient.disconnect();
};

export const publishNews = async (news) => {
  await redisClient.connect();
  await redisClient.publish(redisChannel, news);
  await redisClient.disconnect();
};
