import mongoose from "mongoose";

const THEATREModel = new mongoose.Schema({
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

export default mongoose.models.THEATRE ||
  mongoose.model("THEATRE", THEATREModel);
