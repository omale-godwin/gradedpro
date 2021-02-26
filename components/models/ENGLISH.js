import mongoose from "mongoose";

const ENGLISHModel = new mongoose.Schema({
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

export default mongoose.models.ENGLISH ||
  mongoose.model("ENGLISH", ENGLISHModel);
