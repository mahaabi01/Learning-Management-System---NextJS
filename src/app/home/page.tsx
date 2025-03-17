// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";
// import Image from "next/image";

// function Home() {
//   const { data: session, status } = useSession();
//   console.log("Session", session)

//   if (status === "loading") {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
//       </div>
//     );
//   }

//   if (session) {
//     return (
//       <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
//           {session.user?.image && (
//             <Image
//               src={session.user.image}
//               alt="Profile Picture"
//               width={80}
//               height={80}
//               className="rounded-full mx-auto shadow-md"
//             />
//           )}
//           <h1 className="text-2xl font-bold text-blue-600 mt-4">
//             Welcome, {session.user?.name}
//           </h1>
//           <h3 className="text-gray-600 text-md mt-2">
//             Email: {session.user?.email}
//           </h3>
//           <button
//             onClick={() => signOut()}
//             className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-lg transition duration-200"
//           >
//             Sign Out
//           </button>
//         </div>
//       </div>
//       </>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-semibold text-gray-800">Not Logged In</h1>
//       <button
//         onClick={() => signIn("google")}
//         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg transition duration-200"
//       >
//         Sign in With Google
//       </button>
//     </div>
//   );
// }

// export default Home;


"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"
function Home(){
  //  const {data:session} =  useSession() // useSelector() --> select * from users
   const {data: session} =  useSession() // useSelector() --> select * from users
   console.log(session, "SESSION")
   if(session){
    return(
      <>
      <Image src={session.user?.image || "mero-profile.png"} alt="User Image" width={80} height={80} />
      
      <h1>Welcome, {session.user?.name}</h1>
      <h3>{session.user?.email}</h3>
      <button onClick={()=>signOut()} >Sign Out</button>
      </>
    )
   }
    return (
      <div>
        <h1>Not Logged In </h1>
        <button onClick={()=>signIn("google")}>Sign in With Google</button>
      </div>

    )
}


export default Home