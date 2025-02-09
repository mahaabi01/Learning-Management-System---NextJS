import mongoose from "mongoose";

//defining Schema class
const Schema = mongoose.Schema;

//creating new object from above class providing object which is the structure of table and assigning into variable
const userSchema = new Schema({
  //userName: String -- if no other attributes
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  googleId: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
