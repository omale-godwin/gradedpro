import mongoose from "mongoose";

const BBBB = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.models.BBBB || mongoose.model("bbbbs", BBBB);
