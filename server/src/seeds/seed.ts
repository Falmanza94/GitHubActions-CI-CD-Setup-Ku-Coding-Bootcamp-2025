import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Needed for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the JSON manually
const jsonPath = path.join(__dirname, "pythonQuestions.json");
const pythonQuestions = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

db.once("open", async () => {
  await cleanDB("Question", "questions");

  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
