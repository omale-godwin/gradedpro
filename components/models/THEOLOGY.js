import mongoose from "mongoose";

const THEOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.THEOLOGY ||
  mongoose.model("THEOLOGY", THEOLOGYModel);
