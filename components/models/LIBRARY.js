import mongoose from "mongoose";

const LIBRARYModel = new mongoose.Schema({
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

export default mongoose.models.LIBRARY ||
  mongoose.model("LIBRARY", LIBRARYModel);
