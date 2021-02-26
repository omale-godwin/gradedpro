import mongoose from "mongoose";

const ELECTRICALModel = new mongoose.Schema({
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

export default mongoose.models.ELECTRICAL ||
  mongoose.model("ELECTRICAL", ELECTRICALModel);
