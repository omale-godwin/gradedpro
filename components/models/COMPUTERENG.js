import mongoose from "mongoose";

const COMPUTERENGModel = new mongoose.Schema({
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

export default mongoose.models.COMPUTERENGS ||
  mongoose.model("COMPUTERENGS", COMPUTERENGModel);
