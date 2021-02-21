import mongoose from "mongoose";

const AccountingModel = new mongoose.Schema({
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

export default mongoose.models.accountings ||
  mongoose.model("accountings", AccountingModel);
