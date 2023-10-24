const express = require("express");
const router = express.Router();
const note = require("../controller/noteController");
const user = require("../controller/userController");
const verifyToken = require("../verify/verifyToken");

router.get("/", (req, res) => {
  res.send("welcome!");
});

router.get("/note", verifyToken, note.getNote);

router.post("/create", verifyToken, note.createNote);

router.put("/update", verifyToken, note.updateNote);

router.delete("/delete", verifyToken, note.deleteNote);

// sign router
router.post("/register", user.register);
router.post("/login", user.login);
router.delete("/delete-user", user.deleteUser);

// token
router.get("/verify", verifyToken);

module.exports = router;
