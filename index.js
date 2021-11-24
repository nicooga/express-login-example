const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post("/login", (req, res) => {
  if (
    req.body.nickname == 'ichigo' &&
    req.body.password == '123123'
  ) {
    res.cookie("userId", 2);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get("/profile", (req, res) => {
  if (req.cookies["userId"] !== undefined) {

  } else {

  }
});

app.listen(3000);