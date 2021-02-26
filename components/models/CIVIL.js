import mongoose from "mongoose";

const CIVILModel = new mongoose.Schema({
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

export default mongoose.models.CIVILS || mongoose.model("CIVILS", CIVILModel);
