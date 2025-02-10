"use client"

import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"

function Home(){
  const {data:session} = useSession()
  if(session){
    return (
      <>
      <Image src={session.user?.image} alt="Your Image" width={80} height={80}
      />
      <h1>Welcome, {session.user?.name}</h1>
      <h3>Email: {session.user?.email}</h3>
      <button onClick={()=>signOut()}>Sign Out</button>
      </>
    )
  }
  return (
    <div>
      <h1>Not Logged In</h1>
      <button onClick={()=>signIn("google")}>Sign in With Google</button>
    </div>
  )
}

export default Home
