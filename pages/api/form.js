import dbConnect from "../../components/connection/database";

import formSubmitModel from "../../components/models/formsubmit";

export default async (req, res) => {
  var method = req.method;
  try {
    await dbConnect();
  } catch (error) {
    console.log("error connecting to the database", error);
  }

  if (method === "POST") {
    try {
      const formdata = await formSubmitModel.create(req.body);
      res.status(200).send("success");
    } catch (error) {
      console.log("error posing data to database", error);
    }
  }
};
