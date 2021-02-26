import mongoose from "mongoose";

const FINEARTModel = new mongoose.Schema({
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

export default mongoose.models.FINEART ||
  mongoose.model("FINEART", FINEARTModel);
