import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

// insert a list to mysql db
export const addListToDB = async (text) => {
  const query = `INSERT INTO ${sqlTable} (text) VALUES ('${text}')`;
  const connection = await mysql.createConnection(dbConfigs);
  await connection.execute(query);
  await connection.end();
};

// get all lists from mysql db
export const getListFromDB = async (text) => {
  const query = `SELECT * FROM ${sqlTable}`;
  const connection = await mysql.createConnection(dbConfigs);
  const [data, _] = await connection.execute(query);
  await connection.end();
  return data;
};
