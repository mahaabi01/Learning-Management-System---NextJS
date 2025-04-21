"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[90%] sm:w-[400px]">
        {session ? (
          <>
            <Image
              src={session.user?.image || "/mero-profile.png"}
              alt="User Image"
              width={90}
              height={90}
              className="rounded-full mx-auto border-4 border-blue-500"
            />
            <h1 className="text-xl font-bold mt-4 text-gray-800">Welcome, {session.user?.name}</h1>
            <h3 className="text-gray-600">{session.user?.email}</h3>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => router.push("/my-courses")}
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
              >
                My Courses
              </button>
              <button
                onClick={() => router.push("/available-courses")}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Available Courses
              </button>
              <button
                onClick={() => router.push("/profile")}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
              >
                My Profile
              </button>
              <button
                onClick={() => signOut()}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-gray-800">Not Logged In</h1>
            <button
              onClick={() => signIn("google")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Sign in With Google
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
