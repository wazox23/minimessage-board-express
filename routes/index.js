var express = require("express");
var router = express.Router();
const messagesModule = require("../routes/messages");
const messages = messagesModule.messages;

/* GET home page. */
router.get("/", function (res) {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
});

router.get("/new", function (res) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
