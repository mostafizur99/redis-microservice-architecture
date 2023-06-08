import dotenv from "dotenv";
dotenv.config();

// port config
export const PORT = process.env.PORT || 5000;

// db configs
const sqlHost = process.env.MYSQL_HOST || "localhost";
const sqlUser = process.env.MYSQL_USERNAME || "root";
const sqlPassword = process.env.MYSQL_PASSWORD || "mypassword";
const sqlDatabase = process.env.MYSQL_DATABASE || "projectdb";
export const sqlTable = process.env.MYSQL_TABLE || "techlist";

export const dbConfigs = {
  host: sqlHost,
  user: sqlUser,
  password: sqlPassword,
  database: sqlDatabase,
};

// redis configs
const redisUsername = process.env.REDIS_USERNAME || "user";
const redisPassword = process.env.REDIS_PASSWORD || "mypassword";
const redisHost = process.env.REDIS_HOST || "127.0.0.1";
const redisPort = process.env.REDIS_PORT || 6379;
export const redisChannel = process.env.REDIS_CHANNEL || "channel1";
export const redisCacheName = process.env.REDIS_CACHE || "techlist";

export const redisConfigs = {
  // username: redisUsername,
  // password: redisPassword,
  host: redisHost,
  port: redisPort,
};
