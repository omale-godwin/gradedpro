import mongoose from "mongoose";

const Computermodel = new mongoose.Schema({
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
  mongoose.model("architects", Computermodel);
