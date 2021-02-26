import mongoose from "mongoose";

const HISTORYModel = new mongoose.Schema({
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

export default mongoose.models.HISTORY ||
  mongoose.model("HISTORY", HISTORYModel);
