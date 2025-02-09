import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS;


//this practice of connecting database is bad way as there is problem like for each request the database is connected each time which is not a expected behaviour so we follow alternate database connection method.
if (!MONGODB_CS) {
  throw new Error("You must provide Mongodb connection string.");
}
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_CS);
    console.log("Database connected successfully. 🙂");
  } catch (error) {
    console.log("Error connecting...😒😒", error);
  }
};

export default dbConnect;
