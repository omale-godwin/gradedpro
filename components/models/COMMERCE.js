import mongoose from "mongoose";

const COMMERCEModel = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },

    id: {
      type: Number,
    },
  },
  {
    collection: "User",
    versionKey: false, //here
  }
);

export default mongoose.models.COMMERCES ||
  mongoose.model("COMMERCES", COMMERCEModel);
