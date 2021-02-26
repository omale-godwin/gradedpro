import mongoose from "mongoose";

const COMMERCEModel = new mongoose.Schema({
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

export default mongoose.models.COMMERCES ||
  mongoose.model("COMMERCES", COMMERCEModel);
