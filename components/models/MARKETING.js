import mongoose from "mongoose";

const MARKETINGModel = new mongoose.Schema({
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

export default mongoose.models.MARKETING ||
  mongoose.model("MARKETING", MARKETINGModel);
