
// this code add the role
declare module "next-auth"{
  interface Session{
    user: {
      role: string,
      id: string,
      email: string,
      image: string
    }
  }
}