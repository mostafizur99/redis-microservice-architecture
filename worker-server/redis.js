import { redisCacheName, redisConfigs } from "./configs.js";
import { createClient } from "redis";

// create redis client
export const redisClient = createClient(redisConfigs);

// delete cache from redis
export const deleteTechFromCache = async () => {
  await redisClient.connect();
  await redisClient.del(redisCacheName);
  await redisClient.disconnect();
};
