import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Role } from "@/database/models/user.schema"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"



//check if user is logged in and check if user is admin or not
const authMiddleware = async (req: NextRequest) => {
  //check if user log in or not and user is admin or not - checking logic - if there is user session then the user is logged in otherwise user is not logged in
  const session = await getServerSession(authOptions)
  if(!session || session.user.role !== Role.Admin){
    return Response.json({
      message: "You don't have permission to perform this action."
    }, {
      status: 401
    })
  }
  return NextResponse.next()
}

export const checkLoggedInorNotMiddleware = async (req: NextRequest) => {
  //check if user log in or not - checking logic - if there is user session then the user is logged in otherwise user is not logged in
  const session = await getServerSession(authOptions)
  if(!session){
    return Response.json({
      message: "You must logged in."
    }, {
      status: 401
    })
  }
  return NextResponse.next()
}

export default authMiddleware

