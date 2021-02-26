import dbConnect from "../../components/connection/database";
import ENTREPRENEURSHIPModel from "../../components/models/ENTREPRENEURSHIP";

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
      let build = await ENTREPRENEURSHIPModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: build,
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
      let build = await ENTREPRENEURSHIPModel.find({
        id: { $gt: 10 * (page - 1) },
      }).limit(20);
      build = await JSON.parse(JSON.stringify(build));

      res.status(200).send(build);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
