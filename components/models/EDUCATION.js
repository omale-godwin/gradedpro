import mongoose from "mongoose";

const EDUCATIONModel = new mongoose.Schema({
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

export default mongoose.models.EDUCATIONS ||
  mongoose.model("EDUCATIONS", EDUCATIONModel);
