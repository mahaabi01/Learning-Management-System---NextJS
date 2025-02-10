import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  //which platform using for login
  providers: [
    GoogleProvider({
      //clientId and clientSecret
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  //secret-key for self - (session management)
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }