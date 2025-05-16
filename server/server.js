const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
