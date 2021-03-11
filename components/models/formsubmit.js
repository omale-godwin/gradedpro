import mongoose from "mongoose";

const formSubmitModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  department: {
    type: String,
  },
  message: {
    type: String,
  },
});
export default mongoose.models.formsubmitiondata ||
  mongoose.model("formsubmitiondata", formSubmitModel);
