import mongoose from "mongoose";

const MICROBIOLOGYModel = new mongoose.Schema({
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

export default mongoose.models.MICROBIOLOGY ||
  mongoose.model("MICROBIOLOGY", MICROBIOLOGYModel);
