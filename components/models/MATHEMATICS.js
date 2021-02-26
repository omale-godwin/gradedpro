import mongoose from "mongoose";

const MATHEMATICSModel = new mongoose.Schema({
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

export default mongoose.models.MATHEMATICS ||
  mongoose.model("MATHEMATICS", MATHEMATICSModel);
