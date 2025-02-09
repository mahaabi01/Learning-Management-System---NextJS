import dbConnect from "@/database/connection";
import Course from "@/database/models/course.schema";
import User from "@/database/models/user.schema";

export async function GET() {
  dbConnect();

  // adding data manually for checking data entry
  await User.create({
    email: "mahaabi01@gmail.com",
    googleId: "abilashmaharjan",
    profileImage: "nfenfsnef",
    userName: "mahaabi01"
  })

  await Course.create({
    courseName: "NextJS",
    courseDescription: "NextJS is a React-based JavaScript framework for building server-rendered, SEO-friendly websites and web applications. It provides developers with a complete toolset for creating rich user experiences with minimal setup and configuration.",
    courseDuration: "30 hours",
    coursePrice: 999
  })

  return Response.json({
    message: "You hit API route."
  })
}