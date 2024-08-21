// const express = require("express"),
//   router = express.Router();

// router.get("/", (req, res) => {
//   res.render("pages/dashboard/index");
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const path = require("path");
const { route } = require("../../app");

router.get("/", (req, res) => {
  res.render("pages/dashboard/index");
});

//Open a popup to create a new snippet
router.get("/new", (req, res) => {
  // res.render("pages/dashboard/index");
  res.send("pop up opened for new snippet");
});

// Create a new popup and show all popups
router.post("/dashboard", (res, req) => {
  res.render("pages/dashboard/index");
});

// Show a single popup
router.get("/dasboard/:id", (req, res) => {
  // res.render("pages/dashboard/index");
  // res.send("I am asigle popup");
  const id = req.params.id;

  res.send("hii");
});

// Delete a single popup
router.delete("/dashboard/:id", (req, res) => {});
module.exports = router;
