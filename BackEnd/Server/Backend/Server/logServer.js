const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const connectDb = require("../DataBase/logDB");

// const userLog = require("../Model/userModel");

connectDb();

const port = process.env.MAIN_PORT || 9897;

app.use(express.json());

app.use("/user/log", require("../Routes/route"));

app.listen(port, () => {
  console.log(`Yup Server running on PORT:${port}`);
});
