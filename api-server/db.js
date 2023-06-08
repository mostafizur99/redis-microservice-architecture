import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

export const addListToDB = async (text) => {
  const query = `INSERT INTO ${sqlTable} (text) VALUES ('${text}')`;
  const connection = await mysql.createConnection(dbConfigs);
  await connection.execute(query);
  await connection.end();
};

export const getListFromDB = async (text) => {
  const query = `SELECT * FROM ${sqlTable}`;
  const connection = await mysql.createConnection(dbConfigs);
  const [data, _] = await connection.execute(query);
  await connection.end();
  return data;
};
