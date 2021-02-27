import mongoose from "mongoose";

const URBANModel = new mongoose.Schema({
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

export default mongoose.models.URBAN || mongoose.model("URBAN", URBANModel);
