import mongoose from "mongoose";

const ENVIRONMENTALModel = new mongoose.Schema({
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

export default mongoose.models.ENVIRONMENTAL ||
  mongoose.model("ENVIRONMENTAL", ENVIRONMENTALModel);
