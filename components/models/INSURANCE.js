import mongoose from "mongoose";

const INSURANCEModel = new mongoose.Schema({
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

export default mongoose.models.INSURANCE ||
  mongoose.model("INSURANCE", INSURANCEModel);
