import mongoose from "mongoose";

const CHEMICALModel = new mongoose.Schema({
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

export default mongoose.models.CHEMICALs ||
  mongoose.model("CHEMICALs", CHEMICALModel);
