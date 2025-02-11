import dbConnect from "@/database/connection";
import Category from "@/database/models/category.schema";
import authMiddleware from "@/middleware/auth.middleware";
import { NextRequest } from "next/server";

export async function createCategory(req: Request) {
  try {
    const response = authMiddleware(req as NextRequest)
    await dbConnect();
    const { name, description } = await req.json(); // req.body in node.js

    //check if already exist
    const existingCategory = await Category.findOne({ name: name });
    if (existingCategory) {
      return Response.json(
        {
          message: "Category already exist with tha name.",
        },
        { status: 400 }
      );
    }
    await Category.create({
      name,
      description,
    });
    return Response.json(
      {
        message: "Category added succesfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Something went wrong."
    },{status:500})
  }
}


export async function getCategories(){
  try{
    await dbConnect()
  const categories = await Category.find()
  if(categories.length === 0){
    return Response.json({
      message: "No categories found."
    },{
      status: 404 
    })
  }
  return Response.json({
    data: categories,
    message: "Category fetched succesfully !"
  },{
    status: 201
  })
  }catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong!"
    }, {status: 500})
  }
}