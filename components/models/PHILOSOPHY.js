import mongoose from "mongoose";

const PHILOSOPHYModel = new mongoose.Schema({
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

export default mongoose.models.PHILOSOPHY ||
  mongoose.model("PHILOSOPHY", PHILOSOPHYModel);
