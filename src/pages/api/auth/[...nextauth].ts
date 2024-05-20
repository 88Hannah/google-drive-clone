import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { type AuthInteface } from "@/Interface"

// the below was the initial set up of the file
// authOptions have been created and semi set up in the @/server/auth file
// import { authOptions } from "@/server/auth";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider(({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as AuthInteface)),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions);
