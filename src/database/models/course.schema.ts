import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: String,
  courseDescription: String,
  coursePrice: Number,
  courseDuration: String,
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
