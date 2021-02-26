import mongoose from "mongoose";

const AGRICULTURALModel = new mongoose.Schema({
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

export default mongoose.models.AGRICULTURALS ||
  mongoose.model("AGRICULTURALS", AGRICULTURALModel);
