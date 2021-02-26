import mongoose from "mongoose";

const LINGUISTICSModel = new mongoose.Schema({
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

export default mongoose.models.LINGUISTICS ||
  mongoose.model("LINGUISTICS", LINGUISTICSModel);
