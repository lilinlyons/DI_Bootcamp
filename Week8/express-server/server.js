const express = require("express");

let users = [
  { name: "John", age: 25 },
  { name: "Anne", age: 22 },
  { name: "Marry", age: 21 },
];

const app = express();

app.listen(5000, () => {
  console.log("run on 5000");
});

// app.get("/", (req, res) => {
//     res.send("i was first");
//   });

// console.log(__dirname+'/public');
app.use("/", express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/users", (req, res) => {
  res.json(users);
});

// app.get("*", (req, res) => {
//   res.send("404 this page no exist");
// });
