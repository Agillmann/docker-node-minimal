
const express = require('express')
const app = express()
const connectDb = require("./src/connection");
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/test', function (req, res) {
  res.send('ta')
})

app.get("/users", (req, res) => {
  res.send("Get users \n");
});

app.get("/user-create", (req, res) => {
  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
