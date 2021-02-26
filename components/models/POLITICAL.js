import mongoose from "mongoose";

const POLITICALModel = new mongoose.Schema({
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

export default mongoose.models.POLITICALS ||
  mongoose.model("POLITICALS", POLITICALModel);
