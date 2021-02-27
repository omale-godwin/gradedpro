import mongoose from "mongoose";

const PURCHASINGModel = new mongoose.Schema({
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

export default mongoose.models.PURCHASING ||
  mongoose.model("PURCHASING", PURCHASINGModel);
