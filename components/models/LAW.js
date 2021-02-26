import mongoose from "mongoose";

const LAWModel = new mongoose.Schema({
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

export default mongoose.models.LAW || mongoose.model("LAW", LAWModel);
