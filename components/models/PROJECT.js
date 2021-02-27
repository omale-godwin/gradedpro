import mongoose from "mongoose";

const PROJECTModel = new mongoose.Schema({
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

export default mongoose.models.PROJECT ||
  mongoose.model("PROJECT", PROJECTModel);
