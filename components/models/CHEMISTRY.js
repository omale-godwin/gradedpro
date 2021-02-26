import mongoose from "mongoose";

const CHEMISTRYModel = new mongoose.Schema({
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

export default mongoose.models.CHEMISTRYs ||
  mongoose.model("CHEMISTRYs", CHEMISTRYModel);
