const { isObjectIdOrHexString } = require("mongoose");
const noteModel = require("../model/noteModel");

const createNote = async (req, res) => {
  const { judul, isi } = req.body;
  const Note = new noteModel({
    judul,
    isi,
  });

  await Note.save()
    .catch((err) => {
      console.error(err);
      res.sendStatus(403);
    })
    .then(() => {
      res
        .cookie("token", req.newToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        })
        .status(200)
        .send("OK");
    });
};

const getNote = async (req, res) => {
  const note = await noteModel.find({}).catch((err) => {
    console.error(err);
    res.status(404).send("tidak dapat menemukan data");
  });
  res
    .cookie("token", req.newToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .send(note);
};

const updateNote = async (req, res) => {
  const { judul, isi, id } = req.body;
  await noteModel
    .findOneAndUpdate({ id: isObjectIdOrHexString }, { judul, isi })
    .catch((err) => {
      console.error(err);
      res.status(404).send("tidak dapat menemukan data");
    })
    .then(
      res
        .cookie("token", req.newToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        })
        .status(200)
        .send("OK")
    );
};

const deleteNote = async (req, res) => {
  const id = req.body.id;
  await noteModel
    .findOneAndDelete({ id: isObjectIdOrHexString })
    .catch((err) => {
      console.error(err);
      res.status(412).send("gagal menghapus data");
    })
    .then(() => {
      res
        .cookie("token", req.newToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        })
        .status(200)
        .send("OK");
    });
};

module.exports = { getNote, createNote, updateNote, deleteNote };
