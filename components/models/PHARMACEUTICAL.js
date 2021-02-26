import mongoose from "mongoose";

const PHARMACEUTICALModel = new mongoose.Schema({
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

export default mongoose.models.PHARMACEUTICAL ||
  mongoose.model("PHARMACEUTICAL", PHARMACEUTICALModel);
