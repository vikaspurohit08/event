import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/user", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    } as mongoose.ConnectOptions);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
};

export { connectMongo };
