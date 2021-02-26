import mongoose from "mongoose";

const FOODModel = new mongoose.Schema({
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

export default mongoose.models.FOOD || mongoose.model("FOOD", FOODModel);
