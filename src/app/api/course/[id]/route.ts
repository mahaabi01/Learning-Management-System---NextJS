import dbConnect from "@/database/connection"
import { createCourse, deleteCourse, fetchCourse, fetchCourses } from "../course.controller"


export async function POST(req:Request){
  return createCourse(req)
}

export async function GET(){
  return fetchCourses()
}
// export async function GET(req:Request, {params}: {params: {id : string}}){
//   await dbConnect()
//   const {id} = await params
//   return fetchCourse(id) 
// }

export async function DELETE(req:Request, {params}: {params: {id: string}}){
  await dbConnect()

  const {id} = await params
  return deleteCourse(id)
}