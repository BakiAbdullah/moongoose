import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

let server: Server;
const PORT = 5000;

async function main() {
  try {
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

main()

// mongodb+srv://bakiabdullah:bakiabdullah@cluster0.uqgxsrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
