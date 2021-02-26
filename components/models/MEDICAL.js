import mongoose from "mongoose";

const MEDICALModel = new mongoose.Schema({
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

export default mongoose.models.MEDICAL ||
  mongoose.model("MEDICAL", MEDICALModel);
