import mongoose from "mongoose";

const SECREATARIALModel = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },

  id: {
    type: Number,
  },
});

export default mongoose.models.SECREATARIAL ||
  mongoose.model("SECREATARIAL", SECREATARIALModel);
