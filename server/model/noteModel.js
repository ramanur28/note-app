const mongoose = require("mongoose");
const schema = mongoose.Schema;

const noteSchema = new schema({
  judul: String,
  isi: String,
});

module.exports = mongoose.model("note", noteSchema);
