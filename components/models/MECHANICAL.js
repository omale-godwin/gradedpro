import mongoose from "mongoose";

const MECHANICALModel = new mongoose.Schema({
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

export default mongoose.models.MECHANICAL ||
  mongoose.model("MECHANICAL", MECHANICALModel);
