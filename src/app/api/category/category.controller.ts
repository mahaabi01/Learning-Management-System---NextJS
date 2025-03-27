import dbConnect from "@/database/connection";
import Category from "@/database/models/category.schema";
import authMiddleware from "../../../../middleware/auth.middleware";
import { NextRequest } from "next/server";

export async function createCategory(req: Request) {
  try {
    await dbConnect();
    const response = await authMiddleware(req as NextRequest)
    if(response.status === 401){
      return response;
    }

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
    const category = await Category.create({
      name,
      description,
    });
    return Response.json(
      {
        message: "Category added succesfully.",
        data: category
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
    message: "Category fetched succesfully !",
    data: categories
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

//delete Category
export async function deleteCategory(req:Request, id: string){
  try{
    await dbConnect()
    const response = await authMiddleware(req as NextRequest)
    if(response.status === 401){
      return response;
    }
    const deleted = await Category.findByIdAndDelete(id)
    if(!deleted){
      return Response.json({
        message: "Something went wrong."
      },{ status: 400})
    }
    return Response.json({
      message: "category deleted succesfully."
    }, { status: 200})
  }catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong."
    }, { status: 500})
  }
}

//edit Category 
export async function editCategory(req:Request, id: string){
  try{
    await dbConnect()
    const response = await authMiddleware(req as NextRequest)
    if(response.status === 401){
      return response;
    }

    const {name,description} = await req.json()
    //check already existing data
    const newEditCategory = await Category.findByIdAndUpdate(id, {
      name: name,
      description: description
    },{new:true})
    return Response.json({
      message: "Category edit successfully !",
      data: newEditCategory
    }, {
      status: 201
    })
  }catch(error){
    console.log(error)
    return Response.json({
      message: "Something went wrong!!"
    },{status:500})
  }
}