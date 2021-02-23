import dbConnect from "../../components/connection/database";
import AccountingModel from "../../components/models/accounting";

export default async function (req, res) {
  var method = req.method;
  const page = req.page;
  const size = 10;

  try {
    await dbConnect();
  } catch (error) {
    console.log("error connecting to database", error);
  }

  if (method === "POST") {
    try {
      let accounts = await AccountingModel.create(req.body);
      res.status(200).json({
        msg: "successfully deposite to the database",
        payload: accounts,
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
      let accounts = await AccountingModel.find({}).limit(5);
      accounts = await JSON.parse(JSON.stringify(accounts));

      res.status(200).send(accounts);
    } catch (error) {
      console.log(
        "error has occure whaen getting data from accounting document",
        error
      );
    }
    res.end();
  }
}
