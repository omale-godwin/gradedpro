import dbConnect from "../../components/connection/database";
import BBBB from "../../components/models/bbbb";

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
      let architect = await BBBB.create(req.body);
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
      let applied = await BBBB.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
      applied = await JSON.parse(JSON.stringify(applied));

      res.status(200).send(applied);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
