import dbConnect from "../../components/connection/database";
import BIOLOGYModel from "../../components/models/BIOLOGY";

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
      let biology = await BIOLOGYModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: biology,
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
      let biology = await BIOLOGYModel.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
      biology = await JSON.parse(JSON.stringify(biology));

      res.status(200).send(biology);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
