import mongoose from "mongoose";

const BIOCHEMISTRYModel = new mongoose.Schema({
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

export default mongoose.models.BIOCHEMISTRYs ||
  mongoose.model("BIOCHEMISTRYs", BIOCHEMISTRYModel);
