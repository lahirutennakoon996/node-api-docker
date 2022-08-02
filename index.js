require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const httpPort = process.env.HTTP_PORT;

// Create express server
const server = express();
server.use(cors());
server.use('/api', require("./routes"));

// Connect to database
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.set("debug", JSON.parse(process.env.DATABASE_DEBUG));

// Create http server
http.createServer(server).listen(httpPort, () => {
  console.log(`HTTP server running on port: ${httpPort}`);
});
