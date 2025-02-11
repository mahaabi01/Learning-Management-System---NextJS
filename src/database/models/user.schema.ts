import mongoose from "mongoose";

//defining Schema class
const Schema = mongoose.Schema;

//enum user role
export enum Role {
  Student = "student",
  Admin = "admin",
}

//interface user
export interface IUser extends Document {
  username: string;
  profileImage: string;
  email: string;
  role: Role;
}

//creating new object from above class providing object which is the structure of table and assigning into variable
const userSchema = new Schema<IUser>({
  //userName: String -- if no other attributes
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [Role.Student, Role.Admin],
    default: Role.Student,
  },
  profileImage: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
