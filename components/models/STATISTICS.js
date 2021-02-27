import mongoose from "mongoose";

const STATISTICS = new mongoose.Schema({
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

export default mongoose.models.STATISTICS ||
  mongoose.model("STATISTICS", STATISTICS);
