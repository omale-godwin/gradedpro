import dbConnect from '../../components/connection/database';
import AccountingModel from '../../components/models/accounting';

export default async function (req, res){
     var method = req.method;
   
        try {
            await dbConnect()
        } catch (error) {
            console.log('error connecting to database', error)
        }
        if(method === 'POST'){
            try {
                let newaccounting = await AccountingModel.create(req.body);
                res.status(200).json({msg: "successfully deposite to the database", payload: newaccounting});
            } catch (error) {
                console.log("error has occure whaen creating or posing into accounting document", error)
            }

    }

    if(method === 'GET'){
        try {
          let getAccounting = await AccountingModel.find({}).limit(3);
          getAccounting = JSON.parse(JSON.stringify(getAccounting));
          return getAccounting;
          res.status(200).json({msg: "successfully getting data from the database", payload: getAccounting});
        } catch (error) {
            console.log("error has occure whaen getting data from accounting document", error)
        }
        res.end();
    }
}