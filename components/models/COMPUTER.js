import mongoose from "mongoose";

const COMPUTERModel = new mongoose.Schema({
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

export default mongoose.models.COMPUTERS ||
  mongoose.model("COMPUTERS", COMPUTERModel);
