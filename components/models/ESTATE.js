import mongoose from "mongoose";

const ESTATEModel = new mongoose.Schema({
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

export default mongoose.models.ESTATE || mongoose.model("ESTATE", ESTATEModel);
