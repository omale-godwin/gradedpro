import mongoose from "mongoose";

const INDUSTRIALRELATIONSModel = new mongoose.Schema({
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

export default mongoose.models.INDUSTRIALRELATIONS ||
  mongoose.model("INDUSTRIALRELATIONS", INDUSTRIALRELATIONSModel);
