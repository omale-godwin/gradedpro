import dbConnect from "../../components/connection/database";
import Architect from "../../components/models/architect";

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
      let architect = await Architect.create(req.body);
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
      let architect = await Architect.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
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
