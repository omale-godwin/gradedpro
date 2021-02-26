import mongoose from "mongoose";

const ENTREPRENEURSHIPModel = new mongoose.Schema({
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

export default mongoose.models.ENTREPRENEURSHIP ||
  mongoose.model("ENTREPRENEURSHIP", ENTREPRENEURSHIPModel);
