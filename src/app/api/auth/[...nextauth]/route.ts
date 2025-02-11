import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  //which platform using for login
  providers: [
    GoogleProvider({
      //clientId and clientSecret
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  //secret-key for self - (session management)
  secret: process.env.NEXTAUTH_SECRET,
  //modify signIn function
  callbacks: {
    async signIn({ user }): Promise<boolean> {
      try {
        await dbConnect();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            username: user.name,
            email: user.email,
            profileImage: user.image,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({session, user}){
      const data = await User.findById(user.id)
      session.user.role = data.role || "student"  // if role is not found then student is set
      return session
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
