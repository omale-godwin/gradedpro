import mongoose from "mongoose";

const Crimnologymodel = new mongoose.Schema({
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

export default mongoose.models.Crimnologys ||
  mongoose.model("Crimnologys", Crimnologymodel);
