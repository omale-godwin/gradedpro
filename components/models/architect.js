import mongoose from "mongoose";

const ArchitechMdel = new mongoose.Schema({
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

export default mongoose.models.architects ||
  mongoose.model("architects", ArchitechMdel);
