import dbConnect from "../../components/connection/database";
import BIOCHEMISTRYModel from "../../components/models/BIOCHEMISTRY";

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
      let biochemist = await BIOCHEMISTRYModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: biochemist,
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
      let biochemist = await BIOCHEMISTRYModel.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
      biochemist = await JSON.parse(JSON.stringify(biochemist));

      res.status(200).send(biochemist);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
