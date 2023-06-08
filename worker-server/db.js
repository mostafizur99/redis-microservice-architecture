import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

// insert a list to mysql db
export const addListToDB = async (text) => {
  const query = `INSERT INTO ${sqlTable} (text) VALUES ('${text}')`;
  const connection = await mysql.createConnection(dbConfigs);
  await connection.execute(query);
  await connection.end();
};
