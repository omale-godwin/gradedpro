import mongoose from "mongoose";

const SLTModel = new mongoose.Schema({
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

export default mongoose.models.SLT || mongoose.model("SLT", SLTModel);
