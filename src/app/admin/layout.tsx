"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation" 
import { useEffect } from "react"

function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
  const {data:session, status} = useSession()
  // console.log("Status:", status)
  console.log("Session: ", session)
  useEffect(()=>{
    console.log("STATUS : ", status)
    if(status === "loading") return;
    if(!session || session.user?.role !== "admin"){
      redirect("/")
    }
  },[session,status])
  if(status === "loading" || status==="unauthenticated") return <p>Loading...</p>
  return(
    <Dashboard>
      {children}
    </Dashboard>
  )
}

export default AdminLayout