import mongoose from "mongoose";

const connection = async () => {
  const url = process.env.MONGODB_URI;
  try {
    const con = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

export default connection;
