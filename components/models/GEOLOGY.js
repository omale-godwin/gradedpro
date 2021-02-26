import mongoose from "mongoose";

const GEOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.GEOLOGYS ||
  mongoose.model("GEOLOGYS", GEOLOGYModel);
