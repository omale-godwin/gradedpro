import mongoose from "mongoose";

const NURSINGModel = new mongoose.Schema({
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

export default mongoose.models.NURSING ||
  mongoose.model("NURSING", NURSINGModel);
