import mongoose from "mongoose";

const Economicmodel = new mongoose.Schema({
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

export default mongoose.models.economics ||
  mongoose.model("economics", Economicmodel);
