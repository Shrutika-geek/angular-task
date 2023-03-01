const express = require("express");
const routing = express.Router();
const book = require("../services/details");

//-------------------------------------------

routing.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

//fetch all book list
routing.get("/getBooks", (req, res) => {
  result = retrieveBooks();
  console.log(result);
  res.json(result);
});

//fetch book by id
routing.get("/getBooks/:bookId", (req, res) => {
  id = req.params.bookId;
  result = book.retrieveBookDetail(id);
  console.log(id);
  if (result) {
    res.json(result);
  } else res.json("no details");
});

//Add ->post
routing.post("/Book", (req, res) => {
  var BOOK = JSON.stringify(req.body);
  result = book.addBookDetail(BOOK);
  if (result) {
    res.json("successfully added");
  } else {
    res.json("error!");
  }
});

// delete by id
routing.delete("/Book/:bookId", (req, res) => {
  id = req.params.bookId;
  result = book.deleteBookDetail(id);
  if (result) res.json("deleted");
  else res.json("error");
});

module.exports = routing;
