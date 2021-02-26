import mongoose from "mongoose";

const BUILDINGModel = new mongoose.Schema({
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

export default mongoose.models.BUILDINGs ||
  mongoose.model("BUILDINGs", BUILDINGModel);
