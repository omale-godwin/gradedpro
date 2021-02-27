import mongoose from "mongoose";

const VETERINARYModel = new mongoose.Schema({
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

export default mongoose.models.VETERINARY ||
  mongoose.model("VETERINARY", VETERINARYModel);
