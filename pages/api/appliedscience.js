import dbConnect from "../../components/connection/database";
import AppliedScienceModel from "../../components/models/appliedscience";

export default async function (req, res) {
  var method = req.method;

  try {
    await dbConnect();
  } catch (error) {
    console.log("error connecting to database", error);
  }
  if (method === "POST") {
    try {
      let architect = await AppliedScienceModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: architect,
      });
    } catch (error) {
      console.log(
        "error has occure whaen creating or posing into accounting document",
        error
      );
    }
  }

  if (method === "GET") {
    try {
      let architect = await AppliedScienceModel.find({}).limit(10);
      architect = JSON.parse(JSON.stringify(architect));

      res.status(200).send(architect);
      res.end();
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
