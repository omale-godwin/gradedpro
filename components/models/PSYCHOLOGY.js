import mongoose from "mongoose";

const PSYCHOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.PSYCHOLOGY ||
  mongoose.model("PSYCHOLOGY", PSYCHOLOGYModel);
