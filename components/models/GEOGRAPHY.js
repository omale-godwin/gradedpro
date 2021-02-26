import mongoose from "mongoose";

const GEOGRAPHYModel = new mongoose.Schema({
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

export default mongoose.models.GEOGRAPHYS ||
  mongoose.model("GEOGRAPHYS", GEOGRAPHYModel);
