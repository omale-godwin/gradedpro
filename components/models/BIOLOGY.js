import mongoose from "mongoose";

const BIOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.BIOLOGYS ||
  mongoose.model("BIOLOGYS", BIOLOGYModel);
