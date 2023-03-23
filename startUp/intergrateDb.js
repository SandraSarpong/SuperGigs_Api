import mongoose from "mongoose";
import "dotenv/config";

export const setupDb = () => {
  mongoose
    .connect(`${process.env.DB}`)
    .then(() => console.log(`Connected to ${process.env.DB}`))
    .catch((err) => console.log("Could not connect to MongoDb..", err));
};
