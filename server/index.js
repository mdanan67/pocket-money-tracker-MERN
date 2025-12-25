import express from "express";
import dotenv from "dotenv";
import { router } from "./router.js";
import bodyParser from "body-parser";

const app = express();
import databaseConnection from "./config/databaseConnection.js";
dotenv.config();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

databaseConnection(process.env.DATABASE_LINK)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.use("/", router);

app.listen(4000, () => {
  console.log("server is running");
});
