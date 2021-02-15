import mongoose, { Connection, connections } from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect('mongodb+srv://graded58036921:graded58036921@gradedproject.ngdz9.mongodb.net/gradeddatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
