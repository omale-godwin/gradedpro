import mongoose from "mongoose";

const OFFICEModel = new mongoose.Schema({
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

export default mongoose.models.OFFICE || mongoose.model("OFFICE", OFFICEModel);
