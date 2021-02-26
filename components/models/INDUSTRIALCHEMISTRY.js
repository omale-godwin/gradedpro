import mongoose from "mongoose";

const INDUSTRIALCHEMISTRYModel = new mongoose.Schema({
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

export default mongoose.models.INDUSTRIALCHEMISTRY ||
  mongoose.model("INDUSTRIALCHEMISTRY", INDUSTRIALCHEMISTRYModel);
