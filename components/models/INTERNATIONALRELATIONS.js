import mongoose from "mongoose";

const INTERNATIONALRELATIONSModel = new mongoose.Schema({
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

export default mongoose.models.INTERNATIONALRELATIONS ||
  mongoose.model("INTERNATIONALRELATIONS", INTERNATIONALRELATIONSModel);
