import mongoose from "mongoose";

const BUSINESSModel = new mongoose.Schema({
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

export default mongoose.models.BUSINESS ||
  mongoose.model("BUSINESS", BUSINESSModel);
