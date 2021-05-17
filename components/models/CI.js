import mongoose from "mongoose";

const CIModel = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.models.CIVILS || mongoose.model("CI", CIModel);
