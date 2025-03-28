import dbConnect from "@/database/connection";
import Lesson from "@/database/models/lesson.schema";

export async function createLesson(req:Request){
  try{
    await dbConnect()
    const {title, description, videoUrl, course} = await req.json()
    const data = await Lesson.create({
      title,
      description,
      videoUrl,
      course
    })
    return Response.json({
      message: "Lesson created !",
      data
    }, {status:201})
  }
  catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong"
    }, {status:500})
  }
}

export async function fetchLessons(req:Request){
  try{
    await dbConnect()
    const {searchParams} = new URL(req.url)
    const courseId = searchParams.get("courseId")

    console.log(courseId, "IUD")
    const data = await Lesson.find({
      course:courseId
    }).populate("course")
    if(data.length === 0){
      return Response.json({
        message: "no lessons found",
        data: []
      }, {status:404})
    }
    return Response.json({
      message:"lessons fetched !!",
      data
    }, {status: 200})
  }catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong."
    }, {status:500})
  }
}

export async function fetchLesson(id:string){
  try{
    await dbConnect()
    const data = await Lesson.findById(id)
    if(!data){
      return Response.json({
        message: "no lesson with that id found."
      }, {status:404})
    }return Response.json({
      message:"lessons fetched!!",
      data
    }, { status:200})
  }catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong"
    }, {status:500})
  }
}

export async function deleteLesson(id:string){
  try{
    await dbConnect()
    await Lesson.findByIdAndDelete(id)
    return Response.json({
      message: "lesson deleted !!",
    }, {status:200})
  }
  catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong."
    }, {status:500})
  }
}