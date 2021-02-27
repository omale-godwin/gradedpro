import mongoose from "mongoose";

const TRANSPORTModel = new mongoose.Schema({
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

export default mongoose.models.TRANSPORT ||
  mongoose.model("TRANSPORT", TRANSPORTModel);
