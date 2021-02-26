import mongoose from "mongoose";

const BANKINGModel = new mongoose.Schema({
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

export default mongoose.models.BANKINGs ||
  mongoose.model("BANKINGs", BANKINGModel);
