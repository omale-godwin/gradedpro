import mongoose from "mongoose";

const PHYSICSModel = new mongoose.Schema({
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

export default mongoose.models.PHYSICS ||
  mongoose.model("PHYSICS", PHYSICSModel);
