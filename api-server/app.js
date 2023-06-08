import express from "express";
import cors from "cors";
import { PORT } from "./configs.js";
import {
  addTechToCache,
  deleteTechFromCache,
  getTechFromCache,
  publishNews,
} from "./redis.js";
import { addListToDB, getListFromDB } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/' health check
app.get("/", (_, res) => res.send("OK!"));

// '/get' get all lists
app.get("/get", async (_, res) => {
  const cachedTechList = await getTechFromCache();
  if (!cachedTechList) {
    const list = await getListFromDB();
    res.status(200).send({ isCached: false, data: list });
    return await addTechToCache(list);
  }
  res.status(200).send({ isCached: true, data: cachedTechList });
});

// '/create' create tech lists
app.post("/create", async (req, res) => {
  try {
    const { text } = req.body;
    console.log("input text:", text);
    // await addListToDB(text);
    // await deleteTechFromCache();
    await publishNews(text); // publish task to a redis channel
    res.status(201).send({ message: "Tech List created successfully" });
  } catch (error) {
    console.log("create tech error==>", error);
    res.status(500).send({ message: error?.message || "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
