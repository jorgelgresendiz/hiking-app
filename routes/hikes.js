var express = require("express");
var router = express.Router();
var hikesCtrl = require("../controllers/hikes");

/* GET all hikes that are added */
router.get("/", hikesCtrl.index);

/*  create a new hike and redirect to all hikes */
router.post("/", isLoggedIn, hikesCtrl.create);

/* GET and delete a specificied hike */
router.delete("/:id", isLoggedIn, hikesCtrl.deleteHike);

// CRUD-less route take to new page to create hike
router.get("/new", hikesCtrl.newHike);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

/* GET and add a review to a specific hike */
router.get("/:id/reviews", hikesCtrl.show);

module.exports = router;
