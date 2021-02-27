import dbConnect from "../../components/connection/database";
import PUBLICHEALTHModel from "../../components/models/PUBLICHEALTH";

export default async function (req, res) {
  var method = req.method;
  let page = req.query.page;
  page = parseInt(page);
  console.log(page);
  try {
    await dbConnect();
  } catch (error) {
    console.log("error connecting to database", error);
  }
  if (method === "POST") {
    try {
      let business = await PUBLICHEALTHModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: business,
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
      let bussines = await PUBLICHEALTHModel.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
      bussines = await JSON.parse(JSON.stringify(bussines));

      res.status(200).send(bussines);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
