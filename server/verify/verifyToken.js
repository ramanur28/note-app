const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

module.exports = async (req, res, next) => {
  let decoded;
  if (req.cookies.token) {
    let token = req.cookies.token;
    jwt.verify(token, "secret", (err, user) => {
      if (err) {
        return res.status(401).send("token tidak valid");
      }
      decoded = user;
    });
  } else {
    return res.status(401).send("silahkan login dulu");
  }

  if (decoded) {
    await userModel
      .findOne({ username: decoded.username })
      .then((User) => {
        let newToken = jwt.sign({ username: User.username }, "secret", {
          expiresIn: "1h",
        });
        req.newToken = newToken;
        next();
      })
      .catch((err) => {
        return res.status(404).send("user tidak ditemukan");
      });
  }
};
