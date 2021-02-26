import mongoose from "mongoose";

const HUMANModel = new mongoose.Schema({
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

export default mongoose.models.HUMAN || mongoose.model("HUMAN", HUMANModel);
