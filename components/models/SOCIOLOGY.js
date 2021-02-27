import mongoose from "mongoose";

const SOCIOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.SOCIOLOGYS ||
  mongoose.model("SOCIOLOGYS", SOCIOLOGYModel);
