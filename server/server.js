const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const http = require("http");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.get("/", (req, res) => {
  res.send("API is working");
});
// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "*" }, // adjust origin in production
});

// Socket.IO event handling
io.on("connection", (socket) => {
  console.log(`🟢 New client connected [id=${socket.id}]`);

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    // Broadcast the message to all clients
    io.emit("message", msg);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log(`🔴 Client disconnected [id=${socket.id}]`);
  });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
