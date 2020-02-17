const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const uri = "mongodb://mongo:27017/mongo-test";
var dbConnect = false;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    dbConnect = true;
    console.log("Connected to mongoDB");
  })
  .catch(e => {
    console.log("Error while DB connecting");
    console.log(e);
  });

app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.get("/test", function(req, res) {
  res.send("ta");
});

app.get("/users", (req, res) => {
  res.send("Get users \n");
});

app.get("/user-create", (req, res) => {
  res.send("User created \n");
});

app.listen(PORT, async function(dbConnect) {
  (await dbConnect)
    ? console.log(`Server listening on port ${PORT}`)
    : console.log(`Server listening on port ${PORT} and MongoDb connected`);
});
