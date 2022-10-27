import { app } from "./app";
import { connectMongo } from "./mongoose";

const port = 3000;

const start = async () => {
  await connectMongo();
  app.listen(port, () => {
    console.log("Server started at ", port);
  });
};

start();
