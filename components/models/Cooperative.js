import mongoose from "mongoose";

const CooperativeModel = new mongoose.Schema({
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

export default mongoose.models.Cooperatives ||
  mongoose.model("Cooperatives", CooperativeModel);
