import mongoose from "mongoose";

const AppliedScienceModel = new mongoose.Schema({
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

export default mongoose.models.appliiedsciences ||
  mongoose.model("appliiedsciences", AppliedScienceModel);
