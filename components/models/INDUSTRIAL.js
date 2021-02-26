import mongoose from "mongoose";

const INDUSTRIALModel = new mongoose.Schema({
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

export default mongoose.models.INDUSTRIAL ||
  mongoose.model("INDUSTRIAL", INDUSTRIALModel);
