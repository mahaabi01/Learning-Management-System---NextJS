import mongoose, { Schema } from "mongoose";
import { title } from "process";

interface Icourse extends Document{
  title: string,
  description: string,
  price: number,
  duration: string,
  //link category with category table
  category: mongoose.Types.ObjectId //reference type
  //link lesson with lesson table
  lessons: mongoose.Types.ObjectId[] //list of reference type
  createdAt: Date
}

const courseSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson"
    }
  ],
  createdAt : {
    type: Date,
    default: Date.now()
  }
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;
