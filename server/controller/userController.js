const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const register = async (req, res) => {
  const { username, password } = req.body;
  const user = new userModel({
    username,
    password,
  });

  user
    .save()
    .catch((err) => {
      console.error(err);
      res.status(401).send("gagal mengupload data");
    })
    .then(() => {
      res.status(200).send("OK");
    });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  let user;
  await userModel
    .findOne({ username })
    .then((users) => {
      if (users) {
        user = users;
      } else res.status(404).send("user tidak ditemukan");
    })
    .catch((err) => {
      console.error(err);
      res.status(401).send("server sedang offline");
    });

  if (user.username == username && user.password == password) {
    const token = jwt.sign({ username }, "secret", {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .status(200)
      .send("OK");
  } else {
    res.status(401).send("pastikan data anda sudah benar");
  }
};
const deleteUser = async (req, res) => {
  const { username, password } = req.body;

  await userModel
    .findOneAndDelete({ username, password })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      res.status(200).send("sukses menghapus user");
    });
};

module.exports = { login, register, deleteUser };
