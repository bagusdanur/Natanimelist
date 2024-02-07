import NextAuth from "next-auth"; 
import githubAuth from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
          })
    ],
    secret: process.env.NEXTAUTH_SECRET
}
const handler = NextAuth(authOption)

export {handler as GET, handler as POST}