import mongoose from "mongoose";

const PUBLICModel = new mongoose.Schema({
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

export default mongoose.models.PUBLICS ||
  mongoose.model("PUBLICS", PUBLICModel);
