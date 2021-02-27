import mongoose from "mongoose";

const QUANTITYSURVEYModel = new mongoose.Schema({
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

export default mongoose.models.QUANTITYSURVEY ||
  mongoose.model("QUANTITYSURVEY", QUANTITYSURVEYModel);
