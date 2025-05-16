const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.get("/", (req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
