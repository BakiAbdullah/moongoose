import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

let server: Server;
const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://bakiabdullah:todoapp@cluster0.uqgxsrk.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDb with Mongoose!");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
